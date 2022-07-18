// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/graph-compartment-rule|4.3.0

import { CodingArgs } from '../fhir/Coding.js'

/**
 * How a compartment must be linked.
 */
export type GraphCompartmentRuleCodingType = {
  /**
   * custom: The compartment rule is defined in the accompanying FHIRPath expression.
   */
  Custom: CodingArgs;
  /**
   * different: The compartment must be different.
   */
  Different: CodingArgs;
  /**
   * identical: The compartment must be identical (the same literal reference).
   */
  Identical: CodingArgs;
  /**
   * matching: The compartment must be the same - the record must be about the same patient, but the reference may be different.
   */
  Matching: CodingArgs;
}

/**
 * How a compartment must be linked.
 */
export const GraphCompartmentRuleCodings:GraphCompartmentRuleCodingType = {
  /**
   * custom: The compartment rule is defined in the accompanying FHIRPath expression.
   */
  Custom: {
    display: "Custom",
    code: "custom",
    system: "http://hl7.org/fhir/graph-compartment-rule",
  },
  /**
   * different: The compartment must be different.
   */
  Different: {
    display: "Different",
    code: "different",
    system: "http://hl7.org/fhir/graph-compartment-rule",
  },
  /**
   * identical: The compartment must be identical (the same literal reference).
   */
  Identical: {
    display: "Identical",
    code: "identical",
    system: "http://hl7.org/fhir/graph-compartment-rule",
  },
  /**
   * matching: The compartment must be the same - the record must be about the same patient, but the reference may be different.
   */
  Matching: {
    display: "Matching",
    code: "matching",
    system: "http://hl7.org/fhir/graph-compartment-rule",
  },
} as const;