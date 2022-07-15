import { CodingArgs } from '../fhir/Coding.js';
/**
 * How a compartment must be linked
 */
export declare type GraphCompartmentRuleCodingType = {
    /**
     * custom: The compartment rule is defined in the accompanying FHIRPath expression
     */
    Custom: CodingArgs;
    /**
     * different: The compartment must be different
     */
    Different: CodingArgs;
    /**
     * identical: The compartment must be identical (the same literal reference)
     */
    Identical: CodingArgs;
    /**
     * matching: The compartment must be the same - the record must be about the same patient, but the reference may be different
     */
    Matching: CodingArgs;
};
/**
 * How a compartment must be linked
 */
export declare const GraphCompartmentRuleCodings: GraphCompartmentRuleCodingType;
//# sourceMappingURL=GraphCompartmentRuleCodings.d.ts.map