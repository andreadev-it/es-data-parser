import { Line } from "../structures";
import { Endpoint, Label } from "../types";
import { ParsedData } from "./ParsedData";

export class ConversationText {
    text: string = '';
    next: Endpoint | Label | null = null;

    static fromLine(data: ParsedData, dataLine: Line) {
        let textNode = new ConversationText();
        textNode.text = dataLine.tokens[0];

        // TODO: parse endpoints and gotos

        return textNode;
    }
}
