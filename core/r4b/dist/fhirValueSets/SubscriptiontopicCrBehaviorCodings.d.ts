import { CodingArgs } from '../fhir/Coding.js';
/**
 * Behavior a server can exhibit when a criteria state does not exist (e.g., state prior to a create or after a delete).
 */
export declare type SubscriptiontopicCrBehaviorCodingType = {
    /**
     * test-fails: The requested conditional statement will fail if a matching state does not exist (e.g., previous state during create).
     */
    TestFails: CodingArgs;
    /**
     * test-passes: The requested conditional statement will pass if a matching state does not exist (e.g., previous state during create).
     */
    TestPasses: CodingArgs;
};
/**
 * Behavior a server can exhibit when a criteria state does not exist (e.g., state prior to a create or after a delete).
 */
export declare const SubscriptiontopicCrBehaviorCodings: SubscriptiontopicCrBehaviorCodingType;
//# sourceMappingURL=SubscriptiontopicCrBehaviorCodings.d.ts.map