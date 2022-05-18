import { Coding } from '../fhir/Coding.js';
/**
 * The purpose of the Claim: predetermination, preauthorization, claim.
 */
export declare const ClaimUseCodings: {
    /**
     * claim: The treatment is complete and this represents a Claim for the services.
     */
    readonly Claim: Coding;
    /**
     * preauthorization: The treatment is proposed and this represents a Pre-authorization for the services.
     */
    readonly Preauthorization: Coding;
    /**
     * predetermination: The treatment is proposed and this represents a Pre-determination for the services.
     */
    readonly Predetermination: Coding;
};
/**
 * The purpose of the Claim: predetermination, preauthorization, claim.
 */
export declare type ClaimUseCodingType = typeof ClaimUseCodings;
//# sourceMappingURL=ClaimUseCodings.d.ts.map