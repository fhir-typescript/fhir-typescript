// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/transaction-mode|1.0.2

/**
 * A code that indicates how transactions are supported.
 */
export const TransactionModeCodes = {
  /**
   * batch: Batches are  supported.
   */
  BatchesSupported: "batch",
  /**
   * both: Both batches and transactions are supported.
   */
  BatchesAndTransactions: "both",
  /**
   * not-supported: Neither batch or transaction is supported.
   */
  None: "not-supported",
  /**
   * transaction: Transactions are supported.
   */
  TransactionsSupported: "transaction",
} as const;

/**
 * A code that indicates how transactions are supported.
 */
export type TransactionModeCodeType = typeof TransactionModeCodes[keyof typeof TransactionModeCodes];
