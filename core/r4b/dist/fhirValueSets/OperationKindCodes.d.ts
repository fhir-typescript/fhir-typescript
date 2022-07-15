/**
 * Whether an operation is a normal operation or a query.
 */
export declare const OperationKindCodes: {
    /**
     * operation: This operation is invoked as an operation.
     */
    readonly Operation: "operation";
    /**
     * query: This operation is a named query, invoked using the search mechanism.
     */
    readonly Query: "query";
};
/**
 * Whether an operation is a normal operation or a query.
 */
export declare type OperationKindCodeType = typeof OperationKindCodes[keyof typeof OperationKindCodes];
//# sourceMappingURL=OperationKindCodes.d.ts.map