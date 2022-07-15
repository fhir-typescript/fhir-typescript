import * as fhir from '../fhirJson.js';
/**
 * Limited to 'real' people rather than equipment.
 */
export interface ProcedurePerformer extends fhir.BackboneElement {
    /**
     * The practitioner who was involved in the procedure.
     */
    actor?: fhir.Reference | undefined;
    /**
     * For example: surgeon, anaethetist, endoscopist.
     */
    role?: fhir.CodeableConcept | undefined;
}
/**
 * A device that is implanted, removed or otherwise manipulated (calibration, battery replacement, fitting a prosthesis, attaching a wound-vac, etc.) as a focal portion of the Procedure.
 */
export interface ProcedureFocalDevice extends fhir.BackboneElement {
    /**
     * The kind of change that happened to the device during the procedure.
     */
    action?: fhir.CodeableConcept | undefined;
    /**
     * The device that was manipulated (changed) during the procedure.
     */
    manipulated: fhir.Reference | null;
}
/**
 * An action that is or was performed on a patient. This can be a physical intervention like an operation, or less invasive like counseling or hypnotherapy.
 */
export interface Procedure extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "Procedure" | null;
    /**
     * Need to allow connection to a wider workflow.
     */
    identifier?: (fhir.Identifier | null)[] | undefined;
    /**
     * The person, animal or group on which the procedure was performed.
     */
    subject: fhir.Reference | null;
    /**
     * A code specifying the state of the procedure. Generally this will be in-progress or completed state.
     */
    status: 'aborted' | 'completed' | 'entered-in-error' | 'in-progress' | null;
    /**
     * Extended properties for primitive element: Procedure.status
     */
    _status?: fhir.FhirElement;
    /**
     * A code that classifies the procedure for searching, sorting and display purposes (e.g. "Surgical Procedure").
     */
    category?: fhir.CodeableConcept | undefined;
    /**
     * The specific procedure that is performed. Use text if the exact nature of the procedure cannot be coded (e.g. "Laparoscopic Appendectomy").
     */
    code: fhir.CodeableConcept | null;
    /**
     * Set this to true if the record is saying that the procedure was NOT performed.
     */
    notPerformed?: boolean | undefined;
    /**
     * Extended properties for primitive element: Procedure.notPerformed
     */
    _notPerformed?: fhir.FhirElement;
    /**
     * A code indicating why the procedure was not performed.
     */
    reasonNotPerformed?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * Detailed and structured anatomical location information. Multiple locations are allowed - e.g. multiple punch biopsies of a lesion.
     */
    bodySite?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * The reason why the procedure was performed. This may be due to a Condition, may be coded entity of some type, or may simply be present as text.
     */
    reasonCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * The reason why the procedure was performed. This may be due to a Condition, may be coded entity of some type, or may simply be present as text.
     */
    reasonReference?: fhir.Reference | undefined;
    /**
     * Limited to 'real' people rather than equipment.
     */
    performer?: (fhir.ProcedurePerformer | null)[] | undefined;
    /**
     * The date(time)/period over which the procedure was performed. Allows a period to support complex procedures that span more than one date, and also allows for the length of the procedure to be captured.
     */
    performedDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: Procedure.performed[x]
     */
    _performedDateTime?: fhir.FhirElement;
    /**
     * The date(time)/period over which the procedure was performed. Allows a period to support complex procedures that span more than one date, and also allows for the length of the procedure to be captured.
     */
    performedPeriod?: fhir.Period | undefined;
    /**
     * The encounter during which the procedure was performed.
     */
    encounter?: fhir.Reference | undefined;
    /**
     * Ties a procedure to where the records are likely kept.
     */
    location?: fhir.Reference | undefined;
    /**
     * The outcome of the procedure - did it resolve reasons for the procedure being performed?
     */
    outcome?: fhir.CodeableConcept | undefined;
    /**
     * This could be a histology result, pathology report, surgical report, etc..
     */
    report?: (fhir.Reference | null)[] | undefined;
    /**
     * Any complications that occurred during the procedure, or in the immediate post-performance period. These are generally tracked separately from the notes, which will typically describe the procedure itself rather than any 'post procedure' issues.
     */
    complication?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * If the procedure required specific follow up - e.g. removal of sutures. The followup may be represented as a simple note, or could potentially be more complex in which case the CarePlan resource can be used.
     */
    followUp?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * A reference to a resource that contains details of the request for this procedure.
     */
    request?: fhir.Reference | undefined;
    /**
     * Any other notes about the procedure.  E.g. the operative notes.
     */
    notes?: (fhir.Annotation | null)[] | undefined;
    /**
     * A device that is implanted, removed or otherwise manipulated (calibration, battery replacement, fitting a prosthesis, attaching a wound-vac, etc.) as a focal portion of the Procedure.
     */
    focalDevice?: (fhir.ProcedureFocalDevice | null)[] | undefined;
    /**
     * Used for tracking contamination, etc.
     */
    used?: (fhir.Reference | null)[] | undefined;
}
//# sourceMappingURL=Procedure.d.ts.map