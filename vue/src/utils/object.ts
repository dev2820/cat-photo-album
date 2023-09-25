/**
 * object의 property들을 camelcase로 변경한다.
 */
export const toCamel = <T extends Record<string, any>>(obj: T) => {
  const result = Object.entries(obj).reduce((newObj, [key, value]) => {
    const capitalizer = (chunk: string) =>
      chunk.charAt(0).toUpperCase() + chunk.slice(1);

    const camelKey = key
      .split(/[-,_]/)
      .map((chunk, i) => (i === 0 ? chunk : capitalizer(chunk)))
      .join("");

    newObj[camelKey] = value;

    return newObj;
  }, {} as Record<string, any>);

  return result;
};
