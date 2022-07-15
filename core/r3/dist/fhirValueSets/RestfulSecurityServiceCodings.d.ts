import { CodingArgs } from '../fhir/Coding.js';
/**
 * Types of security services used with FHIR.
 */
export declare type RestfulSecurityServiceCodingType = {
    /**
     * Basic: Basic authentication defined in HTTP specification.
     */
    Basic: CodingArgs;
    /**
     * Certificates: SSL where client must have a certificate registered with the server.
     */
    Certificates: CodingArgs;
    /**
     * Kerberos: see http://www.ietf.org/rfc/rfc4120.txt.
     */
    Kerberos: CodingArgs;
    /**
     * NTLM: Microsoft NTLM Authentication.
     */
    NTLM: CodingArgs;
    /**
     * OAuth: Oauth (unspecified version see oauth.net).
     */
    OAuth: CodingArgs;
    /**
     * SMART-on-FHIR: OAuth2 using SMART-on-FHIR profile (see http://docs.smarthealthit.org/).
     */
    SMARTOnFHIR: CodingArgs;
};
/**
 * Types of security services used with FHIR.
 */
export declare const RestfulSecurityServiceCodings: RestfulSecurityServiceCodingType;
//# sourceMappingURL=RestfulSecurityServiceCodings.d.ts.map