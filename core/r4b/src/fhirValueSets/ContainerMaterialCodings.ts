// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/container-material|4.3.0

import { CodingArgs } from '../fhir/Coding.js'

/**
 * This value set includes SNOMED CT codes for materials that specimen containers are made of
 */
export type ContainerMaterialCodingType = {
  /**
   * Code: 32039001
   */
  Glass: CodingArgs;
  /**
   * Code: 425620007
   */
  Metal: CodingArgs;
  /**
   * Code: 61088005
   */
  Plastic: CodingArgs;
}

/**
 * This value set includes SNOMED CT codes for materials that specimen containers are made of
 */
export const ContainerMaterialCodings:ContainerMaterialCodingType = {
  /**
   * Code: 32039001
   */
  Glass: {
    display: "glass",
    code: "32039001",
    system: "http://snomed.info/sct",
  },
  /**
   * Code: 425620007
   */
  Metal: {
    display: "metal",
    code: "425620007",
    system: "http://snomed.info/sct",
  },
  /**
   * Code: 61088005
   */
  Plastic: {
    display: "plastic",
    code: "61088005",
    system: "http://snomed.info/sct",
  },
} as const;