import { Line } from "../structures";
import { ExplosionInfo } from "../types";
import { MinablePayload } from "./MinablePayload";
import { ParsedData } from "./ParsedData";
export declare class Minable {
    name: string;
    displayName: string;
    noun: string;
    sprite: string;
    hull: number;
    randomHull: number;
    payloads: MinablePayload[];
    explosions: ExplosionInfo[];
    static fromLine(data: ParsedData, dataLine: Line): Minable;
}
//# sourceMappingURL=Minable.d.ts.map