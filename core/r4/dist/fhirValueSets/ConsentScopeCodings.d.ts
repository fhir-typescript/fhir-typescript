import { Coding } from '../fhir/Coding.js';
/**
 * This value set includes the four Consent scope codes.
 */
export declare const ConsentScopeCodings: {
    /**
     * adr: Actions to be taken if they are no longer able to make decisions for themselves
     */
    readonly AdvancedCareDirective: Coding;
    /**
     * patient-privacy: Agreement to collect, access, use or disclose (share) information
     */
    readonly PrivacyConsent: Coding;
    /**
     * research: Consent to participate in research protocol and information sharing required
     */
    readonly Research: Coding;
    /**
     * treatment: Consent to undergo a specific treatment
     */
    readonly Treatment: Coding;
};
/**
 * This value set includes the four Consent scope codes.
 */
export declare type ConsentScopeCodingType = typeof ConsentScopeCodings;
//# sourceMappingURL=ConsentScopeCodings.d.ts.map