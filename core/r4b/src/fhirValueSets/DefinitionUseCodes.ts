// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/definition-use|4.3.0

/**
 * Structure Definition Use Codes / Keywords
 */
export const DefinitionUseCodes = {
  /**
   * archetype: This structure captures an analysis of a domain
   */
  DomainAnalysisModel: "archetype",
  /**
   * custom-resource: This structure is intended to be treated like a FHIR resource (e.g. on the FHIR API)
   */
  CustomResource: "custom-resource",
  /**
   * dam: This structure captures an analysis of a domain
   */
  DomainAnalysisModelDam: "dam",
  /**
   * fhir-structure: This structure is defined as part of the base FHIR Specification
   */
  FHIRStructure: "fhir-structure",
  /**
   * template: This structure is a template (n.b: 'template' has many meanings)
   */
  Template: "template",
  /**
   * wire-format: This structure represents and existing structure (e.g. CDA, HL7 v2)
   */
  WireFormat: "wire-format",
} as const;

/**
 * Structure Definition Use Codes / Keywords
 */
export type DefinitionUseCodeType = typeof DefinitionUseCodes[keyof typeof DefinitionUseCodes];
