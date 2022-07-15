// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/referencerange-meaning|3.0.2

import { CodingArgs } from '../fhir/Coding.js'

/**
 * This value set defines a set of codes that can be used to indicate the meaning/use of a reference range for a particular target population.
 */
export type ReferencerangeMeaningCodingType = {
  /**
   * endocrine: Endocrine related states that change the expected value.
   */
  Endocrine: CodingArgs;
  /**
   * follicular: An expected range in an individual during the follicular stage of the cycle.
   */
  FollicularStage: CodingArgs;
  /**
   * luteal: An expected range in an individual during the luteal stage of the cycle.
   */
  Luteal: CodingArgs;
  /**
   * midcycle: An expected range in an individual during the follicular stage of the cycle.
   */
  MidCycle: CodingArgs;
  /**
   * normal: Based on 95th percentile for the relevant control population.
   */
  NormalRange: CodingArgs;
  /**
   * post: The optimal range for best therapeutic outcomes for a specimen taken immediately after administration.
   */
  PostTherapeuticDesiredLevel: CodingArgs;
  /**
   * postmeopausal: An expected range in an individual post-menopause.
   */
  PostMenopause: CodingArgs;
  /**
   * pre: The optimal range for best therapeutic outcomes for a specimen taken immediately before administration.
   */
  PreTherapeuticDesiredLevel: CodingArgs;
  /**
   * pre-puberty: An expected range in an individual prior to puberty.
   */
  PrePuberty: CodingArgs;
  /**
   * recommended: The range that is recommended by a relevant professional body.
   */
  RecommendedRange: CodingArgs;
  /**
   * therapeutic: The optimal range for best therapeutic outcomes.
   */
  TherapeuticDesiredLevel: CodingArgs;
  /**
   * treatment: The range at which treatment would/should be considered.
   */
  TreatmentRange: CodingArgs;
  /**
   * type: General types of reference range.
   */
  Type: CodingArgs;
}

/**
 * This value set defines a set of codes that can be used to indicate the meaning/use of a reference range for a particular target population.
 */
export const ReferencerangeMeaningCodings:ReferencerangeMeaningCodingType = {
  /**
   * endocrine: Endocrine related states that change the expected value.
   */
  Endocrine: {
    display: "Endocrine",
    code: "endocrine",
    system: "http://hl7.org/fhir/referencerange-meaning",
  },
  /**
   * follicular: An expected range in an individual during the follicular stage of the cycle.
   */
  FollicularStage: {
    display: "Follicular Stage",
    code: "follicular",
    system: "http://hl7.org/fhir/referencerange-meaning",
  },
  /**
   * luteal: An expected range in an individual during the luteal stage of the cycle.
   */
  Luteal: {
    display: "Luteal",
    code: "luteal",
    system: "http://hl7.org/fhir/referencerange-meaning",
  },
  /**
   * midcycle: An expected range in an individual during the follicular stage of the cycle.
   */
  MidCycle: {
    display: "MidCycle",
    code: "midcycle",
    system: "http://hl7.org/fhir/referencerange-meaning",
  },
  /**
   * normal: Based on 95th percentile for the relevant control population.
   */
  NormalRange: {
    display: "Normal Range",
    code: "normal",
    system: "http://hl7.org/fhir/referencerange-meaning",
  },
  /**
   * post: The optimal range for best therapeutic outcomes for a specimen taken immediately after administration.
   */
  PostTherapeuticDesiredLevel: {
    display: "Post Therapeutic Desired Level",
    code: "post",
    system: "http://hl7.org/fhir/referencerange-meaning",
  },
  /**
   * postmeopausal: An expected range in an individual post-menopause.
   */
  PostMenopause: {
    display: "Post-Menopause",
    code: "postmeopausal",
    system: "http://hl7.org/fhir/referencerange-meaning",
  },
  /**
   * pre: The optimal range for best therapeutic outcomes for a specimen taken immediately before administration.
   */
  PreTherapeuticDesiredLevel: {
    display: "Pre Therapeutic Desired Level",
    code: "pre",
    system: "http://hl7.org/fhir/referencerange-meaning",
  },
  /**
   * pre-puberty: An expected range in an individual prior to puberty.
   */
  PrePuberty: {
    display: "Pre-Puberty",
    code: "pre-puberty",
    system: "http://hl7.org/fhir/referencerange-meaning",
  },
  /**
   * recommended: The range that is recommended by a relevant professional body.
   */
  RecommendedRange: {
    display: "Recommended Range",
    code: "recommended",
    system: "http://hl7.org/fhir/referencerange-meaning",
  },
  /**
   * therapeutic: The optimal range for best therapeutic outcomes.
   */
  TherapeuticDesiredLevel: {
    display: "Therapeutic Desired Level",
    code: "therapeutic",
    system: "http://hl7.org/fhir/referencerange-meaning",
  },
  /**
   * treatment: The range at which treatment would/should be considered.
   */
  TreatmentRange: {
    display: "Treatment Range",
    code: "treatment",
    system: "http://hl7.org/fhir/referencerange-meaning",
  },
  /**
   * type: General types of reference range.
   */
  Type: {
    display: "Type",
    code: "type",
    system: "http://hl7.org/fhir/referencerange-meaning",
  },
} as const;
