import { Optional } from '../../typings/standard-types'
import { ProfileOptions } from '../../typings/domain-types'

import { hasProperty } from './commons'

import { CONFIG } from '../configs/config'
import { Profile } from '../../typings/enum-types'

export const getProfile = (): Profile => {
    return process.env.NODE_ENV && Profile[process.env.NODE_ENV]
}

export const isDev = Profile.dev === getProfile()

export const getProfileOptionsByEnv = (env: Optional<string> = process.env.NODE_ENV): ProfileOptions => {
    return env && hasProperty(CONFIG, env) ? CONFIG[env] : CONFIG.dev
}

const getProfileOptions = (): ProfileOptions => {
    return process.env.AWS_LAMBDA_FUNCTION_VERSION ? CONFIG.prod : getProfileOptionsByEnv()
}

export const profile = getProfileOptions()
