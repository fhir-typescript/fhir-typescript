// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR Resource: Patient

import * as fhir from '../fhir.js';

// @ts-ignore
import { V20131Codes,  V20131CodeType } from '../fhirValueSets/V20131Codes.js';
// @ts-ignore
import { V20131VsValidation } from '../fhirValueSets/V20131VsValidation.js';
// @ts-ignore
import { AdministrativeGenderCodes,  AdministrativeGenderCodeType } from '../fhirValueSets/AdministrativeGenderCodes.js';
// @ts-ignore
import { AdministrativeGenderVsValidation } from '../fhirValueSets/AdministrativeGenderVsValidation.js';
// @ts-ignore
import { AnimalSpeciesCodes,  AnimalSpeciesCodeType } from '../fhirValueSets/AnimalSpeciesCodes.js';
// @ts-ignore
import { AnimalSpeciesVsValidation } from '../fhirValueSets/AnimalSpeciesVsValidation.js';
// @ts-ignore
import { AnimalBreedsCodes,  AnimalBreedsCodeType } from '../fhirValueSets/AnimalBreedsCodes.js';
// @ts-ignore
import { AnimalBreedsVsValidation } from '../fhirValueSets/AnimalBreedsVsValidation.js';
// @ts-ignore
import { AnimalGenderstatusCodes,  AnimalGenderstatusCodeType } from '../fhirValueSets/AnimalGenderstatusCodes.js';
// @ts-ignore
import { AnimalGenderstatusVsValidation } from '../fhirValueSets/AnimalGenderstatusVsValidation.js';
// @ts-ignore
import { LanguagesCodes,  LanguagesCodeType } from '../fhirValueSets/LanguagesCodes.js';
// @ts-ignore
import { LanguagesVsValidation } from '../fhirValueSets/LanguagesVsValidation.js';
// @ts-ignore
import { LinkTypeCodes,  LinkTypeCodeType } from '../fhirValueSets/LinkTypeCodes.js';
// @ts-ignore
import { LinkTypeVsValidation } from '../fhirValueSets/LinkTypeVsValidation.js';
// @ts-ignore
import { MaritalStatusCodes,  MaritalStatusCodeType } from '../fhirValueSets/MaritalStatusCodes.js';
// @ts-ignore
import { MaritalStatusVsValidation } from '../fhirValueSets/MaritalStatusVsValidation.js';
/**
 * Valid arguments for the PatientContact type.
 */
export interface PatientContactArgs extends fhir.BackboneElementArgs {
  /**
   * The nature of the relationship between the patient and the contact person.
   */
  relationship?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * A name associated with the contact person.
   */
  name?: fhir.HumanNameArgs|undefined;
  /**
   * Contact may have multiple ways to be contacted with different uses or applicable periods.  May need to have options for contacting the person urgently, and also to help with identification.
   */
  telecom?: fhir.ContactPointArgs[]|undefined;
  /**
   * Address for the contact person.
   */
  address?: fhir.AddressArgs|undefined;
  /**
   * Administrative Gender - the gender that the contact person is considered to have for administration and record keeping purposes.
   */
  gender?: fhir.FhirCode<AdministrativeGenderCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: Patient.contact.gender
   */
  _gender?:fhir.FhirElementArgs;
  /**
   * Organization on behalf of which the contact is acting or for which the contact is working.
   */
  organization?: fhir.ReferenceArgs|undefined;
  /**
   * The period during which this contact person or organization is valid to be contacted relating to this patient.
   */
  period?: fhir.PeriodArgs|undefined;
}

/**
 * Contact covers all kinds of contact parties: family members, business contacts, guardians, caregivers. Not applicable to register pedigree and family ties beyond use of having contact.
 */
