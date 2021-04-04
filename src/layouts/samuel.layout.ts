import { LayoutOptions, StyleOptions, TemplateOptions } from '../../typings/domain-types'
import { FontPattern, LayoutPattern } from '../../typings/enum-types'

import { capitalize } from '../utils/commons'

import { getFont } from '../fonts/fonts'

const samuelLayout: Record<LayoutPattern.samuel, LayoutOptions> = {
    samuel: {
        style: (options: StyleOptions) => {
            const {
                theme: { quoteColor, authorColor, bgColor },
                animation: { animation, keyframes },
            } = options

            const fontQuote = getFont(FontPattern.quando)
            const fontAuthor = getFont(FontPattern.quando)

            const borderColor = bgColor === 'fffefe' ? '757575' : bgColor
            return `
                    * {
                        position: relative;
                        z-index: 1;
                    }
                    @font-face{
                        font-family: ${fontQuote.fontFamily};
                        font-style: normal;
                        font-weight: normal;
                        src: url(data:font/woff2;charset=utf-8;base64,${fontQuote.fontSrc}) format('woff2');
                    }
                    @font-face{
                        font-family: ${fontAuthor.fontFamily};
                        font-style: normal;
                        font-weight: normal;
                        src: url(data:font/woff2;charset=utf-8;base64,${fontAuthor.fontSrc}) format('woff2');
                    }
                    .text {
                        font-family: ${fontQuote.fontFamily}, sans-serif;
                        font-style: italic;
                        color: #${quoteColor};
                    }
                    .category {
                        font-family: ${fontAuthor.fontFamily}, sans-serif;
                        font-weight: bold;
                        text-align: right;
                        margin: 3% 3% 0% 0%;
                        color: #${authorColor};
                    }
                    .quote {
                        display: flex;
                        justify-content: center;
                        margin: 1em;
                        width: auto;
                        ${animation};
                    }
                    ${keyframes}
                    blockquote {
                        border: solid 6px #${borderColor};
                        display: block;
                        margin: 0;
                        width: 70%;
                        font-size: 16px;
                        padding: 2em 2em;
                        background: #fff;
                        -webkit-mask-image: radial-gradient(circle 0 at 0 0, transparent 0, transparent, black);
                        mask-image: radial-gradient(circle 0 at 0 0, transparent 0, transparent, black);
                        position: relative;
                    }
                    blockquote::before {
                        background-color: #fff;
                        bottom: -10%;
                        content: "";
                        left: 0;
                        position: absolute;
                        right: 0;
                        top: -10%;
                        transform: rotate(-10deg) skew(5deg);
                    }
                    cite {
                        display: block;
                        font-style: italic;
                        text-align: right;
                    }
                    cite::before {
                        content: "- ";
                    }
                `
        },
        template: (options: TemplateOptions) => {
            return `
                    <div class="quote">
                        <blockquote>
                            <p class="text">${options.quote}</p>
                            <cite class="category">${capitalize(options.author)}</cite>
                        </blockquote>
                    </div>
                `
        },
    },
}

export default samuelLayout
