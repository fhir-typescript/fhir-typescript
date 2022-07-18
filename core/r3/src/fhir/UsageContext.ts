// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ComplexType: UsageContext

import * as fhir from '../fhir.js';

// @ts-ignore
import { UsageContextTypeCodes,  UsageContextTypeCodeType } from '../fhirValueSets/UsageContextTypeCodes.js';
// @ts-ignore
import { UsageContextTypeVsValidation } from '../fhirValueSets/UsageContextTypeVsValidation.js';
/**
 * Valid arguments for the UsageContext type.
 */
export interface UsageContextArgs extends fhir.FhirElementArgs {
  /**
   * A code that identifies the type of context being specified by this usage context.
   */
  code: fhir.CodingArgs|null;
  /**
   * A value that defines the context specified in this context of use. The interpretation of the value is defined by the code.
   */
  value?: fhir.CodeableConcept|fhir.Quantity|fhir.Range|undefined;
  /**
   * A value that defines the context specified in this context of use. The interpretation of the value is defined by the code.
   */
  valueCodeableConcept?: fhir.CodeableConceptArgs|undefined;
  /**
   * A value that defines the context specified in this context of use. The interpretation of the value is defined by the code.
   */
  valueQuantity?: fhir.QuantityArgs|undefined;
  /**
   * A value that defines the context specified in this context of use. The interpretation of the value is defined by the code.
   */
  valueRange?: fhir.RangeArgs|undefined;
}

/**
 * Specifies clinical/business/etc metadata that can be used to retrieve, index and/or categorize an artifact. This metadata can either be specific to the applicable population (e.g., age category, DRG) or the specific context of care (e.g., venue, care setting, provider of care).
 */
export class UsageContext extends fhir.FhirElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'UsageContext';
  /**
   * A code that identifies the type of context being specified by this usage context.
   */
  public code: fhir.Coding|null;
  /**
   * A value that defines the context specified in this context of use. The interpretation of the value is defined by the code.
   */
  public value: (fhir.CodeableConcept|fhir.Quantity|fhir.Range)|null;
  /**
   * Internal flag to properly serialize choice-type element UsageContext.value[x]
   */
  protected static readonly _fts_valueIsChoice:true = true;
  /**
   * Default constructor for UsageContext - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<UsageContextArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['code']) { this.code = new fhir.Coding(source.code); }
    else { this.code = null; }
    if (source['value']) { this.value = source.value; }
    else if (source['valueCodeableConcept']) { this.value = new fhir.CodeableConcept(source.valueCodeableConcept); }
    else if (source['valueQuantity']) { this.value = new fhir.Quantity(source.valueQuantity); }
    else if (source['valueRange']) { this.value = new fhir.Range(source.valueRange); }
    else { this.value = null; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'UsageContext' }
    iss.push(...this.vRS('code',exp));
    iss.push(...this.vRS('value',exp));
    return iss;
  }
}
