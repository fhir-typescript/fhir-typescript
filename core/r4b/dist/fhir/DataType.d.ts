import * as fhir from '../fhir.js';
/**
 * Valid arguments for the DataType type.
 */
export interface DataTypeArgs extends fhir.FhirElementArgs {
}
/**
 * The base class for all re-useable types defined as part of the FHIR Specification.
 */
export declare class DataType extends fhir.FhirElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Default constructor for DataType - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<DataTypeArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=DataType.d.ts.map