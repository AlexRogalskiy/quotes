import boxen from 'boxen'

import { Optional } from '../../typings/standard-types'
import { ImageOptions, ParsedRequestData, StyleOptions, TemplateOptions } from '../../typings/domain-types'

import { mergeProps } from '../utils/commons'
import { serialize } from '../utils/serializers'
import { getTheme } from '../themes/themes'
import { getLayout } from '../layouts/layouts'
import { getFont } from '../fonts/fonts'
import { getAnimation } from '../animations/animations'
import { getSvgTemplate } from '../models/template'

import * as quoteService from './quoteService'

import { profile } from '../utils/profiles'

export async function templateRenderer(requestData: ParsedRequestData): Promise<string> {
    const {
        fontPattern,
        themePattern,
        animationPattern,
        layoutPattern,
        categoryPattern,
        keywords,
        imageOptions,
    } = requestData

    const layout = getLayout(layoutPattern)

    const font = getFont(fontPattern)
    const theme = getTheme(themePattern)
    const animation = getAnimation(animationPattern)

    const style: StyleOptions = { font, theme, animation }
    const image: ImageOptions = mergeProps(profile.imageOptions, imageOptions)

    const quote: Optional<TemplateOptions> = keywords
        ? await quoteService.getQuoteByKeywords(keywords)
        : await quoteService.getQuoteByCategory(categoryPattern)

    console.log(
        boxen(
            `
               Generating image view with parameters:
               category=${categoryPattern},
               keywords=${keywords},
               layout=${layout},
               style options=${serialize(style)},
               image options=${serialize(image)},
               quote options=${serialize(quote)}
           `,
            profile.outputOptions
        )
    )

    return quote ? await getSvgTemplate({ layout, style, image, quote }) : ''
}
