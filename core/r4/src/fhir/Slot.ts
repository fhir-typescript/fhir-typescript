// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: Slot

import * as fhir from '../fhir.js';

// @ts-ignore
import { ServiceCategoryCodings, ServiceCategoryCodingType,} from '../fhirValueSets/ServiceCategoryCodings.js';
// @ts-ignore
import { ServiceCategoryCodes,  ServiceCategoryCodeType } from '../fhirValueSets/ServiceCategoryCodes.js';
// @ts-ignore
import { ServiceTypeCodings, ServiceTypeCodingType,} from '../fhirValueSets/ServiceTypeCodings.js';
// @ts-ignore
import { ServiceTypeCodes,  ServiceTypeCodeType } from '../fhirValueSets/ServiceTypeCodes.js';
// @ts-ignore
import { C80PracticeCodings, C80PracticeCodingType,} from '../fhirValueSets/C80PracticeCodings.js';
// @ts-ignore
import { C80PracticeCodes,  C80PracticeCodeType } from '../fhirValueSets/C80PracticeCodes.js';
// @ts-ignore
import { V20276Codings, V20276CodingType,} from '../fhirValueSets/V20276Codings.js';
// @ts-ignore
import { V20276Codes,  V20276CodeType } from '../fhirValueSets/V20276Codes.js';
// @ts-ignore
import { SlotstatusCodings, SlotstatusCodingType,} from '../fhirValueSets/SlotstatusCodings.js';
// @ts-ignore
import { SlotstatusCodes,  SlotstatusCodeType } from '../fhirValueSets/SlotstatusCodes.js';
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
   * A broad categorization of the service that is to be performed during this appointment.
   */
  serviceCategory?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * The type of appointments that can be booked into this slot (ideally this would be an identifiable service - which is at a location, rather than the location itself). If provided then this overrides the value provided on the availability resource.
   */
  serviceType?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * The specialty of a practitioner that would be required to perform the service requested in this appointment.
   */
  specialty?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * The style of appointment or patient that may be booked in the slot (not service type).
   */
  appointmentType?: fhir.CodeableConceptArgs|undefined;
  /**
   * The schedule resource that this slot defines an interval of status information.
   */
  schedule: fhir.ReferenceArgs|null;
  /**
   * busy | free | busy-unavailable | busy-tentative | entered-in-error.
   */
  status: fhir.FhirCode<SlotstatusCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: Slot.status
   */
  _status?:fhir.FhirElementArgs;
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
   * A broad categorization of the service that is to be performed during this appointment.
   */
  public serviceCategory: fhir.CodeableConcept[];
  /**
   * The type of appointments that can be booked into this slot (ideally this would be an identifiable service - which is at a location, rather than the location itself). If provided then this overrides the value provided on the availability resource.
   */
  public serviceType: fhir.CodeableConcept[];
  /**
   * The specialty of a practitioner that would be required to perform the service requested in this appointment.
   */
  public specialty: fhir.CodeableConcept[];
  /**
   * The style of appointment or patient that may be booked in the slot (not service type).
   */
  public appointmentType?: fhir.CodeableConcept|undefined;
  /**
   * The schedule resource that this slot defines an interval of status information.
   */
  public schedule: fhir.Reference|null;
  /**
   * busy | free | busy-unavailable | busy-tentative | entered-in-error.
   */
  public status: fhir.FhirCode<SlotstatusCodeType>|null;
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
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x)); }
    else { this.identifier = []; }
    if (source['serviceCategory']) { this.serviceCategory = source.serviceCategory.map((x) => new fhir.CodeableConcept(x)); }
    else { this.serviceCategory = []; }
    if (source['serviceType']) { this.serviceType = source.serviceType.map((x) => new fhir.CodeableConcept(x)); }
    else { this.serviceType = []; }
    if (source['specialty']) { this.specialty = source.specialty.map((x) => new fhir.CodeableConcept(x)); }
    else { this.specialty = []; }
    if (source['appointmentType']) { this.appointmentType = new fhir.CodeableConcept(source.appointmentType); }
    if (source['schedule']) { this.schedule = new fhir.Reference(source.schedule); }
    else { this.schedule = null; }
    if (source['status']) { this.status = new fhir.FhirCode<SlotstatusCodeType>({value: source.status}); }
    else { this.status = null; }
    if (source['_status']) {
      if (this.status) { this.status.addExtendedProperties(source._status!); }
      else { this.status = new fhir.FhirCode<SlotstatusCodeType>(source._status as Partial<fhir.FhirCode>); }
    }
    if (source['start']) { this.start = new fhir.FhirInstant({value: source.start}); }
    else { this.start = null; }
    if (source['_start']) {
      if (this.start) { this.start.addExtendedProperties(source._start!); }
      else { this.start = new fhir.FhirInstant(source._start as Partial<fhir.FhirInstantArgs>); }
    }
    if (source['end']) { this.end = new fhir.FhirInstant({value: source.end}); }
    else { this.end = null; }
    if (source['_end']) {
      if (this.end) { this.end.addExtendedProperties(source._end!); }
      else { this.end = new fhir.FhirInstant(source._end as Partial<fhir.FhirInstantArgs>); }
    }
    if (source['overbooked']) { this.overbooked = new fhir.FhirBoolean({value: source.overbooked}); }
    if (source['_overbooked']) {
      if (this.overbooked) { this.overbooked.addExtendedProperties(source._overbooked!); }
      else { this.overbooked = new fhir.FhirBoolean(source._overbooked as Partial<fhir.FhirBooleanArgs>); }
    }
    if (source['comment']) { this.comment = new fhir.FhirString({value: source.comment}); }
    if (source['_comment']) {
      if (this.comment) { this.comment.addExtendedProperties(source._comment!); }
      else { this.comment = new fhir.FhirString(source._comment as Partial<fhir.FhirStringArgs>); }
    }
  }
  /**
   * Preferred-bound Value Set for specialty (Slot.specialty)
   */
  public static get specialtyPreferredCodings():C80PracticeCodingType {
    return C80PracticeCodings;
  }
  /**
   * Preferred-bound Value Set for appointmentType (Slot.appointmentType)
   */
  public static get appointmentTypePreferredCodings():V20276CodingType {
    return V20276Codings;
  }
  /**
   * Required-bound Value Set for status (Slot.status)
   */
  public static get statusRequiredCodes() {
    return SlotstatusCodes;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation();
    if (!this['resourceType']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property resourceType:"Slot" fhir: Slot.resourceType:"Slot"' });
    }
    if (this["identifier"]) { this.identifier.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    if (this["serviceCategory"]) { this.serviceCategory.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    if (this["serviceType"]) { this.serviceType.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    if (this["specialty"]) { this.specialty.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    if (this["appointmentType"]) { issues.push(...this.appointmentType.doModelValidation()); }
    if (!this['schedule']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property schedule:fhir.Reference fhir: Slot.schedule:Reference' });
    }
    if (this["schedule"]) { issues.push(...this.schedule.doModelValidation()); }
    if (!this['status']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property status:fhir.FhirCode<SlotstatusCodeType> fhir: Slot.status:code' });
    }
    if (this['status'] && (!Object.values(SlotstatusCodes).includes(this.status as any))) {
      issues.push({ severity: 'error', code: 'code-invalid', diagnostics: 'Invalid code property status:fhir.FhirCode<SlotstatusCodeType> fhir: Slot.status:code Required binding to: Slotstatus' });
    }
    if (this["status"]) { issues.push(...this.status.doModelValidation()); }
    if (!this['start']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property start:fhir.FhirInstant fhir: Slot.start:instant' });
    }
    if (this["start"]) { issues.push(...this.start.doModelValidation()); }
    if (!this['end']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property end:fhir.FhirInstant fhir: Slot.end:instant' });
    }
    if (this["end"]) { issues.push(...this.end.doModelValidation()); }
    if (this["overbooked"]) { issues.push(...this.overbooked.doModelValidation()); }
    if (this["comment"]) { issues.push(...this.comment.doModelValidation()); }
    return issues;
  }
}
