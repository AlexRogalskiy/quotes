import * as hero from 'hero-patterns'

import { HeroPattern } from '../typings/types'
import { isBlankString, randomEnum, strToEnum } from './commons'

type PatternOperator = (fill: string, opacity: string) => string

type PatternMapper = { [K in HeroPattern]: PatternOperator }

const patternMapping: PatternMapper = strToEnum(Object.values(HeroPattern), v => hero[v])

const getPattern = (pattern: string, opacity: string, colorPattern: string): string => {
    const patternFunc: PatternOperator = isBlankString(pattern)
        ? patternMapping[randomEnum(HeroPattern)]
        : patternMapping[pattern]

    return patternFunc(colorPattern, opacity)
}

export default getPattern
