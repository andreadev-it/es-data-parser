import { Line } from "../structures";
import { ParsedData } from "../es-objects/ParsedData";

export class RamscoopModifier {
    universal = 1;
    addend = 0;
    multiplier = 1;

    static fromLine(data: ParsedData, dataLine: Line): RamscoopModifier {
        if (dataLine.tokens[0] != 'ramscoop') {
            throw new Error("Not a ramscoop data");
        }
        
        let universal = 1;
        let addend = 0;
        let multiplier = 1;

        for (let child of dataLine.children) {
            switch (child.tokens[0]) {
                case 'universal':
                    universal = parseFloat(child.tokens[1]);
                    break;
                case 'addend':
                    addend = parseFloat(child.tokens[1]);
                    break;
                case 'multiplier':
                    multiplier = parseFloat(child.tokens[1]);
                    break;
            }
        }

        const ramscoop = new RamscoopModifier();
        ramscoop.universal = universal;
        ramscoop.addend = addend;
        ramscoop.multiplier = multiplier;
        return ramscoop;
    }
}
