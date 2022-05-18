import * as fhir from '../fhir.js';
export interface FhirPrimitiveArgs {
    /**
     * Value of the primitive - constrained by decendant classes.
     */
    value?: any | null | undefined;
    /**
      * Unique id for inter-element referencing
      */
    id?: string | undefined;
    /**
      * Additional content defined by implementations
      */
    extension?: (fhir.Extension | null)[] | undefined;
}
export declare class FhirPrimitive extends fhir.FhirBase {
    readonly _fts_isPrimitive: boolean;
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    readonly _fts_dataType: string;
    readonly _fts_jsonType: string;
    /**
     * Value of the primitive - constrained by decendant classes.
     */
    value?: boolean | number | bigint | string | null | undefined;
    /**
      * Unique id for inter-element referencing
      */
    id?: string | undefined;
    /**
      * Additional content defined by implementations
      */
    extension?: (fhir.Extension | null)[] | undefined;
    /**
     * Constructor for FHIR primitive type elements
     * @param value
     * @param id
     * @param extension
     * @param options
     */
    constructor(source?: Partial<FhirPrimitiveArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Add an extension with the desired URL and FHIR value
     * @param url
     * @param value
     */
    addExtension(url: string, value: fhir.FhirBase): void;
}
//# sourceMappingURL=FhirPrimitive.d.ts.map