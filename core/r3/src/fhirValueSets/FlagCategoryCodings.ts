// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/flag-category|3.0.2

import { CodingArgs } from '../fhir/Coding.js'

/**
 * Example list of general categories for flagged issues. (Not complete or necessarily appropriate.)
 */
export type FlagCategoryCodingType = {
  /**
   * admin: Flags related to administrative and financial processes.
   */
  Administrative: CodingArgs;
  /**
   * contact: Flags related to coming into contact with the patient.
   */
  SubjectContact: CodingArgs;
  /**
   * diet: Flags related to the subject's dietary needs.
   */
  Diet: CodingArgs;
  /**
   * drug: Flags related to the patient's medications.
   */
  Drug: CodingArgs;
  /**
   * lab: Flags related to performing laboratory tests and related processes (e.g. phlebotomy).
   */
  Lab: CodingArgs;
}

/**
 * Example list of general categories for flagged issues. (Not complete or necessarily appropriate.)
 */
export const FlagCategoryCodings:FlagCategoryCodingType = {
  /**
   * admin: Flags related to administrative and financial processes.
   */
  Administrative: {
    display: "Administrative",
    code: "admin",
    system: "http://hl7.org/fhir/flag-category",
  },
  /**
   * contact: Flags related to coming into contact with the patient.
   */
  SubjectContact: {
    display: "Subject contact",
    code: "contact",
    system: "http://hl7.org/fhir/flag-category",
  },
  /**
   * diet: Flags related to the subject's dietary needs.
   */
  Diet: {
    display: "Diet",
    code: "diet",
    system: "http://hl7.org/fhir/flag-category",
  },
  /**
   * drug: Flags related to the patient's medications.
   */
  Drug: {
    display: "Drug",
    code: "drug",
    system: "http://hl7.org/fhir/flag-category",
  },
  /**
   * lab: Flags related to performing laboratory tests and related processes (e.g. phlebotomy).
   */
  Lab: {
    display: "Lab",
    code: "lab",
    system: "http://hl7.org/fhir/flag-category",
  },
} as const;