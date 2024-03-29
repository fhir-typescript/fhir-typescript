// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR Resource: ReferralRequest

import * as fhir from '../fhir.js';

// @ts-ignore
import { RequestStatusCodes,  RequestStatusCodeType } from '../fhirValueSets/RequestStatusCodes.js';
// @ts-ignore
import { RequestStatusVsValidation } from '../fhirValueSets/RequestStatusVsValidation.js';
// @ts-ignore
import { RequestIntentCodes,  RequestIntentCodeType } from '../fhirValueSets/RequestIntentCodes.js';
// @ts-ignore
import { RequestIntentVsValidation } from '../fhirValueSets/RequestIntentVsValidation.js';
// @ts-ignore
import { ReferralTypeCodes,  ReferralTypeCodeType } from '../fhirValueSets/ReferralTypeCodes.js';
// @ts-ignore
import { ReferralTypeVsValidation } from '../fhirValueSets/ReferralTypeVsValidation.js';
// @ts-ignore
import { RequestPriorityCodes,  RequestPriorityCodeType } from '../fhirValueSets/RequestPriorityCodes.js';
// @ts-ignore
import { RequestPriorityVsValidation } from '../fhirValueSets/RequestPriorityVsValidation.js';
// @ts-ignore
import { C80PracticeCodes,  C80PracticeCodeType } from '../fhirValueSets/C80PracticeCodes.js';
// @ts-ignore
import { C80PracticeVsValidation } from '../fhirValueSets/C80PracticeVsValidation.js';
// @ts-ignore
import { PractitionerSpecialtyCodes,  PractitionerSpecialtyCodeType } from '../fhirValueSets/PractitionerSpecialtyCodes.js';
// @ts-ignore
import { PractitionerSpecialtyVsValidation } from '../fhirValueSets/PractitionerSpecialtyVsValidation.js';
// @ts-ignore
import { ClinicalFindingsCodes,  ClinicalFindingsCodeType } from '../fhirValueSets/ClinicalFindingsCodes.js';
// @ts-ignore
import { ClinicalFindingsVsValidation } from '../fhirValueSets/ClinicalFindingsVsValidation.js';
/**
 * Valid arguments for the ReferralRequestRequester type.
 */
export interface ReferralRequestRequesterArgs extends fhir.BackboneElementArgs {
  /**
   * The device, practitioner, etc. who initiated the request.
   */
  agent: fhir.ReferenceArgs|null;
  /**
   * The organization the device or practitioner was acting on behalf of.
   */
  onBehalfOf?: fhir.ReferenceArgs|undefined;
}

/**
 * The individual who initiated the request and has responsibility for its activation.
 */
export class ReferralRequestRequester extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'ReferralRequestRequester';
  /**
   * The device, practitioner, etc. who initiated the request.
   */
  public agent: fhir.Reference|null;
  /**
   * The organization the device or practitioner was acting on behalf of.
   */
  public onBehalfOf?: fhir.Reference|undefined;
  /**
   * Default constructor for ReferralRequestRequester - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<ReferralRequestRequesterArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['agent']) { this.agent = new fhir.Reference(source.agent, options); }
    else { this.agent = null; }
    if (source['onBehalfOf']) { this.onBehalfOf = new fhir.Reference(source.onBehalfOf, options); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'ReferralRequest.requester' }
    iss.push(...this.vRS('agent',exp));
    iss.push(...this.vOS('onBehalfOf',exp));
    return iss;
  }
}
/**
 * Valid arguments for the ReferralRequest type.
 */
