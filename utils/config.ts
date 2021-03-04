import { ConfigOptions } from '../typings/types'

export const CONFIG: Readonly<ConfigOptions> = {
    colorOptions: {
        colorPattern: '#FFE0E9',
        fontColor: '#0A83DC',
        backgroundColor: '#FFFFFF',
        opacity: '0.3',
    },
    imageOptions: {
        width: '100%',
        height: '100%',
    },
    indexOptions: {
        delim: '_',
        path: '.cache',
        name: 'lunr-index.json',
    },
}
