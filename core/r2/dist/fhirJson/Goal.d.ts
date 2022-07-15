import * as fhir from '../fhirJson.js';
/**
 * Outcome tracking is a key aspect of care planning.
 */
export interface GoalOutcome extends fhir.BackboneElement {
    /**
     * Details of what's changed (or not changed).
     */
    resultCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * Details of what's changed (or not changed).
     */
    resultReference?: fhir.Reference | undefined;
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
     * Need to allow connection to a wider workflow.
     */
    identifier?: (fhir.Identifier | null)[] | undefined;
    /**
     * Subject is optional to support annonymized reporting.
     */
    subject?: fhir.Reference | undefined;
    /**
     * Goals can be established prior to there being an intention to start pursuing them; e.g. Goals for post-surgical recovery established prior to surgery.
     */
    startDate?: string | undefined;
    /**
     * Extended properties for primitive element: Goal.start[x]
     */
    _startDate?: fhir.FhirElement;
    /**
     * Goals can be established prior to there being an intention to start pursuing them; e.g. Goals for post-surgical recovery established prior to surgery.
     */
    startCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * Identifies when the goal should be evaluated.
     */
    targetDate?: string | undefined;
    /**
     * Extended properties for primitive element: Goal.target[x]
     */
    _targetDate?: fhir.FhirElement;
    /**
     * Identifies when the goal should be evaluated.
     */
    targetQuantity?: fhir.Quantity | undefined;
    /**
     * Allows goals to be filtered and sorted.
     */
    category?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * Without a description of what's trying to be achieved, element has no purpose.
     */
    description: string | null;
    /**
     * Extended properties for primitive element: Goal.description
     */
    _description?: fhir.FhirElement;
    /**
     * Allows measuring outcome and whether goal needs to be further tracked.
     */
    status: 'accepted' | 'achieved' | 'cancelled' | 'in-progress' | 'on-hold' | 'planned' | 'proposed' | 'rejected' | 'sustaining' | null;
    /**
     * Extended properties for primitive element: Goal.status
     */
    _status?: fhir.FhirElement;
    /**
     * Identifies when the current status.  I.e. When initially created, when achieved, when cancelled, etc.
     */
    statusDate?: string | undefined;
    /**
     * Extended properties for primitive element: Goal.statusDate
     */
    _statusDate?: fhir.FhirElement;
    /**
     * Captures the reason for the current status.
     */
    statusReason?: fhir.CodeableConcept | undefined;
    /**
     * Indicates whose goal this is - patient goal, practitioner goal, etc.
     */
    author?: fhir.Reference | undefined;
    /**
     * Used for sorting and presenting goals.
     */
    priority?: fhir.CodeableConcept | undefined;
    /**
     * Allows specific goals to explicitly linked to the concerns they're dealing with - makes the goal more understandable.
     */
    addresses?: (fhir.Reference | null)[] | undefined;
    /**
     * There's a need to capture information about the goal that doesn't actually describe the goal.
     */
    note?: (fhir.Annotation | null)[] | undefined;
    /**
     * Outcome tracking is a key aspect of care planning.
     */
    outcome?: (fhir.GoalOutcome | null)[] | undefined;
}
//# sourceMappingURL=Goal.d.ts.map