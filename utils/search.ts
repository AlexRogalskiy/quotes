import lunr from 'lunr'
import { readFileSync, writeFileSync } from 'fs'
import { join } from 'path'

import quotes from './quotes'
import { ensureDirExists } from './commons'
import { CategoryPattern } from '../typings/types'
import { CONFIG } from './config'

export const createIndex = (): lunr.Index => {
    return lunr(function () {
        this.field('quote')
        this.field('author')

        for (const category of Object.values(CategoryPattern)) {
            for (const [index, value] of quotes[category].entries()) {
                value.id = `${category}${CONFIG.indexOptions.delim}${index}`
                this.add(value)
            }
        }
    })
}

const storeIndex = (): lunr.Index => {
    try {
        const index = createIndex()
        ensureDirExists(`${CONFIG.indexOptions.path}`)

        const indexPath = join(`${CONFIG.indexOptions.path}`, `${CONFIG.indexOptions.name}`)
        writeFileSync(indexPath, JSON.stringify(index))
        return index
    } catch (e) {
        console.error(`Failed to store index file, message=${e.message}`)
        throw e
    }
}

const restoreIndex = (): lunr.Index => {
    try {
        const indexPath = join(`${CONFIG.indexOptions.path}`, `${CONFIG.indexOptions.name}`)
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
