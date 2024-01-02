import { Line } from "../structures";
import { ParsedData } from "./ParsedData";
import { Color } from "./Color";
import { SystemObject } from "./SystemObject";
import { Point } from "../utils";
import { TravelDistance } from "./TravelDistance";
import { RamscoopModifier } from "./RamscoopModifier";

export type SystemLink = [Point, Point];

export type AsteroidData = {
    name: string,
    count: number,
    energy: number
};

export type BeltInfo = {
    distance: number;
    weight: number;
}

export type TradeInfo = {
    commodity: string;
    cost: number;
}

export type FleetInfo = {
    name: string;
    period: number;
}

export type RaidInfo = {
    fleet: string;
    minAttraction: number;
    maxAttraction: number;
}

export type HazardInfo = {
    name: string;
    period: number;
}

export class System {
    name: string;
    position: Point;
    links: string[] = [];
    government = "";
    esData: ParsedData;
    attributes: string[] = [];
    objects: SystemObject[] = [];
    inaccessible = false;
    hidden = false;
    shrouded = false;
    music = "";
    arrival: TravelDistance = new TravelDistance();
    departure: TravelDistance = new TravelDistance();
    ramscoop = new RamscoopModifier();
    habitable = 0;
    belt: BeltInfo = { distance: 0, weight: 1 };
    invisibleFence = 10000;
    jumpRange = 0;
    haze = "";
    asteroids: AsteroidData[] = [];
    minables: AsteroidData[] = [];
    trades: TradeInfo[] = [];
    fleets: FleetInfo[] = [];
    raids: RaidInfo[] = [];
    noRaid = false;
    hazards: HazardInfo[] = [];
    starfieldDensity = 1;
    isSelected = false;

    static fromLine(data: ParsedData, dataLine: Line) {
        if (dataLine.tokens[0] != 'system') {
            throw new Error("Not a system");
        }

        const name = dataLine.tokens[1];
        let pos: Point = {x:0, y:0};
        let foundPos = false;
        let links: string[] = [];
        let government = "";
        let attributes: string[] = [];
        const objects: SystemObject[] = [];
        let arrival = new TravelDistance();
        let departure = new TravelDistance();
        let inaccessible = false;
        let hidden = false;
        let shrouded = false;
        let music = "";
        let ramscoop = new RamscoopModifier();
        let habitable = 0;
        let belt: BeltInfo = { distance: 0, weight: 1 };
        let invisibleFence = 10000;
        let jumpRange = 0;
        let haze = "";
        let asteroids: AsteroidData[] = [];
        let minables: AsteroidData[] = [];
        let trades: TradeInfo[] = [];
        let fleets: FleetInfo[] = [];
        let raids: RaidInfo[] = [];
        let noRaid = false;
        let hazards: HazardInfo[] = [];
        let starfieldDensity = 1;

        for (let child of dataLine.children) {
            switch (child.tokens[0]) {
                // Extract the position
                case 'pos':
                    pos = {
                        x: parseInt(child.tokens[1]),
                        y: parseInt(child.tokens[2])
                    };
                    foundPos = true;
                    break;
                // Extract the links
                case 'link':
                    links.push(child.tokens[1]);
                    break;
                // Set the system government
                case 'government':
                    government = child.tokens[1];
                    break;
                // Save a list of attributes
                case 'attributes':
                    attributes = child.tokens.slice(1);
                    break;
                // Parse the objects in the system
                case 'object':
                    objects.push(SystemObject.fromLine(data, child));
                    break;
                // Parse the arrival distance
                case 'arrival':
                    arrival = TravelDistance.fromLine(data, child);
                    break;
                // Parse the departure distance
                case 'departure':
                    departure = TravelDistance.fromLine(data, child);
                    break;
                // Inaccessible system
                case 'inaccessible':
                    inaccessible = true;
                    break;
                // Hidden system
                case 'hidden':
                    hidden = true;
                    break;
                // Shrouded system
                case 'shrouded':
                    shrouded = true;
                    break;
                // Music for this specific system
                case 'music':
                    music = child.tokens[1];
                    break;
                // Changes to how the ramscoop works in this system
                case 'ramscoop':
                    ramscoop = RamscoopModifier.fromLine(data, child);
                    break;
                // Habitable zone
                case 'habitable':
                    habitable = parseInt(child.tokens[1]);
                    break;
                // Data for the asteroid belt
                case 'belt':
                    belt = {
                        distance: parseInt(child.tokens[1]),
                        weight: (child.tokens[2]) 
                            ? parseFloat(child.tokens[2]) 
                            : 1
                    }
                    break;
                // Invisible fence distance for the NPCs
                case 'invisible fence':
                    invisibleFence = parseInt(child.tokens[1]);
                    break;
                // Jump range
                case 'jump range':
                    jumpRange = parseInt(child.tokens[1]);
                    break;
                // Haze sprite
                case 'haze':
                    haze = child.tokens[1];
                    break;
                // Asteroid type data
                case 'asteroids':
                    asteroids.push({ 
                        name: child.tokens[1],
                        count: parseInt(child.tokens[2]),
                        energy: parseFloat(child.tokens[3])
                    });
                    break;
                // Mineable type data
                case 'minables':
                    minables.push({ 
                        name: child.tokens[1],
                        count: parseInt(child.tokens[2]),
                        energy: parseFloat(child.tokens[3])
                    });
                    break;
                // Trade info
                case 'trade':
                    trades.push({
                        commodity: child.tokens[1],
                        cost: parseInt(child.tokens[2])
                    });
                    break;
                // Fleets that will spawn
                case 'fleet':
                    fleets.push({
                        name: child.tokens[1],
                        period: parseInt(child.tokens[2])
                    });
                    break;
                // Raids coming into the system
                case 'raid':
                    raids.push({
                        fleet: child.tokens[1],
                        minAttraction: parseInt(child.tokens[2]),
                        maxAttraction: parseInt(child.tokens[3])
                    });
                    break;
                case 'no raid':
                    noRaid = true;
                    break;
                // Hazards present in the system
                case 'hazard':
                    hazards.push({
                        name: child.tokens[1],
                        period: parseInt(child.tokens[2])
                    });
                    break;
                // Density of the stars in the background
                case 'starfield density':
                    starfieldDensity = parseFloat(child.tokens[1])
                    break;
            }
        }

        if (!foundPos) {
            throw new Error("No position found for this system");
        }

        const system = new System(data, name, pos);
        system.links = links;
        system.government = government;
        system.attributes = attributes;
        system.objects = objects;
        system.arrival = arrival;
        system.departure = departure;
        system.inaccessible = inaccessible;
        system.hidden = hidden;
        system.shrouded = shrouded;
        system.music = music;
        system.ramscoop = ramscoop;
        system.habitable = habitable;
        system.belt = belt;
        system.invisibleFence = invisibleFence;
        system.jumpRange = jumpRange;
        system.haze = haze;
        system.asteroids = asteroids;
        system.minables = minables;
        system.trades = trades;
        system.fleets = fleets;
        system.raids = raids;
        system.noRaid = noRaid;
        system.hazards = hazards;
        system.starfieldDensity = starfieldDensity;

        return system;
    }

    constructor(data: ParsedData, name: string, pos: Point) {
        this.name = name;
        this.position = pos;
        this.esData = data;
    }
}
