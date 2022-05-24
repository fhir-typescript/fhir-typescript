import { CodingArgs } from '../fhir/Coding.js';
/**
 * This value set is provided as an example. The value set to instantiate this attribute should be drawn from a robust terminology code system that consists of or contains concepts to support the medication process.
 */
export declare type ReasonMedicationGivenCodingType = {
    /**
     * a: No reason known.
     */
    None: CodingArgs;
    /**
     * b: The administration was following an ordered protocol.
     */
    GivenAsOrdered: CodingArgs;
    /**
     * c: The administration was needed to treat an emergency.
     */
    Emergency: CodingArgs;
};
/**
 * This value set is provided as an example. The value set to instantiate this attribute should be drawn from a robust terminology code system that consists of or contains concepts to support the medication process.
 */
export declare const ReasonMedicationGivenCodings: ReasonMedicationGivenCodingType;
//# sourceMappingURL=ReasonMedicationGivenCodings.d.ts.map