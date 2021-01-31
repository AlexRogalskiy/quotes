import { Icons, ParsedRequest } from "../typings/types"
import { css } from './getCss'

export function quoteRender(parsedRequest: ParsedRequest) {
  const {
    name,
    description,
    _image,
    backgroundColor,
    pattern,
    colorPattern,
    fontColor,
    _site,
    opacity
  } = parsedRequest

  return `
      <svg
        width="980"
        height="490"
        viewBox="0 0 640 320"
        xmlns="http://www.w3.org/2000/svg">
        <foreignObject x="0" y="0" width="900" height="320">
            <div xmlns="http://www.w3.org/1999/xhtml">
              <div class="card-wrapper">
                <div class="card-wrapper-desc">
                  <h1 class="font-monserrat700 animate-transition">${name}</h1>
                  <p class="font-monserratRegular animate-transition">${description}</p>
                  <div class="line"></div>
                  <p class="site font-monserratRegular">${_site}</p>
                </div>
                <div class="card-wrapper-img">
                  <img src="${_image}" class="card-img animate-image" alt="image-${name}"/>
                </div>
              </div>
            </div>
        </foreignObject>
        <style>${css({ backgroundColor, pattern, opacity, colorPattern, fontColor })}</style>
      </svg>
  `
}