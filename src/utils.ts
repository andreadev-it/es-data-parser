export type Point = {
    x: number;
    y: number
}

export function readFile(file: File): Promise<string> {
    return new Promise((resolve, _) => {
        const reader = new FileReader();
        reader.onload = () => {
            resolve(reader.result as string);
        };
        reader.readAsText(file);
    });
}
