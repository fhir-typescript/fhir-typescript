import * as fhir from '../fhirJson.js';
/**
 * Suite of processing note or additional requirements is the processing has been held.
 */
export interface ProcessResponseNotes extends fhir.BackboneElement {
    /**
     * The note purpose: Print/Display.
     */
    type?: 'display' | 'print' | 'printoper' | undefined;
    /**
     * The note text.
     */
    text?: string | undefined;
    /**
     * Extended properties for primitive element: ProcessResponse.notes.text
     */
    _text?: fhir.FhirElement;
}
/**
 * This resource provides processing status, errors and notes from the processing of a resource.
 */
export interface ProcessResponse extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "ProcessResponse" | null;
    /**
     * The Response business identifier.
     */
    identifier?: (fhir.Identifier | null)[] | undefined;
    /**
     * Original request resource reference.
     */
    request?: fhir.Reference | undefined;
    /**
     * Transaction status: error, complete, held.
     */
    outcome?: fhir.Coding | undefined;
    /**
     * A description of the status of the adjudication or processing.
     */
    disposition?: string | undefined;
    /**
     * Extended properties for primitive element: ProcessResponse.disposition
     */
    _disposition?: fhir.FhirElement;
    /**
     * The version of the style of resource contents. This should be mapped to the allowable profiles for this and supporting resources.
     */
    ruleset?: fhir.Coding | undefined;
    /**
     * Knowledge of the original version can inform the processing of this instance so that information which is processable by the originating system may be generated.
     */
    originalRuleset?: fhir.Coding | undefined;
    /**
     * The date when the enclosed suite of services were performed or completed.
     */
    created?: string | undefined;
    /**
     * Extended properties for primitive element: ProcessResponse.created
     */
    _created?: fhir.FhirElement;
    /**
     * The organization who produced this adjudicated response.
     */
    organization?: fhir.Reference | undefined;
    /**
     * The practitioner who is responsible for the services rendered to the patient.
     */
    requestProvider?: fhir.Reference | undefined;
    /**
     * The organization which is responsible for the services rendered to the patient.
     */
    requestOrganization?: fhir.Reference | undefined;
    /**
     * The form to be used for printing the content.
     */
    form?: fhir.Coding | undefined;
    /**
     * Suite of processing note or additional requirements is the processing has been held.
     */
    notes?: (fhir.ProcessResponseNotes | null)[] | undefined;
    /**
     * Processing errors.
     */
    error?: (fhir.Coding | null)[] | undefined;
}
//# sourceMappingURL=ProcessResponse.d.ts.map