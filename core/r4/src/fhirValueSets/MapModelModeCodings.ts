// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/map-model-mode|4.0.1

import { Coding } from '../fhir/Coding.js'

/**
 * How the referenced structure is used in this mapping.
 */
export const MapModelModeCodings = {
  /**
   * produced: This structure describes an instance that the mapping engine may ask to create that is used a target of data.
   */
  ProducedStructureDefinition: new Coding({
    display: "Produced Structure Definition",
    code: "produced",
    system: "http://hl7.org/fhir/map-model-mode",
  }),
  /**
   * queried: This structure describes an instance that the mapping engine may ask for that is used a source of data.
   */
  QueriedStructureDefinition: new Coding({
    display: "Queried Structure Definition",
    code: "queried",
    system: "http://hl7.org/fhir/map-model-mode",
  }),
  /**
   * source: This structure describes an instance passed to the mapping engine that is used a source of data.
   */
  SourceStructureDefinition: new Coding({
    display: "Source Structure Definition",
    code: "source",
    system: "http://hl7.org/fhir/map-model-mode",
  }),
  /**
   * target: This structure describes an instance passed to the mapping engine that is used a target of data.
   */
  TargetStructureDefinition: new Coding({
    display: "Target Structure Definition",
    code: "target",
    system: "http://hl7.org/fhir/map-model-mode",
  }),
} as const;

/**
 * How the referenced structure is used in this mapping.
 */
export type MapModelModeCodingType = typeof MapModelModeCodings;