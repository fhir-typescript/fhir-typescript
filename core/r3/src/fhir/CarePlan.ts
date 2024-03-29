// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR Resource: CarePlan

import * as fhir from '../fhir.js';

// @ts-ignore
import { CarePlanActivityCategoryCodes,  CarePlanActivityCategoryCodeType } from '../fhirValueSets/CarePlanActivityCategoryCodes.js';
// @ts-ignore
import { CarePlanActivityCategoryVsValidation } from '../fhirValueSets/CarePlanActivityCategoryVsValidation.js';
// @ts-ignore
import { CarePlanActivityCodes,  CarePlanActivityCodeType } from '../fhirValueSets/CarePlanActivityCodes.js';
// @ts-ignore
import { CarePlanActivityVsValidation } from '../fhirValueSets/CarePlanActivityVsValidation.js';
// @ts-ignore
import { ActivityReasonCodes,  ActivityReasonCodeType } from '../fhirValueSets/ActivityReasonCodes.js';
// @ts-ignore
import { ActivityReasonVsValidation } from '../fhirValueSets/ActivityReasonVsValidation.js';
// @ts-ignore
import { CarePlanActivityStatusCodes,  CarePlanActivityStatusCodeType } from '../fhirValueSets/CarePlanActivityStatusCodes.js';
// @ts-ignore
import { CarePlanActivityStatusVsValidation } from '../fhirValueSets/CarePlanActivityStatusVsValidation.js';
// @ts-ignore
import { CarePlanActivityOutcomeCodes,  CarePlanActivityOutcomeCodeType } from '../fhirValueSets/CarePlanActivityOutcomeCodes.js';
// @ts-ignore
import { CarePlanActivityOutcomeVsValidation } from '../fhirValueSets/CarePlanActivityOutcomeVsValidation.js';
// @ts-ignore
import { CarePlanStatusCodes,  CarePlanStatusCodeType } from '../fhirValueSets/CarePlanStatusCodes.js';
// @ts-ignore
import { CarePlanStatusVsValidation } from '../fhirValueSets/CarePlanStatusVsValidation.js';
// @ts-ignore
import { CarePlanIntentCodes,  CarePlanIntentCodeType } from '../fhirValueSets/CarePlanIntentCodes.js';
// @ts-ignore
import { CarePlanIntentVsValidation } from '../fhirValueSets/CarePlanIntentVsValidation.js';
// @ts-ignore
import { CarePlanCategoryCodes,  CarePlanCategoryCodeType } from '../fhirValueSets/CarePlanCategoryCodes.js';
// @ts-ignore
import { CarePlanCategoryVsValidation } from '../fhirValueSets/CarePlanCategoryVsValidation.js';
/**
 * Valid arguments for the CarePlanActivityDetail type.
 */
