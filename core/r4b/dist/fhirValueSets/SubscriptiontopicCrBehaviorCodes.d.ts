/**
 * Behavior a server can exhibit when a criteria state does not exist (e.g., state prior to a create or after a delete).
 */
export declare const SubscriptiontopicCrBehaviorCodes: {
    /**
     * test-fails: The requested conditional statement will fail if a matching state does not exist (e.g., previous state during create).
     */
    readonly TestFails: "test-fails";
    /**
     * test-passes: The requested conditional statement will pass if a matching state does not exist (e.g., previous state during create).
     */
    readonly TestPasses: "test-passes";
};
/**
 * Behavior a server can exhibit when a criteria state does not exist (e.g., state prior to a create or after a delete).
 */
export declare type SubscriptiontopicCrBehaviorCodeType = typeof SubscriptiontopicCrBehaviorCodes[keyof typeof SubscriptiontopicCrBehaviorCodes];
//# sourceMappingURL=SubscriptiontopicCrBehaviorCodes.d.ts.map