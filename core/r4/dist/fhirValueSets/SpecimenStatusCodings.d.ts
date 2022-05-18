import { Coding } from '../fhir/Coding.js';
/**
 * Codes providing the status/availability of a specimen.
 */
export declare const SpecimenStatusCodings: {
    /**
     * available: The physical specimen is present and in good condition.
     */
    readonly Available: Coding;
    /**
     * entered-in-error: The specimen was entered in error and therefore nullified.
     */
    readonly EnteredInError: Coding;
    /**
     * unavailable: There is no physical specimen because it is either lost, destroyed or consumed.
     */
    readonly Unavailable: Coding;
    /**
     * unsatisfactory: The specimen cannot be used because of a quality issue such as a broken container, contamination, or too old.
     */
    readonly Unsatisfactory: Coding;
};
/**
 * Codes providing the status/availability of a specimen.
 */
export declare type SpecimenStatusCodingType = typeof SpecimenStatusCodings;
//# sourceMappingURL=SpecimenStatusCodings.d.ts.map