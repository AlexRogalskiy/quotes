import { ProfileOptions } from '../typings/types'
import { CONFIG } from './config'

const profileOptions = (): ProfileOptions => {
    return process.env.AWS_LAMBDA_FUNCTION_VERSION ? CONFIG.prod : CONFIG.dev
}

export const profile = profileOptions()