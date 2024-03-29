// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR Resource: DeviceRequest

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
import { RequestPriorityCodes,  RequestPriorityCodeType } from '../fhirValueSets/RequestPriorityCodes.js';
// @ts-ignore
import { RequestPriorityVsValidation } from '../fhirValueSets/RequestPriorityVsValidation.js';
// @ts-ignore
import { ParticipantRoleCodes,  ParticipantRoleCodeType } from '../fhirValueSets/ParticipantRoleCodes.js';
// @ts-ignore
import { ParticipantRoleVsValidation } from '../fhirValueSets/ParticipantRoleVsValidation.js';
// @ts-ignore
import { ConditionCodes,  ConditionCodeType } from '../fhirValueSets/ConditionCodes.js';
// @ts-ignore
import { ConditionVsValidation } from '../fhirValueSets/ConditionVsValidation.js';
/**
 * Valid arguments for the DeviceRequestRequester type.
 */
export interface DeviceRequestRequesterArgs extends fhir.BackboneElementArgs {
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
export class DeviceRequestRequester extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'DeviceRequestRequester';
  /**
   * The device, practitioner, etc. who initiated the request.
   */
  public agent: fhir.Reference|null;
  /**
   * The organization the device or practitioner was acting on behalf of.
   */
  public onBehalfOf?: fhir.Reference|undefined;
  /**
   * Default constructor for DeviceRequestRequester - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<DeviceRequestRequesterArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
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
    if (exp === '') { exp = 'DeviceRequest.requester' }
    iss.push(...this.vRS('agent',exp));
    iss.push(...this.vOS('onBehalfOf',exp));
    return iss;
  }
}
/**
 * Valid arguments for the DeviceRequest type.
 */
export interface DeviceRequestArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "DeviceRequest"|undefined;
  /**
   * Identifiers assigned to this order by the orderer or by the receiver.
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * Protocol or definition followed by this request. For example: The proposed act must be performed if the indicated conditions occur, e.g.., shortness of breath, SpO2 less than x%.
   */
  definition?: fhir.ReferenceArgs[]|undefined;
  /**
   * Plan/proposal/order fulfilled by this request.
   */
  basedOn?: fhir.ReferenceArgs[]|undefined;
  /**
   * The request takes the place of the referenced completed or terminated request(s).
   */
  priorRequest?: fhir.ReferenceArgs[]|undefined;
  /**
   * Composite request this is part of.
   */
  groupIdentifier?: fhir.IdentifierArgs|undefined;
  /**
   * This element is labeled as a modifier because the status contains the codes cancelled and entered-in-error that mark the request as not currently valid.
   */
  status?: fhir.FhirCode<RequestStatusCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: DeviceRequest.status
   */
  _status?:fhir.FhirElementArgs;
  /**
   * Whether the request is a proposal, plan, an original order or a reflex order.
   */
  intent: fhir.CodeableConceptArgs|null;
  /**
   * Indicates how quickly the {{title}} should be addressed with respect to other requests.
   */
  priority?: fhir.FhirCode|string|undefined;
  /**
   * Extended properties for primitive element: DeviceRequest.priority
   */
  _priority?:fhir.FhirElementArgs;
  /**
   * The details of the device to be used.
   */
  code?: fhir.Reference|fhir.CodeableConcept|undefined;
  /**
   * The details of the device to be used.
   */
  codeReference?: fhir.ReferenceArgs|undefined;
  /**
   * The details of the device to be used.
   */
  codeCodeableConcept?: fhir.CodeableConceptArgs|undefined;
  /**
   * The patient who will use the device.
   */
  subject: fhir.ReferenceArgs|null;
  /**
   * An encounter that provides additional context in which this request is made.
   */
  context?: fhir.ReferenceArgs|undefined;
  /**
   * The timing schedule for the use of the device. The Schedule data type allows many different expressions, for example. "Every 8 hours"; "Three times a day"; "1/2 an hour before breakfast for 10 days from 23-Dec 2011:"; "15 Oct 2013, 17 Oct 2013 and 1 Nov 2013".
   */
  occurrence?: fhir.FhirDateTime|fhir.Period|fhir.Timing|undefined;
  /**
   * The timing schedule for the use of the device. The Schedule data type allows many different expressions, for example. "Every 8 hours"; "Three times a day"; "1/2 an hour before breakfast for 10 days from 23-Dec 2011:"; "15 Oct 2013, 17 Oct 2013 and 1 Nov 2013".
   */
  occurrenceDateTime?: fhir.FhirDateTime|string|undefined;
  /**
   * The timing schedule for the use of the device. The Schedule data type allows many different expressions, for example. "Every 8 hours"; "Three times a day"; "1/2 an hour before breakfast for 10 days from 23-Dec 2011:"; "15 Oct 2013, 17 Oct 2013 and 1 Nov 2013".
   */
  occurrencePeriod?: fhir.PeriodArgs|undefined;
  /**
   * The timing schedule for the use of the device. The Schedule data type allows many different expressions, for example. "Every 8 hours"; "Three times a day"; "1/2 an hour before breakfast for 10 days from 23-Dec 2011:"; "15 Oct 2013, 17 Oct 2013 and 1 Nov 2013".
   */
  occurrenceTiming?: fhir.TimingArgs|undefined;
  /**
   * When the request transitioned to being actionable.
   */
  authoredOn?: fhir.FhirDateTime|string|undefined;
  /**
   * Extended properties for primitive element: DeviceRequest.authoredOn
   */
  _authoredOn?:fhir.FhirElementArgs;
  /**
   * The individual who initiated the request and has responsibility for its activation.
   */
  requester?: fhir.DeviceRequestRequesterArgs|undefined;
  /**
   * Desired type of performer for doing the diagnostic testing.
   */
  performerType?: fhir.CodeableConceptArgs|undefined;
  /**
   * The desired perfomer for doing the diagnostic testing.
   */
  performer?: fhir.ReferenceArgs|undefined;
  /**
   * Reason or justification for the use of this device.
   */
  reasonCode?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * Reason or justification for the use of this device.
   */
  reasonReference?: fhir.ReferenceArgs[]|undefined;
  /**
   * Additional clinical information about the patient that may influence the request fulfilment.  For example, this may includes body where on the subject's the device will be used ( i.e. the target site).
   */
  supportingInfo?: fhir.ReferenceArgs[]|undefined;
  /**
   * Details about this request that were not represented at all or sufficiently in one of the attributes provided in a class. These may include for example a comment, an instruction, or a note associated with the statement.
   */
  note?: fhir.AnnotationArgs[]|undefined;
  /**
   * This may not include provenances for all versions of the request – only those deemed “relevant” or important.
   * This SHALL NOT include the Provenance associated with this current version of the resource.  (If that provenance is deemed to be a “relevant” change, it will need to be added as part of a later update.  Until then, it can be queried directly as the Provenance that points to this version using _revinclude
   * All Provenances should have some historical version of this Request as their subject.
   */
  relevantHistory?: fhir.ReferenceArgs[]|undefined;
}

