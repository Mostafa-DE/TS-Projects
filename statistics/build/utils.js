"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = void 0;
const types_1 = require("./types");
const stringToNumber = (str) => {
    return parseInt(str);
};
const dateStringToDate = (dateString) => {
    const dateArray = dateString
        .split("/")
        .map(function convertString(item) {
        return stringToNumber(item);
    });
    return new Date(dateArray[types_1.dateStringFormat.year], dateArray[types_1.dateStringFormat.month] - 1, dateArray[types_1.dateStringFormat.day]);
};
exports.dateStringToDate = dateStringToDate;
