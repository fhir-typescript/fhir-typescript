// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/referencerange-meaning|3.0.2

/**
 * This value set defines a set of codes that can be used to indicate the meaning/use of a reference range for a particular target population.
 */
export const ReferencerangeMeaningCodes = {
  /**
   * endocrine: Endocrine related states that change the expected value.
   */
  Endocrine: "endocrine",
  /**
   * follicular: An expected range in an individual during the follicular stage of the cycle.
   */
  FollicularStage: "follicular",
  /**
   * luteal: An expected range in an individual during the luteal stage of the cycle.
   */
  Luteal: "luteal",
  /**
   * midcycle: An expected range in an individual during the follicular stage of the cycle.
   */
  MidCycle: "midcycle",
  /**
   * normal: Based on 95th percentile for the relevant control population.
   */
  NormalRange: "normal",
  /**
   * post: The optimal range for best therapeutic outcomes for a specimen taken immediately after administration.
   */
  PostTherapeuticDesiredLevel: "post",
  /**
   * postmeopausal: An expected range in an individual post-menopause.
   */
  PostMenopause: "postmeopausal",
  /**
   * pre: The optimal range for best therapeutic outcomes for a specimen taken immediately before administration.
   */
  PreTherapeuticDesiredLevel: "pre",
  /**
   * pre-puberty: An expected range in an individual prior to puberty.
   */
  PrePuberty: "pre-puberty",
  /**
   * recommended: The range that is recommended by a relevant professional body.
   */
  RecommendedRange: "recommended",
  /**
   * therapeutic: The optimal range for best therapeutic outcomes.
   */
  TherapeuticDesiredLevel: "therapeutic",
  /**
   * treatment: The range at which treatment would/should be considered.
   */
  TreatmentRange: "treatment",
  /**
   * type: General types of reference range.
   */
  Type: "type",
} as const;

/**
 * This value set defines a set of codes that can be used to indicate the meaning/use of a reference range for a particular target population.
 */
export type ReferencerangeMeaningCodeType = typeof ReferencerangeMeaningCodes[keyof typeof ReferencerangeMeaningCodes];