export declare class Line {
    tokens: string[];
    indentation: number;
    children: Line[];
    constructor(tokens: string[], indentation: number);
    toString(): string;
}
export declare class FileRoot extends Line {
    isRoot: boolean;
}
