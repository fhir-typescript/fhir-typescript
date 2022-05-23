import * as fhir from '../fhir.js';
/**
 * XHTML
 */
export interface FhirXhtmlArgs extends fhir.FhirPrimitiveArgs {
    /**
     * XHTML
     */
    value?: FhirXhtml | string | undefined | null;
}
/**
 * XHTML
 */
export declare class FhirXhtml extends fhir.FhirPrimitive {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Mapping of this datatype to a JSON equivalent
     */
    static readonly _fts_jsonType: string;
    /**
     * A xhtml value, represented as a JS string
     */
    value?: string | null | undefined;
    /**
       * Create a FhirXhtml
       * @param value XHTML
       * @param id Unique id for inter-element referencing (uncommon on primitives)
       * @param extension Additional content defined by implementations
       * @param options Options to pass to extension constructors
    */
    constructor(source?: Partial<FhirXhtmlArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
//# sourceMappingURL=FhirXhtml.d.ts.map