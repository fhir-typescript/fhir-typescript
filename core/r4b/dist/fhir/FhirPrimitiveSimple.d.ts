import * as fhir from '../fhir.js';
export interface FhirPrimitiveSimpleArgs {
    /**
     * Value of the primitive - constrained by decendant classes.
     */
    value?: any | null | undefined;
}
export declare class FhirPrimitiveSimple extends fhir.FhirBase {
    static readonly _fts_isPrimitive: boolean;
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    static readonly _fts_jsonType: string;
    /**
     * Value of the primitive - constrained by decendant classes.
     */
    value?: boolean | number | bigint | string | null | undefined;
    /**
     * Constructor for FHIR primitive type elements that do not allow extended properties
     * @param source
     * @param options
     */
    constructor(source?: Partial<FhirPrimitiveSimpleArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=FhirPrimitiveSimple.d.ts.map