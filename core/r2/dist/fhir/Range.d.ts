import * as fhir from '../fhir.js';
/**
 * Valid arguments for the Range type.
 */
export interface RangeArgs extends fhir.FhirElementArgs {
    /**
     * The low limit. The boundary is inclusive.
     */
    low?: fhir.QuantityArgs | undefined;
    /**
     * The high limit. The boundary is inclusive.
     */
    high?: fhir.QuantityArgs | undefined;
}
/**
 * A set of ordered Quantities defined by a low and high limit.
 */
export declare class Range extends fhir.FhirElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The low limit. The boundary is inclusive.
     */
    low?: fhir.Quantity | undefined;
    /**
     * The high limit. The boundary is inclusive.
     */
    high?: fhir.Quantity | undefined;
    /**
     * Default constructor for Range - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<RangeArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=Range.d.ts.map