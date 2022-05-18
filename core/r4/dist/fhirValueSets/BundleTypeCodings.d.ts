import { Coding } from '../fhir/Coding.js';
/**
 * Indicates the purpose of a bundle - how it is intended to be used.
 */
export declare const BundleTypeCodings: {
    /**
     * batch: The bundle is a set of actions - intended to be processed by a server as a group of independent actions.
     */
    readonly Batch: Coding;
    /**
     * batch-response: The bundle is a batch response. Note that as a batch, some responses may indicate failure and others success.
     */
    readonly BatchResponse: Coding;
    /**
     * collection: The bundle is a set of resources collected into a single package for ease of distribution that imposes no processing obligations or behavioral rules beyond persistence.
     */
    readonly Collection: Coding;
    /**
     * document: The bundle is a document. The first resource is a Composition.
     */
    readonly Document: Coding;
    /**
     * history: The bundle is a list of resources from a history interaction on a server.
     */
    readonly HistoryList: Coding;
    /**
     * message: The bundle is a message. The first resource is a MessageHeader.
     */
    readonly Message: Coding;
    /**
     * searchset: The bundle is a list of resources returned as a result of a search/query interaction, operation, or message.
     */
    readonly SearchResults: Coding;
    /**
     * transaction: The bundle is a transaction - intended to be processed by a server as an atomic commit.
     */
    readonly Transaction: Coding;
    /**
     * transaction-response: The bundle is a transaction response. Because the response is a transaction response, the transaction has succeeded, and all responses are error free.
     */
    readonly TransactionResponse: Coding;
};
/**
 * Indicates the purpose of a bundle - how it is intended to be used.
 */
export declare type BundleTypeCodingType = typeof BundleTypeCodings;
//# sourceMappingURL=BundleTypeCodings.d.ts.map