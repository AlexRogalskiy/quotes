import { CategoryPattern, ColorOptions, ImageOptions, ParsedRequest } from '../typings/types'
import { css } from './getCss'
import { mergeProps, randomElement, randomEnum } from './commons'
import * as quoteFromCategory from '../data/quotes.json'
import { CONFIG } from './config'

type QuoteData = {
    quote: string
    author: string
}

export async function quoteRenderer(parsedRequest: ParsedRequest): Promise<string> {
    const {
        category,
        width,
        height,
        ...rest
    } = parsedRequest

    const colorOptions: ColorOptions = mergeProps(CONFIG.colorOptions, rest)
    const imageOptions: ImageOptions = mergeProps(CONFIG.imageOptions, {width, height})

    const quotes: QuoteData[] = category === undefined
        ? quoteFromCategory[randomEnum(CategoryPattern)]
        : quoteFromCategory[category]
    const quoteData: QuoteData = randomElement(quotes)

    return `
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
}