export interface CarePlanActivityDetailArgs extends fhir.BackboneElementArgs {
  /**
   * High-level categorization of the type of activity in a care plan.
   */
  category?: fhir.CodeableConceptArgs|undefined;
  /**
   * Identifies the protocol, questionnaire, guideline or other specification the planned activity should be conducted in accordance with.
   */
  definition?: fhir.ReferenceArgs|undefined;
  /**
   * Tends to be less relevant for activities involving particular products.  Codes should not convey negation - use "prohibited" instead.
   */
  code?: fhir.CodeableConceptArgs|undefined;
  /**
   * This could be a diagnosis code.  If a full condition record exists or additional detail is needed, use reasonCondition instead.
   */
  reasonCode?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * Conditions can be identified at the activity level that are not identified as reasons for the overall plan.
   */
  reasonReference?: fhir.ReferenceArgs[]|undefined;
  /**
   * Internal reference that identifies the goals that this activity is intended to contribute towards meeting.
   */
  goal?: fhir.ReferenceArgs[]|undefined;
  /**
   * Some aspects of status can be inferred based on the resources linked in actionTaken.  Note that "status" is only as current as the plan was most recently updated.  
   * The unknown code is not to be used to convey other statuses.  The unknown code should be used when one of the statuses applies, but the authoring system doesn't know the current state of the activity.
   */
  status: fhir.FhirCode<CarePlanActivityStatusCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: CarePlan.activity.detail.status
   */
  _status?:fhir.FhirElementArgs;
  /**
   * Will generally not be present if status is "complete".  Be sure to prompt to update this (or at least remove the existing value) if the status is changed.
   */
  statusReason?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: CarePlan.activity.detail.statusReason
   */
  _statusReason?:fhir.FhirElementArgs;
  /**
   * This element is labeled as a modifier because it marks an activity as an activity that is not to be performed.
   */
  prohibited?: fhir.FhirBoolean|boolean|undefined;
  /**
   * Extended properties for primitive element: CarePlan.activity.detail.prohibited
   */
  _prohibited?:fhir.FhirElementArgs;
  /**
   * The period, timing or frequency upon which the described activity is to occur.
   */
  scheduled?: fhir.Timing|fhir.Period|fhir.FhirString|undefined;
  /**
   * The period, timing or frequency upon which the described activity is to occur.
   */
  scheduledTiming?: fhir.TimingArgs|undefined;
  /**
   * The period, timing or frequency upon which the described activity is to occur.
   */
  scheduledPeriod?: fhir.PeriodArgs|undefined;
  /**
   * The period, timing or frequency upon which the described activity is to occur.
   */
  scheduledString?: fhir.FhirString|string|undefined;
  /**
   * May reference a specific clinical location or may identify a type of location.
   */
  location?: fhir.ReferenceArgs|undefined;
  /**
   * A performer MAY also be a participant in the care plan.
   */
  performer?: fhir.ReferenceArgs[]|undefined;
  /**
   * Identifies the food, drug or other product to be consumed or supplied in the activity.
   */
  product?: fhir.CodeableConcept|fhir.Reference|undefined;
  /**
   * Identifies the food, drug or other product to be consumed or supplied in the activity.
   */
  productCodeableConcept?: fhir.CodeableConceptArgs|undefined;
  /**
   * Identifies the food, drug or other product to be consumed or supplied in the activity.
   */
  productReference?: fhir.ReferenceArgs|undefined;
  /**
   * Identifies the quantity expected to be consumed in a given day.
   */
  dailyAmount?: fhir.QuantityArgs|undefined;
  /**
   * Identifies the quantity expected to be supplied, administered or consumed by the subject.
   */
  quantity?: fhir.QuantityArgs|undefined;
  /**
   * This provides a textual description of constraints on the intended activity occurrence, including relation to other activities.  It may also include objectives, pre-conditions and end-conditions.  Finally, it may convey specifics about the activity such as body site, method, route, etc.
   */
  description?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: CarePlan.activity.detail.description
   */
  _description?:fhir.FhirElementArgs;
}

/**
 * A simple summary of a planned activity suitable for a general care plan system (e.g. form driven) that doesn't know about specific resources such as procedure etc.
 */
