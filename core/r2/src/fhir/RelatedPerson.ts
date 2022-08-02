// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR Resource: RelatedPerson

import * as fhir from '../fhir.js';

// @ts-ignore
import { AdministrativeGenderCodes,  AdministrativeGenderCodeType } from '../fhirValueSets/AdministrativeGenderCodes.js';
// @ts-ignore
import { AdministrativeGenderVsValidation } from '../fhirValueSets/AdministrativeGenderVsValidation.js';
/**
 * Valid arguments for the RelatedPerson type.
 */
export interface RelatedPersonArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "RelatedPerson"|undefined;
  /**
   * People are known by a variety of ids. Some institutions maintain several, and most collect identifiers for exchange with other organizations concerning the patient. Examples are national person identifier and local identifier.
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * We need to know which patient this RelatedPerson is related to.
   */
  patient: fhir.ReferenceArgs|null;
  /**
   * We need to know the relationship with the patient since it influences the interpretation of the information attributed to this person.
   */
  relationship?: fhir.CodeableConceptArgs|undefined;
  /**
   * Related persons need to be identified by name, but it is uncommon to need details about multiple other names for that person.
   */
  name?: fhir.HumanNameArgs|undefined;
  /**
   * People have (primary) ways to contact them in some way such as phone, email.
   */
  telecom?: fhir.ContactPointArgs[]|undefined;
  /**
   * Needed for identification of the person, in combination with (at least) name and birth date.
   */
  gender?: fhir.FhirCode<AdministrativeGenderCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: RelatedPerson.gender
   */
  _gender?:fhir.FhirElementArgs;
  /**
   * The date on which the related person was born.
   */
  birthDate?: fhir.FhirDate|string|undefined;
  /**
   * Extended properties for primitive element: RelatedPerson.birthDate
   */
  _birthDate?:fhir.FhirElementArgs;
  /**
   * Need to keep track where the related person can be contacted per postal mail or visited.
   */
  address?: fhir.AddressArgs[]|undefined;
  /**
   * Many EHR systems have the capability to capture an image of persons. Fits with newer social media usage too.
   */
  photo?: fhir.AttachmentArgs[]|undefined;
  /**
   * The period of time that this relationship is considered to be valid. If there are no dates defined, then the interval is unknown.
   */
  period?: fhir.PeriodArgs|undefined;
}

/**
 * Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process.
 */
export class RelatedPerson extends fhir.DomainResource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'RelatedPerson';
  /**
   * Resource Type Name
   */
  public override resourceType: "RelatedPerson";
  /**
   * People are known by a variety of ids. Some institutions maintain several, and most collect identifiers for exchange with other organizations concerning the patient. Examples are national person identifier and local identifier.
   */
  public identifier: fhir.Identifier[];
  /**
   * We need to know which patient this RelatedPerson is related to.
   */
  public patient: fhir.Reference|null;
  /**
   * We need to know the relationship with the patient since it influences the interpretation of the information attributed to this person.
   */
  public relationship?: fhir.CodeableConcept|undefined;
  /**
   * Related persons need to be identified by name, but it is uncommon to need details about multiple other names for that person.
   */
  public name?: fhir.HumanName|undefined;
  /**
   * People have (primary) ways to contact them in some way such as phone, email.
   */
  public telecom: fhir.ContactPoint[];
  /**
   * Needed for identification of the person, in combination with (at least) name and birth date.
   */
  public gender?: fhir.FhirCode<AdministrativeGenderCodeType>|undefined;
  /**
   * The date on which the related person was born.
   */
  public birthDate?: fhir.FhirDate|undefined;
  /**
   * Need to keep track where the related person can be contacted per postal mail or visited.
   */
  public address: fhir.Address[];
  /**
   * Many EHR systems have the capability to capture an image of persons. Fits with newer social media usage too.
   */
  public photo: fhir.Attachment[];
  /**
   * The period of time that this relationship is considered to be valid. If there are no dates defined, then the interval is unknown.
   */
  public period?: fhir.Period|undefined;
  /**
   * Default constructor for RelatedPerson - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<RelatedPersonArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'RelatedPerson';
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x)); }
    else { this.identifier = []; }
    if (source['patient']) { this.patient = new fhir.Reference(source.patient); }
    else { this.patient = null; }
    if (source['relationship']) { this.relationship = new fhir.CodeableConcept(source.relationship); }
    if (source['name']) { this.name = new fhir.HumanName(source.name); }
    if (source['telecom']) { this.telecom = source.telecom.map((x) => new fhir.ContactPoint(x)); }
    else { this.telecom = []; }
    if (source['gender']) { this.gender = new fhir.FhirCode<AdministrativeGenderCodeType>({value: source.gender}); }
    if (source['_gender']) {
      if (this.gender) { this.gender.addExtendedProperties(source._gender!); }
      else { this.gender = new fhir.FhirCode<AdministrativeGenderCodeType>(source._gender as Partial<fhir.FhirCode>); }
    }
    if (source['birthDate']) { this.birthDate = new fhir.FhirDate({value: source.birthDate}); }
    if (source['_birthDate']) {
      if (this.birthDate) { this.birthDate.addExtendedProperties(source._birthDate!); }
      else { this.birthDate = new fhir.FhirDate(source._birthDate as Partial<fhir.FhirDateArgs>); }
    }
    if (source['address']) { this.address = source.address.map((x) => new fhir.Address(x)); }
    else { this.address = []; }
    if (source['photo']) { this.photo = source.photo.map((x) => new fhir.Attachment(x)); }
    else { this.photo = []; }
    if (source['period']) { this.period = new fhir.Period(source.period); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'RelatedPerson' }
    iss.push(...this.vOA('identifier',exp));
    iss.push(...this.vRS('patient',exp));
    iss.push(...this.vOS('relationship',exp));
    iss.push(...this.vOS('name',exp));
    iss.push(...this.vOA('telecom',exp));
    iss.push(...this.vOSV('gender',exp,'AdministrativeGender',AdministrativeGenderVsValidation,'r'));
    iss.push(...this.vOS('birthDate',exp));
    iss.push(...this.vOA('address',exp));
    iss.push(...this.vOA('photo',exp));
    iss.push(...this.vOS('period',exp));
    return iss;
  }
}
