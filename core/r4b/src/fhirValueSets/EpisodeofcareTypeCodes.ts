// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/episodeofcare-type|4.3.0

/**
 * This example value set defines a set of codes that can be used to express the usage type of an EpisodeOfCare record.
 */
export const EpisodeofcareTypeCodes = {
  /**
   * Code: cacp
   */
  CommunityBasedAgedCare: "cacp",
  /**
   * Code: da
   */
  DrugAndAlcoholRehabilitation: "da",
  /**
   * Code: diab
   */
  PostCoordinatedDiabetesProgram: "diab",
  /**
   * Code: hacc
   */
  HomeAndCommunityCare: "hacc",
  /**
   * Code: pac
   */
  PostAcuteCare: "pac",
} as const;

/**
 * This example value set defines a set of codes that can be used to express the usage type of an EpisodeOfCare record.
 */
export type EpisodeofcareTypeCodeType = typeof EpisodeofcareTypeCodes[keyof typeof EpisodeofcareTypeCodes];
