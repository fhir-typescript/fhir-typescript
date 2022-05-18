import * as fhir from '../fhir.js';
/**
 * See The Open Group, CDE 1.1 Remote Procedure Call specification, Appendix A.
 */
export interface FhirUuidArgs extends fhir.FhirUriArgs {
    /**
     * See The Open Group, CDE 1.1 Remote Procedure Call specification, Appendix A.
     */
    value?: FhirUuid | string | undefined;
}
/**
 * See The Open Group, CDE 1.1 Remote Procedure Call specification, Appendix A.
 */
export declare class FhirUuid extends fhir.FhirUri {
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
     * A uuid value, represented as a JS string
     */
    value?: string | null | undefined;
    /**
       * Create a FhirUuid
       * @param value See The Open Group, CDE 1.1 Remote Procedure Call specification, Appendix A.
       * @param id Unique id for inter-element referencing (uncommon on primitives)
       * @param extension Additional content defined by implementations
       * @param options Options to pass to extension constructors
    */
    constructor(source?: Partial<FhirUuidArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
}
//# sourceMappingURL=FhirUuid.d.ts.map