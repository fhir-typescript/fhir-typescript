import * as fhir from '../fhirJson.js';
/**
 * Limited to 'real' people rather than equipment.
 */
export interface ProcedurePerformer extends fhir.BackboneElement {
    /**
     * For example: surgeon, anaethetist, endoscopist.
     */
    role?: fhir.CodeableConcept | undefined;
    /**
     * The practitioner who was involved in the procedure.
     */
    actor: fhir.Reference | null;
    /**
     * The organization the device or practitioner was acting on behalf of.
     */
    onBehalfOf?: fhir.Reference | undefined;
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
     * This records identifiers associated with this procedure that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate (e.g. in CDA documents, or in written / printed documentation).
     */
    identifier?: (fhir.Identifier | null)[] | undefined;
    /**
     * A protocol, guideline, orderset or other definition that was adhered to in whole or in part by this procedure.
     */
    definition?: (fhir.Reference | null)[] | undefined;
    /**
     * A reference to a resource that contains details of the request for this procedure.
     */
    basedOn?: (fhir.Reference | null)[] | undefined;
    /**
     * The MedicationAdministration has a partOf reference to Procedure, but this is not a circular reference.  For a surgical procedure, the anesthesia related medicationAdministration is part of the procedure.  For an IV medication administration,  the procedure to insert the IV port is part of the medication administration.
     */
    partOf?: (fhir.Reference | null)[] | undefined;
    /**
     * The unknown code is not to be used to convey other statuses.  The unknown code should be used when one of the statuses applies, but the authoring system doesn't know the current state of the procedure.
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: 'aborted' | 'completed' | 'entered-in-error' | 'in-progress' | 'preparation' | 'suspended' | 'unknown' | null;
    /**
     * Extended properties for primitive element: Procedure.status
     */
    _status?: fhir.FhirElement;
    /**
     * If true, it means the procedure did not occur as described.  Typically it would be accompanied by attributes describing the type of activity.  It might also be accompanied by body site information or time information (i.e. no procedure was done to the left arm or no procedure was done in this 2-year period).  Specifying additional information such as performer, outcome, etc. is generally inappropriate.  For example, it's not that useful to say "There was no appendectomy done at 12:03pm June 6th by Dr. Smith with a successful outcome" as it implies that there *could* have been an appendectomy done at any other time, by any other clinician or with any other outcome.
     * This element is labeled as a modifier because it indicates that a procedure didn't happen.
     */
    notDone?: boolean | undefined;
    /**
     * Extended properties for primitive element: Procedure.notDone
     */
    _notDone?: fhir.FhirElement;
    /**
     * A code indicating why the procedure was not performed.
     */
    notDoneReason?: fhir.CodeableConcept | undefined;
    /**
     * A code that classifies the procedure for searching, sorting and display purposes (e.g. "Surgical Procedure").
     */
    category?: fhir.CodeableConcept | undefined;
    /**
     * The specific procedure that is performed. Use text if the exact nature of the procedure cannot be coded (e.g. "Laparoscopic Appendectomy").
     */
    code?: fhir.CodeableConcept | undefined;
    /**
     * The person, animal or group on which the procedure was performed.
     */
    subject: fhir.Reference | null;
    /**
     * The encounter during which the procedure was performed.
     */
    context?: fhir.Reference | undefined;
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
     * Limited to 'real' people rather than equipment.
     */
    performer?: (fhir.ProcedurePerformer | null)[] | undefined;
    /**
     * The location where the procedure actually happened.  E.g. a newborn at home, a tracheostomy at a restaurant.
     */
    location?: fhir.Reference | undefined;
    /**
     * The coded reason why the procedure was performed. This may be coded entity of some type, or may simply be present as text.
     */
    reasonCode?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * e.g. endoscopy for dilatation and biopsy, combination diagnosis and therapeutic.
     */
    reasonReference?: (fhir.Reference | null)[] | undefined;
    /**
     * Detailed and structured anatomical location information. Multiple locations are allowed - e.g. multiple punch biopsies of a lesion.
     */
    bodySite?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * If outcome contains narrative text only, it can be captured using the CodeableConcept.text.
     */
    outcome?: fhir.CodeableConcept | undefined;
    /**
     * There could potentially be multiple reports - e.g. if this was a procedure which took multiple biopsies resulting in a number of anatomical pathology reports.
     */
    report?: (fhir.Reference | null)[] | undefined;
    /**
     * If complications are only expressed by the narrative text, they can be captured using the CodeableConcept.text.
     */
    complication?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * Any complications that occurred during the procedure, or in the immediate post-performance period.
     */
    complicationDetail?: (fhir.Reference | null)[] | undefined;
    /**
     * If the procedure required specific follow up - e.g. removal of sutures. The followup may be represented as a simple note, or could potentially be more complex in which case the CarePlan resource can be used.
     */
    followUp?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * Any other notes about the procedure.  E.g. the operative notes.
     */
    note?: (fhir.Annotation | null)[] | undefined;
    /**
     * A device that is implanted, removed or otherwise manipulated (calibration, battery replacement, fitting a prosthesis, attaching a wound-vac, etc.) as a focal portion of the Procedure.
     */
    focalDevice?: (fhir.ProcedureFocalDevice | null)[] | undefined;
    /**
     * For devices actually implanted or removed, use Procedure.device.
     */
    usedReference?: (fhir.Reference | null)[] | undefined;
    /**
     * For devices actually implanted or removed, use Procedure.device.
     */
    usedCode?: (fhir.CodeableConcept | null)[] | undefined;
}
//# sourceMappingURL=Procedure.d.ts.map