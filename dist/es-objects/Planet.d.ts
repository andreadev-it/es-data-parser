import { ParsedData } from "./ParsedData";
import { Line } from "es-data-parser/structures";
export declare class Planet {
    private esData;
    name: string;
    wormhole: string;
    constructor(esData: ParsedData, name: string);
    static fromLine(data: ParsedData, dataLine: Line): Planet;
}
