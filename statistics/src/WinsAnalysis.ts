import { Analyzer, MatchData, MatchResult } from "./types";

export class WinsAnalysis implements Analyzer {
  constructor(public teamName: string) {}

  run(matches: MatchData[]): string {
    let wins = 0;
    matches.forEach((item) => {
      if (item[1] == this.teamName && item[5] == MatchResult.HomeWin) wins++;
      if (item[2] == this.teamName && item[5] == MatchResult.AwayWin) wins++;
    });

    return `${this.teamName} won ${wins} games`;
  }
}
