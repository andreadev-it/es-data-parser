import { parse } from "./parser";
import { FileRoot } from "./structures";

export function parseFile(file: File) {
    return new Promise<FileRoot>((resolve, _) => {
        const reader = new FileReader();

        reader.onload = () => {
            const data = reader.result as string;

            resolve(parse(data));
        };

        reader.readAsText(file);
        
    })
}

export function parseText(data: string) {
    return parse(data);
}
