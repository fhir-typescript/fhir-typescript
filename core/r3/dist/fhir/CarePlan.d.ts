import * as fhir from '../fhir.js';
import { CarePlanActivityStatusCodeType } from '../fhirValueSets/CarePlanActivityStatusCodes.js';
import { CarePlanStatusCodeType } from '../fhirValueSets/CarePlanStatusCodes.js';
import { CarePlanIntentCodeType } from '../fhirValueSets/CarePlanIntentCodes.js';
/**
 * Valid arguments for the CarePlanActivityDetail type.
 */
export interface CarePlanActivityDetailArgs extends fhir.BackboneElementArgs {
    /**
     * High-level categorization of the type of activity in a care plan.
     */
    category?: fhir.CodeableConceptArgs | undefined;
    /**
     * Identifies the protocol, questionnaire, guideline or other specification the planned activity should be conducted in accordance with.
     */
    definition?: fhir.ReferenceArgs | undefined;
    /**
     * Tends to be less relevant for activities involving particular products.  Codes should not convey negation - use "prohibited" instead.
     */
    code?: fhir.CodeableConceptArgs | undefined;
    /**
     * This could be a diagnosis code.  If a full condition record exists or additional detail is needed, use reasonCondition instead.
     */
    reasonCode?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Conditions can be identified at the activity level that are not identified as reasons for the overall plan.
     */
    reasonReference?: fhir.ReferenceArgs[] | undefined;
    /**
     * Internal reference that identifies the goals that this activity is intended to contribute towards meeting.
     */
    goal?: fhir.ReferenceArgs[] | undefined;
    /**
     * Some aspects of status can be inferred based on the resources linked in actionTaken.  Note that "status" is only as current as the plan was most recently updated.
     * The unknown code is not to be used to convey other statuses.  The unknown code should be used when one of the statuses applies, but the authoring system doesn't know the current state of the activity.
     */
    status: fhir.FhirCode<CarePlanActivityStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: CarePlan.activity.detail.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * Will generally not be present if status is "complete".  Be sure to prompt to update this (or at least remove the existing value) if the status is changed.
     */
    statusReason?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: CarePlan.activity.detail.statusReason
     */
    _statusReason?: fhir.FhirElementArgs;
    /**
     * This element is labeled as a modifier because it marks an activity as an activity that is not to be performed.
     */
    prohibited?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: CarePlan.activity.detail.prohibited
     */
    _prohibited?: fhir.FhirElementArgs;
    /**
     * The period, timing or frequency upon which the described activity is to occur.
     */
    scheduled?: fhir.Timing | fhir.Period | fhir.FhirString | undefined;
    /**
     * The period, timing or frequency upon which the described activity is to occur.
     */
    scheduledTiming?: fhir.TimingArgs | undefined;
    /**
     * The period, timing or frequency upon which the described activity is to occur.
     */
    scheduledPeriod?: fhir.PeriodArgs | undefined;
    /**
     * The period, timing or frequency upon which the described activity is to occur.
     */
    scheduledString?: fhir.FhirString | string | undefined;
    /**
     * May reference a specific clinical location or may identify a type of location.
     */
    location?: fhir.ReferenceArgs | undefined;
    /**
     * A performer MAY also be a participant in the care plan.
     */
    performer?: fhir.ReferenceArgs[] | undefined;
    /**
     * Identifies the food, drug or other product to be consumed or supplied in the activity.
     */
    product?: fhir.CodeableConcept | fhir.Reference | undefined;
    /**
     * Identifies the food, drug or other product to be consumed or supplied in the activity.
     */
    productCodeableConcept?: fhir.CodeableConceptArgs | undefined;
    /**
     * Identifies the food, drug or other product to be consumed or supplied in the activity.
     */
    productReference?: fhir.ReferenceArgs | undefined;
    /**
     * Identifies the quantity expected to be consumed in a given day.
     */
    dailyAmount?: fhir.QuantityArgs | undefined;
    /**
     * Identifies the quantity expected to be supplied, administered or consumed by the subject.
     */
    quantity?: fhir.QuantityArgs | undefined;
    /**
     * This provides a textual description of constraints on the intended activity occurrence, including relation to other activities.  It may also include objectives, pre-conditions and end-conditions.  Finally, it may convey specifics about the activity such as body site, method, route, etc.
     */
    description?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: CarePlan.activity.detail.description
     */
    _description?: fhir.FhirElementArgs;
}
/**
 * A simple summary of a planned activity suitable for a general care plan system (e.g. form driven) that doesn't know about specific resources such as procedure etc.
 */
