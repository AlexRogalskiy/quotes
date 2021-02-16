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
    ticTacToe = 'ticTacToe',
}

export enum CategoryPattern {
    general = 'general',
    life = 'life',
    success = 'success',
    motivational = 'motivational',
    fun = 'fun',
    programming = 'programming',
    entrepreneurship = 'entrepreneurship',
}

export interface ParsedRequest {
    category?: CategoryPattern | undefined
    width?: string
    height?: string
    colorPattern?: string | string[]
    fontColor?: string | string[]
    backgroundColor?: string | string[]
    pattern?: HeroPattern | undefined
    opacity?: string | string[]
}

export interface ColorOptions {
    readonly colorPattern: string | string[]
    readonly fontColor: string | string[]
    readonly backgroundColor: string | string[]
    readonly opacity: string | string[]
    readonly pattern?: string
}

export interface ImageOptions {
    readonly width: string
    readonly height: string
}

export interface ConfigOptions {
    readonly colorOptions: ColorOptions
    readonly imageOptions: ImageOptions
}
