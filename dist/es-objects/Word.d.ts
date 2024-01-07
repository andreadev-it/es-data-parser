import { Line } from "../structures";
import { WithWeight } from "../types";
import { ParsedData } from "./ParsedData";
export declare class Word {
    texts: WithWeight<string>[];
    static fromLine(data: ParsedData, dataLine: Line): Word;
}
//# sourceMappingURL=Word.d.ts.map