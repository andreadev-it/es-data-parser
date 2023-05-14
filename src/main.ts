import { parse } from "./parser";
import { FileRoot } from "./structures";

export function parseFile(file: File, filename: string) {
    return new Promise<FileRoot>((resolve, _) => {
        const reader = new FileReader();

        reader.onload = () => {
            const data = reader.result as string;

            resolve(parse(data, filename));
        };

        reader.readAsText(file);
        
    })
}

export function parseText(data: string, filename: string) {
    return parse(data, filename);
}
