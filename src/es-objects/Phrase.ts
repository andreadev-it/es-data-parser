import { Line } from "../structures";
import { PhraseName, PhrasePiece, Replacement } from "../types";
import { ParsedData } from "./ParsedData";
import { Word } from "./Word";

export class Phrase {
    name: string = "";
    pieces: PhrasePiece[] = [];
    replacements: Replacement[] = [];

    static fromSpecs(data: ParsedData, dataLine: Line) {
        let phrase = new Phrase();

        let pieces = [];
        let replacements: Replacement[] = [];

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

    static fromLine(data: ParsedData, dataLine: Line) {
        if (dataLine.tokens[0] != 'phrase') {
            throw new Error("Not a phrase");
        }

        let phrase = this.fromSpecs(data, dataLine);

        phrase.name = dataLine.tokens[1] ?? "";

        return phrase;
    }

    static phrasesNamesFromLine(dataLine: Line) {
        let names: PhraseName[];

        names = dataLine.children.map((line) => ({
            data: line.tokens[0],
            weight: parseInt(line.tokens[1] ?? 1)
        }));

        return names;
    }

    static replacementsFromLine(dataLine: Line) {
        let replacements: Replacement[];

        replacements = dataLine.children.map((line) => {
            let from = line.tokens[0];
            let to = line.tokens[1];

            return [from, to];
        });

        return replacements;
    }
}
