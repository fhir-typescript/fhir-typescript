import { Coding } from '../fhir/Coding.js';
/**
 * A code to indicate if the substance is actively used.
 */
export declare const SubstanceStatusCodings: {
    /**
     * active: The substance is considered for use or reference.
     */
    readonly Active: Coding;
    /**
     * entered-in-error: The substance was entered in error.
     */
    readonly EnteredInError: Coding;
    /**
     * inactive: The substance is considered for reference, but not for use.
     */
    readonly Inactive: Coding;
};
/**
 * A code to indicate if the substance is actively used.
 */
export declare type SubstanceStatusCodingType = typeof SubstanceStatusCodings;
//# sourceMappingURL=SubstanceStatusCodings.d.ts.map