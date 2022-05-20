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
     * Very often, a server will also know of a resource that references the binary, and can automatically apply the appropriate access rules based on that reference. However, there are some circumstances where this is not appropriate, e.g. the binary is uploaded directly to the server without any linking resource, the binary is referred to from multiple different resources, and/or the binary is content such as an application logo that has less protection than any of the resources that reference it.
     */
    securityContext?: fhir.ReferenceArgs | undefined;
    /**
     * If the content type is itself base64 encoding, then this will be base64 encoded twice - what is created by un-base64ing the content must be the specified content type.
     */
    data?: fhir.FhirBase64Binary | string | undefined;
}
/**
 * A resource that represents the data of a single raw artifact as digital content accessible in its native format.  A Binary resource can contain any content, whether text, image, pdf, zip archive, etc.
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
     * Very often, a server will also know of a resource that references the binary, and can automatically apply the appropriate access rules based on that reference. However, there are some circumstances where this is not appropriate, e.g. the binary is uploaded directly to the server without any linking resource, the binary is referred to from multiple different resources, and/or the binary is content such as an application logo that has less protection than any of the resources that reference it.
     */
    securityContext?: fhir.Reference | undefined;
    /**
     * If the content type is itself base64 encoding, then this will be base64 encoded twice - what is created by un-base64ing the content must be the specified content type.
     */
    data?: fhir.FhirBase64Binary | undefined;
    /**
     * Default constructor for Binary - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<BinaryArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
//# sourceMappingURL=Binary.d.ts.map