import { CodingArgs } from '../fhir/Coding.js';
/**
 * Defines how a compartment rule is used.
 */
export declare type GraphCompartmentUseCodingType = {
    /**
     * condition: This compartment rule is a condition for whether the rule applies.
     */
    Condition: CodingArgs;
    /**
     * requirement: This compartment rule is enforced on any relationships that meet the conditions.
     */
    Requirement: CodingArgs;
};
/**
 * Defines how a compartment rule is used.
 */
export declare const GraphCompartmentUseCodings: GraphCompartmentUseCodingType;
//# sourceMappingURL=GraphCompartmentUseCodings.d.ts.map