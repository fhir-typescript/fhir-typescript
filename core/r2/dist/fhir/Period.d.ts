import * as fhir from '../fhir.js';
/**
 * Valid arguments for the Period type.
 */
export interface PeriodArgs extends fhir.FhirElementArgs {
    /**
     * The start of the period. The boundary is inclusive.
     */
    start?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: Period.start
     */
    _start?: fhir.FhirElementArgs;
    /**
     * The end of the period. If the end of the period is missing, it means that the period is ongoing. The start may be in the past, and the end date in the future, which means that period is expected/planned to end at that time.
     */
    end?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: Period.end
     */
    _end?: fhir.FhirElementArgs;
}
/**
 * A time period defined by a start and end date and optionally time.
 */
export declare class Period extends fhir.FhirElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The start of the period. The boundary is inclusive.
     */
    start?: fhir.FhirDateTime | undefined;
    /**
     * The end of the period. If the end of the period is missing, it means that the period is ongoing. The start may be in the past, and the end date in the future, which means that period is expected/planned to end at that time.
     */
    end?: fhir.FhirDateTime | undefined;
    /**
     * Default constructor for Period - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<PeriodArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=Period.d.ts.map