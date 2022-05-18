import { Coding } from '../fhir/Coding.js';
/**
 * Whether an operation is a normal operation or a query.
 */
export declare const OperationKindCodings: {
    /**
     * operation: This operation is invoked as an operation.
     */
    readonly Operation: Coding;
    /**
     * query: This operation is a named query, invoked using the search mechanism.
     */
    readonly Query: Coding;
};
/**
 * Whether an operation is a normal operation or a query.
 */
export declare type OperationKindCodingType = typeof OperationKindCodings;
//# sourceMappingURL=OperationKindCodings.d.ts.map