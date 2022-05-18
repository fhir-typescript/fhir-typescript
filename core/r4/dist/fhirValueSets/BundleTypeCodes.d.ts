/**
 * Indicates the purpose of a bundle - how it is intended to be used.
 */
export declare const BundleTypeCodes: {
    /**
     * batch: The bundle is a set of actions - intended to be processed by a server as a group of independent actions.
     */
    readonly Batch: "batch";
    /**
     * batch-response: The bundle is a batch response. Note that as a batch, some responses may indicate failure and others success.
     */
    readonly BatchResponse: "batch-response";
    /**
     * collection: The bundle is a set of resources collected into a single package for ease of distribution that imposes no processing obligations or behavioral rules beyond persistence.
     */
    readonly Collection: "collection";
    /**
     * document: The bundle is a document. The first resource is a Composition.
     */
    readonly Document: "document";
    /**
     * history: The bundle is a list of resources from a history interaction on a server.
     */
    readonly HistoryList: "history";
    /**
     * message: The bundle is a message. The first resource is a MessageHeader.
     */
    readonly Message: "message";
    /**
     * searchset: The bundle is a list of resources returned as a result of a search/query interaction, operation, or message.
     */
    readonly SearchResults: "searchset";
    /**
     * transaction: The bundle is a transaction - intended to be processed by a server as an atomic commit.
     */
    readonly Transaction: "transaction";
    /**
     * transaction-response: The bundle is a transaction response. Because the response is a transaction response, the transaction has succeeded, and all responses are error free.
     */
    readonly TransactionResponse: "transaction-response";
};
/**
 * Indicates the purpose of a bundle - how it is intended to be used.
 */
export declare type BundleTypeCodeType = typeof BundleTypeCodes[keyof typeof BundleTypeCodes];
//# sourceMappingURL=BundleTypeCodes.d.ts.map