import { NowRequest, NowResponse, VercelResponse } from '@vercel/node'

import { AnimationPattern, CategoryPattern, LayoutPattern, ThemePattern } from '../../typings/enum-types'

import * as templateService from '../services/templateService'

import { toString } from '../utils/commons'

export async function templateController(req: NowRequest, res: NowResponse): Promise<VercelResponse> {
    try {
        const { theme, layout, animation, category, keywords, width, height } = req.query
        const imageOptions = { width: toString(width), height: toString(height) }

        const svgResponse = await templateService.templateRenderer({
            themePattern: ThemePattern[toString(theme)],
            layoutPattern: LayoutPattern[toString(layout)],
            animationPattern: AnimationPattern[toString(animation)],
            categoryPattern: CategoryPattern[toString(category)],
            keywords,
            imageOptions,
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
