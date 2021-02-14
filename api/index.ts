import { NowRequest, NowResponse, VercelResponse } from '@vercel/node'
import { quoteRenderer } from '../utils/quote'
import { notBlankOrElse, toString } from '../utils/commons'
import { CONFIG } from '../utils/config'

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

        const quoteWidth = notBlankOrElse(toString(width), CONFIG.imageOptions.width)
        const quoteHeight = notBlankOrElse(toString(height), CONFIG.imageOptions.height)

        const quote = await quoteRenderer({
            category: toString(category),
            pattern: toString(pattern),
            width: quoteWidth,
            height: quoteHeight,
            backgroundColor,
            fontColor,
            opacity,
            colorPattern
        })

        res.setHeader('Cache-Control', 'no-cache,max-age=0,no-store,s-maxage=0,proxy-revalidate')
        res.setHeader('Pragma', 'no-cache')
        res.setHeader('Expires', '-1')
        res.setHeader('Content-type', 'image/svg+xml')

        return res.send(quote)
    } catch (error) {
        return res.send({
            status: 'Error',
            name: error.name,
            message: error.message
        })
    }
}
