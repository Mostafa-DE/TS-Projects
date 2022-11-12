import { dateStringFormat } from "./types";

const stringToNumber = (str: string): number => {
  return parseInt(str);
};

export const dateStringToDate = (dateString: string): Date => {
  const dateArray = dateString
    .split("/")
    .map(function convertString(item: string) {
      return stringToNumber(item);
    });

  return new Date(
    dateArray[dateStringFormat.year],
    dateArray[dateStringFormat.month] - 1,
    dateArray[dateStringFormat.day]
  );
};
