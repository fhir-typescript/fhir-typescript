import { CodingArgs } from '../fhir/Coding.js';
/**
 * No Description Provided
 */
export declare type V3SubstanceAdminSubstitutionReasonCodingType = {
    /**
     * CT: Indicates that the decision to substitute or to not substitute was driven by a desire to maintain consistency with a pre-existing therapy.  I.e. The performer provided the same item/service as had been previously provided rather than providing exactly what was ordered, or rather than substituting with a lower-cost equivalent.
     */
    ContinuingTherapy: CodingArgs;
    /**
     * FP: Indicates that the decision to substitute or to not substitute was driven by a policy expressed within the formulary.
     */
    FormularyPolicy: CodingArgs;
    /**
     * OS: In the case of 'substitution', indicates that the substitution occurred because the ordered item was not in stock.  In the case of 'no substitution', indicates that a cheaper equivalent was not substituted because it was not in stock.
     */
    OutOfStock: CodingArgs;
    /**
     * RR: Indicates that the decision to substitute or to not substitute was driven by a jurisdictional regulatory requirement mandating or prohibiting substitution.
     */
    RegulatoryRequirement: CodingArgs;
};
/**
 * No Description Provided
 */
export declare const V3SubstanceAdminSubstitutionReasonCodings: V3SubstanceAdminSubstitutionReasonCodingType;
//# sourceMappingURL=V3SubstanceAdminSubstitutionReasonCodings.d.ts.map