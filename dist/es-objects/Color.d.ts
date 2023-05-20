import { Line } from "es-data-parser/structures";
import { ParsedData } from "./ParsedData";
export declare class Color {
    name: string;
    r: number;
    g: number;
    b: number;
    a: number;
    constructor(name: string, r: number, g: number, b: number, a?: number);
    toString(): string;
    static fromLine(_: ParsedData, dataLine: Line): Color;
    static fromPercentages(label: string, r: number, g: number, b: number, a: number): Color;
    static fromGovernment(data: ParsedData, govName: string): Color | null;
}
//# sourceMappingURL=Color.d.ts.map