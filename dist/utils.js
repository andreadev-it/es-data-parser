export function readFile(file) {
    return new Promise((resolve, _) => {
        const reader = new FileReader();
        reader.onload = () => {
            resolve(reader.result);
        };
        reader.readAsText(file);
    });
}
