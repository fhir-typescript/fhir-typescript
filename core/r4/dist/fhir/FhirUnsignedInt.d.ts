import * as fhir from '../fhir.js';
/**
 * An integer with a value that is not negative (e.g. &gt;= 0)
 */
export interface FhirUnsignedIntArgs extends fhir.FhirPrimitiveArgs {
    /**
     * An integer with a value that is not negative (e.g. &gt;= 0)
     */
    value?: FhirUnsignedInt | number | undefined | null;
}
/**
 * An integer with a value that is not negative (e.g. &gt;= 0)
 */
export declare class FhirUnsignedInt extends fhir.FhirPrimitive {
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
     * A unsignedInt value, represented as a JS number
     */
    value?: number | null | undefined;
    /**
       * Create a FhirUnsignedInt
       * @param value An integer with a value that is not negative (e.g. >= 0)
       * @param id Unique id for inter-element referencing (uncommon on primitives)
       * @param extension Additional content defined by implementations
       * @param options Options to pass to extension constructors
    */
    constructor(source?: Partial<FhirUnsignedIntArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
//# sourceMappingURL=FhirUnsignedInt.d.ts.map