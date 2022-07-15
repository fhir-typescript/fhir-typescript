/**
 * Defines selection behavior of a group
 */
export declare const ActionSelectionBehaviorCodes: {
    /**
     * all: All the actions in the group must be selected as a single unit
     */
    readonly All: "all";
    /**
     * all-or-none: All the actions in the group are meant to be chosen as a single unit: either all must be selected by the end user, or none may be selected
     */
    readonly AllOrNone: "all-or-none";
    /**
     * any: Any number of the actions in the group may be chosen, from zero to all
     */
    readonly Any: "any";
    /**
     * at-most-one: The end user may choose zero or at most one of the actions in the group
     */
    readonly AtMostOne: "at-most-one";
    /**
     * exactly-one: The end user must choose one and only one of the selectable actions in the group. The user may not choose none of the actions in the group
     */
    readonly ExactlyOne: "exactly-one";
    /**
     * one-or-more: The end user must choose a minimum of one, and as many additional as desired
     */
    readonly OneOrMore: "one-or-more";
};
/**
 * Defines selection behavior of a group
 */
export declare type ActionSelectionBehaviorCodeType = typeof ActionSelectionBehaviorCodes[keyof typeof ActionSelectionBehaviorCodes];
//# sourceMappingURL=ActionSelectionBehaviorCodes.d.ts.map