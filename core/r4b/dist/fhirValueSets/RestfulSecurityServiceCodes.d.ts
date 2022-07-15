/**
 * Types of security services used with FHIR.
 */
export declare const RestfulSecurityServiceCodes: {
    /**
     * Basic: Basic authentication defined in HTTP specification.
     */
    readonly Basic: "Basic";
    /**
     * Certificates: SSL where client must have a certificate registered with the server.
     */
    readonly Certificates: "Certificates";
    /**
     * Kerberos: see http://www.ietf.org/rfc/rfc4120.txt.
     */
    readonly Kerberos: "Kerberos";
    /**
     * NTLM: Microsoft NTLM Authentication.
     */
    readonly NTLM: "NTLM";
    /**
     * OAuth: OAuth (unspecified version see oauth.net).
     */
    readonly OAuth: "OAuth";
    /**
     * SMART-on-FHIR: OAuth2 using SMART-on-FHIR profile (see http://docs.smarthealthit.org/).
     */
    readonly SMARTOnFHIR: "SMART-on-FHIR";
};
/**
 * Types of security services used with FHIR.
 */
export declare type RestfulSecurityServiceCodeType = typeof RestfulSecurityServiceCodes[keyof typeof RestfulSecurityServiceCodes];
//# sourceMappingURL=RestfulSecurityServiceCodes.d.ts.map