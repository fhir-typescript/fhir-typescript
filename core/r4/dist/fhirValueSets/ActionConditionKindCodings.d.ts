import { CodingArgs } from '../fhir/Coding.js';
/**
 * Defines the kinds of conditions that can appear on actions.
 */
export declare type ActionConditionKindCodingType = {
    /**
     * applicability: The condition describes whether or not a given action is applicable.
     */
    Applicability: CodingArgs;
    /**
     * start: The condition is a starting condition for the action.
     */
    Start: CodingArgs;
    /**
     * stop: The condition is a stop, or exit condition for the action.
     */
    Stop: CodingArgs;
};
/**
 * Defines the kinds of conditions that can appear on actions.
 */
export declare const ActionConditionKindCodings: ActionConditionKindCodingType;
//# sourceMappingURL=ActionConditionKindCodings.d.ts.map