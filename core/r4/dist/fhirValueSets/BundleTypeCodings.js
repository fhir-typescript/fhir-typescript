/*! @fhir-typescript/r4-core v0.0.11-beta.2 2022-05-18 */
'use strict';
import { Coding } from '../fhir/Coding.js';

// <auto-generated/>
/**
 * Indicates the purpose of a bundle - how it is intended to be used.
 */
var BundleTypeCodings = {
    /**
     * batch: The bundle is a set of actions - intended to be processed by a server as a group of independent actions.
     */
    Batch: new Coding({
        display: "Batch",
        code: "batch",
        system: "http://hl7.org/fhir/bundle-type",
    }),
    /**
     * batch-response: The bundle is a batch response. Note that as a batch, some responses may indicate failure and others success.
     */
    BatchResponse: new Coding({
        display: "Batch Response",
        code: "batch-response",
        system: "http://hl7.org/fhir/bundle-type",
    }),
    /**
     * collection: The bundle is a set of resources collected into a single package for ease of distribution that imposes no processing obligations or behavioral rules beyond persistence.
     */
    Collection: new Coding({
        display: "Collection",
        code: "collection",
        system: "http://hl7.org/fhir/bundle-type",
    }),
    /**
     * document: The bundle is a document. The first resource is a Composition.
     */
    Document: new Coding({
        display: "Document",
        code: "document",
        system: "http://hl7.org/fhir/bundle-type",
    }),
    /**
     * history: The bundle is a list of resources from a history interaction on a server.
     */
    HistoryList: new Coding({
        display: "History List",
        code: "history",
        system: "http://hl7.org/fhir/bundle-type",
    }),
    /**
     * message: The bundle is a message. The first resource is a MessageHeader.
     */
    Message: new Coding({
        display: "Message",
        code: "message",
        system: "http://hl7.org/fhir/bundle-type",
    }),
    /**
     * searchset: The bundle is a list of resources returned as a result of a search/query interaction, operation, or message.
     */
    SearchResults: new Coding({
        display: "Search Results",
        code: "searchset",
        system: "http://hl7.org/fhir/bundle-type",
    }),
    /**
     * transaction: The bundle is a transaction - intended to be processed by a server as an atomic commit.
     */
    Transaction: new Coding({
        display: "Transaction",
        code: "transaction",
        system: "http://hl7.org/fhir/bundle-type",
    }),
    /**
     * transaction-response: The bundle is a transaction response. Because the response is a transaction response, the transaction has succeeded, and all responses are error free.
     */
    TransactionResponse: new Coding({
        display: "Transaction Response",
        code: "transaction-response",
        system: "http://hl7.org/fhir/bundle-type",
    }),
};

export { BundleTypeCodings };
//# sourceMappingURL=BundleTypeCodings.js.map
