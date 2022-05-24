import { CodingArgs } from '../fhir/Coding.js';
/**
 * Codes providing the status/availability of a specimen.
 */
export declare type SpecimenStatusCodingType = {
    /**
     * available: The physical specimen is present and in good condition.
     */
    Available: CodingArgs;
    /**
     * entered-in-error: The specimen was entered in error and therefore nullified.
     */
    EnteredInError: CodingArgs;
    /**
     * unavailable: There is no physical specimen because it is either lost, destroyed or consumed.
     */
    Unavailable: CodingArgs;
    /**
     * unsatisfactory: The specimen cannot be used because of a quality issue such as a broken container, contamination, or too old.
     */
    Unsatisfactory: CodingArgs;
};
/**
 * Codes providing the status/availability of a specimen.
 */
export declare const SpecimenStatusCodings: SpecimenStatusCodingType;
//# sourceMappingURL=SpecimenStatusCodings.d.ts.map