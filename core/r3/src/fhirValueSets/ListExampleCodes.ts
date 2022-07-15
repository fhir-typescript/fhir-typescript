// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/list-example-codes|3.0.2

/**
 * Example use codes for the List resource - typical kinds of use.
 */
export const ListExampleCodes = {
  /**
   * adverserxns: A list of part adverse reactions.
   */
  AdverseReactions: "adverserxns",
  /**
   * alerts: A list of alerts for the patient.
   */
  Alerts: "alerts",
  /**
   * allergies: A list of Allergies for the patient.
   */
  Allergies: "allergies",
  /**
   * medications: A list of medication statements for the patient.
   */
  MedicationList: "medications",
  /**
   * plans: A set of care plans that apply in a particular context of care.
   */
  CarePlans: "plans",
  /**
   * problems: A list of problems that the patient is known of have (or have had in the past).
   */
  ProblemList: "problems",
  /**
   * protocols: A set of protocols to be followed.
   */
  Protocols: "protocols",
  /**
   * waiting: A list of items waiting for an event (perhaps a surgical patient waiting list).
   */
  WaitingList: "waiting",
  /**
   * worklist: A list of items that constitute a set of work to be performed (typically this code would be specialized for more specific uses, such as a ward round list).
   */
  Worklist: "worklist",
} as const;

/**
 * Example use codes for the List resource - typical kinds of use.
 */
export type ListExampleCodeType = typeof ListExampleCodes[keyof typeof ListExampleCodes];
