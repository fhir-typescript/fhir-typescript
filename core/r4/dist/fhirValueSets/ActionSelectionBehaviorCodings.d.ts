import { Coding } from '../fhir/Coding.js';
/**
 * Defines selection behavior of a group.
 */
export declare const ActionSelectionBehaviorCodings: {
    /**
     * all: All the actions in the group must be selected as a single unit.
     */
    readonly All: Coding;
    /**
     * all-or-none: All the actions in the group are meant to be chosen as a single unit: either all must be selected by the end user, or none may be selected.
     */
    readonly AllOrNone: Coding;
    /**
     * any: Any number of the actions in the group may be chosen, from zero to all.
     */
    readonly Any: Coding;
    /**
     * at-most-one: The end user may choose zero or at most one of the actions in the group.
     */
    readonly AtMostOne: Coding;
    /**
     * exactly-one: The end user must choose one and only one of the selectable actions in the group. The user SHALL NOT choose none of the actions in the group.
     */
    readonly ExactlyOne: Coding;
    /**
     * one-or-more: The end user must choose a minimum of one, and as many additional as desired.
     */
    readonly OneOrMore: Coding;
};
/**
 * Defines selection behavior of a group.
 */
export declare type ActionSelectionBehaviorCodingType = typeof ActionSelectionBehaviorCodings;
//# sourceMappingURL=ActionSelectionBehaviorCodings.d.ts.map