// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/measurement-principle|1.0.2

/**
 * Different measurement principle supported by the device.
 */
export const MeasurementPrincipleCodes = {
  /**
   * acoustical: Measurement is done using the acoustical principle.
   */
  MSPAcoustical: "acoustical",
  /**
   * biological: Measurement is done using the biological principle.
   */
  MSPBiological: "biological",
  /**
   * chemical: Measurement is done using the chemical principle.
   */
  MSPChemical: "chemical",
  /**
   * electrical: Measurement is done using the electrical principle.
   */
  MSPElectrical: "electrical",
  /**
   * impedance: Measurement is done using the impedance principle.
   */
  MSPImpedance: "impedance",
  /**
   * manual: Measurement is done using the manual principle.
   */
  MSPManual: "manual",
  /**
   * mechanical: Measurement is done using the mechanical principle.
   */
  MSPMechanical: "mechanical",
  /**
   * nuclear: Measurement is done using the nuclear principle.
   */
  MSPNuclear: "nuclear",
  /**
   * optical: Measurement is done using the optical principle.
   */
  MSPOptical: "optical",
  /**
   * other: Measurement principle isn't in the list.
   */
  MSPOther: "other",
  /**
   * thermal: Measurement is done using the thermal principle.
   */
  MSPThermal: "thermal",
} as const;

/**
 * Different measurement principle supported by the device.
 */
export type MeasurementPrincipleCodeType = typeof MeasurementPrincipleCodes[keyof typeof MeasurementPrincipleCodes];
