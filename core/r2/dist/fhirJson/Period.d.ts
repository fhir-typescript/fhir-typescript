import * as fhir from '../fhirJson.js';
/**
 * A time period defined by a start and end date and optionally time.
 */
export interface Period extends fhir.FhirElement {
    /**
     * The start of the period. The boundary is inclusive.
     */
    start?: string | undefined;
    /**
     * Extended properties for primitive element: Period.start
     */
    _start?: fhir.FhirElement;
    /**
     * The end of the period. If the end of the period is missing, it means that the period is ongoing. The start may be in the past, and the end date in the future, which means that period is expected/planned to end at that time.
     */
    end?: string | undefined;
    /**
     * Extended properties for primitive element: Period.end
     */
    _end?: fhir.FhirElement;
}
//# sourceMappingURL=Period.d.ts.map