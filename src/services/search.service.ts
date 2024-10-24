import lunr, { Index, Query, tokenizer } from 'lunr'
import cron from 'node-cron'

import { readFileSync, writeFileSync } from 'fs'
import { join } from 'path'

import { CategoryPattern } from '../../typings/enum-types'

import { ensureDirExists, tempDir } from '../utils/files'
import { boxenErrorLogs, boxenLogs } from '../utils/loggers'
import { profile } from '../utils/profiles'

import quotes from '../quotes/quotes'

const task = cron.schedule('0 * * * *', () => {
    boxenLogs('Running task every 60 minutes on index search')

    storeIndex()
})

task.start()

const filePath: string = join(tempDir, profile.indexOptions.path)

const getIndexPath = (filePath: string): string => join(filePath, profile.indexOptions.name)

const storeIndex = (): Index => {
    try {
        ensureDirExists(filePath)

        const index = createIndex()
        const indexPath = getIndexPath(filePath)

        boxenLogs(`Storing index file by path=${indexPath}`)

        writeFileSync(indexPath, JSON.stringify(index))

        return index
    } catch (error) {
        boxenErrorLogs(`Failed to store index file, message=${error.message}`)
        throw error
    }
}

const restoreIndex = (): Index => {
    try {
        const indexPath = getIndexPath(filePath)

        boxenLogs(`Restoring index file from path=${indexPath}`)

        const index = readFileSync(indexPath, 'utf-8')

        return Index.load(JSON.parse(index))
    } catch (error) {
        boxenErrorLogs(`Failed to restore index file, message=${error.message}`)
        throw error
    }
}

const createIndex = (): Index => {
    return lunr(function () {
        this.field('quote')
        this.field('author')

        for (const category of Object.values(CategoryPattern)) {
            for (const [index, value] of quotes[category].entries()) {
                value.id = `${category}${profile.indexOptions.delimiter}${index}`
                this.add(value)
            }
        }
    })
}

export const idx = (): Index => {
    try {
        return restoreIndex()
    } catch {
        return storeIndex()
    }
}

export const getSearchResultSet = <T>(
    data: T[],
    index: Index,
    query: Index.QueryString
): (T | undefined)[] => {
    const results = getSearchResults(index, query)

    return results.map(result => {
        return data.find(item => result.ref === item['id'])
    })
}

export const getSearchResults = (index: Index, query: Index.QueryString): Index.Result[] => {
    return index.search(query)
}

export const getSearchResultsByTerm = (index: Index, term: string | object | object[]): Index.Result[] => {
    return index.query(q => {
        q.term(tokenizer(term), {
            wildcard: Query.wildcard.TRAILING,
            presence: Query.presence.REQUIRED,
        })
    })
}
