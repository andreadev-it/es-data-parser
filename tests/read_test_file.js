const fs = require('fs');
const { parse } = require('../dist/parser.js');

fs.readFile('./map systems.txt', 'utf8', (err, data) => {
    if (err) throw err;

    const root = parse(data);

    printLineDeep(root);
})

function printLineDeep(line, prefix = '') {
    const linestr = line.toString();
    console.log(prefix + linestr);
    for (const child of line.children) {
        printLineDeep(child, prefix + linestr + " -> ");
    }
}
