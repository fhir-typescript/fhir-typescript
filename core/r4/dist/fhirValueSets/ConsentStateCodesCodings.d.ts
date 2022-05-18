import { Coding } from '../fhir/Coding.js';
/**
 * Indicates the state of the consent.
 */
export declare const ConsentStateCodesCodings: {
    /**
     * active: The consent is to be followed and enforced.
     */
    readonly Active: Coding;
    /**
     * draft: The consent is in development or awaiting use but is not yet intended to be acted upon.
     */
    readonly Pending: Coding;
    /**
     * entered-in-error: The consent was created wrongly (e.g. wrong patient) and should be ignored.
     */
    readonly EnteredInError: Coding;
    /**
     * inactive: The consent is terminated or replaced.
     */
    readonly Inactive: Coding;
    /**
     * proposed: The consent has been proposed but not yet agreed to by all parties. The negotiation stage.
     */
    readonly Proposed: Coding;
    /**
     * rejected: The consent has been rejected by one or more of the parties.
     */
    readonly Rejected: Coding;
};
/**
 * Indicates the state of the consent.
 */
export declare type ConsentStateCodesCodingType = typeof ConsentStateCodesCodings;
//# sourceMappingURL=ConsentStateCodesCodings.d.ts.map