// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/restful-security-service|4.0.1

/**
 * Types of security services used with FHIR.
 */
export const RestfulSecurityServiceCodes = {
  /**
   * Basic: Basic authentication defined in HTTP specification.
   */
  Basic: "Basic",
  /**
   * Certificates: SSL where client must have a certificate registered with the server.
   */
  Certificates: "Certificates",
  /**
   * Kerberos: see http://www.ietf.org/rfc/rfc4120.txt.
   */
  Kerberos: "Kerberos",
  /**
   * NTLM: Microsoft NTLM Authentication.
   */
  NTLM: "NTLM",
  /**
   * OAuth: OAuth (unspecified version see oauth.net).
   */
  OAuth: "OAuth",
  /**
   * SMART-on-FHIR: OAuth2 using SMART-on-FHIR profile (see http://docs.smarthealthit.org/).
   */
  SMARTOnFHIR: "SMART-on-FHIR",
} as const;

/**
 * Types of security services used with FHIR.
 */
export type RestfulSecurityServiceCodeType = typeof RestfulSecurityServiceCodes[keyof typeof RestfulSecurityServiceCodes];
