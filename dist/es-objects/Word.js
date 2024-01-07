export class Word {
    constructor() {
        this.texts = [];
    }
    static fromLine(data, dataLine) {
        var _a;
        if (dataLine.tokens[0] != 'word') {
            throw new Error("Not a word");
        }
        let texts = [];
        for (let child of dataLine.children) {
            texts.push({
                data: child.tokens[0],
                weight: parseInt((_a = child.tokens[1]) !== null && _a !== void 0 ? _a : 1)
            });
        }
        let wordObj = new Word();
        wordObj.texts = texts;
        return wordObj;
    }
}
