// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/medication-package-form|3.0.2

/**
 * A coded concept defining the kind of container a medication package is packaged in
 */
export const MedicationPackageFormCodes = {
  /**
   * ampoule: A sealed glass capsule containing a liquid
   */
  Ampoule: "ampoule",
  /**
   * bottle: A container, typically made of glass or plastic and with a narrow neck, used for storing liquids.
   */
  Bottle: "bottle",
  /**
   * box: A container with a flat base and sides, typically square or rectangular and having a lid.
   */
  Box: "box",
  /**
   * cartridge: A device of various configuration and composition used with a syringe for the application of anesthetic or other materials to a patient.
   */
  Cartridge: "cartridge",
  /**
   * container: A package intended to store pharmaceuticals.
   */
  Container: "container",
  /**
   * tube: A long, hollow cylinder of metal, plastic, glass, etc., for holding medications, typically creams or ointments
   */
  Tube: "tube",
  /**
   * unitdose: A dose of medicine prepared in an individual package for convenience, safety or monitoring.
   */
  UnitDoseBlister: "unitdose",
  /**
   * vial: A small container, typically cylindrical and made of glass, used especially for holding liquid medications.
   */
  Vial: "vial",
} as const;

/**
 * A coded concept defining the kind of container a medication package is packaged in
 */
export type MedicationPackageFormCodeType = typeof MedicationPackageFormCodes[keyof typeof MedicationPackageFormCodes];
