import { Coding } from '../fhir/Coding.js';
/**
 * The kind of dose or rate specified.
 */
export declare const DoseRateTypeCodings: {
    /**
     * calculated: The dose specified is calculated by the prescriber or the system.
     */
    readonly Calculated: Coding;
    /**
     * ordered: The dose specified is as ordered by the prescriber.
     */
    readonly Ordered: Coding;
};
/**
 * The kind of dose or rate specified.
 */
export declare type DoseRateTypeCodingType = typeof DoseRateTypeCodings;
//# sourceMappingURL=DoseRateTypeCodings.d.ts.map