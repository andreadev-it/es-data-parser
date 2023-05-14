import { parse } from "./parser";
export function parseFile(file, filename) {
    return new Promise((resolve, _) => {
        const reader = new FileReader();
        reader.onload = () => {
            const data = reader.result;
            resolve(parse(data, filename));
        };
        reader.readAsText(file);
    });
}
export function parseText(data, filename) {
    return parse(data, filename);
}
