import { Line } from "../structures";
import { ExplosionInfo } from "../types";
import { MinablePayload } from "./MinablePayload";
import { ParsedData } from "./ParsedData";

export class Minable {
    name = "";
    displayName = "";
    noun = "Asteroid";
    sprite = "";
    hull = 0;
    randomHull = 0;
    payloads: MinablePayload[] = [];
    explosions: ExplosionInfo[] = [];

    static fromLine(data: ParsedData, dataLine: Line) {
        if (dataLine.tokens[0] != 'minable') {
            throw new Error('Not a minable');
        }

        let minable = new Minable();

        minable.name = dataLine.tokens[1];
        minable.displayName = minable.name;

        let payloads: MinablePayload[] = [];
        let explosions: ExplosionInfo[] = [];

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
                        count: parseInt(child.tokens[2] ?? 1)
                    });
                    break;
            }
        }

        minable.payloads = payloads;
        minable.explosions = explosions;

        return minable;
    }
}
