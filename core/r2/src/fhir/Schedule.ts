// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR Resource: Schedule

import * as fhir from '../fhir.js';

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
   * The schedule type can be used for the categorization of healthcare services or other appointment types.
   */
  type?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * The resource this Schedule resource is providing availability information for. These are expected to usually be one of HealthcareService, Location, Practitioner, Device, Patient or RelatedPerson.
   */
  actor: fhir.ReferenceArgs|null;
  /**
   * The period of time that the slots that are attached to this Schedule resource cover (even if none exist). These  cover the amount of time that an organization's planning horizon; the interval for which they are currently accepting appointments. This does not define a "template" for planning outside these dates.
   */
  planningHorizon?: fhir.PeriodArgs|undefined;
  /**
   * Comments on the availability to describe any extended information. Such as custom constraints on the slot(s) that may be associated.
   */
  comment?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: Schedule.comment
   */
  _comment?:fhir.FhirElementArgs;
}

/**
 * A container for slot(s) of time that may be available for booking appointments.
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
   * The schedule type can be used for the categorization of healthcare services or other appointment types.
   */
  public type: fhir.CodeableConcept[];
  /**
   * The resource this Schedule resource is providing availability information for. These are expected to usually be one of HealthcareService, Location, Practitioner, Device, Patient or RelatedPerson.
   */
  public actor: fhir.Reference|null;
  /**
   * The period of time that the slots that are attached to this Schedule resource cover (even if none exist). These  cover the amount of time that an organization's planning horizon; the interval for which they are currently accepting appointments. This does not define a "template" for planning outside these dates.
   */
  public planningHorizon?: fhir.Period|undefined;
  /**
   * Comments on the availability to describe any extended information. Such as custom constraints on the slot(s) that may be associated.
   */
  public comment?: fhir.FhirString|undefined;
  /**
   * Default constructor for Schedule - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<ScheduleArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'Schedule';
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x, options)); }
    else { this.identifier = []; }
    if (source['type']) { this.type = source.type.map((x) => new fhir.CodeableConcept(x, options)); }
    else { this.type = []; }
    if (source['actor']) { this.actor = new fhir.Reference(source.actor, options); }
    else { this.actor = null; }
    if (source['planningHorizon']) { this.planningHorizon = new fhir.Period(source.planningHorizon, options); }
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
    if (exp === '') { exp = 'Schedule' }
    iss.push(...this.vOA('identifier',exp));
    iss.push(...this.vOA('type',exp));
    iss.push(...this.vRS('actor',exp));
    iss.push(...this.vOS('planningHorizon',exp));
    iss.push(...this.vOS('comment',exp));
    return iss;
  }
}
