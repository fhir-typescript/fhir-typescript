// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR Resource: DeviceUseRequest

import * as fhir from '../fhir.js';

// @ts-ignore
import { DeviceUseRequestStatusCodes,  DeviceUseRequestStatusCodeType } from '../fhirValueSets/DeviceUseRequestStatusCodes.js';
// @ts-ignore
import { DeviceUseRequestStatusVsValidation } from '../fhirValueSets/DeviceUseRequestStatusVsValidation.js';
// @ts-ignore
import { DeviceUseRequestPriorityCodes,  DeviceUseRequestPriorityCodeType } from '../fhirValueSets/DeviceUseRequestPriorityCodes.js';
// @ts-ignore
import { DeviceUseRequestPriorityVsValidation } from '../fhirValueSets/DeviceUseRequestPriorityVsValidation.js';
/**
 * Valid arguments for the DeviceUseRequest type.
 */
export interface DeviceUseRequestArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "DeviceUseRequest"|undefined;
  /**
   * Knowing where the device is targeted is important for tracking if multiple sites are possible.
   */
  bodySite?: fhir.CodeableConcept|fhir.Reference|undefined;
  /**
   * Knowing where the device is targeted is important for tracking if multiple sites are possible.
   */
  bodySiteCodeableConcept?: fhir.CodeableConceptArgs|undefined;
  /**
   * Knowing where the device is targeted is important for tracking if multiple sites are possible.
   */
  bodySiteReference?: fhir.ReferenceArgs|undefined;
  /**
   * The status of the request.
   */
  status?: fhir.FhirCode<DeviceUseRequestStatusCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: DeviceUseRequest.status
   */
  _status?:fhir.FhirElementArgs;
  /**
   * The details of the device  to be used.
   */
  device: fhir.ReferenceArgs|null;
  /**
   * An encounter that provides additional context in which this request is made.
   */
  encounter?: fhir.ReferenceArgs|undefined;
  /**
   * Identifiers assigned to this order by the orderer or by the receiver.
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * Reason or justification for the use of this device.
   */
  indication?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * Details about this request that were not represented at all or sufficiently in one of the attributes provided in a class. These may include for example a comment, an instruction, or a note associated with the statement.
   */
  notes?: fhir.FhirString[]|(string|null)[]|undefined;
  /**
   * Extended properties for primitive element: DeviceUseRequest.notes
   */
  _notes?:(fhir.FhirElementArgs|null)[];
  /**
   * The proposed act must be performed if the indicated conditions occur, e.g.., shortness of breath, SpO2 less than x%.
   */
  prnReason?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * The time when the request was made.
   */
  orderedOn?: fhir.FhirDateTime|string|undefined;
  /**
   * Extended properties for primitive element: DeviceUseRequest.orderedOn
   */
  _orderedOn?:fhir.FhirElementArgs;
  /**
   * The time at which the request was made/recorded.
   */
  recordedOn?: fhir.FhirDateTime|string|undefined;
  /**
   * Extended properties for primitive element: DeviceUseRequest.recordedOn
   */
  _recordedOn?:fhir.FhirElementArgs;
  /**
   * The patient who will use the device.
   */
  subject: fhir.ReferenceArgs|null;
  /**
   * The timing schedule for the use of the device The Schedule data type allows many different expressions, for example. "Every 8 hours"; "Three times a day"; "1/2 an hour before breakfast for 10 days from 23-Dec 2011:"; "15 Oct 2013, 17 Oct 2013 and 1 Nov 2013".
   */
  timing?: fhir.Timing|fhir.Period|fhir.FhirDateTime|undefined;
  /**
   * The timing schedule for the use of the device The Schedule data type allows many different expressions, for example. "Every 8 hours"; "Three times a day"; "1/2 an hour before breakfast for 10 days from 23-Dec 2011:"; "15 Oct 2013, 17 Oct 2013 and 1 Nov 2013".
   */
  timingTiming?: fhir.TimingArgs|undefined;
  /**
   * The timing schedule for the use of the device The Schedule data type allows many different expressions, for example. "Every 8 hours"; "Three times a day"; "1/2 an hour before breakfast for 10 days from 23-Dec 2011:"; "15 Oct 2013, 17 Oct 2013 and 1 Nov 2013".
   */
  timingPeriod?: fhir.PeriodArgs|undefined;
  /**
   * The timing schedule for the use of the device The Schedule data type allows many different expressions, for example. "Every 8 hours"; "Three times a day"; "1/2 an hour before breakfast for 10 days from 23-Dec 2011:"; "15 Oct 2013, 17 Oct 2013 and 1 Nov 2013".
   */
  timingDateTime?: fhir.FhirDateTime|string|undefined;
  /**
   * Characterizes how quickly the  use of device must be initiated. Includes concepts such as stat, urgent, routine.
   */
  priority?: fhir.FhirCode<DeviceUseRequestPriorityCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: DeviceUseRequest.priority
   */
  _priority?:fhir.FhirElementArgs;
}

