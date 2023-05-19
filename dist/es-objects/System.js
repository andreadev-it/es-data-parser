"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.System = void 0;
const SystemObject_1 = require("./SystemObject");
class System {
    static fromLine(data, dataLine) {
        if (dataLine.tokens[0] != 'system') {
            throw new Error("Not a system");
        }
        const name = dataLine.tokens[1];
        let pos = { x: 0, y: 0 };
        let foundPos = false;
        let links = [];
        let government = "";
        let attributes = [];
        const objects = [];
        for (let child of dataLine.children) {
            switch (child.tokens[0]) {
                // Extract the position
                case 'pos':
                    pos = {
                        x: parseInt(child.tokens[1]),
                        y: parseInt(child.tokens[2])
                    };
                    foundPos = true;
                    break;
                // Extract the links
                case 'link':
                    links.push(child.tokens[1]);
                    break;
                // Set the system government
                case 'government':
                    government = child.tokens[1];
                    break;
                // Save a list of attributes
                case 'attributes':
                    attributes = child.tokens.slice(1);
                    break;
                // Parse the objects in the system
                case 'object':
                    objects.push(SystemObject_1.SystemObject.fromLine(data, child));
            }
        }
        if (!foundPos) {
            throw new Error("No position found for this system");
        }
        const system = new System(data, name, pos);
        system.links = links;
        system.government = government;
        system.attributes = attributes;
        system.objects = objects;
        return system;
    }
    constructor(data, name, pos) {
        this.links = [];
        this.government = "";
        this.attributes = [];
        this.objects = [];
        this.isSelected = false;
        this.name = name;
        this.position = pos;
        this.esData = data;
    }
}
exports.System = System;
