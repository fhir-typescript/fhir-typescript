// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/map-model-mode|4.0.1

/**
 * How the referenced structure is used in this mapping.
 */
export const MapModelModeCodes = {
  /**
   * produced: This structure describes an instance that the mapping engine may ask to create that is used a target of data.
   */
  ProducedStructureDefinition: "produced",
  /**
   * queried: This structure describes an instance that the mapping engine may ask for that is used a source of data.
   */
  QueriedStructureDefinition: "queried",
  /**
   * source: This structure describes an instance passed to the mapping engine that is used a source of data.
   */
  SourceStructureDefinition: "source",
  /**
   * target: This structure describes an instance passed to the mapping engine that is used a target of data.
   */
  TargetStructureDefinition: "target",
} as const;

/**
 * How the referenced structure is used in this mapping.
 */
export type MapModelModeCodeType = typeof MapModelModeCodes[keyof typeof MapModelModeCodes];
