"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinsAnalysis = void 0;
const types_1 = require("./types");
class WinsAnalysis {
    constructor(teamName) {
        this.teamName = teamName;
    }
    run(matches) {
        let wins = 0;
        matches.forEach((item) => {
            if (item[1] == this.teamName && item[5] == types_1.MatchResult.HomeWin)
                wins++;
            if (item[2] == this.teamName && item[5] == types_1.MatchResult.AwayWin)
                wins++;
        });
        return `${this.teamName} won ${wins} games`;
    }
}
exports.WinsAnalysis = WinsAnalysis;