export class CarePlanActivityDetail extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'CarePlanActivityDetail';
  /**
   * High-level categorization of the type of activity in a care plan.
   */
  public category?: fhir.CodeableConcept|undefined;
  /**
   * Identifies the protocol, questionnaire, guideline or other specification the planned activity should be conducted in accordance with.
   */
  public definition?: fhir.Reference|undefined;
  /**
   * Tends to be less relevant for activities involving particular products.  Codes should not convey negation - use "prohibited" instead.
   */
  public code?: fhir.CodeableConcept|undefined;
  /**
   * This could be a diagnosis code.  If a full condition record exists or additional detail is needed, use reasonCondition instead.
   */
  public reasonCode: fhir.CodeableConcept[];
  /**
   * Conditions can be identified at the activity level that are not identified as reasons for the overall plan.
   */
  public reasonReference: fhir.Reference[];
  /**
   * Internal reference that identifies the goals that this activity is intended to contribute towards meeting.
   */
  public goal: fhir.Reference[];
  /**
   * Some aspects of status can be inferred based on the resources linked in actionTaken.  Note that "status" is only as current as the plan was most recently updated.  
   * The unknown code is not to be used to convey other statuses.  The unknown code should be used when one of the statuses applies, but the authoring system doesn't know the current state of the activity.
   */
  public status: fhir.FhirCode<CarePlanActivityStatusCodeType>|null;
  /**
   * Will generally not be present if status is "complete".  Be sure to prompt to update this (or at least remove the existing value) if the status is changed.
   */
  public statusReason?: fhir.FhirString|undefined;
  /**
   * This element is labeled as a modifier because it marks an activity as an activity that is not to be performed.
   */
  public prohibited?: fhir.FhirBoolean|undefined;
  /**
   * The period, timing or frequency upon which the described activity is to occur.
   */
  public scheduled?: (fhir.Timing|fhir.Period|fhir.FhirString)|undefined;
  /**
   * Internal flag to properly serialize choice-type element CarePlan.activity.detail.scheduled[x]
   */
  protected static readonly _fts_scheduledIsChoice:true = true;
  /**
   * May reference a specific clinical location or may identify a type of location.
   */
  public location?: fhir.Reference|undefined;
  /**
   * A performer MAY also be a participant in the care plan.
   */
  public performer: fhir.Reference[];
  /**
   * Identifies the food, drug or other product to be consumed or supplied in the activity.
   */
  public product?: (fhir.CodeableConcept|fhir.Reference)|undefined;
  /**
   * Internal flag to properly serialize choice-type element CarePlan.activity.detail.product[x]
   */
  protected static readonly _fts_productIsChoice:true = true;
  /**
   * Identifies the quantity expected to be consumed in a given day.
   */
  public dailyAmount?: fhir.Quantity|undefined;
  /**
   * Identifies the quantity expected to be supplied, administered or consumed by the subject.
   */
  public quantity?: fhir.Quantity|undefined;
  /**
   * This provides a textual description of constraints on the intended activity occurrence, including relation to other activities.  It may also include objectives, pre-conditions and end-conditions.  Finally, it may convey specifics about the activity such as body site, method, route, etc.
   */
  public description?: fhir.FhirString|undefined;
  /**
   * Default constructor for CarePlanActivityDetail - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<CarePlanActivityDetailArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['category']) { this.category = new fhir.CodeableConcept(source.category, options); }
    if (source['definition']) { this.definition = new fhir.Reference(source.definition, options); }
    if (source['code']) { this.code = new fhir.CodeableConcept(source.code, options); }
    if (source['reasonCode']) { this.reasonCode = source.reasonCode.map((x) => new fhir.CodeableConcept(x, options)); }
    else { this.reasonCode = []; }
    if (source['reasonReference']) { this.reasonReference = source.reasonReference.map((x) => new fhir.Reference(x, options)); }
    else { this.reasonReference = []; }
    if (source['goal']) { this.goal = source.goal.map((x) => new fhir.Reference(x, options)); }
    else { this.goal = []; }
    if (source['status'] !== undefined) { this.status = new fhir.FhirCode<CarePlanActivityStatusCodeType>({value: source.status}, options); }
    else { this.status = null; }
    if (source['_status']) {
      if (this.status) { this.status.addExtendedProperties(source._status!); }
      else { this.status = new fhir.FhirCode<CarePlanActivityStatusCodeType>(source._status as Partial<fhir.FhirCode>, options); }
    }
    if (source['statusReason'] !== undefined) { this.statusReason = new fhir.FhirString({value: source.statusReason}, options); }
    if (source['_statusReason']) {
      if (this.statusReason) { this.statusReason.addExtendedProperties(source._statusReason!); }
      else { this.statusReason = new fhir.FhirString(source._statusReason as Partial<fhir.FhirStringArgs>, options); }
    }
    if (source['prohibited'] !== undefined) { this.prohibited = new fhir.FhirBoolean({value: source.prohibited}, options); }
    if (source['_prohibited']) {
      if (this.prohibited) { this.prohibited.addExtendedProperties(source._prohibited!); }
      else { this.prohibited = new fhir.FhirBoolean(source._prohibited as Partial<fhir.FhirBooleanArgs>, options); }
    }
    if (source['scheduled']) { this.scheduled = source.scheduled; }
    else if (source['scheduledTiming']) { this.scheduled = new fhir.Timing(source.scheduledTiming, options); }
    else if (source['scheduledPeriod']) { this.scheduled = new fhir.Period(source.scheduledPeriod, options); }
    else if (source['scheduledString'] !== undefined) { this.scheduled = new fhir.FhirString({value: source.scheduledString}, options); }
    if (source['location']) { this.location = new fhir.Reference(source.location, options); }
    if (source['performer']) { this.performer = source.performer.map((x) => new fhir.Reference(x, options)); }
    else { this.performer = []; }
    if (source['product']) { this.product = source.product; }
    else if (source['productCodeableConcept']) { this.product = new fhir.CodeableConcept(source.productCodeableConcept, options); }
    else if (source['productReference']) { this.product = new fhir.Reference(source.productReference, options); }
    if (source['dailyAmount']) { this.dailyAmount = new fhir.Quantity(source.dailyAmount, options); }
    if (source['quantity']) { this.quantity = new fhir.Quantity(source.quantity, options); }
    if (source['description'] !== undefined) { this.description = new fhir.FhirString({value: source.description}, options); }
    if (source['_description']) {
      if (this.description) { this.description.addExtendedProperties(source._description!); }
      else { this.description = new fhir.FhirString(source._description as Partial<fhir.FhirStringArgs>, options); }
    }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'CarePlan.activity.detail' }
    iss.push(...this.vOS('category',exp));
    iss.push(...this.vOS('definition',exp));
    iss.push(...this.vOS('code',exp));
    iss.push(...this.vOA('reasonCode',exp));
    iss.push(...this.vOA('reasonReference',exp));
    iss.push(...this.vOA('goal',exp));
    iss.push(...this.vRSV('status',exp,'CarePlanActivityStatus',CarePlanActivityStatusVsValidation,'r'));
    iss.push(...this.vOS('statusReason',exp));
    iss.push(...this.vOS('prohibited',exp));
    iss.push(...this.vOS('scheduled',exp));
    iss.push(...this.vOS('location',exp));
    iss.push(...this.vOA('performer',exp));
    iss.push(...this.vOS('product',exp));
    iss.push(...this.vOS('dailyAmount',exp));
    iss.push(...this.vOS('quantity',exp));
    iss.push(...this.vOS('description',exp));
    return iss;
  }
}
/**
 * Valid arguments for the CarePlanActivity type.
 */
