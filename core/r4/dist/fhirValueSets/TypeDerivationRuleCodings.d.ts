import { CodingArgs } from '../fhir/Coding.js';
/**
 * How a type relates to its baseDefinition.
 */
export declare type TypeDerivationRuleCodingType = {
    /**
     * constraint: This definition adds additional rules to an existing concrete type.
     */
    Constraint: CodingArgs;
    /**
     * specialization: This definition defines a new type that adds additional elements to the base type.
     */
    Specialization: CodingArgs;
};
/**
 * How a type relates to its baseDefinition.
 */
export declare const TypeDerivationRuleCodings: TypeDerivationRuleCodingType;
//# sourceMappingURL=TypeDerivationRuleCodings.d.ts.map