import * as fhir from '../fhir.js';
/**
 * A time during the day, with no date specified
 */
export interface FhirTimeArgs extends fhir.FhirStringArgs {
    /**
     * A time during the day, with no date specified
     */
    value?: FhirTime | string | undefined;
}
/**
 * A time during the day, with no date specified
 */
export declare class FhirTime extends fhir.FhirString {
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
     * A time value, represented as a JS string
     */
    value?: string | null | undefined;
    /**
       * Create a FhirTime
       * @param value A time during the day, with no date specified
       * @param id Unique id for inter-element referencing (uncommon on primitives)
       * @param extension Additional content defined by implementations
       * @param options Options to pass to extension constructors
    */
    constructor(source?: Partial<FhirTimeArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
}
//# sourceMappingURL=FhirTime.d.ts.map