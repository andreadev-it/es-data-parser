import { ParsedData } from "./ParsedData";
import { Line } from "../structures";
export declare class Planet {
    private esData;
    name: string;
    wormhole: string;
    constructor(esData: ParsedData, name: string);
    static fromLine(data: ParsedData, dataLine: Line): Planet;
}
//# sourceMappingURL=Planet.d.ts.map