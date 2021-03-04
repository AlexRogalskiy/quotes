import lunr from 'lunr'
import { readFileSync, writeFileSync } from 'fs'
import { join } from 'path'

import quotes from './quotes'
import { ensureDirExists } from './commons'
import { CategoryPattern, QuoteData } from '../typings/types'
import { profile } from './env'

export const createIndex = (): lunr.Index => {
    return lunr(function () {
        this.field('quote')
        this.field('author')

        for (const category of Object.values(CategoryPattern)) {
            for (const [index, value] of (quotes[category] as QuoteData[]).entries()) {
                value.id = `${category}${profile.indexOptions.delim}${index}`
                this.add(value)
            }
        }
    })
}

const storeIndex = (): lunr.Index => {
    try {
        const filePath = join(__dirname, '../', `${profile.indexOptions.path}`)
        ensureDirExists(filePath)

        const index = createIndex()
        const indexPath = join(filePath, `${profile.indexOptions.name}`)
        writeFileSync(indexPath, JSON.stringify(index))
        return index
    } catch (e) {
        console.error(`Failed to store index file, message=${e.message}`)
        throw e
    }
}

const restoreIndex = (): lunr.Index => {
    try {
        const filePath = join(__dirname, '../', `${profile.indexOptions.path}`)
        const indexPath = join(filePath, `${profile.indexOptions.name}`)
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
        console.error(`Failed to get index file, message=${e.message}`)
        return storeIndex()
    }
}

export const idx = getIndex()