export declare class CarePlanActivityDetail extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * High-level categorization of the type of activity in a care plan.
     */
    category?: fhir.CodeableConcept | undefined;
    /**
     * Identifies the protocol, questionnaire, guideline or other specification the planned activity should be conducted in accordance with.
     */
    definition?: fhir.Reference | undefined;
    /**
     * Tends to be less relevant for activities involving particular products.  Codes should not convey negation - use "prohibited" instead.
     */
    code?: fhir.CodeableConcept | undefined;
    /**
     * This could be a diagnosis code.  If a full condition record exists or additional detail is needed, use reasonCondition instead.
     */
    reasonCode: fhir.CodeableConcept[];
    /**
     * Conditions can be identified at the activity level that are not identified as reasons for the overall plan.
     */
    reasonReference: fhir.Reference[];
    /**
     * Internal reference that identifies the goals that this activity is intended to contribute towards meeting.
     */
    goal: fhir.Reference[];
    /**
     * Some aspects of status can be inferred based on the resources linked in actionTaken.  Note that "status" is only as current as the plan was most recently updated.
     * The unknown code is not to be used to convey other statuses.  The unknown code should be used when one of the statuses applies, but the authoring system doesn't know the current state of the activity.
     */
    status: fhir.FhirCode<CarePlanActivityStatusCodeType> | null;
    /**
     * Will generally not be present if status is "complete".  Be sure to prompt to update this (or at least remove the existing value) if the status is changed.
     */
    statusReason?: fhir.FhirString | undefined;
    /**
     * This element is labeled as a modifier because it marks an activity as an activity that is not to be performed.
     */
    prohibited?: fhir.FhirBoolean | undefined;
    /**
     * The period, timing or frequency upon which the described activity is to occur.
     */
    scheduled?: (fhir.Timing | fhir.Period | fhir.FhirString) | undefined;
    /**
     * Internal flag to properly serialize choice-type element CarePlan.activity.detail.scheduled[x]
     */
    protected static readonly _fts_scheduledIsChoice: true;
    /**
     * May reference a specific clinical location or may identify a type of location.
     */
    location?: fhir.Reference | undefined;
    /**
     * A performer MAY also be a participant in the care plan.
     */
    performer: fhir.Reference[];
    /**
     * Identifies the food, drug or other product to be consumed or supplied in the activity.
     */
    product?: (fhir.CodeableConcept | fhir.Reference) | undefined;
    /**
     * Internal flag to properly serialize choice-type element CarePlan.activity.detail.product[x]
     */
    protected static readonly _fts_productIsChoice: true;
    /**
     * Identifies the quantity expected to be consumed in a given day.
     */
    dailyAmount?: fhir.Quantity | undefined;
    /**
     * Identifies the quantity expected to be supplied, administered or consumed by the subject.
     */
    quantity?: fhir.Quantity | undefined;
    /**
     * This provides a textual description of constraints on the intended activity occurrence, including relation to other activities.  It may also include objectives, pre-conditions and end-conditions.  Finally, it may convey specifics about the activity such as body site, method, route, etc.
     */
    description?: fhir.FhirString | undefined;
    /**
     * Default constructor for CarePlanActivityDetail - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<CarePlanActivityDetailArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the CarePlanActivity type.
 */
export interface CarePlanActivityArgs extends fhir.BackboneElementArgs {
    /**
     * Note that this should not duplicate the activity status (e.g. completed or in progress).
     */
    outcomeCodeableConcept?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * The activity outcome is independent of the outcome of the related goal(s).  For example, if the goal is to achieve a target body weight of 150 lb and an activity is defined to diet, then the activity outcome could be calories consumed whereas the goal outcome is an observation for the actual body weight measured.
     */
    outcomeReference?: fhir.ReferenceArgs[] | undefined;
    /**
     * This element should NOT be used to describe the activity to be performed - that occurs either within the resource pointed to by activity.detail.reference or in activity.detail.description.
     */
    progress?: fhir.AnnotationArgs[] | undefined;
    /**
     * Standard extension exists ([goal-pertainstogoal](extension-goal-pertainstogoal.html)) that allows goals to be referenced from any of the referenced resources in CarePlan.activity.reference.
     * The goal should be visible when the resource referenced by CarePlan.activity.reference is viewed indepedently from the CarePlan.  Requests that are pointed to by a CarePlan using this element should *not* point to this CarePlan using the "basedOn" element.  i.e. Requests that are part of a CarePlan are not "based on" the CarePlan.
     */
    reference?: fhir.ReferenceArgs | undefined;
    /**
     * A simple summary of a planned activity suitable for a general care plan system (e.g. form driven) that doesn't know about specific resources such as procedure etc.
     */
    detail?: fhir.CarePlanActivityDetailArgs | undefined;
}
/**
 * Identifies a planned action to occur as part of the plan.  For example, a medication to be used, lab tests to perform, self-monitoring, education, etc.
 */