export interface CarePlanActivityArgs extends fhir.BackboneElementArgs {
  /**
   * Note that this should not duplicate the activity status (e.g. completed or in progress).
   */
  outcomeCodeableConcept?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * The activity outcome is independent of the outcome of the related goal(s).  For example, if the goal is to achieve a target body weight of 150 lb and an activity is defined to diet, then the activity outcome could be calories consumed whereas the goal outcome is an observation for the actual body weight measured.
   */
  outcomeReference?: fhir.ReferenceArgs[]|undefined;
  /**
   * This element should NOT be used to describe the activity to be performed - that occurs either within the resource pointed to by activity.detail.reference or in activity.detail.description.
   */
  progress?: fhir.AnnotationArgs[]|undefined;
  /**
   * Standard extension exists ([goal-pertainstogoal](extension-goal-pertainstogoal.html)) that allows goals to be referenced from any of the referenced resources in CarePlan.activity.reference.  
   * The goal should be visible when the resource referenced by CarePlan.activity.reference is viewed indepedently from the CarePlan.  Requests that are pointed to by a CarePlan using this element should *not* point to this CarePlan using the "basedOn" element.  i.e. Requests that are part of a CarePlan are not "based on" the CarePlan.
   */
  reference?: fhir.ReferenceArgs|undefined;
  /**
   * A simple summary of a planned activity suitable for a general care plan system (e.g. form driven) that doesn't know about specific resources such as procedure etc.
   */
  detail?: fhir.CarePlanActivityDetailArgs|undefined;
}

