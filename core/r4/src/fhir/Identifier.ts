// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ComplexType: Identifier

import * as fhir from '../fhir.js';

// @ts-ignore
import { IdentifierUseCodings, IdentifierUseCodingType,} from '../fhirValueSets/IdentifierUseCodings.js';
// @ts-ignore
import { IdentifierUseCodes,  IdentifierUseCodeType } from '../fhirValueSets/IdentifierUseCodes.js';
// @ts-ignore
import { IdentifierTypeCodings, IdentifierTypeCodingType,} from '../fhirValueSets/IdentifierTypeCodings.js';
// @ts-ignore
import { IdentifierTypeCodes,  IdentifierTypeCodeType } from '../fhirValueSets/IdentifierTypeCodes.js';
/**
 * Valid arguments for the Identifier type.
 */
export interface IdentifierArgs extends fhir.FhirElementArgs {
  /**
   * Applications can assume that an identifier is permanent unless it explicitly says that it is temporary.
   */
  use?: fhir.FhirCode<IdentifierUseCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: Identifier.use
   */
  _use?:fhir.FhirElementArgs;
  /**
   * This element deals only with general categories of identifiers.  It SHOULD not be used for codes that correspond 1..1 with the Identifier.system. Some identifiers may fall into multiple categories due to common usage.   Where the system is known, a type is unnecessary because the type is always part of the system definition. However systems often need to handle identifiers where the system is not known. There is not a 1:1 relationship between type and system, since many different systems have the same type.
   */
  type?: fhir.CodeableConceptArgs|undefined;
  /**
   * Identifier.system is always case sensitive.
   */
  system?: fhir.FhirUri|string|undefined;
  /**
   * Extended properties for primitive element: Identifier.system
   */
  _system?:fhir.FhirElementArgs;
  /**
   * If the value is a full URI, then the system SHALL be urn:ietf:rfc:3986.  The value's primary purpose is computational mapping.  As a result, it may be normalized for comparison purposes (e.g. removing non-significant whitespace, dashes, etc.)  A value formatted for human display can be conveyed using the [Rendered Value extension](extension-rendered-value.html). Identifier.value is to be treated as case sensitive unless knowledge of the Identifier.system allows the processer to be confident that non-case-sensitive processing is safe.
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
   * The Identifier.assigner may omit the .reference element and only contain a .display element reflecting the name or other textual information about the assigning organization.
   */
  assigner?: fhir.ReferenceArgs|undefined;
}

/**
 * An identifier - identifies some entity uniquely and unambiguously. Typically this is used for business identifiers.
 */
export class Identifier extends fhir.FhirElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'Identifier';
  /**
   * Applications can assume that an identifier is permanent unless it explicitly says that it is temporary.
   */
  public use?: fhir.FhirCode<IdentifierUseCodeType>|undefined;
  /**
   * This element deals only with general categories of identifiers.  It SHOULD not be used for codes that correspond 1..1 with the Identifier.system. Some identifiers may fall into multiple categories due to common usage.   Where the system is known, a type is unnecessary because the type is always part of the system definition. However systems often need to handle identifiers where the system is not known. There is not a 1:1 relationship between type and system, since many different systems have the same type.
   */
  public type?: fhir.CodeableConcept|undefined;
  /**
   * Identifier.system is always case sensitive.
   */
  public system?: fhir.FhirUri|undefined;
  /**
   * If the value is a full URI, then the system SHALL be urn:ietf:rfc:3986.  The value's primary purpose is computational mapping.  As a result, it may be normalized for comparison purposes (e.g. removing non-significant whitespace, dashes, etc.)  A value formatted for human display can be conveyed using the [Rendered Value extension](extension-rendered-value.html). Identifier.value is to be treated as case sensitive unless knowledge of the Identifier.system allows the processer to be confident that non-case-sensitive processing is safe.
   */
  public value?: fhir.FhirString|undefined;
  /**
   * Time period during which identifier is/was valid for use.
   */
  public period?: fhir.Period|undefined;
  /**
   * The Identifier.assigner may omit the .reference element and only contain a .display element reflecting the name or other textual information about the assigning organization.
   */
  public assigner?: fhir.Reference|undefined;
  /**
   * Default constructor for Identifier - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<IdentifierArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['use']) { this.use = new fhir.FhirCode<IdentifierUseCodeType>({value: source.use}); }
    if (source['_use']) {
      if (this.use) { this.use.addExtendedProperties(source._use!); }
      else { this.use = new fhir.FhirCode<IdentifierUseCodeType>(source._use as Partial<fhir.FhirCode>); }
    }
    if (source['type']) { this.type = new fhir.CodeableConcept(source.type); }
    if (source['system']) { this.system = new fhir.FhirUri({value: source.system}); }
    if (source['_system']) {
      if (this.system) { this.system.addExtendedProperties(source._system!); }
      else { this.system = new fhir.FhirUri(source._system as Partial<fhir.FhirUriArgs>); }
    }
    if (source['value']) { this.value = new fhir.FhirString({value: source.value}); }
    if (source['_value']) {
      if (this.value) { this.value.addExtendedProperties(source._value!); }
      else { this.value = new fhir.FhirString(source._value as Partial<fhir.FhirStringArgs>); }
    }
    if (source['period']) { this.period = new fhir.Period(source.period); }
    if (source['assigner']) { this.assigner = new fhir.Reference(source.assigner); }
  }
  /**
   * Required-bound Value Set for use (Identifier.use)
   */
  public static get useRequiredCodes() {
    return IdentifierUseCodes;
  }
  /**
   * Extensible-bound Value Set for type (Identifier.type)
   */
  public static get typeExtensibleCodings():IdentifierTypeCodingType {
    return IdentifierTypeCodings;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation();
    if (this['use'] && (!Object.values(IdentifierUseCodes).includes(this.use as any))) {
      issues.push({ severity: 'error', code: 'code-invalid', diagnostics: 'Invalid code property use?:fhir.FhirCode<IdentifierUseCodeType> fhir: Identifier.use:code Required binding to: IdentifierUse' });
    }
    if (this["use"]) { issues.push(...this.use.doModelValidation()); }
    if (this["type"]) { issues.push(...this.type.doModelValidation()); }
    if (this["system"]) { issues.push(...this.system.doModelValidation()); }
    if (this["value"]) { issues.push(...this.value.doModelValidation()); }
    if (this["period"]) { issues.push(...this.period.doModelValidation()); }
    if (this["assigner"]) { issues.push(...this.assigner.doModelValidation()); }
    return issues;
  }
}
