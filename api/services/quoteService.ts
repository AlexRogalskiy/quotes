import { TemplateOptions } from '../../typings/domain-types'
import { Optional } from '../../typings/standard-types'
import { CategoryPattern } from '../../typings/enum-types'

import { getSearchResults, idx } from './searchService'

import { randomElement, randomEnum } from '../utils/commons'

import { profile } from '../utils/profiles'
import { quotes } from '../quotes/quotes'

const getQuoteById = (value: string): TemplateOptions => {
    const data = value.split(profile.indexOptions.delimiter)

    return quotes[data[0]][data[1]]
}

export async function getQuoteByKeywords(keywords: string | string[]): Promise<Optional<TemplateOptions>> {
    const searchKeys = typeof keywords === 'string' ? keywords.split(',') : keywords
    const searchResults = getSearchResults(idx(), searchKeys.join(' '))
    const searchData = randomElement(searchResults)

    return searchData ? getQuoteById(searchData.ref) : null
}

export async function getQuoteByCategory(category: Optional<CategoryPattern>): Promise<TemplateOptions> {
    const data: TemplateOptions[] = category ? quotes[category] : quotes[randomEnum(CategoryPattern)]

    return randomElement(data)
}