export declare class CarePlanActivity extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Note that this should not duplicate the activity status (e.g. completed or in progress).
     */
    outcomeCodeableConcept: fhir.CodeableConcept[];
    /**
     * The activity outcome is independent of the outcome of the related goal(s).  For example, if the goal is to achieve a target body weight of 150 lb and an activity is defined to diet, then the activity outcome could be calories consumed whereas the goal outcome is an observation for the actual body weight measured.
     */
    outcomeReference: fhir.Reference[];
    /**
     * This element should NOT be used to describe the activity to be performed - that occurs either within the resource pointed to by activity.detail.reference or in activity.detail.description.
     */
    progress: fhir.Annotation[];
    /**
     * Standard extension exists ([goal-pertainstogoal](extension-goal-pertainstogoal.html)) that allows goals to be referenced from any of the referenced resources in CarePlan.activity.reference.
     * The goal should be visible when the resource referenced by CarePlan.activity.reference is viewed indepedently from the CarePlan.  Requests that are pointed to by a CarePlan using this element should *not* point to this CarePlan using the "basedOn" element.  i.e. Requests that are part of a CarePlan are not "based on" the CarePlan.
     */
    reference?: fhir.Reference | undefined;
    /**
     * A simple summary of a planned activity suitable for a general care plan system (e.g. form driven) that doesn't know about specific resources such as procedure etc.
     */
    detail?: fhir.CarePlanActivityDetail | undefined;
    /**
     * Default constructor for CarePlanActivity - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<CarePlanActivityArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the CarePlan type.
 */
export interface CarePlanArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "CarePlan" | undefined;
    /**
     * This records identifiers associated with this care plan that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate (e.g. in CDA documents, or in written / printed documentation).
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * Identifies the protocol, questionnaire, guideline or other specification the care plan should be conducted in accordance with.
     */
    definition?: fhir.ReferenceArgs[] | undefined;
    /**
     * A care plan that is fulfilled in whole or in part by this care plan.
     */
    basedOn?: fhir.ReferenceArgs[] | undefined;
    /**
     * The replacement could be because the initial care plan was immediately rejected (due to an issue) or because the previous care plan was completed, but the need for the action described by the care plan remains ongoing.
     */
    replaces?: fhir.ReferenceArgs[] | undefined;
    /**
     * Each care plan is an independent request, such that having a care plan be part of another care plan can cause issues with cascading statuses.  As such, this element is still being discussed.
     */
    partOf?: fhir.ReferenceArgs[] | undefined;
    /**
     * The unknown code is not to be used to convey other statuses.  The unknown code should be used when one of the statuses applies, but the authoring system doesn't know the current state of the care plan.
     * This element is labeled as a modifier because the status contains the code entered-in-error] that marks the plan as not currently valid.
     */
    status: fhir.FhirCode<CarePlanStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: CarePlan.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * This element is labeled as a modifier because the intent alters when and how the resource is actually applicable.
     */
    intent: fhir.FhirCode<CarePlanIntentCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: CarePlan.intent
     */
    _intent?: fhir.FhirElementArgs;
    /**
     * There may be multiple axis of categorization and one plan may serve multiple purposes.  In some cases, this may be redundant with references to CarePlan.concern.
     */
    category?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Human-friendly name for the CarePlan.
     */
    title?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: CarePlan.title
     */
    _title?: fhir.FhirElementArgs;
    /**
     * A description of the scope and nature of the plan.
     */
    description?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: CarePlan.description
     */
    _description?: fhir.FhirElementArgs;
    /**
     * Identifies the patient or group whose intended care is described by the plan.
     */
    subject: fhir.ReferenceArgs | null;
    /**
     * Activities conducted as a result of the care plan may well occur as part of other encounters/episodes.
     */
    context?: fhir.ReferenceArgs | undefined;
    /**
     * Any activities scheduled as part of the plan should be constrained to the specified period regardless of whether the activities are planned within a single encounter/episode or across multiple encounters/episodes (e.g. the longitudinal management of a chronic condition).
     */
    period?: fhir.PeriodArgs | undefined;
    /**
     * Collaborative care plans may have multiple authors.
     */
    author?: fhir.ReferenceArgs[] | undefined;
    /**
     * Identifies all people and organizations who are expected to be involved in the care envisioned by this plan.
     */
    careTeam?: fhir.ReferenceArgs[] | undefined;
    /**
     * Identifies the conditions/problems/concerns/diagnoses/etc. whose management and/or mitigation are handled by this plan.
     */
    addresses?: fhir.ReferenceArgs[] | undefined;
    /**
     * Use "concern" to identify specific conditions addressed by the care plan.
     */
    supportingInfo?: fhir.ReferenceArgs[] | undefined;
    /**
     * Goal can be achieving a particular change or merely maintaining a current state or even slowing a decline.
     */
    goal?: fhir.ReferenceArgs[] | undefined;
    /**
     * Identifies a planned action to occur as part of the plan.  For example, a medication to be used, lab tests to perform, self-monitoring, education, etc.
     */
    activity?: fhir.CarePlanActivityArgs[] | undefined;
    /**
     * General notes about the care plan not covered elsewhere.
     */
    note?: fhir.AnnotationArgs[] | undefined;
}
/**
 * Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions.
 */
