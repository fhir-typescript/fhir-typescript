import { CodingArgs } from '../fhir/Coding.js';
/**
 * Indicates the state of the consent.
 */
export declare type ConsentStateCodingType = {
    /**
     * active: The consent is to be followed and enforced.
     */
    Active: CodingArgs;
    /**
     * draft: The consent is in development or awaiting use but is not yet intended to be acted upon.
     */
    Pending: CodingArgs;
    /**
     * entered-in-error: The consent was created wrongly (e.g. wrong patient) and should be ignored.
     */
    EnteredInError: CodingArgs;
    /**
     * inactive: The consent is terminated or replaced.
     */
    Inactive: CodingArgs;
    /**
     * proposed: The consent has been proposed but not yet agreed to by all parties. The negotiation stage.
     */
    Proposed: CodingArgs;
    /**
     * rejected: The consent has been rejected by one or more of the parties.
     */
    Rejected: CodingArgs;
};
/**
 * Indicates the state of the consent.
 */
export declare const ConsentStateCodings: ConsentStateCodingType;
//# sourceMappingURL=ConsentStateCodings.d.ts.map