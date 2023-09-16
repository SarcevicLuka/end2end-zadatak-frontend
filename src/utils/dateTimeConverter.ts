export const convertToLocaleDate = (date: string): Date => {
  const dateComponents = date.split(".");
  const day = parseInt(dateComponents[0], 10);
  const month = parseInt(dateComponents[1], 10) - 1;
  const year = parseInt(dateComponents[2], 10);

  const dateObject = new Date(year, month, day);

  return dateObject;
};
