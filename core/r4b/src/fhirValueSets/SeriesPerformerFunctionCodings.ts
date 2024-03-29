// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/series-performer-function|4.3.0

import { CodingArgs } from '../fhir/Coding.js'

/**
 * Performer function of an agent in an imaging study series
 */
export type SeriesPerformerFunctionCodingType = {
  /**
   * Code: CON
   */
  Consultant: CodingArgs;
  /**
   * Code: PRF
   */
  Performer: CodingArgs;
  /**
   * Code: REF
   */
  Referrer: CodingArgs;
  /**
   * Code: SPRF
   */
  SecondaryPerformer: CodingArgs;
  /**
   * Code: VRF
   */
  Verifier: CodingArgs;
}

/**
 * Performer function of an agent in an imaging study series
 */
export const SeriesPerformerFunctionCodings:SeriesPerformerFunctionCodingType = {
  /**
   * Code: CON
   */
  Consultant: {
    display: "consultant",
    code: "CON",
    system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
  },
  /**
   * Code: PRF
   */
  Performer: {
    display: "performer",
    code: "PRF",
    system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
  },
  /**
   * Code: REF
   */
  Referrer: {
    display: "referrer",
    code: "REF",
    system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
  },
  /**
   * Code: SPRF
   */
  SecondaryPerformer: {
    display: "secondary performer",
    code: "SPRF",
    system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
  },
  /**
   * Code: VRF
   */
  Verifier: {
    display: "verifier",
    code: "VRF",
    system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
  },
} as const;
