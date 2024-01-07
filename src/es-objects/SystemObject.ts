// This class represents different kind of objects
// that you can find in a star system. 
import { ParsedData } from "./ParsedData";
import { Line } from "../structures";
import { Sprite } from "./Sprite";

export class SystemObject {
    name = "";
    sprite: Sprite | null = null;
    distance: number = 0;
    period: number = 0;
    offset: number = 0;
    objects: SystemObject[] = [];

    constructor(private esData: ParsedData) { }

    static fromLine(data: ParsedData, dataLine: Line) {
        if (dataLine.tokens[0] != 'object') {
            throw new Error("Not an object");
        }

        const systemObject = new SystemObject(data);
        systemObject.name = (dataLine.tokens.length == 2) ? dataLine.tokens[1] : "";

        const objects = [];
        for (let child of dataLine.children) {
            switch (child.tokens[0]) {
                case 'sprite':
                    systemObject.sprite = Sprite.fromLine(data, child);
                    break;
                case 'distance':
                    systemObject.distance = parseFloat(child.tokens[1]);
                    break;
                case 'period':
                    systemObject.period = parseFloat(child.tokens[1]);
                    break;
                case 'offset':
                    systemObject.offset = parseInt(child.tokens[1]);
                    break;
                case 'object':
                    objects.push(SystemObject.fromLine(data, child));
            }
        }

        systemObject.objects = objects;

        return systemObject;
    }
}