export class PatientContact extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'PatientContact';
  /**
   * The nature of the relationship between the patient and the contact person.
   */
  public relationship: fhir.CodeableConcept[];
  /**
   * A name associated with the contact person.
   */
  public name?: fhir.HumanName|undefined;
  /**
   * Contact may have multiple ways to be contacted with different uses or applicable periods.  May need to have options for contacting the person urgently, and also to help with identification.
   */
  public telecom: fhir.ContactPoint[];
  /**
   * Address for the contact person.
   */
  public address?: fhir.Address|undefined;
  /**
   * Administrative Gender - the gender that the contact person is considered to have for administration and record keeping purposes.
   */
  public gender?: fhir.FhirCode<AdministrativeGenderCodeType>|undefined;
  /**
   * Organization on behalf of which the contact is acting or for which the contact is working.
   */
  public organization?: fhir.Reference|undefined;
  /**
   * The period during which this contact person or organization is valid to be contacted relating to this patient.
   */
  public period?: fhir.Period|undefined;
  /**
   * Default constructor for PatientContact - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<PatientContactArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['relationship']) { this.relationship = source.relationship.map((x) => new fhir.CodeableConcept(x)); }
    else { this.relationship = []; }
    if (source['name']) { this.name = new fhir.HumanName(source.name); }
    if (source['telecom']) { this.telecom = source.telecom.map((x) => new fhir.ContactPoint(x)); }
    else { this.telecom = []; }
    if (source['address']) { this.address = new fhir.Address(source.address); }
    if (source['gender']) { this.gender = new fhir.FhirCode<AdministrativeGenderCodeType>({value: source.gender}); }
    if (source['_gender']) {
      if (this.gender) { this.gender.addExtendedProperties(source._gender!); }
      else { this.gender = new fhir.FhirCode<AdministrativeGenderCodeType>(source._gender as Partial<fhir.FhirCode>); }
    }
    if (source['organization']) { this.organization = new fhir.Reference(source.organization); }
    if (source['period']) { this.period = new fhir.Period(source.period); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'Patient.contact' }
    iss.push(...this.vOA('relationship',exp));
    iss.push(...this.vOS('name',exp));
    iss.push(...this.vOA('telecom',exp));
    iss.push(...this.vOS('address',exp));
    iss.push(...this.vOSV('gender',exp,'AdministrativeGender',AdministrativeGenderVsValidation,'r'));
    iss.push(...this.vOS('organization',exp));
    iss.push(...this.vOS('period',exp));
    return iss;
  }
}
/**
 * Valid arguments for the PatientAnimal type.
 */
export interface PatientAnimalArgs extends fhir.BackboneElementArgs {
  /**
   * If the patient is non-human, at least a species SHALL be specified. Species SHALL be a widely recognised taxonomic classification.  It may or may not be Linnaean taxonomy and may or may not be at the level of species. If the level is finer than species--such as a breed code--the code system used SHALL allow inference of the species.  (The common example is that the word "Hereford" does not allow inference of the species Bos taurus, because there is a Hereford pig breed, but the SNOMED CT code for "Hereford Cattle Breed" does.).
   */
  species: fhir.CodeableConceptArgs|null;
  /**
   * Breed MAY be used to provide further taxonomic or non-taxonomic classification.  It may involve local or proprietary designation--such as commercial strain--and/or additional information such as production type.
   */
  breed?: fhir.CodeableConceptArgs|undefined;
  /**
   * Indicates the current state of the animal's reproductive organs.
   */
  genderStatus?: fhir.CodeableConceptArgs|undefined;
}

/**
 * The animal element is labeled "Is Modifier" since patients may be non-human. Systems SHALL either handle patient details appropriately (e.g. inform users patient is not human) or reject declared animal records.   The absense of the animal element does not imply that the patient is a human. If a system requires such a positive assertion that the patient is human, an extension will be required.  (Do not use a species of homo-sapiens in animal species, as this would incorrectly infer that the patient is an animal).
 */
