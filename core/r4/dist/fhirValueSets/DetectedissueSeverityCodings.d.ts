import { Coding } from '../fhir/Coding.js';
/**
 * Indicates the potential degree of impact of the identified issue on the patient.
 */
export declare const DetectedissueSeverityCodings: {
    /**
     * high: Indicates the issue may be life-threatening or has the potential to cause permanent injury.
     */
    readonly High: Coding;
    /**
     * low: Indicates the issue may result in some adverse consequences but is unlikely to substantially affect the situation of the subject.
     */
    readonly Low: Coding;
    /**
     * moderate: Indicates the issue may result in noticeable adverse consequences but is unlikely to be life-threatening or cause permanent injury.
     */
    readonly Moderate: Coding;
};
/**
 * Indicates the potential degree of impact of the identified issue on the patient.
 */
export declare type DetectedissueSeverityCodingType = typeof DetectedissueSeverityCodings;
//# sourceMappingURL=DetectedissueSeverityCodings.d.ts.map