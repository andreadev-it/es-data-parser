export declare class Line {
    tokens: string[];
    indentation: number;
    children: Line[];
    constructor(tokens: string[], indentation: number);
    toString(): string;
}
export declare class FileRoot extends Line {
    tokens: string[];
    indentation: number;
    isRoot: boolean;
    filename: string;
    constructor(tokens: string[], indentation: number, filename: string);
}
//# sourceMappingURL=structures.d.ts.map