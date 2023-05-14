import { parse } from "./parser";
export function parseFile(file) {
    return new Promise((resolve, _) => {
        const reader = new FileReader();
        reader.onload = () => {
            const data = reader.result;
            resolve(parse(data));
        };
        reader.readAsText(file);
    });
}
export function parseText(data) {
    return parse(data);
}
