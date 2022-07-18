// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR Resource: Practitioner

import * as fhir from '../fhir.js';

// @ts-ignore
import { AdministrativeGenderCodes,  AdministrativeGenderCodeType } from '../fhirValueSets/AdministrativeGenderCodes.js';
// @ts-ignore
import { AdministrativeGenderVsValidation } from '../fhirValueSets/AdministrativeGenderVsValidation.js';
/**
 * Valid arguments for the PractitionerPractitionerRole type.
 */
export interface PractitionerPractitionerRoleArgs extends fhir.BackboneElementArgs {
  /**
   * The organization where the Practitioner performs the roles associated.
   */
  managingOrganization?: fhir.ReferenceArgs|undefined;
  /**
   * Need to know what authority the practitioner has - what can they do?
   */
  role?: fhir.CodeableConceptArgs|undefined;
  /**
   * Specific specialty of the practitioner.
   */
  specialty?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * Even after the agencies is revoked, the fact that it existed must still be recorded.
   */
  period?: fhir.PeriodArgs|undefined;
  /**
   * The location(s) at which this practitioner provides care.
   */
  location?: fhir.ReferenceArgs[]|undefined;
  /**
   * The list of healthcare services that this worker provides for this role's Organization/Location(s).
   */
  healthcareService?: fhir.ReferenceArgs[]|undefined;
}

/**
 * The list of roles/organizations that the practitioner is associated with.
 */
export class PractitionerPractitionerRole extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'PractitionerPractitionerRole';
  /**
   * The organization where the Practitioner performs the roles associated.
   */
  public managingOrganization?: fhir.Reference|undefined;
  /**
   * Need to know what authority the practitioner has - what can they do?
   */
  public role?: fhir.CodeableConcept|undefined;
  /**
   * Specific specialty of the practitioner.
   */
  public specialty: fhir.CodeableConcept[];
  /**
   * Even after the agencies is revoked, the fact that it existed must still be recorded.
   */
  public period?: fhir.Period|undefined;
  /**
   * The location(s) at which this practitioner provides care.
   */
  public location: fhir.Reference[];
  /**
   * The list of healthcare services that this worker provides for this role's Organization/Location(s).
   */
  public healthcareService: fhir.Reference[];
  /**
   * Default constructor for PractitionerPractitionerRole - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<PractitionerPractitionerRoleArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['managingOrganization']) { this.managingOrganization = new fhir.Reference(source.managingOrganization); }
    if (source['role']) { this.role = new fhir.CodeableConcept(source.role); }
    if (source['specialty']) { this.specialty = source.specialty.map((x) => new fhir.CodeableConcept(x)); }
    else { this.specialty = []; }
    if (source['period']) { this.period = new fhir.Period(source.period); }
    if (source['location']) { this.location = source.location.map((x) => new fhir.Reference(x)); }
    else { this.location = []; }
    if (source['healthcareService']) { this.healthcareService = source.healthcareService.map((x) => new fhir.Reference(x)); }
    else { this.healthcareService = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'Practitioner.practitionerRole' }
    iss.push(...this.vOS('managingOrganization',exp));
    iss.push(...this.vOS('role',exp));
    iss.push(...this.vOA('specialty',exp));
    iss.push(...this.vOS('period',exp));
    iss.push(...this.vOA('location',exp));
    iss.push(...this.vOA('healthcareService',exp));
    return iss;
  }
}
/**
 * Valid arguments for the PractitionerQualification type.
 */
export interface PractitionerQualificationArgs extends fhir.BackboneElementArgs {
  /**
   * Often, specific identities are assigned for the qualification.
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * Coded representation of the qualification.
   */
  code: fhir.CodeableConceptArgs|null;
  /**
   * Qualifications are often for a limited period of time, and can be revoked.
   */
  period?: fhir.PeriodArgs|undefined;
  /**
   * Organization that regulates and issues the qualification.
   */
  issuer?: fhir.ReferenceArgs|undefined;
}

/**
 * Qualifications obtained by training and certification.
 */
