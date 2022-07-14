// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: EpisodeOfCare

import * as fhir from '../fhir.js';

// @ts-ignore
import { EpisodeOfCareStatusCodes,  EpisodeOfCareStatusCodeType } from '../fhirValueSets/EpisodeOfCareStatusCodes.js';
// @ts-ignore
import { EpisodeOfCareStatusVsValidation } from '../fhirValueSets/EpisodeOfCareStatusVsValidation.js';
// @ts-ignore
import { DiagnosisRoleCodes,  DiagnosisRoleCodeType } from '../fhirValueSets/DiagnosisRoleCodes.js';
// @ts-ignore
import { DiagnosisRoleVsValidation } from '../fhirValueSets/DiagnosisRoleVsValidation.js';
// @ts-ignore
import { EpisodeofcareTypeCodes,  EpisodeofcareTypeCodeType } from '../fhirValueSets/EpisodeofcareTypeCodes.js';
// @ts-ignore
import { EpisodeofcareTypeVsValidation } from '../fhirValueSets/EpisodeofcareTypeVsValidation.js';
/**
 * Valid arguments for the EpisodeOfCareStatusHistory type.
 */
export interface EpisodeOfCareStatusHistoryArgs extends fhir.BackboneElementArgs {
  /**
   * planned | waitlist | active | onhold | finished | cancelled.
   */
  status: fhir.FhirCode<EpisodeOfCareStatusCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: EpisodeOfCare.statusHistory.status
   */
  _status?:fhir.FhirElementArgs;
  /**
   * The period during this EpisodeOfCare that the specific status applied.
   */
  period: fhir.PeriodArgs|null;
}

/**
 * The history of statuses that the EpisodeOfCare has been through (without requiring processing the history of the resource).
 */
export class EpisodeOfCareStatusHistory extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'EpisodeOfCareStatusHistory';
  /**
   * planned | waitlist | active | onhold | finished | cancelled.
   */
  public status: fhir.FhirCode<EpisodeOfCareStatusCodeType>|null;
  /**
   * The period during this EpisodeOfCare that the specific status applied.
   */
  public period: fhir.Period|null;
  /**
   * Default constructor for EpisodeOfCareStatusHistory - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<EpisodeOfCareStatusHistoryArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['status']) { this.status = new fhir.FhirCode<EpisodeOfCareStatusCodeType>({value: source.status}); }
    else { this.status = null; }
    if (source['_status']) {
      if (this.status) { this.status.addExtendedProperties(source._status!); }
      else { this.status = new fhir.FhirCode<EpisodeOfCareStatusCodeType>(source._status as Partial<fhir.FhirCode>); }
    }
    if (source['period']) { this.period = new fhir.Period(source.period); }
    else { this.period = null; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(expression:string = ''):fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation(expression);
    if (expression === '') { expression = 'EpisodeOfCare.statusHistory' }
    this.vReqSV('status',expression,'EpisodeOfCareStatus',EpisodeOfCareStatusVsValidation,'r')
    this.vReqS('period',expression)
    return issues;
  }
}
/**
 * Valid arguments for the EpisodeOfCareDiagnosis type.
 */
export interface EpisodeOfCareDiagnosisArgs extends fhir.BackboneElementArgs {
  /**
   * A list of conditions/problems/diagnoses that this episode of care is intended to be providing care for.
   */
  condition: fhir.ReferenceArgs|null;
  /**
   * Role that this diagnosis has within the episode of care (e.g. admission, billing, discharge …).
   */
  role?: fhir.CodeableConceptArgs|undefined;
  /**
   * Ranking of the diagnosis (for each role type).
   */
  rank?: fhir.FhirPositiveInt|number|undefined;
  /**
   * Extended properties for primitive element: EpisodeOfCare.diagnosis.rank
   */
  _rank?:fhir.FhirElementArgs;
}

/**
 * The list of diagnosis relevant to this episode of care.
 */
