// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ComplexType: Quantity

import * as fhir from '../fhir.js';

// @ts-ignore
import { QuantityComparatorCodes,  QuantityComparatorCodeType } from '../fhirValueSets/QuantityComparatorCodes.js';
// @ts-ignore
import { QuantityComparatorVsValidation } from '../fhirValueSets/QuantityComparatorVsValidation.js';
/**
 * Valid arguments for the Quantity type.
 */
export interface QuantityArgs extends fhir.FhirElementArgs {
  /**
   * The implicit precision in the value should always be honored. Monetary values have their own rules for handling precision (refer to standard accounting text books).
   */
  value?: fhir.FhirDecimal|number|undefined;
  /**
   * Extended properties for primitive element: Quantity.value
   */
  _value?:fhir.FhirElementArgs;
  /**
   * This is labeled as "Is Modifier" because the comparator modifies the interpretation of the value significantly. If there is no comparator, then there is no modification of the value.
   */
  comparator?: fhir.FhirCode<QuantityComparatorCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: Quantity.comparator
   */
  _comparator?:fhir.FhirElementArgs;
  /**
   * A human-readable form of the unit.
   */
  unit?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: Quantity.unit
   */
  _unit?:fhir.FhirElementArgs;
  /**
   * The identification of the system that provides the coded form of the unit.
   */
  system?: fhir.FhirUri|string|undefined;
  /**
   * Extended properties for primitive element: Quantity.system
   */
  _system?:fhir.FhirElementArgs;
  /**
   * The preferred system is UCUM, but SNOMED CT can also be used (for customary units) or ISO 4217 for currency.  The context of use may additionally require a code from a particular system.
   */
  code?: fhir.FhirCode|string|undefined;
  /**
   * Extended properties for primitive element: Quantity.code
   */
  _code?:fhir.FhirElementArgs;
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
   * This is labeled as "Is Modifier" because the comparator modifies the interpretation of the value significantly. If there is no comparator, then there is no modification of the value.
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
    if (source['_value']) {
      if (this.value) { this.value.addExtendedProperties(source._value!); }
      else { this.value = new fhir.FhirDecimal(source._value as Partial<fhir.FhirDecimalArgs>); }
    }
    if (source['comparator']) { this.comparator = new fhir.FhirCode<QuantityComparatorCodeType>({value: source.comparator}); }
    if (source['_comparator']) {
      if (this.comparator) { this.comparator.addExtendedProperties(source._comparator!); }
      else { this.comparator = new fhir.FhirCode<QuantityComparatorCodeType>(source._comparator as Partial<fhir.FhirCode>); }
    }
    if (source['unit']) { this.unit = new fhir.FhirString({value: source.unit}); }
    if (source['_unit']) {
      if (this.unit) { this.unit.addExtendedProperties(source._unit!); }
      else { this.unit = new fhir.FhirString(source._unit as Partial<fhir.FhirStringArgs>); }
    }
    if (source['system']) { this.system = new fhir.FhirUri({value: source.system}); }
    if (source['_system']) {
      if (this.system) { this.system.addExtendedProperties(source._system!); }
      else { this.system = new fhir.FhirUri(source._system as Partial<fhir.FhirUriArgs>); }
    }
    if (source['code']) { this.code = new fhir.FhirCode({value: source.code}); }
    if (source['_code']) {
      if (this.code) { this.code.addExtendedProperties(source._code!); }
      else { this.code = new fhir.FhirCode(source._code as Partial<fhir.FhirCodeArgs>); }
    }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'Quantity' }
    this.vOS('value',exp)
    this.vOSV('comparator',exp,'QuantityComparator',QuantityComparatorVsValidation,'r')
    this.vOS('unit',exp)
    this.vOS('system',exp)
    this.vOS('code',exp)
    return issues;
  }
}
