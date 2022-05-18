/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the status of the patient towards perceived immunity against a vaccine preventable disease. This value set is provided as a suggestive example.
 */
export declare const ImmunizationRecommendationStatusCodes: {
    /**
     * complete: The patient is fully protected and no further doses are recommended.
     */
    readonly Complete: "complete";
    /**
     * contraindicated: The patient is contraindicated for futher doses.
     */
    readonly Contraindicated: "contraindicated";
    /**
     * due: The patient is due for their next vaccination.
     */
    readonly Due: "due";
    /**
     * immune: The patient is immune to the target disease and further immunization against the disease is not likely to provide benefit.
     */
    readonly Immune: "immune";
    /**
     * overdue: The patient is considered overdue for their next vaccination.
     */
    readonly Overdue: "overdue";
};
/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the status of the patient towards perceived immunity against a vaccine preventable disease. This value set is provided as a suggestive example.
 */
export declare type ImmunizationRecommendationStatusCodeType = typeof ImmunizationRecommendationStatusCodes[keyof typeof ImmunizationRecommendationStatusCodes];
//# sourceMappingURL=ImmunizationRecommendationStatusCodes.d.ts.map