import { NowRequest, NowResponse } from '@vercel/node';
import { quoteRenderer } from '../utils/quote';

export default async function render(req: NowRequest, res: NowResponse) {
  try {
    const {
      category,
      iconColor,
      backgroundColor,
      fontColor,
      pattern,
      opacity,
      colorPattern
    } = req.query;

    const quote = await quoteRenderer({
      category,
      iconColor,
      backgroundColor,
      fontColor,
      pattern,
      opacity,
      colorPattern
    });

    res.setHeader(
      "Cache-Control",
      "no-cache,max-age=0,no-store,s-maxage=0,proxy-revalidate"
    );
    res.setHeader("Pragma", "no-cache");
    res.setHeader("Expires", "-1");
    res.setHeader('Content-type', 'image/svg+xml');

    return res.send(quote);
  } catch (error) {
    return res.send({
      status: 'Error',
      name: error.name,
      message: error.message
    });
  }
}
