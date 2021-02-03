import fetch from 'isomorphic-unfetch'

export const randomElement = (arr: Array<any>) => arr[Math.floor(Math.random() * arr.length)];

export const toBase64ImageUrl = async (imgUrl: any): Promise<string> => {
  const fetchImageUrl = await fetch(imgUrl)
  const responseArrBuffer = await fetchImageUrl.arrayBuffer()

  return `data:${fetchImageUrl.headers.get('Content-Type') || 'image/png'};base64,${Buffer.from(responseArrBuffer).toString('base64')}`
}

export const isNonEmptyString = (str: string): boolean => {
  return str && str.length > 0;
}

export const isBlankString = (str: string): boolean => {
  return (!str || /^\s*$/.test(str));
}

// @ts-ignore
export const randomEnum = <T>(anEnum: T): T[keyof T] => {
  const enumValues = (Object.values(anEnum) as unknown) as T[keyof T][];
  const randomIndex = Math.floor(Math.random() * enumValues.length);
  return enumValues[randomIndex];
}
