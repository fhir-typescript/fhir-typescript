import * as fhir from '../fhirJson.js';
/**
 * A relationship of two Quantity values - expressed as a numerator and a denominator.
 */
export interface Ratio extends fhir.FhirElement {
    /**
     * The value of the numerator.
     */
    numerator?: fhir.Quantity | undefined;
    /**
     * The value of the denominator.
     */
    denominator?: fhir.Quantity | undefined;
}
//# sourceMappingURL=Ratio.d.ts.map