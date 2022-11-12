"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchResult = exports.dateStringFormat = void 0;
var dateStringFormat;
(function (dateStringFormat) {
    dateStringFormat[dateStringFormat["day"] = 0] = "day";
    dateStringFormat[dateStringFormat["month"] = 1] = "month";
    dateStringFormat[dateStringFormat["year"] = 2] = "year";
})(dateStringFormat = exports.dateStringFormat || (exports.dateStringFormat = {}));
var MatchResult;
(function (MatchResult) {
    MatchResult["HomeWin"] = "H";
    MatchResult["AwayWin"] = "A";
    MatchResult["Draw"] = "D";
})(MatchResult = exports.MatchResult || (exports.MatchResult = {}));
