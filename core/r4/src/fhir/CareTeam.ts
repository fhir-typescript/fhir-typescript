// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: CareTeam

import * as fhir from '../fhir.js';

// @ts-ignore
import { ParticipantRoleCodes,  ParticipantRoleCodeType } from '../fhirValueSets/ParticipantRoleCodes.js';
// @ts-ignore
import { ParticipantRoleVsValidation } from '../fhirValueSets/ParticipantRoleVsValidation.js';
// @ts-ignore
import { CareTeamStatusCodes,  CareTeamStatusCodeType } from '../fhirValueSets/CareTeamStatusCodes.js';
// @ts-ignore
import { CareTeamStatusVsValidation } from '../fhirValueSets/CareTeamStatusVsValidation.js';
// @ts-ignore
import { ClinicalFindingsCodes,  ClinicalFindingsCodeType } from '../fhirValueSets/ClinicalFindingsCodes.js';
// @ts-ignore
import { ClinicalFindingsVsValidation } from '../fhirValueSets/ClinicalFindingsVsValidation.js';
/**
 * Valid arguments for the CareTeamParticipant type.
 */
export interface CareTeamParticipantArgs extends fhir.BackboneElementArgs {
  /**
   * Roles may sometimes be inferred by type of Practitioner.  These are relationships that hold only within the context of the care team.  General relationships should be handled as properties of the Patient resource directly.
   */
  role?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * Patient only needs to be listed if they have a role other than "subject of care".
   * Member is optional because some participants may be known only by their role, particularly in draft plans.
   */
  member?: fhir.ReferenceArgs|undefined;
  /**
   * The organization of the practitioner.
   */
  onBehalfOf?: fhir.ReferenceArgs|undefined;
  /**
   * Indicates when the specific member or organization did (or is intended to) come into effect and end.
   */
  period?: fhir.PeriodArgs|undefined;
}

/**
 * Identifies all people and organizations who are expected to be involved in the care team.
 */
export class CareTeamParticipant extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'CareTeamParticipant';
  /**
   * Roles may sometimes be inferred by type of Practitioner.  These are relationships that hold only within the context of the care team.  General relationships should be handled as properties of the Patient resource directly.
   */
  public role: fhir.CodeableConcept[];
  /**
   * Patient only needs to be listed if they have a role other than "subject of care".
   * Member is optional because some participants may be known only by their role, particularly in draft plans.
   */
  public member?: fhir.Reference|undefined;
  /**
   * The organization of the practitioner.
   */
  public onBehalfOf?: fhir.Reference|undefined;
  /**
   * Indicates when the specific member or organization did (or is intended to) come into effect and end.
   */
  public period?: fhir.Period|undefined;
  /**
   * Default constructor for CareTeamParticipant - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<CareTeamParticipantArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['role']) { this.role = source.role.map((x) => new fhir.CodeableConcept(x)); }
    else { this.role = []; }
    if (source['member']) { this.member = new fhir.Reference(source.member); }
    if (source['onBehalfOf']) { this.onBehalfOf = new fhir.Reference(source.onBehalfOf); }
    if (source['period']) { this.period = new fhir.Period(source.period); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'CareTeam.participant' }
    iss.push(...this.vOA('role',exp));
    iss.push(...this.vOS('member',exp));
    iss.push(...this.vOS('onBehalfOf',exp));
    iss.push(...this.vOS('period',exp));
    return iss;
  }
}
/**
 * Valid arguments for the CareTeam type.
 */
export interface CareTeamArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "CareTeam"|undefined;
  /**
   * This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * This element is labeled as a modifier because the status contains the code entered-in-error that marks the care team as not currently valid.
   */
  status?: fhir.FhirCode<CareTeamStatusCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: CareTeam.status
   */
  _status?:fhir.FhirElementArgs;
  /**
   * There may be multiple axis of categorization and one team may serve multiple purposes.
   */
  category?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * The meaning/purpose of the team is conveyed in CareTeam.category.  This element may also convey semantics of the team (e.g. "Red trauma team"), but its primary purpose is to distinguish between identical teams in a human-friendly way.  ("Team 18735" isn't as friendly.).
   */
  name?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: CareTeam.name
   */
  _name?:fhir.FhirElementArgs;
  /**
   * Identifies the patient or group whose intended care is handled by the team.
   */
  subject?: fhir.ReferenceArgs|undefined;
  /**
   * This will typically be the encounter the event occurred within, but some activities may be initiated prior to or after the official completion of an encounter but still be tied to the context of the encounter.
   */
  encounter?: fhir.ReferenceArgs|undefined;
  /**
   * Indicates when the team did (or is intended to) come into effect and end.
   */
  period?: fhir.PeriodArgs|undefined;
  /**
   * Identifies all people and organizations who are expected to be involved in the care team.
   */
  participant?: fhir.CareTeamParticipantArgs[]|undefined;
  /**
   * Describes why the care team exists.
   */
  reasonCode?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * Condition(s) that this care team addresses.
   */
  reasonReference?: fhir.ReferenceArgs[]|undefined;
  /**
   * The organization responsible for the care team.
   */
  managingOrganization?: fhir.ReferenceArgs[]|undefined;
  /**
   * The ContactPoint.use code of home is not appropriate to use. These contacts are not the contact details of individual care team members.
   */
  telecom?: fhir.ContactPointArgs[]|undefined;
  /**
   * Comments made about the CareTeam.
   */
  note?: fhir.AnnotationArgs[]|undefined;
}

