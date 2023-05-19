import { ParsedData } from "./es-objects/ParsedData";
export declare function parseFile(file: File, filename: string, previousData: ParsedData): Promise<ParsedData>;
export declare function parseFiles(files: File[]): Promise<ParsedData>;
