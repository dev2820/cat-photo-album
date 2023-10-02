export const capitalize = (str: string) => {
  return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
};

export const addUnit = (value: string | number, unit: string = '') => {
  return `${value}${unit}`;
};

export const abbreviate = (value: string, maxLength: number) => {
  if (typeof value !== 'string') return;

  if (value.length > maxLength) {
    return addUnit(value.slice(0, maxLength), '...');
  }
  return value;
};
