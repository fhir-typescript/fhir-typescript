/**
 * The type of action to be performed
 */
export declare const ActionTypeCodes: {
    /**
     * create: The action is to create a new resource
     */
    readonly Create: "create";
    /**
     * fire-event: The action is to fire a specific event
     */
    readonly FireEvent: "fire-event";
    /**
     * remove: The action is to remove an existing resource
     */
    readonly Remove: "remove";
    /**
     * update: The action is to update an existing resource
     */
    readonly Update: "update";
};
/**
 * The type of action to be performed
 */
export declare type ActionTypeCodeType = typeof ActionTypeCodes[keyof typeof ActionTypeCodes];
//# sourceMappingURL=ActionTypeCodes.d.ts.map