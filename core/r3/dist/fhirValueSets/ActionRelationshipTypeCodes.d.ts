/**
 * Defines the types of relationships between actions
 */
export declare const ActionRelationshipTypeCodes: {
    /**
     * after: The action must be performed after the related action
     */
    readonly After: "after";
    /**
     * after-end: The action must be performed after the end of the related action
     */
    readonly AfterEnd: "after-end";
    /**
     * after-start: The action must be performed after the start of the related action
     */
    readonly AfterStart: "after-start";
    /**
     * before: The action must be performed before the related action
     */
    readonly Before: "before";
    /**
     * before-end: The action must be performed before the end of the related action
     */
    readonly BeforeEnd: "before-end";
    /**
     * before-start: The action must be performed before the start of the related action
     */
    readonly BeforeStart: "before-start";
    /**
     * concurrent: The action must be performed concurrent with the related action
     */
    readonly Concurrent: "concurrent";
    /**
     * concurrent-with-end: The action must be performed concurrent with the end of the related action
     */
    readonly ConcurrentWithEnd: "concurrent-with-end";
    /**
     * concurrent-with-start: The action must be performed concurrent with the start of the related action
     */
    readonly ConcurrentWithStart: "concurrent-with-start";
};
/**
 * Defines the types of relationships between actions
 */
export declare type ActionRelationshipTypeCodeType = typeof ActionRelationshipTypeCodes[keyof typeof ActionRelationshipTypeCodes];
//# sourceMappingURL=ActionRelationshipTypeCodes.d.ts.map