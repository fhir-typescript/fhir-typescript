import { CodingArgs } from '../fhir/Coding.js';
/**
 * Indicates the level of importance associated with reaching or sustaining a goal.
 */
export declare type GoalPriorityCodingType = {
    /**
     * high-priority: Indicates that the goal is of considerable importance and should be a primary focus of care delivery.
     */
    HighPriority: CodingArgs;
    /**
     * low-priority: The goal is desirable but is not sufficiently important to devote significant resources to.  Achievement of the goal may be sought when incidental to achieving other goals.
     */
    LowPriority: CodingArgs;
    /**
     * medium-priority: Indicates that the goal has a reasonable degree of importance and that concrete action should be taken towards the goal.  Attainment is not as critical as high-priority goals.
     */
    MediumPriority: CodingArgs;
};
/**
 * Indicates the level of importance associated with reaching or sustaining a goal.
 */
export declare const GoalPriorityCodings: GoalPriorityCodingType;
//# sourceMappingURL=GoalPriorityCodings.d.ts.map