import { NowRequest, NowResponse } from '@vercel/node'
import { quoteRenderer } from '../utils/quote'
import { notBlankOrElse, toString } from '../utils/commons'
import { CONFIG } from '../utils/config'

export default async function render(req: NowRequest, res: NowResponse) {
  try {
    const {
      category,
      width,
      height,
      iconColor,
      backgroundColor,
      fontColor,
      pattern,
      opacity,
      colorPattern
    } = req.query

    const c = toString(category)
    const w = notBlankOrElse(toString(width), CONFIG.image.width)
    const h = notBlankOrElse(toString(height), CONFIG.image.height)

    const quote = await quoteRenderer({
      category: c,
      width: w,
      height: h,
      iconColor,
      backgroundColor,
      fontColor,
      pattern,
      opacity,
      colorPattern
    })

    res.setHeader(
      "Cache-Control",
      "no-cache,max-age=0,no-store,s-maxage=0,proxy-revalidate"
    )
    res.setHeader("Pragma", "no-cache")
    res.setHeader("Expires", "-1")
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
