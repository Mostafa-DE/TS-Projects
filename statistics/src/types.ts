export enum dateStringFormat {
  day,
  month,
  year,
}

export type MatchData = [
  Date,
  string,
  string,
  number,
  number,
  MatchResult,
  string
];

export enum MatchResult {
  HomeWin = "H",
  AwayWin = "A",
  Draw = "D",
}

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}
