"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readFile = void 0;
function readFile(file) {
    return new Promise((resolve, _) => {
        const reader = new FileReader();
        reader.onload = () => {
            resolve(reader.result);
        };
        reader.readAsText(file);
    });
}
exports.readFile = readFile;
