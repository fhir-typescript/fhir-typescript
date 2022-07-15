/**
 * A code that indicates how transactions are supported.
 */
export declare const TransactionModeCodes: {
    /**
     * batch: Batches are  supported.
     */
    readonly BatchesSupported: "batch";
    /**
     * both: Both batches and transactions are supported.
     */
    readonly BatchesAndTransactions: "both";
    /**
     * not-supported: Neither batch or transaction is supported.
     */
    readonly None: "not-supported";
    /**
     * transaction: Transactions are supported.
     */
    readonly TransactionsSupported: "transaction";
};
/**
 * A code that indicates how transactions are supported.
 */
export declare type TransactionModeCodeType = typeof TransactionModeCodes[keyof typeof TransactionModeCodes];
//# sourceMappingURL=TransactionModeCodes.d.ts.map