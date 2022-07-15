import * as fhir from '../fhir.js';
import { EventStatusCodeType } from '../fhirValueSets/EventStatusCodes.js';
/**
 * Valid arguments for the ProcedurePerformer type.
 */
export interface ProcedurePerformerArgs extends fhir.BackboneElementArgs {
    /**
     * For example: surgeon, anaethetist, endoscopist.
     */
    role?: fhir.CodeableConceptArgs | undefined;
    /**
     * The practitioner who was involved in the procedure.
     */
    actor: fhir.ReferenceArgs | null;
    /**
     * The organization the device or practitioner was acting on behalf of.
     */
    onBehalfOf?: fhir.ReferenceArgs | undefined;
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
     * This records identifiers associated with this procedure that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate (e.g. in CDA documents, or in written / printed documentation).
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * A protocol, guideline, orderset or other definition that was adhered to in whole or in part by this procedure.
     */
    definition?: fhir.ReferenceArgs[] | undefined;
    /**
     * A reference to a resource that contains details of the request for this procedure.
     */
    basedOn?: fhir.ReferenceArgs[] | undefined;
    /**
     * The MedicationAdministration has a partOf reference to Procedure, but this is not a circular reference.  For a surgical procedure, the anesthesia related medicationAdministration is part of the procedure.  For an IV medication administration,  the procedure to insert the IV port is part of the medication administration.
     */
    partOf?: fhir.ReferenceArgs[] | undefined;
    /**
     * The unknown code is not to be used to convey other statuses.  The unknown code should be used when one of the statuses applies, but the authoring system doesn't know the current state of the procedure.
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: fhir.FhirCode<EventStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: Procedure.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * If true, it means the procedure did not occur as described.  Typically it would be accompanied by attributes describing the type of activity.  It might also be accompanied by body site information or time information (i.e. no procedure was done to the left arm or no procedure was done in this 2-year period).  Specifying additional information such as performer, outcome, etc. is generally inappropriate.  For example, it's not that useful to say "There was no appendectomy done at 12:03pm June 6th by Dr. Smith with a successful outcome" as it implies that there *could* have been an appendectomy done at any other time, by any other clinician or with any other outcome.
     * This element is labeled as a modifier because it indicates that a procedure didn't happen.
     */
    notDone?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: Procedure.notDone
     */
    _notDone?: fhir.FhirElementArgs;
    /**
     * A code indicating why the procedure was not performed.
     */
    notDoneReason?: fhir.CodeableConceptArgs | undefined;
    /**
     * A code that classifies the procedure for searching, sorting and display purposes (e.g. "Surgical Procedure").
     */
    category?: fhir.CodeableConceptArgs | undefined;
    /**
     * The specific procedure that is performed. Use text if the exact nature of the procedure cannot be coded (e.g. "Laparoscopic Appendectomy").
     */
    code?: fhir.CodeableConceptArgs | undefined;
    /**
     * The person, animal or group on which the procedure was performed.
     */
    subject: fhir.ReferenceArgs | null;
    /**
     * The encounter during which the procedure was performed.
     */
    context?: fhir.ReferenceArgs | undefined;
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
     * Limited to 'real' people rather than equipment.
     */
    performer?: fhir.ProcedurePerformerArgs[] | undefined;
    /**
     * The location where the procedure actually happened.  E.g. a newborn at home, a tracheostomy at a restaurant.
     */
    location?: fhir.ReferenceArgs | undefined;
    /**
     * The coded reason why the procedure was performed. This may be coded entity of some type, or may simply be present as text.
     */
    reasonCode?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * e.g. endoscopy for dilatation and biopsy, combination diagnosis and therapeutic.
     */
    reasonReference?: fhir.ReferenceArgs[] | undefined;
    /**
     * Detailed and structured anatomical location information. Multiple locations are allowed - e.g. multiple punch biopsies of a lesion.
     */
    bodySite?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * If outcome contains narrative text only, it can be captured using the CodeableConcept.text.
     */
    outcome?: fhir.CodeableConceptArgs | undefined;
    /**
     * There could potentially be multiple reports - e.g. if this was a procedure which took multiple biopsies resulting in a number of anatomical pathology reports.
     */
    report?: fhir.ReferenceArgs[] | undefined;
    /**
     * If complications are only expressed by the narrative text, they can be captured using the CodeableConcept.text.
     */
    complication?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Any complications that occurred during the procedure, or in the immediate post-performance period.
     */
    complicationDetail?: fhir.ReferenceArgs[] | undefined;
    /**
     * If the procedure required specific follow up - e.g. removal of sutures. The followup may be represented as a simple note, or could potentially be more complex in which case the CarePlan resource can be used.
     */
    followUp?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Any other notes about the procedure.  E.g. the operative notes.
     */
    note?: fhir.AnnotationArgs[] | undefined;
    /**
     * A device that is implanted, removed or otherwise manipulated (calibration, battery replacement, fitting a prosthesis, attaching a wound-vac, etc.) as a focal portion of the Procedure.
     */
    focalDevice?: fhir.ProcedureFocalDeviceArgs[] | undefined;
    /**
     * For devices actually implanted or removed, use Procedure.device.
     */
    usedReference?: fhir.ReferenceArgs[] | undefined;
    /**
     * For devices actually implanted or removed, use Procedure.device.
     */
    usedCode?: fhir.CodeableConceptArgs[] | undefined;
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
     * This records identifiers associated with this procedure that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate (e.g. in CDA documents, or in written / printed documentation).
     */
    identifier: fhir.Identifier[];
    /**
     * A protocol, guideline, orderset or other definition that was adhered to in whole or in part by this procedure.
     */
    definition: fhir.Reference[];
    /**
     * A reference to a resource that contains details of the request for this procedure.
     */
    basedOn: fhir.Reference[];
    /**
     * The MedicationAdministration has a partOf reference to Procedure, but this is not a circular reference.  For a surgical procedure, the anesthesia related medicationAdministration is part of the procedure.  For an IV medication administration,  the procedure to insert the IV port is part of the medication administration.
     */
    partOf: fhir.Reference[];
    /**
     * The unknown code is not to be used to convey other statuses.  The unknown code should be used when one of the statuses applies, but the authoring system doesn't know the current state of the procedure.
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: fhir.FhirCode<EventStatusCodeType> | null;
    /**
     * If true, it means the procedure did not occur as described.  Typically it would be accompanied by attributes describing the type of activity.  It might also be accompanied by body site information or time information (i.e. no procedure was done to the left arm or no procedure was done in this 2-year period).  Specifying additional information such as performer, outcome, etc. is generally inappropriate.  For example, it's not that useful to say "There was no appendectomy done at 12:03pm June 6th by Dr. Smith with a successful outcome" as it implies that there *could* have been an appendectomy done at any other time, by any other clinician or with any other outcome.
     * This element is labeled as a modifier because it indicates that a procedure didn't happen.
     */
    notDone?: fhir.FhirBoolean | undefined;
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
    performed?: (fhir.FhirDateTime | fhir.Period) | undefined;
    /**
     * Internal flag to properly serialize choice-type element Procedure.performed[x]
     */
    protected static readonly _fts_performedIsChoice: true;
    /**
     * Limited to 'real' people rather than equipment.
     */
    performer: fhir.ProcedurePerformer[];
    /**
     * The location where the procedure actually happened.  E.g. a newborn at home, a tracheostomy at a restaurant.
     */
    location?: fhir.Reference | undefined;
    /**
     * The coded reason why the procedure was performed. This may be coded entity of some type, or may simply be present as text.
     */
    reasonCode: fhir.CodeableConcept[];
    /**
     * e.g. endoscopy for dilatation and biopsy, combination diagnosis and therapeutic.
     */
    reasonReference: fhir.Reference[];
    /**
     * Detailed and structured anatomical location information. Multiple locations are allowed - e.g. multiple punch biopsies of a lesion.
     */
    bodySite: fhir.CodeableConcept[];
    /**
     * If outcome contains narrative text only, it can be captured using the CodeableConcept.text.
     */
    outcome?: fhir.CodeableConcept | undefined;
    /**
     * There could potentially be multiple reports - e.g. if this was a procedure which took multiple biopsies resulting in a number of anatomical pathology reports.
     */
    report: fhir.Reference[];
    /**
     * If complications are only expressed by the narrative text, they can be captured using the CodeableConcept.text.
     */
    complication: fhir.CodeableConcept[];
    /**
     * Any complications that occurred during the procedure, or in the immediate post-performance period.
     */
    complicationDetail: fhir.Reference[];
    /**
     * If the procedure required specific follow up - e.g. removal of sutures. The followup may be represented as a simple note, or could potentially be more complex in which case the CarePlan resource can be used.
     */
    followUp: fhir.CodeableConcept[];
    /**
     * Any other notes about the procedure.  E.g. the operative notes.
     */
    note: fhir.Annotation[];
    /**
     * A device that is implanted, removed or otherwise manipulated (calibration, battery replacement, fitting a prosthesis, attaching a wound-vac, etc.) as a focal portion of the Procedure.
     */
    focalDevice: fhir.ProcedureFocalDevice[];
    /**
     * For devices actually implanted or removed, use Procedure.device.
     */
    usedReference: fhir.Reference[];
    /**
     * For devices actually implanted or removed, use Procedure.device.
     */
    usedCode: fhir.CodeableConcept[];
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