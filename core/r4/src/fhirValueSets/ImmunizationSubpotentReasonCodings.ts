// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/immunization-subpotent-reason|4.0.1

import { Coding } from '../fhir/Coding.js'

/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the reason why a dose is considered to be subpotent. This value set is provided as a suggestive example.
 */
export const ImmunizationSubpotentReasonCodings = {
  /**
   * coldchainbreak: The vaccine experienced a cold chain break.
   */
  ColdChainBreak: new Coding({
    display: "Cold Chain Break",
    code: "coldchainbreak",
    system: "http://terminology.hl7.org/CodeSystem/immunization-subpotent-reason",
  }),
  /**
   * partial: The full volume of the dose was not administered to the patient.
   */
  PartialDose: new Coding({
    display: "Partial Dose",
    code: "partial",
    system: "http://terminology.hl7.org/CodeSystem/immunization-subpotent-reason",
  }),
  /**
   * recall: The vaccine was recalled by the manufacturer.
   */
  ManufacturerRecall: new Coding({
    display: "Manufacturer Recall",
    code: "recall",
    system: "http://terminology.hl7.org/CodeSystem/immunization-subpotent-reason",
  }),
} as const;

/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the reason why a dose is considered to be subpotent. This value set is provided as a suggestive example.
 */
export type ImmunizationSubpotentReasonCodingType = typeof ImmunizationSubpotentReasonCodings;
