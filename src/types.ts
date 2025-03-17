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

export type ExplosionInfo = {
    effect: string;
    count: number;
}

export type Endpoint = 'accept'
    | 'launch'
    | 'decline'
    | 'flee'
    | 'defer'
    | 'depart'
    | 'die'
    | 'explode';

export type Label = {
    name: string;
}

export type ComparisonOp = '=='
    | '!='
    | '<'
    | '>'
    | '<='
    | '>=';

export function isComparisonOp(str: string): ComparisonOp | null {
    switch (str) {
        case "==":
        case "!=":
        case "<":
        case ">":
        case "<=":
        case ">=":
            return str;
    }
    return null;
}

export type TestableCondition = {
    condition: string;
    comp: ComparisonOp;
    value: string | number;
}

export enum TestableSetMethod {
    And,
    Or
}
