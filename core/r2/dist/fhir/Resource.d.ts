import * as fhir from '../fhir.js';
/**
 * Valid arguments for the Resource type.
 */
export interface ResourceArgs extends fhir.FhirBaseArgs {
    /**
     * Resource Type Name
     */
    resourceType: string | string | undefined;
    /**
     * The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.
     */
    id?: fhir.FhirId | string | undefined;
    /**
     * Extended properties for primitive element: Resource.id
     */
    _id?: fhir.FhirElementArgs;
    /**
     * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content may not always be associated with version changes to the resource.
     */
    meta?: fhir.MetaArgs | undefined;
    /**
     * A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content.
     */
    implicitRules?: fhir.FhirUri | string | undefined;
    /**
     * Extended properties for primitive element: Resource.implicitRules
     */
    _implicitRules?: fhir.FhirElementArgs;
    /**
     * The base language in which the resource is written.
     */
    language?: fhir.FhirCode | string | undefined;
    /**
     * Extended properties for primitive element: Resource.language
     */
    _language?: fhir.FhirElementArgs;
}
/**
 * This is the base resource type for everything.
 */
export declare class Resource extends fhir.FhirBase {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: string | null;
    /**
     * The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.
     */
    id?: fhir.FhirId | undefined;
    /**
     * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content may not always be associated with version changes to the resource.
     */
    meta?: fhir.Meta | undefined;
    /**
     * A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content.
     */
    implicitRules?: fhir.FhirUri | undefined;
    /**
     * The base language in which the resource is written.
     */
    language?: fhir.FhirCode | undefined;
    /**
     * Default constructor for Resource - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ResourceArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=Resource.d.ts.map