import { CodingArgs } from '../fhir/Coding.js';
/**
 * A rating system that describes the quality of evidence such as the GRADE, DynaMed, or Oxford CEBM systems.
 */
export declare type EvidenceQualityCodingType = {
    /**
     * high: High quality evidence.
     */
    HighQuality: CodingArgs;
    /**
     * low: Low quality evidence.
     */
    LowQuality: CodingArgs;
    /**
     * moderate: Moderate quality evidence.
     */
    ModerateQuality: CodingArgs;
    /**
     * very-low: Very low quality evidence.
     */
    VeryLowQuality: CodingArgs;
};
/**
 * A rating system that describes the quality of evidence such as the GRADE, DynaMed, or Oxford CEBM systems.
 */
export declare const EvidenceQualityCodings: EvidenceQualityCodingType;
//# sourceMappingURL=EvidenceQualityCodings.d.ts.map