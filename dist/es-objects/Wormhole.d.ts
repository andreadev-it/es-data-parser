import { Color } from "./Color";
import { ParsedData } from "./ParsedData";
import { Line } from "es-data-parser/structures";
export declare class Wormhole {
    private esData;
    name: string;
    isMappable: boolean;
    links: [string, string][];
    color: Color | string;
    constructor(esData: ParsedData, name: string);
    static fromLine(data: ParsedData, dataLine: Line): Wormhole;
}
