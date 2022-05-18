import { Coding } from '../fhir/Coding.js';
/**
 * This value set defines a set of codes that can be used to indicate the meaning/use of a reference range for a particular target population.
 */
export declare const ReferencerangeMeaningCodings: {
    /**
     * endocrine: Endocrine related states that change the expected value.
     */
    readonly Endocrine: Coding;
    /**
     * follicular: An expected range in an individual during the follicular stage of the cycle.
     */
    readonly FollicularStage: Coding;
    /**
     * luteal: An expected range in an individual during the luteal stage of the cycle.
     */
    readonly Luteal: Coding;
    /**
     * midcycle: An expected range in an individual during the midcycle stage of the cycle.
     */
    readonly MidCycle: Coding;
    /**
     * normal: Values expected for a normal member of the relevant control population being measured. Typically each results producer such as a laboratory has specific normal ranges and they are usually defined as within two standard deviations from the mean and account for 95.45% of this population.
     */
    readonly NormalRange: Coding;
    /**
     * post: The optimal range for best therapeutic outcomes for a specimen taken immediately after administration.
     */
    readonly PostTherapeuticDesiredLevel: Coding;
    /**
     * postmenopausal: An expected range in an individual post-menopause.
     */
    readonly PostMenopause: Coding;
    /**
     * pre: The optimal range for best therapeutic outcomes for a specimen taken immediately before administration.
     */
    readonly PreTherapeuticDesiredLevel: Coding;
    /**
     * pre-puberty: An expected range in an individual prior to puberty.
     */
    readonly PrePuberty: Coding;
    /**
     * recommended: The range that is recommended by a relevant professional body.
     */
    readonly RecommendedRange: Coding;
    /**
     * therapeutic: The optimal range for best therapeutic outcomes.
     */
    readonly TherapeuticDesiredLevel: Coding;
    /**
     * treatment: The range at which treatment would/should be considered.
     */
    readonly TreatmentRange: Coding;
    /**
     * type: General types of reference range.
     */
    readonly Type: Coding;
};
/**
 * This value set defines a set of codes that can be used to indicate the meaning/use of a reference range for a particular target population.
 */
export declare type ReferencerangeMeaningCodingType = typeof ReferencerangeMeaningCodings;
//# sourceMappingURL=ReferencerangeMeaningCodings.d.ts.map