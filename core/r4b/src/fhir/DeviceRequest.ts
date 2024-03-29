// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
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
import { ConditionCodes,  ConditionCodeType } from '../fhirValueSets/ConditionCodes.js';
// @ts-ignore
import { ConditionVsValidation } from '../fhirValueSets/ConditionVsValidation.js';
/**
 * Valid arguments for the DeviceRequestParameter type.
 */
export interface DeviceRequestParameterArgs extends fhir.BackboneElementArgs {
  /**
   * A code or string that identifies the device detail being asserted.
   */
  code?: fhir.CodeableConceptArgs|undefined;
  /**
   * Range means device should have a value that falls somewhere within the specified range.
   */
  value?: fhir.CodeableConcept|fhir.Quantity|fhir.Range|fhir.FhirBoolean|undefined;
  /**
   * Range means device should have a value that falls somewhere within the specified range.
   */
  valueCodeableConcept?: fhir.CodeableConceptArgs|undefined;
  /**
   * Range means device should have a value that falls somewhere within the specified range.
   */
  valueQuantity?: fhir.QuantityArgs|undefined;
  /**
   * Range means device should have a value that falls somewhere within the specified range.
   */
  valueRange?: fhir.RangeArgs|undefined;
  /**
   * Range means device should have a value that falls somewhere within the specified range.
   */
  valueBoolean?: fhir.FhirBoolean|boolean|undefined;
}

/**
 * Specific parameters for the ordered item.  For example, the prism value for lenses.
 */
