// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/contact-point-use|1.0.2

/**
 * Use of contact point
 */
export const ContactPointUseCodes = {
  /**
   * home: A communication contact point at a home; attempted contacts for business purposes might intrude privacy and chances are one will contact family or other household members instead of the person one wishes to call. Typically used with urgent cases, or if no other contacts are available.
   */
  Home: "home",
  /**
   * mobile: A telecommunication device that moves and stays with its owner. May have characteristics of all other use codes, suitable for urgent matters, not the first choice for routine business.
   */
  Mobile: "mobile",
  /**
   * old: This contact point is no longer in use (or was never correct, but retained for records).
   */
  Old: "old",
  /**
   * temp: A temporary contact point. The period can provide more detailed information.
   */
  Temp: "temp",
  /**
   * work: An office contact point. First choice for business related contacts during business hours.
   */
  Work: "work",
} as const;

/**
 * Use of contact point
 */
export type ContactPointUseCodeType = typeof ContactPointUseCodes[keyof typeof ContactPointUseCodes];
