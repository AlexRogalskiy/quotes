import _ from 'lodash'

export const delimiterBy = (value = '>', num = 80): string => value.repeat(num)

export const delim = delimiterBy()

export const random = (max: number): number => Math.floor(Math.random() * max)

export const randomElement = <T>(arr: T[]): T => arr[random(arr.length)]

export const workerTs = (file: string, wkOpts: WorkerOptions): any => {
    wkOpts['eval'] = true
    if (!wkOpts['workerData']) {
        wkOpts['workerData'] = {}
    }
    wkOpts['workerData'].__filename = file
    return new Worker(
        `
            const wk = require('worker_threads');
            require('ts-node').register();
            let file = wk.workerData.__filename;
            delete wk.workerData.__filename;
            require(file);
        `,
        wkOpts
    )
}

export const makeBackgroundable = <T extends (...args: any[]) => any>(
    pool,
    func: T
): ((...funcArgs: Parameters<T>) => Promise<ReturnType<T>>) => {
    const funcName = func.name

    return (...args: Parameters<T>): ReturnType<T> => {
        return pool.exec(funcName, args)
    }
}

export const toString = (value: string | string[]): string => (Array.isArray(value) ? value[0] : value)

export const randomEnum = <T>(value: T): T[keyof T] => {
    const enumValues = (Object.values(value) as unknown) as T[keyof T][]
    const randomIndex = random(enumValues.length)
    return enumValues[randomIndex]
}

export const toFormatString = (obj): string => {
    return `(${objToString(obj)})`
}

const objToString = (obj): string => {
    let res = ''
    let i = 0

    const entries = Object.entries(obj)
    for (const [key, value] of entries) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            res += `${key} => ${typeof value === 'object' ? `[${objToString(value)}]` : `${value}, `}`
        }
        if (++i === entries.length) {
            res = res.substring(0, res.length - 2)
        }
    }

    return res
}

export const capitalize = (input: string): string => {
    const inputArray = input.split(' ')
    const output: string[] = []

    for (const inputArrayItem of inputArray) {
        output.push(inputArrayItem.charAt(0).toUpperCase() + inputArrayItem.slice(1))
    }

    return output.join(' ')
}

export const iterateAsync = async <T>(
    obj,
    func: (item: T, index?: number) => Promise<void>
): Promise<void> => {
    await Promise.all(obj.map(async (item: T, index?: number) => await func(item, index)))
}

export const mergeProps = <T>(...obj: unknown[]): T =>
    _.mergeWith({}, ...obj, (o, s) => {
        return _.isArray(s) && _.isArray(o) ? _.union(o, s) : _.isNull(s) ? o : s
    })

/**
 * Utility function to create a K:V from a list of strings
 * @param o initial input array to operate by
 * @param func
 */
export const strToEnum = <T extends string, V>(o: T[], func: (v: T) => V): { [K in T]: V } => {
    return o.reduce((res, key) => {
        res[key] = func(key)
        return res
    }, Object.create(null))
}
