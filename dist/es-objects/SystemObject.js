import { Sprite } from "./Sprite";
export class SystemObject {
    constructor(esData) {
        this.esData = esData;
        this.name = "";
        this.sprite = null;
        this.distance = 0;
        this.period = 0;
        this.offset = 0;
        this.objects = [];
    }
    static fromLine(data, dataLine) {
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
