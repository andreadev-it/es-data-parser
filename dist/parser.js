import { Line, FileRoot } from "./structures";
export function parse(data) {
    const root = new FileRoot([], 0);
    let isQuoteOpen = false;
    let isComment = false;
    let currentQuote = "";
    let currentLine = new Line([], 0);
    let currentToken = "";
    let parentLevels = [root];
    for (let i = 0; i < data.length; i++) {
        const c = data[i];
        let nextLine = null;
        switch (c) {
            // handle comments
            case '#':
                if (currentLine.tokens.length == 0) {
                    isComment = true;
                }
                break;
            // handle quotes
            case '"':
            case '`':
                if (isQuoteOpen && c == currentQuote) {
                    isQuoteOpen = false;
                }
                else if (!isQuoteOpen && currentToken.length == 0) {
                    isQuoteOpen = true;
                    currentQuote = c;
                }
                else if (!isQuoteOpen) {
                    throw new Error(`Unescaped quote in string after ${currentToken}`);
                }
                break;
            // handle newlines
            case '\n':
                if (currentToken != '') {
                    currentLine.tokens.push(currentToken);
                    currentToken = '';
                }
                nextLine = new Line([], 0);
                // ignore comments and blank lines
                if (isComment || currentLine.tokens.length == 0) {
                    currentLine = nextLine;
                    isComment = false;
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
                currentLine.indentation++;
                break;
            // handle other characters
            default:
                currentToken += c;
        }
    }
    return root;
}
