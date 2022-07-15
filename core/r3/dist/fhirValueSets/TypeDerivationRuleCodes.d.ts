/**
 * How a type relates to its baseDefinition.
 */
export declare const TypeDerivationRuleCodes: {
    /**
     * constraint: This definition adds additional rules to an existing concrete type
     */
    readonly Constraint: "constraint";
    /**
     * specialization: This definition defines a new type that adds additional elements to the base type
     */
    readonly Specialization: "specialization";
};
/**
 * How a type relates to its baseDefinition.
 */
export declare type TypeDerivationRuleCodeType = typeof TypeDerivationRuleCodes[keyof typeof TypeDerivationRuleCodes];
//# sourceMappingURL=TypeDerivationRuleCodes.d.ts.map