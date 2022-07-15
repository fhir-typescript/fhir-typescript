import { CodingArgs } from '../fhir/Coding.js';
/**
 * Codes identifying the category of observation range.
 */
export declare type ObservationRangeCategoryCodingType = {
    /**
     * absolute: Absolute Range for Ordinal and Continuous Observations. Results outside this range are not possible.
     */
    AbsoluteRange: CodingArgs;
    /**
     * critical: Critical Range for Ordinal and Continuous Observations.
     */
    CriticalRange: CodingArgs;
    /**
     * reference: Reference (Normal) Range for Ordinal and Continuous Observations.
     */
    ReferenceRange: CodingArgs;
};
/**
 * Codes identifying the category of observation range.
 */
export declare const ObservationRangeCategoryCodings: ObservationRangeCategoryCodingType;
//# sourceMappingURL=ObservationRangeCategoryCodings.d.ts.map