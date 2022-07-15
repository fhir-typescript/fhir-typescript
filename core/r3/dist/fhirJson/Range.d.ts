import * as fhir from '../fhirJson.js';
/**
 * A set of ordered Quantities defined by a low and high limit.
 */
export interface Range extends fhir.FhirElement {
    /**
     * If the low element is missing, the low boundary is not known.
     */
    low?: fhir.Quantity | undefined;
    /**
     * If the high element is missing, the high boundary is not known.
     */
    high?: fhir.Quantity | undefined;
}
//# sourceMappingURL=Range.d.ts.map