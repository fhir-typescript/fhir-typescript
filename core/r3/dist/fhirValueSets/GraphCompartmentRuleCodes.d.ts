/**
 * How a compartment must be linked
 */
export declare const GraphCompartmentRuleCodes: {
    /**
     * custom: The compartment rule is defined in the accompanying FHIRPath expression
     */
    readonly Custom: "custom";
    /**
     * different: The compartment must be different
     */
    readonly Different: "different";
    /**
     * identical: The compartment must be identical (the same literal reference)
     */
    readonly Identical: "identical";
    /**
     * matching: The compartment must be the same - the record must be about the same patient, but the reference may be different
     */
    readonly Matching: "matching";
};
/**
 * How a compartment must be linked
 */
export declare type GraphCompartmentRuleCodeType = typeof GraphCompartmentRuleCodes[keyof typeof GraphCompartmentRuleCodes];
//# sourceMappingURL=GraphCompartmentRuleCodes.d.ts.map