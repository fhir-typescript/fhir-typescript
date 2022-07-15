import * as fhir from '../fhir.js';
/**
 * Valid arguments for the Period type.
 */
export interface PeriodArgs extends fhir.FhirElementArgs {
    /**
     * If the low element is missing, the meaning is that the low boundary is not known.
     */
    start?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: Period.start
     */
    _start?: fhir.FhirElementArgs;
    /**
     * The high value includes any matching date/time. i.e. 2012-02-03T10:00:00 is in a period that has an end value of 2012-02-03.
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
     * If the low element is missing, the meaning is that the low boundary is not known.
     */
    start?: fhir.FhirDateTime | undefined;
    /**
     * The high value includes any matching date/time. i.e. 2012-02-03T10:00:00 is in a period that has an end value of 2012-02-03.
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