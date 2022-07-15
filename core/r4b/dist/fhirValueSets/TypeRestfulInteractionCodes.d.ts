/**
 * Operations supported by REST at the type or instance level.
 */
export declare const TypeRestfulInteractionCodes: {
    /**
     * create: Create a new resource with a server assigned id.
     */
    readonly Create: "create";
    /**
     * delete: Delete a resource.
     */
    readonly Delete: "delete";
    /**
     * history-instance: Retrieve the change history for a particular resource.
     */
    readonly HistoryInstance: "history-instance";
    /**
     * history-type: Retrieve the change history for all resources of a particular type.
     */
    readonly HistoryType: "history-type";
    /**
     * patch: Update an existing resource by posting a set of changes to it.
     */
    readonly Patch: "patch";
    /**
     * read: Read the current state of the resource.
     */
    readonly Read: "read";
    /**
     * search-type: Search all resources of the specified type based on some filter criteria.
     */
    readonly SearchType: "search-type";
    /**
     * update: Update an existing resource by its id (or create it if it is new).
     */
    readonly Update: "update";
    /**
     * vread: Read the state of a specific version of the resource.
     */
    readonly Vread: "vread";
};
/**
 * Operations supported by REST at the type or instance level.
 */
export declare type TypeRestfulInteractionCodeType = typeof TypeRestfulInteractionCodes[keyof typeof TypeRestfulInteractionCodes];
//# sourceMappingURL=TypeRestfulInteractionCodes.d.ts.map