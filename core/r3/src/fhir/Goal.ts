// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR Resource: Goal

import * as fhir from '../fhir.js';

// @ts-ignore
import { ObservationCodes,  ObservationCodeType } from '../fhirValueSets/ObservationCodes.js';
// @ts-ignore
import { ObservationVsValidation } from '../fhirValueSets/ObservationVsValidation.js';
// @ts-ignore
import { GoalStatusCodes,  GoalStatusCodeType } from '../fhirValueSets/GoalStatusCodes.js';
// @ts-ignore
import { GoalStatusVsValidation } from '../fhirValueSets/GoalStatusVsValidation.js';
// @ts-ignore
import { GoalCategoryCodes,  GoalCategoryCodeType } from '../fhirValueSets/GoalCategoryCodes.js';
// @ts-ignore
import { GoalCategoryVsValidation } from '../fhirValueSets/GoalCategoryVsValidation.js';
// @ts-ignore
import { GoalPriorityCodes,  GoalPriorityCodeType } from '../fhirValueSets/GoalPriorityCodes.js';
// @ts-ignore
import { GoalPriorityVsValidation } from '../fhirValueSets/GoalPriorityVsValidation.js';
// @ts-ignore
import { ClinicalFindingsCodes,  ClinicalFindingsCodeType } from '../fhirValueSets/ClinicalFindingsCodes.js';
// @ts-ignore
import { ClinicalFindingsVsValidation } from '../fhirValueSets/ClinicalFindingsVsValidation.js';
/**
 * Valid arguments for the GoalTarget type.
 */
export interface GoalTargetArgs extends fhir.BackboneElementArgs {
  /**
   * The parameter whose value is being tracked, e.g. body weight, blood pressure, or hemoglobin A1c level.
   */
  measure?: fhir.CodeableConceptArgs|undefined;
  /**
   * The target value of the focus to be achieved to signify the fulfillment of the goal, e.g. 150 pounds, 7.0%. Either the high or low or both values of the range can be specified. When a low value is missing, it indicates that the goal is achieved at any focus value at or below the high value. Similarly, if the high value is missing, it indicates that the goal is achieved at any focus value at or above the low value.
   */
  detail?: fhir.Quantity|fhir.Range|fhir.CodeableConcept|undefined;
  /**
   * The target value of the focus to be achieved to signify the fulfillment of the goal, e.g. 150 pounds, 7.0%. Either the high or low or both values of the range can be specified. When a low value is missing, it indicates that the goal is achieved at any focus value at or below the high value. Similarly, if the high value is missing, it indicates that the goal is achieved at any focus value at or above the low value.
   */
  detailQuantity?: fhir.QuantityArgs|undefined;
  /**
   * The target value of the focus to be achieved to signify the fulfillment of the goal, e.g. 150 pounds, 7.0%. Either the high or low or both values of the range can be specified. When a low value is missing, it indicates that the goal is achieved at any focus value at or below the high value. Similarly, if the high value is missing, it indicates that the goal is achieved at any focus value at or above the low value.
   */
  detailRange?: fhir.RangeArgs|undefined;
  /**
   * The target value of the focus to be achieved to signify the fulfillment of the goal, e.g. 150 pounds, 7.0%. Either the high or low or both values of the range can be specified. When a low value is missing, it indicates that the goal is achieved at any focus value at or below the high value. Similarly, if the high value is missing, it indicates that the goal is achieved at any focus value at or above the low value.
   */
  detailCodeableConcept?: fhir.CodeableConceptArgs|undefined;
  /**
   * Indicates either the date or the duration after start by which the goal should be met.
   */
  due?: fhir.FhirDate|fhir.Duration|undefined;
  /**
   * Indicates either the date or the duration after start by which the goal should be met.
   */
  dueDate?: fhir.FhirDate|string|undefined;
  /**
   * Indicates either the date or the duration after start by which the goal should be met.
   */
  dueDuration?: fhir.DurationArgs|undefined;
}

/**
 * Indicates what should be done by when.
 */