/**
 * Identifies a planned action to occur as part of the plan.  For example, a medication to be used, lab tests to perform, self-monitoring, education, etc.
 */
export class CarePlanActivity extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'CarePlanActivity';
  /**
   * Note that this should not duplicate the activity status (e.g. completed or in progress).
   */
  public outcomeCodeableConcept: fhir.CodeableConcept[];
  /**
   * The activity outcome is independent of the outcome of the related goal(s).  For example, if the goal is to achieve a target body weight of 150 lb and an activity is defined to diet, then the activity outcome could be calories consumed whereas the goal outcome is an observation for the actual body weight measured.
   */
  public outcomeReference: fhir.Reference[];
  /**
   * This element should NOT be used to describe the activity to be performed - that occurs either within the resource pointed to by activity.detail.reference or in activity.detail.description.
   */
  public progress: fhir.Annotation[];
  /**
   * Standard extension exists ([goal-pertainstogoal](extension-goal-pertainstogoal.html)) that allows goals to be referenced from any of the referenced resources in CarePlan.activity.reference.  
   * The goal should be visible when the resource referenced by CarePlan.activity.reference is viewed indepedently from the CarePlan.  Requests that are pointed to by a CarePlan using this element should *not* point to this CarePlan using the "basedOn" element.  i.e. Requests that are part of a CarePlan are not "based on" the CarePlan.
   */
  public reference?: fhir.Reference|undefined;
  /**
   * A simple summary of a planned activity suitable for a general care plan system (e.g. form driven) that doesn't know about specific resources such as procedure etc.
   */
  public detail?: fhir.CarePlanActivityDetail|undefined;
  /**
   * Default constructor for CarePlanActivity - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<CarePlanActivityArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['outcomeCodeableConcept']) { this.outcomeCodeableConcept = source.outcomeCodeableConcept.map((x) => new fhir.CodeableConcept(x, options)); }
    else { this.outcomeCodeableConcept = []; }
    if (source['outcomeReference']) { this.outcomeReference = source.outcomeReference.map((x) => new fhir.Reference(x, options)); }
    else { this.outcomeReference = []; }
    if (source['progress']) { this.progress = source.progress.map((x) => new fhir.Annotation(x, options)); }
    else { this.progress = []; }
    if (source['reference']) { this.reference = new fhir.Reference(source.reference, options); }
    if (source['detail']) { this.detail = new fhir.CarePlanActivityDetail(source.detail, options); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'CarePlan.activity' }
    iss.push(...this.vOA('outcomeCodeableConcept',exp));
    iss.push(...this.vOA('outcomeReference',exp));
    iss.push(...this.vOA('progress',exp));
    iss.push(...this.vOS('reference',exp));
    iss.push(...this.vOS('detail',exp));
    return iss;
  }
}
/**
 * Valid arguments for the CarePlan type.
 */
