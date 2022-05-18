/**
 * This value set includes the four Consent scope codes.
 */
export declare const ConsentScopeCodes: {
    /**
     * adr: Actions to be taken if they are no longer able to make decisions for themselves
     */
    readonly AdvancedCareDirective: "adr";
    /**
     * patient-privacy: Agreement to collect, access, use or disclose (share) information
     */
    readonly PrivacyConsent: "patient-privacy";
    /**
     * research: Consent to participate in research protocol and information sharing required
     */
    readonly Research: "research";
    /**
     * treatment: Consent to undergo a specific treatment
     */
    readonly Treatment: "treatment";
};
/**
 * This value set includes the four Consent scope codes.
 */
export declare type ConsentScopeCodeType = typeof ConsentScopeCodes[keyof typeof ConsentScopeCodes];
//# sourceMappingURL=ConsentScopeCodes.d.ts.map