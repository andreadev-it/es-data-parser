export class Line {
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
export class FileRoot extends Line {
    constructor() {
        super(...arguments);
        this.isRoot = true;
    }
}
