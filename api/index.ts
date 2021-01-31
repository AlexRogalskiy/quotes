import { NowRequest, NowResponse } from '@vercel/node';
import { quoteRenderer } from '../utils/quote';
import toBase64ImageUrl from "../utils/toBase64"

export default async function render(req: NowRequest, res: NowResponse) {
    try {
        const {
			name,
			description, 
			image, 
			backgroundColor, 
			iconColor,
			site, 
			fontColor, 
			pattern, 
			opacity, 
			colorPattern
		} = req.query;
        
        const _site = site ?? ''
        const _image = await toBase64ImageUrl(image)

        const card = quoteRenderer({
            name,
            description,
            iconColor,
            backgroundColor,
            _image,
            pattern,
            colorPattern,
            _site,
            fontColor,
            opacity
        });

        res.setHeader('Content-type', 'image/svg+xml');
        return res.send(card);
    } catch (e) {
        return res.send({
            status: 'err',
            message: e.message
        });
    }
}
