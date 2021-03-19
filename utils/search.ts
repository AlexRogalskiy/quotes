import lunr from 'lunr'
import { readFileSync, writeFileSync } from 'fs'
import { join } from 'path'
import boxen from 'boxen'
import cron from 'node-cron'

import { CategoryPattern } from '../typings/types'
import { ensureDirExists, tempDir } from './commons'
import { profile } from './env'

import { quotes } from './quotes'

const task = cron.schedule('0 * * * *', () => {
    console.log(
        boxen('Running task every 60 minutes on index search', {
            padding: 1,
            margin: 1,
            borderStyle: 'single',
            borderColor: 'yellow',
        })
    )

    storeIndex()
})

task.start()

const filePath: string = join(tempDir, `${profile.indexOptions.path}`)

const getIndexPath = (filePath: string): string => join(filePath, `${profile.indexOptions.name}`)

const storeIndex = (): lunr.Index => {
    try {
        ensureDirExists(filePath)

        const index = createIndex()
        const indexPath = getIndexPath(filePath)

        console.log(
            boxen(`Storing index file by path=${indexPath}`, {
                padding: 1,
                margin: 1,
                borderStyle: 'single',
                borderColor: 'yellow',
            })
        )

        writeFileSync(indexPath, JSON.stringify(index))

        return index
    } catch (e) {
        console.error(
            boxen(`Failed to store index file, message=${e.message}`, {
                padding: 1,
                margin: 1,
                borderStyle: 'double',
                borderColor: 'red',
            })
        )
        throw e
    }
}

const restoreIndex = (): lunr.Index => {
    try {
        const indexPath = getIndexPath(filePath)

        console.log(
            boxen(`Restoring index file from path=${indexPath}`, {
                padding: 1,
                margin: 1,
                borderStyle: 'single',
                borderColor: 'yellow',
            })
        )

        const index = readFileSync(indexPath, 'utf-8')

        return lunr.Index.load(JSON.parse(index))
    } catch (e) {
        console.error(
            boxen(`Failed to restore index file, message=${e.message}`, {
                padding: 1,
                margin: 1,
                borderStyle: 'double',
                borderColor: 'red',
            })
        )
        throw e
    }
}

const createIndex = (): lunr.Index => {
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

export const idx = (): lunr.Index => {
    try {
        return restoreIndex()
    } catch (e) {
        return storeIndex()
    }
}

export const getSearchResultSet = <T>(
    data: T[],
    index: lunr.Index,
    query: lunr.Index.QueryString
): (T | undefined)[] => {
    const results = getSearchResults(index, query)

    return results.map(result => {
        return data.find(item => result.ref === item['id'])
    })
}

export const getSearchResults = (index: lunr.Index, query: lunr.Index.QueryString): lunr.Index.Result[] => {
    return index.search(query)
}

export const getSearchResultsByTerm = (
    index: lunr.Index,
    term: string | object | object[]
): lunr.Index.Result[] => {
    return index.query(q => {
        q.term(lunr.tokenizer(term), {
            wildcard: lunr.Query.wildcard.TRAILING,
            presence: lunr.Query.presence.REQUIRED,
        })
    })
}
