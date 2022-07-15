import * as fhir from '../fhir.js';
/**
 * Valid arguments for the Basic type.
 */
export interface BasicArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "Basic" | undefined;
    /**
     * Identifier assigned to the resource for business purposes, outside the context of FHIR.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * Because resource references will only be able to indicate 'Basic', the type of reference will need to be specified in a Profile identified as part of the resource.  Refer to the resource notes section for information on appropriate terminologies for this code.
     * This element is labeled as a modifier because the it defines the meaning of the resource and cannot be ignored.
     */
    code: fhir.CodeableConceptArgs | null;
    /**
     * Optional as not all potential resources will have subjects.  Resources associated with multiple subjects can handle this via extension.
     */
    subject?: fhir.ReferenceArgs | undefined;
    /**
     * Identifies when the resource was first created.
     */
    created?: fhir.FhirDate | string | undefined;
    /**
     * Extended properties for primitive element: Basic.created
     */
    _created?: fhir.FhirElementArgs;
    /**
     * Indicates who was responsible for creating the resource instance.
     */
    author?: fhir.ReferenceArgs | undefined;
}
/**
 * Basic is used for handling concepts not yet defined in FHIR, narrative-only resources that don't map to an existing resource, and custom resources not appropriate for inclusion in the FHIR specification.
 */
export declare class Basic extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "Basic";
    /**
     * Identifier assigned to the resource for business purposes, outside the context of FHIR.
     */
    identifier: fhir.Identifier[];
    /**
     * Because resource references will only be able to indicate 'Basic', the type of reference will need to be specified in a Profile identified as part of the resource.  Refer to the resource notes section for information on appropriate terminologies for this code.
     * This element is labeled as a modifier because the it defines the meaning of the resource and cannot be ignored.
     */
    code: fhir.CodeableConcept | null;
    /**
     * Optional as not all potential resources will have subjects.  Resources associated with multiple subjects can handle this via extension.
     */
    subject?: fhir.Reference | undefined;
    /**
     * Identifies when the resource was first created.
     */
    created?: fhir.FhirDate | undefined;
    /**
     * Indicates who was responsible for creating the resource instance.
     */
    author?: fhir.Reference | undefined;
    /**
     * Default constructor for Basic - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<BasicArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=Basic.d.ts.map