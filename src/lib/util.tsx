export const findHash = (text: string): boolean =>
  text.split(' ').find((word: string) => word.includes('#')) ? true : false;

export const getUniques = (
  value: string,
  index: number,
  array: string[],
): boolean => array.indexOf(value) === index;
