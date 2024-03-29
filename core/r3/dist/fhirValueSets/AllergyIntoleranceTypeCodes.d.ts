/**
 * Identification of the underlying physiological mechanism for a Reaction Risk.
 */
export declare const AllergyIntoleranceTypeCodes: {
    /**
     * allergy: A propensity for hypersensitivity reaction(s) to a substance.  These reactions are most typically type I hypersensitivity, plus other "allergy-like" reactions, including pseudoallergy.
     */
    readonly Allergy: "allergy";
    /**
     * intolerance: A propensity for adverse reactions to a substance that is not judged to be allergic or "allergy-like".  These reactions are typically (but not necessarily) non-immune.  They are to some degree idiosyncratic and/or individually specific (i.e. are not a reaction that is expected to occur with most or all patients given similar circumstances).
     */
    readonly Intolerance: "intolerance";
};
/**
 * Identification of the underlying physiological mechanism for a Reaction Risk.
 */
export declare type AllergyIntoleranceTypeCodeType = typeof AllergyIntoleranceTypeCodes[keyof typeof AllergyIntoleranceTypeCodes];
//# sourceMappingURL=AllergyIntoleranceTypeCodes.d.ts.map