export class ParsedData {
    constructor() {
        this.galaxies = new Map();
        this.starSystems = new Map();
        this.colors = new Map();
        this.governments = new Map();
        this.planets = new Map();
        this.wormholes = new Map();
    }
    addGalaxy(galaxy) {
        this.galaxies.set(galaxy.name, galaxy);
    }
    addStarSystem(starSystem) {
        this.starSystems.set(starSystem.name, starSystem);
    }
    addColor(color) {
        this.colors.set(color.name, color);
    }
    addGovernment(gov) {
        this.governments.set(gov.name, gov);
    }
    addPlanet(planet) {
        this.planets.set(planet.name, planet);
    }
    addWormhole(wormhole) {
        this.wormholes.set(wormhole.name, wormhole);
    }
}
