import { CodingArgs } from '../fhir/Coding.js';
/**
 * Complete, proposed, exploratory, other.
 */
export declare type ClaimUseLinkCodingType = {
    /**
     * complete: The treatment is complete and this represents a Claim for the services.
     */
    Complete: CodingArgs;
    /**
     * exploratory: The treatment is proposed and this represents a Pre-determination for the services.
     */
    Exploratory: CodingArgs;
    /**
     * other: A locally defined or otherwise resolved status.
     */
    Other: CodingArgs;
    /**
     * proposed: The treatment is proposed and this represents a Pre-authorization for the services.
     */
    Proposed: CodingArgs;
};
/**
 * Complete, proposed, exploratory, other.
 */
export declare const ClaimUseLinkCodings: ClaimUseLinkCodingType;
//# sourceMappingURL=ClaimUseLinkCodings.d.ts.map