// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/regulated-authorization-basis|4.3.0

/**
 * A legal or regulatory framework against which an authorization is granted, or other reasons for it.
 */
export const RegulatedAuthorizationBasisCodes = {
  /**
   * Code: Bibliographical
   */
  BibliographicalApplicationStandAlone: "Bibliographical",
  /**
   * Code: Full
   */
  FullApplication: "Full",
  /**
   * Code: KnownHumanBlood
   */
  KnownHumanBloodPlasmaDerivedAncillaryMedicinalSubstance: "KnownHumanBlood",
  /**
   * Code: KnownSubstance
   */
  KnownActiveSubstance: "KnownSubstance",
  /**
   * Code: NewSubstance
   */
  NewActiveSubstance: "NewSubstance",
  /**
   * Code: ParallelTrade
   */
  ParallelTradedProducts: "ParallelTrade",
  /**
   * Code: SimilarBiological
   */
  SimilarBiologicalApplication: "SimilarBiological",
  /**
   * Code: TemporaryUse
   */
  AuthorisationsForTemporaryUse: "TemporaryUse",
  /**
   * Code: TraditionalUse
   */
  TraditionalUseRegistrationForHerbalMedicinalProductApplication: "TraditionalUse",
  /**
   * Code: Well-establishedUse
   */
  WellEstablishedUseApplication: "Well-establishedUse",
} as const;

/**
 * A legal or regulatory framework against which an authorization is granted, or other reasons for it.
 */
export type RegulatedAuthorizationBasisCodeType = typeof RegulatedAuthorizationBasisCodes[keyof typeof RegulatedAuthorizationBasisCodes];