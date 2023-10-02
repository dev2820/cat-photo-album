export const toLocale = (value: number) => {
  if (typeof value !== 'number') return value;
  return value.toLocaleString();
};
