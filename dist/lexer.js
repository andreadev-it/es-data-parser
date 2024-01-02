import { Line, FileRoot } from "./structures";
export function lex(data, filename = "") {
    const root = new FileRoot([], 0, filename);
    let isQuoteOpen = false;
    let isComment = false;
    let currentQuote = "";
    let currentLine = new Line([], 0);
    let currentToken = "";
    let parentLevels = [root];
    for (let i = 0; i < data.length; i++) {
        const c = data[i];
        let nextLine = null;
        if (isComment && c != '\n')
            continue;
        switch (c) {
            // handle comments
            case '#':
                if (currentToken.length == 0 && !isQuoteOpen) {
                    isComment = true;
                }
                break;
            // handle quotes
            case '"':
            case '`':
                if (isQuoteOpen && c == currentQuote) {
                    isQuoteOpen = false;
                    if (currentToken.length == 0) {
                        currentLine.tokens.push('');
                    }
                    break;
                }
                if (!isQuoteOpen && currentToken.length == 0) {
                    isQuoteOpen = true;
                    currentQuote = c;
                    break;
                }
                if (!isQuoteOpen) {
                    throw new Error(`Unescaped quote in string after ${currentToken}`);
                }
                break;
            // handle newlines
            case '\n':
                if (currentToken != '' && !isComment) {
                    currentLine.tokens.push(currentToken);
                }
                currentToken = '';
                isComment = false;
                nextLine = new Line([], 0);
                // ignore blank lines
                if (currentLine.tokens.length == 0) {
                    currentLine = nextLine;
                    continue;
                }
                // handle too much indentation
                if (currentLine.indentation > parentLevels.length - 1) {
                    throw new Error(`Unexpected indentation for line ${currentLine.tokens.join(' ')}`);
                }
                // adding the line as children to its parent based on indentation
                if (currentLine.indentation >= 0) {
                    parentLevels[currentLine.indentation].children.push(currentLine);
                }
                // adding new line as parent level for following data
                if (currentLine.indentation == parentLevels.length - 1) {
                    parentLevels.push(currentLine);
                }
                else {
                    // if indentation is smaller then the number of parents, it means that
                    // previous deeper nested parents has ended their block, so we delete them
                    parentLevels = parentLevels.slice(0, currentLine.indentation + 1);
                    parentLevels.push(currentLine);
                }
                if (isQuoteOpen) {
                    throw new Error(`A quote was left open near: '${currentToken}'`);
                }
                currentLine = nextLine;
                break;
            // handle spaces
            case ' ':
                if (!isQuoteOpen) {
                    if (currentToken.length > 0) {
                        currentLine.tokens.push(currentToken);
                        currentToken = "";
                    }
                }
                else {
                    currentToken += " ";
                }
                break;
            // handle tabs
            case '\t':
                if (!isQuoteOpen &&
                    currentLine.tokens.length == 0 &&
                    currentToken.length == 0) {
                    currentLine.indentation++;
                }
                else if (!isQuoteOpen && currentToken.length > 0) {
                    // Add tabs as token separators too to avoid the error in some official files
                    currentLine.tokens.push(currentToken);
                    currentToken = "";
                }
                else {
                    currentToken += "\t";
                }
                break;
            // handle other characters
            default:
                currentToken += c;
        }
    }
    return root;
}
