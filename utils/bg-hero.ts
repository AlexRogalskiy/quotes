import {
    brickWall,
    bubbles,
    fallingTriangles,
    floatingCogs,
    fourPointStars,
    hideout,
    iLikeFood,
    leaf,
    plus,
    polkaDots,
    rain,
    texture,
    ticTacToe,
    topography,
    wiggle,
} from 'hero-patterns'

import { HeroPattern } from '../typings/types'
import { isBlankString, randomEnum } from './commons'

type PatternOperator = (fill: string, opacity: string) => string

type PatternMapper = { [K in HeroPattern]: PatternOperator }

const patternMapping: PatternMapper = {
    [HeroPattern.brickWall]: brickWall,
    [HeroPattern.bubbles]: bubbles,
    [HeroPattern.fallingTriangles]: fallingTriangles,
    [HeroPattern.floatingCogs]: floatingCogs,
    [HeroPattern.fourPointStars]: fourPointStars,
    [HeroPattern.hideout]: hideout,
    [HeroPattern.iLikeFood]: iLikeFood,
    [HeroPattern.leaf]: leaf,
    [HeroPattern.plus]: plus,
    [HeroPattern.polkaDots]: polkaDots,
    [HeroPattern.rain]: rain,
    [HeroPattern.texture]: texture,
    [HeroPattern.ticTacToe]: ticTacToe,
    [HeroPattern.topography]: topography,
    [HeroPattern.wiggle]: wiggle,
}

const getPattern = (pattern: string, opacity: string, colorPattern: string): string => {
    const patternFunc: PatternOperator = isBlankString(pattern)
        ? patternMapping[randomEnum(HeroPattern)]
        : patternMapping[pattern]
    const fillOpacity = [colorPattern, opacity]

    return patternFunc.apply(null, fillOpacity)
}

export default getPattern
