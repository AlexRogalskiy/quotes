import { LayoutOptions, StyleOptions, TemplateOptions } from '../../typings/domain-types'
import { FontPattern, LayoutPattern } from '../../typings/enum-types'

import { capitalize } from '../utils/commons'

import { getFont } from '../fonts/fonts'

const socratesLayout: Record<LayoutPattern.socrates, LayoutOptions> = {
    socrates: {
        style: (options: StyleOptions) => {
            const {
                theme: { quoteColor, authorColor, bgColor },
                animation: { animation, keyframes },
            } = options

            const fontText = getFont(FontPattern.paprika)
            const fontCategory = getFont(FontPattern.paprika)

            const borderColor = bgColor === 'fffefe' ? 'ccc' : bgColor
            return `
                    * {
                        position: relative;
                        z-index: 1;
                    }
                    @font-face{
                        font-family: ${fontText.fontFamily};
                        font-style: normal;
                        font-weight: normal;
                        src: url(data:font/woff2;charset=utf-8;base64,${fontText.fontSrc}) format('woff2');
                    }
                    @font-face{
                        font-family: ${fontCategory.fontFamily};
                        font-style: normal;
                        font-weight: normal;
                        src: url(data:font/woff2;charset=utf-8;base64,${fontCategory.fontSrc}) format('woff2');
                    }
                    .text {
                        font-family: ${fontText.fontFamily}, sans-serif;
                        font-style: italic;
                        color: #${quoteColor};
                    }
                    .category {
                        font-family: ${fontCategory.fontFamily}, sans-serif;
                        font-weight: bold;
                        text-align: right;
                        margin: 3% 3% 0% 0%;
                        color: #${authorColor};
                    }
                    .square-brackets-quote {
                        display: flex;
                        justify-content: center;
                        margin: 1em;
                        width: auto;
                        font-family: Arial,Helvetica,sans-serif;
                        ${animation};
                    }
                    ${keyframes}
                    .square-brackets-quote blockquote {
                        display: block;
                        margin: 0;
                        width: 70%;
                        padding: 2em 2em;
                        border: solid 1em #${borderColor};
                        background: #fff;
                        padding: 2em;
                        position: relative;
                        font-size: 15px;
                    }
                    .square-brackets-quote blockquote::before {
                        background-color: #fff;
                        bottom: -2em;
                        content: "";
                        left: 2em;
                        position: absolute;
                        right: 2em;
                        top: -1em;
                    }
                    .square-brackets-quote cite {
                        color: #757575;
                        display: block;
                        font-size: small;
                        font-style: normal;
                        text-align: right;
                        text-transform: uppercase;
                    }
                `
        },
        template: (options: TemplateOptions) => {
            return `
                    <div class="square-brackets-quote">
                        <blockquote>
                            <p class="text">${options.quote}</p>
                            <cite class="category">${capitalize(options.author)}</cite>
                        </blockquote>
                    </div>
                `
        },
    },
}

export default socratesLayout
