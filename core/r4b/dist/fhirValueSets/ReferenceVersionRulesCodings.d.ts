import { CodingArgs } from '../fhir/Coding.js';
/**
 * Whether a reference needs to be version specific or version independent, or whether either can be used.
 */
export declare type ReferenceVersionRulesCodingType = {
    /**
     * either: The reference may be either version independent or version specific.
     */
    EitherSpecificOrIndependent: CodingArgs;
    /**
     * independent: The reference must be version independent.
     */
    VersionIndependent: CodingArgs;
    /**
     * specific: The reference must be version specific.
     */
    VersionSpecific: CodingArgs;
};
/**
 * Whether a reference needs to be version specific or version independent, or whether either can be used.
 */
export declare const ReferenceVersionRulesCodings: ReferenceVersionRulesCodingType;
//# sourceMappingURL=ReferenceVersionRulesCodings.d.ts.map