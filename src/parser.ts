import { FileRoot } from "./structures";
import { ParsedData } from "./es-objects/ParsedData";
import { System } from "./es-objects/System";
import { Galaxy } from "./es-objects/Galaxy";
import { Color } from "./es-objects/Color";
import { Government } from "./es-objects/Government";
import { Planet } from "./es-objects/Planet";
import { Wormhole } from "./es-objects/Wormhole";


export async function parse(root: FileRoot, previousData: ParsedData | null = null) {
    const parsedData = previousData ?? new ParsedData();

    for (let child of root.children) {
        if (child.tokens[0] == 'system') {
            parsedData.addStarSystem(System.fromLine(parsedData, child));
        }
        else if (child.tokens[0] == 'galaxy') {
            parsedData.addGalaxy(Galaxy.fromLine(parsedData, child));
        }
        else if (child.tokens[0] == 'color') {
            parsedData.addColor(Color.fromLine(parsedData, child));
        }
        else if (child.tokens[0] == 'government') {
            parsedData.addGovernment(Government.fromLine(parsedData, child));
        }
        else if (child.tokens[0] == 'planet') {
            parsedData.addPlanet(Planet.fromLine(parsedData, child));
        }
        else if (child.tokens[0] == 'wormhole') {
            parsedData.addWormhole(Wormhole.fromLine(parsedData, child));
        }
    }

    return parsedData;
}
