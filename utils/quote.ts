import gradient from 'gradient-string'
import randomColor from 'randomcolor'

import { Optional } from '../typings/standard-types'
import { CategoryPattern } from '../typings/enum-types'
import { ColorOptions, ImageOptions, ParsedRequestData, TemplateData } from '../typings/types'

import { getSearchResults, idx } from './search'
import { capitalize, delim, mergeProps, randomElement, randomEnum, toFormatString } from './commons'
import { css } from './getCss'
import { profile } from './env'

import { quotes } from './quotes'

export async function quoteRenderer(parsedRequest: ParsedRequestData): Promise<string> {
    const { category, keywords, width, height, ...rest } = parsedRequest

    const colorOptions: ColorOptions = mergeProps(profile.colorOptions, rest)
    const imageOptions: ImageOptions = mergeProps(profile.imageOptions, { width, height })

    console.log(
        `
        ${gradient(randomColor(), randomColor())(delim)}
        Generating quote with parameters:
        category=${category},
        keywords=${keywords},
        colorOptions=${toFormatString(colorOptions)}
        imageOptions=${toFormatString(imageOptions)}
        ${gradient(randomColor(), randomColor())(delim)}
        `
    )

    const quoteData: Optional<TemplateData> = keywords
        ? await getQuoteByKeywords(keywords)
        : await getQuoteByCategory(category)

    return getImageContent(quoteData, colorOptions, imageOptions)
}

const getImageContent = (
    quoteData: Optional<TemplateData>,
    colorOptions: ColorOptions,
    imageOptions: ImageOptions
): string => {
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
                  <p class="font-monserratRegular subhead">${quoteData.quote}</p>
                  <div class="line"></div>
                  <h3 class="font-monserrat700">${capitalize(quoteData.author)}</h3>
                </div>
              </div>
            </div>
        </foreignObject>
        <style>${css(colorOptions)}</style>
      </svg>
      `
        : ''
}

const getQuoteByKeywords = async (keywords: string | string[]): Promise<Optional<TemplateData>> => {
    const searchKeys = typeof keywords === 'string' ? keywords.split(',') : keywords
    const searchResults = getSearchResults(idx(), searchKeys.join(' '))
    const searchData = randomElement(searchResults)

    return searchData ? getQuoteById(searchData.ref) : null
}

const getQuoteById = (value: string): TemplateData => {
    const data = value.split(profile.indexOptions.delimiter)

    return quotes[data[0]][data[1]]
}

const getQuoteByCategory = async (category: Optional<CategoryPattern>): Promise<TemplateData> => {
    const data: TemplateData[] = category ? quotes[category] : quotes[randomEnum(CategoryPattern)]

    return randomElement(data)
}
