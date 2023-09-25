export type Nil = null | undefined;

export const isNil = (value: any): value is Nil => {
  return Object.is(value, null) || Object.is(value, undefined);
};
