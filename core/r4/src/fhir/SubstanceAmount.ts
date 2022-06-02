// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ComplexType: SubstanceAmount

import * as fhir from '../fhir.js';

/**
 * Valid arguments for the SubstanceAmountReferenceRange type.
 */
export interface SubstanceAmountReferenceRangeArgs extends fhir.FhirElementArgs {
  /**
   * Lower limit possible or expected.
   */
  lowLimit?: fhir.QuantityArgs|undefined;
  /**
   * Upper limit possible or expected.
   */
  highLimit?: fhir.QuantityArgs|undefined;
}

/**
 * Reference range of possible or expected values.
 */
export class SubstanceAmountReferenceRange extends fhir.FhirElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'SubstanceAmountReferenceRange';
  /**
   * Lower limit possible or expected.
   */
  public lowLimit?: fhir.Quantity|undefined;
  /**
   * Upper limit possible or expected.
   */
  public highLimit?: fhir.Quantity|undefined;
  /**
   * Default constructor for SubstanceAmountReferenceRange - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<SubstanceAmountReferenceRangeArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['lowLimit']) { this.lowLimit = new fhir.Quantity(source.lowLimit); }
    if (source['highLimit']) { this.highLimit = new fhir.Quantity(source.highLimit); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(expression:string = ''):fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation(expression);
    if (expression === '') { expression = 'SubstanceAmount.referenceRange' }
    if (this["lowLimit"]) { issues.push(...this.lowLimit.doModelValidation(expression+'.lowLimit')); }
    if (this["highLimit"]) { issues.push(...this.highLimit.doModelValidation(expression+'.highLimit')); }
    return issues;
  }
}
/**
 * Valid arguments for the SubstanceAmount type.
 */
export interface SubstanceAmountArgs extends fhir.BackboneElementArgs {
  /**
   * Used to capture quantitative values for a variety of elements. If only limits are given, the arithmetic mean would be the average. If only a single definite value for a given element is given, it would be captured in this field.
   */
  amount?: fhir.Quantity|fhir.Range|fhir.FhirString|undefined;
  /**
   * Used to capture quantitative values for a variety of elements. If only limits are given, the arithmetic mean would be the average. If only a single definite value for a given element is given, it would be captured in this field.
   */
  amountQuantity?: fhir.QuantityArgs|undefined;
  /**
   * Used to capture quantitative values for a variety of elements. If only limits are given, the arithmetic mean would be the average. If only a single definite value for a given element is given, it would be captured in this field.
   */
  amountRange?: fhir.RangeArgs|undefined;
  /**
   * Used to capture quantitative values for a variety of elements. If only limits are given, the arithmetic mean would be the average. If only a single definite value for a given element is given, it would be captured in this field.
   */
  amountString?: fhir.FhirString|string|undefined;
  /**
   * Most elements that require a quantitative value will also have a field called amount type. Amount type should always be specified because the actual value of the amount is often dependent on it. EXAMPLE: In capturing the actual relative amounts of substances or molecular fragments it is essential to indicate whether the amount refers to a mole ratio or weight ratio. For any given element an effort should be made to use same the amount type for all related definitional elements.
   */
  amountType?: fhir.CodeableConceptArgs|undefined;
  /**
   * A textual comment on a numeric value.
   */
  amountText?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: SubstanceAmount.amountText
   */
  _amountText?:fhir.FhirElementArgs;
  /**
   * Reference range of possible or expected values.
   */
  referenceRange?: fhir.SubstanceAmountReferenceRangeArgs|undefined;
}

/**
 * Chemical substances are a single substance type whose primary defining element is the molecular structure. Chemical substances shall be defined on the basis of their complete covalent molecular structure; the presence of a salt (counter-ion) and/or solvates (water, alcohols) is also captured. Purity, grade, physical form or particle size are not taken into account in the definition of a chemical substance or in the assignment of a Substance ID.
 */
export class SubstanceAmount extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'SubstanceAmount';
  /**
   * Used to capture quantitative values for a variety of elements. If only limits are given, the arithmetic mean would be the average. If only a single definite value for a given element is given, it would be captured in this field.
   */
  public amount?: (fhir.Quantity|fhir.Range|fhir.FhirString)|undefined;
  /**
   * Internal flag to properly serialize choice-type element SubstanceAmount.amount[x]
   */
  protected static readonly _fts_amountIsChoice:true = true;
  /**
   * Most elements that require a quantitative value will also have a field called amount type. Amount type should always be specified because the actual value of the amount is often dependent on it. EXAMPLE: In capturing the actual relative amounts of substances or molecular fragments it is essential to indicate whether the amount refers to a mole ratio or weight ratio. For any given element an effort should be made to use same the amount type for all related definitional elements.
   */
  public amountType?: fhir.CodeableConcept|undefined;
  /**
   * A textual comment on a numeric value.
   */
  public amountText?: fhir.FhirString|undefined;
  /**
   * Reference range of possible or expected values.
   */
  public referenceRange?: fhir.SubstanceAmountReferenceRange|undefined;
  /**
   * Default constructor for SubstanceAmount - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<SubstanceAmountArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['amount']) { this.amount = source.amount; }
    else if (source['amountQuantity']) { this.amount = new fhir.Quantity(source.amountQuantity); }
    else if (source['amountRange']) { this.amount = new fhir.Range(source.amountRange); }
    else if (source['amountString']) { this.amount = new fhir.FhirString({value: source.amountString}); }
    if (source['amountType']) { this.amountType = new fhir.CodeableConcept(source.amountType); }
    if (source['amountText']) { this.amountText = new fhir.FhirString({value: source.amountText}); }
    if (source['_amountText']) {
      if (this.amountText) { this.amountText.addExtendedProperties(source._amountText!); }
      else { this.amountText = new fhir.FhirString(source._amountText as Partial<fhir.FhirStringArgs>); }
    }
    if (source['referenceRange']) { this.referenceRange = new fhir.SubstanceAmountReferenceRange(source.referenceRange); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(expression:string = ''):fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation(expression);
    if (expression === '') { expression = 'SubstanceAmount' }
    if (this["amountType"]) { issues.push(...this.amountType.doModelValidation(expression+'.amountType')); }
    if (this["amountText"]) { issues.push(...this.amountText.doModelValidation(expression+'.amountText')); }
    if (this["referenceRange"]) { issues.push(...this.referenceRange.doModelValidation(expression+'.referenceRange')); }
    return issues;
  }
}