export class PatientAnimal extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'PatientAnimal';
  /**
   * If the patient is non-human, at least a species SHALL be specified. Species SHALL be a widely recognised taxonomic classification.  It may or may not be Linnaean taxonomy and may or may not be at the level of species. If the level is finer than species--such as a breed code--the code system used SHALL allow inference of the species.  (The common example is that the word "Hereford" does not allow inference of the species Bos taurus, because there is a Hereford pig breed, but the SNOMED CT code for "Hereford Cattle Breed" does.).
   */
  public species: fhir.CodeableConcept|null;
  /**
   * Breed MAY be used to provide further taxonomic or non-taxonomic classification.  It may involve local or proprietary designation--such as commercial strain--and/or additional information such as production type.
   */
  public breed?: fhir.CodeableConcept|undefined;
  /**
   * Indicates the current state of the animal's reproductive organs.
   */
  public genderStatus?: fhir.CodeableConcept|undefined;
  /**
   * Default constructor for PatientAnimal - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<PatientAnimalArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['species']) { this.species = new fhir.CodeableConcept(source.species); }
    else { this.species = null; }
    if (source['breed']) { this.breed = new fhir.CodeableConcept(source.breed); }
    if (source['genderStatus']) { this.genderStatus = new fhir.CodeableConcept(source.genderStatus); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'Patient.animal' }
    iss.push(...this.vRS('species',exp));
    iss.push(...this.vOS('breed',exp));
    iss.push(...this.vOS('genderStatus',exp));
    return iss;
  }
}
/**
 * Valid arguments for the PatientCommunication type.
 */
export interface PatientCommunicationArgs extends fhir.BackboneElementArgs {
  /**
   * The structure aa-BB with this exact casing is one the most widely used notations for locale. However not all systems actually code this but instead have it as free text. Hence CodeableConcept instead of code as the data type.
   */
  language: fhir.CodeableConceptArgs|null;
  /**
   * This language is specifically identified for communicating healthcare information.
   */
  preferred?: fhir.FhirBoolean|boolean|undefined;
  /**
   * Extended properties for primitive element: Patient.communication.preferred
   */
  _preferred?:fhir.FhirElementArgs;
}

/**
 * If no language is specified, this *implies* that the default local language is spoken.  If you need to convey proficiency for multiple modes then you need multiple Patient.Communication associations.   For animals, language is not a relevant field, and should be absent from the instance. If the Patient does not speak the default local language, then the Interpreter Required Standard can be used to explicitly declare that an interpreter is required.
 */
export class PatientCommunication extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'PatientCommunication';
  /**
   * The structure aa-BB with this exact casing is one the most widely used notations for locale. However not all systems actually code this but instead have it as free text. Hence CodeableConcept instead of code as the data type.
   */
  public language: fhir.CodeableConcept|null;
  /**
   * This language is specifically identified for communicating healthcare information.
   */
  public preferred?: fhir.FhirBoolean|undefined;
  /**
   * Default constructor for PatientCommunication - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<PatientCommunicationArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['language']) { this.language = new fhir.CodeableConcept(source.language); }
    else { this.language = null; }
    if (source['preferred']) { this.preferred = new fhir.FhirBoolean({value: source.preferred}); }
    if (source['_preferred']) {
      if (this.preferred) { this.preferred.addExtendedProperties(source._preferred!); }
      else { this.preferred = new fhir.FhirBoolean(source._preferred as Partial<fhir.FhirBooleanArgs>); }
    }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'Patient.communication' }
    iss.push(...this.vRS('language',exp));
    iss.push(...this.vOS('preferred',exp));
    return iss;
  }
}
/**
 * Valid arguments for the PatientLink type.
 */
export interface PatientLinkArgs extends fhir.BackboneElementArgs {
  /**
   * Referencing a RelatedPerson here removes the need to use a Person record to associate a Patient and RelatedPerson as the same individual.
   */
  other: fhir.ReferenceArgs|null;
  /**
   * The type of link between this patient resource and another patient resource.
   */
  type: fhir.FhirCode<LinkTypeCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: Patient.link.type
   */
  _type?:fhir.FhirElementArgs;
}

/**
 * There is no assumption that linked patient records have mutual links. 
 * This element is labelled as a modifier because it may not be the main Patient resource, and the referenced patient should be used instead of this Patient record. This is when the link.type value is 'replaced-by'.
 */
