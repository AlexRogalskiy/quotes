import { NowRequest, NowResponse } from '@vercel/node'
import { quoteRenderer } from '../utils/quote'
import { isBlankString, toString } from '../utils/commons'

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

    const categoryType = toString(category)
    const widthSize = isBlankString(toString(width)) ? "100%" : toString(width)
    const heightSize = isBlankString(toString(height)) ? "100%" : toString(height)

    const quote = await quoteRenderer({
      categoryType,
      widthSize,
      heightSize,
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
