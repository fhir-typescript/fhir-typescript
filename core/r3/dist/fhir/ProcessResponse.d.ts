import * as fhir from '../fhir.js';
import { FmStatusCodeType } from '../fhirValueSets/FmStatusCodes.js';
/**
 * Valid arguments for the ProcessResponseProcessNote type.
 */
export interface ProcessResponseProcessNoteArgs extends fhir.BackboneElementArgs {
    /**
     * The note purpose: Print/Display.
     */
    type?: fhir.CodeableConceptArgs | undefined;
    /**
     * The note text.
     */
    text?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ProcessResponse.processNote.text
     */
    _text?: fhir.FhirElementArgs;
}
/**
 * Suite of processing notes or additional requirements if the processing has been held.
 */
export declare class ProcessResponseProcessNote extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The note purpose: Print/Display.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * The note text.
     */
    text?: fhir.FhirString | undefined;
    /**
     * Default constructor for ProcessResponseProcessNote - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ProcessResponseProcessNoteArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ProcessResponse type.
 */
export interface ProcessResponseArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "ProcessResponse" | undefined;
    /**
     * The Response business identifier.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status?: fhir.FhirCode<FmStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: ProcessResponse.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * The date when the enclosed suite of services were performed or completed.
     */
    created?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: ProcessResponse.created
     */
    _created?: fhir.FhirElementArgs;
    /**
     * The organization who produced this adjudicated response.
     */
    organization?: fhir.ReferenceArgs | undefined;
    /**
     * Original request resource reference.
     */
    request?: fhir.ReferenceArgs | undefined;
    /**
     * Transaction status: error, complete, held.
     */
    outcome?: fhir.CodeableConceptArgs | undefined;
    /**
     * A description of the status of the adjudication or processing.
     */
    disposition?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ProcessResponse.disposition
     */
    _disposition?: fhir.FhirElementArgs;
    /**
     * The practitioner who is responsible for the services rendered to the patient.
     */
    requestProvider?: fhir.ReferenceArgs | undefined;
    /**
     * The organization which is responsible for the services rendered to the patient.
     */
    requestOrganization?: fhir.ReferenceArgs | undefined;
    /**
     * The form to be used for printing the content.
     */
    form?: fhir.CodeableConceptArgs | undefined;
    /**
     * Suite of processing notes or additional requirements if the processing has been held.
     */
    processNote?: fhir.ProcessResponseProcessNoteArgs[] | undefined;
    /**
     * Processing errors.
     */
    error?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Request for additional supporting or authorizing information, such as: documents, images or resources.
     */
    communicationRequest?: fhir.ReferenceArgs[] | undefined;
}
/**
 * This resource provides processing status, errors and notes from the processing of a resource.
 */
export declare class ProcessResponse extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "ProcessResponse";
    /**
     * The Response business identifier.
     */
    identifier: fhir.Identifier[];
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status?: fhir.FhirCode<FmStatusCodeType> | undefined;
    /**
     * The date when the enclosed suite of services were performed or completed.
     */
    created?: fhir.FhirDateTime | undefined;
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
    disposition?: fhir.FhirString | undefined;
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
    processNote: fhir.ProcessResponseProcessNote[];
    /**
     * Processing errors.
     */
    error: fhir.CodeableConcept[];
    /**
     * Request for additional supporting or authorizing information, such as: documents, images or resources.
     */
    communicationRequest: fhir.Reference[];
    /**
     * Default constructor for ProcessResponse - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ProcessResponseArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=ProcessResponse.d.ts.map