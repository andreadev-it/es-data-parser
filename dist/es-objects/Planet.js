"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Planet = void 0;
class Planet {
    constructor(esData, name) {
        this.esData = esData;
        this.name = name;
        this.wormhole = "";
    }
    static fromLine(data, dataLine) {
        if (dataLine.tokens[0] != 'planet') {
            throw new Error("Not a planet");
        }
        const name = dataLine.tokens[1];
        let wormhole = "";
        for (let child of dataLine.children) {
            if (child.tokens[0] == 'wormhole') {
                wormhole = child.tokens[1];
            }
        }
        let planet = new Planet(data, name);
        planet.wormhole = wormhole;
        return planet;
    }
}
exports.Planet = Planet;
