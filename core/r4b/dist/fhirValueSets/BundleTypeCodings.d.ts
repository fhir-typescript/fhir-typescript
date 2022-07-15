import { CodingArgs } from '../fhir/Coding.js';
/**
 * Indicates the purpose of a bundle - how it is intended to be used.
 */
export declare type BundleTypeCodingType = {
    /**
     * batch: The bundle is a set of actions - intended to be processed by a server as a group of independent actions.
     */
    Batch: CodingArgs;
    /**
     * batch-response: The bundle is a batch response. Note that as a batch, some responses may indicate failure and others success.
     */
    BatchResponse: CodingArgs;
    /**
     * collection: The bundle is a set of resources collected into a single package for ease of distribution that imposes no processing obligations or behavioral rules beyond persistence.
     */
    Collection: CodingArgs;
    /**
     * document: The bundle is a document. The first resource is a Composition.
     */
    Document: CodingArgs;
    /**
     * history: The bundle is a list of resources from a history interaction on a server.
     */
    HistoryList: CodingArgs;
    /**
     * message: The bundle is a message. The first resource is a MessageHeader.
     */
    Message: CodingArgs;
    /**
     * searchset: The bundle is a list of resources returned as a result of a search/query interaction, operation, or message.
     */
    SearchResults: CodingArgs;
    /**
     * transaction: The bundle is a transaction - intended to be processed by a server as an atomic commit.
     */
    Transaction: CodingArgs;
    /**
     * transaction-response: The bundle is a transaction response. Because the response is a transaction response, the transaction has succeeded, and all responses are error free.
     */
    TransactionResponse: CodingArgs;
};
/**
 * Indicates the purpose of a bundle - how it is intended to be used.
 */
export declare const BundleTypeCodings: BundleTypeCodingType;
//# sourceMappingURL=BundleTypeCodings.d.ts.map