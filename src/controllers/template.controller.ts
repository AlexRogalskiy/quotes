import { VercelRequest, VercelResponse } from '@vercel/node'

import {
    AnimationPattern,
    CategoryPattern,
    HeroPattern,
    LayoutPattern,
    ThemePattern,
} from '../../typings/enum-types'

import * as templateService from '../services/template.service'

import { toInt, toString } from '../utils/commons'

export async function templateController(req: VercelRequest, res: VercelResponse): Promise<VercelResponse> {
    try {
        const { theme, layout, animation, category, keywords, width, height, ...rest } = req.query
        const { quoteColor, authorColor, bgColor, colorPattern, opacity, pattern } = rest

        const imageOptions = { width: toString(width), height: toString(height) }
        const themeOptions = {
            quoteColor: toString(quoteColor),
            authorColor: toString(authorColor),
            bgColor: toString(bgColor),
            colorPattern: toString(colorPattern),
            opacity: toInt(toString(opacity)),
            pattern: HeroPattern[toString(pattern)],
        }

        const svgResponse = await templateService.templateRenderer({
            themePattern: ThemePattern[toString(theme)],
            layoutPattern: LayoutPattern[toString(layout)],
            animationPattern: AnimationPattern[toString(animation)],
            categoryPattern: CategoryPattern[toString(category)],
            keywords,
            imageOptions,
            themeOptions,
        })

        res.setHeader('Cache-Control', 'no-cache,max-age=0,no-store,s-maxage=0,proxy-revalidate')
        res.setHeader('Pragma', 'no-cache')
        res.setHeader('Expires', '-1')
        res.setHeader('Content-type', 'image/svg+xml')
        res.setHeader('X-Powered-By', 'Vercel')

        return res.send(svgResponse)
    } catch (error) {
        return res.send({
            status: 'Error',
            name: error.name,
            message: error.message,
        })
    }
}
