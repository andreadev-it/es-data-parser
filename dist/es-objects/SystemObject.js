export class SystemObject {
    constructor(esData, distance, period, offset = 0) {
        this.esData = esData;
        this.name = "";
        this.sprite = "";
        this.offset = 0;
        this.objects = [];
        this.distance = distance;
        this.period = period;
    }
    static fromLine(data, dataLine) {
        if (dataLine.tokens[0] != 'object') {
            throw new Error("Not an object");
        }
        const name = (dataLine.tokens.length == 2) ? dataLine.tokens[1] : "";
        let sprite = "";
        let distance = 0;
        let period = 0;
        let offset = 0;
        const objects = [];
        for (let child of dataLine.children) {
            switch (child.tokens[0]) {
                case 'sprite':
                    sprite = child.tokens[1];
                    break;
                case 'distance':
                    distance = parseFloat(child.tokens[1]);
                    break;
                case 'period':
                    period = parseFloat(child.tokens[1]);
                    break;
                case 'offset':
                    offset = parseFloat(child.tokens[1]);
                    break;
                case 'object':
                    objects.push(SystemObject.fromLine(data, child));
            }
        }
        const systemObject = new SystemObject(data, distance, period, offset);
        systemObject.name = name;
        systemObject.objects = objects;
        systemObject.sprite = sprite;
        return systemObject;
    }
}
