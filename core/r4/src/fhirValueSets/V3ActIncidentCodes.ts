// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://terminology.hl7.org/ValueSet/v3-ActIncidentCode|2014-03-26

/**
 *  Set of codes indicating the type of incident or accident.
 */
export const V3ActIncidentCodes = {
  /**
   * MVA: Incident or accident as the result of a motor vehicle accident
   */
  MotorVehicleAccident: "MVA",
  /**
   * SCHOOL: Incident or accident is the result of a school place accident.
   */
  SchoolAccident: "SCHOOL",
  /**
   * SPT: Incident or accident is the result of a sporting accident.
   */
  SportingAccident: "SPT",
  /**
   * WPA: Incident or accident is the result of a work place accident
   */
  WorkplaceAccident: "WPA",
} as const;

/**
 *  Set of codes indicating the type of incident or accident.
 */
export type V3ActIncidentCodeType = typeof V3ActIncidentCodes[keyof typeof V3ActIncidentCodes];
