// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: Schedule

import * as fhir from '../fhir.js';

// @ts-ignore
import { ServiceCategoryCodes,  ServiceCategoryCodeType } from '../fhirValueSets/ServiceCategoryCodes.js';
// @ts-ignore
import { ServiceCategoryVsValidation } from '../fhirValueSets/ServiceCategoryVsValidation.js';
// @ts-ignore
import { ServiceTypeCodes,  ServiceTypeCodeType } from '../fhirValueSets/ServiceTypeCodes.js';
// @ts-ignore
import { ServiceTypeVsValidation } from '../fhirValueSets/ServiceTypeVsValidation.js';
// @ts-ignore
import { C80PracticeCodes,  C80PracticeCodeType } from '../fhirValueSets/C80PracticeCodes.js';
// @ts-ignore
import { C80PracticeVsValidation } from '../fhirValueSets/C80PracticeVsValidation.js';
/**
 * Valid arguments for the Schedule type.
 */
export interface ScheduleArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "Schedule"|undefined;
  /**
   * External Ids for this item.
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * This element is labeled as a modifier because it may be used to mark that the resource was created in error.
   */
  active?: fhir.FhirBoolean|boolean|undefined;
  /**
   * Extended properties for primitive element: Schedule.active
   */
  _active?:fhir.FhirElementArgs;
  /**
   * A broad categorization of the service that is to be performed during this appointment.
   */
  serviceCategory?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * The specific service that is to be performed during this appointment.
   */
  serviceType?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * The specialty of a practitioner that would be required to perform the service requested in this appointment.
   */
  specialty?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * The capacity to support multiple referenced resource types should be used in cases where the specific resources themselves cannot be scheduled without the other, and thus only make sense to the system exposing them as a group. Common examples of this are where the combination of a practitioner and a room (Location) are always required by a system.
   */
  actor: fhir.ReferenceArgs[]|null;
  /**
   * The period of time that the slots that reference this Schedule resource cover (even if none exist). These  cover the amount of time that an organization's planning horizon; the interval for which they are currently accepting appointments. This does not define a "template" for planning outside these dates.
   */
  planningHorizon?: fhir.PeriodArgs|undefined;
  /**
   * Comments on the availability to describe any extended information. Such as custom constraints on the slots that may be associated.
   */
  comment?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: Schedule.comment
   */
  _comment?:fhir.FhirElementArgs;
}

/**
 * A container for slots of time that may be available for booking appointments.
 */
export class Schedule extends fhir.DomainResource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'Schedule';
  /**
   * Resource Type Name
   */
  public override resourceType: "Schedule";
  /**
   * External Ids for this item.
   */
  public identifier: fhir.Identifier[];
  /**
   * This element is labeled as a modifier because it may be used to mark that the resource was created in error.
   */
  public active?: fhir.FhirBoolean|undefined;
  /**
   * A broad categorization of the service that is to be performed during this appointment.
   */
  public serviceCategory: fhir.CodeableConcept[];
  /**
   * The specific service that is to be performed during this appointment.
   */
  public serviceType: fhir.CodeableConcept[];
  /**
   * The specialty of a practitioner that would be required to perform the service requested in this appointment.
   */
  public specialty: fhir.CodeableConcept[];
  /**
   * The capacity to support multiple referenced resource types should be used in cases where the specific resources themselves cannot be scheduled without the other, and thus only make sense to the system exposing them as a group. Common examples of this are where the combination of a practitioner and a room (Location) are always required by a system.
   */
  public actor: fhir.Reference[];
  /**
   * The period of time that the slots that reference this Schedule resource cover (even if none exist). These  cover the amount of time that an organization's planning horizon; the interval for which they are currently accepting appointments. This does not define a "template" for planning outside these dates.
   */
  public planningHorizon?: fhir.Period|undefined;
  /**
   * Comments on the availability to describe any extended information. Such as custom constraints on the slots that may be associated.
   */
  public comment?: fhir.FhirString|undefined;
  /**
   * Default constructor for Schedule - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<ScheduleArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'Schedule';
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x)); }
    else { this.identifier = []; }
    if (source['active']) { this.active = new fhir.FhirBoolean({value: source.active}); }
    if (source['_active']) {
      if (this.active) { this.active.addExtendedProperties(source._active!); }
      else { this.active = new fhir.FhirBoolean(source._active as Partial<fhir.FhirBooleanArgs>); }
    }
    if (source['serviceCategory']) { this.serviceCategory = source.serviceCategory.map((x) => new fhir.CodeableConcept(x)); }
    else { this.serviceCategory = []; }
    if (source['serviceType']) { this.serviceType = source.serviceType.map((x) => new fhir.CodeableConcept(x)); }
    else { this.serviceType = []; }
    if (source['specialty']) { this.specialty = source.specialty.map((x) => new fhir.CodeableConcept(x)); }
    else { this.specialty = []; }
    if (source['actor']) { this.actor = source.actor.map((x) => new fhir.Reference(x)); }
    else { this.actor = []; }
    if (source['planningHorizon']) { this.planningHorizon = new fhir.Period(source.planningHorizon); }
    if (source['comment']) { this.comment = new fhir.FhirString({value: source.comment}); }
    if (source['_comment']) {
      if (this.comment) { this.comment.addExtendedProperties(source._comment!); }
      else { this.comment = new fhir.FhirString(source._comment as Partial<fhir.FhirStringArgs>); }
    }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'Schedule' }
    iss.push(...this.vOA('identifier',exp));
    iss.push(...this.vOS('active',exp));
    iss.push(...this.vOA('serviceCategory',exp));
    iss.push(...this.vOA('serviceType',exp));
    iss.push(...this.vOA('specialty',exp));
    iss.push(...this.vRA('actor',exp));
    iss.push(...this.vOS('planningHorizon',exp));
    iss.push(...this.vOS('comment',exp));
    return iss;
  }
}
