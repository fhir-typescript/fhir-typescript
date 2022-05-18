import { Coding } from '../fhir/Coding.js';
/**
 * Identification of the underlying physiological mechanism for a Reaction Risk.
 */
export declare const AllergyIntoleranceTypeCodings: {
    /**
     * allergy: A propensity for hypersensitive reaction(s) to a substance.  These reactions are most typically type I hypersensitivity, plus other "allergy-like" reactions, including pseudoallergy.
     */
    readonly Allergy: Coding;
    /**
     * intolerance: A propensity for adverse reactions to a substance that is not judged to be allergic or "allergy-like".  These reactions are typically (but not necessarily) non-immune.  They are to some degree idiosyncratic and/or patient-specific (i.e. are not a reaction that is expected to occur with most or all patients given similar circumstances).
     */
    readonly Intolerance: Coding;
};
/**
 * Identification of the underlying physiological mechanism for a Reaction Risk.
 */
export declare type AllergyIntoleranceTypeCodingType = typeof AllergyIntoleranceTypeCodings;
//# sourceMappingURL=AllergyIntoleranceTypeCodings.d.ts.map