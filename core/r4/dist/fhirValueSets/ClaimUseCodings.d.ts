import { CodingArgs } from '../fhir/Coding.js';
/**
 * The purpose of the Claim: predetermination, preauthorization, claim.
 */
export declare type ClaimUseCodingType = {
    /**
     * claim: The treatment is complete and this represents a Claim for the services.
     */
    Claim: CodingArgs;
    /**
     * preauthorization: The treatment is proposed and this represents a Pre-authorization for the services.
     */
    Preauthorization: CodingArgs;
    /**
     * predetermination: The treatment is proposed and this represents a Pre-determination for the services.
     */
    Predetermination: CodingArgs;
};
/**
 * The purpose of the Claim: predetermination, preauthorization, claim.
 */
export declare const ClaimUseCodings: ClaimUseCodingType;
//# sourceMappingURL=ClaimUseCodings.d.ts.map