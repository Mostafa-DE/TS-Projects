import { Analyzer, OutputTarget, MatchData } from "./types";
import { WinsAnalysis } from "./WinsAnalysis";
import { HtmlReport } from "./HtmlReport";
import { ConsoleReport } from "./ConsoleReport";

export class Summary {
  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  static winsAnalysisWithHtmlReport(teamName: string): Summary {
    return new Summary(new WinsAnalysis(teamName), new HtmlReport());
  }

  static winsAnalysisWithConsoleReport(teamName: string): Summary {
    return new Summary(new WinsAnalysis(teamName), new ConsoleReport());
  }

  buildAndPrintReport(matches: MatchData[]): void {
    const output = this.analyzer.run(matches);
    this.outputTarget.print(output);
  }
}
