// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/immunization-evaluation-dose-status-reason|4.0.1

import { Coding } from '../fhir/Coding.js'

/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the reason why an administered dose has been assigned a particular status. Often, this reason describes why a dose is considered invalid. This value set is provided as a suggestive example.
 */
export const ImmunizationEvaluationDoseStatusReasonCodings = {
  /**
   * advstorage: The product was stored in a manner inconsistent with manufacturer guidelines potentially reducing the effectiveness of the product.
   */
  AdverseStorageCondition: new Coding({
    display: "Adverse storage condition",
    code: "advstorage",
    system: "http://terminology.hl7.org/CodeSystem/immunization-evaluation-dose-status-reason",
  }),
  /**
   * coldchbrk: The product was stored at a temperature inconsistent with manufacturer guidelines potentially reducing the effectiveness of the product.
   */
  ColdChainBreak: new Coding({
    display: "Cold chain break",
    code: "coldchbrk",
    system: "http://terminology.hl7.org/CodeSystem/immunization-evaluation-dose-status-reason",
  }),
  /**
   * explot: The product was administered after the expiration date associated with lot of vaccine.
   */
  ExpiredLot: new Coding({
    display: "Expired lot",
    code: "explot",
    system: "http://terminology.hl7.org/CodeSystem/immunization-evaluation-dose-status-reason",
  }),
  /**
   * outsidesched: The product was administered at a time inconsistent with the documented schedule.
   */
  AdministeredOutsideRecommendedSchedule: new Coding({
    display: "Administered outside recommended schedule",
    code: "outsidesched",
    system: "http://terminology.hl7.org/CodeSystem/immunization-evaluation-dose-status-reason",
  }),
  /**
   * prodrecall: The product administered has been recalled by the manufacturer.
   */
  ProductRecall: new Coding({
    display: "Product recall",
    code: "prodrecall",
    system: "http://terminology.hl7.org/CodeSystem/immunization-evaluation-dose-status-reason",
  }),
} as const;

/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the reason why an administered dose has been assigned a particular status. Often, this reason describes why a dose is considered invalid. This value set is provided as a suggestive example.
 */
export type ImmunizationEvaluationDoseStatusReasonCodingType = typeof ImmunizationEvaluationDoseStatusReasonCodings;