export class DeviceRequestParameter extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'DeviceRequestParameter';
  /**
   * A code or string that identifies the device detail being asserted.
   */
  public code?: fhir.CodeableConcept|undefined;
  /**
   * Range means device should have a value that falls somewhere within the specified range.
   */
  public value?: (fhir.CodeableConcept|fhir.Quantity|fhir.Range|fhir.FhirBoolean)|undefined;
  /**
   * Internal flag to properly serialize choice-type element DeviceRequest.parameter.value[x]
   */
  protected static readonly _fts_valueIsChoice:true = true;
  /**
   * Default constructor for DeviceRequestParameter - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<DeviceRequestParameterArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['code']) { this.code = new fhir.CodeableConcept(source.code, options); }
    if (source['value']) { this.value = source.value; }
    else if (source['valueCodeableConcept']) { this.value = new fhir.CodeableConcept(source.valueCodeableConcept, options); }
    else if (source['valueQuantity']) { this.value = new fhir.Quantity(source.valueQuantity, options); }
    else if (source['valueRange']) { this.value = new fhir.Range(source.valueRange, options); }
    else if (source['valueBoolean'] !== undefined) { this.value = new fhir.FhirBoolean({value: source.valueBoolean}, options); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'DeviceRequest.parameter' }
    iss.push(...this.vOS('code',exp));
    iss.push(...this.vOS('value',exp));
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
   * Note: This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
   */
  instantiatesCanonical?: fhir.FhirCanonical[]|(string|null)[]|undefined;
  /**
   * Extended properties for primitive element: DeviceRequest.instantiatesCanonical
   */
  _instantiatesCanonical?:(fhir.FhirElementArgs|null)[];
  /**
   * This might be an HTML page, PDF, etc. or could just be a non-resolvable URI identifier.
   */
  instantiatesUri?: fhir.FhirUri[]|(string|null)[]|undefined;
  /**
   * Extended properties for primitive element: DeviceRequest.instantiatesUri
   */
  _instantiatesUri?:(fhir.FhirElementArgs|null)[];
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
  intent: fhir.FhirCode<RequestIntentCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: DeviceRequest.intent
   */
  _intent?:fhir.FhirElementArgs;
  /**
   * Indicates how quickly the {{title}} should be addressed with respect to other requests.
   */
  priority?: fhir.FhirCode<RequestPriorityCodeType>|string|undefined;
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
   * Specific parameters for the ordered item.  For example, the prism value for lenses.
   */
  parameter?: fhir.DeviceRequestParameterArgs[]|undefined;
  /**
   * The patient who will use the device.
   */
  subject: fhir.ReferenceArgs|null;
  /**
   * An encounter that provides additional context in which this request is made.
   */
  encounter?: fhir.ReferenceArgs|undefined;
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
  requester?: fhir.ReferenceArgs|undefined;
  /**
   * Desired type of performer for doing the diagnostic testing.
   */
  performerType?: fhir.CodeableConceptArgs|undefined;
  /**
   * The desired performer for doing the diagnostic testing.
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
   * Insurance plans, coverage extensions, pre-authorizations and/or pre-determinations that may be required for delivering the requested service.
   */
  insurance?: fhir.ReferenceArgs[]|undefined;
  /**
   * Additional clinical information about the patient that may influence the request fulfilment.  For example, this may include where on the subject's body the device will be used (i.e. the target site).
   */
  supportingInfo?: fhir.ReferenceArgs[]|undefined;
  /**
   * Details about this request that were not represented at all or sufficiently in one of the attributes provided in a class. These may include for example a comment, an instruction, or a note associated with the statement.
   */
  note?: fhir.AnnotationArgs[]|undefined;
  /**
   * This might not include provenances for all versions of the request - only those deemed "relevant" or important.
   * This SHALL NOT include the Provenance associated with this current version of the resource.  (If that provenance is deemed to be a "relevant" change, it will need to be added as part of a later update.  Until then, it can be queried directly as the Provenance that points to this version using _revinclude
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
   * Note: This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
   */
  public instantiatesCanonical: fhir.FhirCanonical[];
  /**
   * This might be an HTML page, PDF, etc. or could just be a non-resolvable URI identifier.
   */
  public instantiatesUri: fhir.FhirUri[];
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
  public intent: fhir.FhirCode<RequestIntentCodeType>|null;
  /**
   * Indicates how quickly the {{title}} should be addressed with respect to other requests.
   */
  public priority?: fhir.FhirCode<RequestPriorityCodeType>|undefined;
  /**
   * The details of the device to be used.
   */
  public code: (fhir.Reference|fhir.CodeableConcept)|null;
  /**
   * Internal flag to properly serialize choice-type element DeviceRequest.code[x]
   */
  protected static readonly _fts_codeIsChoice:true = true;
  /**
   * Specific parameters for the ordered item.  For example, the prism value for lenses.
   */
  public parameter: fhir.DeviceRequestParameter[];
  /**
   * The patient who will use the device.
   */
  public subject: fhir.Reference|null;
  /**
   * An encounter that provides additional context in which this request is made.
   */
  public encounter?: fhir.Reference|undefined;
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
  public requester?: fhir.Reference|undefined;
  /**
   * Desired type of performer for doing the diagnostic testing.
   */
  public performerType?: fhir.CodeableConcept|undefined;
  /**
   * The desired performer for doing the diagnostic testing.
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
   * Insurance plans, coverage extensions, pre-authorizations and/or pre-determinations that may be required for delivering the requested service.
   */
  public insurance: fhir.Reference[];
  /**
   * Additional clinical information about the patient that may influence the request fulfilment.  For example, this may include where on the subject's body the device will be used (i.e. the target site).
   */
  public supportingInfo: fhir.Reference[];
  /**
   * Details about this request that were not represented at all or sufficiently in one of the attributes provided in a class. These may include for example a comment, an instruction, or a note associated with the statement.
   */
  public note: fhir.Annotation[];
  /**
   * This might not include provenances for all versions of the request - only those deemed "relevant" or important.
   * This SHALL NOT include the Provenance associated with this current version of the resource.  (If that provenance is deemed to be a "relevant" change, it will need to be added as part of a later update.  Until then, it can be queried directly as the Provenance that points to this version using _revinclude
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
    if (source['instantiatesCanonical'] !== undefined) { this.instantiatesCanonical = source.instantiatesCanonical.map((x) => new fhir.FhirCanonical({value: x}, options)); }
    else { this.instantiatesCanonical = []; }
    if (source['_instantiatesCanonical']) {
      source._instantiatesCanonical.forEach((x,i) => {
        if (this.instantiatesCanonical.length >= i) { if (x) { this.instantiatesCanonical[i].addExtendedProperties(x); } }
        else { if (x) { this.instantiatesCanonical.push(new fhir.FhirCanonical(x as Partial<fhir.FhirCanonicalArgs>)); } }
      });
    }
    if (source['instantiatesUri'] !== undefined) { this.instantiatesUri = source.instantiatesUri.map((x) => new fhir.FhirUri({value: x}, options)); }
    else { this.instantiatesUri = []; }
    if (source['_instantiatesUri']) {
      source._instantiatesUri.forEach((x,i) => {
        if (this.instantiatesUri.length >= i) { if (x) { this.instantiatesUri[i].addExtendedProperties(x); } }
        else { if (x) { this.instantiatesUri.push(new fhir.FhirUri(x as Partial<fhir.FhirUriArgs>)); } }
      });
    }
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
    if (source['intent'] !== undefined) { this.intent = new fhir.FhirCode<RequestIntentCodeType>({value: source.intent}, options); }
    else { this.intent = null; }
    if (source['_intent']) {
      if (this.intent) { this.intent.addExtendedProperties(source._intent!); }
      else { this.intent = new fhir.FhirCode<RequestIntentCodeType>(source._intent as Partial<fhir.FhirCode>, options); }
    }
    if (source['priority'] !== undefined) { this.priority = new fhir.FhirCode<RequestPriorityCodeType>({value: source.priority}, options); }
    if (source['_priority']) {
      if (this.priority) { this.priority.addExtendedProperties(source._priority!); }
      else { this.priority = new fhir.FhirCode<RequestPriorityCodeType>(source._priority as Partial<fhir.FhirCode>, options); }
    }
    if (source['code']) { this.code = source.code; }
    else if (source['codeReference']) { this.code = new fhir.Reference(source.codeReference, options); }
    else if (source['codeCodeableConcept']) { this.code = new fhir.CodeableConcept(source.codeCodeableConcept, options); }
    else { this.code = null; }
    if (source['parameter']) { this.parameter = source.parameter.map((x) => new fhir.DeviceRequestParameter(x, options)); }
    else { this.parameter = []; }
    if (source['subject']) { this.subject = new fhir.Reference(source.subject, options); }
    else { this.subject = null; }
    if (source['encounter']) { this.encounter = new fhir.Reference(source.encounter, options); }
    if (source['occurrence']) { this.occurrence = source.occurrence; }
    else if (source['occurrenceDateTime'] !== undefined) { this.occurrence = new fhir.FhirDateTime({value: source.occurrenceDateTime}, options); }
    else if (source['occurrencePeriod']) { this.occurrence = new fhir.Period(source.occurrencePeriod, options); }
    else if (source['occurrenceTiming']) { this.occurrence = new fhir.Timing(source.occurrenceTiming, options); }
    if (source['authoredOn'] !== undefined) { this.authoredOn = new fhir.FhirDateTime({value: source.authoredOn}, options); }
    if (source['_authoredOn']) {
      if (this.authoredOn) { this.authoredOn.addExtendedProperties(source._authoredOn!); }
      else { this.authoredOn = new fhir.FhirDateTime(source._authoredOn as Partial<fhir.FhirDateTimeArgs>, options); }
    }
    if (source['requester']) { this.requester = new fhir.Reference(source.requester, options); }
    if (source['performerType']) { this.performerType = new fhir.CodeableConcept(source.performerType, options); }
    if (source['performer']) { this.performer = new fhir.Reference(source.performer, options); }
    if (source['reasonCode']) { this.reasonCode = source.reasonCode.map((x) => new fhir.CodeableConcept(x, options)); }
    else { this.reasonCode = []; }
    if (source['reasonReference']) { this.reasonReference = source.reasonReference.map((x) => new fhir.Reference(x, options)); }
    else { this.reasonReference = []; }
    if (source['insurance']) { this.insurance = source.insurance.map((x) => new fhir.Reference(x, options)); }
    else { this.insurance = []; }
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
    iss.push(...this.vOA('instantiatesCanonical',exp));
    iss.push(...this.vOA('instantiatesUri',exp));
    iss.push(...this.vOA('basedOn',exp));
    iss.push(...this.vOA('priorRequest',exp));
    iss.push(...this.vOS('groupIdentifier',exp));
    iss.push(...this.vOSV('status',exp,'RequestStatus',RequestStatusVsValidation,'r'));
    iss.push(...this.vRSV('intent',exp,'RequestIntent',RequestIntentVsValidation,'r'));
    iss.push(...this.vOSV('priority',exp,'RequestPriority',RequestPriorityVsValidation,'r'));
    iss.push(...this.vRS('code',exp));
    iss.push(...this.vOA('parameter',exp));
    iss.push(...this.vRS('subject',exp));
    iss.push(...this.vOS('encounter',exp));
    iss.push(...this.vOS('occurrence',exp));
    iss.push(...this.vOS('authoredOn',exp));
    iss.push(...this.vOS('requester',exp));
    iss.push(...this.vOS('performerType',exp));
    iss.push(...this.vOS('performer',exp));
    iss.push(...this.vOA('reasonCode',exp));
    iss.push(...this.vOA('reasonReference',exp));
    iss.push(...this.vOA('insurance',exp));
    iss.push(...this.vOA('supportingInfo',exp));
    iss.push(...this.vOA('note',exp));
    iss.push(...this.vOA('relevantHistory',exp));
    return iss;
  }
}
