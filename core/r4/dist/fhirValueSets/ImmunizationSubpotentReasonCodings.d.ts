import { Coding } from '../fhir/Coding.js';
/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the reason why a dose is considered to be subpotent. This value set is provided as a suggestive example.
 */
export declare const ImmunizationSubpotentReasonCodings: {
    /**
     * coldchainbreak: The vaccine experienced a cold chain break.
     */
    readonly ColdChainBreak: Coding;
    /**
     * partial: The full volume of the dose was not administered to the patient.
     */
    readonly PartialDose: Coding;
    /**
     * recall: The vaccine was recalled by the manufacturer.
     */
    readonly ManufacturerRecall: Coding;
};
/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the reason why a dose is considered to be subpotent. This value set is provided as a suggestive example.
 */
export declare type ImmunizationSubpotentReasonCodingType = typeof ImmunizationSubpotentReasonCodings;
//# sourceMappingURL=ImmunizationSubpotentReasonCodings.d.ts.map