export interface ReferralRequestArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "ReferralRequest"|undefined;
  /**
   * Business identifier that uniquely identifies the referral/care transfer request instance.
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * A protocol, guideline, orderset or other definition that is adhered to in whole or in part by this request.
   */
  definition?: fhir.ReferenceArgs[]|undefined;
  /**
   * Indicates any plans, proposals or orders that this request is intended to satisfy - in whole or in part.
   */
  basedOn?: fhir.ReferenceArgs[]|undefined;
  /**
   * The replacement could be because the initial request was immediately rejected (due to an issue) or because the previous request was completed, but the need for the action described by the request remains ongoing.
   */
  replaces?: fhir.ReferenceArgs[]|undefined;
  /**
   * The business identifier of the logical "grouping" request/order that this referral is a part of.
   */
  groupIdentifier?: fhir.IdentifierArgs|undefined;
  /**
   * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  status: fhir.FhirCode<RequestStatusCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: ReferralRequest.status
   */
  _status?:fhir.FhirElementArgs;
  /**
   * Distinguishes the "level" of authorization/demand implicit in this request.
   */
  intent: fhir.FhirCode<RequestIntentCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: ReferralRequest.intent
   */
  _intent?:fhir.FhirElementArgs;
  /**
   * An indication of the type of referral (or where applicable the type of transfer of care) request.
   */
  type?: fhir.CodeableConceptArgs|undefined;
  /**
   * An indication of the urgency of referral (or where applicable the type of transfer of care) request.
   */
  priority?: fhir.FhirCode|string|undefined;
  /**
   * Extended properties for primitive element: ReferralRequest.priority
   */
  _priority?:fhir.FhirElementArgs;
  /**
   * The service(s) that is/are requested to be provided to the patient.  For example: cardiac pacemaker insertion.
   */
  serviceRequested?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * Referral of family, group or community is to be catered for by profiles.
   */
  subject: fhir.ReferenceArgs|null;
  /**
   * The encounter at which the request for referral or transfer of care is initiated.
   */
  context?: fhir.ReferenceArgs|undefined;
  /**
   * When the occurrenceDateTime is used, then it is indicating that the requested service must happen before the specified date.
   */
  occurrence?: fhir.FhirDateTime|fhir.Period|undefined;
  /**
   * When the occurrenceDateTime is used, then it is indicating that the requested service must happen before the specified date.
   */
  occurrenceDateTime?: fhir.FhirDateTime|string|undefined;
  /**
   * When the occurrenceDateTime is used, then it is indicating that the requested service must happen before the specified date.
   */
  occurrencePeriod?: fhir.PeriodArgs|undefined;
  /**
   * Date/DateTime of creation for draft requests and date of activation for active requests.
   */
  authoredOn?: fhir.FhirDateTime|string|undefined;
  /**
   * Extended properties for primitive element: ReferralRequest.authoredOn
   */
  _authoredOn?:fhir.FhirElementArgs;
  /**
   * The individual who initiated the request and has responsibility for its activation.
   */
  requester?: fhir.ReferralRequestRequesterArgs|undefined;
  /**
   * Indication of the clinical domain or discipline to which the referral or transfer of care request is sent.  For example: Cardiology Gastroenterology Diabetology.
   */
  specialty?: fhir.CodeableConceptArgs|undefined;
  /**
   * There will be a primary receiver. But the request can be received by any number of "copied to" providers or organizations.
   */
  recipient?: fhir.ReferenceArgs[]|undefined;
  /**
   * Description of clinical condition indicating why referral/transfer of care is requested.  For example:  Pathological Anomalies, Disabled (physical or mental),  Behavioral Management.
   */
  reasonCode?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * Indicates another resource whose existence justifies this request.
   */
  reasonReference?: fhir.ReferenceArgs[]|undefined;
  /**
   * The reason element gives a short description of why the referral is being made, the description expands on this to support a more complete clinical summary.
   */
  description?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: ReferralRequest.description
   */
  _description?:fhir.FhirElementArgs;
  /**
   * Any additional (administrative, financial or clinical) information required to support request for referral or transfer of care.  For example: Presenting problems/chief complaints Medical History Family History Alerts Allergy/Intolerance and Adverse Reactions Medications Observations/Assessments (may include cognitive and fundtional assessments) Diagnostic Reports Care Plan.
   */
  supportingInfo?: fhir.ReferenceArgs[]|undefined;
  /**
   * Comments made about the referral request by any of the participants.
   */
  note?: fhir.AnnotationArgs[]|undefined;
  /**
   * This element does not point to the Provenance associated with the *current* version of the resource - as it would be created after this version existed.  The Provenance for the current version can be retrieved with a _revinclude.
   */
  relevantHistory?: fhir.ReferenceArgs[]|undefined;
}

/**
 * Used to record and send details about a request for referral service or transfer of a patient to the care of another provider or provider organization.
 */
