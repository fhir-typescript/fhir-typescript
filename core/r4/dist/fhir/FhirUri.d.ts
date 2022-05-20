import * as fhir from '../fhir.js';
/**
 * see http://en.wikipedia.org/wiki/Uniform_resource_identifier
 */
export interface FhirUriArgs extends fhir.FhirPrimitiveArgs {
    /**
     * see http://en.wikipedia.org/wiki/Uniform_resource_identifier
     */
    value?: FhirUri | string | undefined;
}
/**
 * see http://en.wikipedia.org/wiki/Uniform_resource_identifier
 */
export declare class FhirUri extends fhir.FhirPrimitive {
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
     * A uri value, represented as a JS string
     */
    value?: string | null | undefined;
    /**
       * Create a FhirUri
       * @param value see http://en.wikipedia.org/wiki/Uniform_resource_identifier
       * @param id Unique id for inter-element referencing (uncommon on primitives)
       * @param extension Additional content defined by implementations
       * @param options Options to pass to extension constructors
    */
    constructor(source?: Partial<FhirUriArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
//# sourceMappingURL=FhirUri.d.ts.map