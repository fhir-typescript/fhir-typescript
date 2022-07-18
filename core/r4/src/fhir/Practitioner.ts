// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: Practitioner

import * as fhir from '../fhir.js';

// @ts-ignore
import { V2270360Codes,  V2270360CodeType } from '../fhirValueSets/V2270360Codes.js';
// @ts-ignore
import { V2270360VsValidation } from '../fhirValueSets/V2270360VsValidation.js';
// @ts-ignore
import { AdministrativeGenderCodes,  AdministrativeGenderCodeType } from '../fhirValueSets/AdministrativeGenderCodes.js';
// @ts-ignore
import { AdministrativeGenderVsValidation } from '../fhirValueSets/AdministrativeGenderVsValidation.js';
// @ts-ignore
import { LanguagesCodes,  LanguagesCodeType } from '../fhirValueSets/LanguagesCodes.js';
// @ts-ignore
import { LanguagesVsValidation } from '../fhirValueSets/LanguagesVsValidation.js';
/**
 * Valid arguments for the PractitionerQualification type.
 */
export interface PractitionerQualificationArgs extends fhir.BackboneElementArgs {
  /**
   * An identifier that applies to this person's qualification in this role.
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * Coded representation of the qualification.
   */
  code: fhir.CodeableConceptArgs|null;
  /**
   * Period during which the qualification is valid.
   */
  period?: fhir.PeriodArgs|undefined;
  /**
   * Organization that regulates and issues the qualification.
   */
  issuer?: fhir.ReferenceArgs|undefined;
}

/**
 * The official certifications, training, and licenses that authorize or otherwise pertain to the provision of care by the practitioner.  For example, a medical license issued by a medical board authorizing the practitioner to practice medicine within a certian locality.
 */
export class PractitionerQualification extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'PractitionerQualification';
  /**
   * An identifier that applies to this person's qualification in this role.
   */
  public identifier: fhir.Identifier[];
  /**
   * Coded representation of the qualification.
   */
  public code: fhir.CodeableConcept|null;
  /**
   * Period during which the qualification is valid.
   */
  public period?: fhir.Period|undefined;
  /**
   * Organization that regulates and issues the qualification.
   */
  public issuer?: fhir.Reference|undefined;
  /**
   * Default constructor for PractitionerQualification - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<PractitionerQualificationArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x)); }
    else { this.identifier = []; }
    if (source['code']) { this.code = new fhir.CodeableConcept(source.code); }
    else { this.code = null; }
    if (source['period']) { this.period = new fhir.Period(source.period); }
    if (source['issuer']) { this.issuer = new fhir.Reference(source.issuer); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'Practitioner.qualification' }
    iss.push(...this.vOA('identifier',exp));
    iss.push(...this.vRS('code',exp));
    iss.push(...this.vOS('period',exp));
    iss.push(...this.vOS('issuer',exp));
    return iss;
  }
}
/**
 * Valid arguments for the Practitioner type.
 */
export interface PractitionerArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "Practitioner"|undefined;
  /**
   * An identifier that applies to this person in this role.
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * If the practitioner is not in use by one organization, then it should mark the period on the PractitonerRole with an end date (even if they are active) as they may be active in another role.
   */
  active?: fhir.FhirBoolean|boolean|undefined;
  /**
   * Extended properties for primitive element: Practitioner.active
   */
  _active?:fhir.FhirElementArgs;
  /**
   * The selection of the use property should ensure that there is a single usual name specified, and others use the nickname (alias), old, or other values as appropriate.  
   * In general, select the value to be used in the ResourceReference.display based on this:
   * 1. There is more than 1 name
   * 2. Use = usual
   * 3. Period is current to the date of the usage
   * 4. Use = official
   * 5. Other order as decided by internal business rules.
   */
  name?: fhir.HumanNameArgs[]|undefined;
  /**
   * Person may have multiple ways to be contacted with different uses or applicable periods.  May need to have options for contacting the person urgently and to help with identification.  These typically will have home numbers, or mobile numbers that are not role specific.
   */
  telecom?: fhir.ContactPointArgs[]|undefined;
  /**
   * The PractitionerRole does not have an address value on it, as it is expected that the location property be used for this purpose (which has an address).
   */
  address?: fhir.AddressArgs[]|undefined;
  /**
   * Administrative Gender - the gender that the person is considered to have for administration and record keeping purposes.
   */
  gender?: fhir.FhirCode<AdministrativeGenderCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: Practitioner.gender
   */
  _gender?:fhir.FhirElementArgs;
  /**
   * The date of birth for the practitioner.
   */
  birthDate?: fhir.FhirDate|string|undefined;
  /**
   * Extended properties for primitive element: Practitioner.birthDate
   */
  _birthDate?:fhir.FhirElementArgs;
  /**
   * Image of the person.
   */
  photo?: fhir.AttachmentArgs[]|undefined;
  /**
   * The official certifications, training, and licenses that authorize or otherwise pertain to the provision of care by the practitioner.  For example, a medical license issued by a medical board authorizing the practitioner to practice medicine within a certian locality.
   */
  qualification?: fhir.PractitionerQualificationArgs[]|undefined;
  /**
   * The structure aa-BB with this exact casing is one the most widely used notations for locale. However not all systems code this but instead have it as free text. Hence CodeableConcept instead of code as the data type.
   */
  communication?: fhir.CodeableConceptArgs[]|undefined;
}