export class EpisodeOfCareDiagnosis extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'EpisodeOfCareDiagnosis';
  /**
   * A list of conditions/problems/diagnoses that this episode of care is intended to be providing care for.
   */
  public condition: fhir.Reference|null;
  /**
   * Role that this diagnosis has within the episode of care (e.g. admission, billing, discharge …).
   */
  public role?: fhir.CodeableConcept|undefined;
  /**
   * Ranking of the diagnosis (for each role type).
   */
  public rank?: fhir.FhirPositiveInt|undefined;
  /**
   * Default constructor for EpisodeOfCareDiagnosis - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<EpisodeOfCareDiagnosisArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['condition']) { this.condition = new fhir.Reference(source.condition); }
    else { this.condition = null; }
    if (source['role']) { this.role = new fhir.CodeableConcept(source.role); }
    if (source['rank']) { this.rank = new fhir.FhirPositiveInt({value: source.rank}); }
    if (source['_rank']) {
      if (this.rank) { this.rank.addExtendedProperties(source._rank!); }
      else { this.rank = new fhir.FhirPositiveInt(source._rank as Partial<fhir.FhirPositiveIntArgs>); }
    }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(expression:string = ''):fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation(expression);
    if (expression === '') { expression = 'EpisodeOfCare.diagnosis' }
    this.vReqS('condition',expression)
    this.vOptS('role',expression)
    this.vOptS('rank',expression)
    return issues;
  }
}
/**
 * Valid arguments for the EpisodeOfCare type.
 */
export interface EpisodeOfCareArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "EpisodeOfCare"|undefined;
  /**
   * The EpisodeOfCare may be known by different identifiers for different contexts of use, such as when an external agency is tracking the Episode for funding purposes.
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * This element is labeled as a modifier because the status contains codes that mark the episode as not currently valid.
   */
  status: fhir.FhirCode<EpisodeOfCareStatusCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: EpisodeOfCare.status
   */
  _status?:fhir.FhirElementArgs;
  /**
   * The history of statuses that the EpisodeOfCare has been through (without requiring processing the history of the resource).
   */
  statusHistory?: fhir.EpisodeOfCareStatusHistoryArgs[]|undefined;
  /**
   * The type can be very important in processing as this could be used in determining if the EpisodeOfCare is relevant to specific government reporting, or other types of classifications.
   */
  type?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * The list of diagnosis relevant to this episode of care.
   */
  diagnosis?: fhir.EpisodeOfCareDiagnosisArgs[]|undefined;
  /**
   * The patient who is the focus of this episode of care.
   */
  patient: fhir.ReferenceArgs|null;
  /**
   * The organization that has assumed the specific responsibilities for the specified duration.
   */
  managingOrganization?: fhir.ReferenceArgs|undefined;
  /**
   * The interval during which the managing organization assumes the defined responsibility.
   */
  period?: fhir.PeriodArgs|undefined;
  /**
   * Referral Request(s) that are fulfilled by this EpisodeOfCare, incoming referrals.
   */
  referralRequest?: fhir.ReferenceArgs[]|undefined;
  /**
   * The practitioner that is the care manager/care coordinator for this patient.
   */
  careManager?: fhir.ReferenceArgs|undefined;
  /**
   * The list of practitioners that may be facilitating this episode of care for specific purposes.
   */
  team?: fhir.ReferenceArgs[]|undefined;
  /**
   * The billing system may choose to allocate billable items associated with the EpisodeOfCare to different referenced Accounts based on internal business rules.
   */
  account?: fhir.ReferenceArgs[]|undefined;
}

/**
 * An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time.
 */