export class PatientLink extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'PatientLink';
  /**
   * Referencing a RelatedPerson here removes the need to use a Person record to associate a Patient and RelatedPerson as the same individual.
   */
  public other: fhir.Reference|null;
  /**
   * The type of link between this patient resource and another patient resource.
   */
  public type: fhir.FhirCode<LinkTypeCodeType>|null;
  /**
   * Default constructor for PatientLink - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<PatientLinkArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['other']) { this.other = new fhir.Reference(source.other); }
    else { this.other = null; }
    if (source['type']) { this.type = new fhir.FhirCode<LinkTypeCodeType>({value: source.type}); }
    else { this.type = null; }
    if (source['_type']) {
      if (this.type) { this.type.addExtendedProperties(source._type!); }
      else { this.type = new fhir.FhirCode<LinkTypeCodeType>(source._type as Partial<fhir.FhirCode>); }
    }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'Patient.link' }
    iss.push(...this.vRS('other',exp));
    iss.push(...this.vRSV('type',exp,'LinkType',LinkTypeVsValidation,'r'));
    return iss;
  }
}
/**
 * Valid arguments for the Patient type.
 */
export interface PatientArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "Patient"|undefined;
  /**
   * An identifier for this patient.
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * Default is true. If a record is inactive, and linked to an active record, then future patient/record updates should occur on the other patient
   * This element is labeled as a modifier because when the patient record is marked as not active it is not expected to be used/referenced without being changed back to active.
   */
  active?: fhir.FhirBoolean|boolean|undefined;
  /**
   * Extended properties for primitive element: Patient.active
   */
  _active?:fhir.FhirElementArgs;
  /**
   * A patient may have multiple names with different uses or applicable periods. For animals, the name is a "HumanName" in the sense that is assigned and used by humans and has the same patterns.
   */
  name?: fhir.HumanNameArgs[]|undefined;
  /**
   * A Patient may have multiple ways to be contacted with different uses or applicable periods.  May need to have options for contacting the person urgently and also to help with identification. The address may not go directly to the individual, but may reach another party that is able to proxy for the patient (i.e. home phone, or pet owner's phone).
   */
  telecom?: fhir.ContactPointArgs[]|undefined;
  /**
   * The gender may not match the biological sex as determined by genetics, or the individual's preferred identification. Note that for both humans and particularly animals, there are other legitimate possibilities than M and F, though the vast majority of systems and contexts only support M and F.  Systems providing decision support or enforcing business rules should ideally do this on the basis of Observations dealing with the specific gender aspect of interest (anatomical, chromosonal, social, etc.)  However, because these observations are infrequently recorded, defaulting to the administrative gender is common practice.  Where such defaulting occurs, rule enforcement should allow for the variation between administrative and biological, chromosonal and other gender aspects.  For example, an alert about a hysterectomy on a male should be handled as a warning or overrideable error, not a "hard" error.
   */
  gender?: fhir.FhirCode<AdministrativeGenderCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: Patient.gender
   */
  _gender?:fhir.FhirElementArgs;
  /**
   * At least an estimated year should be provided as a guess if the real DOB is unknown  There is a standard extension "patient-birthTime" available that should be used where Time is required (such as in maternaty/infant care systems).
   */
  birthDate?: fhir.FhirDate|string|undefined;
  /**
   * Extended properties for primitive element: Patient.birthDate
   */
  _birthDate?:fhir.FhirElementArgs;
  /**
   * If there's no value in the instance it means there is no statement on whether or not the individual is deceased. Most systems will interpret the absence of a value as a sign of the person being alive.
   * This element is labeled as a modifier because once a patient is marked as deceased, the actions that are appropriate to perform on the patient may be significantly different.
   */
  deceased?: fhir.FhirBoolean|fhir.FhirDateTime|undefined;
  /**
   * If there's no value in the instance it means there is no statement on whether or not the individual is deceased. Most systems will interpret the absence of a value as a sign of the person being alive.
   * This element is labeled as a modifier because once a patient is marked as deceased, the actions that are appropriate to perform on the patient may be significantly different.
   */
  deceasedBoolean?: fhir.FhirBoolean|boolean|undefined;
  /**
   * If there's no value in the instance it means there is no statement on whether or not the individual is deceased. Most systems will interpret the absence of a value as a sign of the person being alive.
   * This element is labeled as a modifier because once a patient is marked as deceased, the actions that are appropriate to perform on the patient may be significantly different.
   */
  deceasedDateTime?: fhir.FhirDateTime|string|undefined;
  /**
   * Patient may have multiple addresses with different uses or applicable periods.
   */
  address?: fhir.AddressArgs[]|undefined;
  /**
   * This field contains a patient's most recent marital (civil) status.
   */
  maritalStatus?: fhir.CodeableConceptArgs|undefined;
  /**
   * Where the valueInteger is provided, the number is the birth number in the sequence.
   * E.g. The middle birth in tripplets would be valueInteger=2 and the third born would have valueInteger=3
   * If a bool value was provided for this tripplets examle, then all 3 patient records would have valueBool=true (the ordering is not indicated).
   */
  multipleBirth?: fhir.FhirBoolean|fhir.FhirInteger|undefined;
  /**
   * Where the valueInteger is provided, the number is the birth number in the sequence.
   * E.g. The middle birth in tripplets would be valueInteger=2 and the third born would have valueInteger=3
   * If a bool value was provided for this tripplets examle, then all 3 patient records would have valueBool=true (the ordering is not indicated).
   */
  multipleBirthBoolean?: fhir.FhirBoolean|boolean|undefined;
  /**
   * Where the valueInteger is provided, the number is the birth number in the sequence.
   * E.g. The middle birth in tripplets would be valueInteger=2 and the third born would have valueInteger=3
   * If a bool value was provided for this tripplets examle, then all 3 patient records would have valueBool=true (the ordering is not indicated).
   */
  multipleBirthInteger?: fhir.FhirInteger|number|undefined;
  /**
   * Image of the patient.
   */
  photo?: fhir.AttachmentArgs[]|undefined;
  /**
   * Contact covers all kinds of contact parties: family members, business contacts, guardians, caregivers. Not applicable to register pedigree and family ties beyond use of having contact.
   */
  contact?: fhir.PatientContactArgs[]|undefined;
  /**
   * The animal element is labeled "Is Modifier" since patients may be non-human. Systems SHALL either handle patient details appropriately (e.g. inform users patient is not human) or reject declared animal records.   The absense of the animal element does not imply that the patient is a human. If a system requires such a positive assertion that the patient is human, an extension will be required.  (Do not use a species of homo-sapiens in animal species, as this would incorrectly infer that the patient is an animal).
   */
  animal?: fhir.PatientAnimalArgs|undefined;
  /**
   * If no language is specified, this *implies* that the default local language is spoken.  If you need to convey proficiency for multiple modes then you need multiple Patient.Communication associations.   For animals, language is not a relevant field, and should be absent from the instance. If the Patient does not speak the default local language, then the Interpreter Required Standard can be used to explicitly declare that an interpreter is required.
   */
  communication?: fhir.PatientCommunicationArgs[]|undefined;
  /**
   * This may be the primary care provider (in a GP context), or it may be a patient nominated care manager in a community/disablity setting, or even organization that will provide people to perform the care provider roles.
   * It is not to be used to record Care Teams, these should be in a CareTeam resource that may be linked to the CarePlan or EpisodeOfCare resources.
   */
  generalPractitioner?: fhir.ReferenceArgs[]|undefined;
  /**
   * There is only one managing organization for a specific patient record. Other organizations will have their own Patient record, and may use the Link property to join the records together (or a Person resource which can include confidence ratings for the association).
   */
  managingOrganization?: fhir.ReferenceArgs|undefined;
  /**
   * There is no assumption that linked patient records have mutual links. 
   * This element is labelled as a modifier because it may not be the main Patient resource, and the referenced patient should be used instead of this Patient record. This is when the link.type value is 'replaced-by'.
   */
  link?: fhir.PatientLinkArgs[]|undefined;
}

