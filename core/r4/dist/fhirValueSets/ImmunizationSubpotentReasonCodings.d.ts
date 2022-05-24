import { CodingArgs } from '../fhir/Coding.js';
/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the reason why a dose is considered to be subpotent. This value set is provided as a suggestive example.
 */
export declare type ImmunizationSubpotentReasonCodingType = {
    /**
     * coldchainbreak: The vaccine experienced a cold chain break.
     */
    ColdChainBreak: CodingArgs;
    /**
     * partial: The full volume of the dose was not administered to the patient.
     */
    PartialDose: CodingArgs;
    /**
     * recall: The vaccine was recalled by the manufacturer.
     */
    ManufacturerRecall: CodingArgs;
};
/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the reason why a dose is considered to be subpotent. This value set is provided as a suggestive example.
 */
export declare const ImmunizationSubpotentReasonCodings: ImmunizationSubpotentReasonCodingType;
//# sourceMappingURL=ImmunizationSubpotentReasonCodings.d.ts.map