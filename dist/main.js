"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseText = exports.parseFile = void 0;
const parser_1 = require("./parser");
function parseFile(file, filename) {
    return new Promise((resolve, _) => {
        const reader = new FileReader();
        reader.onload = () => {
            const data = reader.result;
            resolve((0, parser_1.parse)(data, filename));
        };
        reader.readAsText(file);
    });
}
exports.parseFile = parseFile;
function parseText(data, filename) {
    return (0, parser_1.parse)(data, filename);
}
exports.parseText = parseText;
