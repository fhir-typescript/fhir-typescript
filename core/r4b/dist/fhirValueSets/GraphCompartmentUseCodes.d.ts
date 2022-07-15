/**
 * Defines how a compartment rule is used.
 */
export declare const GraphCompartmentUseCodes: {
    /**
     * condition: This compartment rule is a condition for whether the rule applies.
     */
    readonly Condition: "condition";
    /**
     * requirement: This compartment rule is enforced on any relationships that meet the conditions.
     */
    readonly Requirement: "requirement";
};
/**
 * Defines how a compartment rule is used.
 */
export declare type GraphCompartmentUseCodeType = typeof GraphCompartmentUseCodes[keyof typeof GraphCompartmentUseCodes];
//# sourceMappingURL=GraphCompartmentUseCodes.d.ts.map