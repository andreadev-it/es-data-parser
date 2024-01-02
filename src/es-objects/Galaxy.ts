import { Line } from "../structures";
import { ParsedData } from "./ParsedData";
import { Point } from "../utils";

export class Galaxy {
    esData: ParsedData;

    name: string;
    position: Point = {x:0, y:0};
    sprite = "";

    static fromLine(data: ParsedData, dataLine: Line) {
        if (dataLine.tokens[0] != 'galaxy') {
            throw new Error("Not a galaxy");
        }

        const name = dataLine.tokens[1];
        let pos: Point = {x:0, y:0};
        let foundPos = false;
        let sprite: string = "";
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

    constructor(data: ParsedData, name: string, pos: Point) {
        this.name = name;
        this.position = pos;
        this.esData = data;
    }
}
