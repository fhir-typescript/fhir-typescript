import * as fhir from '../fhir.js';
/**
 * RFC 3001. See also ISO/IEC 8824:1990 €
 */
export interface FhirOidArgs extends fhir.FhirUriArgs {
    /**
     * RFC 3001. See also ISO/IEC 8824:1990 €
     */
    value?: FhirOid | string | undefined;
}
/**
 * RFC 3001. See also ISO/IEC 8824:1990 €
 */
export declare class FhirOid extends fhir.FhirUri {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_jsonType: string;
    static readonly _fts_regex: RegExp;
    /**
     * A oid value, represented as a JS string
     */
    value?: string | null | undefined;
    /**
       * Create a FhirOid
       * @param value RFC 3001. See also ISO/IEC 8824:1990 €
       * @param id Unique id for inter-element referencing (uncommon on primitives)
       * @param extension Additional content defined by implementations
       * @param options Options to pass to extension constructors
    */
    constructor(source?: Partial<FhirOidArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
}
//# sourceMappingURL=FhirOid.d.ts.map