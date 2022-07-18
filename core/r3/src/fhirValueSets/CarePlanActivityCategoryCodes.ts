// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/care-plan-activity-category|1.0.0

/**
 * High-level categorization of the type of activity in a care plan.
 */
export const CarePlanActivityCategoryCodes = {
  /**
   * diet: Plan for the patient to consume food of a specified nature
   */
  Diet: "diet",
  /**
   * drug: Plan for the patient to consume/receive a drug, vaccine or other product
   */
  Drug: "drug",
  /**
   * encounter: Plan to meet or communicate with the patient (in-patient, out-patient, phone call, etc.)
   */
  Encounter: "encounter",
  /**
   * observation: Plan to capture information about a patient (vitals, labs, diagnostic images, etc.)
   */
  Observation: "observation",
  /**
   * other: Some other form of action
   */
  Other: "other",
  /**
   * procedure: Plan to modify the patient in some way (surgery, physiotherapy, education, counseling, etc.)
   */
  Procedure: "procedure",
  /**
   * supply: Plan to provide something to the patient (medication, medical supply, etc.)
   */
  Supply: "supply",
} as const;

/**
 * High-level categorization of the type of activity in a care plan.
 */
export type CarePlanActivityCategoryCodeType = typeof CarePlanActivityCategoryCodes[keyof typeof CarePlanActivityCategoryCodes];