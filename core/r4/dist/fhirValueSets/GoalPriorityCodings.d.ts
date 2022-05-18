import { Coding } from '../fhir/Coding.js';
/**
 * Indicates the level of importance associated with reaching or sustaining a goal.
 */
export declare const GoalPriorityCodings: {
    /**
     * high-priority: Indicates that the goal is of considerable importance and should be a primary focus of care delivery.
     */
    readonly HighPriority: Coding;
    /**
     * low-priority: The goal is desirable but is not sufficiently important to devote significant resources to.  Achievement of the goal may be sought when incidental to achieving other goals.
     */
    readonly LowPriority: Coding;
    /**
     * medium-priority: Indicates that the goal has a reasonable degree of importance and that concrete action should be taken towards the goal.  Attainment is not as critical as high-priority goals.
     */
    readonly MediumPriority: Coding;
};
/**
 * Indicates the level of importance associated with reaching or sustaining a goal.
 */
export declare type GoalPriorityCodingType = typeof GoalPriorityCodings;
//# sourceMappingURL=GoalPriorityCodings.d.ts.map