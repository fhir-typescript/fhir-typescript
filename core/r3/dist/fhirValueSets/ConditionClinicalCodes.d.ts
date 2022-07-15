/**
 * Preferred value set for Condition Clinical Status.
 */
export declare const ConditionClinicalCodes: {
    /**
     * active: The subject is currently experiencing the symptoms of the condition or there is evidence of the condition.
     */
    readonly Active: "active";
    /**
     * inactive: The subject is no longer experiencing the symptoms of the condition or there is no longer evidence of the condition.
     */
    readonly Inactive: "inactive";
    /**
     * recurrence: The subject is having a relapse or re-experiencing the condition after a period of remission or presumed resolution.
     */
    readonly Recurrence: "recurrence";
    /**
     * remission: The subject is no longer experiencing the symptoms of the condition, but there is a risk of the symptoms returning.
     */
    readonly Remission: "remission";
    /**
     * resolved: The subject is no longer experiencing the symptoms of the condition and there is a negligible perceived risk of the symptoms returning.
     */
    readonly Resolved: "resolved";
};
/**
 * Preferred value set for Condition Clinical Status.
 */
export declare type ConditionClinicalCodeType = typeof ConditionClinicalCodes[keyof typeof ConditionClinicalCodes];
//# sourceMappingURL=ConditionClinicalCodes.d.ts.map