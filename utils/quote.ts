import { CategoryPattern, ColorOptions, ImageOptions, ParsedRequest } from '../typings/types'

import { getSearchResults, mergeProps, randomElement, randomEnum, toFormatString } from './commons'
import { css } from './getCss'
import quotes from './quotes'
import { CONFIG } from './config'

type QuoteData = {
    quote: string
    author: string
}

export async function quoteRenderer(parsedRequest: ParsedRequest): Promise<string> {
    const { category, keywords, width, height, ...rest } = parsedRequest

    const colorOptions: ColorOptions = mergeProps(CONFIG.colorOptions, rest)
    const imageOptions: ImageOptions = mergeProps(CONFIG.imageOptions, { width, height })

    console.log(
        `
        >>> Generating quote with parameters:
        category=${category},
        colorOptions=${toFormatString(colorOptions)}
        imageOptions=${toFormatString(imageOptions)}
        `
    )

    const quoteData: QuoteData | null = keywords ? getQuoteByKeywords(keywords) : getQuoteByCategory(category)

    return quoteData
        ? `
    <svg
        width="${imageOptions.width}"
        height="${imageOptions.height}"
        xmlns="http://www.w3.org/2000/svg">
        <foreignObject x="0" y="0" width="${imageOptions.width}" height="${imageOptions.height}">
            <div xmlns="http://www.w3.org/1999/xhtml">
              <div class="quote-wrapper">
                <div class="quote-wrapper-desc">
                  <div class="line"></div>
                  <p class="font-monserratRegular">${quoteData.quote}</p>
                  <div class="line"></div>
                  <h3 class="font-monserrat700">${quoteData.author}</h3>
                </div>
              </div>
            </div>
        </foreignObject>
        <style>${css(colorOptions)}</style>
      </svg>
  `
        : ''
}

const getQuoteByKeywords = (keywords: string | string[]): QuoteData | null => {
    const index = require('./search').index
    const query = typeof keywords === 'string' ? keywords.split(',') : keywords
    const results = getSearchResults(index, query.join(' '))
    const result = randomElement(results)

    if (result) {
        const data = result.ref.split('_')
        return quotes[data[0]][data[1]]
    }

    return null
}

const getQuoteByCategory = (category: string | undefined): QuoteData => {
    const data: QuoteData[] = category ? quotes[category] : quotes[randomEnum(CategoryPattern)]

    return randomElement(data)
}
