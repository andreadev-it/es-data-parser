import { Line } from "../structures";
import { ParsedData } from "./ParsedData";
export declare class Star {
    name: string;
    power: number;
    wind: number;
    static fromLine(data: ParsedData, dataLine: Line): Star;
}
//# sourceMappingURL=Star.d.ts.map