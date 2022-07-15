import * as fhir from '../fhir.js';
import { GoalStatusCodeType } from '../fhirValueSets/GoalStatusCodes.js';
/**
 * Valid arguments for the GoalTarget type.
 */
export interface GoalTargetArgs extends fhir.BackboneElementArgs {
    /**
     * The parameter whose value is being tracked, e.g. body weight, blood pressure, or hemoglobin A1c level.
     */
    measure?: fhir.CodeableConceptArgs | undefined;
    /**
     * The target value of the focus to be achieved to signify the fulfillment of the goal, e.g. 150 pounds, 7.0%. Either the high or low or both values of the range can be specified. When a low value is missing, it indicates that the goal is achieved at any focus value at or below the high value. Similarly, if the high value is missing, it indicates that the goal is achieved at any focus value at or above the low value.
     */
    detail?: fhir.Quantity | fhir.Range | fhir.CodeableConcept | undefined;
    /**
     * The target value of the focus to be achieved to signify the fulfillment of the goal, e.g. 150 pounds, 7.0%. Either the high or low or both values of the range can be specified. When a low value is missing, it indicates that the goal is achieved at any focus value at or below the high value. Similarly, if the high value is missing, it indicates that the goal is achieved at any focus value at or above the low value.
     */
    detailQuantity?: fhir.QuantityArgs | undefined;
    /**
     * The target value of the focus to be achieved to signify the fulfillment of the goal, e.g. 150 pounds, 7.0%. Either the high or low or both values of the range can be specified. When a low value is missing, it indicates that the goal is achieved at any focus value at or below the high value. Similarly, if the high value is missing, it indicates that the goal is achieved at any focus value at or above the low value.
     */
    detailRange?: fhir.RangeArgs | undefined;
    /**
     * The target value of the focus to be achieved to signify the fulfillment of the goal, e.g. 150 pounds, 7.0%. Either the high or low or both values of the range can be specified. When a low value is missing, it indicates that the goal is achieved at any focus value at or below the high value. Similarly, if the high value is missing, it indicates that the goal is achieved at any focus value at or above the low value.
     */
    detailCodeableConcept?: fhir.CodeableConceptArgs | undefined;
    /**
     * Indicates either the date or the duration after start by which the goal should be met.
     */
    due?: fhir.FhirDate | fhir.Duration | undefined;
    /**
     * Indicates either the date or the duration after start by which the goal should be met.
     */
    dueDate?: fhir.FhirDate | string | undefined;
    /**
     * Indicates either the date or the duration after start by which the goal should be met.
     */
    dueDuration?: fhir.DurationArgs | undefined;
}
/**
 * Indicates what should be done by when.
 */
export declare class GoalTarget extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The parameter whose value is being tracked, e.g. body weight, blood pressure, or hemoglobin A1c level.
     */
    measure?: fhir.CodeableConcept | undefined;
    /**
     * The target value of the focus to be achieved to signify the fulfillment of the goal, e.g. 150 pounds, 7.0%. Either the high or low or both values of the range can be specified. When a low value is missing, it indicates that the goal is achieved at any focus value at or below the high value. Similarly, if the high value is missing, it indicates that the goal is achieved at any focus value at or above the low value.
     */
    detail?: (fhir.Quantity | fhir.Range | fhir.CodeableConcept) | undefined;
    /**
     * Internal flag to properly serialize choice-type element Goal.target.detail[x]
     */
    protected static readonly _fts_detailIsChoice: true;
    /**
     * Indicates either the date or the duration after start by which the goal should be met.
     */
    due?: (fhir.FhirDate | fhir.Duration) | undefined;
    /**
     * Internal flag to properly serialize choice-type element Goal.target.due[x]
     */
    protected static readonly _fts_dueIsChoice: true;
    /**
     * Default constructor for GoalTarget - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<GoalTargetArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the Goal type.
 */
