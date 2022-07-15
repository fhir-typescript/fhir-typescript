import { CodingArgs } from '../fhir/Coding.js';
/**
 * A code that indicates how transactions are supported.
 */
export declare type TransactionModeCodingType = {
    /**
     * batch: Batches are  supported.
     */
    BatchesSupported: CodingArgs;
    /**
     * both: Both batches and transactions are supported.
     */
    BatchesAndTransactions: CodingArgs;
    /**
     * not-supported: Neither batch or transaction is supported.
     */
    None: CodingArgs;
    /**
     * transaction: Transactions are supported.
     */
    TransactionsSupported: CodingArgs;
};
/**
 * A code that indicates how transactions are supported.
 */
export declare const TransactionModeCodings: TransactionModeCodingType;
//# sourceMappingURL=TransactionModeCodings.d.ts.map