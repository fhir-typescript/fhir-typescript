// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/surface|4.0.1

import { CodingArgs } from '../fhir/Coding.js'

/**
 * This value set includes a smattering of FDI tooth surface codes.
 */
export type SurfaceCodingType = {
  /**
   * B: The surface of a posterior tooth facing the cheeks.
   */
  Buccal: CodingArgs;
  /**
   * D: The surface of a tooth that faces away from the midline of the face.
   */
  Distal: CodingArgs;
  /**
   * DI: The Distoincisal surfaces of a tooth.
   */
  Distoincisal: CodingArgs;
  /**
   * DO: The Distoclusal surfaces of a tooth.
   */
  Distoclusal: CodingArgs;
  /**
   * I: The biting edge of anterior teeth.
   */
  Incisal: CodingArgs;
  /**
   * L: The surface of a tooth facing the tongue.
   */
  Lingual: CodingArgs;
  /**
   * M: The surface of a tooth that is closest to the midline (middle) of the face.
   */
  Mesial: CodingArgs;
  /**
   * MO: The Mesioclusal surfaces of a tooth.
   */
  Mesioclusal: CodingArgs;
  /**
   * MOD: The Mesioclusodistal surfaces of a tooth.
   */
  Mesioclusodistal: CodingArgs;
  /**
   * O: The chewing surface of posterior teeth.
   */
  Occlusal: CodingArgs;
  /**
   * V: The surface of a tooth facing the lips.
   */
  Ventral: CodingArgs;
}

/**
 * This value set includes a smattering of FDI tooth surface codes.
 */
export const SurfaceCodings:SurfaceCodingType = {
  /**
   * B: The surface of a posterior tooth facing the cheeks.
   */
  Buccal: {
    display: "Buccal",
    code: "B",
    system: "http://terminology.hl7.org/CodeSystem/FDI-surface",
  },
  /**
   * D: The surface of a tooth that faces away from the midline of the face.
   */
  Distal: {
    display: "Distal",
    code: "D",
    system: "http://terminology.hl7.org/CodeSystem/FDI-surface",
  },
  /**
   * DI: The Distoincisal surfaces of a tooth.
   */
  Distoincisal: {
    display: "Distoincisal",
    code: "DI",
    system: "http://terminology.hl7.org/CodeSystem/FDI-surface",
  },
  /**
   * DO: The Distoclusal surfaces of a tooth.
   */
  Distoclusal: {
    display: "Distoclusal",
    code: "DO",
    system: "http://terminology.hl7.org/CodeSystem/FDI-surface",
  },
  /**
   * I: The biting edge of anterior teeth.
   */
  Incisal: {
    display: "Incisal",
    code: "I",
    system: "http://terminology.hl7.org/CodeSystem/FDI-surface",
  },
  /**
   * L: The surface of a tooth facing the tongue.
   */
  Lingual: {
    display: "Lingual",
    code: "L",
    system: "http://terminology.hl7.org/CodeSystem/FDI-surface",
  },
  /**
   * M: The surface of a tooth that is closest to the midline (middle) of the face.
   */
  Mesial: {
    display: "Mesial",
    code: "M",
    system: "http://terminology.hl7.org/CodeSystem/FDI-surface",
  },
  /**
   * MO: The Mesioclusal surfaces of a tooth.
   */
  Mesioclusal: {
    display: "Mesioclusal",
    code: "MO",
    system: "http://terminology.hl7.org/CodeSystem/FDI-surface",
  },
  /**
   * MOD: The Mesioclusodistal surfaces of a tooth.
   */
  Mesioclusodistal: {
    display: "Mesioclusodistal",
    code: "MOD",
    system: "http://terminology.hl7.org/CodeSystem/FDI-surface",
  },
  /**
   * O: The chewing surface of posterior teeth.
   */
  Occlusal: {
    display: "Occlusal",
    code: "O",
    system: "http://terminology.hl7.org/CodeSystem/FDI-surface",
  },
  /**
   * V: The surface of a tooth facing the lips.
   */
  Ventral: {
    display: "Ventral",
    code: "V",
    system: "http://terminology.hl7.org/CodeSystem/FDI-surface",
  },
} as const;
