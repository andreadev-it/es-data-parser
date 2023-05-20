import { Line } from "es-data-parser/structures";
import { ParsedData } from "./ParsedData";
import { SystemObject } from "./SystemObject";
import { Point } from "../utils";
export type SystemLink = [Point, Point];
export declare class System {
    name: string;
    position: Point;
    links: string[];
    government: string;
    esData: ParsedData;
    attributes: string[];
    objects: SystemObject[];
    isSelected: boolean;
    static fromLine(data: ParsedData, dataLine: Line): System;
    constructor(data: ParsedData, name: string, pos: Point);
}
//# sourceMappingURL=System.d.ts.map