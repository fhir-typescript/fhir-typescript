import * as fhir from '../fhir.js';
/**
 * Valid arguments for the Meta type.
 */
export interface MetaArgs extends fhir.FhirElementArgs {
    /**
     * The server assigns this value, and ignores what the client specifies, except in the case that the server is imposing version integrity on updates/deletes.
     */
    versionId?: fhir.FhirId | string | undefined;
    /**
     * Extended properties for primitive element: Meta.versionId
     */
    _versionId?: fhir.FhirElementArgs;
    /**
     * This value is always populated except when the resource is first being created. The server / resource manager sets this value; what a client provides is irrelevant.
     */
    lastUpdated?: fhir.FhirInstant | string | undefined;
    /**
     * Extended properties for primitive element: Meta.lastUpdated
     */
    _lastUpdated?: fhir.FhirElementArgs;
    /**
     * It is up to the server and/or other infrastructure of policy to determine whether/how these claims are verified and/or updated over time.  The list of profile URLs is a set.
     */
    profile?: fhir.FhirUri[] | (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: Meta.profile
     */
    _profile?: (fhir.FhirElementArgs | null)[];
    /**
     * The security labels can be updated without changing the stated version of the resource  The list of security labels is a set. Uniqueness is based the system/code, and version and display are ignored.
     */
    security?: fhir.CodingArgs[] | undefined;
    /**
     * The tags can be updated without changing the stated version of the resource.  The list of tags is a set. Uniqueness is based the system/code, and version and display are ignored.
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
     * The server assigns this value, and ignores what the client specifies, except in the case that the server is imposing version integrity on updates/deletes.
     */
    versionId?: fhir.FhirId | undefined;
    /**
     * This value is always populated except when the resource is first being created. The server / resource manager sets this value; what a client provides is irrelevant.
     */
    lastUpdated?: fhir.FhirInstant | undefined;
    /**
     * It is up to the server and/or other infrastructure of policy to determine whether/how these claims are verified and/or updated over time.  The list of profile URLs is a set.
     */
    profile: fhir.FhirUri[];
    /**
     * The security labels can be updated without changing the stated version of the resource  The list of security labels is a set. Uniqueness is based the system/code, and version and display are ignored.
     */
    security: fhir.Coding[];
    /**
     * The tags can be updated without changing the stated version of the resource.  The list of tags is a set. Uniqueness is based the system/code, and version and display are ignored.
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