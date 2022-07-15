/**
 * Identifies types of events that might trigger the start of a goal.
 */
export declare const GoalStartEventCodes: {
    /**
     * Code: 308283009
     */
    readonly DischargeFromHospital: "308283009";
    /**
     * Code: 32485007
     */
    readonly AdmissionToHospital: "32485007";
    /**
     * Code: 386216000
     */
    readonly Childbirth: "386216000";
    /**
     * Code: 442137000
     */
    readonly CompletionTimeOfProcedure: "442137000";
};
/**
 * Identifies types of events that might trigger the start of a goal.
 */
export declare type GoalStartEventCodeType = typeof GoalStartEventCodes[keyof typeof GoalStartEventCodes];
//# sourceMappingURL=GoalStartEventCodes.d.ts.map