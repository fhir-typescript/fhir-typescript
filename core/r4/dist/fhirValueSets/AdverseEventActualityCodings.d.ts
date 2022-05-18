import { Coding } from '../fhir/Coding.js';
/**
 * Overall nature of the adverse event, e.g. real or potential.
 */
export declare const AdverseEventActualityCodings: {
    /**
     * actual: The adverse event actually happened regardless of whether anyone was affected or harmed.
     */
    readonly AdverseEvent: Coding;
    /**
     * potential: A potential adverse event.
     */
    readonly PotentialAdverseEvent: Coding;
};
/**
 * Overall nature of the adverse event, e.g. real or potential.
 */
export declare type AdverseEventActualityCodingType = typeof AdverseEventActualityCodings;
//# sourceMappingURL=AdverseEventActualityCodings.d.ts.map