import { Line } from "../structures";
import { ParsedData } from "../es-objects/ParsedData";
export declare class RamscoopModifier {
    universal: number;
    addend: number;
    multiplier: number;
    static fromLine(data: ParsedData, dataLine: Line): RamscoopModifier;
}
//# sourceMappingURL=RamscoopModifier.d.ts.map