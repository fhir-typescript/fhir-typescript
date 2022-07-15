import * as fhir from '../fhir.js';
/**
 * Valid arguments for the Binary type.
 */
export interface BinaryArgs extends fhir.ResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "Binary" | undefined;
    /**
     * MimeType of the binary content represented as a standard MimeType (BCP 13).
     */
    contentType: fhir.FhirCode | string | undefined;
    /**
     * Extended properties for primitive element: Binary.contentType
     */
    _contentType?: fhir.FhirElementArgs;
    /**
     * The actual content, base64 encoded.
     */
    content: fhir.FhirBase64Binary | string | undefined;
    /**
     * Extended properties for primitive element: Binary.content
     */
    _content?: fhir.FhirElementArgs;
}
/**
 * A binary resource can contain any content, whether text, image, pdf, zip archive, etc.
 */
export declare class Binary extends fhir.Resource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "Binary";
    /**
     * MimeType of the binary content represented as a standard MimeType (BCP 13).
     */
    contentType: fhir.FhirCode | null;
    /**
     * The actual content, base64 encoded.
     */
    content: fhir.FhirBase64Binary | null;
    /**
     * Default constructor for Binary - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<BinaryArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=Binary.d.ts.map