export class GoalTarget extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'GoalTarget';
  /**
   * The parameter whose value is being tracked, e.g. body weight, blood pressure, or hemoglobin A1c level.
   */
  public measure?: fhir.CodeableConcept|undefined;
  /**
   * The target value of the focus to be achieved to signify the fulfillment of the goal, e.g. 150 pounds, 7.0%. Either the high or low or both values of the range can be specified. When a low value is missing, it indicates that the goal is achieved at any focus value at or below the high value. Similarly, if the high value is missing, it indicates that the goal is achieved at any focus value at or above the low value.
   */
  public detail?: (fhir.Quantity|fhir.Range|fhir.CodeableConcept)|undefined;
  /**
   * Internal flag to properly serialize choice-type element Goal.target.detail[x]
   */
  protected static readonly _fts_detailIsChoice:true = true;
  /**
   * Indicates either the date or the duration after start by which the goal should be met.
   */
  public due?: (fhir.FhirDate|fhir.Duration)|undefined;
  /**
   * Internal flag to properly serialize choice-type element Goal.target.due[x]
   */
  protected static readonly _fts_dueIsChoice:true = true;
  /**
   * Default constructor for GoalTarget - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<GoalTargetArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['measure']) { this.measure = new fhir.CodeableConcept(source.measure); }
    if (source['detail']) { this.detail = source.detail; }
    else if (source['detailQuantity']) { this.detail = new fhir.Quantity(source.detailQuantity); }
    else if (source['detailRange']) { this.detail = new fhir.Range(source.detailRange); }
    else if (source['detailCodeableConcept']) { this.detail = new fhir.CodeableConcept(source.detailCodeableConcept); }
    if (source['due']) { this.due = source.due; }
    else if (source['dueDate']) { this.due = new fhir.FhirDate({value: source.dueDate}); }
    else if (source['dueDuration']) { this.due = new fhir.Duration(source.dueDuration); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'Goal.target' }
    this.vOS('measure',exp)
    this.vOS('detail',exp)
    this.vOS('due',exp)
    return issues;
  }
}
/**
 * Valid arguments for the Goal type.
 */
