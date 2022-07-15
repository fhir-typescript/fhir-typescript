import { CodingArgs } from '../fhir/Coding.js';
/**
 * The level of confidence that this link represents the same actual person, based on NIST Authentication Levels.
 */
export declare type IdentityAssuranceLevelCodingType = {
    /**
     * level1: Little or no confidence in the asserted identity's accuracy.
     */
    Level1: CodingArgs;
    /**
     * level2: Some confidence in the asserted identity's accuracy.
     */
    Level2: CodingArgs;
    /**
     * level3: High confidence in the asserted identity's accuracy.
     */
    Level3: CodingArgs;
    /**
     * level4: Very high confidence in the asserted identity's accuracy.
     */
    Level4: CodingArgs;
};
/**
 * The level of confidence that this link represents the same actual person, based on NIST Authentication Levels.
 */
export declare const IdentityAssuranceLevelCodings: IdentityAssuranceLevelCodingType;
//# sourceMappingURL=IdentityAssuranceLevelCodings.d.ts.map