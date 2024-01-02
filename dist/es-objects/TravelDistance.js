export class TravelDistance {
    constructor() {
        this.link = 0;
        this.jump = 0;
    }
    static fromLine(data, dataLine) {
        if (dataLine.tokens[0] != 'arrival' &&
            dataLine.tokens[0] != 'departure') {
            throw new Error("Not a travel distance (either 'arrival' or 'departure')");
        }
        let link = 0;
        let jump = 0;
        if (dataLine.tokens[1]) {
            link = jump = parseInt(dataLine.tokens[1]);
        }
        for (let child of dataLine.children) {
            switch (child.tokens[0]) {
                // Extract link distance
                case 'link':
                    link = parseInt(child.tokens[1]);
                    break;
                // Extract jump distance
                case 'jump':
                    jump = parseInt(child.tokens[1]);
                    break;
            }
        }
        const distance = new TravelDistance();
        distance.link = link;
        distance.jump = jump;
        return distance;
    }
}
