// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/verificationresult-communication-method|4.0.1

/**
 * Attested information may be validated by process that are manual or automated. For automated processes it may accomplished by the system of record reaching out through another system's API or information may be sent to the system of record. This value set defines a set of codes to describing the process, the how, a resource or data element is validated.
 */
export const VerificationresultCommunicationMethodCodes = {
  /**
   * manual: The information is submitted/retrieved manually (e.g. by phone, fax, paper-based)
   */
  Manual: "manual",
  /**
   * portal: The information is submitted/retrieved via a portal
   */
  Portal: "portal",
  /**
   * pull: The information is retrieved (i.e. pulled) from a source (e.g. over an API)
   */
  Pull: "pull",
  /**
   * push: The information is sent (i.e. pushed) from a source (e.g. over an API, asynchronously, secure messaging)
   */
  Push: "push",
} as const;

/**
 * Attested information may be validated by process that are manual or automated. For automated processes it may accomplished by the system of record reaching out through another system's API or information may be sent to the system of record. This value set defines a set of codes to describing the process, the how, a resource or data element is validated.
 */
export type VerificationresultCommunicationMethodCodeType = typeof VerificationresultCommunicationMethodCodes[keyof typeof VerificationresultCommunicationMethodCodes];
