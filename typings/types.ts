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

export enum CategoryPattern {
  general = 'general',
  life = 'life',
  success = 'success',
  motivational = 'motivational',
  fun = 'fun',
  programming = 'programming'
}

export interface ParsedRequest {
  category: string
  colorPattern: string | string[]
  fontColor?: string | string[]
  iconColor?: string | string[]
  backgroundColor?: string | string[]
  pattern?: string | string[]
  opacity?: string | string[]
}
