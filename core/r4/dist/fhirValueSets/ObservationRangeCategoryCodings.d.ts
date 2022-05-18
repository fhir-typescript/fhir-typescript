import { Coding } from '../fhir/Coding.js';
/**
 * Codes identifying the category of observation range.
 */
export declare const ObservationRangeCategoryCodings: {
    /**
     * absolute: Absolute Range for Ordinal and Continuous Observations. Results outside this range are not possible.
     */
    readonly AbsoluteRange: Coding;
    /**
     * critical: Critical Range for Ordinal and Continuous Observations.
     */
    readonly CriticalRange: Coding;
    /**
     * reference: Reference (Normal) Range for Ordinal and Continuous Observations.
     */
    readonly ReferenceRange: Coding;
};
/**
 * Codes identifying the category of observation range.
 */
export declare type ObservationRangeCategoryCodingType = typeof ObservationRangeCategoryCodings;
//# sourceMappingURL=ObservationRangeCategoryCodings.d.ts.map