// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/referencerange-meaning|4.0.1

import { Coding } from '../fhir/Coding.js'

/**
 * This value set defines a set of codes that can be used to indicate the meaning/use of a reference range for a particular target population.
 */
export const ReferencerangeMeaningCodings = {
  /**
   * endocrine: Endocrine related states that change the expected value.
   */
  Endocrine: new Coding({
    display: "Endocrine",
    code: "endocrine",
    system: "http://terminology.hl7.org/CodeSystem/referencerange-meaning",
  }),
  /**
   * follicular: An expected range in an individual during the follicular stage of the cycle.
   */
  FollicularStage: new Coding({
    display: "Follicular Stage",
    code: "follicular",
    system: "http://terminology.hl7.org/CodeSystem/referencerange-meaning",
  }),
  /**
   * luteal: An expected range in an individual during the luteal stage of the cycle.
   */
  Luteal: new Coding({
    display: "Luteal",
    code: "luteal",
    system: "http://terminology.hl7.org/CodeSystem/referencerange-meaning",
  }),
  /**
   * midcycle: An expected range in an individual during the midcycle stage of the cycle.
   */
  MidCycle: new Coding({
    display: "MidCycle",
    code: "midcycle",
    system: "http://terminology.hl7.org/CodeSystem/referencerange-meaning",
  }),
  /**
   * normal: Values expected for a normal member of the relevant control population being measured. Typically each results producer such as a laboratory has specific normal ranges and they are usually defined as within two standard deviations from the mean and account for 95.45% of this population.
   */
  NormalRange: new Coding({
    display: "Normal Range",
    code: "normal",
    system: "http://terminology.hl7.org/CodeSystem/referencerange-meaning",
  }),
  /**
   * post: The optimal range for best therapeutic outcomes for a specimen taken immediately after administration.
   */
  PostTherapeuticDesiredLevel: new Coding({
    display: "Post Therapeutic Desired Level",
    code: "post",
    system: "http://terminology.hl7.org/CodeSystem/referencerange-meaning",
  }),
  /**
   * postmenopausal: An expected range in an individual post-menopause.
   */
  PostMenopause: new Coding({
    display: "Post-Menopause",
    code: "postmenopausal",
    system: "http://terminology.hl7.org/CodeSystem/referencerange-meaning",
  }),
  /**
   * pre: The optimal range for best therapeutic outcomes for a specimen taken immediately before administration.
   */
  PreTherapeuticDesiredLevel: new Coding({
    display: "Pre Therapeutic Desired Level",
    code: "pre",
    system: "http://terminology.hl7.org/CodeSystem/referencerange-meaning",
  }),
  /**
   * pre-puberty: An expected range in an individual prior to puberty.
   */
  PrePuberty: new Coding({
    display: "Pre-Puberty",
    code: "pre-puberty",
    system: "http://terminology.hl7.org/CodeSystem/referencerange-meaning",
  }),
  /**
   * recommended: The range that is recommended by a relevant professional body.
   */
  RecommendedRange: new Coding({
    display: "Recommended Range",
    code: "recommended",
    system: "http://terminology.hl7.org/CodeSystem/referencerange-meaning",
  }),
  /**
   * therapeutic: The optimal range for best therapeutic outcomes.
   */
  TherapeuticDesiredLevel: new Coding({
    display: "Therapeutic Desired Level",
    code: "therapeutic",
    system: "http://terminology.hl7.org/CodeSystem/referencerange-meaning",
  }),
  /**
   * treatment: The range at which treatment would/should be considered.
   */
  TreatmentRange: new Coding({
    display: "Treatment Range",
    code: "treatment",
    system: "http://terminology.hl7.org/CodeSystem/referencerange-meaning",
  }),
  /**
   * type: General types of reference range.
   */
  Type: new Coding({
    display: "Type",
    code: "type",
    system: "http://terminology.hl7.org/CodeSystem/referencerange-meaning",
  }),
} as const;

/**
 * This value set defines a set of codes that can be used to indicate the meaning/use of a reference range for a particular target population.
 */
export type ReferencerangeMeaningCodingType = typeof ReferencerangeMeaningCodings;