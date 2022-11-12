import { dateStringToDate } from "./utils";
import { MatchData, MatchResult } from "./types";
import { CsvReader } from "./CsvFileReader";

interface DataReader {
  read(): void;
  data: string[][];
}

export class MatchReader {
  matchesData: MatchData[] = [];

  constructor(public reader: DataReader) {}

  static getDataFromCsv(fileName: string): MatchReader {
    return new MatchReader(new CsvReader(fileName));
  }

  load(): void {
    this.reader.read();
    this.matchesData = this.reader.data.map(this.convertItemsMatch);
  }

  convertItemsMatch(item: string[]): MatchData {
    return [
      dateStringToDate(item[0]),
      item[1],
      item[2],
      parseInt(item[3]),
      parseInt(item[4]),
      item[5] as MatchResult,
      item[6],
    ];
  }
}
