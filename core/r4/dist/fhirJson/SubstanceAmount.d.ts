import * as fhir from '../fhirJson.js';
/**
 * Reference range of possible or expected values.
 */
export interface SubstanceAmountReferenceRange extends fhir.FhirElement {
    /**
     * Lower limit possible or expected.
     */
    lowLimit?: fhir.Quantity | undefined;
    /**
     * Upper limit possible or expected.
     */
    highLimit?: fhir.Quantity | undefined;
}
/**
 * Chemical substances are a single substance type whose primary defining element is the molecular structure. Chemical substances shall be defined on the basis of their complete covalent molecular structure; the presence of a salt (counter-ion) and/or solvates (water, alcohols) is also captured. Purity, grade, physical form or particle size are not taken into account in the definition of a chemical substance or in the assignment of a Substance ID.
 */
export interface SubstanceAmount extends fhir.BackboneElement {
    /**
     * Used to capture quantitative values for a variety of elements. If only limits are given, the arithmetic mean would be the average. If only a single definite value for a given element is given, it would be captured in this field.
     */
    amountQuantity?: fhir.Quantity | undefined;
    /**
     * Used to capture quantitative values for a variety of elements. If only limits are given, the arithmetic mean would be the average. If only a single definite value for a given element is given, it would be captured in this field.
     */
    amountRange?: fhir.Range | undefined;
    /**
     * Used to capture quantitative values for a variety of elements. If only limits are given, the arithmetic mean would be the average. If only a single definite value for a given element is given, it would be captured in this field.
     */
    amountString?: string | undefined;
    /**
     * Extended properties for primitive element: SubstanceAmount.amount[x]
     */
    _amountString?: fhir.FhirElement;
    /**
     * Most elements that require a quantitative value will also have a field called amount type. Amount type should always be specified because the actual value of the amount is often dependent on it. EXAMPLE: In capturing the actual relative amounts of substances or molecular fragments it is essential to indicate whether the amount refers to a mole ratio or weight ratio. For any given element an effort should be made to use same the amount type for all related definitional elements.
     */
    amountType?: fhir.CodeableConcept | undefined;
    /**
     * A textual comment on a numeric value.
     */
    amountText?: string | undefined;
    /**
     * Extended properties for primitive element: SubstanceAmount.amountText
     */
    _amountText?: fhir.FhirElement;
    /**
     * Reference range of possible or expected values.
     */
    referenceRange?: fhir.SubstanceAmountReferenceRange | undefined;
}
//# sourceMappingURL=SubstanceAmount.d.ts.map