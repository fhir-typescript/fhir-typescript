/*! @fhir-typescript/r4-core v0.0.11-beta.2 2022-05-18 */
'use strict';
import { Coding } from '../fhir/Coding.js';

// <auto-generated/>
/**
 * Types of security services used with FHIR.
 */
var RestfulSecurityServiceCodings = {
    /**
     * Basic: Basic authentication defined in HTTP specification.
     */
    Basic: new Coding({
        display: "Basic",
        code: "Basic",
        system: "http://terminology.hl7.org/CodeSystem/restful-security-service",
    }),
    /**
     * Certificates: SSL where client must have a certificate registered with the server.
     */
    Certificates: new Coding({
        display: "Certificates",
        code: "Certificates",
        system: "http://terminology.hl7.org/CodeSystem/restful-security-service",
    }),
    /**
     * Kerberos: see http://www.ietf.org/rfc/rfc4120.txt.
     */
    Kerberos: new Coding({
        display: "Kerberos",
        code: "Kerberos",
        system: "http://terminology.hl7.org/CodeSystem/restful-security-service",
    }),
    /**
     * NTLM: Microsoft NTLM Authentication.
     */
    NTLM: new Coding({
        display: "NTLM",
        code: "NTLM",
        system: "http://terminology.hl7.org/CodeSystem/restful-security-service",
    }),
    /**
     * OAuth: OAuth (unspecified version see oauth.net).
     */
    OAuth: new Coding({
        display: "OAuth",
        code: "OAuth",
        system: "http://terminology.hl7.org/CodeSystem/restful-security-service",
    }),
    /**
     * SMART-on-FHIR: OAuth2 using SMART-on-FHIR profile (see http://docs.smarthealthit.org/).
     */
    SMARTOnFHIR: new Coding({
        display: "SMART-on-FHIR",
        code: "SMART-on-FHIR",
        system: "http://terminology.hl7.org/CodeSystem/restful-security-service",
    }),
};

export { RestfulSecurityServiceCodings };
//# sourceMappingURL=RestfulSecurityServiceCodings.js.map