export interface CarePlanArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "CarePlan"|undefined;
  /**
   * This records identifiers associated with this care plan that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate (e.g. in CDA documents, or in written / printed documentation).
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * Identifies the protocol, questionnaire, guideline or other specification the care plan should be conducted in accordance with.
   */
  definition?: fhir.ReferenceArgs[]|undefined;
  /**
   * A care plan that is fulfilled in whole or in part by this care plan.
   */
  basedOn?: fhir.ReferenceArgs[]|undefined;
  /**
   * The replacement could be because the initial care plan was immediately rejected (due to an issue) or because the previous care plan was completed, but the need for the action described by the care plan remains ongoing.
   */
  replaces?: fhir.ReferenceArgs[]|undefined;
  /**
   * Each care plan is an independent request, such that having a care plan be part of another care plan can cause issues with cascading statuses.  As such, this element is still being discussed.
   */
  partOf?: fhir.ReferenceArgs[]|undefined;
  /**
   * The unknown code is not to be used to convey other statuses.  The unknown code should be used when one of the statuses applies, but the authoring system doesn't know the current state of the care plan.
   * This element is labeled as a modifier because the status contains the code entered-in-error] that marks the plan as not currently valid.
   */
  status: fhir.FhirCode<CarePlanStatusCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: CarePlan.status
   */
  _status?:fhir.FhirElementArgs;
  /**
   * This element is labeled as a modifier because the intent alters when and how the resource is actually applicable.
   */
  intent: fhir.FhirCode<CarePlanIntentCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: CarePlan.intent
   */
  _intent?:fhir.FhirElementArgs;
  /**
   * There may be multiple axis of categorization and one plan may serve multiple purposes.  In some cases, this may be redundant with references to CarePlan.concern.
   */
  category?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * Human-friendly name for the CarePlan.
   */
  title?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: CarePlan.title
   */
  _title?:fhir.FhirElementArgs;
  /**
   * A description of the scope and nature of the plan.
   */
  description?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: CarePlan.description
   */
  _description?:fhir.FhirElementArgs;
  /**
   * Identifies the patient or group whose intended care is described by the plan.
   */
  subject: fhir.ReferenceArgs|null;
  /**
   * Activities conducted as a result of the care plan may well occur as part of other encounters/episodes.
   */
  context?: fhir.ReferenceArgs|undefined;
  /**
   * Any activities scheduled as part of the plan should be constrained to the specified period regardless of whether the activities are planned within a single encounter/episode or across multiple encounters/episodes (e.g. the longitudinal management of a chronic condition).
   */
  period?: fhir.PeriodArgs|undefined;
  /**
   * Collaborative care plans may have multiple authors.
   */
  author?: fhir.ReferenceArgs[]|undefined;
  /**
   * Identifies all people and organizations who are expected to be involved in the care envisioned by this plan.
   */
  careTeam?: fhir.ReferenceArgs[]|undefined;
  /**
   * Identifies the conditions/problems/concerns/diagnoses/etc. whose management and/or mitigation are handled by this plan.
   */
  addresses?: fhir.ReferenceArgs[]|undefined;
  /**
   * Use "concern" to identify specific conditions addressed by the care plan.
   */
  supportingInfo?: fhir.ReferenceArgs[]|undefined;
  /**
   * Goal can be achieving a particular change or merely maintaining a current state or even slowing a decline.
   */
  goal?: fhir.ReferenceArgs[]|undefined;
  /**
   * Identifies a planned action to occur as part of the plan.  For example, a medication to be used, lab tests to perform, self-monitoring, education, etc.
   */
  activity?: fhir.CarePlanActivityArgs[]|undefined;
  /**
   * General notes about the care plan not covered elsewhere.
   */
  note?: fhir.AnnotationArgs[]|undefined;
}

/**
 * Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions.
 */
