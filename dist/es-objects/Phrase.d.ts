import { Line } from "../structures";
import { PhraseName, PhrasePiece, Replacement } from "../types";
import { ParsedData } from "./ParsedData";
export declare class Phrase {
    name: string;
    pieces: PhrasePiece[];
    replacements: Replacement[];
    static fromLine(data: ParsedData, dataLine: Line): Phrase;
    static phrasesNamesFromLine(dataLine: Line): PhraseName[];
    static replacementsFromLine(dataLine: Line): Replacement[];
}
//# sourceMappingURL=Phrase.d.ts.map