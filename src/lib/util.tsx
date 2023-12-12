export const findString = (text: string, searchFor: string): boolean =>
  text.split(' ').find((word: string) => word.includes(searchFor))
    ? true
    : false;

export const getUniquesFromArray = (
  value: string,
  index: number,
  array: string[],
): boolean => array.indexOf(value) === index;
