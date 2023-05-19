"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Color = void 0;
class Color {
    constructor(name, r, g, b, a = 255) {
        this.name = name;
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }
    toString() {
        if (this.a == 255) {
            return `rgb(${this.r}, ${this.g}, ${this.b})`;
        }
        return `rgba(${this.r}, ${this.g}, ${this.b}, ${this.a})`;
    }
    // The first argument is important to allow standardization across the different game objects
    static fromLine(_, dataLine) {
        let label = dataLine.tokens[1];
        let r = parseFloat(dataLine.tokens[2]);
        let g = parseFloat(dataLine.tokens[3]);
        let b = parseFloat(dataLine.tokens[4]);
        let a = 255;
        if (dataLine.tokens.length == 6) {
            a = parseFloat(dataLine.tokens[5]);
        }
        return Color.fromPercentages(label, r, g, b, a);
    }
    static fromPercentages(label, r, g, b, a) {
        return new Color(label, r * 255, g * 255, b * 255, a * 255);
    }
    static fromGovernment(data, govName) {
        let government = data.governments.get(govName);
        if (!government) {
            return null;
        }
        if (government.color instanceof Color) {
            return government.color;
        }
        let color = data.colors.get(government.color);
        if (!color) {
            return null;
        }
        return color;
    }
}
exports.Color = Color;
