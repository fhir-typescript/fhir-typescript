import * as fhir from '../fhir.js';
/**
 * Valid arguments for the SubstanceAmountReferenceRange type.
 */
export interface SubstanceAmountReferenceRangeArgs extends fhir.FhirElementArgs {
    /**
     * Lower limit possible or expected.
     */
    lowLimit?: fhir.QuantityArgs | undefined;
    /**
     * Upper limit possible or expected.
     */
    highLimit?: fhir.QuantityArgs | undefined;
}
/**
 * Reference range of possible or expected values.
 */
export declare class SubstanceAmountReferenceRange extends fhir.FhirElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Lower limit possible or expected.
     */
    lowLimit?: fhir.Quantity | undefined;
    /**
     * Upper limit possible or expected.
     */
    highLimit?: fhir.Quantity | undefined;
    /**
     * Default constructor for SubstanceAmountReferenceRange - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<SubstanceAmountReferenceRangeArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
/**
 * Valid arguments for the SubstanceAmount type.
 */
export interface SubstanceAmountArgs extends fhir.BackboneElementArgs {
    /**
     * Used to capture quantitative values for a variety of elements. If only limits are given, the arithmetic mean would be the average. If only a single definite value for a given element is given, it would be captured in this field.
     */
    amount?: fhir.Quantity | fhir.Range | fhir.FhirString | undefined;
    /**
     * Used to capture quantitative values for a variety of elements. If only limits are given, the arithmetic mean would be the average. If only a single definite value for a given element is given, it would be captured in this field.
     */
    amountQuantity?: fhir.QuantityArgs | undefined;
    /**
     * Used to capture quantitative values for a variety of elements. If only limits are given, the arithmetic mean would be the average. If only a single definite value for a given element is given, it would be captured in this field.
     */
    amountRange?: fhir.RangeArgs | undefined;
    /**
     * Used to capture quantitative values for a variety of elements. If only limits are given, the arithmetic mean would be the average. If only a single definite value for a given element is given, it would be captured in this field.
     */
    amountString?: fhir.FhirString | string | undefined;
    /**
     * Most elements that require a quantitative value will also have a field called amount type. Amount type should always be specified because the actual value of the amount is often dependent on it. EXAMPLE: In capturing the actual relative amounts of substances or molecular fragments it is essential to indicate whether the amount refers to a mole ratio or weight ratio. For any given element an effort should be made to use same the amount type for all related definitional elements.
     */
    amountType?: fhir.CodeableConceptArgs | undefined;
    /**
     * A textual comment on a numeric value.
     */
    amountText?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: SubstanceAmount.amountText
     */
    _amountText?: fhir.FhirElementArgs;
    /**
     * Reference range of possible or expected values.
     */
    referenceRange?: fhir.SubstanceAmountReferenceRangeArgs | undefined;
}
/**
 * Chemical substances are a single substance type whose primary defining element is the molecular structure. Chemical substances shall be defined on the basis of their complete covalent molecular structure; the presence of a salt (counter-ion) and/or solvates (water, alcohols) is also captured. Purity, grade, physical form or particle size are not taken into account in the definition of a chemical substance or in the assignment of a Substance ID.
 */
export declare class SubstanceAmount extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Used to capture quantitative values for a variety of elements. If only limits are given, the arithmetic mean would be the average. If only a single definite value for a given element is given, it would be captured in this field.
     */
    amount?: (fhir.Quantity | fhir.Range | fhir.FhirString) | undefined;
    /**
     * Internal flag to properly serialize choice-type element SubstanceAmount.amount[x]
     */
    protected static readonly _fts_amountIsChoice: true;
    /**
     * Most elements that require a quantitative value will also have a field called amount type. Amount type should always be specified because the actual value of the amount is often dependent on it. EXAMPLE: In capturing the actual relative amounts of substances or molecular fragments it is essential to indicate whether the amount refers to a mole ratio or weight ratio. For any given element an effort should be made to use same the amount type for all related definitional elements.
     */
    amountType?: fhir.CodeableConcept | undefined;
    /**
     * A textual comment on a numeric value.
     */
    amountText?: fhir.FhirString | undefined;
    /**
     * Reference range of possible or expected values.
     */
    referenceRange?: fhir.SubstanceAmountReferenceRange | undefined;
    /**
     * Default constructor for SubstanceAmount - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<SubstanceAmountArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
//# sourceMappingURL=SubstanceAmount.d.ts.map