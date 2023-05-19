import { Line } from "es-data-parser/structures";
import { ParsedData } from "./ParsedData";
import { Color } from "./Color";
import { SystemObject } from "./SystemObject";
import { Point } from "../utils";

export type SystemLink = [Point, Point];

export class System {
    name: string;
    position: Point;
    links: string[] = [];
    government: string = "";
    esData: ParsedData;
    attributes: string[] = [];
    objects: SystemObject[] = [];
    isSelected = false;

    static fromLine(data: ParsedData, dataLine: Line) {
        if (dataLine.tokens[0] != 'system') {
            throw new Error("Not a system");
        }

        const name = dataLine.tokens[1];
        let pos: Point = {x:0, y:0};
        let foundPos = false;
        let links: string[] = [];
        let government = "";
        let attributes: string[] = [];
        const objects: SystemObject[] = [];
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
                    objects.push(SystemObject.fromLine(data, child));
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

    constructor(data: ParsedData, name: string, pos: Point) {
        this.name = name;
        this.position = pos;
        this.esData = data;
    }
}
