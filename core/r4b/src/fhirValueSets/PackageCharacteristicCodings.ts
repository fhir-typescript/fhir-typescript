// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/package-characteristic|4.3.0

import { CodingArgs } from '../fhir/Coding.js'

/**
 * A characteristic of a package.
 */
export type PackageCharacteristicCodingType = {
  /**
   * Code: CalendarPack
   */
  CalendarPack: CodingArgs;
  /**
   * Code: HospitalPack
   */
  HospitalPack: CodingArgs;
  /**
   * Code: NursePrescribable
   */
  NursePrescribable: CodingArgs;
}

/**
 * A characteristic of a package.
 */
export const PackageCharacteristicCodings:PackageCharacteristicCodingType = {
  /**
   * Code: CalendarPack
   */
  CalendarPack: {
    display: "Calendar pack",
    code: "CalendarPack",
    system: "http://hl7.org/fhir/package-characteristic",
  },
  /**
   * Code: HospitalPack
   */
  HospitalPack: {
    display: "Hospital pack",
    code: "HospitalPack",
    system: "http://hl7.org/fhir/package-characteristic",
  },
  /**
   * Code: NursePrescribable
   */
  NursePrescribable: {
    display: "Nurse prescribable",
    code: "NursePrescribable",
    system: "http://hl7.org/fhir/package-characteristic",
  },
} as const;
