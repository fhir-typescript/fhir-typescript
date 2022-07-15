import * as fhir from '../fhir.js';
import { ProcedureStatusCodeType } from '../fhirValueSets/ProcedureStatusCodes.js';
/**
 * Valid arguments for the ProcedurePerformer type.
 */
export interface ProcedurePerformerArgs extends fhir.BackboneElementArgs {
    /**
     * The practitioner who was involved in the procedure.
     */
    actor?: fhir.ReferenceArgs | undefined;
    /**
     * For example: surgeon, anaethetist, endoscopist.
     */
    role?: fhir.CodeableConceptArgs | undefined;
}
/**
 * Limited to 'real' people rather than equipment.
 */
export declare class ProcedurePerformer extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The practitioner who was involved in the procedure.
     */
    actor?: fhir.Reference | undefined;
    /**
     * For example: surgeon, anaethetist, endoscopist.
     */
    role?: fhir.CodeableConcept | undefined;
    /**
     * Default constructor for ProcedurePerformer - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ProcedurePerformerArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ProcedureFocalDevice type.
 */
export interface ProcedureFocalDeviceArgs extends fhir.BackboneElementArgs {
    /**
     * The kind of change that happened to the device during the procedure.
     */
    action?: fhir.CodeableConceptArgs | undefined;
    /**
     * The device that was manipulated (changed) during the procedure.
     */
    manipulated: fhir.ReferenceArgs | null;
}
/**
 * A device that is implanted, removed or otherwise manipulated (calibration, battery replacement, fitting a prosthesis, attaching a wound-vac, etc.) as a focal portion of the Procedure.
 */
export declare class ProcedureFocalDevice extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The kind of change that happened to the device during the procedure.
     */
    action?: fhir.CodeableConcept | undefined;
    /**
     * The device that was manipulated (changed) during the procedure.
     */
    manipulated: fhir.Reference | null;
    /**
     * Default constructor for ProcedureFocalDevice - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ProcedureFocalDeviceArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the Procedure type.
 */
export interface ProcedureArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "Procedure" | undefined;
    /**
     * Need to allow connection to a wider workflow.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * The person, animal or group on which the procedure was performed.
     */
    subject: fhir.ReferenceArgs | null;
    /**
     * A code specifying the state of the procedure. Generally this will be in-progress or completed state.
     */
    status: fhir.FhirCode<ProcedureStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: Procedure.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * A code that classifies the procedure for searching, sorting and display purposes (e.g. "Surgical Procedure").
     */
    category?: fhir.CodeableConceptArgs | undefined;
    /**
     * The specific procedure that is performed. Use text if the exact nature of the procedure cannot be coded (e.g. "Laparoscopic Appendectomy").
     */
    code: fhir.CodeableConceptArgs | null;
    /**
     * Set this to true if the record is saying that the procedure was NOT performed.
     */
    notPerformed?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: Procedure.notPerformed
     */
    _notPerformed?: fhir.FhirElementArgs;
    /**
     * A code indicating why the procedure was not performed.
     */
    reasonNotPerformed?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Detailed and structured anatomical location information. Multiple locations are allowed - e.g. multiple punch biopsies of a lesion.
     */
    bodySite?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * The reason why the procedure was performed. This may be due to a Condition, may be coded entity of some type, or may simply be present as text.
     */
    reason?: fhir.CodeableConcept | fhir.Reference | undefined;
    /**
     * The reason why the procedure was performed. This may be due to a Condition, may be coded entity of some type, or may simply be present as text.
     */
    reasonCodeableConcept?: fhir.CodeableConceptArgs | undefined;
    /**
     * The reason why the procedure was performed. This may be due to a Condition, may be coded entity of some type, or may simply be present as text.
     */
    reasonReference?: fhir.ReferenceArgs | undefined;
    /**
     * Limited to 'real' people rather than equipment.
     */
    performer?: fhir.ProcedurePerformerArgs[] | undefined;
    /**
     * The date(time)/period over which the procedure was performed. Allows a period to support complex procedures that span more than one date, and also allows for the length of the procedure to be captured.
     */
    performed?: fhir.FhirDateTime | fhir.Period | undefined;
    /**
     * The date(time)/period over which the procedure was performed. Allows a period to support complex procedures that span more than one date, and also allows for the length of the procedure to be captured.
     */
    performedDateTime?: fhir.FhirDateTime | string | undefined;
    /**
     * The date(time)/period over which the procedure was performed. Allows a period to support complex procedures that span more than one date, and also allows for the length of the procedure to be captured.
     */
    performedPeriod?: fhir.PeriodArgs | undefined;
    /**
     * The encounter during which the procedure was performed.
     */
    encounter?: fhir.ReferenceArgs | undefined;
    /**
     * Ties a procedure to where the records are likely kept.
     */
    location?: fhir.ReferenceArgs | undefined;
    /**
     * The outcome of the procedure - did it resolve reasons for the procedure being performed?
     */
    outcome?: fhir.CodeableConceptArgs | undefined;
    /**
     * This could be a histology result, pathology report, surgical report, etc..
     */
    report?: fhir.ReferenceArgs[] | undefined;
    /**
     * Any complications that occurred during the procedure, or in the immediate post-performance period. These are generally tracked separately from the notes, which will typically describe the procedure itself rather than any 'post procedure' issues.
     */
    complication?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * If the procedure required specific follow up - e.g. removal of sutures. The followup may be represented as a simple note, or could potentially be more complex in which case the CarePlan resource can be used.
     */
    followUp?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * A reference to a resource that contains details of the request for this procedure.
     */
    request?: fhir.ReferenceArgs | undefined;
    /**
     * Any other notes about the procedure.  E.g. the operative notes.
     */
    notes?: fhir.AnnotationArgs[] | undefined;
    /**
     * A device that is implanted, removed or otherwise manipulated (calibration, battery replacement, fitting a prosthesis, attaching a wound-vac, etc.) as a focal portion of the Procedure.
     */
    focalDevice?: fhir.ProcedureFocalDeviceArgs[] | undefined;
    /**
     * Used for tracking contamination, etc.
     */
    used?: fhir.ReferenceArgs[] | undefined;
}
/**
 * An action that is or was performed on a patient. This can be a physical intervention like an operation, or less invasive like counseling or hypnotherapy.
 */
