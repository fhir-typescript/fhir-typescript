// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/adjudication|4.0.1

import { Coding } from '../fhir/Coding.js'

/**
 * This value set includes a smattering of Adjudication Value codes which includes codes to indicate the amounts eligible under the plan, the amount of benefit, copays etc.
 */
export const AdjudicationCodings = {
  /**
   * benefit: Amount payable under the coverage
   */
  BenefitAmount: new Coding({
    display: "Benefit Amount",
    code: "benefit",
    system: "http://terminology.hl7.org/CodeSystem/adjudication",
  }),
  /**
   * copay: Patient Co-Payment
   */
  CoPay: new Coding({
    display: "CoPay",
    code: "copay",
    system: "http://terminology.hl7.org/CodeSystem/adjudication",
  }),
  /**
   * deductible: Amount deducted from the eligible amount prior to adjudication.
   */
  Deductible: new Coding({
    display: "Deductible",
    code: "deductible",
    system: "http://terminology.hl7.org/CodeSystem/adjudication",
  }),
  /**
   * eligible: Amount of the change which is considered for adjudication.
   */
  EligibleAmount: new Coding({
    display: "Eligible Amount",
    code: "eligible",
    system: "http://terminology.hl7.org/CodeSystem/adjudication",
  }),
  /**
   * eligpercent: Eligible Percentage.
   */
  EligiblePercent: new Coding({
    display: "Eligible %",
    code: "eligpercent",
    system: "http://terminology.hl7.org/CodeSystem/adjudication",
  }),
  /**
   * submitted: The total submitted amount for the claim or group or line item.
   */
  SubmittedAmount: new Coding({
    display: "Submitted Amount",
    code: "submitted",
    system: "http://terminology.hl7.org/CodeSystem/adjudication",
  }),
  /**
   * tax: The amount of tax.
   */
  Tax: new Coding({
    display: "Tax",
    code: "tax",
    system: "http://terminology.hl7.org/CodeSystem/adjudication",
  }),
  /**
   * unallocdeduct: The amount of deductible which could not allocated to other line items.
   */
  UnallocatedDeductible: new Coding({
    display: "Unallocated Deductible",
    code: "unallocdeduct",
    system: "http://terminology.hl7.org/CodeSystem/adjudication",
  }),
} as const;

/**
 * This value set includes a smattering of Adjudication Value codes which includes codes to indicate the amounts eligible under the plan, the amount of benefit, copays etc.
 */
export type AdjudicationCodingType = typeof AdjudicationCodings;
