"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileRoot = exports.Line = void 0;
class Line {
    tokens;
    indentation;
    children = [];
    constructor(tokens, indentation) {
        this.tokens = tokens;
        this.indentation = indentation;
    }
    toString() {
        const tokensText = [...this.tokens];
        let text = "";
        for (const token of tokensText) {
            if (token.includes(' ')) {
                if (token.includes('"')) {
                    text += "`" + token + "`";
                }
                else {
                    text += `"${token}"`;
                }
            }
            else {
                text += token + " ";
            }
        }
        return text;
    }
}
exports.Line = Line;
class FileRoot extends Line {
    isRoot = true;
}
exports.FileRoot = FileRoot;
