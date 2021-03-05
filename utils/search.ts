import lunr from 'lunr'
import { readFileSync, writeFileSync } from 'fs'
import { join } from 'path'

import quotes from './quotes'

import { CategoryPattern, QuoteData } from '../typings/types'
import { ensureDirExists, tempDir } from './commons'
import { profile } from './env'

export const createIndex = (): lunr.Index => {
    return lunr(function () {
        this.field('quote')
        this.field('author')

        for (const category of Object.values(CategoryPattern)) {
            for (const [index, value] of (quotes[category] as QuoteData[]).entries()) {
                value.id = `${category}${profile.indexOptions.delimiter}${index}`
                this.add(value)
            }
        }
    })
}

const filePath: string = join(tempDir, `${profile.indexOptions.path}`)

const getIndexPath = (filePath: string): string => join(filePath, `${profile.indexOptions.name}`)

const storeIndex = (): lunr.Index => {
    try {
        ensureDirExists(filePath)

        const index = createIndex()
        const indexPath = getIndexPath(filePath)
        console.log(`Storing index file by path=${indexPath}`)

        writeFileSync(indexPath, JSON.stringify(index))

        return index
    } catch (e) {
        console.error(`Failed to store index file, message=${e.message}`)
        throw e
    }
}

const restoreIndex = (): lunr.Index => {
    try {
        const indexPath = getIndexPath(filePath)
        console.log(`Restoring index file from path=${indexPath}`)

        const index = readFileSync(indexPath, 'utf-8')

        return lunr.Index.load(JSON.parse(index))
    } catch (e) {
        console.error(`Failed to restore index file, message=${e.message}`)
        throw e
    }
}

const getIndex = (): lunr.Index => {
    try {
        return restoreIndex()
    } catch (e) {
        return storeIndex()
    }
}

export const idx = getIndex()
