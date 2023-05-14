export class Line {
    public children: Line[] = [];
    
    constructor(public tokens: string[], public indentation: number) {}

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
    public isRoot = true;
}
