"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseFile = void 0;
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
