// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/days-of-week|4.0.1

/**
 * The days of the week.
 */
export const DaysOfWeekCodes = {
  /**
   * fri: Friday.
   */
  Friday: "fri",
  /**
   * mon: Monday.
   */
  Monday: "mon",
  /**
   * sat: Saturday.
   */
  Saturday: "sat",
  /**
   * sun: Sunday.
   */
  Sunday: "sun",
  /**
   * thu: Thursday.
   */
  Thursday: "thu",
  /**
   * tue: Tuesday.
   */
  Tuesday: "tue",
  /**
   * wed: Wednesday.
   */
  Wednesday: "wed",
} as const;

/**
 * The days of the week.
 */
export type DaysOfWeekCodeType = typeof DaysOfWeekCodes[keyof typeof DaysOfWeekCodes];
