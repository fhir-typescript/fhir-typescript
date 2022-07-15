// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/interaction-incidence|4.3.0

import { CodingArgs } from '../fhir/Coding.js'

/**
 * A categorisation for incidence of occurence of an interaction.
 */
export type InteractionIncidenceCodingType = {
  /**
   * Code: Observed
   */
  Observed: CodingArgs;
  /**
   * Code: Theoretical
   */
  Theoretical: CodingArgs;
}

/**
 * A categorisation for incidence of occurence of an interaction.
 */
export const InteractionIncidenceCodings:InteractionIncidenceCodingType = {
  /**
   * Code: Observed
   */
  Observed: {
    display: "Observed",
    code: "Observed",
    system: "http://hl7.org/fhir/interaction-incidence",
  },
  /**
   * Code: Theoretical
   */
  Theoretical: {
    display: "Theoretical",
    code: "Theoretical",
    system: "http://hl7.org/fhir/interaction-incidence",
  },
} as const;
