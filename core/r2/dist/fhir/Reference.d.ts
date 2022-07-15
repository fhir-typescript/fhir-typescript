import * as fhir from '../fhir.js';
/**
 * Valid arguments for the Reference type.
 */
export interface ReferenceArgs extends fhir.FhirElementArgs {
    /**
     * A reference to a location at which the other resource is found. The reference may be a relative reference, in which case it is relative to the service base URL, or an absolute URL that resolves to the location where the resource is found. The reference may be version specific or not. If the reference is not to a FHIR RESTful server, then it should be assumed to be version specific. Internal fragment references (start with '#') refer to contained resources.
     */
    reference?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Reference.reference
     */
    _reference?: fhir.FhirElementArgs;
    /**
     * Plain text narrative that identifies the resource in addition to the resource reference.
     */
    display?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Reference.display
     */
    _display?: fhir.FhirElementArgs;
}
/**
 * A reference from one resource to another.
 */
export declare class Reference extends fhir.FhirElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * A reference to a location at which the other resource is found. The reference may be a relative reference, in which case it is relative to the service base URL, or an absolute URL that resolves to the location where the resource is found. The reference may be version specific or not. If the reference is not to a FHIR RESTful server, then it should be assumed to be version specific. Internal fragment references (start with '#') refer to contained resources.
     */
    reference?: fhir.FhirString | undefined;
    /**
     * Plain text narrative that identifies the resource in addition to the resource reference.
     */
    display?: fhir.FhirString | undefined;
    /**
     * Default constructor for Reference - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ReferenceArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
    /**
     * Create a reference from an existing resource
     */
    static fromResource(source: fhir.FhirResource, baseUrl?: string): Reference;
}
//# sourceMappingURL=Reference.d.ts.map