import { ParsedData } from "./es-objects/ParsedData";
import { System } from "./es-objects/System";
import { Galaxy } from "./es-objects/Galaxy";
import { Color } from "./es-objects/Color";
import { Government } from "./es-objects/Government";
import { Planet } from "./es-objects/Planet";
import { Wormhole } from "./es-objects/Wormhole";
import { Phrase } from "./es-objects/Phrase";
export function parse(root, previousData = null) {
    const parsedData = previousData !== null && previousData !== void 0 ? previousData : new ParsedData();
    const unparsed = new Set();
    for (let child of root.children) {
        switch (child.tokens[0]) {
            case 'system':
                parsedData.addStarSystem(System.fromLine(parsedData, child));
                break;
            case 'galaxy':
                parsedData.addGalaxy(Galaxy.fromLine(parsedData, child));
                break;
            case 'color':
                parsedData.addColor(Color.fromLine(parsedData, child));
                break;
            case 'government':
                parsedData.addGovernment(Government.fromLine(parsedData, child));
                break;
            case 'planet':
                parsedData.addPlanet(Planet.fromLine(parsedData, child));
                break;
            case 'wormhole':
                parsedData.addWormhole(Wormhole.fromLine(parsedData, child));
                break;
            case 'phrase':
                parsedData.addPhrase(Phrase.fromLine(parsedData, child));
                break;
            default:
                unparsed.add(child.tokens[0]);
        }
    }
    return parsedData;
}
