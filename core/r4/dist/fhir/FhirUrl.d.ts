import * as fhir from '../fhir.js';
/**
 * A URI that is a literal reference
 */
export interface FhirUrlArgs extends fhir.FhirPrimitiveArgs {
    /**
     * A URI that is a literal reference
     */
    value?: FhirUrl | string | undefined;
}
/**
 * A URI that is a literal reference
 */
export declare class FhirUrl extends fhir.FhirPrimitive {
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
     * A url value, represented as a JS string
     */
    value?: string | null | undefined;
    /**
       * Create a FhirUrl
       * @param value A URI that is a literal reference
       * @param id Unique id for inter-element referencing (uncommon on primitives)
       * @param extension Additional content defined by implementations
       * @param options Options to pass to extension constructors
    */
    constructor(source?: Partial<FhirUrlArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
//# sourceMappingURL=FhirUrl.d.ts.map