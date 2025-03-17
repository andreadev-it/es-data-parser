import { Line } from '../structures';
import { Label } from '../types';
import { ParsedData } from './ParsedData';

export class Conversation {
    name: string = "";
    scene: string = "";
    // pieces: ConversationPiece[] = [];
    labels: Label[] = []

    static fromLine(data: ParsedData, dataLine: Line) {
        // TODO
    }
}
