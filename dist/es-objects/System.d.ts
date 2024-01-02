import { Line } from "../structures";
import { ParsedData } from "./ParsedData";
import { SystemObject } from "./SystemObject";
import { Point } from "../utils";
import { TravelDistance } from "./TravelDistance";
import { RamscoopModifier } from "./RamscoopModifier";
export declare type SystemLink = [Point, Point];
export declare type AsteroidData = {
    name: string;
    count: number;
    energy: number;
};
export declare type BeltInfo = {
    distance: number;
    weight: number;
};
export declare type TradeInfo = {
    commodity: string;
    cost: number;
};
export declare type FleetInfo = {
    name: string;
    period: number;
};
export declare type RaidInfo = {
    fleet: string;
    minAttraction: number;
    maxAttraction: number;
};
export declare type HazardInfo = {
    name: string;
    period: number;
};
export declare class System {
    name: string;
    position: Point;
    links: string[];
    government: string;
    esData: ParsedData;
    attributes: string[];
    objects: SystemObject[];
    inaccessible: boolean;
    hidden: boolean;
    shrouded: boolean;
    music: string;
    arrival: TravelDistance;
    departure: TravelDistance;
    ramscoop: RamscoopModifier;
    habitable: number;
    belt: BeltInfo;
    invisibleFence: number;
    jumpRange: number;
    haze: string;
    asteroids: AsteroidData[];
    minables: AsteroidData[];
    trades: TradeInfo[];
    fleets: FleetInfo[];
    raids: RaidInfo[];
    noRaid: boolean;
    hazards: HazardInfo[];
    starfieldDensity: number;
    isSelected: boolean;
    static fromLine(data: ParsedData, dataLine: Line): System;
    constructor(data: ParsedData, name: string, pos: Point);
}
//# sourceMappingURL=System.d.ts.map