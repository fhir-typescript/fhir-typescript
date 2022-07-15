/**
 * Codes specifying the state of the request. Describes the lifecycle of the nutrition order.
 */
export declare const NutritionOrderStatusCodes: {
    /**
     * active: The request is 'actionable', but not all actions that are implied by it have occurred yet.
     */
    readonly Active: "active";
    /**
     * cancelled: The request has been withdrawn and is no longer actionable.
     */
    readonly Cancelled: "cancelled";
    /**
     * completed: All actions that are implied by the order have occurred and no continuation is planned (this will rarely be made explicit).
     */
    readonly Completed: "completed";
    /**
     * draft: The request is in preliminary form prior to being sent.
     */
    readonly Draft: "draft";
    /**
     * on-hold: Actions implied by the request have been temporarily halted, but are expected to continue later. May also be called "suspended".
     */
    readonly OnHold: "on-hold";
    /**
     * planned: The request has been planned.
     */
    readonly Planned: "planned";
    /**
     * proposed: The request has been proposed.
     */
    readonly Proposed: "proposed";
    /**
     * requested: The request has been placed.
     */
    readonly Requested: "requested";
};
/**
 * Codes specifying the state of the request. Describes the lifecycle of the nutrition order.
 */
export declare type NutritionOrderStatusCodeType = typeof NutritionOrderStatusCodes[keyof typeof NutritionOrderStatusCodes];
//# sourceMappingURL=NutritionOrderStatusCodes.d.ts.map