export declare class Procedure extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "Procedure";
    /**
     * Need to allow connection to a wider workflow.
     */
    identifier: fhir.Identifier[];
    /**
     * The person, animal or group on which the procedure was performed.
     */
    subject: fhir.Reference | null;
    /**
     * A code specifying the state of the procedure. Generally this will be in-progress or completed state.
     */
    status: fhir.FhirCode<ProcedureStatusCodeType> | null;
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
    notPerformed?: fhir.FhirBoolean | undefined;
    /**
     * A code indicating why the procedure was not performed.
     */
    reasonNotPerformed: fhir.CodeableConcept[];
    /**
     * Detailed and structured anatomical location information. Multiple locations are allowed - e.g. multiple punch biopsies of a lesion.
     */
    bodySite: fhir.CodeableConcept[];
    /**
     * The reason why the procedure was performed. This may be due to a Condition, may be coded entity of some type, or may simply be present as text.
     */
    reason?: (fhir.CodeableConcept | fhir.Reference) | undefined;
    /**
     * Internal flag to properly serialize choice-type element Procedure.reason[x]
     */
    protected static readonly _fts_reasonIsChoice: true;
    /**
     * Limited to 'real' people rather than equipment.
     */
    performer: fhir.ProcedurePerformer[];
    /**
     * The date(time)/period over which the procedure was performed. Allows a period to support complex procedures that span more than one date, and also allows for the length of the procedure to be captured.
     */
    performed?: (fhir.FhirDateTime | fhir.Period) | undefined;
    /**
     * Internal flag to properly serialize choice-type element Procedure.performed[x]
     */
    protected static readonly _fts_performedIsChoice: true;
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
    report: fhir.Reference[];
    /**
     * Any complications that occurred during the procedure, or in the immediate post-performance period. These are generally tracked separately from the notes, which will typically describe the procedure itself rather than any 'post procedure' issues.
     */
    complication: fhir.CodeableConcept[];
    /**
     * If the procedure required specific follow up - e.g. removal of sutures. The followup may be represented as a simple note, or could potentially be more complex in which case the CarePlan resource can be used.
     */
    followUp: fhir.CodeableConcept[];
    /**
     * A reference to a resource that contains details of the request for this procedure.
     */
    request?: fhir.Reference | undefined;
    /**
     * Any other notes about the procedure.  E.g. the operative notes.
     */
    notes: fhir.Annotation[];
    /**
     * A device that is implanted, removed or otherwise manipulated (calibration, battery replacement, fitting a prosthesis, attaching a wound-vac, etc.) as a focal portion of the Procedure.
     */
    focalDevice: fhir.ProcedureFocalDevice[];
    /**
     * Used for tracking contamination, etc.
     */
    used: fhir.Reference[];
    /**
     * Default constructor for Procedure - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ProcedureArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=Procedure.d.ts.map