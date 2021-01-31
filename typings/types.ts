export enum HeroPattern {
    plus = 'plus',
    topography = 'topography',
    texture = 'texture',
    hideout = 'hideout',
    fallingTriangles = 'fallingTriangles',
    iLikeFood = 'iLikeFood',
    fourPointStars = 'fourPointStars',
    brickWall = 'brickWall',
    wiggle = 'wiggle',
    bubbles = 'bubbles',
    floatingCogs = 'floatingCogs',
    leaf = 'leaf',
    rain = 'rain',
    polkaDots = 'polkaDots',
    ticTacToe = 'ticTacToe'
}

export interface ParsedRequest {
    name: string | string[]
    description: string | string[]
    _image: string | string[]
    colorPattern: string | string[]
    fontColor?: string | string[]
    iconColor?: string | string[]
    backgroundColor?: string | string[]
    _site?: string | string[]
    pattern?: string | string[]
    opacity?: string | string[]
}