/**
 * A person who is directly or indirectly involved in the provisioning of healthcare.
 */
export class Practitioner extends fhir.DomainResource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'Practitioner';
  /**
   * Resource Type Name
   */
  public override resourceType: "Practitioner";
  /**
   * An identifier that applies to this person in this role.
   */
  public identifier: fhir.Identifier[];
  /**
   * If the practitioner is not in use by one organization, then it should mark the period on the PractitonerRole with an end date (even if they are active) as they may be active in another role.
   */
  public active?: fhir.FhirBoolean|undefined;
  /**
   * The selection of the use property should ensure that there is a single usual name specified, and others use the nickname (alias), old, or other values as appropriate.  
   * In general, select the value to be used in the ResourceReference.display based on this:
   * 1. There is more than 1 name
   * 2. Use = usual
   * 3. Period is current to the date of the usage
   * 4. Use = official
   * 5. Other order as decided by internal business rules.
   */
  public name: fhir.HumanName[];
  /**
   * Person may have multiple ways to be contacted with different uses or applicable periods.  May need to have options for contacting the person urgently and to help with identification.  These typically will have home numbers, or mobile numbers that are not role specific.
   */
  public telecom: fhir.ContactPoint[];
  /**
   * The PractitionerRole does not have an address value on it, as it is expected that the location property be used for this purpose (which has an address).
   */
  public address: fhir.Address[];
  /**
   * Administrative Gender - the gender that the person is considered to have for administration and record keeping purposes.
   */
  public gender?: fhir.FhirCode<AdministrativeGenderCodeType>|undefined;
  /**
   * The date of birth for the practitioner.
   */
  public birthDate?: fhir.FhirDate|undefined;
  /**
   * Image of the person.
   */
  public photo: fhir.Attachment[];
  /**
   * The official certifications, training, and licenses that authorize or otherwise pertain to the provision of care by the practitioner.  For example, a medical license issued by a medical board authorizing the practitioner to practice medicine within a certian locality.
   */
  public qualification: fhir.PractitionerQualification[];
  /**
   * The structure aa-BB with this exact casing is one the most widely used notations for locale. However not all systems code this but instead have it as free text. Hence CodeableConcept instead of code as the data type.
   */
  public communication: fhir.CodeableConcept[];
  /**
   * Default constructor for Practitioner - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<PractitionerArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'Practitioner';
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x)); }
    else { this.identifier = []; }
    if (source['active']) { this.active = new fhir.FhirBoolean({value: source.active}); }
    if (source['_active']) {
      if (this.active) { this.active.addExtendedProperties(source._active!); }
      else { this.active = new fhir.FhirBoolean(source._active as Partial<fhir.FhirBooleanArgs>); }
    }
    if (source['name']) { this.name = source.name.map((x) => new fhir.HumanName(x)); }
    else { this.name = []; }
    if (source['telecom']) { this.telecom = source.telecom.map((x) => new fhir.ContactPoint(x)); }
    else { this.telecom = []; }
    if (source['address']) { this.address = source.address.map((x) => new fhir.Address(x)); }
    else { this.address = []; }
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
    if (source['photo']) { this.photo = source.photo.map((x) => new fhir.Attachment(x)); }
    else { this.photo = []; }
    if (source['qualification']) { this.qualification = source.qualification.map((x) => new fhir.PractitionerQualification(x)); }
    else { this.qualification = []; }
    if (source['communication']) { this.communication = source.communication.map((x) => new fhir.CodeableConcept(x)); }
    else { this.communication = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'Practitioner' }
    iss.push(...this.vRPS('resourceType',exp));
    iss.push(...this.vOA('identifier',exp));
    iss.push(...this.vOS('active',exp));
    iss.push(...this.vOA('name',exp));
    iss.push(...this.vOA('telecom',exp));
    iss.push(...this.vOA('address',exp));
    iss.push(...this.vOSV('gender',exp,'AdministrativeGender',AdministrativeGenderVsValidation,'r'));
    iss.push(...this.vOS('birthDate',exp));
    iss.push(...this.vOA('photo',exp));
    iss.push(...this.vOA('qualification',exp));
    iss.push(...this.vOA('communication',exp));
    return iss;
  }
}