export interface GoalArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "Goal"|undefined;
  /**
   * This records identifiers associated with this care plan that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate (e.g. in CDA documents, or in written / printed documentation).
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  status: fhir.FhirCode<GoalStatusCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: Goal.status
   */
  _status?:fhir.FhirElementArgs;
  /**
   * Indicates a category the goal falls within.
   */
  category?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * Extensions are available to track priorities as established by each participant (i.e. Priority from the patient's perspective, different practitioners' perspectives, family member's perspectives)
   * The ordinal extension on Coding can be used to convey a numerically comparable ranking to priority.  (Keep in mind that different coding systems may use a "low value=important".
   */
  priority?: fhir.CodeableConceptArgs|undefined;
  /**
   * If no code is available, use CodeableConcept.text.
   */
  description: fhir.CodeableConceptArgs|null;
  /**
   * Identifies the patient, group or organization for whom the goal is being established.
   */
  subject?: fhir.ReferenceArgs|undefined;
  /**
   * The date or event after which the goal should begin being pursued.
   */
  start?: fhir.FhirDate|fhir.CodeableConcept|undefined;
  /**
   * The date or event after which the goal should begin being pursued.
   */
  startDate?: fhir.FhirDate|string|undefined;
  /**
   * The date or event after which the goal should begin being pursued.
   */
  startCodeableConcept?: fhir.CodeableConceptArgs|undefined;
  /**
   * Indicates what should be done by when.
   */
  target?: fhir.GoalTargetArgs|undefined;
  /**
   * To see the date for past statuses, query history.
   */
  statusDate?: fhir.FhirDate|string|undefined;
  /**
   * Extended properties for primitive element: Goal.statusDate
   */
  _statusDate?:fhir.FhirElementArgs;
  /**
   * This will typically be captured for statuses such as rejected, on-hold or cancelled, but could be present for others.
   */
  statusReason?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: Goal.statusReason
   */
  _statusReason?:fhir.FhirElementArgs;
  /**
   * This is the individual reponsible for establishing the goal, not necessarily who recorded it.  (For that, use the Provenance resource.).
   */
  expressedBy?: fhir.ReferenceArgs|undefined;
  /**
   * The identified conditions and other health record elements that are intended to be addressed by the goal.
   */
  addresses?: fhir.ReferenceArgs[]|undefined;
  /**
   * May be used for progress notes, concerns or other related information that doesn't actually describe the goal itself.
   */
  note?: fhir.AnnotationArgs[]|undefined;
  /**
   * Note that this should not duplicate the goal status.
   */
  outcomeCode?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * The goal outcome is independent of the outcome of the related activities.  For example, if the Goal is to achieve a target body weight of 150 lb and a care plan activity is defined to diet, then the care plan’s activity outcome could be calories consumed whereas goal outcome is an observation for the actual body weight measured.
   */
  outcomeReference?: fhir.ReferenceArgs[]|undefined;
}

/**
 * Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc.
 */
export class Goal extends fhir.DomainResource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'Goal';
  /**
   * Resource Type Name
   */
  public override resourceType: "Goal";
  /**
   * This records identifiers associated with this care plan that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate (e.g. in CDA documents, or in written / printed documentation).
   */
  public identifier: fhir.Identifier[];
  /**
   * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  public status: fhir.FhirCode<GoalStatusCodeType>|null;
  /**
   * Indicates a category the goal falls within.
   */
  public category: fhir.CodeableConcept[];
  /**
   * Extensions are available to track priorities as established by each participant (i.e. Priority from the patient's perspective, different practitioners' perspectives, family member's perspectives)
   * The ordinal extension on Coding can be used to convey a numerically comparable ranking to priority.  (Keep in mind that different coding systems may use a "low value=important".
   */
  public priority?: fhir.CodeableConcept|undefined;
  /**
   * If no code is available, use CodeableConcept.text.
   */
  public description: fhir.CodeableConcept|null;
  /**
   * Identifies the patient, group or organization for whom the goal is being established.
   */
  public subject?: fhir.Reference|undefined;
  /**
   * The date or event after which the goal should begin being pursued.
   */
  public start?: (fhir.FhirDate|fhir.CodeableConcept)|undefined;
  /**
   * Internal flag to properly serialize choice-type element Goal.start[x]
   */
  protected static readonly _fts_startIsChoice:true = true;
  /**
   * Indicates what should be done by when.
   */
  public target?: fhir.GoalTarget|undefined;
  /**
   * To see the date for past statuses, query history.
   */
  public statusDate?: fhir.FhirDate|undefined;
  /**
   * This will typically be captured for statuses such as rejected, on-hold or cancelled, but could be present for others.
   */
  public statusReason?: fhir.FhirString|undefined;
  /**
   * This is the individual reponsible for establishing the goal, not necessarily who recorded it.  (For that, use the Provenance resource.).
   */
  public expressedBy?: fhir.Reference|undefined;
  /**
   * The identified conditions and other health record elements that are intended to be addressed by the goal.
   */
  public addresses: fhir.Reference[];
  /**
   * May be used for progress notes, concerns or other related information that doesn't actually describe the goal itself.
   */
  public note: fhir.Annotation[];
  /**
   * Note that this should not duplicate the goal status.
   */
  public outcomeCode: fhir.CodeableConcept[];
  /**
   * The goal outcome is independent of the outcome of the related activities.  For example, if the Goal is to achieve a target body weight of 150 lb and a care plan activity is defined to diet, then the care plan’s activity outcome could be calories consumed whereas goal outcome is an observation for the actual body weight measured.
   */
  public outcomeReference: fhir.Reference[];
  /**
   * Default constructor for Goal - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<GoalArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'Goal';
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x)); }
    else { this.identifier = []; }
    if (source['status']) { this.status = new fhir.FhirCode<GoalStatusCodeType>({value: source.status}); }
    else { this.status = null; }
    if (source['_status']) {
      if (this.status) { this.status.addExtendedProperties(source._status!); }
      else { this.status = new fhir.FhirCode<GoalStatusCodeType>(source._status as Partial<fhir.FhirCode>); }
    }
    if (source['category']) { this.category = source.category.map((x) => new fhir.CodeableConcept(x)); }
    else { this.category = []; }
    if (source['priority']) { this.priority = new fhir.CodeableConcept(source.priority); }
    if (source['description']) { this.description = new fhir.CodeableConcept(source.description); }
    else { this.description = null; }
    if (source['subject']) { this.subject = new fhir.Reference(source.subject); }
    if (source['start']) { this.start = source.start; }
    else if (source['startDate']) { this.start = new fhir.FhirDate({value: source.startDate}); }
    else if (source['startCodeableConcept']) { this.start = new fhir.CodeableConcept(source.startCodeableConcept); }
    if (source['target']) { this.target = new fhir.GoalTarget(source.target); }
    if (source['statusDate']) { this.statusDate = new fhir.FhirDate({value: source.statusDate}); }
    if (source['_statusDate']) {
      if (this.statusDate) { this.statusDate.addExtendedProperties(source._statusDate!); }
      else { this.statusDate = new fhir.FhirDate(source._statusDate as Partial<fhir.FhirDateArgs>); }
    }
    if (source['statusReason']) { this.statusReason = new fhir.FhirString({value: source.statusReason}); }
    if (source['_statusReason']) {
      if (this.statusReason) { this.statusReason.addExtendedProperties(source._statusReason!); }
      else { this.statusReason = new fhir.FhirString(source._statusReason as Partial<fhir.FhirStringArgs>); }
    }
    if (source['expressedBy']) { this.expressedBy = new fhir.Reference(source.expressedBy); }
    if (source['addresses']) { this.addresses = source.addresses.map((x) => new fhir.Reference(x)); }
    else { this.addresses = []; }
    if (source['note']) { this.note = source.note.map((x) => new fhir.Annotation(x)); }
    else { this.note = []; }
    if (source['outcomeCode']) { this.outcomeCode = source.outcomeCode.map((x) => new fhir.CodeableConcept(x)); }
    else { this.outcomeCode = []; }
    if (source['outcomeReference']) { this.outcomeReference = source.outcomeReference.map((x) => new fhir.Reference(x)); }
    else { this.outcomeReference = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'Goal' }
    this.vRS('resourceType',exp)
    this.vOA('identifier',exp)
    this.vRSV('status',exp,'GoalStatus',GoalStatusVsValidation,'r')
    this.vOA('category',exp)
    this.vOS('priority',exp)
    this.vRS('description',exp)
    this.vOS('subject',exp)
    this.vOS('start',exp)
    this.vOS('target',exp)
    this.vOS('statusDate',exp)
    this.vOS('statusReason',exp)
    this.vOS('expressedBy',exp)
    this.vOA('addresses',exp)
    this.vOA('note',exp)
    this.vOA('outcomeCode',exp)
    this.vOA('outcomeReference',exp)
    return issues;
  }
}