/**
 * The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care for a patient.
 */
export class CareTeam extends fhir.DomainResource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'CareTeam';
  /**
   * Resource Type Name
   */
  public override resourceType: "CareTeam";
  /**
   * This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
   */
  public identifier: fhir.Identifier[];
  /**
   * This element is labeled as a modifier because the status contains the code entered-in-error that marks the care team as not currently valid.
   */
  public status?: fhir.FhirCode<CareTeamStatusCodeType>|undefined;
  /**
   * There may be multiple axis of categorization and one team may serve multiple purposes.
   */
  public category: fhir.CodeableConcept[];
  /**
   * The meaning/purpose of the team is conveyed in CareTeam.category.  This element may also convey semantics of the team (e.g. "Red trauma team"), but its primary purpose is to distinguish between identical teams in a human-friendly way.  ("Team 18735" isn't as friendly.).
   */
  public name?: fhir.FhirString|undefined;
  /**
   * Identifies the patient or group whose intended care is handled by the team.
   */
  public subject?: fhir.Reference|undefined;
  /**
   * This will typically be the encounter the event occurred within, but some activities may be initiated prior to or after the official completion of an encounter but still be tied to the context of the encounter.
   */
  public encounter?: fhir.Reference|undefined;
  /**
   * Indicates when the team did (or is intended to) come into effect and end.
   */
  public period?: fhir.Period|undefined;
  /**
   * Identifies all people and organizations who are expected to be involved in the care team.
   */
  public participant: fhir.CareTeamParticipant[];
  /**
   * Describes why the care team exists.
   */
  public reasonCode: fhir.CodeableConcept[];
  /**
   * Condition(s) that this care team addresses.
   */
  public reasonReference: fhir.Reference[];
  /**
   * The organization responsible for the care team.
   */
  public managingOrganization: fhir.Reference[];
  /**
   * The ContactPoint.use code of home is not appropriate to use. These contacts are not the contact details of individual care team members.
   */
  public telecom: fhir.ContactPoint[];
  /**
   * Comments made about the CareTeam.
   */
  public note: fhir.Annotation[];
  /**
   * Default constructor for CareTeam - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<CareTeamArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'CareTeam';
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x)); }
    else { this.identifier = []; }
    if (source['status']) { this.status = new fhir.FhirCode<CareTeamStatusCodeType>({value: source.status}); }
    if (source['_status']) {
      if (this.status) { this.status.addExtendedProperties(source._status!); }
      else { this.status = new fhir.FhirCode<CareTeamStatusCodeType>(source._status as Partial<fhir.FhirCode>); }
    }
    if (source['category']) { this.category = source.category.map((x) => new fhir.CodeableConcept(x)); }
    else { this.category = []; }
    if (source['name']) { this.name = new fhir.FhirString({value: source.name}); }
    if (source['_name']) {
      if (this.name) { this.name.addExtendedProperties(source._name!); }
      else { this.name = new fhir.FhirString(source._name as Partial<fhir.FhirStringArgs>); }
    }
    if (source['subject']) { this.subject = new fhir.Reference(source.subject); }
    if (source['encounter']) { this.encounter = new fhir.Reference(source.encounter); }
    if (source['period']) { this.period = new fhir.Period(source.period); }
    if (source['participant']) { this.participant = source.participant.map((x) => new fhir.CareTeamParticipant(x)); }
    else { this.participant = []; }
    if (source['reasonCode']) { this.reasonCode = source.reasonCode.map((x) => new fhir.CodeableConcept(x)); }
    else { this.reasonCode = []; }
    if (source['reasonReference']) { this.reasonReference = source.reasonReference.map((x) => new fhir.Reference(x)); }
    else { this.reasonReference = []; }
    if (source['managingOrganization']) { this.managingOrganization = source.managingOrganization.map((x) => new fhir.Reference(x)); }
    else { this.managingOrganization = []; }
    if (source['telecom']) { this.telecom = source.telecom.map((x) => new fhir.ContactPoint(x)); }
    else { this.telecom = []; }
    if (source['note']) { this.note = source.note.map((x) => new fhir.Annotation(x)); }
    else { this.note = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'CareTeam' }
    iss.push(...this.vRPS('resourceType',exp));
    iss.push(...this.vOA('identifier',exp));
    iss.push(...this.vOSV('status',exp,'CareTeamStatus',CareTeamStatusVsValidation,'r'));
    iss.push(...this.vOA('category',exp));
    iss.push(...this.vOS('name',exp));
    iss.push(...this.vOS('subject',exp));
    iss.push(...this.vOS('encounter',exp));
    iss.push(...this.vOS('period',exp));
    iss.push(...this.vOA('participant',exp));
    iss.push(...this.vOA('reasonCode',exp));
    iss.push(...this.vOA('reasonReference',exp));
    iss.push(...this.vOA('managingOrganization',exp));
    iss.push(...this.vOA('telecom',exp));
    iss.push(...this.vOA('note',exp));
    return iss;
  }
}
