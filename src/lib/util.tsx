export const findHash = (text: string): boolean =>
  text.split(' ').find((word: string) => word.includes('#')) ? true : false;
