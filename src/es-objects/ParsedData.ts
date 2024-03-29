import { Galaxy } from "./Galaxy";
import { System } from "./System";
import { Color } from "./Color";
import { Government } from "./Government";
import { Wormhole } from "./Wormhole";
import { Planet } from "./Planet";
import { Phrase } from "./Phrase";
import { Star } from "./Star";
import { Minable } from "./Minable";


export class ParsedData {
    galaxies: Map<string, Galaxy> = new Map();
    starSystems: Map<string, System> = new Map();
    colors: Map<string, Color> = new Map();
    governments: Map<string, Government> = new Map();
    planets: Map<string, Planet> = new Map();
    wormholes: Map<string, Wormhole> = new Map();
    phrases: Map<string, Phrase[]> = new Map();
    starAttributes: Map<string, Star> = new Map();
    minables: Map<string, Minable> = new Map();

    constructor() {}

    addGalaxy(galaxy: Galaxy) {
        this.galaxies.set(galaxy.name, galaxy);
    }

    addStarSystem(starSystem: System) {
        this.starSystems.set(starSystem.name, starSystem);
    }

    addColor(color: Color) {
        this.colors.set(color.name, color);
    }

    addGovernment(gov: Government) {
        this.governments.set(gov.name, gov);
    }

    addPlanet(planet: Planet) {
        this.planets.set(planet.name, planet);
    }

    addWormhole(wormhole: Wormhole) {
        this.wormholes.set(wormhole.name, wormhole);
    }

    addPhrase(phrase: Phrase) {
        if (this.phrases.has(phrase.name)) {
            this.phrases.get(phrase.name)!.push(phrase);
        }
        else {
            this.phrases.set(phrase.name, [phrase]);
        }
    }

    addStarAttribute(star: Star) {
        this.starAttributes.set(star.name, star);
    }

    addMinable(minable: Minable) {
        this.minables.set(minable.name, minable);
    }
}
