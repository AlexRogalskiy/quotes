import { Profile } from '../../typings/enum-types'
import { ProfileOptions } from '../../typings/domain-types'

import { OUTPUT_OPTIONS } from '../constants/constants'

/**
 * ConfigRecord
 * @desc Type representing profile config options
 */
export type ConfigRecord = Record<Profile, ProfileOptions>

/**
 * Configuration options
 */
export const CONFIG: Readonly<ConfigRecord> = {
    dev: {
        imageOptions: {
            width: '100%',
            height: '100%',
        },
        indexOptions: {
            delimiter: '_',
            path: '.cache',
            name: 'lunr-index.json',
        },
        outputOptions: OUTPUT_OPTIONS,
    },
    prod: {
        imageOptions: {
            width: '100%',
            height: '100%',
        },
        indexOptions: {
            delimiter: '_',
            path: '.cache',
            name: 'lunr-index.json',
        },
        outputOptions: OUTPUT_OPTIONS,
    },
    test: {
        imageOptions: {
            width: '100%',
            height: '100%',
        },
        indexOptions: {
            delimiter: '_',
            path: '.cache',
            name: 'lunr-index.json',
        },
        outputOptions: OUTPUT_OPTIONS,
    },
}
