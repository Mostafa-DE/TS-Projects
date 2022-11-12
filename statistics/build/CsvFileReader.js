"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvReader = void 0;
const fs_1 = __importDefault(require("fs"));
class CsvReader {
    constructor(filename) {
        this.filename = filename;
        this.data = [];
    }
    read() {
        const data = fs_1.default.readFileSync(this.filename, {
            encoding: "utf-8",
        });
        this.data = data.split("\n").map(function getItemsMatch(item) {
            return item.split(",");
        });
    }
}
exports.CsvReader = CsvReader;
