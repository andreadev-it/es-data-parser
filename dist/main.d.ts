import { FileRoot } from "./structures";
export declare function parseFile(file: File, filename: string): Promise<FileRoot>;
export declare function parseText(data: string, filename: string): FileRoot;
