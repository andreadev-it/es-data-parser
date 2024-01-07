import { Word } from "./Word";
export class Phrase {
    constructor() {
        this.name = "";
        this.pieces = [];
        this.replacements = [];
    }
    static fromLine(data, dataLine) {
        var _a;
        if (dataLine.tokens[0] != 'phrase') {
            throw new Error("Not a phrase");
        }
        let phrase = new Phrase();
        phrase.name = (_a = dataLine.tokens[1]) !== null && _a !== void 0 ? _a : "";
        let pieces = [];
        let replacements = [];
        for (let child of dataLine.children) {
            switch (child.tokens[0]) {
                case 'word':
                    pieces.push(Word.fromLine(data, child));
                    break;
                case 'phrase':
                    pieces.push(this.phrasesNamesFromLine(child));
                    break;
                case 'replacements':
                    replacements = this.replacementsFromLine(child);
                    break;
            }
        }
        phrase.pieces = pieces;
        phrase.replacements = replacements;
        return phrase;
    }
    static phrasesNamesFromLine(dataLine) {
        let names;
        names = dataLine.children.map((line) => {
            var _a;
            return ({
                data: line.tokens[0],
                weight: parseInt((_a = line.tokens[1]) !== null && _a !== void 0 ? _a : 1)
            });
        });
        return names;
    }
    static replacementsFromLine(dataLine) {
        let replacements;
        replacements = dataLine.children.map((line) => {
            let from = line.tokens[0];
            let to = line.tokens[1];
            return [from, to];
        });
        return replacements;
    }
}
