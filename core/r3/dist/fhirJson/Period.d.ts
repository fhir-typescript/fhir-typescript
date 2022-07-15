import * as fhir from '../fhirJson.js';
/**
 * A time period defined by a start and end date and optionally time.
 */
export interface Period extends fhir.FhirElement {
    /**
     * If the low element is missing, the meaning is that the low boundary is not known.
     */
    start?: string | undefined;
    /**
     * Extended properties for primitive element: Period.start
     */
    _start?: fhir.FhirElement;
    /**
     * The high value includes any matching date/time. i.e. 2012-02-03T10:00:00 is in a period that has a end value of 2012-02-03.
     */
    end?: string | undefined;
    /**
     * Extended properties for primitive element: Period.end
     */
    _end?: fhir.FhirElement;
}
//# sourceMappingURL=Period.d.ts.map