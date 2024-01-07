import { Word } from "./es-objects/Word";

export type AsteroidData = {
    name: string,
    count: number,
    energy: number
};

export type BeltInfo = {
    distance: number;
    weight: number;
}

export type FleetInfo = {
    name: string;
    period: number;
}

export type HazardInfo = {
    name: string;
    period: number;
}

export type RaidInfo = {
    fleet: string;
    minAttraction: number;
    maxAttraction: number;
}

export type TradeInfo = {
    commodity: string;
    cost: number;
}

export type WithWeight<T> = {
    data: T;
    weight: number;
}

export type PhraseName = WithWeight<string>;

export type Replacement = [string, string];

export type PhrasePiece = Word | PhraseName[];
