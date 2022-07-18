// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/condition-clinical|4.3.0

import { CodingArgs } from '../fhir/Coding.js'

/**
 * Preferred value set for Condition Clinical Status.
 */
export type ConditionClinicalCodingType = {
  /**
   * active: The subject is currently experiencing the symptoms of the condition or there is evidence of the condition.
   */
  Active: CodingArgs;
  /**
   * inactive: The subject is no longer experiencing the symptoms of the condition or there is no longer evidence of the condition.
   */
  Inactive: CodingArgs;
  /**
   * recurrence: The subject is experiencing a re-occurence or repeating of a previously resolved condition, e.g. urinary tract infection, pancreatitis, cholangitis, conjunctivitis.
   */
  Recurrence: CodingArgs;
  /**
   * relapse: The subject is experiencing a return of a condition, or signs and symptoms after a period of improvement or remission, e.g. relapse of cancer, multiple sclerosis, rheumatoid arthritis, systemic lupus erythematosus, bipolar disorder, [psychotic relapse of] schizophrenia, etc.
   */
  Relapse: CodingArgs;
  /**
   * remission: The subject is no longer experiencing the symptoms of the condition, but there is a risk of the symptoms returning.
   */
  Remission: CodingArgs;
  /**
   * resolved: The subject is no longer experiencing the symptoms of the condition and there is a negligible perceived risk of the symptoms returning.
   */
  Resolved: CodingArgs;
}

/**
 * Preferred value set for Condition Clinical Status.
 */
export const ConditionClinicalCodings:ConditionClinicalCodingType = {
  /**
   * active: The subject is currently experiencing the symptoms of the condition or there is evidence of the condition.
   */
  Active: {
    display: "Active",
    code: "active",
    system: "http://terminology.hl7.org/CodeSystem/condition-clinical",
  },
  /**
   * inactive: The subject is no longer experiencing the symptoms of the condition or there is no longer evidence of the condition.
   */
  Inactive: {
    display: "Inactive",
    code: "inactive",
    system: "http://terminology.hl7.org/CodeSystem/condition-clinical",
  },
  /**
   * recurrence: The subject is experiencing a re-occurence or repeating of a previously resolved condition, e.g. urinary tract infection, pancreatitis, cholangitis, conjunctivitis.
   */
  Recurrence: {
    display: "Recurrence",
    code: "recurrence",
    system: "http://terminology.hl7.org/CodeSystem/condition-clinical",
  },
  /**
   * relapse: The subject is experiencing a return of a condition, or signs and symptoms after a period of improvement or remission, e.g. relapse of cancer, multiple sclerosis, rheumatoid arthritis, systemic lupus erythematosus, bipolar disorder, [psychotic relapse of] schizophrenia, etc.
   */
  Relapse: {
    display: "Relapse",
    code: "relapse",
    system: "http://terminology.hl7.org/CodeSystem/condition-clinical",
  },
  /**
   * remission: The subject is no longer experiencing the symptoms of the condition, but there is a risk of the symptoms returning.
   */
  Remission: {
    display: "Remission",
    code: "remission",
    system: "http://terminology.hl7.org/CodeSystem/condition-clinical",
  },
  /**
   * resolved: The subject is no longer experiencing the symptoms of the condition and there is a negligible perceived risk of the symptoms returning.
   */
  Resolved: {
    display: "Resolved",
    code: "resolved",
    system: "http://terminology.hl7.org/CodeSystem/condition-clinical",
  },
} as const;