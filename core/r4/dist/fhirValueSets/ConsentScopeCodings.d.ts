import { CodingArgs } from '../fhir/Coding.js';
/**
 * This value set includes the four Consent scope codes.
 */
export declare type ConsentScopeCodingType = {
    /**
     * adr: Actions to be taken if they are no longer able to make decisions for themselves
     */
    AdvancedCareDirective: CodingArgs;
    /**
     * patient-privacy: Agreement to collect, access, use or disclose (share) information
     */
    PrivacyConsent: CodingArgs;
    /**
     * research: Consent to participate in research protocol and information sharing required
     */
    Research: CodingArgs;
    /**
     * treatment: Consent to undergo a specific treatment
     */
    Treatment: CodingArgs;
};
/**
 * This value set includes the four Consent scope codes.
 */
export declare const ConsentScopeCodings: ConsentScopeCodingType;
//# sourceMappingURL=ConsentScopeCodings.d.ts.map