export class ReferralRequest extends fhir.DomainResource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'ReferralRequest';
  /**
   * Resource Type Name
   */
  public override resourceType: "ReferralRequest";
  /**
   * Business identifier that uniquely identifies the referral/care transfer request instance.
   */
  public identifier: fhir.Identifier[];
  /**
   * A protocol, guideline, orderset or other definition that is adhered to in whole or in part by this request.
   */
  public definition: fhir.Reference[];
  /**
   * Indicates any plans, proposals or orders that this request is intended to satisfy - in whole or in part.
   */
  public basedOn: fhir.Reference[];
  /**
   * The replacement could be because the initial request was immediately rejected (due to an issue) or because the previous request was completed, but the need for the action described by the request remains ongoing.
   */
  public replaces: fhir.Reference[];
  /**
   * The business identifier of the logical "grouping" request/order that this referral is a part of.
   */
  public groupIdentifier?: fhir.Identifier|undefined;
  /**
   * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  public status: fhir.FhirCode<RequestStatusCodeType>|null;
  /**
   * Distinguishes the "level" of authorization/demand implicit in this request.
   */
  public intent: fhir.FhirCode<RequestIntentCodeType>|null;
  /**
   * An indication of the type of referral (or where applicable the type of transfer of care) request.
   */
  public type?: fhir.CodeableConcept|undefined;
  /**
   * An indication of the urgency of referral (or where applicable the type of transfer of care) request.
   */
  public priority?: fhir.FhirCode|undefined;
  /**
   * The service(s) that is/are requested to be provided to the patient.  For example: cardiac pacemaker insertion.
   */
  public serviceRequested: fhir.CodeableConcept[];
  /**
   * Referral of family, group or community is to be catered for by profiles.
   */
  public subject: fhir.Reference|null;
  /**
   * The encounter at which the request for referral or transfer of care is initiated.
   */
  public context?: fhir.Reference|undefined;
  /**
   * When the occurrenceDateTime is used, then it is indicating that the requested service must happen before the specified date.
   */
  public occurrence?: (fhir.FhirDateTime|fhir.Period)|undefined;
  /**
   * Internal flag to properly serialize choice-type element ReferralRequest.occurrence[x]
   */
  protected static readonly _fts_occurrenceIsChoice:true = true;
  /**
   * Date/DateTime of creation for draft requests and date of activation for active requests.
   */
  public authoredOn?: fhir.FhirDateTime|undefined;
  /**
   * The individual who initiated the request and has responsibility for its activation.
   */
  public requester?: fhir.ReferralRequestRequester|undefined;
  /**
   * Indication of the clinical domain or discipline to which the referral or transfer of care request is sent.  For example: Cardiology Gastroenterology Diabetology.
   */
  public specialty?: fhir.CodeableConcept|undefined;
  /**
   * There will be a primary receiver. But the request can be received by any number of "copied to" providers or organizations.
   */
  public recipient: fhir.Reference[];
  /**
   * Description of clinical condition indicating why referral/transfer of care is requested.  For example:  Pathological Anomalies, Disabled (physical or mental),  Behavioral Management.
   */
  public reasonCode: fhir.CodeableConcept[];
  /**
   * Indicates another resource whose existence justifies this request.
   */
  public reasonReference: fhir.Reference[];
  /**
   * The reason element gives a short description of why the referral is being made, the description expands on this to support a more complete clinical summary.
   */
  public description?: fhir.FhirString|undefined;
  /**
   * Any additional (administrative, financial or clinical) information required to support request for referral or transfer of care.  For example: Presenting problems/chief complaints Medical History Family History Alerts Allergy/Intolerance and Adverse Reactions Medications Observations/Assessments (may include cognitive and fundtional assessments) Diagnostic Reports Care Plan.
   */
  public supportingInfo: fhir.Reference[];
  /**
   * Comments made about the referral request by any of the participants.
   */
  public note: fhir.Annotation[];
  /**
   * This element does not point to the Provenance associated with the *current* version of the resource - as it would be created after this version existed.  The Provenance for the current version can be retrieved with a _revinclude.
   */
  public relevantHistory: fhir.Reference[];
  /**
   * Default constructor for ReferralRequest - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<ReferralRequestArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'ReferralRequest';
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x, options)); }
    else { this.identifier = []; }
    if (source['definition']) { this.definition = source.definition.map((x) => new fhir.Reference(x, options)); }
    else { this.definition = []; }
    if (source['basedOn']) { this.basedOn = source.basedOn.map((x) => new fhir.Reference(x, options)); }
    else { this.basedOn = []; }
    if (source['replaces']) { this.replaces = source.replaces.map((x) => new fhir.Reference(x, options)); }
    else { this.replaces = []; }
    if (source['groupIdentifier']) { this.groupIdentifier = new fhir.Identifier(source.groupIdentifier, options); }
    if (source['status'] !== undefined) { this.status = new fhir.FhirCode<RequestStatusCodeType>({value: source.status}, options); }
    else { this.status = null; }
    if (source['_status']) {
      if (this.status) { this.status.addExtendedProperties(source._status!); }
      else { this.status = new fhir.FhirCode<RequestStatusCodeType>(source._status as Partial<fhir.FhirCode>, options); }
    }
    if (source['intent'] !== undefined) { this.intent = new fhir.FhirCode<RequestIntentCodeType>({value: source.intent}, options); }
    else { this.intent = null; }
    if (source['_intent']) {
      if (this.intent) { this.intent.addExtendedProperties(source._intent!); }
      else { this.intent = new fhir.FhirCode<RequestIntentCodeType>(source._intent as Partial<fhir.FhirCode>, options); }
    }
    if (source['type']) { this.type = new fhir.CodeableConcept(source.type, options); }
    if (source['priority'] !== undefined) { this.priority = new fhir.FhirCode({value: source.priority}, options); }
    if (source['_priority']) {
      if (this.priority) { this.priority.addExtendedProperties(source._priority!); }
      else { this.priority = new fhir.FhirCode(source._priority as Partial<fhir.FhirCodeArgs>, options); }
    }
    if (source['serviceRequested']) { this.serviceRequested = source.serviceRequested.map((x) => new fhir.CodeableConcept(x, options)); }
    else { this.serviceRequested = []; }
    if (source['subject']) { this.subject = new fhir.Reference(source.subject, options); }
    else { this.subject = null; }
    if (source['context']) { this.context = new fhir.Reference(source.context, options); }
    if (source['occurrence']) { this.occurrence = source.occurrence; }
    else if (source['occurrenceDateTime'] !== undefined) { this.occurrence = new fhir.FhirDateTime({value: source.occurrenceDateTime}, options); }
    else if (source['occurrencePeriod']) { this.occurrence = new fhir.Period(source.occurrencePeriod, options); }
    if (source['authoredOn'] !== undefined) { this.authoredOn = new fhir.FhirDateTime({value: source.authoredOn}, options); }
    if (source['_authoredOn']) {
      if (this.authoredOn) { this.authoredOn.addExtendedProperties(source._authoredOn!); }
      else { this.authoredOn = new fhir.FhirDateTime(source._authoredOn as Partial<fhir.FhirDateTimeArgs>, options); }
    }
    if (source['requester']) { this.requester = new fhir.ReferralRequestRequester(source.requester, options); }
    if (source['specialty']) { this.specialty = new fhir.CodeableConcept(source.specialty, options); }
    if (source['recipient']) { this.recipient = source.recipient.map((x) => new fhir.Reference(x, options)); }
    else { this.recipient = []; }
    if (source['reasonCode']) { this.reasonCode = source.reasonCode.map((x) => new fhir.CodeableConcept(x, options)); }
    else { this.reasonCode = []; }
    if (source['reasonReference']) { this.reasonReference = source.reasonReference.map((x) => new fhir.Reference(x, options)); }
    else { this.reasonReference = []; }
    if (source['description'] !== undefined) { this.description = new fhir.FhirString({value: source.description}, options); }
    if (source['_description']) {
      if (this.description) { this.description.addExtendedProperties(source._description!); }
      else { this.description = new fhir.FhirString(source._description as Partial<fhir.FhirStringArgs>, options); }
    }
    if (source['supportingInfo']) { this.supportingInfo = source.supportingInfo.map((x) => new fhir.Reference(x, options)); }
    else { this.supportingInfo = []; }
    if (source['note']) { this.note = source.note.map((x) => new fhir.Annotation(x, options)); }
    else { this.note = []; }
    if (source['relevantHistory']) { this.relevantHistory = source.relevantHistory.map((x) => new fhir.Reference(x, options)); }
    else { this.relevantHistory = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'ReferralRequest' }
    iss.push(...this.vOA('identifier',exp));
    iss.push(...this.vOA('definition',exp));
    iss.push(...this.vOA('basedOn',exp));
    iss.push(...this.vOA('replaces',exp));
    iss.push(...this.vOS('groupIdentifier',exp));
    iss.push(...this.vRSV('status',exp,'RequestStatus',RequestStatusVsValidation,'r'));
    iss.push(...this.vRSV('intent',exp,'RequestIntent',RequestIntentVsValidation,'r'));
    iss.push(...this.vOS('type',exp));
    iss.push(...this.vOSV('priority',exp,'RequestPriority',RequestPriorityVsValidation,'r'));
    iss.push(...this.vOA('serviceRequested',exp));
    iss.push(...this.vRS('subject',exp));
    iss.push(...this.vOS('context',exp));
    iss.push(...this.vOS('occurrence',exp));
    iss.push(...this.vOS('authoredOn',exp));
    iss.push(...this.vOS('requester',exp));
    iss.push(...this.vOS('specialty',exp));
    iss.push(...this.vOA('recipient',exp));
    iss.push(...this.vOA('reasonCode',exp));
    iss.push(...this.vOA('reasonReference',exp));
    iss.push(...this.vOS('description',exp));
    iss.push(...this.vOA('supportingInfo',exp));
    iss.push(...this.vOA('note',exp));
    iss.push(...this.vOA('relevantHistory',exp));
    return iss;
  }
}
