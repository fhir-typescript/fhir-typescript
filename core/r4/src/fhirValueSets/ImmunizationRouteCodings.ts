// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/immunization-route|4.0.1

import { Coding } from '../fhir/Coding.js'

/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the administrative routes used during vaccination. This value set is provided as a suggestive example.
 */
export const ImmunizationRouteCodings = {
  /**
   * IDINJ: Injection, intradermal
   */
  InjectionIntradermal: new Coding({
    display: "Injection, intradermal",
    code: "IDINJ",
    system: "http://terminology.hl7.org/CodeSystem/v3-RouteOfAdministration",
  }),
  /**
   * IM: Injection, intramuscular
   */
  InjectionIntramuscular: new Coding({
    display: "Injection, intramuscular",
    code: "IM",
    system: "http://terminology.hl7.org/CodeSystem/v3-RouteOfAdministration",
  }),
  /**
   * IVINJ: Injection, intravenous
   */
  InjectionIntravenous: new Coding({
    display: "Injection, intravenous",
    code: "IVINJ",
    system: "http://terminology.hl7.org/CodeSystem/v3-RouteOfAdministration",
  }),
  /**
   * NASINHLC: Inhalation, nasal, prongs
   */
  InhalationNasalCannula: new Coding({
    display: "Inhalation, nasal cannula",
    code: "NASINHLC",
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
  /**
   * SQ: Injection, subcutaneous
   */
  InjectionSubcutaneous: new Coding({
    display: "Injection, subcutaneous",
    code: "SQ",
    system: "http://terminology.hl7.org/CodeSystem/v3-RouteOfAdministration",
  }),
  /**
   * TRNSDERM: Transdermal
   */
  Transdermal: new Coding({
    display: "Transdermal",
    code: "TRNSDERM",
    system: "http://terminology.hl7.org/CodeSystem/v3-RouteOfAdministration",
  }),
} as const;

/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the administrative routes used during vaccination. This value set is provided as a suggestive example.
 */
export type ImmunizationRouteCodingType = typeof ImmunizationRouteCodings;