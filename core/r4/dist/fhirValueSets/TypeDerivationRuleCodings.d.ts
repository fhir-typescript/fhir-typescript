import { Coding } from '../fhir/Coding.js';
/**
 * How a type relates to its baseDefinition.
 */
export declare const TypeDerivationRuleCodings: {
    /**
     * constraint: This definition adds additional rules to an existing concrete type.
     */
    readonly Constraint: Coding;
    /**
     * specialization: This definition defines a new type that adds additional elements to the base type.
     */
    readonly Specialization: Coding;
};
/**
 * How a type relates to its baseDefinition.
 */
export declare type TypeDerivationRuleCodingType = typeof TypeDerivationRuleCodings;
//# sourceMappingURL=TypeDerivationRuleCodings.d.ts.map