// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR Resource: RelatedPerson

import * as fhir from '../fhir.js';

// @ts-ignore
import { LanguagesCodes,  LanguagesCodeType } from '../fhirValueSets/LanguagesCodes.js';
// @ts-ignore
import { LanguagesVsValidation } from '../fhirValueSets/LanguagesVsValidation.js';
// @ts-ignore
import { RelatedpersonRelationshiptypeCodes,  RelatedpersonRelationshiptypeCodeType } from '../fhirValueSets/RelatedpersonRelationshiptypeCodes.js';
// @ts-ignore
import { RelatedpersonRelationshiptypeVsValidation } from '../fhirValueSets/RelatedpersonRelationshiptypeVsValidation.js';
// @ts-ignore
import { AdministrativeGenderCodes,  AdministrativeGenderCodeType } from '../fhirValueSets/AdministrativeGenderCodes.js';
// @ts-ignore
import { AdministrativeGenderVsValidation } from '../fhirValueSets/AdministrativeGenderVsValidation.js';
/**
 * Valid arguments for the RelatedPersonCommunication type.
 */
export interface RelatedPersonCommunicationArgs extends fhir.BackboneElementArgs {
  /**
   * The structure aa-BB with this exact casing is one the most widely used notations for locale. However not all systems actually code this but instead have it as free text. Hence CodeableConcept instead of code as the data type.
   */
  language: fhir.CodeableConceptArgs|null;
  /**
   * This language is specifically identified for communicating healthcare information.
   */
  preferred?: fhir.FhirBoolean|boolean|undefined;
  /**
   * Extended properties for primitive element: RelatedPerson.communication.preferred
   */
  _preferred?:fhir.FhirElementArgs;
}

/**
 * If no language is specified, this *implies* that the default local language is spoken.  If you need to convey proficiency for multiple modes, then you need multiple RelatedPerson.Communication associations.   If the RelatedPerson does not speak the default local language, then the Interpreter Required Standard can be used to explicitly declare that an interpreter is required.
 */
export class RelatedPersonCommunication extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'RelatedPersonCommunication';
  /**
   * The structure aa-BB with this exact casing is one the most widely used notations for locale. However not all systems actually code this but instead have it as free text. Hence CodeableConcept instead of code as the data type.
   */
  public language: fhir.CodeableConcept|null;
  /**
   * This language is specifically identified for communicating healthcare information.
   */
  public preferred?: fhir.FhirBoolean|undefined;
  /**
   * Default constructor for RelatedPersonCommunication - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<RelatedPersonCommunicationArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
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
    if (exp === '') { exp = 'RelatedPerson.communication' }
    iss.push(...this.vRS('language',exp));
    iss.push(...this.vOS('preferred',exp));
    return iss;
  }
}
/**
 * Valid arguments for the RelatedPerson type.
 */
