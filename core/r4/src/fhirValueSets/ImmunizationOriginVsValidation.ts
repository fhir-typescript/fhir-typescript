// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet Validation: http://hl7.org/fhir/ValueSet/immunization-origin|4.0.1

/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the source of the data when the report of the immunization event is not based on information from the person, entity or organization who administered the vaccine. This value set is provided as a suggestive example.
 */
export const ImmunizationOriginVsValidation: readonly string[] = [
  "provider", "http://terminology.hl7.org/CodeSystem/immunization-origin|provider", 
  "recall", "http://terminology.hl7.org/CodeSystem/immunization-origin|recall", 
  "record", "http://terminology.hl7.org/CodeSystem/immunization-origin|record", 
  "school", "http://terminology.hl7.org/CodeSystem/immunization-origin|school", 
] as const;