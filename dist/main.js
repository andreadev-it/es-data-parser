// import { parse } from "./parser";
import { ParsedData } from "./es-objects/ParsedData";
import { lex } from "./lexer";
import { parse } from "./parser";
import { readFile } from "./utils";
export async function parseFile(file, filename, previousData) {
    const parsedData = previousData !== null && previousData !== void 0 ? previousData : new ParsedData();
    let fileContent = await readFile(file);
    let data = lex(fileContent, filename);
    parse(data, parsedData);
    return parsedData;
}
export async function parseFiles(files) {
    const parsedData = new ParsedData();
    for (let file of files) {
        await parseFile(file, file.webkitRelativePath, parsedData);
    }
    return parsedData;
}
