import * as fhir from '../fhir.js';
/**
 * Valid arguments for the Meta type.
 */
export interface MetaArgs extends fhir.FhirElementArgs {
    /**
     * The version specific identifier, as it appears in the version portion of the URL. This values changes when the resource is created, updated, or deleted.
     */
    versionId?: fhir.FhirId | string | undefined;
    /**
     * Extended properties for primitive element: Meta.versionId
     */
    _versionId?: fhir.FhirElementArgs;
    /**
     * When the resource last changed - e.g. when the version changed.
     */
    lastUpdated?: fhir.FhirInstant | string | undefined;
    /**
     * Extended properties for primitive element: Meta.lastUpdated
     */
    _lastUpdated?: fhir.FhirElementArgs;
    /**
     * A list of profiles [[[StructureDefinition]]]s that this resource claims to conform to. The URL is a reference to [[[StructureDefinition.url]]].
     */
    profile?: fhir.FhirUri[] | (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: Meta.profile
     */
    _profile?: (fhir.FhirElementArgs | null)[];
    /**
     * Security labels applied to this resource. These tags connect specific resources to the overall security policy and infrastructure.
     */
    security?: fhir.CodingArgs[] | undefined;
    /**
     * Tags applied to this resource. Tags are intended to be used to identify and relate resources to process and workflow, and applications are not required to consider the tags when interpreting the meaning of a resource.
     */
    tag?: fhir.CodingArgs[] | undefined;
}
/**
 * The metadata about a resource. This is content in the resource that is maintained by the infrastructure. Changes to the content may not always be associated with version changes to the resource.
 */
export declare class Meta extends fhir.FhirElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The version specific identifier, as it appears in the version portion of the URL. This values changes when the resource is created, updated, or deleted.
     */
    versionId?: fhir.FhirId | undefined;
    /**
     * When the resource last changed - e.g. when the version changed.
     */
    lastUpdated?: fhir.FhirInstant | undefined;
    /**
     * A list of profiles [[[StructureDefinition]]]s that this resource claims to conform to. The URL is a reference to [[[StructureDefinition.url]]].
     */
    profile: fhir.FhirUri[];
    /**
     * Security labels applied to this resource. These tags connect specific resources to the overall security policy and infrastructure.
     */
    security: fhir.Coding[];
    /**
     * Tags applied to this resource. Tags are intended to be used to identify and relate resources to process and workflow, and applications are not required to consider the tags when interpreting the meaning of a resource.
     */
    tag: fhir.Coding[];
    /**
     * Default constructor for Meta - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<MetaArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=Meta.d.ts.map