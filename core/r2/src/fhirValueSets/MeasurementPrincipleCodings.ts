// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/measurement-principle|1.0.2

import { CodingArgs } from '../fhir/Coding.js'

/**
 * Different measurement principle supported by the device.
 */
export type MeasurementPrincipleCodingType = {
  /**
   * acoustical: Measurement is done using the acoustical principle.
   */
  MSPAcoustical: CodingArgs;
  /**
   * biological: Measurement is done using the biological principle.
   */
  MSPBiological: CodingArgs;
  /**
   * chemical: Measurement is done using the chemical principle.
   */
  MSPChemical: CodingArgs;
  /**
   * electrical: Measurement is done using the electrical principle.
   */
  MSPElectrical: CodingArgs;
  /**
   * impedance: Measurement is done using the impedance principle.
   */
  MSPImpedance: CodingArgs;
  /**
   * manual: Measurement is done using the manual principle.
   */
  MSPManual: CodingArgs;
  /**
   * mechanical: Measurement is done using the mechanical principle.
   */
  MSPMechanical: CodingArgs;
  /**
   * nuclear: Measurement is done using the nuclear principle.
   */
  MSPNuclear: CodingArgs;
  /**
   * optical: Measurement is done using the optical principle.
   */
  MSPOptical: CodingArgs;
  /**
   * other: Measurement principle isn't in the list.
   */
  MSPOther: CodingArgs;
  /**
   * thermal: Measurement is done using the thermal principle.
   */
  MSPThermal: CodingArgs;
}

/**
 * Different measurement principle supported by the device.
 */
export const MeasurementPrincipleCodings:MeasurementPrincipleCodingType = {
  /**
   * acoustical: Measurement is done using the acoustical principle.
   */
  MSPAcoustical: {
    display: "MSP Acoustical",
    code: "acoustical",
    system: "http://hl7.org/fhir/measurement-principle",
  },
  /**
   * biological: Measurement is done using the biological principle.
   */
  MSPBiological: {
    display: "MSP Biological",
    code: "biological",
    system: "http://hl7.org/fhir/measurement-principle",
  },
  /**
   * chemical: Measurement is done using the chemical principle.
   */
  MSPChemical: {
    display: "MSP Chemical",
    code: "chemical",
    system: "http://hl7.org/fhir/measurement-principle",
  },
  /**
   * electrical: Measurement is done using the electrical principle.
   */
  MSPElectrical: {
    display: "MSP Electrical",
    code: "electrical",
    system: "http://hl7.org/fhir/measurement-principle",
  },
  /**
   * impedance: Measurement is done using the impedance principle.
   */
  MSPImpedance: {
    display: "MSP Impedance",
    code: "impedance",
    system: "http://hl7.org/fhir/measurement-principle",
  },
  /**
   * manual: Measurement is done using the manual principle.
   */
  MSPManual: {
    display: "MSP Manual",
    code: "manual",
    system: "http://hl7.org/fhir/measurement-principle",
  },
  /**
   * mechanical: Measurement is done using the mechanical principle.
   */
  MSPMechanical: {
    display: "MSP Mechanical",
    code: "mechanical",
    system: "http://hl7.org/fhir/measurement-principle",
  },
  /**
   * nuclear: Measurement is done using the nuclear principle.
   */
  MSPNuclear: {
    display: "MSP Nuclear",
    code: "nuclear",
    system: "http://hl7.org/fhir/measurement-principle",
  },
  /**
   * optical: Measurement is done using the optical principle.
   */
  MSPOptical: {
    display: "MSP Optical",
    code: "optical",
    system: "http://hl7.org/fhir/measurement-principle",
  },
  /**
   * other: Measurement principle isn't in the list.
   */
  MSPOther: {
    display: "MSP Other",
    code: "other",
    system: "http://hl7.org/fhir/measurement-principle",
  },
  /**
   * thermal: Measurement is done using the thermal principle.
   */
  MSPThermal: {
    display: "MSP Thermal",
    code: "thermal",
    system: "http://hl7.org/fhir/measurement-principle",
  },
} as const;
