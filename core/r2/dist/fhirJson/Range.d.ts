import * as fhir from '../fhirJson.js';
/**
 * A set of ordered Quantities defined by a low and high limit.
 */
export interface Range extends fhir.FhirElement {
    /**
     * The low limit. The boundary is inclusive.
     */
    low?: fhir.Quantity | undefined;
    /**
     * The high limit. The boundary is inclusive.
     */
    high?: fhir.Quantity | undefined;
}
//# sourceMappingURL=Range.d.ts.map