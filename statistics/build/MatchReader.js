"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchReader = void 0;
const utils_1 = require("./utils");
const CsvFileReader_1 = require("./CsvFileReader");
class MatchReader {
    constructor(reader) {
        this.reader = reader;
        this.matchesData = [];
    }
    static getDataFromCsv(fileName) {
        return new MatchReader(new CsvFileReader_1.CsvReader(fileName));
    }
    load() {
        this.reader.read();
        this.matchesData = this.reader.data.map(this.convertItemsMatch);
    }
    convertItemsMatch(item) {
        return [
            (0, utils_1.dateStringToDate)(item[0]),
            item[1],
            item[2],
            parseInt(item[3]),
            parseInt(item[4]),
            item[5],
            item[6],
        ];
    }
}
exports.MatchReader = MatchReader;
