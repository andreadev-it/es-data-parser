import { Galaxy } from "./Galaxy";
import { System } from "./System";
import { Color } from "./Color";
import { Government } from "./Government";
import { Wormhole } from "./Wormhole";
import { Planet } from "./Planet";
export declare class ParsedData {
    galaxies: Map<string, Galaxy>;
    starSystems: Map<string, System>;
    colors: Map<string, Color>;
    governments: Map<string, Government>;
    planets: Map<string, Planet>;
    wormholes: Map<string, Wormhole>;
    constructor();
    addGalaxy(galaxy: Galaxy): void;
    addStarSystem(starSystem: System): void;
    addColor(color: Color): void;
    addGovernment(gov: Government): void;
    addPlanet(planet: Planet): void;
    addWormhole(wormhole: Wormhole): void;
}