// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR ComplexType: Identifier

import * as fhir from '../fhir.js';

// @ts-ignore
import { IdentifierUseCodes,  IdentifierUseCodeType } from '../fhirValueSets/IdentifierUseCodes.js';
// @ts-ignore
import { IdentifierUseVsValidation } from '../fhirValueSets/IdentifierUseVsValidation.js';
/**
 * Valid arguments for the Identifier type.
 */
export interface IdentifierArgs extends fhir.FhirElementArgs {
  /**
   * Allows the appropriate identifier for a particular context of use to be selected from among a set of identifiers.
   */
  use?: fhir.FhirCode<IdentifierUseCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: Identifier.use
   */
  _use?:fhir.FhirElementArgs;
  /**
   * Allows users to make use of identifiers when the identifier system is not known.
   */
  type?: fhir.CodeableConceptArgs|undefined;
  /**
   * There are many sequences of identifiers.  To perform matching, we need to know what sequence we're dealing with. The system identifies a particular sequence or set of unique identifiers.
   */
  system?: fhir.FhirUri|string|undefined;
  /**
   * Extended properties for primitive element: Identifier.system
   */
  _system?:fhir.FhirElementArgs;
  /**
   * The portion of the identifier typically displayed to the user and which is unique within the context of the system.
   */
  value?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: Identifier.value
   */
  _value?:fhir.FhirElementArgs;
  /**
   * Time period during which identifier is/was valid for use.
   */
  period?: fhir.PeriodArgs|undefined;
  /**
   * Organization that issued/manages the identifier.
   */
  assigner?: fhir.ReferenceArgs|undefined;
}

/**
 * A technical identifier - identifies some entity uniquely and unambiguously.
 */
export class Identifier extends fhir.FhirElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'Identifier';
  /**
   * Allows the appropriate identifier for a particular context of use to be selected from among a set of identifiers.
   */
  public use?: fhir.FhirCode<IdentifierUseCodeType>|undefined;
  /**
   * Allows users to make use of identifiers when the identifier system is not known.
   */
  public type?: fhir.CodeableConcept|undefined;
  /**
   * There are many sequences of identifiers.  To perform matching, we need to know what sequence we're dealing with. The system identifies a particular sequence or set of unique identifiers.
   */
  public system?: fhir.FhirUri|undefined;
  /**
   * The portion of the identifier typically displayed to the user and which is unique within the context of the system.
   */
  public value?: fhir.FhirString|undefined;
  /**
   * Time period during which identifier is/was valid for use.
   */
  public period?: fhir.Period|undefined;
  /**
   * Organization that issued/manages the identifier.
   */
  public assigner?: fhir.Reference|undefined;
  /**
   * Default constructor for Identifier - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<IdentifierArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['use'] !== undefined) { this.use = new fhir.FhirCode<IdentifierUseCodeType>({value: source.use}, options); }
    if (source['_use']) {
      if (this.use) { this.use.addExtendedProperties(source._use!); }
      else { this.use = new fhir.FhirCode<IdentifierUseCodeType>(source._use as Partial<fhir.FhirCode>, options); }
    }
    if (source['type']) { this.type = new fhir.CodeableConcept(source.type, options); }
    if (source['system'] !== undefined) { this.system = new fhir.FhirUri({value: source.system}, options); }
    if (source['_system']) {
      if (this.system) { this.system.addExtendedProperties(source._system!); }
      else { this.system = new fhir.FhirUri(source._system as Partial<fhir.FhirUriArgs>, options); }
    }
    if (source['value'] !== undefined) { this.value = new fhir.FhirString({value: source.value}, options); }
    if (source['_value']) {
      if (this.value) { this.value.addExtendedProperties(source._value!); }
      else { this.value = new fhir.FhirString(source._value as Partial<fhir.FhirStringArgs>, options); }
    }
    if (source['period']) { this.period = new fhir.Period(source.period, options); }
    if (source['assigner']) { this.assigner = new fhir.Reference(source.assigner, options); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'Identifier' }
    iss.push(...this.vOSV('use',exp,'IdentifierUse',IdentifierUseVsValidation,'r'));
    iss.push(...this.vOS('type',exp));
    iss.push(...this.vOS('system',exp));
    iss.push(...this.vOS('value',exp));
    iss.push(...this.vOS('period',exp));
    iss.push(...this.vOS('assigner',exp));
    return iss;
  }
}
