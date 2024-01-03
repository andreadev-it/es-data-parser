import { ParsedData } from "./ParsedData";
import { Line } from "../structures";
import { Sprite } from "./Sprite";
export declare class SystemObject {
    private esData;
    name: string;
    sprite: Sprite | null;
    distance: number;
    period: number;
    offset: number;
    objects: SystemObject[];
    constructor(esData: ParsedData, distance: number, period: number, offset?: number);
    static fromLine(data: ParsedData, dataLine: Line): SystemObject;
}
//# sourceMappingURL=SystemObject.d.ts.map