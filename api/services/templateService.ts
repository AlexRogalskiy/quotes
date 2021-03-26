import { Optional } from '../../typings/standard-types'
import {
    AnimationOptions,
    FontOptions,
    ImageOptions,
    LayoutOptions,
    ParsedRequestData,
    TemplateData,
    TemplateOptions,
    ThemeOptions,
} from '../../typings/domain-types'

import { mergeProps } from '../utils/commons'
import { serialize } from '../utils/serializers'
import { getTheme } from '../themes/themes'
import { getLayout } from '../layouts/layouts'
import { getFont } from '../fonts/fonts'
import { getAnimation } from '../animations/animations'
import { getSvgTemplate } from '../models/template'

import * as quoteService from './quoteService'

import { profile } from '../utils/profiles'
import { boxenLogs } from '../utils/loggers'

export async function templateRenderer(requestData: ParsedRequestData): Promise<string> {
    const {
        fontPattern,
        themePattern,
        animationPattern,
        layoutPattern,
        categoryPattern,
        keywords,
        imageOptions,
        themeOptions,
    } = requestData

    const layout = mergeProps<LayoutOptions>(profile.layoutOptions, getLayout(layoutPattern))
    const font = mergeProps<FontOptions>(profile.styleOptions?.font, getFont(fontPattern))
    const theme = mergeProps<ThemeOptions>(profile.styleOptions?.theme, getTheme(themePattern), themeOptions)
    const animation = mergeProps<AnimationOptions>(
        profile.styleOptions?.animation,
        getAnimation(animationPattern)
    )
    const image = mergeProps<ImageOptions>(profile.imageOptions, imageOptions)

    const template: Optional<TemplateOptions> = keywords
        ? await quoteService.getQuoteByKeywords(keywords)
        : await quoteService.getQuoteByCategory(categoryPattern)

    const templateData: TemplateData = {
        layout,
        style: { font, theme, animation },
        image,
        template,
    }

    boxenLogs(
        `
               Generating image view with parameters:
               category=${categoryPattern},
               keywords=${keywords},
               layout=${layout},
               template data=${serialize(templateData)}
           `
    )

    return template ? await getSvgTemplate(templateData) : ''
}
