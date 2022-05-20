// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ComplexType: ContactPoint

import * as fhir from '../fhir.js';

// @ts-ignore
import { ContactPointSystemCodings, ContactPointSystemCodingType,} from '../fhirValueSets/ContactPointSystemCodings.js';
// @ts-ignore
import { ContactPointSystemCodes,  ContactPointSystemCodeType } from '../fhirValueSets/ContactPointSystemCodes.js';
// @ts-ignore
import { ContactPointUseCodings, ContactPointUseCodingType,} from '../fhirValueSets/ContactPointUseCodings.js';
// @ts-ignore
import { ContactPointUseCodes,  ContactPointUseCodeType } from '../fhirValueSets/ContactPointUseCodes.js';
/**
 * Valid arguments for the ContactPoint type.
 */
export interface ContactPointArgs extends fhir.FhirElementArgs {
  /**
   * Telecommunications form for contact point - what communications system is required to make use of the contact.
   */
  system?: ContactPointSystemCodeType|undefined;
  /**
   * Additional text data such as phone extension numbers, or notes about use of the contact are sometimes included in the value.
   */
  value?: fhir.FhirString|string|undefined;
  /**
   * Applications can assume that a contact is current unless it explicitly says that it is temporary or old.
   */
  use?: ContactPointUseCodeType|undefined;
  /**
   * Note that rank does not necessarily follow the order in which the contacts are represented in the instance.
   */
  rank?: fhir.FhirPositiveInt|number|undefined;
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
  public system?: ContactPointSystemCodeType|undefined;
  /**
   * Additional text data such as phone extension numbers, or notes about use of the contact are sometimes included in the value.
   */
  public value?: fhir.FhirString|undefined;
  /**
   * Applications can assume that a contact is current unless it explicitly says that it is temporary or old.
   */
  public use?: ContactPointUseCodeType|undefined;
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
    if (source['system']) { this.system = source.system; }
    if (source['value']) { this.value = new fhir.FhirString({value: source.value}); }
    if (source['use']) { this.use = source.use; }
    if (source['rank']) { this.rank = new fhir.FhirPositiveInt({value: source.rank}); }
    if (source['period']) { this.period = new fhir.Period(source.period); }
  }
  /**
   * Required-bound Value Set for system (ContactPoint.system)
   */
  public static systemRequiredCoding():ContactPointSystemCodingType {
    return ContactPointSystemCodings;
  }
  /**
   * Required-bound Value Set for use (ContactPoint.use)
   */
  public static useRequiredCoding():ContactPointUseCodingType {
    return ContactPointUseCodings;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation();
    if (this["value"]) { issues.push(...this.value.doModelValidation()); }
    if (this["rank"]) { issues.push(...this.rank.doModelValidation()); }
    if (this["period"]) { issues.push(...this.period.doModelValidation()); }
    return issues;
  }
}
