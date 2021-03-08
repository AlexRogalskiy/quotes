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
    jigsaw = 'jigsaw',
    bubbles = 'bubbles',
    floatingCogs = 'floatingCogs',
    leaf = 'leaf',
    rain = 'rain',
    polkaDots = 'polkaDots',
    ticTacToe = 'ticTacToe',
    overcast = 'overcast',
    formalInvitation = 'formalInvitation',
    jupiter = 'jupiter',
    architect = 'architect',
    cutout = 'cutout',
    graphPaper = 'graphPaper',
    yyy = 'yyy',
    squares = 'squares',
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
    fancyRectangles = 'fancyRectangles',
    heavyRain = 'heavyRain',
    overlappingCircles = 'overlappingCircles',
    roundedPlusConnected = 'roundedPlusConnected',
    volcanoLamp = 'volcanoLamp',
    cage = 'cage',
    connections = 'connections',
    current = 'current',
    diagonalStripes = 'diagonalStripes',
    flippedDiamonds = 'flippedDiamonds',
    glamorous = 'glamorous',
    houndstooth = 'houndstooth',
    linesInMotion = 'linesInMotion',
    moroccan = 'moroccan',
    morphingDiamonds = 'morphingDiamonds',
    rails = 'rails',
    skulls = 'skulls',
    squaresInSquares = 'squaresInSquares',
    stripes = 'stripes',
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
    category?: CategoryPattern | undefined
    /**
     * Quote image background pattern
     */
    pattern?: HeroPattern | undefined
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
    readonly pattern?: HeroPattern | undefined
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

/**
 * Profile configuration options.
 */
export type ConfigOptions = {
    readonly [K in Profile]: ProfileOptions
}
