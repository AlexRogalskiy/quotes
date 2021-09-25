import { tmpdir } from 'os'
import { MakeDirectoryOptions, existsSync, mkdirSync } from 'fs'

export const tempDir = tmpdir()

export const ensureDirExists = (dir: string, options: MakeDirectoryOptions = { recursive: true }): void => {
    existsSync(dir) || mkdirSync(dir, options)
}
