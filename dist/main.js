"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseText = exports.parseFile = void 0;
const parser_1 = require("./parser");
function parseFile(file) {
    const reader = new FileReader();
    reader.onload = () => {
        const data = reader.result;
        (0, parser_1.parse)(data);
    };
    reader.readAsText(file);
}
exports.parseFile = parseFile;
function parseText(data) {
    return (0, parser_1.parse)(data);
}
exports.parseText = parseText;
