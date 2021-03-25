import { Optional } from '../../typings/standard-types'
import { FontPattern, LayoutPattern } from '../../typings/enum-types'
import { LayoutOptions, StyleOptions, TemplateOptions } from '../../typings/domain-types'

import { capitalize } from '../utils/commons'
import getPattern from '../patterns/patterns'

/**
 * LayoutRecord
 * @desc Type representing layout config options
 */
export type LayoutRecord = Record<LayoutPattern, LayoutOptions>

/**
 * Layout mappings
 * @desc Type representing supported layout mappings
 */
const layouts: Readonly<LayoutRecord> = {
    default: {
        style: (options: StyleOptions) => {
            const {
                theme: { quoteColor, bgColor, authorColor },
                animation: { animation, keyframes },
            } = options

            return `
                    * {
                        padding: 0;
                        margin: 0;
                        box-sizing: border-box;
                    }
                    .container {
                        font-family: Arial, Helvetica, sans-serif;
                        padding: 40px 20px;
                        width: 600px;
                        background-color: #${bgColor};
                        border: 1px solid rgba(0, 0, 0, 0.2);
                        border-radius: 5px;
                        ${animation};
                    }
                    ${keyframes}
                    .container h3 {
                        font-size: 19px;
                        margin-bottom: 5px;
                        font-weight: 500;
                        font-style: oblique;
                        color: #${quoteColor};
                    }
                    .container h3::before {
                        content: open-quote;
                        font-size: 25px;
                    }
                    .container h3::after {
                        content: close-quote;
                        vertical-align: sub;
                        font-size: 25px;
                    }
                    .container p {
                        /* float: right; */
                        /* margin-right: 20px; */
                        font-style: italic;
                        padding: 5px;
                        text-align: right;
                        color: #${authorColor};
                    }
                `
        },
        template: (options: TemplateOptions) => {
            return `
                    <div class="container">
                        <h3> ${options.quote} </h3>
                        <p>- ${options.author === 'Unknown' ? 'Anonymous' : options.author} </p>
                    </div>
                `
        },
    },
    socrates: {
        style: (options: StyleOptions) => {
            const {
                theme: { bgColor },
                animation: { animation, keyframes },
            } = options

            const borderColor = bgColor === 'fffefe' ? 'ccc' : bgColor
            return `
                    .square-brackets-quote {
                        display:inline-block;
                        font-family:Arial,Helvetica,sans-serif;
                        margin:1em;
                        width:600px;
                        ${animation};
                    }
                    ${keyframes}
                    .square-brackets-quote blockquote {
                        border:solid 1em #${borderColor};
                        background: #fff;
                        display:inline-block;
                        margin:0;
                        padding:1em;
                        position:relative;
                        font-size:15px;

                    }
                    .square-brackets-quote blockquote::before {
                        background-color: #fff;
                        bottom: -1em;
                        content: "";
                        left: 2em;
                        position: absolute;
                        right: 2em;
                        top: -1em;
                    }
                    .square-brackets-quote cite {
                        color:#757575;
                        display: block;
                        font-size:small;
                        font-style: normal;
                        text-align: right;
                        text-transform:uppercase;
                    }
                    * {
                        position: relative;
                        z-index: 1;
                    }
                `
        },
        template: (options: TemplateOptions) => {
            return `
                    <div class="square-brackets-quote">
                        <blockquote>
                            <p>${options.quote}</p>
                            <cite>${options.author === 'Unknown' ? 'Anonymous' : options.author}</cite>
                        </blockquote>
                    </div>
                `
        },
    },
    churchill: {
        style: (options: StyleOptions) => {
            const {
                theme: { quoteColor, bgColor, authorColor },
                animation: { animation, keyframes },
            } = options

            return `
                    #ct{
                        height:auto;
                        width:600px;
                        margin: 20px 50px 20px 10px;
                        text-align:center;
                        position:relative;
                        color:#${quoteColor};
                        padding:15px;

                        background: radial-gradient(circle at top left, transparent 15px, #${bgColor} 0) top left,
                          radial-gradient(circle at top right, transparent 15px, #${bgColor} 0) top right,
                          radial-gradient(circle at bottom right, transparent 15px, #${bgColor} 0) bottom right,
                          radial-gradient(circle at bottom left, transparent 15px, #${bgColor} 0) bottom left;
                        ${animation};
                        background-size: 51% 51%;
                        background-repeat: no-repeat;
                    }
                    ${keyframes}
                    span{
                        background:#${bgColor};
                        color:#${authorColor};
                        padding:0 10px;
                        font-size:20px;
                        position:relative;
                        top:-28px;
                    }
                    .corner{
                        height:30px;
                        width:30px;
                        border-radius:50%;
                        border:1px solid #fff;
                        transform:rotate(-45deg);
                        position:absolute;
                        background:#fff;
                    }
                    #left_top{
                        top:-16px;
                        left:-16px;
                        background: transparent;
                        border-color:transparent transparent #f1c40f transparent;
                    }
                    #right_top{
                        top:-16px;
                        right:-16px;
                        background: transparent;
                        border-color:transparent transparent transparent #f1c40f;
                    }
                    #left_bottom{
                        bottom:-16px;
                        left:-16px;
                        background: transparent;
                        border-color:transparent #f1c40f transparent transparent ;
                    }
                    #right_bottom{
                        bottom:-16px;
                        right:-16px;
                        background: transparent;
                        border-color:#f1c40f transparent transparent transparent;
                    }
                    #borderLeft {
                        border-left: 1px solid #f1c40f;
                        position: absolute;
                        top: 15px;
                        bottom: 15px;
                        left:-1px;
                    }
                    #borderTop {
                        border-top: 1px solid #f1c40f;
                        position: absolute;
                        right: 15px;
                        left: 15px;
                        top: -1px;
                    }
                    #borderRight {
                        border-right: 1px solid #f1c40f;
                        position: absolute;
                        top: 15px;
                        bottom: 15px;
                        right: -1px;
                    }
                    #borderBottom {
                        border-bottom: 1px solid #f1c40f;
                        position: absolute;
                        right: 15px;
                        left: 15px;
                        bottom: -1px;
                    }
                    p{
                        padding-top:0px;
                        font-size:17px
                    }
                `
        },
        template: (options: TemplateOptions) => {
            return `
                    <div id="ct">
                        <div class="corner" id="left_top"></div>
                        <div class="corner" id="left_bottom"></div>
                        <div class="corner" id="right_top"></div>
                        <div class="corner" id="right_bottom"></div>
                        <div id="borderLeft"></div>
                        <div id="borderRight"></div>
                        <div id="borderBottom"></div>
                        <div id="borderTop"></div>
                        <span>${options.author === 'Unknown' ? 'Anonymous' : options.author}</span>
                        <blockquote>
                            <p><i>${options.quote}</i></p>
                        </blockquote>
                    </div>
                `
        },
    },
    samuel: {
        style: (options: StyleOptions) => {
            const {
                theme: { bgColor },
                animation: { animation, keyframes },
            } = options

            const borderColor = bgColor === 'fffefe' ? '757575' : bgColor
            return `
                    * {
                        position: relative;
                        z-index: 1;
                    }
                    .quote {
                        display: inline-block;
                        margin: 1em;
                        width:600px;
                        ${animation};
                    }
                    ${keyframes}
                    blockquote {
                        border: solid 6px #${borderColor};
                        display: inline-block;
                        margin: 0;
                        font-size:16px;
                        padding: 1em;
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
                        transform: rotate(-15deg) skew(5deg);
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
                            <p>${options.quote}</p>
                            <cite>${options.author === 'Unknown' ? 'Anonymous' : options.author}</cite>
                        </blockquote>
                    </div>
                `
        },
    },
    fantasy: {
        style: (options: StyleOptions) => {
            const {
                font,
                theme: { fontColor, bgColor, pattern, opacity, colorPattern },
            } = options

            const fontRegular = font[FontPattern.monserrat_regular]
            const font700 = font[FontPattern.monserrat_700]

            const backgroundPattern = getPattern(pattern, String(opacity), String(colorPattern))

            return `
                    * {
                        padding: 0;
                        margin: 0;
                        box-sizing: border-box;
                    }
                    @font-face{
                        font-family: ${fontRegular.fontFamily};
                        font-style: normal;
                        font-weight: normal;
                        src: url(data:font/woff2;charset=utf-8;base64,${fontRegular.fontSrc}) format('woff2');
                    }
                    @font-face {
                        font-family: ${font700.fontFamily};
                        font-style: normal;
                        font-weight: bold;
                        src: url(data:font/woff2;charset=utf-8;base64,${font700.fontSrc}) format('woff2');
                    }
                    .font-monserratRegular {
                        font-family: ${fontRegular.fontFamily}, sans-serif;
                        font-style: italic;
                        color: ${fontColor};
                    }
                    .font-monserrat700 {
                        font-family: ${font700.fontFamily}, sans-serif;
                        font-weight: bold;
                        color: ${fontColor};
                        text-align: right;
                        margin: 3% 3% 0% 0%;
                    }
                    .subhead::first-letter {
                        font-size: 130%;
                        color: #903;
                        font-family: Georgia;
                    }
                    .quote-wrapper {
                        background: ${bgColor};
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
                        <p class="font-monserratRegular subhead">${options.quote}</p>
                        <div class="line"></div>
                        <h3 class="font-monserrat700">${capitalize(options.author)}</h3>
                    </div>
                </div>
                `
        },
    },
    zues: {
        style: (options: StyleOptions) => {
            const { animation, keyframes } = options.animation

            return `
                    .container{
                        background-color:#000;
                        width:550px;
                        height:auto;
                        padding:30px 20px 40px 40px;
                        ${animation};
                    }
                    ${keyframes}
                    .quote4{
                        background-color:#000;
                        color:#fff;
                        width:450px;
                        text-align:justify;
                        border-left:  thick double #C08552;
                        border-right:  thick double #C08552;
                        padding:40px 10px;
                        position:relative;
                        transform: skew(-.312rad);
                        height:auto;
                    }
                    .quote4::before, .quote4::after{
                        position:absolute;
                        font-size:105px;
                        font-family: 'Dosis', sans-serif;
                        background:#000;
                        display:block;
                        height:30px;
                        width:45px;
                        text-align:center;
                        color:#DAB49D;
                        left:0;
                        right:0;
                        margin:auto;
                        z-index:100;
                    }
                    .quote4::before{
                        content:"“";
                        top:-10px;
                        line-height:80px;
                        z-index:1;
                    }
                    .quote4::after{
                        content:"”";
                        bottom:-25px;
                        line-height: 70px;
                    }
                    .quote4 .first, .quote4 .txt{
                        width:90%;
                        margin:auto;
                        transform: skew(.312rad);
                    }
                    .quote4 .first{
                        margin-top:10px;
                        width:100%;
                        color: #DAB49D;
                        font-size:14px;
                        font-family: 'Dosis', sans-serif;
                        text-transform:uppercase;
                        letter-spacing:1px;
                    }
                    .quote4 .txt{
                        color:#F3E9DC;
                        font-size:16px;
                        font-family: 'Roboto Slab', serif;
                    }
                    .quote4 .from{
                        text-align:center;
                        margin-top:15px;
                        font-size:13px;
                        font-family: 'Exo', sans-serif;
                        color: #5E3023;
                    }
                    .quote4 .border::before, .quote4 .border::after{
                        content:"";
                        width:280px;
                        height:3px;
                        position:absolute;
                        display:block;
                        left:0;
                        right:0;
                        margin:auto;
                    }
                    .quote4 .border::after{
                        border-bottom: 2px solid #C08552;
                        bottom: 0px;
                    }
                    .quote4 .border::before{
                        border-top: 2px solid #C08552;
                        top:0px;
                    }
                `
        },
        template: (options: TemplateOptions) => {
            return `
                    <div class="container">
                        <div class="quote4">
                            <div class="border"></div>
                            <div class="txt">${options.quote}</div>
                            <div class="from">${options.author}</div>
                        </div>
                    </div>
                `
        },
    },
}

/**
 * Returns {@link LayoutOptions} by input {@link LayoutPattern} value
 * @param value initial input {@link LayoutPattern} to fetch by
 */
export const getLayout = (value: Optional<LayoutPattern>): LayoutOptions => {
    return value ? layouts[value] : layouts[LayoutPattern.default]
}