export interface GoalArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "Goal" | undefined;
    /**
     * This records identifiers associated with this care plan that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate (e.g. in CDA documents, or in written / printed documentation).
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: fhir.FhirCode<GoalStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: Goal.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * Indicates a category the goal falls within.
     */
    category?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Extensions are available to track priorities as established by each participant (i.e. Priority from the patient's perspective, different practitioners' perspectives, family member's perspectives)
     * The ordinal extension on Coding can be used to convey a numerically comparable ranking to priority.  (Keep in mind that different coding systems may use a "low value=important".
     */
    priority?: fhir.CodeableConceptArgs | undefined;
    /**
     * If no code is available, use CodeableConcept.text.
     */
    description: fhir.CodeableConceptArgs | null;
    /**
     * Identifies the patient, group or organization for whom the goal is being established.
     */
    subject?: fhir.ReferenceArgs | undefined;
    /**
     * The date or event after which the goal should begin being pursued.
     */
    start?: fhir.FhirDate | fhir.CodeableConcept | undefined;
    /**
     * The date or event after which the goal should begin being pursued.
     */
    startDate?: fhir.FhirDate | string | undefined;
    /**
     * The date or event after which the goal should begin being pursued.
     */
    startCodeableConcept?: fhir.CodeableConceptArgs | undefined;
    /**
     * Indicates what should be done by when.
     */
    target?: fhir.GoalTargetArgs | undefined;
    /**
     * To see the date for past statuses, query history.
     */
    statusDate?: fhir.FhirDate | string | undefined;
    /**
     * Extended properties for primitive element: Goal.statusDate
     */
    _statusDate?: fhir.FhirElementArgs;
    /**
     * This will typically be captured for statuses such as rejected, on-hold or cancelled, but could be present for others.
     */
    statusReason?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Goal.statusReason
     */
    _statusReason?: fhir.FhirElementArgs;
    /**
     * This is the individual reponsible for establishing the goal, not necessarily who recorded it.  (For that, use the Provenance resource.).
     */
    expressedBy?: fhir.ReferenceArgs | undefined;
    /**
     * The identified conditions and other health record elements that are intended to be addressed by the goal.
     */
    addresses?: fhir.ReferenceArgs[] | undefined;
    /**
     * May be used for progress notes, concerns or other related information that doesn't actually describe the goal itself.
     */
    note?: fhir.AnnotationArgs[] | undefined;
    /**
     * Note that this should not duplicate the goal status.
     */
    outcomeCode?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * The goal outcome is independent of the outcome of the related activities.  For example, if the Goal is to achieve a target body weight of 150 lb and a care plan activity is defined to diet, then the care plan’s activity outcome could be calories consumed whereas goal outcome is an observation for the actual body weight measured.
     */
    outcomeReference?: fhir.ReferenceArgs[] | undefined;
}
/**
 * Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc.
 */
export declare class Goal extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "Goal";
    /**
     * This records identifiers associated with this care plan that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate (e.g. in CDA documents, or in written / printed documentation).
     */
    identifier: fhir.Identifier[];
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: fhir.FhirCode<GoalStatusCodeType> | null;
    /**
     * Indicates a category the goal falls within.
     */
    category: fhir.CodeableConcept[];
    /**
     * Extensions are available to track priorities as established by each participant (i.e. Priority from the patient's perspective, different practitioners' perspectives, family member's perspectives)
     * The ordinal extension on Coding can be used to convey a numerically comparable ranking to priority.  (Keep in mind that different coding systems may use a "low value=important".
     */
    priority?: fhir.CodeableConcept | undefined;
    /**
     * If no code is available, use CodeableConcept.text.
     */
    description: fhir.CodeableConcept | null;
    /**
     * Identifies the patient, group or organization for whom the goal is being established.
     */
    subject?: fhir.Reference | undefined;
    /**
     * The date or event after which the goal should begin being pursued.
     */
    start?: (fhir.FhirDate | fhir.CodeableConcept) | undefined;
    /**
     * Internal flag to properly serialize choice-type element Goal.start[x]
     */
    protected static readonly _fts_startIsChoice: true;
    /**
     * Indicates what should be done by when.
     */
    target?: fhir.GoalTarget | undefined;
    /**
     * To see the date for past statuses, query history.
     */
    statusDate?: fhir.FhirDate | undefined;
    /**
     * This will typically be captured for statuses such as rejected, on-hold or cancelled, but could be present for others.
     */
    statusReason?: fhir.FhirString | undefined;
    /**
     * This is the individual reponsible for establishing the goal, not necessarily who recorded it.  (For that, use the Provenance resource.).
     */
    expressedBy?: fhir.Reference | undefined;
    /**
     * The identified conditions and other health record elements that are intended to be addressed by the goal.
     */
    addresses: fhir.Reference[];
    /**
     * May be used for progress notes, concerns or other related information that doesn't actually describe the goal itself.
     */
    note: fhir.Annotation[];
    /**
     * Note that this should not duplicate the goal status.
     */
    outcomeCode: fhir.CodeableConcept[];
    /**
     * The goal outcome is independent of the outcome of the related activities.  For example, if the Goal is to achieve a target body weight of 150 lb and a care plan activity is defined to diet, then the care plan’s activity outcome could be calories consumed whereas goal outcome is an observation for the actual body weight measured.
     */
    outcomeReference: fhir.Reference[];
    /**
     * Default constructor for Goal - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<GoalArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=Goal.d.ts.map