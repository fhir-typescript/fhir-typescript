/**
 * Defines the kinds of conditions that can appear on actions.
 */
export declare const ActionConditionKindCodes: {
    /**
     * applicability: The condition describes whether or not a given action is applicable.
     */
    readonly Applicability: "applicability";
    /**
     * start: The condition is a starting condition for the action.
     */
    readonly Start: "start";
    /**
     * stop: The condition is a stop, or exit condition for the action.
     */
    readonly Stop: "stop";
};
/**
 * Defines the kinds of conditions that can appear on actions.
 */
export declare type ActionConditionKindCodeType = typeof ActionConditionKindCodes[keyof typeof ActionConditionKindCodes];
//# sourceMappingURL=ActionConditionKindCodes.d.ts.map