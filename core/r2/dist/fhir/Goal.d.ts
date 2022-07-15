import * as fhir from '../fhir.js';
import { GoalStatusCodeType } from '../fhirValueSets/GoalStatusCodes.js';
/**
 * Valid arguments for the GoalOutcome type.
 */
export interface GoalOutcomeArgs extends fhir.BackboneElementArgs {
    /**
     * Details of what's changed (or not changed).
     */
    result?: fhir.CodeableConcept | fhir.Reference | undefined;
    /**
     * Details of what's changed (or not changed).
     */
    resultCodeableConcept?: fhir.CodeableConceptArgs | undefined;
    /**
     * Details of what's changed (or not changed).
     */
    resultReference?: fhir.ReferenceArgs | undefined;
}
/**
 * Outcome tracking is a key aspect of care planning.
 */
export declare class GoalOutcome extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Details of what's changed (or not changed).
     */
    result?: (fhir.CodeableConcept | fhir.Reference) | undefined;
    /**
     * Internal flag to properly serialize choice-type element Goal.outcome.result[x]
     */
    protected static readonly _fts_resultIsChoice: true;
    /**
     * Default constructor for GoalOutcome - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<GoalOutcomeArgs>, options?: fhir.FhirConstructorOptions);
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
     * Need to allow connection to a wider workflow.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * Subject is optional to support annonymized reporting.
     */
    subject?: fhir.ReferenceArgs | undefined;
    /**
     * Goals can be established prior to there being an intention to start pursuing them; e.g. Goals for post-surgical recovery established prior to surgery.
     */
    start?: fhir.FhirDate | fhir.CodeableConcept | undefined;
    /**
     * Goals can be established prior to there being an intention to start pursuing them; e.g. Goals for post-surgical recovery established prior to surgery.
     */
    startDate?: fhir.FhirDate | string | undefined;
    /**
     * Goals can be established prior to there being an intention to start pursuing them; e.g. Goals for post-surgical recovery established prior to surgery.
     */
    startCodeableConcept?: fhir.CodeableConceptArgs | undefined;
    /**
     * Identifies when the goal should be evaluated.
     */
    target?: fhir.FhirDate | fhir.Quantity | undefined;
    /**
     * Identifies when the goal should be evaluated.
     */
    targetDate?: fhir.FhirDate | string | undefined;
    /**
     * Identifies when the goal should be evaluated.
     */
    targetQuantity?: fhir.QuantityArgs | undefined;
    /**
     * Allows goals to be filtered and sorted.
     */
    category?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Without a description of what's trying to be achieved, element has no purpose.
     */
    description: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Goal.description
     */
    _description?: fhir.FhirElementArgs;
    /**
     * Allows measuring outcome and whether goal needs to be further tracked.
     */
    status: fhir.FhirCode<GoalStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: Goal.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * Identifies when the current status.  I.e. When initially created, when achieved, when cancelled, etc.
     */
    statusDate?: fhir.FhirDate | string | undefined;
    /**
     * Extended properties for primitive element: Goal.statusDate
     */
    _statusDate?: fhir.FhirElementArgs;
    /**
     * Captures the reason for the current status.
     */
    statusReason?: fhir.CodeableConceptArgs | undefined;
    /**
     * Indicates whose goal this is - patient goal, practitioner goal, etc.
     */
    author?: fhir.ReferenceArgs | undefined;
    /**
     * Used for sorting and presenting goals.
     */
    priority?: fhir.CodeableConceptArgs | undefined;
    /**
     * Allows specific goals to explicitly linked to the concerns they're dealing with - makes the goal more understandable.
     */
    addresses?: fhir.ReferenceArgs[] | undefined;
    /**
     * There's a need to capture information about the goal that doesn't actually describe the goal.
     */
    note?: fhir.AnnotationArgs[] | undefined;
    /**
     * Outcome tracking is a key aspect of care planning.
     */
    outcome?: fhir.GoalOutcomeArgs[] | undefined;
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
     * Need to allow connection to a wider workflow.
     */
    identifier: fhir.Identifier[];
    /**
     * Subject is optional to support annonymized reporting.
     */
    subject?: fhir.Reference | undefined;
    /**
     * Goals can be established prior to there being an intention to start pursuing them; e.g. Goals for post-surgical recovery established prior to surgery.
     */
    start?: (fhir.FhirDate | fhir.CodeableConcept) | undefined;
    /**
     * Internal flag to properly serialize choice-type element Goal.start[x]
     */
    protected static readonly _fts_startIsChoice: true;
    /**
     * Identifies when the goal should be evaluated.
     */
    target?: (fhir.FhirDate | fhir.Quantity) | undefined;
    /**
     * Internal flag to properly serialize choice-type element Goal.target[x]
     */
    protected static readonly _fts_targetIsChoice: true;
    /**
     * Allows goals to be filtered and sorted.
     */
    category: fhir.CodeableConcept[];
    /**
     * Without a description of what's trying to be achieved, element has no purpose.
     */
    description: fhir.FhirString | null;
    /**
     * Allows measuring outcome and whether goal needs to be further tracked.
     */
    status: fhir.FhirCode<GoalStatusCodeType> | null;
    /**
     * Identifies when the current status.  I.e. When initially created, when achieved, when cancelled, etc.
     */
    statusDate?: fhir.FhirDate | undefined;
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
    addresses: fhir.Reference[];
    /**
     * There's a need to capture information about the goal that doesn't actually describe the goal.
     */
    note: fhir.Annotation[];
    /**
     * Outcome tracking is a key aspect of care planning.
     */
    outcome: fhir.GoalOutcome[];
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