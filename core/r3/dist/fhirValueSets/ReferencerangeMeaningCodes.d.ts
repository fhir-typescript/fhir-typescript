/**
 * This value set defines a set of codes that can be used to indicate the meaning/use of a reference range for a particular target population.
 */
export declare const ReferencerangeMeaningCodes: {
    /**
     * endocrine: Endocrine related states that change the expected value.
     */
    readonly Endocrine: "endocrine";
    /**
     * follicular: An expected range in an individual during the follicular stage of the cycle.
     */
    readonly FollicularStage: "follicular";
    /**
     * luteal: An expected range in an individual during the luteal stage of the cycle.
     */
    readonly Luteal: "luteal";
    /**
     * midcycle: An expected range in an individual during the follicular stage of the cycle.
     */
    readonly MidCycle: "midcycle";
    /**
     * normal: Based on 95th percentile for the relevant control population.
     */
    readonly NormalRange: "normal";
    /**
     * post: The optimal range for best therapeutic outcomes for a specimen taken immediately after administration.
     */
    readonly PostTherapeuticDesiredLevel: "post";
    /**
     * postmeopausal: An expected range in an individual post-menopause.
     */
    readonly PostMenopause: "postmeopausal";
    /**
     * pre: The optimal range for best therapeutic outcomes for a specimen taken immediately before administration.
     */
    readonly PreTherapeuticDesiredLevel: "pre";
    /**
     * pre-puberty: An expected range in an individual prior to puberty.
     */
    readonly PrePuberty: "pre-puberty";
    /**
     * recommended: The range that is recommended by a relevant professional body.
     */
    readonly RecommendedRange: "recommended";
    /**
     * therapeutic: The optimal range for best therapeutic outcomes.
     */
    readonly TherapeuticDesiredLevel: "therapeutic";
    /**
     * treatment: The range at which treatment would/should be considered.
     */
    readonly TreatmentRange: "treatment";
    /**
     * type: General types of reference range.
     */
    readonly Type: "type";
};
/**
 * This value set defines a set of codes that can be used to indicate the meaning/use of a reference range for a particular target population.
 */
export declare type ReferencerangeMeaningCodeType = typeof ReferencerangeMeaningCodes[keyof typeof ReferencerangeMeaningCodes];
//# sourceMappingURL=ReferencerangeMeaningCodes.d.ts.map