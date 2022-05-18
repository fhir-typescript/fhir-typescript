import { Coding } from '../fhir/Coding.js';
/**
 * The allowable request method or HTTP operation codes.
 */
export declare const HttpOperationsCodings: {
    /**
     * delete: HTTP DELETE operation.
     */
    readonly DELETE: Coding;
    /**
     * get: HTTP GET operation.
     */
    readonly GET: Coding;
    /**
     * head: HTTP HEAD operation.
     */
    readonly HEAD: Coding;
    /**
     * options: HTTP OPTIONS operation.
     */
    readonly OPTIONS: Coding;
    /**
     * patch: HTTP PATCH operation.
     */
    readonly PATCH: Coding;
    /**
     * post: HTTP POST operation.
     */
    readonly POST: Coding;
    /**
     * put: HTTP PUT operation.
     */
    readonly PUT: Coding;
};
/**
 * The allowable request method or HTTP operation codes.
 */
export declare type HttpOperationsCodingType = typeof HttpOperationsCodings;
//# sourceMappingURL=HttpOperationsCodings.d.ts.map