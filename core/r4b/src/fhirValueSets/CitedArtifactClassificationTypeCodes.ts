// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/cited-artifact-classification-type|4.3.0

/**
 * Cited Artifact Classification Type
 */
export const CitedArtifactClassificationTypeCodes = {
  /**
   * chemical: Chemical
   */
  Chemical: "chemical",
  /**
   * citation-subset: Citation subset
   */
  CitationSubset: "citation-subset",
  /**
   * coverage: The spatial or temporal topic of the resource, spatial applicability of the resource, or jurisdiction under which the resource is relevant
   */
  Coverage: "coverage",
  /**
   * keyword: Keyword
   */
  Keyword: "keyword",
  /**
   * knowledge-artifact-type: Knowledge Artifact Type
   */
  KnowledgeArtifactType: "knowledge-artifact-type",
  /**
   * mesh-heading: MeSH heading
   */
  MeSHHeading: "mesh-heading",
  /**
   * publication-type: Publication type
   */
  PublicationType: "publication-type",
  /**
   * publishing-model: Used for PubModel attribute in Medline
   */
  PublishingModel: "publishing-model",
  /**
   * supplemental-mesh-disease: Supplemental MeSH for Disease
   */
  SupplementalMeSHForDisease: "supplemental-mesh-disease",
  /**
   * supplemental-mesh-organism: Supplemental MeSH for Organism
   */
  SupplementalMeSHForOrganism: "supplemental-mesh-organism",
  /**
   * supplemental-mesh-protocol: Supplemental MeSH for Protocol
   */
  SupplementalMeSHForProtocol: "supplemental-mesh-protocol",
} as const;

/**
 * Cited Artifact Classification Type
 */
export type CitedArtifactClassificationTypeCodeType = typeof CitedArtifactClassificationTypeCodes[keyof typeof CitedArtifactClassificationTypeCodes];