export interface RelatedPersonArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "RelatedPerson"|undefined;
  /**
   * Identifier for a person within a particular scope.
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * This element is labeled as a modifier because it may be used to mark that the resource was created in error.
   */
  active?: fhir.FhirBoolean|boolean|undefined;
  /**
   * Extended properties for primitive element: RelatedPerson.active
   */
  _active?:fhir.FhirElementArgs;
  /**
   * The patient this person is related to.
   */
  patient: fhir.ReferenceArgs|null;
  /**
   * The nature of the relationship between a patient and the related person.
   */
  relationship?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * A name associated with the person.
   */
  name?: fhir.HumanNameArgs[]|undefined;
  /**
   * Person may have multiple ways to be contacted with different uses or applicable periods.  May need to have options for contacting the person urgently, and also to help with identification.
   */
  telecom?: fhir.ContactPointArgs[]|undefined;
  /**
   * Administrative Gender - the gender that the person is considered to have for administration and record keeping purposes.
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
   * Address where the related person can be contacted or visited.
   */
  address?: fhir.AddressArgs[]|undefined;
  /**
   * Image of the person.
   */
  photo?: fhir.AttachmentArgs[]|undefined;
  /**
   * The period of time during which this relationship is or was active. If there are no dates defined, then the interval is unknown.
   */
  period?: fhir.PeriodArgs|undefined;
  /**
   * If no language is specified, this *implies* that the default local language is spoken.  If you need to convey proficiency for multiple modes, then you need multiple RelatedPerson.Communication associations.   If the RelatedPerson does not speak the default local language, then the Interpreter Required Standard can be used to explicitly declare that an interpreter is required.
   */
  communication?: fhir.RelatedPersonCommunicationArgs[]|undefined;
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
   * Identifier for a person within a particular scope.
   */
  public identifier: fhir.Identifier[];
  /**
   * This element is labeled as a modifier because it may be used to mark that the resource was created in error.
   */
  public active?: fhir.FhirBoolean|undefined;
  /**
   * The patient this person is related to.
   */
  public patient: fhir.Reference|null;
  /**
   * The nature of the relationship between a patient and the related person.
   */
  public relationship: fhir.CodeableConcept[];
  /**
   * A name associated with the person.
   */
  public name: fhir.HumanName[];
  /**
   * Person may have multiple ways to be contacted with different uses or applicable periods.  May need to have options for contacting the person urgently, and also to help with identification.
   */
  public telecom: fhir.ContactPoint[];
  /**
   * Administrative Gender - the gender that the person is considered to have for administration and record keeping purposes.
   */
  public gender?: fhir.FhirCode<AdministrativeGenderCodeType>|undefined;
  /**
   * The date on which the related person was born.
   */
  public birthDate?: fhir.FhirDate|undefined;
  /**
   * Address where the related person can be contacted or visited.
   */
  public address: fhir.Address[];
  /**
   * Image of the person.
   */
  public photo: fhir.Attachment[];
  /**
   * The period of time during which this relationship is or was active. If there are no dates defined, then the interval is unknown.
   */
  public period?: fhir.Period|undefined;
  /**
   * If no language is specified, this *implies* that the default local language is spoken.  If you need to convey proficiency for multiple modes, then you need multiple RelatedPerson.Communication associations.   If the RelatedPerson does not speak the default local language, then the Interpreter Required Standard can be used to explicitly declare that an interpreter is required.
   */
  public communication: fhir.RelatedPersonCommunication[];
  /**
   * Default constructor for RelatedPerson - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<RelatedPersonArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'RelatedPerson';
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x)); }
    else { this.identifier = []; }
    if (source['active']) { this.active = new fhir.FhirBoolean({value: source.active}); }
    if (source['_active']) {
      if (this.active) { this.active.addExtendedProperties(source._active!); }
      else { this.active = new fhir.FhirBoolean(source._active as Partial<fhir.FhirBooleanArgs>); }
    }
    if (source['patient']) { this.patient = new fhir.Reference(source.patient); }
    else { this.patient = null; }
    if (source['relationship']) { this.relationship = source.relationship.map((x) => new fhir.CodeableConcept(x)); }
    else { this.relationship = []; }
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
    if (source['address']) { this.address = source.address.map((x) => new fhir.Address(x)); }
    else { this.address = []; }
    if (source['photo']) { this.photo = source.photo.map((x) => new fhir.Attachment(x)); }
    else { this.photo = []; }
    if (source['period']) { this.period = new fhir.Period(source.period); }
    if (source['communication']) { this.communication = source.communication.map((x) => new fhir.RelatedPersonCommunication(x)); }
    else { this.communication = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'RelatedPerson' }
    iss.push(...this.vRPS('resourceType',exp));
    iss.push(...this.vOA('identifier',exp));
    iss.push(...this.vOS('active',exp));
    iss.push(...this.vRS('patient',exp));
    iss.push(...this.vOA('relationship',exp));
    iss.push(...this.vOA('name',exp));
    iss.push(...this.vOA('telecom',exp));
    iss.push(...this.vOSV('gender',exp,'AdministrativeGender',AdministrativeGenderVsValidation,'r'));
    iss.push(...this.vOS('birthDate',exp));
    iss.push(...this.vOA('address',exp));
    iss.push(...this.vOA('photo',exp));
    iss.push(...this.vOS('period',exp));
    iss.push(...this.vOA('communication',exp));
    return iss;
  }
}
