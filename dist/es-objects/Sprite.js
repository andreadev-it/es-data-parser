export class Sprite {
    constructor() {
        this.name = "";
        this.scale = 1;
    }
    static fromLine(data, dataLine) {
        if (dataLine.tokens[0] != 'sprite') {
            throw new Error('Not a sprite');
        }
        let sprite = new Sprite();
        sprite.name = dataLine.tokens[1];
        // check if there's a scaling for the sprite
        if (dataLine.children.length > 0) {
            if (dataLine.children[0].tokens[0] == 'scale') {
                sprite.scale = parseFloat(dataLine.children[0].tokens[1]);
            }
        }
        return sprite;
    }
}
