import { OperationOutcome } from './OperationOutcome.js';
export interface FhirConstructorOptions {
    /** If instantiated objects should allow non-FHIR defined properties */
    allowUnknownElements?: boolean | undefined;
}
export interface FhirBaseArgs {
}
export declare class FhirBase {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    readonly _fts_dataType: string;
    /** Default constructor */
    constructor(source?: Partial<FhirBaseArgs>, options?: FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): OperationOutcome;
    /**
     * Convert a class-structured model into JSON
     * @returns JSON-compatible version of this object
     */
    toJSON(): any;
}
//# sourceMappingURL=FhirBase.d.ts.map