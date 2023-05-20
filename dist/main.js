"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseFiles = exports.parseFile = void 0;
// import { parse } from "./parser";
const ParsedData_1 = require("./es-objects/ParsedData");
const lexer_1 = require("./lexer");
const parser_1 = require("./parser");
const utils_1 = require("./utils");
async function parseFile(file, filename, previousData) {
    const parsedData = previousData !== null && previousData !== void 0 ? previousData : new ParsedData_1.ParsedData();
    let fileContent = await (0, utils_1.readFile)(file);
    let data = (0, lexer_1.lex)(fileContent, filename);
    (0, parser_1.parse)(data, parsedData);
    return parsedData;
}
exports.parseFile = parseFile;
async function parseFiles(files) {
    const parsedData = new ParsedData_1.ParsedData();
    for (let file of files) {
        await parseFile(file, file.webkitRelativePath, parsedData);
    }
    return parsedData;
}
exports.parseFiles = parseFiles;
