import { CodingArgs } from '../fhir/Coding.js';
/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support the definition of dates relevant to recommendations for future doses of vaccines. This value set is provided as a suggestive example.
 */
export declare type ImmunizationRecommendationDateCriterionCodingType = {
    /**
     * due: Date the next dose is considered due.
     */
    Due: CodingArgs;
    /**
     * earliest: As early as possible.
     */
    EarliestDate: CodingArgs;
    /**
     * latest: The latest date the next dose is to be given.
     */
    Latest: CodingArgs;
    /**
     * overdue: Date the next dose is considered overdue.
     */
    PastDueDate: CodingArgs;
    /**
     * recommended: At the recommended date.
     */
    Recommended: CodingArgs;
};
/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support the definition of dates relevant to recommendations for future doses of vaccines. This value set is provided as a suggestive example.
 */
export declare const ImmunizationRecommendationDateCriterionCodings: ImmunizationRecommendationDateCriterionCodingType;
//# sourceMappingURL=ImmunizationRecommendationDateCriterionCodings.d.ts.map