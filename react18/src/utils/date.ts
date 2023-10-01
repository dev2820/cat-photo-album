export const formatYYYYMMDD = (date: Date, option = { separator: '' }) => {
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const dd = String(date.getDate()).padStart(2, '0');
  const { separator } = option;

  return `${yyyy}${separator}${mm}${separator}${dd}`;
};
