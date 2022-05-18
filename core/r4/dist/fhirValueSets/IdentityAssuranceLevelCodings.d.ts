import { Coding } from '../fhir/Coding.js';
/**
 * The level of confidence that this link represents the same actual person, based on NIST Authentication Levels.
 */
export declare const IdentityAssuranceLevelCodings: {
    /**
     * level1: Little or no confidence in the asserted identity's accuracy.
     */
    readonly Level1: Coding;
    /**
     * level2: Some confidence in the asserted identity's accuracy.
     */
    readonly Level2: Coding;
    /**
     * level3: High confidence in the asserted identity's accuracy.
     */
    readonly Level3: Coding;
    /**
     * level4: Very high confidence in the asserted identity's accuracy.
     */
    readonly Level4: Coding;
};
/**
 * The level of confidence that this link represents the same actual person, based on NIST Authentication Levels.
 */
export declare type IdentityAssuranceLevelCodingType = typeof IdentityAssuranceLevelCodings;
//# sourceMappingURL=IdentityAssuranceLevelCodings.d.ts.map