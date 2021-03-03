import lunr from 'lunr'

import quotes from './quotes'
import { CategoryPattern } from '../typings/types'

export const index = lunr(function () {
    this.field('quote')
    this.field('author')

    for (const category of Object.values(CategoryPattern)) {
        for (const [index, value] of quotes[category].entries()) {
            value.id = `${category}_${index}`
            this.add(value)
        }
    }
})
