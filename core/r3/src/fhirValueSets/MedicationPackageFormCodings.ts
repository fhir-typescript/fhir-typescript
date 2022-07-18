// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/medication-package-form|3.0.2

import { CodingArgs } from '../fhir/Coding.js'

/**
 * A coded concept defining the kind of container a medication package is packaged in
 */
export type MedicationPackageFormCodingType = {
  /**
   * ampoule: A sealed glass capsule containing a liquid
   */
  Ampoule: CodingArgs;
  /**
   * bottle: A container, typically made of glass or plastic and with a narrow neck, used for storing liquids.
   */
  Bottle: CodingArgs;
  /**
   * box: A container with a flat base and sides, typically square or rectangular and having a lid.
   */
  Box: CodingArgs;
  /**
   * cartridge: A device of various configuration and composition used with a syringe for the application of anesthetic or other materials to a patient.
   */
  Cartridge: CodingArgs;
  /**
   * container: A package intended to store pharmaceuticals.
   */
  Container: CodingArgs;
  /**
   * tube: A long, hollow cylinder of metal, plastic, glass, etc., for holding medications, typically creams or ointments
   */
  Tube: CodingArgs;
  /**
   * unitdose: A dose of medicine prepared in an individual package for convenience, safety or monitoring.
   */
  UnitDoseBlister: CodingArgs;
  /**
   * vial: A small container, typically cylindrical and made of glass, used especially for holding liquid medications.
   */
  Vial: CodingArgs;
}

/**
 * A coded concept defining the kind of container a medication package is packaged in
 */
export const MedicationPackageFormCodings:MedicationPackageFormCodingType = {
  /**
   * ampoule: A sealed glass capsule containing a liquid
   */
  Ampoule: {
    display: "Ampoule",
    code: "ampoule",
    system: "http://hl7.org/fhir/medication-package-form",
  },
  /**
   * bottle: A container, typically made of glass or plastic and with a narrow neck, used for storing liquids.
   */
  Bottle: {
    display: "Bottle",
    code: "bottle",
    system: "http://hl7.org/fhir/medication-package-form",
  },
  /**
   * box: A container with a flat base and sides, typically square or rectangular and having a lid.
   */
  Box: {
    display: "Box",
    code: "box",
    system: "http://hl7.org/fhir/medication-package-form",
  },
  /**
   * cartridge: A device of various configuration and composition used with a syringe for the application of anesthetic or other materials to a patient.
   */
  Cartridge: {
    display: "Cartridge",
    code: "cartridge",
    system: "http://hl7.org/fhir/medication-package-form",
  },
  /**
   * container: A package intended to store pharmaceuticals.
   */
  Container: {
    display: "Container",
    code: "container",
    system: "http://hl7.org/fhir/medication-package-form",
  },
  /**
   * tube: A long, hollow cylinder of metal, plastic, glass, etc., for holding medications, typically creams or ointments
   */
  Tube: {
    display: "Tube",
    code: "tube",
    system: "http://hl7.org/fhir/medication-package-form",
  },
  /**
   * unitdose: A dose of medicine prepared in an individual package for convenience, safety or monitoring.
   */
  UnitDoseBlister: {
    display: "Unit Dose Blister",
    code: "unitdose",
    system: "http://hl7.org/fhir/medication-package-form",
  },
  /**
   * vial: A small container, typically cylindrical and made of glass, used especially for holding liquid medications.
   */
  Vial: {
    display: "Vial",
    code: "vial",
    system: "http://hl7.org/fhir/medication-package-form",
  },
} as const;