import { CodingArgs } from '../fhir/Coding.js';
/**
 * Whether an operation is a normal operation or a query.
 */
export declare type OperationKindCodingType = {
    /**
     * operation: This operation is invoked as an operation.
     */
    Operation: CodingArgs;
    /**
     * query: This operation is a named query, invoked using the search mechanism.
     */
    Query: CodingArgs;
};
/**
 * Whether an operation is a normal operation or a query.
 */
export declare const OperationKindCodings: OperationKindCodingType;
//# sourceMappingURL=OperationKindCodings.d.ts.map