export declare class CarePlan extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "CarePlan";
    /**
     * This records identifiers associated with this care plan that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate (e.g. in CDA documents, or in written / printed documentation).
     */
    identifier: fhir.Identifier[];
    /**
     * Identifies the protocol, questionnaire, guideline or other specification the care plan should be conducted in accordance with.
     */
    definition: fhir.Reference[];
    /**
     * A care plan that is fulfilled in whole or in part by this care plan.
     */
    basedOn: fhir.Reference[];
    /**
     * The replacement could be because the initial care plan was immediately rejected (due to an issue) or because the previous care plan was completed, but the need for the action described by the care plan remains ongoing.
     */
    replaces: fhir.Reference[];
    /**
     * Each care plan is an independent request, such that having a care plan be part of another care plan can cause issues with cascading statuses.  As such, this element is still being discussed.
     */
    partOf: fhir.Reference[];
    /**
     * The unknown code is not to be used to convey other statuses.  The unknown code should be used when one of the statuses applies, but the authoring system doesn't know the current state of the care plan.
     * This element is labeled as a modifier because the status contains the code entered-in-error] that marks the plan as not currently valid.
     */
    status: fhir.FhirCode<CarePlanStatusCodeType> | null;
    /**
     * This element is labeled as a modifier because the intent alters when and how the resource is actually applicable.
     */
    intent: fhir.FhirCode<CarePlanIntentCodeType> | null;
    /**
     * There may be multiple axis of categorization and one plan may serve multiple purposes.  In some cases, this may be redundant with references to CarePlan.concern.
     */
    category: fhir.CodeableConcept[];
    /**
     * Human-friendly name for the CarePlan.
     */
    title?: fhir.FhirString | undefined;
    /**
     * A description of the scope and nature of the plan.
     */
    description?: fhir.FhirString | undefined;
    /**
     * Identifies the patient or group whose intended care is described by the plan.
     */
    subject: fhir.Reference | null;
    /**
     * Activities conducted as a result of the care plan may well occur as part of other encounters/episodes.
     */
    context?: fhir.Reference | undefined;
    /**
     * Any activities scheduled as part of the plan should be constrained to the specified period regardless of whether the activities are planned within a single encounter/episode or across multiple encounters/episodes (e.g. the longitudinal management of a chronic condition).
     */
    period?: fhir.Period | undefined;
    /**
     * Collaborative care plans may have multiple authors.
     */
    author: fhir.Reference[];
    /**
     * Identifies all people and organizations who are expected to be involved in the care envisioned by this plan.
     */
    careTeam: fhir.Reference[];
    /**
     * Identifies the conditions/problems/concerns/diagnoses/etc. whose management and/or mitigation are handled by this plan.
     */
    addresses: fhir.Reference[];
    /**
     * Use "concern" to identify specific conditions addressed by the care plan.
     */
    supportingInfo: fhir.Reference[];
    /**
     * Goal can be achieving a particular change or merely maintaining a current state or even slowing a decline.
     */
    goal: fhir.Reference[];
    /**
     * Identifies a planned action to occur as part of the plan.  For example, a medication to be used, lab tests to perform, self-monitoring, education, etc.
     */
    activity: fhir.CarePlanActivity[];
    /**
     * General notes about the care plan not covered elsewhere.
     */
    note: fhir.Annotation[];
    /**
     * Default constructor for CarePlan - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<CarePlanArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=CarePlan.d.ts.map