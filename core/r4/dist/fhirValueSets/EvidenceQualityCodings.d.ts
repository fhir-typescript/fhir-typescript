import { Coding } from '../fhir/Coding.js';
/**
 * A rating system that describes the quality of evidence such as the GRADE, DynaMed, or Oxford CEBM systems.
 */
export declare const EvidenceQualityCodings: {
    /**
     * high: High quality evidence.
     */
    readonly HighQuality: Coding;
    /**
     * low: Low quality evidence.
     */
    readonly LowQuality: Coding;
    /**
     * moderate: Moderate quality evidence.
     */
    readonly ModerateQuality: Coding;
    /**
     * very-low: Very low quality evidence.
     */
    readonly VeryLowQuality: Coding;
};
/**
 * A rating system that describes the quality of evidence such as the GRADE, DynaMed, or Oxford CEBM systems.
 */
export declare type EvidenceQualityCodingType = typeof EvidenceQualityCodings;
//# sourceMappingURL=EvidenceQualityCodings.d.ts.map