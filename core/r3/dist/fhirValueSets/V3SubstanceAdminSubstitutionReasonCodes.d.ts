/**
 * No Description Provided
 */
export declare const V3SubstanceAdminSubstitutionReasonCodes: {
    /**
     * CT: Indicates that the decision to substitute or to not substitute was driven by a desire to maintain consistency with a pre-existing therapy.  I.e. The performer provided the same item/service as had been previously provided rather than providing exactly what was ordered, or rather than substituting with a lower-cost equivalent.
     */
    readonly ContinuingTherapy: "CT";
    /**
     * FP: Indicates that the decision to substitute or to not substitute was driven by a policy expressed within the formulary.
     */
    readonly FormularyPolicy: "FP";
    /**
     * OS: In the case of 'substitution', indicates that the substitution occurred because the ordered item was not in stock.  In the case of 'no substitution', indicates that a cheaper equivalent was not substituted because it was not in stock.
     */
    readonly OutOfStock: "OS";
    /**
     * RR: Indicates that the decision to substitute or to not substitute was driven by a jurisdictional regulatory requirement mandating or prohibiting substitution.
     */
    readonly RegulatoryRequirement: "RR";
};
/**
 * No Description Provided
 */
export declare type V3SubstanceAdminSubstitutionReasonCodeType = typeof V3SubstanceAdminSubstitutionReasonCodes[keyof typeof V3SubstanceAdminSubstitutionReasonCodes];
//# sourceMappingURL=V3SubstanceAdminSubstitutionReasonCodes.d.ts.map