/**
 * Operations supported by REST at the system level.
 */
export declare const SystemRestfulInteractionCodes: {
    /**
     * batch: perform a set of a separate interactions in a single http operation
     */
    readonly Batch: "batch";
    /**
     * history-system: Retrieve the change history for all resources on a system.
     */
    readonly HistorySystem: "history-system";
    /**
     * search-system: Search all resources based on some filter criteria.
     */
    readonly SearchSystem: "search-system";
    /**
     * transaction: Update, create or delete a set of resources as a single transaction.
     */
    readonly Transaction: "transaction";
};
/**
 * Operations supported by REST at the system level.
 */
export declare type SystemRestfulInteractionCodeType = typeof SystemRestfulInteractionCodes[keyof typeof SystemRestfulInteractionCodes];
//# sourceMappingURL=SystemRestfulInteractionCodes.d.ts.map