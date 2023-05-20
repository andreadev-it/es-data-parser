"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parse = void 0;
const ParsedData_1 = require("./es-objects/ParsedData");
const System_1 = require("./es-objects/System");
const Galaxy_1 = require("./es-objects/Galaxy");
const Color_1 = require("./es-objects/Color");
const Government_1 = require("./es-objects/Government");
const Planet_1 = require("./es-objects/Planet");
const Wormhole_1 = require("./es-objects/Wormhole");
function parse(root, previousData = null) {
    const parsedData = previousData !== null && previousData !== void 0 ? previousData : new ParsedData_1.ParsedData();
    for (let child of root.children) {
        if (child.tokens[0] == 'system') {
            parsedData.addStarSystem(System_1.System.fromLine(parsedData, child));
        }
        else if (child.tokens[0] == 'galaxy') {
            parsedData.addGalaxy(Galaxy_1.Galaxy.fromLine(parsedData, child));
        }
        else if (child.tokens[0] == 'color') {
            parsedData.addColor(Color_1.Color.fromLine(parsedData, child));
        }
        else if (child.tokens[0] == 'government') {
            parsedData.addGovernment(Government_1.Government.fromLine(parsedData, child));
        }
        else if (child.tokens[0] == 'planet') {
            parsedData.addPlanet(Planet_1.Planet.fromLine(parsedData, child));
        }
        else if (child.tokens[0] == 'wormhole') {
            parsedData.addWormhole(Wormhole_1.Wormhole.fromLine(parsedData, child));
        }
    }
    return parsedData;
}
exports.parse = parse;
