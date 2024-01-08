import { MinablePayload } from "./MinablePayload";
export class Minable {
    constructor() {
        this.name = "";
        this.displayName = "";
        this.noun = "Asteroid";
        this.sprite = "";
        this.hull = 0;
        this.randomHull = 0;
        this.payloads = [];
        this.explosions = [];
    }
    static fromLine(data, dataLine) {
        var _a;
        if (dataLine.tokens[0] != 'minable') {
            throw new Error('Not a minable');
        }
        let minable = new Minable();
        minable.name = dataLine.tokens[1];
        minable.displayName = minable.name;
        let payloads = [];
        let explosions = [];
        for (let child of dataLine.children) {
            switch (child.tokens[0]) {
                case 'display name':
                    minable.displayName = child.tokens[1];
                    break;
                case 'noun':
                    minable.noun = child.tokens[1];
                    break;
                case 'sprite':
                    minable.sprite = child.tokens[1];
                    break;
                case 'hull':
                    minable.hull = parseInt(child.tokens[1]);
                    break;
                case 'random hull':
                    minable.randomHull = parseInt(child.tokens[1]);
                    break;
                case 'payload':
                    payloads.push(MinablePayload.fromLine(data, child));
                    break;
                case 'explode':
                    explosions.push({
                        effect: child.tokens[1],
                        count: parseInt((_a = child.tokens[2]) !== null && _a !== void 0 ? _a : 1)
                    });
                    break;
            }
        }
        minable.payloads = payloads;
        minable.explosions = explosions;
        return minable;
    }
}
