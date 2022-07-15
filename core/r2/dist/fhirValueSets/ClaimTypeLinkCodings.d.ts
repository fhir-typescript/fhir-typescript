import { CodingArgs } from '../fhir/Coding.js';
/**
 * The type or discipline-style of the claim.
 */
export declare type ClaimTypeLinkCodingType = {
    /**
     * institutional: A claim for Institution based, typically in-patient, goods and services.
     */
    Institutional: CodingArgs;
    /**
     * oral: A claim for Oral Health (Dentist, Denturist, Hygienist) goods and services.
     */
    OralHealth: CodingArgs;
    /**
     * pharmacy: A claim for Pharmacy based goods and services.
     */
    Pharmacy: CodingArgs;
    /**
     * professional: A claim for Professional, typically out-patient, goods and services.
     */
    Professional: CodingArgs;
    /**
     * vision: A claim for Vision (Ophthamologist, Optometrist and Optician) goods and services.
     */
    Vision: CodingArgs;
};
/**
 * The type or discipline-style of the claim.
 */
export declare const ClaimTypeLinkCodings: ClaimTypeLinkCodingType;
//# sourceMappingURL=ClaimTypeLinkCodings.d.ts.map