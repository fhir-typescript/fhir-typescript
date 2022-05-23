import * as fhir from '../fhir.js';
/**
 * A string which has at least one character and no leading or trailing whitespace and where there is no whitespace other than single spaces in the contents
 */
export interface FhirCodeArgs<CodeType extends string = string> extends fhir.FhirPrimitiveArgs {
    /**
     * A string which has at least one character and no leading or trailing whitespace and where there is no whitespace other than single spaces in the contents
     */
    value?: FhirCode<CodeType> | CodeType | string | undefined | null;
}
/**
 * A string which has at least one character and no leading or trailing whitespace and where there is no whitespace other than single spaces in the contents
 */
export declare class FhirCode<CodeType extends string = string> extends fhir.FhirPrimitive {
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
     * A code value, represented as a JS string
     */
    value?: CodeType | string | null | undefined;
    /**
       * Create a FhirCode
       * @param value A string which has at least one character and no leading or trailing whitespace and where there is no whitespace other than single spaces in the contents
       * @param id Unique id for inter-element referencing (uncommon on primitives)
       * @param extension Additional content defined by implementations
       * @param options Options to pass to extension constructors
    */
    constructor(source?: Partial<FhirCodeArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
//# sourceMappingURL=FhirCode.d.ts.map