export class EpisodeOfCare extends fhir.DomainResource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'EpisodeOfCare';
  /**
   * Resource Type Name
   */
  public override resourceType: "EpisodeOfCare";
  /**
   * The EpisodeOfCare may be known by different identifiers for different contexts of use, such as when an external agency is tracking the Episode for funding purposes.
   */
  public identifier: fhir.Identifier[];
  /**
   * This element is labeled as a modifier because the status contains codes that mark the episode as not currently valid.
   */
  public status: fhir.FhirCode<EpisodeOfCareStatusCodeType>|null;
  /**
   * The history of statuses that the EpisodeOfCare has been through (without requiring processing the history of the resource).
   */
  public statusHistory: fhir.EpisodeOfCareStatusHistory[];
  /**
   * The type can be very important in processing as this could be used in determining if the EpisodeOfCare is relevant to specific government reporting, or other types of classifications.
   */
  public type: fhir.CodeableConcept[];
  /**
   * The list of diagnosis relevant to this episode of care.
   */
  public diagnosis: fhir.EpisodeOfCareDiagnosis[];
  /**
   * The patient who is the focus of this episode of care.
   */
  public patient: fhir.Reference|null;
  /**
   * The organization that has assumed the specific responsibilities for the specified duration.
   */
  public managingOrganization?: fhir.Reference|undefined;
  /**
   * The interval during which the managing organization assumes the defined responsibility.
   */
  public period?: fhir.Period|undefined;
  /**
   * Referral Request(s) that are fulfilled by this EpisodeOfCare, incoming referrals.
   */
  public referralRequest: fhir.Reference[];
  /**
   * The practitioner that is the care manager/care coordinator for this patient.
   */
  public careManager?: fhir.Reference|undefined;
  /**
   * The list of practitioners that may be facilitating this episode of care for specific purposes.
   */
  public team: fhir.Reference[];
  /**
   * The billing system may choose to allocate billable items associated with the EpisodeOfCare to different referenced Accounts based on internal business rules.
   */
  public account: fhir.Reference[];
  /**
   * Default constructor for EpisodeOfCare - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<EpisodeOfCareArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'EpisodeOfCare';
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x)); }
    else { this.identifier = []; }
    if (source['status']) { this.status = new fhir.FhirCode<EpisodeOfCareStatusCodeType>({value: source.status}); }
    else { this.status = null; }
    if (source['_status']) {
      if (this.status) { this.status.addExtendedProperties(source._status!); }
      else { this.status = new fhir.FhirCode<EpisodeOfCareStatusCodeType>(source._status as Partial<fhir.FhirCode>); }
    }
    if (source['statusHistory']) { this.statusHistory = source.statusHistory.map((x) => new fhir.EpisodeOfCareStatusHistory(x)); }
    else { this.statusHistory = []; }
    if (source['type']) { this.type = source.type.map((x) => new fhir.CodeableConcept(x)); }
    else { this.type = []; }
    if (source['diagnosis']) { this.diagnosis = source.diagnosis.map((x) => new fhir.EpisodeOfCareDiagnosis(x)); }
    else { this.diagnosis = []; }
    if (source['patient']) { this.patient = new fhir.Reference(source.patient); }
    else { this.patient = null; }
    if (source['managingOrganization']) { this.managingOrganization = new fhir.Reference(source.managingOrganization); }
    if (source['period']) { this.period = new fhir.Period(source.period); }
    if (source['referralRequest']) { this.referralRequest = source.referralRequest.map((x) => new fhir.Reference(x)); }
    else { this.referralRequest = []; }
    if (source['careManager']) { this.careManager = new fhir.Reference(source.careManager); }
    if (source['team']) { this.team = source.team.map((x) => new fhir.Reference(x)); }
    else { this.team = []; }
    if (source['account']) { this.account = source.account.map((x) => new fhir.Reference(x)); }
    else { this.account = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(expression:string = ''):fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation(expression);
    if (expression === '') { expression = 'EpisodeOfCare' }
    this.vReqS('resourceType',expression)
    this.vOptA('identifier',expression)
    this.vReqSV('status',expression,'EpisodeOfCareStatus',EpisodeOfCareStatusVsValidation,'r')
    this.vOptA('statusHistory',expression)
    this.vOptA('type',expression)
    this.vOptA('diagnosis',expression)
    this.vReqS('patient',expression)
    this.vOptS('managingOrganization',expression)
    this.vOptS('period',expression)
    this.vOptA('referralRequest',expression)
    this.vOptS('careManager',expression)
    this.vOptA('team',expression)
    this.vOptA('account',expression)
    return issues;
  }
}
