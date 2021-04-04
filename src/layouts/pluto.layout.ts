import { LayoutOptions, StyleOptions, TemplateOptions } from '../../typings/domain-types'
import { FontPattern, LayoutPattern } from '../../typings/enum-types'

import { getFont } from '../fonts/fonts'
import { getHeroPattern } from '../patterns/patterns'
import { capitalize } from '../utils/commons'

const plutoLayout: Record<LayoutPattern.pluto, LayoutOptions> = {
    pluto: {
        style: (options: StyleOptions) => {
            const { quoteColor, authorColor, bgColor, pattern, opacity, colorPattern } = options.theme

            const fontQuote = getFont(FontPattern.monserrat)
            const fontAuthor = getFont(FontPattern.monserrat_700)

            const backgroundPattern = getHeroPattern(pattern, String(opacity), String(colorPattern))

            return `
* {
                        padding: 0;
                        margin: 0;
                        box-sizing: border-box;
                    }
                    @font-face{
                        font-family: ${fontQuote.fontFamily};
                        font-style: normal;
                        font-weight: normal;
                        src: url(data:font/woff2;charset=utf-8;base64,${fontQuote.fontSrc}) format('woff2');
                    }
                    @font-face {
                        font-family: ${fontAuthor.fontFamily};
                        font-style: normal;
                        font-weight: bold;
                        src: url(data:font/woff2;charset=utf-8;base64,${fontAuthor.fontSrc}) format('woff2');
                    }
                    .quote {
                        font-family: ${fontQuote.fontFamily}, sans-serif;
                        font-style: italic;
                        color: #${quoteColor};
                    }
                    .author {
                        font-family: ${fontAuthor.fontFamily}, sans-serif;
                        font-weight: bold;
                        text-align: right;
                        margin: 3% 3% 0% 0%;
                        color: #${authorColor};
                    }
                    .subhead::first-letter {
                        font-size: 130%;
                        color: #903;
                        font-family: Georgia;
                    }
                    .quote-wrapper {
                        background: #${bgColor};
                        background-image: ${backgroundPattern};
                        margin: 0;
                        box-sizing: border-box;
                        display: flex;
                        flex-direction: row;
                        justify-content: center;
                        align-items: center;
                        padding: 5% 5%;
                    }
                    p {
                        font-size: 1.0rem;
                        margin: 10% 5%;
                    }
                    p.site {
                        margin-top: 10px;
                    }
                    .quote-wrapper-desc {
                        display: flex;
                        flex-direction: column;
                        width: 100%;
                    }
                    div.line {
                        width: 0%;
                        min-width: 100%;
                        max-width: 100%;
                        margin: 0 auto;
                        border: none;
                        border-bottom: 2px dotted rgba(0,0,0, 0.5);
                    }
                `
        },
        template: (options: TemplateOptions) => {
            return `
                    <div class="quote-wrapper">
                        <div class="quote-wrapper-desc">
                            <div class="line"></div>
                            <p class="quote subhead">${options.quote}</p>
                            <div class="line"></div>
                            <h3 class="author">${capitalize(options.author)}</h3>
                        </div>
                    </div>
                `
        },
    },
}

export default plutoLayout
