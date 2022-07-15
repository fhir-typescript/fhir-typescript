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
     * Must be able to distinguish different types of "basic" resources.
     */
    code: fhir.CodeableConceptArgs | null;
    /**
     * Needed for partitioning the resource by Patient.
     */
    subject?: fhir.ReferenceArgs | undefined;
    /**
     * Needed for partitioning the resource.
     */
    author?: fhir.ReferenceArgs | undefined;
    /**
     * Allows ordering resource instances by time.
     */
    created?: fhir.FhirDate | string | undefined;
    /**
     * Extended properties for primitive element: Basic.created
     */
    _created?: fhir.FhirElementArgs;
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
     * Must be able to distinguish different types of "basic" resources.
     */
    code: fhir.CodeableConcept | null;
    /**
     * Needed for partitioning the resource by Patient.
     */
    subject?: fhir.Reference | undefined;
    /**
     * Needed for partitioning the resource.
     */
    author?: fhir.Reference | undefined;
    /**
     * Allows ordering resource instances by time.
     */
    created?: fhir.FhirDate | undefined;
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