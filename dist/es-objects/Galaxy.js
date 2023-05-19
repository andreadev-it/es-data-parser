"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Galaxy = void 0;
class Galaxy {
    static fromLine(data, dataLine) {
        if (dataLine.tokens[0] != 'galaxy') {
            throw new Error("Not a galaxy");
        }
        const name = dataLine.tokens[1];
        let pos = { x: 0, y: 0 };
        let foundPos = false;
        let sprite = "";
        for (let child of dataLine.children) {
            if (child.tokens[0] == 'pos') {
                pos = {
                    x: parseInt(child.tokens[1]),
                    y: parseInt(child.tokens[2])
                };
                foundPos = true;
                continue;
            }
            if (child.tokens[0] == 'sprite') {
                sprite = child.tokens[1];
            }
        }
        if (!foundPos) {
            throw new Error("No position found for this system");
        }
        const galaxy = new Galaxy(data, name, pos);
        galaxy.sprite = sprite;
        return galaxy;
    }
    constructor(data, name, pos) {
        this.position = { x: 0, y: 0 };
        this.sprite = "";
        this.name = name;
        this.position = pos;
        this.esData = data;
    }
}
exports.Galaxy = Galaxy;
