import * as fhir from '../fhirJson.js';
/**
 * Limited to "real" people rather than equipment.
 */
export interface ProcedurePerformer extends fhir.BackboneElement {
    /**
     * Distinguishes the type of involvement of the performer in the procedure. For example, surgeon, anaesthetist, endoscopist.
     */
    function?: fhir.CodeableConcept | undefined;
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
 * An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy.
 */
export interface Procedure extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "Procedure";
    /**
     * This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and Person resource instances might share the same social insurance number.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * The URL pointing to a FHIR-defined protocol, guideline, order set or other definition that is adhered to in whole or in part by this Procedure.
     */
    instantiatesCanonical?: string[] | undefined;
    /**
     * Extended properties for primitive element: Procedure.instantiatesCanonical
     */
    _instantiatesCanonical?: (fhir.FhirElement | null)[];
    /**
     * This might be an HTML page, PDF, etc. or could just be a non-resolvable URI identifier.
     */
    instantiatesUri?: string[] | undefined;
    /**
     * Extended properties for primitive element: Procedure.instantiatesUri
     */
    _instantiatesUri?: (fhir.FhirElement | null)[];
    /**
     * A reference to a resource that contains details of the request for this procedure.
     */
    basedOn?: fhir.Reference[] | undefined;
    /**
     * The MedicationAdministration resource has a partOf reference to Procedure, but this is not a circular reference.   For example, the anesthesia MedicationAdministration is part of the surgical Procedure (MedicationAdministration.partOf = Procedure).  For example, the procedure to insert the IV port for an IV medication administration is part of the medication administration (Procedure.partOf = MedicationAdministration).
     */
    partOf?: fhir.Reference[] | undefined;
    /**
     * The "unknown" code is not to be used to convey other statuses.  The "unknown" code should be used when one of the statuses applies, but the authoring system doesn't know the current state of the procedure.
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: 'completed' | 'entered-in-error' | 'in-progress' | 'not-done' | 'on-hold' | 'preparation' | 'stopped' | 'unknown' | null;
    /**
     * Extended properties for primitive element: Procedure.status
     */
    _status?: fhir.FhirElement;
    /**
     * This is generally only used for "exception" statuses such as "not-done", "suspended" or "aborted". The reason for performing the event at all is captured in reasonCode, not here.
     */
    statusReason?: fhir.CodeableConcept | undefined;
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
     * This will typically be the encounter the event occurred within, but some activities may be initiated prior to or after the official completion of an encounter but still be tied to the context of the encounter.
     */
    encounter?: fhir.Reference | undefined;
    /**
     * Age is generally used when the patient reports an age at which the procedure was performed. Range is generally used when the patient reports an age range when the procedure was performed, such as sometime between 20-25 years old.  dateTime supports a range of precision due to some procedures being reported as past procedures that might not have millisecond precision while other procedures performed and documented during the encounter might have more precise UTC timestamps with timezone.
     */
    performedDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: Procedure.performed[x]
     */
    _performedDateTime?: fhir.FhirElement;
    /**
     * Age is generally used when the patient reports an age at which the procedure was performed. Range is generally used when the patient reports an age range when the procedure was performed, such as sometime between 20-25 years old.  dateTime supports a range of precision due to some procedures being reported as past procedures that might not have millisecond precision while other procedures performed and documented during the encounter might have more precise UTC timestamps with timezone.
     */
    performedPeriod?: fhir.Period | undefined;
    /**
     * Age is generally used when the patient reports an age at which the procedure was performed. Range is generally used when the patient reports an age range when the procedure was performed, such as sometime between 20-25 years old.  dateTime supports a range of precision due to some procedures being reported as past procedures that might not have millisecond precision while other procedures performed and documented during the encounter might have more precise UTC timestamps with timezone.
     */
    performedString?: string | undefined;
    /**
     * Extended properties for primitive element: Procedure.performed[x]
     */
    _performedString?: fhir.FhirElement;
    /**
     * Age is generally used when the patient reports an age at which the procedure was performed. Range is generally used when the patient reports an age range when the procedure was performed, such as sometime between 20-25 years old.  dateTime supports a range of precision due to some procedures being reported as past procedures that might not have millisecond precision while other procedures performed and documented during the encounter might have more precise UTC timestamps with timezone.
     */
    performedAge?: fhir.Age | undefined;
    /**
     * Age is generally used when the patient reports an age at which the procedure was performed. Range is generally used when the patient reports an age range when the procedure was performed, such as sometime between 20-25 years old.  dateTime supports a range of precision due to some procedures being reported as past procedures that might not have millisecond precision while other procedures performed and documented during the encounter might have more precise UTC timestamps with timezone.
     */
    performedRange?: fhir.Range | undefined;
    /**
     * Individual who recorded the record and takes responsibility for its content.
     */
    recorder?: fhir.Reference | undefined;
    /**
     * Individual who is making the procedure statement.
     */
    asserter?: fhir.Reference | undefined;
    /**
     * Limited to "real" people rather than equipment.
     */
    performer?: fhir.ProcedurePerformer[] | undefined;
    /**
     * The location where the procedure actually happened.  E.g. a newborn at home, a tracheostomy at a restaurant.
     */
    location?: fhir.Reference | undefined;
    /**
     * Use Procedure.reasonCode when a code sufficiently describes the reason.  Use Procedure.reasonReference when referencing a resource, which allows more information to be conveyed, such as onset date. Procedure.reasonCode and Procedure.reasonReference are not meant to be duplicative.  For a single reason, either Procedure.reasonCode or Procedure.reasonReference can be used.  Procedure.reasonCode may be a summary code, or Procedure.reasonReference may be used to reference a very precise definition of the reason using Condition | Observation | Procedure | DiagnosticReport | DocumentReference.  Both Procedure.reasonCode and Procedure.reasonReference can be used if they are describing different reasons for the procedure.
     */
    reasonCode?: fhir.CodeableConcept[] | undefined;
    /**
     * It is possible for a procedure to be a reason (such as C-Section) for another procedure (such as an epidural). Other examples include endoscopy for dilatation and biopsy (a combination of diagnostic and therapeutic use).
     * Use Procedure.reasonCode when a code sufficiently describes the reason.  Use Procedure.reasonReference when referencing a resource, which allows more information to be conveyed, such as onset date. Procedure.reasonCode and Procedure.reasonReference are not meant to be duplicative.  For a single reason, either Procedure.reasonCode or Procedure.reasonReference can be used.  Procedure.reasonCode may be a summary code, or Procedure.reasonReference may be used to reference a very precise definition of the reason using Condition | Observation | Procedure | DiagnosticReport | DocumentReference.  Both Procedure.reasonCode and Procedure.reasonReference can be used if they are describing different reasons for the procedure.
     */
    reasonReference?: fhir.Reference[] | undefined;
    /**
     * If the use case requires attributes from the BodySite resource (e.g. to identify and track separately) then use the standard extension [procedure-targetbodystructure](extension-procedure-targetbodystructure.html).
     */
    bodySite?: fhir.CodeableConcept[] | undefined;
    /**
     * If outcome contains narrative text only, it can be captured using the CodeableConcept.text.
     */
    outcome?: fhir.CodeableConcept | undefined;
    /**
     * There could potentially be multiple reports - e.g. if this was a procedure which took multiple biopsies resulting in a number of anatomical pathology reports.
     */
    report?: fhir.Reference[] | undefined;
    /**
     * If complications are only expressed by the narrative text, they can be captured using the CodeableConcept.text.
     */
    complication?: fhir.CodeableConcept[] | undefined;
    /**
     * Any complications that occurred during the procedure, or in the immediate post-performance period.
     */
    complicationDetail?: fhir.Reference[] | undefined;
    /**
     * If the procedure required specific follow up - e.g. removal of sutures. The follow up may be represented as a simple note or could potentially be more complex, in which case the CarePlan resource can be used.
     */
    followUp?: fhir.CodeableConcept[] | undefined;
    /**
     * Any other notes and comments about the procedure.
     */
    note?: fhir.Annotation[] | undefined;
    /**
     * A device that is implanted, removed or otherwise manipulated (calibration, battery replacement, fitting a prosthesis, attaching a wound-vac, etc.) as a focal portion of the Procedure.
     */
    focalDevice?: fhir.ProcedureFocalDevice[] | undefined;
    /**
     * For devices actually implanted or removed, use Procedure.device.
     */
    usedReference?: fhir.Reference[] | undefined;
    /**
     * For devices actually implanted or removed, use Procedure.device.
     */
    usedCode?: fhir.CodeableConcept[] | undefined;
}
//# sourceMappingURL=Procedure.d.ts.map