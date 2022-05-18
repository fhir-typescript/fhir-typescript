import { Coding } from '../fhir/Coding.js';
/**
 * How a compartment must be linked.
 */
export declare const GraphCompartmentRuleCodings: {
    /**
     * custom: The compartment rule is defined in the accompanying FHIRPath expression.
     */
    readonly Custom: Coding;
    /**
     * different: The compartment must be different.
     */
    readonly Different: Coding;
    /**
     * identical: The compartment must be identical (the same literal reference).
     */
    readonly Identical: Coding;
    /**
     * matching: The compartment must be the same - the record must be about the same patient, but the reference may be different.
     */
    readonly Matching: Coding;
};
/**
 * How a compartment must be linked.
 */
export declare type GraphCompartmentRuleCodingType = typeof GraphCompartmentRuleCodings;
//# sourceMappingURL=GraphCompartmentRuleCodings.d.ts.map