/**
 * Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker.
 */
export class DeviceUseRequest extends fhir.DomainResource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'DeviceUseRequest';
  /**
   * Resource Type Name
   */
  public override resourceType: "DeviceUseRequest";
  /**
   * Knowing where the device is targeted is important for tracking if multiple sites are possible.
   */
  public bodySite?: (fhir.CodeableConcept|fhir.Reference)|undefined;
  /**
   * Internal flag to properly serialize choice-type element DeviceUseRequest.bodySite[x]
   */
  protected static readonly _fts_bodySiteIsChoice:true = true;
  /**
   * The status of the request.
   */
  public status?: fhir.FhirCode<DeviceUseRequestStatusCodeType>|undefined;
  /**
   * The details of the device  to be used.
   */
  public device: fhir.Reference|null;
  /**
   * An encounter that provides additional context in which this request is made.
   */
  public encounter?: fhir.Reference|undefined;
  /**
   * Identifiers assigned to this order by the orderer or by the receiver.
   */
  public identifier: fhir.Identifier[];
  /**
   * Reason or justification for the use of this device.
   */
  public indication: fhir.CodeableConcept[];
  /**
   * Details about this request that were not represented at all or sufficiently in one of the attributes provided in a class. These may include for example a comment, an instruction, or a note associated with the statement.
   */
  public notes: fhir.FhirString[];
  /**
   * The proposed act must be performed if the indicated conditions occur, e.g.., shortness of breath, SpO2 less than x%.
   */
  public prnReason: fhir.CodeableConcept[];
  /**
   * The time when the request was made.
   */
  public orderedOn?: fhir.FhirDateTime|undefined;
  /**
   * The time at which the request was made/recorded.
   */
  public recordedOn?: fhir.FhirDateTime|undefined;
  /**
   * The patient who will use the device.
   */
  public subject: fhir.Reference|null;
  /**
   * The timing schedule for the use of the device The Schedule data type allows many different expressions, for example. "Every 8 hours"; "Three times a day"; "1/2 an hour before breakfast for 10 days from 23-Dec 2011:"; "15 Oct 2013, 17 Oct 2013 and 1 Nov 2013".
   */
  public timing?: (fhir.Timing|fhir.Period|fhir.FhirDateTime)|undefined;
  /**
   * Internal flag to properly serialize choice-type element DeviceUseRequest.timing[x]
   */
  protected static readonly _fts_timingIsChoice:true = true;
  /**
   * Characterizes how quickly the  use of device must be initiated. Includes concepts such as stat, urgent, routine.
   */
  public priority?: fhir.FhirCode<DeviceUseRequestPriorityCodeType>|undefined;
  /**
   * Default constructor for DeviceUseRequest - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<DeviceUseRequestArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'DeviceUseRequest';
    if (source['bodySite']) { this.bodySite = source.bodySite; }
    else if (source['bodySiteCodeableConcept']) { this.bodySite = new fhir.CodeableConcept(source.bodySiteCodeableConcept); }
    else if (source['bodySiteReference']) { this.bodySite = new fhir.Reference(source.bodySiteReference); }
    if (source['status']) { this.status = new fhir.FhirCode<DeviceUseRequestStatusCodeType>({value: source.status}); }
    if (source['_status']) {
      if (this.status) { this.status.addExtendedProperties(source._status!); }
      else { this.status = new fhir.FhirCode<DeviceUseRequestStatusCodeType>(source._status as Partial<fhir.FhirCode>); }
    }
    if (source['device']) { this.device = new fhir.Reference(source.device); }
    else { this.device = null; }
    if (source['encounter']) { this.encounter = new fhir.Reference(source.encounter); }
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x)); }
    else { this.identifier = []; }
    if (source['indication']) { this.indication = source.indication.map((x) => new fhir.CodeableConcept(x)); }
    else { this.indication = []; }
    if (source['notes']) { this.notes = source.notes.map((x) => new fhir.FhirString({value: x})); }
    else { this.notes = []; }
    if (source['_notes']) {
      source._notes.forEach((x,i) => {
        if (this.notes.length >= i) { if (x) { this.notes[i].addExtendedProperties(x); } }
        else { if (x) { this.notes.push(new fhir.FhirString(x as Partial<fhir.FhirStringArgs>)); } }
      });
    }
    if (source['prnReason']) { this.prnReason = source.prnReason.map((x) => new fhir.CodeableConcept(x)); }
    else { this.prnReason = []; }
    if (source['orderedOn']) { this.orderedOn = new fhir.FhirDateTime({value: source.orderedOn}); }
    if (source['_orderedOn']) {
      if (this.orderedOn) { this.orderedOn.addExtendedProperties(source._orderedOn!); }
      else { this.orderedOn = new fhir.FhirDateTime(source._orderedOn as Partial<fhir.FhirDateTimeArgs>); }
    }
    if (source['recordedOn']) { this.recordedOn = new fhir.FhirDateTime({value: source.recordedOn}); }
    if (source['_recordedOn']) {
      if (this.recordedOn) { this.recordedOn.addExtendedProperties(source._recordedOn!); }
      else { this.recordedOn = new fhir.FhirDateTime(source._recordedOn as Partial<fhir.FhirDateTimeArgs>); }
    }
    if (source['subject']) { this.subject = new fhir.Reference(source.subject); }
    else { this.subject = null; }
    if (source['timing']) { this.timing = source.timing; }
    else if (source['timingTiming']) { this.timing = new fhir.Timing(source.timingTiming); }
    else if (source['timingPeriod']) { this.timing = new fhir.Period(source.timingPeriod); }
    else if (source['timingDateTime']) { this.timing = new fhir.FhirDateTime({value: source.timingDateTime}); }
    if (source['priority']) { this.priority = new fhir.FhirCode<DeviceUseRequestPriorityCodeType>({value: source.priority}); }
    if (source['_priority']) {
      if (this.priority) { this.priority.addExtendedProperties(source._priority!); }
      else { this.priority = new fhir.FhirCode<DeviceUseRequestPriorityCodeType>(source._priority as Partial<fhir.FhirCode>); }
    }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'DeviceUseRequest' }
    iss.push(...this.vRPS('resourceType',exp));
    iss.push(...this.vOS('bodySite',exp));
    iss.push(...this.vOSV('status',exp,'DeviceUseRequestStatus',DeviceUseRequestStatusVsValidation,'r'));
    iss.push(...this.vRS('device',exp));
    iss.push(...this.vOS('encounter',exp));
    iss.push(...this.vOA('identifier',exp));
    iss.push(...this.vOA('indication',exp));
    iss.push(...this.vOA('notes',exp));
    iss.push(...this.vOA('prnReason',exp));
    iss.push(...this.vOS('orderedOn',exp));
    iss.push(...this.vOS('recordedOn',exp));
    iss.push(...this.vRS('subject',exp));
    iss.push(...this.vOS('timing',exp));
    iss.push(...this.vOSV('priority',exp,'DeviceUseRequestPriority',DeviceUseRequestPriorityVsValidation,'r'));
    return iss;
  }
}