export class CarePlan extends fhir.DomainResource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'CarePlan';
  /**
   * Resource Type Name
   */
  public override resourceType: "CarePlan";
  /**
   * This records identifiers associated with this care plan that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate (e.g. in CDA documents, or in written / printed documentation).
   */
  public identifier: fhir.Identifier[];
  /**
   * Identifies the protocol, questionnaire, guideline or other specification the care plan should be conducted in accordance with.
   */
  public definition: fhir.Reference[];
  /**
   * A care plan that is fulfilled in whole or in part by this care plan.
   */
  public basedOn: fhir.Reference[];
  /**
   * The replacement could be because the initial care plan was immediately rejected (due to an issue) or because the previous care plan was completed, but the need for the action described by the care plan remains ongoing.
   */
  public replaces: fhir.Reference[];
  /**
   * Each care plan is an independent request, such that having a care plan be part of another care plan can cause issues with cascading statuses.  As such, this element is still being discussed.
   */
  public partOf: fhir.Reference[];
  /**
   * The unknown code is not to be used to convey other statuses.  The unknown code should be used when one of the statuses applies, but the authoring system doesn't know the current state of the care plan.
   * This element is labeled as a modifier because the status contains the code entered-in-error] that marks the plan as not currently valid.
   */
  public status: fhir.FhirCode<CarePlanStatusCodeType>|null;
  /**
   * This element is labeled as a modifier because the intent alters when and how the resource is actually applicable.
   */
  public intent: fhir.FhirCode<CarePlanIntentCodeType>|null;
  /**
   * There may be multiple axis of categorization and one plan may serve multiple purposes.  In some cases, this may be redundant with references to CarePlan.concern.
   */
  public category: fhir.CodeableConcept[];
  /**
   * Human-friendly name for the CarePlan.
   */
  public title?: fhir.FhirString|undefined;
  /**
   * A description of the scope and nature of the plan.
   */
  public description?: fhir.FhirString|undefined;
  /**
   * Identifies the patient or group whose intended care is described by the plan.
   */
  public subject: fhir.Reference|null;
  /**
   * Activities conducted as a result of the care plan may well occur as part of other encounters/episodes.
   */
  public context?: fhir.Reference|undefined;
  /**
   * Any activities scheduled as part of the plan should be constrained to the specified period regardless of whether the activities are planned within a single encounter/episode or across multiple encounters/episodes (e.g. the longitudinal management of a chronic condition).
   */
  public period?: fhir.Period|undefined;
  /**
   * Collaborative care plans may have multiple authors.
   */
  public author: fhir.Reference[];
  /**
   * Identifies all people and organizations who are expected to be involved in the care envisioned by this plan.
   */
  public careTeam: fhir.Reference[];
  /**
   * Identifies the conditions/problems/concerns/diagnoses/etc. whose management and/or mitigation are handled by this plan.
   */
  public addresses: fhir.Reference[];
  /**
   * Use "concern" to identify specific conditions addressed by the care plan.
   */
  public supportingInfo: fhir.Reference[];
  /**
   * Goal can be achieving a particular change or merely maintaining a current state or even slowing a decline.
   */
  public goal: fhir.Reference[];
  /**
   * Identifies a planned action to occur as part of the plan.  For example, a medication to be used, lab tests to perform, self-monitoring, education, etc.
   */
  public activity: fhir.CarePlanActivity[];
  /**
   * General notes about the care plan not covered elsewhere.
   */
  public note: fhir.Annotation[];
  /**
   * Default constructor for CarePlan - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<CarePlanArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'CarePlan';
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x, options)); }
    else { this.identifier = []; }
    if (source['definition']) { this.definition = source.definition.map((x) => new fhir.Reference(x, options)); }
    else { this.definition = []; }
    if (source['basedOn']) { this.basedOn = source.basedOn.map((x) => new fhir.Reference(x, options)); }
    else { this.basedOn = []; }
    if (source['replaces']) { this.replaces = source.replaces.map((x) => new fhir.Reference(x, options)); }
    else { this.replaces = []; }
    if (source['partOf']) { this.partOf = source.partOf.map((x) => new fhir.Reference(x, options)); }
    else { this.partOf = []; }
    if (source['status'] !== undefined) { this.status = new fhir.FhirCode<CarePlanStatusCodeType>({value: source.status}, options); }
    else { this.status = null; }
    if (source['_status']) {
      if (this.status) { this.status.addExtendedProperties(source._status!); }
      else { this.status = new fhir.FhirCode<CarePlanStatusCodeType>(source._status as Partial<fhir.FhirCode>, options); }
    }
    if (source['intent'] !== undefined) { this.intent = new fhir.FhirCode<CarePlanIntentCodeType>({value: source.intent}, options); }
    else { this.intent = null; }
    if (source['_intent']) {
      if (this.intent) { this.intent.addExtendedProperties(source._intent!); }
      else { this.intent = new fhir.FhirCode<CarePlanIntentCodeType>(source._intent as Partial<fhir.FhirCode>, options); }
    }
    if (source['category']) { this.category = source.category.map((x) => new fhir.CodeableConcept(x, options)); }
    else { this.category = []; }
    if (source['title'] !== undefined) { this.title = new fhir.FhirString({value: source.title}, options); }
    if (source['_title']) {
      if (this.title) { this.title.addExtendedProperties(source._title!); }
      else { this.title = new fhir.FhirString(source._title as Partial<fhir.FhirStringArgs>, options); }
    }
    if (source['description'] !== undefined) { this.description = new fhir.FhirString({value: source.description}, options); }
    if (source['_description']) {
      if (this.description) { this.description.addExtendedProperties(source._description!); }
      else { this.description = new fhir.FhirString(source._description as Partial<fhir.FhirStringArgs>, options); }
    }
    if (source['subject']) { this.subject = new fhir.Reference(source.subject, options); }
    else { this.subject = null; }
    if (source['context']) { this.context = new fhir.Reference(source.context, options); }
    if (source['period']) { this.period = new fhir.Period(source.period, options); }
    if (source['author']) { this.author = source.author.map((x) => new fhir.Reference(x, options)); }
    else { this.author = []; }
    if (source['careTeam']) { this.careTeam = source.careTeam.map((x) => new fhir.Reference(x, options)); }
    else { this.careTeam = []; }
    if (source['addresses']) { this.addresses = source.addresses.map((x) => new fhir.Reference(x, options)); }
    else { this.addresses = []; }
    if (source['supportingInfo']) { this.supportingInfo = source.supportingInfo.map((x) => new fhir.Reference(x, options)); }
    else { this.supportingInfo = []; }
    if (source['goal']) { this.goal = source.goal.map((x) => new fhir.Reference(x, options)); }
    else { this.goal = []; }
    if (source['activity']) { this.activity = source.activity.map((x) => new fhir.CarePlanActivity(x, options)); }
    else { this.activity = []; }
    if (source['note']) { this.note = source.note.map((x) => new fhir.Annotation(x, options)); }
    else { this.note = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'CarePlan' }
    iss.push(...this.vOA('identifier',exp));
    iss.push(...this.vOA('definition',exp));
    iss.push(...this.vOA('basedOn',exp));
    iss.push(...this.vOA('replaces',exp));
    iss.push(...this.vOA('partOf',exp));
    iss.push(...this.vRSV('status',exp,'CarePlanStatus',CarePlanStatusVsValidation,'r'));
    iss.push(...this.vRSV('intent',exp,'CarePlanIntent',CarePlanIntentVsValidation,'r'));
    iss.push(...this.vOA('category',exp));
    iss.push(...this.vOS('title',exp));
    iss.push(...this.vOS('description',exp));
    iss.push(...this.vRS('subject',exp));
    iss.push(...this.vOS('context',exp));
    iss.push(...this.vOS('period',exp));
    iss.push(...this.vOA('author',exp));
    iss.push(...this.vOA('careTeam',exp));
    iss.push(...this.vOA('addresses',exp));
    iss.push(...this.vOA('supportingInfo',exp));
    iss.push(...this.vOA('goal',exp));
    iss.push(...this.vOA('activity',exp));
    iss.push(...this.vOA('note',exp));
    return iss;
  }
}
