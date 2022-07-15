// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ComplexType: ContactPoint

import * as fhir from '../fhir.js';

// @ts-ignore
import { ContactPointSystemCodes,  ContactPointSystemCodeType } from '../fhirValueSets/ContactPointSystemCodes.js';
// @ts-ignore
import { ContactPointSystemVsValidation } from '../fhirValueSets/ContactPointSystemVsValidation.js';
// @ts-ignore
import { ContactPointUseCodes,  ContactPointUseCodeType } from '../fhirValueSets/ContactPointUseCodes.js';
// @ts-ignore
import { ContactPointUseVsValidation } from '../fhirValueSets/ContactPointUseVsValidation.js';
/**
 * Valid arguments for the ContactPoint type.
 */
export interface ContactPointArgs extends fhir.FhirElementArgs {
  /**
   * Telecommunications form for contact point - what communications system is required to make use of the contact.
   */
  system?: fhir.FhirCode<ContactPointSystemCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: ContactPoint.system
   */
  _system?:fhir.FhirElementArgs;
  /**
   * Additional text data such as phone extension numbers, or notes about use of the contact are sometimes included in the value.
   */
  value?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: ContactPoint.value
   */
  _value?:fhir.FhirElementArgs;
  /**
   * Applications can assume that a contact is current unless it explicitly says that it is temporary or old.
   */
  use?: fhir.FhirCode<ContactPointUseCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: ContactPoint.use
   */
  _use?:fhir.FhirElementArgs;
  /**
   * Note that rank does not necessarily follow the order in which the contacts are represented in the instance.
   */
  rank?: fhir.FhirPositiveInt|number|undefined;
  /**
   * Extended properties for primitive element: ContactPoint.rank
   */
  _rank?:fhir.FhirElementArgs;
  /**
   * Time period when the contact point was/is in use.
   */
  period?: fhir.PeriodArgs|undefined;
}

/**
 * Details for all kinds of technology mediated contact points for a person or organization, including telephone, email, etc.
 */
export class ContactPoint extends fhir.FhirElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'ContactPoint';
  /**
   * Telecommunications form for contact point - what communications system is required to make use of the contact.
   */
  public system?: fhir.FhirCode<ContactPointSystemCodeType>|undefined;
  /**
   * Additional text data such as phone extension numbers, or notes about use of the contact are sometimes included in the value.
   */
  public value?: fhir.FhirString|undefined;
  /**
   * Applications can assume that a contact is current unless it explicitly says that it is temporary or old.
   */
  public use?: fhir.FhirCode<ContactPointUseCodeType>|undefined;
  /**
   * Note that rank does not necessarily follow the order in which the contacts are represented in the instance.
   */
  public rank?: fhir.FhirPositiveInt|undefined;
  /**
   * Time period when the contact point was/is in use.
   */
  public period?: fhir.Period|undefined;
  /**
   * Default constructor for ContactPoint - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<ContactPointArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['system']) { this.system = new fhir.FhirCode<ContactPointSystemCodeType>({value: source.system}); }
    if (source['_system']) {
      if (this.system) { this.system.addExtendedProperties(source._system!); }
      else { this.system = new fhir.FhirCode<ContactPointSystemCodeType>(source._system as Partial<fhir.FhirCode>); }
    }
    if (source['value']) { this.value = new fhir.FhirString({value: source.value}); }
    if (source['_value']) {
      if (this.value) { this.value.addExtendedProperties(source._value!); }
      else { this.value = new fhir.FhirString(source._value as Partial<fhir.FhirStringArgs>); }
    }
    if (source['use']) { this.use = new fhir.FhirCode<ContactPointUseCodeType>({value: source.use}); }
    if (source['_use']) {
      if (this.use) { this.use.addExtendedProperties(source._use!); }
      else { this.use = new fhir.FhirCode<ContactPointUseCodeType>(source._use as Partial<fhir.FhirCode>); }
    }
    if (source['rank']) { this.rank = new fhir.FhirPositiveInt({value: source.rank}); }
    if (source['_rank']) {
      if (this.rank) { this.rank.addExtendedProperties(source._rank!); }
      else { this.rank = new fhir.FhirPositiveInt(source._rank as Partial<fhir.FhirPositiveIntArgs>); }
    }
    if (source['period']) { this.period = new fhir.Period(source.period); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'ContactPoint' }
    this.vOSV('system',exp,'ContactPointSystem',ContactPointSystemVsValidation,'r')
    this.vOS('value',exp)
    this.vOSV('use',exp,'ContactPointUse',ContactPointUseVsValidation,'r')
    this.vOS('rank',exp)
    this.vOS('period',exp)
    return issues;
  }
}
