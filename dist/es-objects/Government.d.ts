import { Line } from "es-data-parser/structures";
import { Color } from "./Color";
import { ParsedData } from "./ParsedData";
export declare class Government {
    esData: ParsedData;
    name: string;
    color: string | Color;
    static fromLine(data: ParsedData, dataLine: Line): Government;
    constructor(data: ParsedData, name: string);
}
