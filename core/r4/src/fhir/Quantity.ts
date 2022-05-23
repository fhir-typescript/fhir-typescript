// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ComplexType: Quantity

import * as fhir from '../fhir.js';

// @ts-ignore
import { QuantityComparatorCodings, QuantityComparatorCodingType,} from '../fhirValueSets/QuantityComparatorCodings.js';
// @ts-ignore
import { QuantityComparatorCodes,  QuantityComparatorCodeType } from '../fhirValueSets/QuantityComparatorCodes.js';
/**
 * Valid arguments for the Quantity type.
 */
export interface QuantityArgs extends fhir.FhirElementArgs {
  /**
   * The implicit precision in the value should always be honored. Monetary values have their own rules for handling precision (refer to standard accounting text books).
   */
  value?: fhir.FhirDecimal|number|undefined;
  /**
   * How the value should be understood and represented - whether the actual value is greater or less than the stated value due to measurement issues; e.g. if the comparator is "&lt;" , then the real value is &lt; stated value.
   */
  comparator?: fhir.FhirCode<QuantityComparatorCodeType>|string|undefined;
  /**
   * A human-readable form of the unit.
   */
  unit?: fhir.FhirString|string|undefined;
  /**
   * The identification of the system that provides the coded form of the unit.
   */
  system?: fhir.FhirUri|string|undefined;
  /**
   * The preferred system is UCUM, but SNOMED CT can also be used (for customary units) or ISO 4217 for currency.  The context of use may additionally require a code from a particular system.
   */
  code?: fhir.FhirCode|string|undefined;
}

/**
 * A measured amount (or an amount that can potentially be measured). Note that measured amounts include amounts that are not precisely quantified, including amounts involving arbitrary units and floating currencies.
 */
export class Quantity extends fhir.FhirElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'Quantity';
  /**
   * The implicit precision in the value should always be honored. Monetary values have their own rules for handling precision (refer to standard accounting text books).
   */
  public value?: fhir.FhirDecimal|undefined;
  /**
   * How the value should be understood and represented - whether the actual value is greater or less than the stated value due to measurement issues; e.g. if the comparator is "&lt;" , then the real value is &lt; stated value.
   */
  public comparator?: fhir.FhirCode<QuantityComparatorCodeType>|undefined;
  /**
   * A human-readable form of the unit.
   */
  public unit?: fhir.FhirString|undefined;
  /**
   * The identification of the system that provides the coded form of the unit.
   */
  public system?: fhir.FhirUri|undefined;
  /**
   * The preferred system is UCUM, but SNOMED CT can also be used (for customary units) or ISO 4217 for currency.  The context of use may additionally require a code from a particular system.
   */
  public code?: fhir.FhirCode|undefined;
  /**
   * Default constructor for Quantity - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<QuantityArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['value']) { this.value = new fhir.FhirDecimal({value: source.value}); }
    if (source['comparator']) { this.comparator = new fhir.FhirCode<QuantityComparatorCodeType>({value: source.comparator}); }
    if (source['unit']) { this.unit = new fhir.FhirString({value: source.unit}); }
    if (source['system']) { this.system = new fhir.FhirUri({value: source.system}); }
    if (source['code']) { this.code = new fhir.FhirCode({value: source.code}); }
  }
  /**
   * Required-bound Value Set for comparator (Quantity.comparator)
   */
  public static get comparatorRequiredCodes() {
    return QuantityComparatorCodes;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation();
    if (this["value"]) { issues.push(...this.value.doModelValidation()); }
    if (this['comparator'] && (!Object.values(QuantityComparatorCodes).includes(this.comparator as any))) {
      issues.push({ severity: 'error', code: 'code-invalid', diagnostics: 'Invalid code property comparator?:fhir.FhirCode<QuantityComparatorCodeType> fhir: Quantity.comparator:code Required binding to: QuantityComparator' });
    }
    if (this["comparator"]) { issues.push(...this.comparator.doModelValidation()); }
    if (this["unit"]) { issues.push(...this.unit.doModelValidation()); }
    if (this["system"]) { issues.push(...this.system.doModelValidation()); }
    if (this["code"]) { issues.push(...this.code.doModelValidation()); }
    return issues;
  }
}
