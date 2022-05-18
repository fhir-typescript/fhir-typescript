import { Coding } from '../fhir/Coding.js';
/**
 * Defines the kinds of conditions that can appear on actions.
 */
export declare const ActionConditionKindCodings: {
    /**
     * applicability: The condition describes whether or not a given action is applicable.
     */
    readonly Applicability: Coding;
    /**
     * start: The condition is a starting condition for the action.
     */
    readonly Start: Coding;
    /**
     * stop: The condition is a stop, or exit condition for the action.
     */
    readonly Stop: Coding;
};
/**
 * Defines the kinds of conditions that can appear on actions.
 */
export declare type ActionConditionKindCodingType = typeof ActionConditionKindCodings;
//# sourceMappingURL=ActionConditionKindCodings.d.ts.map