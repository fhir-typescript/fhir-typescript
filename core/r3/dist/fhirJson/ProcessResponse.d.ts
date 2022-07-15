import * as fhir from '../fhirJson.js';
/**
 * Suite of processing notes or additional requirements if the processing has been held.
 */
export interface ProcessResponseProcessNote extends fhir.BackboneElement {
    /**
     * The note purpose: Print/Display.
     */
    type?: 'display' | 'print' | 'printoper' | undefined;
    /**
     * The note text.
     */
    text?: string | undefined;
    /**
     * Extended properties for primitive element: ProcessResponse.processNote.text
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
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status?: 'active' | 'cancelled' | 'draft' | 'entered-in-error' | undefined;
    /**
     * Extended properties for primitive element: ProcessResponse.status
     */
    _status?: fhir.FhirElement;
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
     * Original request resource reference.
     */
    request?: fhir.Reference | undefined;
    /**
     * Transaction status: error, complete, held.
     */
    outcome?: fhir.CodeableConcept | undefined;
    /**
     * A description of the status of the adjudication or processing.
     */
    disposition?: string | undefined;
    /**
     * Extended properties for primitive element: ProcessResponse.disposition
     */
    _disposition?: fhir.FhirElement;
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
    form?: fhir.CodeableConcept | undefined;
    /**
     * Suite of processing notes or additional requirements if the processing has been held.
     */
    processNote?: (fhir.ProcessResponseProcessNote | null)[] | undefined;
    /**
     * Processing errors.
     */
    error?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * Request for additional supporting or authorizing information, such as: documents, images or resources.
     */
    communicationRequest?: (fhir.Reference | null)[] | undefined;
}
//# sourceMappingURL=ProcessResponse.d.ts.map