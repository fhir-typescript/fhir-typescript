// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR Resource: Slot

import * as fhir from '../fhir.js';

// @ts-ignore
import { SlotstatusCodes,  SlotstatusCodeType } from '../fhirValueSets/SlotstatusCodes.js';
// @ts-ignore
import { SlotstatusVsValidation } from '../fhirValueSets/SlotstatusVsValidation.js';
/**
 * Valid arguments for the Slot type.
 */
export interface SlotArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "Slot"|undefined;
  /**
   * External Ids for this item.
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * The type of appointments that can be booked into this slot (ideally this would be an identifiable service - which is at a location, rather than the location itself). If provided then this overrides the value provided on the availability resource.
   */
  type?: fhir.CodeableConceptArgs|undefined;
  /**
   * The schedule resource that this slot defines an interval of status information.
   */
  schedule: fhir.ReferenceArgs|null;
  /**
   * busy | free | busy-unavailable | busy-tentative.
   */
  freeBusyType: fhir.FhirCode<SlotstatusCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: Slot.freeBusyType
   */
  _freeBusyType?:fhir.FhirElementArgs;
  /**
   * Date/Time that the slot is to begin.
   */
  start: fhir.FhirInstant|string|undefined;
  /**
   * Extended properties for primitive element: Slot.start
   */
  _start?:fhir.FhirElementArgs;
  /**
   * Date/Time that the slot is to conclude.
   */
  end: fhir.FhirInstant|string|undefined;
  /**
   * Extended properties for primitive element: Slot.end
   */
  _end?:fhir.FhirElementArgs;
  /**
   * This slot has already been overbooked, appointments are unlikely to be accepted for this time.
   */
  overbooked?: fhir.FhirBoolean|boolean|undefined;
  /**
   * Extended properties for primitive element: Slot.overbooked
   */
  _overbooked?:fhir.FhirElementArgs;
  /**
   * Comments on the slot to describe any extended information. Such as custom constraints on the slot.
   */
  comment?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: Slot.comment
   */
  _comment?:fhir.FhirElementArgs;
}

/**
 * A slot of time on a schedule that may be available for booking appointments.
 */
export class Slot extends fhir.DomainResource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'Slot';
  /**
   * Resource Type Name
   */
  public override resourceType: "Slot";
  /**
   * External Ids for this item.
   */
  public identifier: fhir.Identifier[];
  /**
   * The type of appointments that can be booked into this slot (ideally this would be an identifiable service - which is at a location, rather than the location itself). If provided then this overrides the value provided on the availability resource.
   */
  public type?: fhir.CodeableConcept|undefined;
  /**
   * The schedule resource that this slot defines an interval of status information.
   */
  public schedule: fhir.Reference|null;
  /**
   * busy | free | busy-unavailable | busy-tentative.
   */
  public freeBusyType: fhir.FhirCode<SlotstatusCodeType>|null;
  /**
   * Date/Time that the slot is to begin.
   */
  public start: fhir.FhirInstant|null;
  /**
   * Date/Time that the slot is to conclude.
   */
  public end: fhir.FhirInstant|null;
  /**
   * This slot has already been overbooked, appointments are unlikely to be accepted for this time.
   */
  public overbooked?: fhir.FhirBoolean|undefined;
  /**
   * Comments on the slot to describe any extended information. Such as custom constraints on the slot.
   */
  public comment?: fhir.FhirString|undefined;
  /**
   * Default constructor for Slot - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<SlotArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'Slot';
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x, options)); }
    else { this.identifier = []; }
    if (source['type']) { this.type = new fhir.CodeableConcept(source.type, options); }
    if (source['schedule']) { this.schedule = new fhir.Reference(source.schedule, options); }
    else { this.schedule = null; }
    if (source['freeBusyType'] !== undefined) { this.freeBusyType = new fhir.FhirCode<SlotstatusCodeType>({value: source.freeBusyType}, options); }
    else { this.freeBusyType = null; }
    if (source['_freeBusyType']) {
      if (this.freeBusyType) { this.freeBusyType.addExtendedProperties(source._freeBusyType!); }
      else { this.freeBusyType = new fhir.FhirCode<SlotstatusCodeType>(source._freeBusyType as Partial<fhir.FhirCode>, options); }
    }
    if (source['start'] !== undefined) { this.start = new fhir.FhirInstant({value: source.start}, options); }
    else { this.start = null; }
    if (source['_start']) {
      if (this.start) { this.start.addExtendedProperties(source._start!); }
      else { this.start = new fhir.FhirInstant(source._start as Partial<fhir.FhirInstantArgs>, options); }
    }
    if (source['end'] !== undefined) { this.end = new fhir.FhirInstant({value: source.end}, options); }
    else { this.end = null; }
    if (source['_end']) {
      if (this.end) { this.end.addExtendedProperties(source._end!); }
      else { this.end = new fhir.FhirInstant(source._end as Partial<fhir.FhirInstantArgs>, options); }
    }
    if (source['overbooked'] !== undefined) { this.overbooked = new fhir.FhirBoolean({value: source.overbooked}, options); }
    if (source['_overbooked']) {
      if (this.overbooked) { this.overbooked.addExtendedProperties(source._overbooked!); }
      else { this.overbooked = new fhir.FhirBoolean(source._overbooked as Partial<fhir.FhirBooleanArgs>, options); }
    }
    if (source['comment'] !== undefined) { this.comment = new fhir.FhirString({value: source.comment}, options); }
    if (source['_comment']) {
      if (this.comment) { this.comment.addExtendedProperties(source._comment!); }
      else { this.comment = new fhir.FhirString(source._comment as Partial<fhir.FhirStringArgs>, options); }
    }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'Slot' }
    iss.push(...this.vOA('identifier',exp));
    iss.push(...this.vOS('type',exp));
    iss.push(...this.vRS('schedule',exp));
    iss.push(...this.vRSV('freeBusyType',exp,'Slotstatus',SlotstatusVsValidation,'r'));
    iss.push(...this.vRS('start',exp));
    iss.push(...this.vRS('end',exp));
    iss.push(...this.vOS('overbooked',exp));
    iss.push(...this.vOS('comment',exp));
    return iss;
  }
}
