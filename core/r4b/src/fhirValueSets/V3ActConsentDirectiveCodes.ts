// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://terminology.hl7.org/ValueSet/v3-ActConsentDirective|2.0.0

/**
 * ActConsentDirective codes are used to specify the type of Consent Directive to which a Consent Directive Act conforms.
 */
export const V3ActConsentDirectiveCodes = {
  /**
   * Code: _ActConsentDirective
   */
  ActConsentDirective: "_ActConsentDirective",
  /**
   * Code: EMRGONLY
   */
  EmergencyOnly: "EMRGONLY",
  /**
   * Code: GRANTORCHOICE
   */
  GrantorChoice: "GRANTORCHOICE",
  /**
   * Code: IMPLIED
   */
  ImpliedConsent: "IMPLIED",
  /**
   * Code: IMPLIEDD
   */
  ImpliedConsentWithOpportunityToDissent: "IMPLIEDD",
  /**
   * Code: NOCONSENT
   */
  NoConsent: "NOCONSENT",
  /**
   * Code: NOPP
   */
  NoticeOfPrivacyPractices: "NOPP",
  /**
   * Code: OPTIN
   */
  OptIn: "OPTIN",
  /**
   * Code: OPTINR
   */
  OptInWithRestrictions: "OPTINR",
  /**
   * Code: OPTOUT
   */
  OpOut: "OPTOUT",
  /**
   * Code: OPTOUTE
   */
  OptOutWithExceptions: "OPTOUTE",
} as const;

/**
 * ActConsentDirective codes are used to specify the type of Consent Directive to which a Consent Directive Act conforms.
 */
export type V3ActConsentDirectiveCodeType = typeof V3ActConsentDirectiveCodes[keyof typeof V3ActConsentDirectiveCodes];
