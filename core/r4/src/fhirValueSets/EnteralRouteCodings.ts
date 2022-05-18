// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/enteral-route|4.0.1

import { Coding } from '../fhir/Coding.js'

/**
 * EnteralRouteOfAdministration: Codes specifying the route of administration of enteral formula.  This value set is composed of HL7 V3 codes and is provided as a suggestive example.
 */
export const EnteralRouteCodings = {
  /**
   * EFT: Instillation, enteral feeding tube
   */
  InstillationEnteralFeedingTube: new Coding({
    display: "Instillation, enteral feeding tube",
    code: "EFT",
    system: "http://terminology.hl7.org/CodeSystem/v3-RouteOfAdministration",
  }),
  /**
   * ENTINSTL: Instillation, enteral
   */
  InstillationEnteral: new Coding({
    display: "Instillation, enteral",
    code: "ENTINSTL",
    system: "http://terminology.hl7.org/CodeSystem/v3-RouteOfAdministration",
  }),
  /**
   * GJT: Instillation, gastro-jejunostomy tube
   */
  InstillationGastroJejunostomyTube: new Coding({
    display: "Instillation, gastro-jejunostomy tube",
    code: "GJT",
    system: "http://terminology.hl7.org/CodeSystem/v3-RouteOfAdministration",
  }),
  /**
   * GT: Instillation, gastrostomy tube
   */
  InstillationGastrostomyTube: new Coding({
    display: "Instillation, gastrostomy tube",
    code: "GT",
    system: "http://terminology.hl7.org/CodeSystem/v3-RouteOfAdministration",
  }),
  /**
   * JJTINSTL: Instillation, jejunostomy tube
   */
  InstillationJejunostomyTube: new Coding({
    display: "Instillation, jejunostomy tube",
    code: "JJTINSTL",
    system: "http://terminology.hl7.org/CodeSystem/v3-RouteOfAdministration",
  }),
  /**
   * NGT: Instillation, nasogastric tube
   */
  InstillationNasogastricTube: new Coding({
    display: "Instillation, nasogastric tube",
    code: "NGT",
    system: "http://terminology.hl7.org/CodeSystem/v3-RouteOfAdministration",
  }),
  /**
   * OGT: Instillation, orogastric tube
   */
  InstillationOrogastricTube: new Coding({
    display: "Instillation, orogastric tube",
    code: "OGT",
    system: "http://terminology.hl7.org/CodeSystem/v3-RouteOfAdministration",
  }),
  /**
   * OJJ: Instillation, orojejunum tube
   */
  InstillationOrojejunumTube: new Coding({
    display: "Instillation, orojejunum tube",
    code: "OJJ",
    system: "http://terminology.hl7.org/CodeSystem/v3-RouteOfAdministration",
  }),
  /**
   * PO: Swallow, oral
   */
  SwallowOral: new Coding({
    display: "Swallow, oral",
    code: "PO",
    system: "http://terminology.hl7.org/CodeSystem/v3-RouteOfAdministration",
  }),
} as const;

/**
 * EnteralRouteOfAdministration: Codes specifying the route of administration of enteral formula.  This value set is composed of HL7 V3 codes and is provided as a suggestive example.
 */
export type EnteralRouteCodingType = typeof EnteralRouteCodings;