import { CodingArgs } from '../fhir/Coding.js';
/**
 * This value set defines a set of codes that can be used to indicate the meaning/use of a reference range for a particular target population.
 */
export declare type ReferencerangeMeaningCodingType = {
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
     * midcycle: An expected range in an individual during the midcycle stage of the cycle.
     */
    MidCycle: CodingArgs;
    /**
     * normal: Values expected for a normal member of the relevant control population being measured. Typically each results producer such as a laboratory has specific normal ranges and they are usually defined as within two standard deviations from the mean and account for 95.45% of this population.
     */
    NormalRange: CodingArgs;
    /**
     * post: The optimal range for best therapeutic outcomes for a specimen taken immediately after administration.
     */
    PostTherapeuticDesiredLevel: CodingArgs;
    /**
     * postmenopausal: An expected range in an individual post-menopause.
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
};
/**
 * This value set defines a set of codes that can be used to indicate the meaning/use of a reference range for a particular target population.
 */
export declare const ReferencerangeMeaningCodings: ReferencerangeMeaningCodingType;
//# sourceMappingURL=ReferencerangeMeaningCodings.d.ts.map