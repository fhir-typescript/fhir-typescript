// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/enteral-route|4.3.0

import { CodingArgs } from '../fhir/Coding.js'

/**
 * EnteralRouteOfAdministration: Codes specifying the route of administration of enteral formula.  This value set is composed of HL7 V3 codes and is provided as a suggestive example.
 */
export type EnteralRouteCodingType = {
  /**
   * Code: EFT
   */
  EFT: CodingArgs;
  /**
   * Code: ENTINSTL
   */
  ENTINSTL: CodingArgs;
  /**
   * Code: GJT
   */
  GJT: CodingArgs;
  /**
   * Code: GT
   */
  GT: CodingArgs;
  /**
   * Code: JJTINSTL
   */
  JJTINSTL: CodingArgs;
  /**
   * Code: NGT
   */
  NGT: CodingArgs;
  /**
   * Code: OGT
   */
  OGT: CodingArgs;
  /**
   * Code: OJJ
   */
  OJJ: CodingArgs;
  /**
   * Code: PO
   */
  PO: CodingArgs;
}

/**
 * EnteralRouteOfAdministration: Codes specifying the route of administration of enteral formula.  This value set is composed of HL7 V3 codes and is provided as a suggestive example.
 */
export const EnteralRouteCodings:EnteralRouteCodingType = {
  /**
   * Code: EFT
   */
  EFT: {
    code: "EFT",
    system: "http://terminology.hl7.org/CodeSystem/v3-RouteOfAdministration",
  },
  /**
   * Code: ENTINSTL
   */
  ENTINSTL: {
    code: "ENTINSTL",
    system: "http://terminology.hl7.org/CodeSystem/v3-RouteOfAdministration",
  },
  /**
   * Code: GJT
   */
  GJT: {
    code: "GJT",
    system: "http://terminology.hl7.org/CodeSystem/v3-RouteOfAdministration",
  },
  /**
   * Code: GT
   */
  GT: {
    code: "GT",
    system: "http://terminology.hl7.org/CodeSystem/v3-RouteOfAdministration",
  },
  /**
   * Code: JJTINSTL
   */
  JJTINSTL: {
    code: "JJTINSTL",
    system: "http://terminology.hl7.org/CodeSystem/v3-RouteOfAdministration",
  },
  /**
   * Code: NGT
   */
  NGT: {
    code: "NGT",
    system: "http://terminology.hl7.org/CodeSystem/v3-RouteOfAdministration",
  },
  /**
   * Code: OGT
   */
  OGT: {
    code: "OGT",
    system: "http://terminology.hl7.org/CodeSystem/v3-RouteOfAdministration",
  },
  /**
   * Code: OJJ
   */
  OJJ: {
    code: "OJJ",
    system: "http://terminology.hl7.org/CodeSystem/v3-RouteOfAdministration",
  },
  /**
   * Code: PO
   */
  PO: {
    code: "PO",
    system: "http://terminology.hl7.org/CodeSystem/v3-RouteOfAdministration",
  },
} as const;