export class PractitionerQualification extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'PractitionerQualification';
  /**
   * Often, specific identities are assigned for the qualification.
   */
  public identifier: fhir.Identifier[];
  /**
   * Coded representation of the qualification.
   */
  public code: fhir.CodeableConcept|null;
  /**
   * Qualifications are often for a limited period of time, and can be revoked.
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
   * Often, specific identities are assigned for the agent.
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * Need to be able to mark a practitioner record as not to be used because it was created in error.
   */
  active?: fhir.FhirBoolean|boolean|undefined;
  /**
   * Extended properties for primitive element: Practitioner.active
   */
  _active?:fhir.FhirElementArgs;
  /**
   * Contact persons need to be identified by name, but it is uncommon to need details about multiple other names for that person.
   */
  name?: fhir.HumanNameArgs|undefined;
  /**
   * Need to know how to reach a practitioner.
   */
  telecom?: fhir.ContactPointArgs[]|undefined;
  /**
   * Need to keep track where the practitioner can found during work or for directing mail.
   */
  address?: fhir.AddressArgs[]|undefined;
  /**
   * Needed to address the person correctly.
   */
  gender?: fhir.FhirCode<AdministrativeGenderCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: Practitioner.gender
   */
  _gender?:fhir.FhirElementArgs;
  /**
   * Needed for identification.
   */
  birthDate?: fhir.FhirDate|string|undefined;
  /**
   * Extended properties for primitive element: Practitioner.birthDate
   */
  _birthDate?:fhir.FhirElementArgs;
  /**
   * Many EHR systems have the capability to capture an image of patients and personnel. Fits with newer social media usage too.
   */
  photo?: fhir.AttachmentArgs[]|undefined;
  /**
   * The list of roles/organizations that the practitioner is associated with.
   */
  practitionerRole?: fhir.PractitionerPractitionerRoleArgs[]|undefined;
  /**
   * Qualifications obtained by training and certification.
   */
  qualification?: fhir.PractitionerQualificationArgs[]|undefined;
  /**
   * Knowing which language a practitioner speaks can help in facilitating communication with patients.
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
   * Often, specific identities are assigned for the agent.
   */
  public identifier: fhir.Identifier[];
  /**
   * Need to be able to mark a practitioner record as not to be used because it was created in error.
   */
  public active?: fhir.FhirBoolean|undefined;
  /**
   * Contact persons need to be identified by name, but it is uncommon to need details about multiple other names for that person.
   */
  public name?: fhir.HumanName|undefined;
  /**
   * Need to know how to reach a practitioner.
   */
  public telecom: fhir.ContactPoint[];
  /**
   * Need to keep track where the practitioner can found during work or for directing mail.
   */
  public address: fhir.Address[];
  /**
   * Needed to address the person correctly.
   */
  public gender?: fhir.FhirCode<AdministrativeGenderCodeType>|undefined;
  /**
   * Needed for identification.
   */
  public birthDate?: fhir.FhirDate|undefined;
  /**
   * Many EHR systems have the capability to capture an image of patients and personnel. Fits with newer social media usage too.
   */
  public photo: fhir.Attachment[];
  /**
   * The list of roles/organizations that the practitioner is associated with.
   */
  public practitionerRole: fhir.PractitionerPractitionerRole[];
  /**
   * Qualifications obtained by training and certification.
   */
  public qualification: fhir.PractitionerQualification[];
  /**
   * Knowing which language a practitioner speaks can help in facilitating communication with patients.
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
    if (source['name']) { this.name = new fhir.HumanName(source.name); }
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
    if (source['practitionerRole']) { this.practitionerRole = source.practitionerRole.map((x) => new fhir.PractitionerPractitionerRole(x)); }
    else { this.practitionerRole = []; }
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
    iss.push(...this.vOS('name',exp));
    iss.push(...this.vOA('telecom',exp));
    iss.push(...this.vOA('address',exp));
    iss.push(...this.vOSV('gender',exp,'AdministrativeGender',AdministrativeGenderVsValidation,'r'));
    iss.push(...this.vOS('birthDate',exp));
    iss.push(...this.vOA('photo',exp));
    iss.push(...this.vOA('practitionerRole',exp));
    iss.push(...this.vOA('qualification',exp));
    iss.push(...this.vOA('communication',exp));
    return iss;
  }
}