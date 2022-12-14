"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const Summary_1 = require("./Summary");
const matchReader = MatchReader_1.MatchReader.getDataFromCsv("football.csv");
matchReader.load();
const htmlSummary = Summary_1.Summary.winsAnalysisWithHtmlReport("Man United");
htmlSummary.buildAndPrintReport(matchReader.matchesData);
const consoleSummary = Summary_1.Summary.winsAnalysisWithConsoleReport("Man United");
consoleSummary.buildAndPrintReport(matchReader.matchesData);
