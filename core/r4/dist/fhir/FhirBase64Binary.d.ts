import * as fhir from '../fhir.js';
/**
 * A stream of bytes, base64 encoded
 */
export interface FhirBase64BinaryArgs extends fhir.FhirPrimitiveArgs {
    /**
     * A stream of bytes, base64 encoded
     */
    value?: FhirBase64Binary | string | undefined | null;
}
/**
 * A stream of bytes, base64 encoded
 */
export declare class FhirBase64Binary extends fhir.FhirPrimitive {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Mapping of this datatype to a JSON equivalent
     */
    static readonly _fts_jsonType: string;
    static readonly _fts_regex: RegExp;
    /**
     * A base64Binary value, represented as a JS string
     */
    value?: string | null | undefined;
    /**
       * Create a FhirBase64Binary
       * @param value A stream of bytes, base64 encoded
       * @param id Unique id for inter-element referencing (uncommon on primitives)
       * @param extension Additional content defined by implementations
       * @param options Options to pass to extension constructors
    */
    constructor(source?: Partial<FhirBase64BinaryArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
//# sourceMappingURL=FhirBase64Binary.d.ts.map