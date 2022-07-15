// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/related-artifact-type|4.3.0

/**
 * The type of relationship to the related artifact.
 */
export const RelatedArtifactTypeCodes = {
  /**
   * citation: Bibliographic citation for papers, references, or other relevant material for the knowledge resource. This is intended to allow for citation of related material, but that was not necessarily specifically prepared in connection with this knowledge resource.
   */
  Citation: "citation",
  /**
   * composed-of: The knowledge resource is composed of the given related artifact.
   */
  ComposedOf: "composed-of",
  /**
   * depends-on: The knowledge resource depends on the given related artifact.
   */
  DependsOn: "depends-on",
  /**
   * derived-from: The knowledge resource is derived from the related artifact. This is intended to capture the relationship in which a particular knowledge resource is based on the content of another artifact, but is modified to capture either a different set of overall requirements, or a more specific set of requirements such as those involved in a particular institution or clinical setting.
   */
  DerivedFrom: "derived-from",
  /**
   * documentation: Additional documentation for the knowledge resource. This would include additional instructions on usage as well as additional information on clinical context or appropriateness.
   */
  Documentation: "documentation",
  /**
   * justification: A summary of the justification for the knowledge resource including supporting evidence, relevant guidelines, or other clinically important information. This information is intended to provide a way to make the justification for the knowledge resource available to the consumer of interventions or results produced by the knowledge resource.
   */
  Justification: "justification",
  /**
   * predecessor: The previous version of the knowledge resource.
   */
  Predecessor: "predecessor",
  /**
   * successor: The next version of the knowledge resource.
   */
  Successor: "successor",
} as const;

/**
 * The type of relationship to the related artifact.
 */
export type RelatedArtifactTypeCodeType = typeof RelatedArtifactTypeCodes[keyof typeof RelatedArtifactTypeCodes];
