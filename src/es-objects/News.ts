import { Line } from "../structures";
import { ParsedData } from "./ParsedData";
import { Phrase } from "./Phrase";
import { TestableConditionSet } from "./TestableConditionSet";

export class News {
    name = "";
    personName: Phrase | null = null;
    portraits: string[] = [];
    message: Phrase | null = null;
    location: any = null;
    toShow: TestableConditionSet | null = null;

    // The first argument is important to allow standardization across the different game objects
    static fromLine(data: ParsedData, dataLine: Line) {
        let news = new News();

        news.name = dataLine.tokens[1];

        for (let child of dataLine.children) {
            switch (child.tokens[0]) {
                case 'name':
                    news.personName = Phrase.fromSpecs(data, child);
                    break;
                case 'portrait':
                    let paths = child.tokens.slice(1);
                    for (let other of child.children) {
                        paths = [...paths, ...other.tokens];
                    }
                    news.portraits = paths;
                    break;
                case 'message':
                    news.message = Phrase.fromSpecs(data, child);
                    break;
                case 'location':
                    // TODO: Implement location filters
                    news.location = null;
                    break;
                case 'toShow':
                    news.toShow = TestableConditionSet.fromLine(data, child);
                    break;
            }
        }

        return news;
    }
}
