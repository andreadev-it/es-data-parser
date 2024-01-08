import { FileRoot } from "./structures";
import { ParsedData } from "./es-objects/ParsedData";
import { System } from "./es-objects/System";
import { Galaxy } from "./es-objects/Galaxy";
import { Color } from "./es-objects/Color";
import { Government } from "./es-objects/Government";
import { Planet } from "./es-objects/Planet";
import { Wormhole } from "./es-objects/Wormhole";
import { Phrase } from "./es-objects/Phrase";
import { Star } from "./es-objects/Star";
import { Minable } from "./es-objects/Minable";


export function parse(root: FileRoot, previousData: ParsedData | null = null) {
    const parsedData = previousData ?? new ParsedData();

    const unparsed: Set<string> = new Set();
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
            case 'star':
                parsedData.addStarAttribute(Star.fromLine(parsedData, child));
                break;
            case 'minable':
                parsedData.addMinable(Minable.fromLine(parsedData, child));
                break;
            default:
                unparsed.add(child.tokens[0]);
        }
    }

    return parsedData;
}
