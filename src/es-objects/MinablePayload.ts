import { Line } from "../structures";
import { ParsedData } from "./ParsedData";

export class MinablePayload {
    outfit = "";
    maxDrops = 1;
    dropRate = 0.25;
    toughness = 1;

    static fromLine(data: ParsedData, dataLine: Line) {
        if (dataLine.tokens[0] != 'payload') {
            throw new Error('Not a payload');
        }

        let payload = new MinablePayload();

        payload.outfit = dataLine.tokens[1];

        if (dataLine.tokens[2]) {
            payload.maxDrops = parseInt(dataLine.tokens[2]);
        }

        for (let child of dataLine.children) {
            switch (child.tokens[0]) {
                case 'max drops':
                    payload.maxDrops = parseInt(child.tokens[1]);
                    break;
                case 'drop rate':
                    payload.dropRate = parseFloat(child.tokens[1]);
                    break;
                case 'toughness':
                    payload.toughness = parseInt(child.tokens[1]);
                    break;
            }
        }

        return payload;
    }
}
