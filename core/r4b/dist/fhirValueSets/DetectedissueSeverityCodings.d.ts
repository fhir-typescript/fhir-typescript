import { CodingArgs } from '../fhir/Coding.js';
/**
 * Indicates the potential degree of impact of the identified issue on the patient.
 */
export declare type DetectedissueSeverityCodingType = {
    /**
     * high: Indicates the issue may be life-threatening or has the potential to cause permanent injury.
     */
    High: CodingArgs;
    /**
     * low: Indicates the issue may result in some adverse consequences but is unlikely to substantially affect the situation of the subject.
     */
    Low: CodingArgs;
    /**
     * moderate: Indicates the issue may result in noticeable adverse consequences but is unlikely to be life-threatening or cause permanent injury.
     */
    Moderate: CodingArgs;
};
/**
 * Indicates the potential degree of impact of the identified issue on the patient.
 */
export declare const DetectedissueSeverityCodings: DetectedissueSeverityCodingType;
//# sourceMappingURL=DetectedissueSeverityCodings.d.ts.map