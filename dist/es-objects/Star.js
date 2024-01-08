export class Star {
    constructor() {
        this.name = "";
        this.power = 1;
        this.wind = 1;
    }
    static fromLine(data, dataLine) {
        if (dataLine.tokens[0] != 'star') {
            throw new Error('Not a star');
        }
        let star = new Star();
        star.name = dataLine.tokens[1];
        for (let child of dataLine.children) {
            switch (child.tokens[0]) {
                case 'power':
                    star.power = parseFloat(child.tokens[1]);
                    break;
                case 'wind':
                    star.wind = parseFloat(child.tokens[1]);
                    break;
            }
        }
        return star;
    }
}
