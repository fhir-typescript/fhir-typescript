import * as fhir from '../fhir.js';
/**
 * RFC 4122
 */
export interface FhirIdArgs extends fhir.FhirPrimitiveArgs {
    /**
     * RFC 4122
     */
    value?: FhirId | string | undefined | null;
}
/**
 * RFC 4122
 */
export declare class FhirId extends fhir.FhirPrimitive {
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
     * A id value, represented as a JS string
     */
    value?: string | null | undefined;
    /**
       * Create a FhirId
       * @param value RFC 4122
       * @param id Unique id for inter-element referencing (uncommon on primitives)
       * @param extension Additional content defined by implementations
       * @param options Options to pass to extension constructors
    */
    constructor(source?: Partial<FhirIdArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
//# sourceMappingURL=FhirId.d.ts.map