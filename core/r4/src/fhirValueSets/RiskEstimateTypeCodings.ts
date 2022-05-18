// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/risk-estimate-type|4.0.1

import { Coding } from '../fhir/Coding.js'

/**
 * Whether the risk estimate is dichotomous, continuous or qualitative and the specific type of risk estimate (eg proportion or median).
 */
export const RiskEstimateTypeCodings = {
  /**
   * count: descriptive measure reported as total number of items.
   */
  Count: new Coding({
    display: "count",
    code: "count",
    system: "http://terminology.hl7.org/CodeSystem/risk-estimate-type",
  }),
  /**
   * derivedProportion: A special use case where the proportion is derived from a formula rather than derived from summary evidence.
   */
  DerivedProportion: new Coding({
    display: "derivedProportion",
    code: "derivedProportion",
    system: "http://terminology.hl7.org/CodeSystem/risk-estimate-type",
  }),
  /**
   * descriptive: descriptive measure reported as narrative.
   */
  Descriptive: new Coding({
    display: "descriptive",
    code: "descriptive",
    system: "http://terminology.hl7.org/CodeSystem/risk-estimate-type",
  }),
  /**
   * mean: continuous numerical measure reported as an average.
   */
  Mean: new Coding({
    display: "mean",
    code: "mean",
    system: "http://terminology.hl7.org/CodeSystem/risk-estimate-type",
  }),
  /**
   * median: continuous numerical measure reported as the middle of the range.
   */
  Median: new Coding({
    display: "median",
    code: "median",
    system: "http://terminology.hl7.org/CodeSystem/risk-estimate-type",
  }),
  /**
   * proportion: dichotomous measure (present or absent) reported as a ratio compared to the denominator of 1 (A percentage is a proportion with denominator of 100).
   */
  Proportion: new Coding({
    display: "proportion",
    code: "proportion",
    system: "http://terminology.hl7.org/CodeSystem/risk-estimate-type",
  }),
} as const;

/**
 * Whether the risk estimate is dichotomous, continuous or qualitative and the specific type of risk estimate (eg proportion or median).
 */
export type RiskEstimateTypeCodingType = typeof RiskEstimateTypeCodings;