import { ParsedData } from "./ParsedData";
import { Line } from "es-data-parser/structures";
export declare class SystemObject {
    private esData;
    name: string;
    sprite: string;
    distance: number;
    period: number;
    offset: number;
    objects: SystemObject[];
    constructor(esData: ParsedData, distance: number, period: number, offset?: number);
    static fromLine(data: ParsedData, dataLine: Line): SystemObject;
}
