// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/regulated-authorization-type|4.3.0

import { CodingArgs } from '../fhir/Coding.js'

/**
 * Overall type of this authorization.
 */
export type RegulatedAuthorizationTypeCodingType = {
  /**
   * Code: MarketingAuth
   */
  MarketingAuthorization: CodingArgs;
  /**
   * Code: Orphan
   */
  OrphanDrugAuthorization: CodingArgs;
  /**
   * Code: Pediatric
   */
  PediatricUseDrugAuthorization: CodingArgs;
}

/**
 * Overall type of this authorization.
 */
export const RegulatedAuthorizationTypeCodings:RegulatedAuthorizationTypeCodingType = {
  /**
   * Code: MarketingAuth
   */
  MarketingAuthorization: {
    display: "Marketing Authorization",
    code: "MarketingAuth",
    system: "http://hl7.org/fhir/regulated-authorization-type",
  },
  /**
   * Code: Orphan
   */
  OrphanDrugAuthorization: {
    display: "Orphan Drug Authorization",
    code: "Orphan",
    system: "http://hl7.org/fhir/regulated-authorization-type",
  },
  /**
   * Code: Pediatric
   */
  PediatricUseDrugAuthorization: {
    display: "Pediatric Use Drug Authorization",
    code: "Pediatric",
    system: "http://hl7.org/fhir/regulated-authorization-type",
  },
} as const;