/**
 * Demographics and other administrative information about an individual or animal receiving care or other health-related services.
 */
export class Patient extends fhir.DomainResource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'Patient';
  /**
   * Resource Type Name
   */
  public override resourceType: "Patient";
  /**
   * An identifier for this patient.
   */
  public identifier: fhir.Identifier[];
  /**
   * Default is true. If a record is inactive, and linked to an active record, then future patient/record updates should occur on the other patient
   * This element is labeled as a modifier because when the patient record is marked as not active it is not expected to be used/referenced without being changed back to active.
   */
  public active?: fhir.FhirBoolean|undefined;
  /**
   * A patient may have multiple names with different uses or applicable periods. For animals, the name is a "HumanName" in the sense that is assigned and used by humans and has the same patterns.
   */
  public name: fhir.HumanName[];
  /**
   * A Patient may have multiple ways to be contacted with different uses or applicable periods.  May need to have options for contacting the person urgently and also to help with identification. The address may not go directly to the individual, but may reach another party that is able to proxy for the patient (i.e. home phone, or pet owner's phone).
   */
  public telecom: fhir.ContactPoint[];
  /**
   * The gender may not match the biological sex as determined by genetics, or the individual's preferred identification. Note that for both humans and particularly animals, there are other legitimate possibilities than M and F, though the vast majority of systems and contexts only support M and F.  Systems providing decision support or enforcing business rules should ideally do this on the basis of Observations dealing with the specific gender aspect of interest (anatomical, chromosonal, social, etc.)  However, because these observations are infrequently recorded, defaulting to the administrative gender is common practice.  Where such defaulting occurs, rule enforcement should allow for the variation between administrative and biological, chromosonal and other gender aspects.  For example, an alert about a hysterectomy on a male should be handled as a warning or overrideable error, not a "hard" error.
   */
  public gender?: fhir.FhirCode<AdministrativeGenderCodeType>|undefined;
  /**
   * At least an estimated year should be provided as a guess if the real DOB is unknown  There is a standard extension "patient-birthTime" available that should be used where Time is required (such as in maternaty/infant care systems).
   */
  public birthDate?: fhir.FhirDate|undefined;
  /**
   * If there's no value in the instance it means there is no statement on whether or not the individual is deceased. Most systems will interpret the absence of a value as a sign of the person being alive.
   * This element is labeled as a modifier because once a patient is marked as deceased, the actions that are appropriate to perform on the patient may be significantly different.
   */
  public deceased?: (fhir.FhirBoolean|fhir.FhirDateTime)|undefined;
  /**
   * Internal flag to properly serialize choice-type element Patient.deceased[x]
   */
  protected static readonly _fts_deceasedIsChoice:true = true;
  /**
   * Patient may have multiple addresses with different uses or applicable periods.
   */
  public address: fhir.Address[];
  /**
   * This field contains a patient's most recent marital (civil) status.
   */
  public maritalStatus?: fhir.CodeableConcept|undefined;
  /**
   * Where the valueInteger is provided, the number is the birth number in the sequence.
   * E.g. The middle birth in tripplets would be valueInteger=2 and the third born would have valueInteger=3
   * If a bool value was provided for this tripplets examle, then all 3 patient records would have valueBool=true (the ordering is not indicated).
   */
  public multipleBirth?: (fhir.FhirBoolean|fhir.FhirInteger)|undefined;
  /**
   * Internal flag to properly serialize choice-type element Patient.multipleBirth[x]
   */
  protected static readonly _fts_multipleBirthIsChoice:true = true;
  /**
   * Image of the patient.
   */
  public photo: fhir.Attachment[];
  /**
   * Contact covers all kinds of contact parties: family members, business contacts, guardians, caregivers. Not applicable to register pedigree and family ties beyond use of having contact.
   */
  public contact: fhir.PatientContact[];
  /**
   * The animal element is labeled "Is Modifier" since patients may be non-human. Systems SHALL either handle patient details appropriately (e.g. inform users patient is not human) or reject declared animal records.   The absense of the animal element does not imply that the patient is a human. If a system requires such a positive assertion that the patient is human, an extension will be required.  (Do not use a species of homo-sapiens in animal species, as this would incorrectly infer that the patient is an animal).
   */
  public animal?: fhir.PatientAnimal|undefined;
  /**
   * If no language is specified, this *implies* that the default local language is spoken.  If you need to convey proficiency for multiple modes then you need multiple Patient.Communication associations.   For animals, language is not a relevant field, and should be absent from the instance. If the Patient does not speak the default local language, then the Interpreter Required Standard can be used to explicitly declare that an interpreter is required.
   */
  public communication: fhir.PatientCommunication[];
  /**
   * This may be the primary care provider (in a GP context), or it may be a patient nominated care manager in a community/disablity setting, or even organization that will provide people to perform the care provider roles.
   * It is not to be used to record Care Teams, these should be in a CareTeam resource that may be linked to the CarePlan or EpisodeOfCare resources.
   */
  public generalPractitioner: fhir.Reference[];
  /**
   * There is only one managing organization for a specific patient record. Other organizations will have their own Patient record, and may use the Link property to join the records together (or a Person resource which can include confidence ratings for the association).
   */
  public managingOrganization?: fhir.Reference|undefined;
  /**
   * There is no assumption that linked patient records have mutual links. 
   * This element is labelled as a modifier because it may not be the main Patient resource, and the referenced patient should be used instead of this Patient record. This is when the link.type value is 'replaced-by'.
   */
  public link: fhir.PatientLink[];
  /**
   * Default constructor for Patient - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<PatientArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'Patient';
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
    if (source['deceased']) { this.deceased = source.deceased; }
    else if (source['deceasedBoolean']) { this.deceased = new fhir.FhirBoolean({value: source.deceasedBoolean}); }
    else if (source['deceasedDateTime']) { this.deceased = new fhir.FhirDateTime({value: source.deceasedDateTime}); }
    if (source['address']) { this.address = source.address.map((x) => new fhir.Address(x)); }
    else { this.address = []; }
    if (source['maritalStatus']) { this.maritalStatus = new fhir.CodeableConcept(source.maritalStatus); }
    if (source['multipleBirth']) { this.multipleBirth = source.multipleBirth; }
    else if (source['multipleBirthBoolean']) { this.multipleBirth = new fhir.FhirBoolean({value: source.multipleBirthBoolean}); }
    else if (source['multipleBirthInteger']) { this.multipleBirth = new fhir.FhirInteger({value: source.multipleBirthInteger}); }
    if (source['photo']) { this.photo = source.photo.map((x) => new fhir.Attachment(x)); }
    else { this.photo = []; }
    if (source['contact']) { this.contact = source.contact.map((x) => new fhir.PatientContact(x)); }
    else { this.contact = []; }
    if (source['animal']) { this.animal = new fhir.PatientAnimal(source.animal); }
    if (source['communication']) { this.communication = source.communication.map((x) => new fhir.PatientCommunication(x)); }
    else { this.communication = []; }
    if (source['generalPractitioner']) { this.generalPractitioner = source.generalPractitioner.map((x) => new fhir.Reference(x)); }
    else { this.generalPractitioner = []; }
    if (source['managingOrganization']) { this.managingOrganization = new fhir.Reference(source.managingOrganization); }
    if (source['link']) { this.link = source.link.map((x) => new fhir.PatientLink(x)); }
    else { this.link = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'Patient' }
    iss.push(...this.vRPS('resourceType',exp));
    iss.push(...this.vOA('identifier',exp));
    iss.push(...this.vOS('active',exp));
    iss.push(...this.vOA('name',exp));
    iss.push(...this.vOA('telecom',exp));
    iss.push(...this.vOSV('gender',exp,'AdministrativeGender',AdministrativeGenderVsValidation,'r'));
    iss.push(...this.vOS('birthDate',exp));
    iss.push(...this.vOS('deceased',exp));
    iss.push(...this.vOA('address',exp));
    iss.push(...this.vOS('maritalStatus',exp));
    iss.push(...this.vOS('multipleBirth',exp));
    iss.push(...this.vOA('photo',exp));
    iss.push(...this.vOA('contact',exp));
    iss.push(...this.vOS('animal',exp));
    iss.push(...this.vOA('communication',exp));
    iss.push(...this.vOA('generalPractitioner',exp));
    iss.push(...this.vOS('managingOrganization',exp));
    iss.push(...this.vOA('link',exp));
    return iss;
  }
}