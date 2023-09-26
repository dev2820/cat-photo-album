export const random = (min = 0, max = 1) => {
  return Math.random() * max + min;
};

export const randomInt = (min = 0, max = 1) => {
  return Math.floor(Math.random() * max + min);
};
