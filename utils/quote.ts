import { CategoryPattern, ParsedRequest } from '../typings/types'
import { css } from './getCss'
import { isBlankString, randomElement, randomEnum } from './commons'
import * as quoteFromCategory from '../data/quotes.json'

export async function quoteRenderer(parsedRequest: ParsedRequest) {
  const {
    category,
    width,
    height,
    backgroundColor,
    pattern,
    colorPattern,
    fontColor,
    opacity
  } = parsedRequest

  const quoteCategory = isBlankString(category)
    ? quoteFromCategory[randomEnum(CategoryPattern)]
    : quoteFromCategory[category]
  const quoteData = randomElement(quoteCategory)

  return `
    <svg
        width="${width}"
        height="${height}"
        xmlns="http://www.w3.org/2000/svg">
        <foreignObject x="0" y="0" width="${width}" height="${height}">
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
        <style>${css({backgroundColor, pattern, opacity, colorPattern, fontColor})}</style>
      </svg>
  `
}
