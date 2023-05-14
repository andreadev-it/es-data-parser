import { parse } from "./parser";

export function parseFile(file: File) {
    const reader = new FileReader();

    reader.onload = () => {
        const data = reader.result as string;

        parse(data);
    };

    reader.readAsText(file);
}
