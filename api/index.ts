import { NowRequest, NowResponse, VercelResponse } from '@vercel/node'

import { quoteRenderer } from '../utils/quote'
import { toString } from '../utils/commons'
import { CategoryPattern, HeroPattern } from '../typings/types'

export default async function render(req: NowRequest, res: NowResponse): Promise<VercelResponse> {
    try {
        const {
            category,
            width,
            height,
            backgroundColor,
            fontColor,
            pattern,
            opacity,
            colorPattern
        } = req.query

        const quote = await quoteRenderer({
            category: (<any>CategoryPattern)[toString(category)],
            pattern: (<any>HeroPattern)[toString(pattern)],
            width: toString(width),
            height: toString(height),
            backgroundColor,
            fontColor,
            opacity,
            colorPattern
        })

        res.setHeader('Cache-Control', 'no-cache,max-age=0,no-store,s-maxage=0,proxy-revalidate')
        res.setHeader('Pragma', 'no-cache')
        res.setHeader('Expires', '-1')
        res.setHeader('Content-type', 'image/svg+xml')
        res.setHeader('X-Powered-By', 'Vercel')

        return res.send(quote)
    } catch (error) {
        return res.send({
            status: 'Error',
            name: error.name,
            message: error.message
        })
    }
}
