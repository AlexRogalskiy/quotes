import boxen from 'boxen'

import { Optional } from './standard-types'
import {
    AnimationPattern,
    CategoryPattern,
    FontPattern,
    HeroPattern,
    LayoutPattern,
    ThemePattern,
} from './enum-types'

/**
 * FontData
 * @desc Type representing font data
 */
export type FontOptions = {
    /**
     * Font family
     */
    readonly fontFamily: string
    /**
     * Font data
     */
    readonly fontSrc: string
}

/**
 * AnimationOptions
 * @desc Type representing animation options
 */
export type AnimationOptions = {
    /**
     * Animation type
     */
    readonly animation: string
    /**
     * Animation keyframes
     */
    readonly keyframes: string
}

/**
 * ThemeOptions
 * @desc Type representing theme options
 */
export type ThemeOptions = {
    /**
     * Theme quote text color
     */
    readonly quoteColor: string
    /**
     * Theme author text color
     */
    readonly authorColor: string
    /**
     * Theme background color
     */
    readonly bgColor: string
    /**
     * Theme color pattern
     */
    readonly colorPattern?: string | string[]
    /**
     * Theme text font color
     */
    readonly fontColor?: string
    /**
     * Theme background opacity
     */
    readonly opacity?: string
    /**
     * Template image background pattern
     */
    readonly pattern?: Optional<HeroPattern>
}

/**
 * StyleOptions
 * @desc Type representing style options
 */
export type StyleOptions = {
    /**
     * Style font options
     */
    readonly font: FontOptions
    /**
     * Style theme options
     */
    readonly theme: ThemeOptions
    /**
     * Style animation options
     */
    readonly animation: AnimationOptions
}

/**
 * TemplateOptions
 * @desc Type representing template options
 */
export type TemplateOptions = {
    /**
     * Template data identifier
     */
    id?: string
    /**
     * Template data text
     */
    quote: string
    /**
     * Template data author
     */
    author: string
}

/**
 * LayoutOptions
 * @desc Type representing layout options
 */
export type LayoutOptions = {
    /**
     * Creates style by input {@link StyleOptions}
     * @param options initial input {@link StyleOptions}
     */
    readonly style: (options: StyleOptions) => string
    /**
     * Creates template by input {@link TemplateOptions}
     * @param options initial input {@link TemplateOptions}
     */
    readonly template: (options: TemplateOptions) => string
}

/**
 * ImageOptions
 * @desc Type representing image options
 */
export type ImageOptions = {
    /**
     * Image width
     */
    readonly width: string
    /**
     * Image height
     */
    readonly height: string
}

/**
 * ProfileOptions
 * @desc Type representing profile options
 */
export type ProfileOptions = {
    /**
     * Image configuration options.
     */
    readonly imageOptions: ImageOptions
    /**
     * Index configuration options.
     */
    readonly indexOptions: IndexOptions
    /**
     * Style configuration options.
     */
    readonly styleOptions?: StyleOptions
    /**
     * Output options
     */
    readonly outputOptions?: boxen.Options
}

/**
 * TemplateData
 * @desc Type representing template data
 */
export type TemplateData = {
    /**
     * Template layout options
     */
    layout: LayoutOptions
    /**
     * Template style options
     */
    style: StyleOptions
    /**
     * Template image options
     */
    image: ImageOptions
    /**
     * Template quote options
     */
    quote: TemplateOptions
}

/**
 * ParsedRequestData
 * @desc Type representing parsed request data
 */
export type ParsedRequestData = {
    /**
     * Request theme pattern
     */
    themePattern?: Optional<ThemePattern>
    /**
     * Request layout pattern
     */
    layoutPattern?: Optional<LayoutPattern>
    /**
     * Request animation pattern
     */
    animationPattern?: Optional<AnimationPattern>
    /**
     * Request font pattern
     */
    fontPattern?: Optional<FontPattern>
    /**
     * Request category pattern
     */
    categoryPattern?: Optional<CategoryPattern>
    /**
     * Request keywords
     */
    keywords?: string | string[]
    /**
     * Request image width
     */
    width?: string
    /**
     * Request image height
     */
    height?: string
}

/**
 * ParsedRequest
 * @desc Type representing parsed request data
 */
export type ParsedRequestData2 = {
    /**
     * Template image category
     */
    category?: Optional<CategoryPattern>
    /**
     * Template image background pattern
     */
    pattern?: Optional<HeroPattern>
    /**
     * Template image width
     */
    width?: string
    /**
     * Template image height
     */
    height?: string
    /**
     * Request keywords
     */
    keywords?: string | string[]
    /**
     * Template image color pattern
     */
    colorPattern?: string | string[]
    /**
     * Template image text font color
     */
    fontColor?: string | string[]
    /**
     * Template image background color
     */
    backgroundColor?: string | string[]
    /**
     * Template image background opacity
     */
    opacity?: string | string[]
}

/**
 * ImageOptions
 * @desc Type representing index options
 */
export type IndexOptions = {
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
