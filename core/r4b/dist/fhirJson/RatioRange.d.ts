import * as fhir from '../fhirJson.js';
/**
 * A range of ratios expressed as a low and high numerator and a denominator.
 */
export interface RatioRange extends fhir.FhirElement {
    /**
     * If the low element is missing, the low boundary is not known.
     */
    lowNumerator?: fhir.Quantity | undefined;
    /**
     * If the high element is missing, the high boundary is not known.
     */
    highNumerator?: fhir.Quantity | undefined;
    /**
     * The value of the denominator.
     */
    denominator?: fhir.Quantity | undefined;
}
//# sourceMappingURL=RatioRange.d.ts.map