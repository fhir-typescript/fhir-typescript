import * as fhir from '../fhir.js';
/**
 * Valid arguments for the Reference type.
 */
export interface ReferenceArgs extends fhir.FhirElementArgs {
    /**
     * Using absolute URLs provides a stable scalable approach suitable for a cloud/web context, while using relative/logical references provides a flexible approach suitable for use when trading across closed eco-system boundaries.   Absolute URLs do not need to point to a FHIR RESTful server, though this is the preferred approach. If the URL conforms to the structure "/[type]/[id]" then it should be assumed that the reference is to a FHIR RESTful server.
     */
    reference?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Reference.reference
     */
    _reference?: fhir.FhirElementArgs;
    /**
     * When an identifier is provided in place of a reference, any system processing the reference will only be able to resolve the identifier to a reference if it understands the business context in which the identifier is used. Sometimes this is global (e.g. a national identifier) but often it is not. For this reason, none of the useful mechanisms described for working with references (e.g. chaining, includes) are possible, nor should servers be expected to be able resolve the reference. Servers may accept an identifier based reference untouched, resolve it, and/or reject it - see CapabilityStatement.rest.resource.referencePolicy.
     * When both an identifier and a literal reference are provided, the literal reference is preferred. Applications processing the resource are allowed - but not required - to check that the identifier matches the literal reference
     * Applications converting a logical reference to a literal reference may choose to leave the logical reference present, or remove it.
     */
    identifier?: fhir.IdentifierArgs | undefined;
    /**
     * This is generally not the same as the Resource.text of the referenced resource.  The purpose is to identify what's being referenced, not to fully describe it.
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
     * Using absolute URLs provides a stable scalable approach suitable for a cloud/web context, while using relative/logical references provides a flexible approach suitable for use when trading across closed eco-system boundaries.   Absolute URLs do not need to point to a FHIR RESTful server, though this is the preferred approach. If the URL conforms to the structure "/[type]/[id]" then it should be assumed that the reference is to a FHIR RESTful server.
     */
    reference?: fhir.FhirString | undefined;
    /**
     * When an identifier is provided in place of a reference, any system processing the reference will only be able to resolve the identifier to a reference if it understands the business context in which the identifier is used. Sometimes this is global (e.g. a national identifier) but often it is not. For this reason, none of the useful mechanisms described for working with references (e.g. chaining, includes) are possible, nor should servers be expected to be able resolve the reference. Servers may accept an identifier based reference untouched, resolve it, and/or reject it - see CapabilityStatement.rest.resource.referencePolicy.
     * When both an identifier and a literal reference are provided, the literal reference is preferred. Applications processing the resource are allowed - but not required - to check that the identifier matches the literal reference
     * Applications converting a logical reference to a literal reference may choose to leave the logical reference present, or remove it.
     */
    identifier?: fhir.Identifier | undefined;
    /**
     * This is generally not the same as the Resource.text of the referenced resource.  The purpose is to identify what's being referenced, not to fully describe it.
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