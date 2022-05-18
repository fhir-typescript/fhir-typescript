import { Coding } from '../fhir/Coding.js';
/**
 * Types of security services used with FHIR.
 */
export declare const RestfulSecurityServiceCodings: {
    /**
     * Basic: Basic authentication defined in HTTP specification.
     */
    readonly Basic: Coding;
    /**
     * Certificates: SSL where client must have a certificate registered with the server.
     */
    readonly Certificates: Coding;
    /**
     * Kerberos: see http://www.ietf.org/rfc/rfc4120.txt.
     */
    readonly Kerberos: Coding;
    /**
     * NTLM: Microsoft NTLM Authentication.
     */
    readonly NTLM: Coding;
    /**
     * OAuth: OAuth (unspecified version see oauth.net).
     */
    readonly OAuth: Coding;
    /**
     * SMART-on-FHIR: OAuth2 using SMART-on-FHIR profile (see http://docs.smarthealthit.org/).
     */
    readonly SMARTOnFHIR: Coding;
};
/**
 * Types of security services used with FHIR.
 */
export declare type RestfulSecurityServiceCodingType = typeof RestfulSecurityServiceCodings;
//# sourceMappingURL=RestfulSecurityServiceCodings.d.ts.map