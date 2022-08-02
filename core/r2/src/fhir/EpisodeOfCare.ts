// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR Resource: EpisodeOfCare

import * as fhir from '../fhir.js';

// @ts-ignore
import { EpisodeOfCareStatusCodes,  EpisodeOfCareStatusCodeType } from '../fhirValueSets/EpisodeOfCareStatusCodes.js';
// @ts-ignore
import { EpisodeOfCareStatusVsValidation } from '../fhirValueSets/EpisodeOfCareStatusVsValidation.js';
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
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'EpisodeOfCare.statusHistory' }
    iss.push(...this.vRSV('status',exp,'EpisodeOfCareStatus',EpisodeOfCareStatusVsValidation,'r'));
    iss.push(...this.vRS('period',exp));
    return iss;
  }
}
/**
 * Valid arguments for the EpisodeOfCareCareTeam type.
 */
export interface EpisodeOfCareCareTeamArgs extends fhir.BackboneElementArgs {
  /**
   * The role this team member is taking within this episode of care.
   */
  role?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * The period of time this practitioner is performing some role within the episode of care.
   */
  period?: fhir.PeriodArgs|undefined;
  /**
   * The practitioner (or Organization) within the team.
   */
  member?: fhir.ReferenceArgs|undefined;
}

/**
 * The list of practitioners that may be facilitating this episode of care for specific purposes.
 */
export class EpisodeOfCareCareTeam extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'EpisodeOfCareCareTeam';
  /**
   * The role this team member is taking within this episode of care.
   */
  public role: fhir.CodeableConcept[];
  /**
   * The period of time this practitioner is performing some role within the episode of care.
   */
  public period?: fhir.Period|undefined;
  /**
   * The practitioner (or Organization) within the team.
   */
  public member?: fhir.Reference|undefined;
  /**
   * Default constructor for EpisodeOfCareCareTeam - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<EpisodeOfCareCareTeamArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['role']) { this.role = source.role.map((x) => new fhir.CodeableConcept(x)); }
    else { this.role = []; }
    if (source['period']) { this.period = new fhir.Period(source.period); }
    if (source['member']) { this.member = new fhir.Reference(source.member); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'EpisodeOfCare.careTeam' }
    iss.push(...this.vOA('role',exp));
    iss.push(...this.vOS('period',exp));
    iss.push(...this.vOS('member',exp));
    return iss;
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
   * Identifier(s) by which this EpisodeOfCare is known.
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * planned | waitlist | active | onhold | finished | cancelled.
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
   * A classification of the type of encounter; e.g. specialist referral, disease management, type of funded care.
   */
  type?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * A list of conditions/problems/diagnoses that this episode of care is intended to be providing care for.
   */
  condition?: fhir.ReferenceArgs[]|undefined;
  /**
   * The patient that this EpisodeOfCare applies to.
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
   * The practitioner that is the care manager/care co-ordinator for this patient.
   */
  careManager?: fhir.ReferenceArgs|undefined;
  /**
   * The list of practitioners that may be facilitating this episode of care for specific purposes.
   */
  careTeam?: fhir.EpisodeOfCareCareTeamArgs[]|undefined;
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
   * Identifier(s) by which this EpisodeOfCare is known.
   */
  public identifier: fhir.Identifier[];
  /**
   * planned | waitlist | active | onhold | finished | cancelled.
   */
  public status: fhir.FhirCode<EpisodeOfCareStatusCodeType>|null;
  /**
   * The history of statuses that the EpisodeOfCare has been through (without requiring processing the history of the resource).
   */
  public statusHistory: fhir.EpisodeOfCareStatusHistory[];
  /**
   * A classification of the type of encounter; e.g. specialist referral, disease management, type of funded care.
   */
  public type: fhir.CodeableConcept[];
  /**
   * A list of conditions/problems/diagnoses that this episode of care is intended to be providing care for.
   */
  public condition: fhir.Reference[];
  /**
   * The patient that this EpisodeOfCare applies to.
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
   * The practitioner that is the care manager/care co-ordinator for this patient.
   */
  public careManager?: fhir.Reference|undefined;
  /**
   * The list of practitioners that may be facilitating this episode of care for specific purposes.
   */
  public careTeam: fhir.EpisodeOfCareCareTeam[];
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
    if (source['condition']) { this.condition = source.condition.map((x) => new fhir.Reference(x)); }
    else { this.condition = []; }
    if (source['patient']) { this.patient = new fhir.Reference(source.patient); }
    else { this.patient = null; }
    if (source['managingOrganization']) { this.managingOrganization = new fhir.Reference(source.managingOrganization); }
    if (source['period']) { this.period = new fhir.Period(source.period); }
    if (source['referralRequest']) { this.referralRequest = source.referralRequest.map((x) => new fhir.Reference(x)); }
    else { this.referralRequest = []; }
    if (source['careManager']) { this.careManager = new fhir.Reference(source.careManager); }
    if (source['careTeam']) { this.careTeam = source.careTeam.map((x) => new fhir.EpisodeOfCareCareTeam(x)); }
    else { this.careTeam = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'EpisodeOfCare' }
    iss.push(...this.vOA('identifier',exp));
    iss.push(...this.vRSV('status',exp,'EpisodeOfCareStatus',EpisodeOfCareStatusVsValidation,'r'));
    iss.push(...this.vOA('statusHistory',exp));
    iss.push(...this.vOA('type',exp));
    iss.push(...this.vOA('condition',exp));
    iss.push(...this.vRS('patient',exp));
    iss.push(...this.vOS('managingOrganization',exp));
    iss.push(...this.vOS('period',exp));
    iss.push(...this.vOA('referralRequest',exp));
    iss.push(...this.vOS('careManager',exp));
    iss.push(...this.vOA('careTeam',exp));
    return iss;
  }
}
