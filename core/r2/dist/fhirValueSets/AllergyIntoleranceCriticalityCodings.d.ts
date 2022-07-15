import { CodingArgs } from '../fhir/Coding.js';
/**
 * Estimate of the potential clinical harm, or seriousness, of a reaction to an identified Substance.
 */
export declare type AllergyIntoleranceCriticalityCodingType = {
    /**
     * CRITH: The potential clinical impact of a future reaction is estimated as high risk: exposure to substance may result in a life threatening or organ system threatening outcome. Future exposure to the Substance may be considered an absolute contra-indication.
     */
    HighRisk: CodingArgs;
    /**
     * CRITL: The potential clinical impact of a future reaction is estimated as low risk: exposure to substance is unlikely to result in a life threatening or organ system threatening outcome. Future exposure to the Substance is considered a relative contra-indication.
     */
    LowRisk: CodingArgs;
    /**
     * CRITU: Unable to assess the potential clinical impact with the information available.
     */
    UnableToDetermine: CodingArgs;
};
/**
 * Estimate of the potential clinical harm, or seriousness, of a reaction to an identified Substance.
 */
export declare const AllergyIntoleranceCriticalityCodings: AllergyIntoleranceCriticalityCodingType;
//# sourceMappingURL=AllergyIntoleranceCriticalityCodings.d.ts.map