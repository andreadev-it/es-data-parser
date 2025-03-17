import { Line } from "../structures";
import { ParsedData } from "./ParsedData";
import { ComparisonOp, TestableCondition, TestableSetMethod, isComparisonOp } from "../types";

class TestableCondition {
    condition: string = "";
    comp: ComparisonOp = "==";
    value: string | number = "";
    isNever: boolean = false;

    static fromLine(dataLine: Line) {
        let cond = new TestableCondition();

        switch (dataLine.tokens[0]) {
            case "never":
                cond.isNever = true;
                return cond;
            case "has":
                cond.condition = dataLine.tokens[1];
                cond.comp = "!=";
                cond.value = 0;
                return cond;
            case "not":
                cond.condition = dataLine.tokens[1];
                cond.comp = "==";
                cond.value = 0;
                return cond;
            default:
                cond.condition = dataLine.tokens[0];

                let operator = isComparisonOp(dataLine.tokens[1]);
                if (operator == null) {
                    throw new Error("Expected a comparison operator.");
                }
                cond.comp = operator;

                cond.value = dataLine.tokens[2];
                return cond;
        }
    }
}

export class TestableConditionSet {
    conditions: (TestableCondition | TestableConditionSet)[] = [];
    method: TestableSetMethod = TestableSetMethod.And;

    static fromLine(data: ParsedData, dataLine: Line) {
        let conditionSet = new TestableConditionSet();

        if (dataLine.tokens[0] == "or") {
            conditionSet.method = TestableSetMethod.Or;
        }

        for (let child of dataLine.children) {
            switch (child.tokens[0]) {
                case "and":
                case "or":
                    let childSet = TestableConditionSet.fromLine(data, child);
                    conditionSet.conditions.push(childSet);
                    break;
                default:
                    let cond = TestableCondition.fromLine(child);
                    conditionSet.conditions.push(cond);
                    break;
            }
        }

        return conditionSet;
    }
}
