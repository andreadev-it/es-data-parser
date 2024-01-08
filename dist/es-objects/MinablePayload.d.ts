import { Line } from "../structures";
import { ParsedData } from "./ParsedData";
export declare class MinablePayload {
    outfit: string;
    maxDrops: number;
    dropRate: number;
    toughness: number;
    static fromLine(data: ParsedData, dataLine: Line): MinablePayload;
}
//# sourceMappingURL=MinablePayload.d.ts.map