/**
 * Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker.
 */
export class DeviceRequest extends fhir.DomainResource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'DeviceRequest';
  /**
   * Resource Type Name
   */
  public override resourceType: "DeviceRequest";
  /**
   * Identifiers assigned to this order by the orderer or by the receiver.
   */
  public identifier: fhir.Identifier[];
  /**
   * Protocol or definition followed by this request. For example: The proposed act must be performed if the indicated conditions occur, e.g.., shortness of breath, SpO2 less than x%.
   */
  public definition: fhir.Reference[];
  /**
   * Plan/proposal/order fulfilled by this request.
   */
  public basedOn: fhir.Reference[];
  /**
   * The request takes the place of the referenced completed or terminated request(s).
   */
  public priorRequest: fhir.Reference[];
  /**
   * Composite request this is part of.
   */
  public groupIdentifier?: fhir.Identifier|undefined;
  /**
   * This element is labeled as a modifier because the status contains the codes cancelled and entered-in-error that mark the request as not currently valid.
   */
  public status?: fhir.FhirCode<RequestStatusCodeType>|undefined;
  /**
   * Whether the request is a proposal, plan, an original order or a reflex order.
   */
  public intent: fhir.CodeableConcept|null;
  /**
   * Indicates how quickly the {{title}} should be addressed with respect to other requests.
   */
  public priority?: fhir.FhirCode|undefined;
  /**
   * The details of the device to be used.
   */
  public code: (fhir.Reference|fhir.CodeableConcept)|null;
  /**
   * Internal flag to properly serialize choice-type element DeviceRequest.code[x]
   */
  protected static readonly _fts_codeIsChoice:true = true;
  /**
   * The patient who will use the device.
   */
  public subject: fhir.Reference|null;
  /**
   * An encounter that provides additional context in which this request is made.
   */
  public context?: fhir.Reference|undefined;
  /**
   * The timing schedule for the use of the device. The Schedule data type allows many different expressions, for example. "Every 8 hours"; "Three times a day"; "1/2 an hour before breakfast for 10 days from 23-Dec 2011:"; "15 Oct 2013, 17 Oct 2013 and 1 Nov 2013".
   */
  public occurrence?: (fhir.FhirDateTime|fhir.Period|fhir.Timing)|undefined;
  /**
   * Internal flag to properly serialize choice-type element DeviceRequest.occurrence[x]
   */
  protected static readonly _fts_occurrenceIsChoice:true = true;
  /**
   * When the request transitioned to being actionable.
   */
  public authoredOn?: fhir.FhirDateTime|undefined;
  /**
   * The individual who initiated the request and has responsibility for its activation.
   */
  public requester?: fhir.DeviceRequestRequester|undefined;
  /**
   * Desired type of performer for doing the diagnostic testing.
   */
  public performerType?: fhir.CodeableConcept|undefined;
  /**
   * The desired perfomer for doing the diagnostic testing.
   */
  public performer?: fhir.Reference|undefined;
  /**
   * Reason or justification for the use of this device.
   */
  public reasonCode: fhir.CodeableConcept[];
  /**
   * Reason or justification for the use of this device.
   */
  public reasonReference: fhir.Reference[];
  /**
   * Additional clinical information about the patient that may influence the request fulfilment.  For example, this may includes body where on the subject's the device will be used ( i.e. the target site).
   */
  public supportingInfo: fhir.Reference[];
  /**
   * Details about this request that were not represented at all or sufficiently in one of the attributes provided in a class. These may include for example a comment, an instruction, or a note associated with the statement.
   */
  public note: fhir.Annotation[];
  /**
   * This may not include provenances for all versions of the request – only those deemed “relevant” or important.
   * This SHALL NOT include the Provenance associated with this current version of the resource.  (If that provenance is deemed to be a “relevant” change, it will need to be added as part of a later update.  Until then, it can be queried directly as the Provenance that points to this version using _revinclude
   * All Provenances should have some historical version of this Request as their subject.
   */
  public relevantHistory: fhir.Reference[];
  /**
   * Default constructor for DeviceRequest - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<DeviceRequestArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'DeviceRequest';
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x, options)); }
    else { this.identifier = []; }
    if (source['definition']) { this.definition = source.definition.map((x) => new fhir.Reference(x, options)); }
    else { this.definition = []; }
    if (source['basedOn']) { this.basedOn = source.basedOn.map((x) => new fhir.Reference(x, options)); }
    else { this.basedOn = []; }
    if (source['priorRequest']) { this.priorRequest = source.priorRequest.map((x) => new fhir.Reference(x, options)); }
    else { this.priorRequest = []; }
    if (source['groupIdentifier']) { this.groupIdentifier = new fhir.Identifier(source.groupIdentifier, options); }
    if (source['status'] !== undefined) { this.status = new fhir.FhirCode<RequestStatusCodeType>({value: source.status}, options); }
    if (source['_status']) {
      if (this.status) { this.status.addExtendedProperties(source._status!); }
      else { this.status = new fhir.FhirCode<RequestStatusCodeType>(source._status as Partial<fhir.FhirCode>, options); }
    }
    if (source['intent']) { this.intent = new fhir.CodeableConcept(source.intent, options); }
    else { this.intent = null; }
    if (source['priority'] !== undefined) { this.priority = new fhir.FhirCode({value: source.priority}, options); }
    if (source['_priority']) {
      if (this.priority) { this.priority.addExtendedProperties(source._priority!); }
      else { this.priority = new fhir.FhirCode(source._priority as Partial<fhir.FhirCodeArgs>, options); }
    }
    if (source['code']) { this.code = source.code; }
    else if (source['codeReference']) { this.code = new fhir.Reference(source.codeReference, options); }
    else if (source['codeCodeableConcept']) { this.code = new fhir.CodeableConcept(source.codeCodeableConcept, options); }
    else { this.code = null; }
    if (source['subject']) { this.subject = new fhir.Reference(source.subject, options); }
    else { this.subject = null; }
    if (source['context']) { this.context = new fhir.Reference(source.context, options); }
    if (source['occurrence']) { this.occurrence = source.occurrence; }
    else if (source['occurrenceDateTime'] !== undefined) { this.occurrence = new fhir.FhirDateTime({value: source.occurrenceDateTime}, options); }
    else if (source['occurrencePeriod']) { this.occurrence = new fhir.Period(source.occurrencePeriod, options); }
    else if (source['occurrenceTiming']) { this.occurrence = new fhir.Timing(source.occurrenceTiming, options); }
    if (source['authoredOn'] !== undefined) { this.authoredOn = new fhir.FhirDateTime({value: source.authoredOn}, options); }
    if (source['_authoredOn']) {
      if (this.authoredOn) { this.authoredOn.addExtendedProperties(source._authoredOn!); }
      else { this.authoredOn = new fhir.FhirDateTime(source._authoredOn as Partial<fhir.FhirDateTimeArgs>, options); }
    }
    if (source['requester']) { this.requester = new fhir.DeviceRequestRequester(source.requester, options); }
    if (source['performerType']) { this.performerType = new fhir.CodeableConcept(source.performerType, options); }
    if (source['performer']) { this.performer = new fhir.Reference(source.performer, options); }
    if (source['reasonCode']) { this.reasonCode = source.reasonCode.map((x) => new fhir.CodeableConcept(x, options)); }
    else { this.reasonCode = []; }
    if (source['reasonReference']) { this.reasonReference = source.reasonReference.map((x) => new fhir.Reference(x, options)); }
    else { this.reasonReference = []; }
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
    if (exp === '') { exp = 'DeviceRequest' }
    iss.push(...this.vOA('identifier',exp));
    iss.push(...this.vOA('definition',exp));
    iss.push(...this.vOA('basedOn',exp));
    iss.push(...this.vOA('priorRequest',exp));
    iss.push(...this.vOS('groupIdentifier',exp));
    iss.push(...this.vOSV('status',exp,'RequestStatus',RequestStatusVsValidation,'r'));
    iss.push(...this.vRSV('intent',exp,'RequestIntent',RequestIntentVsValidation,'r'));
    iss.push(...this.vOSV('priority',exp,'RequestPriority',RequestPriorityVsValidation,'r'));
    iss.push(...this.vRS('code',exp));
    iss.push(...this.vRS('subject',exp));
    iss.push(...this.vOS('context',exp));
    iss.push(...this.vOS('occurrence',exp));
    iss.push(...this.vOS('authoredOn',exp));
    iss.push(...this.vOS('requester',exp));
    iss.push(...this.vOS('performerType',exp));
    iss.push(...this.vOS('performer',exp));
    iss.push(...this.vOA('reasonCode',exp));
    iss.push(...this.vOA('reasonReference',exp));
    iss.push(...this.vOA('supportingInfo',exp));
    iss.push(...this.vOA('note',exp));
    iss.push(...this.vOA('relevantHistory',exp));
    return iss;
  }
}
