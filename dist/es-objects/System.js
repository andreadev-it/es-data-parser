import { SystemObject } from "./SystemObject";
import { TravelDistance } from "./TravelDistance";
import { RamscoopModifier } from "./RamscoopModifier";
export class System {
    constructor(data, name, pos) {
        this.links = [];
        this.government = "";
        this.attributes = [];
        this.objects = [];
        this.inaccessible = false;
        this.hidden = false;
        this.shrouded = false;
        this.music = "";
        this.arrival = new TravelDistance();
        this.departure = new TravelDistance();
        this.ramscoop = new RamscoopModifier();
        this.habitable = 0;
        this.belt = { distance: 0, weight: 1 };
        this.invisibleFence = 10000;
        this.jumpRange = 0;
        this.haze = "";
        this.asteroids = [];
        this.minables = [];
        this.isSelected = false;
        this.name = name;
        this.position = pos;
        this.esData = data;
    }
    static fromLine(data, dataLine) {
        if (dataLine.tokens[0] != 'system') {
            throw new Error("Not a system");
        }
        const name = dataLine.tokens[1];
        let pos = { x: 0, y: 0 };
        let foundPos = false;
        let links = [];
        let government = "";
        let attributes = [];
        const objects = [];
        let arrival = new TravelDistance();
        let departure = new TravelDistance();
        let inaccessible = false;
        let hidden = false;
        let shrouded = false;
        let music = "";
        let ramscoop = new RamscoopModifier();
        let habitable = 0;
        let belt = { distance: 0, weight: 1 };
        let invisibleFence = 10000;
        let jumpRange = 0;
        let haze = "";
        let asteroids = [];
        let minables = [];
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
                    };
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
        return system;
    }
}
