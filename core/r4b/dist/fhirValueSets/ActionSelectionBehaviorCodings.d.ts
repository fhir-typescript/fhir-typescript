import { CodingArgs } from '../fhir/Coding.js';
/**
 * Defines selection behavior of a group.
 */
export declare type ActionSelectionBehaviorCodingType = {
    /**
     * all: All the actions in the group must be selected as a single unit.
     */
    All: CodingArgs;
    /**
     * all-or-none: All the actions in the group are meant to be chosen as a single unit: either all must be selected by the end user, or none may be selected.
     */
    AllOrNone: CodingArgs;
    /**
     * any: Any number of the actions in the group may be chosen, from zero to all.
     */
    Any: CodingArgs;
    /**
     * at-most-one: The end user may choose zero or at most one of the actions in the group.
     */
    AtMostOne: CodingArgs;
    /**
     * exactly-one: The end user must choose one and only one of the selectable actions in the group. The user SHALL NOT choose none of the actions in the group.
     */
    ExactlyOne: CodingArgs;
    /**
     * one-or-more: The end user must choose a minimum of one, and as many additional as desired.
     */
    OneOrMore: CodingArgs;
};
/**
 * Defines selection behavior of a group.
 */
export declare const ActionSelectionBehaviorCodings: ActionSelectionBehaviorCodingType;
//# sourceMappingURL=ActionSelectionBehaviorCodings.d.ts.map