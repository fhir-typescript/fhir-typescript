// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/specimen-container-type|3.0.2

import { CodingArgs } from '../fhir/Coding.js'

/**
 * Containers which may hold specimens or specimen containers. Include codes  SNOMED CT(http://snomed.info/sct) where concept is-a 434711009 (Specimen container (physical object))
 */
export type SpecimenContainerTypeCodingType = {
  /**
   * Code: 434746001
   */
  SpecimenVial: CodingArgs;
  /**
   * Code: 434822004
   */
  SpecimenWell: CodingArgs;
  /**
   * Code: 713791004
   */
  BreathSpecimenContainer: CodingArgs;
}

/**
 * Containers which may hold specimens or specimen containers. Include codes  SNOMED CT(http://snomed.info/sct) where concept is-a 434711009 (Specimen container (physical object))
 */
export const SpecimenContainerTypeCodings:SpecimenContainerTypeCodingType = {
  /**
   * Code: 434746001
   */
  SpecimenVial: {
    display: "Specimen vial",
    code: "434746001",
    system: "http://snomed.info/sct",
  },
  /**
   * Code: 434822004
   */
  SpecimenWell: {
    display: "Specimen well",
    code: "434822004",
    system: "http://snomed.info/sct",
  },
  /**
   * Code: 713791004
   */
  BreathSpecimenContainer: {
    display: "Breath specimen container",
    code: "713791004",
    system: "http://snomed.info/sct",
  },
} as const;
