import { Optional } from './standard-types'

export enum HeroPattern {
    jigsaw = 'jigsaw',
    overcast = 'overcast',
    formalInvitation = 'formalInvitation',
    topography = 'topography',
    texture = 'texture',
    jupiter = 'jupiter',
    architect = 'architect',
    cutout = 'cutout',
    hideout = 'hideout',
    graphPaper = 'graphPaper',
    yyy = 'yyy',
    squares = 'squares',
    fallingTriangles = 'fallingTriangles',
    pianoMan = 'pianoMan',
    pieFactory = 'pieFactory',
    dominos = 'dominos',
    hexagons = 'hexagons',
    charlieBrown = 'charlieBrown',
    autumn = 'autumn',
    temple = 'temple',
    stampCollection = 'stampCollection',
    deathStar = 'deathStar',
    churchOnSunday = 'churchOnSunday',
    iLikeFood = 'iLikeFood',
    overlappingHexagons = 'overlappingHexagons',
    bamboo = 'bamboo',
    bathroomFloor = 'bathroomFloor',
    corkScrew = 'corkScrew',
    happyIntersection = 'happyIntersection',
    kiwi = 'kiwi',
    lips = 'lips',
    lisbon = 'lisbon',
    randomShapes = 'randomShapes',
    steelBeams = 'steelBeams',
    tinyCheckers = 'tinyCheckers',
    xEquals = 'xEquals',
    anchorsAway = 'anchorsAway',
    bevelCircle = 'bevelCircle',
    brickWall = 'brickWall',
    fancyRectangles = 'fancyRectangles',
    heavyRain = 'heavyRain',
    overlappingCircles = 'overlappingCircles',
    plus = 'plus',
    roundedPlusConnected = 'roundedPlusConnected',
    volcanoLamp = 'volcanoLamp',
    wiggle = 'wiggle',
    bubbles = 'bubbles',
    cage = 'cage',
    connections = 'connections',
    current = 'current',
    diagonalStripes = 'diagonalStripes',
    flippedDiamonds = 'flippedDiamonds',
    floatingCogs = 'floatingCogs',
    glamorous = 'glamorous',
    leaf = 'leaf',
    linesInMotion = 'linesInMotion',
    moroccan = 'moroccan',
    morphingDiamonds = 'morphingDiamonds',
    rails = 'rails',
    rain = 'rain',
    skulls = 'skulls',
    squaresInSquares = 'squaresInSquares',
    stripes = 'stripes',
    ticTacToe = 'ticTacToe',
    zigZag = 'zigZag',
    aztec = 'aztec',
    bankNote = 'bankNote',
    boxes = 'boxes',
    circlesAndSquares = 'circlesAndSquares',
    circuitBoard = 'circuitBoard',
    curtain = 'curtain',
    diagonalLines = 'diagonalLines',
    endlessClouds = 'endlessClouds',
    eyes = 'eyes',
    floorTile = 'floorTile',
    groovy = 'groovy',
    intersectingCircles = 'intersectingCircles',
    melt = 'melt',
    overlappingDiamonds = 'overlappingDiamonds',
    parkayFloor = 'parkayFloor',
    pixelDots = 'pixelDots',
    polkaDots = 'polkaDots',
    signal = 'signal',
    slantedStars = 'slantedStars',
    wallpaper = 'wallpaper',
}

export enum CategoryPattern {
    general = 'general',
    life = 'life',
    love = 'love',
    success = 'success',
    motivation = 'motivation',
    fun = 'fun',
    movie = 'movie',
    programming = 'programming',
    entrepreneurship = 'entrepreneurship',
    popular = 'popular',
    humor = 'humor',
    philosophy = 'philosophy',
    god = 'god',
    inspire = 'inspire',
    truth = 'truth',
    wisdom = 'wisdom',
    poetry = 'poetry',
    romance = 'romance',
    death = 'death',
    happiness = 'happiness',
    faith = 'faith',
    hope = 'hope',
    writing = 'writing',
    religion = 'religion',
    relationships = 'relationships',
    spirituality = 'spirituality',
    time = 'time',
    knowledge = 'knowledge',
    science = 'science',
    books = 'books',
    health = 'health',
    gratitude = 'gratitude',
    courage = 'courage',
    responsibility = 'responsibility',
    anger = 'anger',
    stress = 'stress',
    sadness = 'sadness',
    thinking = 'thinking',
    french = 'french',
    portuguese = 'portuguese',
}

export type QuoteData = {
    /**
     * Quote identifier
     */
    id?: string
    /**
     * Quote text
     */
    quote: string
    /**
     * Quote author
     */
    author: string
}

export interface ParsedRequest {
    /**
     * Quote category
     */
    category?: Optional<CategoryPattern>
    /**
     * Quote image background pattern
     */
    pattern?: Optional<HeroPattern>
    /**
     * Quote image width
     */
    width?: string
    /**
     * Quote image height
     */
    height?: string
    /**
     * Quote keywords
     */
    keywords?: string | string[]
    /**
     * Quote image color pattern
     */
    colorPattern?: string | string[]
    /**
     * Quote text font color
     */
    fontColor?: string | string[]
    /**
     * Quote image background color
     */
    backgroundColor?: string | string[]
    /**
     * Quote image background opacity
     */
    opacity?: string | string[]
}

export interface ColorOptions {
    /**
     * Image color pattern
     */
    readonly colorPattern: string | string[]
    /**
     * Image text font color
     */
    readonly fontColor: string | string[]
    /**
     * Image background color
     */
    readonly backgroundColor: string | string[]
    /**
     * Image background opacity
     */
    readonly opacity: string | string[]
    /**
     * Image background pattern
     */
    readonly pattern?: Optional<HeroPattern>
}

export interface ImageOptions {
    /**
     * Image width
     */
    readonly width: string
    /**
     * Image height
     */
    readonly height: string
}

export interface IndexOptions {
    /**
     * Index identifier delimiter
     */
    readonly delimiter: string
    /**
     * Index file path
     */
    readonly path: string
    /**
     * Index file name
     */
    readonly name: string
}

export enum Profile {
    dev = 'dev',
    prod = 'prod',
}

export interface ProfileOptions {
    /**
     * Color configuration options.
     */
    readonly colorOptions: ColorOptions
    /**
     * Image configuration options.
     */
    readonly imageOptions: ImageOptions
    /**
     * Index configuration options.
     */
    readonly indexOptions: IndexOptions
}
