/**
 * The allowable request method or HTTP operation codes.
 */
export declare const HttpOperationsCodes: {
    /**
     * delete: HTTP DELETE operation
     */
    readonly DELETE: "delete";
    /**
     * get: HTTP GET operation
     */
    readonly GET: "get";
    /**
     * options: HTTP OPTIONS operation
     */
    readonly OPTIONS: "options";
    /**
     * patch: HTTP PATCH operation
     */
    readonly PATCH: "patch";
    /**
     * post: HTTP POST operation
     */
    readonly POST: "post";
    /**
     * put: HTTP PUT operation
     */
    readonly PUT: "put";
};
/**
 * The allowable request method or HTTP operation codes.
 */
export declare type HttpOperationsCodeType = typeof HttpOperationsCodes[keyof typeof HttpOperationsCodes];
//# sourceMappingURL=HttpOperationsCodes.d.ts.map