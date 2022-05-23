import * as fhir from '../fhir.js';
/**
 * Value of "true" or "false"
 */
export interface FhirBooleanArgs extends fhir.FhirPrimitiveArgs {
    /**
     * Value of "true" or "false"
     */
    value?: FhirBoolean | boolean | undefined | null;
}
/**
 * Value of "true" or "false"
 */
export declare class FhirBoolean extends fhir.FhirPrimitive {
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
     * A boolean value, represented as a JS boolean
     */
    value?: boolean | null | undefined;
    /**
       * Create a FhirBoolean
       * @param value Value of "true" or "false"
       * @param id Unique id for inter-element referencing (uncommon on primitives)
       * @param extension Additional content defined by implementations
       * @param options Options to pass to extension constructors
    */
    constructor(source?: Partial<FhirBooleanArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
    /**
     * Returns the primitive value of the specified object.
     */
    valueOf(): boolean;
}
//# sourceMappingURL=FhirBoolean.d.ts.map