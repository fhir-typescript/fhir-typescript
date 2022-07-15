/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support the definition of dates relevant to recommendations for future doses of vaccines. This value set is provided as a suggestive example.
 */
export declare const ImmunizationRecommendationDateCriterionCodes: {
    /**
     * due: Date the next dose is considered due.
     */
    readonly Due: "due";
    /**
     * earliest: As early as possible.
     */
    readonly EarliestDate: "earliest";
    /**
     * latest: The latest date the next dose is to be given.
     */
    readonly Latest: "latest";
    /**
     * overdue: Date the next dose is considered overdue.
     */
    readonly PastDueDate: "overdue";
    /**
     * recommended: At the recommended date.
     */
    readonly Recommended: "recommended";
};
/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support the definition of dates relevant to recommendations for future doses of vaccines. This value set is provided as a suggestive example.
 */
export declare type ImmunizationRecommendationDateCriterionCodeType = typeof ImmunizationRecommendationDateCriterionCodes[keyof typeof ImmunizationRecommendationDateCriterionCodes];
//# sourceMappingURL=ImmunizationRecommendationDateCriterionCodes.d.ts.map