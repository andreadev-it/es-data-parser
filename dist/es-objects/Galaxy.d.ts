import { Line } from "../structures";
import { ParsedData } from "./ParsedData";
import { Point } from "../utils";
export declare class Galaxy {
    esData: ParsedData;
    name: string;
    position: Point;
    sprite: string;
    static fromLine(data: ParsedData, dataLine: Line): Galaxy;
    constructor(data: ParsedData, name: string, pos: Point);
}
//# sourceMappingURL=Galaxy.d.ts.map