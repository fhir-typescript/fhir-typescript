// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/bodystructure-relative-location|4.3.0

import { CodingArgs } from '../fhir/Coding.js'

/**
 * SNOMED-CT concepts modifying the anatomic location
 */
export type BodystructureRelativeLocationCodingType = {
  /**
   * Code: 255551008
   */
  Posterior: CodingArgs;
  /**
   * Code: 255561001
   */
  Medial: CodingArgs;
  /**
   * Code: 261089000
   */
  Inferior: CodingArgs;
  /**
   * Code: 261122009
   */
  Lower: CodingArgs;
  /**
   * Code: 261183002
   */
  Upper: CodingArgs;
  /**
   * Code: 264217000
   */
  Superior: CodingArgs;
  /**
   * Code: 351726001
   */
  Below: CodingArgs;
  /**
   * Code: 352730000
   */
  Above: CodingArgs;
  /**
   * Code: 419161000
   */
  UnilateralLeft: CodingArgs;
  /**
   * Code: 419465000
   */
  UnilateralRight: CodingArgs;
  /**
   * Code: 49370004
   */
  Lateral: CodingArgs;
  /**
   * Code: 51440002
   */
  Bilateral: CodingArgs;
}

/**
 * SNOMED-CT concepts modifying the anatomic location
 */
export const BodystructureRelativeLocationCodings:BodystructureRelativeLocationCodingType = {
  /**
   * Code: 255551008
   */
  Posterior: {
    display: "Posterior",
    code: "255551008",
    system: "http://snomed.info/sct",
  },
  /**
   * Code: 255561001
   */
  Medial: {
    display: "Medial",
    code: "255561001",
    system: "http://snomed.info/sct",
  },
  /**
   * Code: 261089000
   */
  Inferior: {
    display: "Inferior",
    code: "261089000",
    system: "http://snomed.info/sct",
  },
  /**
   * Code: 261122009
   */
  Lower: {
    display: "Lower",
    code: "261122009",
    system: "http://snomed.info/sct",
  },
  /**
   * Code: 261183002
   */
  Upper: {
    display: "Upper",
    code: "261183002",
    system: "http://snomed.info/sct",
  },
  /**
   * Code: 264217000
   */
  Superior: {
    display: "Superior",
    code: "264217000",
    system: "http://snomed.info/sct",
  },
  /**
   * Code: 351726001
   */
  Below: {
    display: "Below",
    code: "351726001",
    system: "http://snomed.info/sct",
  },
  /**
   * Code: 352730000
   */
  Above: {
    display: "Above",
    code: "352730000",
    system: "http://snomed.info/sct",
  },
  /**
   * Code: 419161000
   */
  UnilateralLeft: {
    display: "Unilateral left",
    code: "419161000",
    system: "http://snomed.info/sct",
  },
  /**
   * Code: 419465000
   */
  UnilateralRight: {
    display: "Unilateral right",
    code: "419465000",
    system: "http://snomed.info/sct",
  },
  /**
   * Code: 49370004
   */
  Lateral: {
    display: "Lateral",
    code: "49370004",
    system: "http://snomed.info/sct",
  },
  /**
   * Code: 51440002
   */
  Bilateral: {
    display: "Bilateral",
    code: "51440002",
    system: "http://snomed.info/sct",
  },
} as const;
