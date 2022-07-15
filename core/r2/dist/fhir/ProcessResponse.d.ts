import * as fhir from '../fhir.js';
/**
 * Valid arguments for the ProcessResponseNotes type.
 */
export interface ProcessResponseNotesArgs extends fhir.BackboneElementArgs {
    /**
     * The note purpose: Print/Display.
     */
    type?: fhir.CodingArgs | undefined;
    /**
     * The note text.
     */
    text?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ProcessResponse.notes.text
     */
    _text?: fhir.FhirElementArgs;
}
/**
 * Suite of processing note or additional requirements is the processing has been held.
 */
export declare class ProcessResponseNotes extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The note purpose: Print/Display.
     */
    type?: fhir.Coding | undefined;
    /**
     * The note text.
     */
    text?: fhir.FhirString | undefined;
    /**
     * Default constructor for ProcessResponseNotes - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ProcessResponseNotesArgs>, options?: fhir.FhirConstructorOptions);
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
     * Original request resource reference.
     */
    request?: fhir.ReferenceArgs | undefined;
    /**
     * Transaction status: error, complete, held.
     */
    outcome?: fhir.CodingArgs | undefined;
    /**
     * A description of the status of the adjudication or processing.
     */
    disposition?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ProcessResponse.disposition
     */
    _disposition?: fhir.FhirElementArgs;
    /**
     * The version of the style of resource contents. This should be mapped to the allowable profiles for this and supporting resources.
     */
    ruleset?: fhir.CodingArgs | undefined;
    /**
     * Knowledge of the original version can inform the processing of this instance so that information which is processable by the originating system may be generated.
     */
    originalRuleset?: fhir.CodingArgs | undefined;
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
    form?: fhir.CodingArgs | undefined;
    /**
     * Suite of processing note or additional requirements is the processing has been held.
     */
    notes?: fhir.ProcessResponseNotesArgs[] | undefined;
    /**
     * Processing errors.
     */
    error?: fhir.CodingArgs[] | undefined;
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
    disposition?: fhir.FhirString | undefined;
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
    created?: fhir.FhirDateTime | undefined;
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
    notes: fhir.ProcessResponseNotes[];
    /**
     * Processing errors.
     */
    error: fhir.Coding[];
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