import { Line } from "../structures";
import { WithWeight } from "../types";
import { ParsedData } from "./ParsedData";

export class Word {
    texts: WithWeight<string>[] = [];

    static fromLine(data: ParsedData, dataLine: Line) {
        if (dataLine.tokens[0] != 'word') {
            throw new Error("Not a word");
        }

        let texts: WithWeight<string>[] = [];

        for (let child of dataLine.children) {
            texts.push({
                data: child.tokens[0],
                weight: parseInt(child.tokens[1] ?? 1)
            });
        }

        let wordObj = new Word();

        wordObj.texts = texts;

        return wordObj;
    }
}
