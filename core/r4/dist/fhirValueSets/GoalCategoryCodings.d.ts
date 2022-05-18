import { Coding } from '../fhir/Coding.js';
/**
 * Example codes for grouping goals to use for filtering or presentation.
 */
export declare const GoalCategoryCodings: {
    /**
     * behavioral: Goals related to the manner in which the subject acts.
     */
    readonly Behavioral: Coding;
    /**
     * dietary: Goals related to the consumption of food and/or beverages.
     */
    readonly Dietary: Coding;
    /**
     * nursing: Goals related to the practice of nursing or established by nurses.
     */
    readonly Nursing: Coding;
    /**
     * physiotherapy: Goals related to the mobility and/or motor capability of the subject.
     */
    readonly Physiotherapy: Coding;
    /**
     * safety: Goals related to the personal protection of the subject.
     */
    readonly Safety: Coding;
};
/**
 * Example codes for grouping goals to use for filtering or presentation.
 */
export declare type GoalCategoryCodingType = typeof GoalCategoryCodings;
//# sourceMappingURL=GoalCategoryCodings.d.ts.map