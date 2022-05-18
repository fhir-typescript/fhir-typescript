/**
 * Whether a reference needs to be version specific or version independent, or whether either can be used.
 */
export declare const ReferenceVersionRulesCodes: {
    /**
     * either: The reference may be either version independent or version specific.
     */
    readonly EitherSpecificOrIndependent: "either";
    /**
     * independent: The reference must be version independent.
     */
    readonly VersionIndependent: "independent";
    /**
     * specific: The reference must be version specific.
     */
    readonly VersionSpecific: "specific";
};
/**
 * Whether a reference needs to be version specific or version independent, or whether either can be used.
 */
export declare type ReferenceVersionRulesCodeType = typeof ReferenceVersionRulesCodes[keyof typeof ReferenceVersionRulesCodes];
//# sourceMappingURL=ReferenceVersionRulesCodes.d.ts.map