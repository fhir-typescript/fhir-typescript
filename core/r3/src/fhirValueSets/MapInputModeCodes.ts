// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/map-input-mode|3.0.2

/**
 * Mode for this instance of data
 */
export const MapInputModeCodes = {
  /**
   * source: Names an input instance used a source for mapping
   */
  SourceInstance: "source",
  /**
   * target: Names an instance that is being populated
   */
  TargetInstance: "target",
} as const;

/**
 * Mode for this instance of data
 */
export type MapInputModeCodeType = typeof MapInputModeCodes[keyof typeof MapInputModeCodes];
