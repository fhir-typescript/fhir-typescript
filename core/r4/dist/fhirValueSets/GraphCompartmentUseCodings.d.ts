import { Coding } from '../fhir/Coding.js';
/**
 * Defines how a compartment rule is used.
 */
export declare const GraphCompartmentUseCodings: {
    /**
     * condition: This compartment rule is a condition for whether the rule applies.
     */
    readonly Condition: Coding;
    /**
     * requirement: This compartment rule is enforced on any relationships that meet the conditions.
     */
    readonly Requirement: Coding;
};
/**
 * Defines how a compartment rule is used.
 */
export declare type GraphCompartmentUseCodingType = typeof GraphCompartmentUseCodings;
//# sourceMappingURL=GraphCompartmentUseCodings.d.ts.map