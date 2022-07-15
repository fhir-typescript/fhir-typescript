import * as fhir from '../fhirJson.js';
/**
 * Indicates what should be done by when.
 */
export interface GoalTarget extends fhir.BackboneElement {
    /**
     * The parameter whose value is being tracked, e.g. body weight, blood pressure, or hemoglobin A1c level.
     */
    measure?: fhir.CodeableConcept | undefined;
    /**
     * The target value of the focus to be achieved to signify the fulfillment of the goal, e.g. 150 pounds, 7.0%. Either the high or low or both values of the range can be specified. When a low value is missing, it indicates that the goal is achieved at any focus value at or below the high value. Similarly, if the high value is missing, it indicates that the goal is achieved at any focus value at or above the low value.
     */
    detailQuantity?: fhir.Quantity | undefined;
    /**
     * The target value of the focus to be achieved to signify the fulfillment of the goal, e.g. 150 pounds, 7.0%. Either the high or low or both values of the range can be specified. When a low value is missing, it indicates that the goal is achieved at any focus value at or below the high value. Similarly, if the high value is missing, it indicates that the goal is achieved at any focus value at or above the low value.
     */
    detailRange?: fhir.Range | undefined;
    /**
     * The target value of the focus to be achieved to signify the fulfillment of the goal, e.g. 150 pounds, 7.0%. Either the high or low or both values of the range can be specified. When a low value is missing, it indicates that the goal is achieved at any focus value at or below the high value. Similarly, if the high value is missing, it indicates that the goal is achieved at any focus value at or above the low value.
     */
    detailCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * Indicates either the date or the duration after start by which the goal should be met.
     */
    dueDate?: string | undefined;
    /**
     * Extended properties for primitive element: Goal.target.due[x]
     */
    _dueDate?: fhir.FhirElement;
    /**
     * Indicates either the date or the duration after start by which the goal should be met.
     */
    dueDuration?: fhir.Duration | undefined;
}
/**
 * Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc.
 */
export interface Goal extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "Goal" | null;
    /**
     * This records identifiers associated with this care plan that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate (e.g. in CDA documents, or in written / printed documentation).
     */
    identifier?: (fhir.Identifier | null)[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: 'accepted' | 'achieved' | 'ahead-of-target' | 'behind-target' | 'cancelled' | 'entered-in-error' | 'in-progress' | 'on-hold' | 'on-target' | 'planned' | 'proposed' | 'rejected' | 'sustaining' | null;
    /**
     * Extended properties for primitive element: Goal.status
     */
    _status?: fhir.FhirElement;
    /**
     * Indicates a category the goal falls within.
     */
    category?: (fhir.CodeableConcept | null)[] | undefined;
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
    startDate?: string | undefined;
    /**
     * Extended properties for primitive element: Goal.start[x]
     */
    _startDate?: fhir.FhirElement;
    /**
     * The date or event after which the goal should begin being pursued.
     */
    startCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * Indicates what should be done by when.
     */
    target?: fhir.GoalTarget | undefined;
    /**
     * To see the date for past statuses, query history.
     */
    statusDate?: string | undefined;
    /**
     * Extended properties for primitive element: Goal.statusDate
     */
    _statusDate?: fhir.FhirElement;
    /**
     * This will typically be captured for statuses such as rejected, on-hold or cancelled, but could be present for others.
     */
    statusReason?: string | undefined;
    /**
     * Extended properties for primitive element: Goal.statusReason
     */
    _statusReason?: fhir.FhirElement;
    /**
     * This is the individual reponsible for establishing the goal, not necessarily who recorded it.  (For that, use the Provenance resource.).
     */
    expressedBy?: fhir.Reference | undefined;
    /**
     * The identified conditions and other health record elements that are intended to be addressed by the goal.
     */
    addresses?: (fhir.Reference | null)[] | undefined;
    /**
     * May be used for progress notes, concerns or other related information that doesn't actually describe the goal itself.
     */
    note?: (fhir.Annotation | null)[] | undefined;
    /**
     * Note that this should not duplicate the goal status.
     */
    outcomeCode?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * The goal outcome is independent of the outcome of the related activities.  For example, if the Goal is to achieve a target body weight of 150 lb and a care plan activity is defined to diet, then the care plan’s activity outcome could be calories consumed whereas goal outcome is an observation for the actual body weight measured.
     */
    outcomeReference?: (fhir.Reference | null)[] | undefined;
}
//# sourceMappingURL=Goal.d.ts.map