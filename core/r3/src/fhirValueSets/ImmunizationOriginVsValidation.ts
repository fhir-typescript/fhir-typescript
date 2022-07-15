// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet Validation: http://hl7.org/fhir/ValueSet/immunization-origin|3.0.2

/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the source of the data when the report of the immunization event is not based on information from the person, entity or organization who administered the vaccine. This value set is provided as a suggestive example.
 */
export const ImmunizationOriginVsValidation: readonly string[] = [
  "http://hl7.org/fhir/immunization-origin|provider",
  "http://hl7.org/fhir/immunization-origin|recall",
  "http://hl7.org/fhir/immunization-origin|record",
  "http://hl7.org/fhir/immunization-origin|school",
  "provider",
  "recall",
  "record",
  "school",
] as const;
