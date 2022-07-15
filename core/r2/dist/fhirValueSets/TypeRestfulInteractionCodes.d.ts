/**
 * Operations supported by REST at the type or instance level.
 */
export declare const TypeRestfulInteractionCodes: {
    /**
     * Code: create
     */
    readonly Create: "create";
    /**
     * Code: delete
     */
    readonly Delete: "delete";
    /**
     * Code: history-instance
     */
    readonly HistoryInstance: "history-instance";
    /**
     * Code: history-type
     */
    readonly HistoryType: "history-type";
    /**
     * Code: read
     */
    readonly Read: "read";
    /**
     * Code: search-type
     */
    readonly SearchType: "search-type";
    /**
     * Code: update
     */
    readonly Update: "update";
    /**
     * Code: validate
     */
    readonly Validate: "validate";
    /**
     * Code: vread
     */
    readonly Vread: "vread";
};
/**
 * Operations supported by REST at the type or instance level.
 */
export declare type TypeRestfulInteractionCodeType = typeof TypeRestfulInteractionCodes[keyof typeof TypeRestfulInteractionCodes];
//# sourceMappingURL=TypeRestfulInteractionCodes.d.ts.map