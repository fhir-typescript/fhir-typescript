import { Coding } from '../fhir/Coding.js';
/**
 * Whether a reference needs to be version specific or version independent, or whether either can be used.
 */
export declare const ReferenceVersionRulesCodings: {
    /**
     * either: The reference may be either version independent or version specific.
     */
    readonly EitherSpecificOrIndependent: Coding;
    /**
     * independent: The reference must be version independent.
     */
    readonly VersionIndependent: Coding;
    /**
     * specific: The reference must be version specific.
     */
    readonly VersionSpecific: Coding;
};
/**
 * Whether a reference needs to be version specific or version independent, or whether either can be used.
 */
export declare type ReferenceVersionRulesCodingType = typeof ReferenceVersionRulesCodings;
//# sourceMappingURL=ReferenceVersionRulesCodings.d.ts.map