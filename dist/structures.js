"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileRoot = exports.Line = void 0;
class Line {
    constructor(tokens, indentation) {
        this.tokens = tokens;
        this.indentation = indentation;
        this.children = [];
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
    constructor(tokens, indentation, filename) {
        super(tokens, indentation);
        this.tokens = tokens;
        this.indentation = indentation;
        this.isRoot = true;
        this.filename = filename;
    }
}
exports.FileRoot = FileRoot;
