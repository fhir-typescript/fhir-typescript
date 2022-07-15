// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/testscript-profile-origin-types|3.0.2

/**
 * This value set defines a set of codes that are used to indicate the profile type of a test system when acting as the origin within a TestScript.
 */
export const TestscriptProfileOriginTypesCodes = {
  /**
   * FHIR-Client: General FHIR client used to initiate operations against a FHIR server.
   */
  FHIRClient: "FHIR-Client",
  /**
   * FHIR-SDC-FormFiller: A FHIR client acting as a Structured Data Capture Form Filler.
   */
  FHIRSDCFormFiller: "FHIR-SDC-FormFiller",
} as const;

/**
 * This value set defines a set of codes that are used to indicate the profile type of a test system when acting as the origin within a TestScript.
 */
export type TestscriptProfileOriginTypesCodeType = typeof TestscriptProfileOriginTypesCodes[keyof typeof TestscriptProfileOriginTypesCodes];
