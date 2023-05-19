import { Galaxy } from "./Galaxy";
import { System } from "./System";
import { Color } from "./Color";
import { Government } from "./Government";
import { Wormhole } from "./Wormhole";
import { Planet } from "./Planet";


export class ParsedData {
    galaxies: Map<string, Galaxy> = new Map();
    starSystems: Map<string, System> = new Map();
    colors: Map<string, Color> = new Map();
    governments: Map<string, Government> = new Map();
    planets: Map<string, Planet> = new Map();
    wormholes: Map<string, Wormhole> = new Map();

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
}
