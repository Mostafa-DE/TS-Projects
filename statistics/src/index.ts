import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";

const matchReader = MatchReader.getDataFromCsv("football.csv");
matchReader.load();

const htmlSummary = Summary.winsAnalysisWithHtmlReport("Man United");
htmlSummary.buildAndPrintReport(matchReader.matchesData);

const consoleSummary = Summary.winsAnalysisWithConsoleReport("Man United");
consoleSummary.buildAndPrintReport(matchReader.matchesData);
