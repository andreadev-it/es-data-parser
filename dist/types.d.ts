import { Word } from "./es-objects/Word";
export declare type AsteroidData = {
    name: string;
    count: number;
    energy: number;
};
export declare type BeltInfo = {
    distance: number;
    weight: number;
};
export declare type FleetInfo = {
    name: string;
    period: number;
};
export declare type HazardInfo = {
    name: string;
    period: number;
};
export declare type RaidInfo = {
    fleet: string;
    minAttraction: number;
    maxAttraction: number;
};
export declare type TradeInfo = {
    commodity: string;
    cost: number;
};
export declare type WithWeight<T> = {
    data: T;
    weight: number;
};
export declare type PhraseName = WithWeight<string>;
export declare type Replacement = [string, string];
export declare type PhrasePiece = Word | PhraseName[];
export declare type ExplosionInfo = {
    effect: string;
    count: number;
};
//# sourceMappingURL=types.d.ts.map