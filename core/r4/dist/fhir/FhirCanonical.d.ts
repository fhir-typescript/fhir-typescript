import * as fhir from '../fhir.js';
/**
 * see [Canonical References](references.html#canonical)
 */
export interface FhirCanonicalArgs extends fhir.FhirPrimitiveArgs {
    /**
     * see [Canonical References](references.html#canonical)
     */
    value?: FhirCanonical | string | undefined | null;
}
/**
 * see [Canonical References](references.html#canonical)
 */
export declare class FhirCanonical extends fhir.FhirPrimitive {
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
     * A canonical value, represented as a JS string
     */
    value?: string | null | undefined;
    /**
       * Create a FhirCanonical
       * @param value see [Canonical References](references.html#canonical)
       * @param id Unique id for inter-element referencing (uncommon on primitives)
       * @param extension Additional content defined by implementations
       * @param options Options to pass to extension constructors
    */
    constructor(source?: Partial<FhirCanonicalArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
//# sourceMappingURL=FhirCanonical.d.ts.map