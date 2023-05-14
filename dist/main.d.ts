import { FileRoot } from "./structures";
export declare function parseFile(file: File): Promise<FileRoot>;
export declare function parseText(data: string): FileRoot;
