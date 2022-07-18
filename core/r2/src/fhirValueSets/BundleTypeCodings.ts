// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/bundle-type|1.0.2

import { CodingArgs } from '../fhir/Coding.js'

/**
 * Indicates the purpose of a bundle - how it was intended to be used.
 */
export type BundleTypeCodingType = {
  /**
   * batch: The bundle is a transaction - intended to be processed by a server as a group of actions.
   */
  Batch: CodingArgs;
  /**
   * batch-response: The bundle is a batch response. Note that as a batch, some responses may indicate failure and others success.
   */
  BatchResponse: CodingArgs;
  /**
   * collection: The bundle is a set of resources collected into a single document for ease of distribution.
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
   * transaction-response: The bundle is a transaction response. Because the response is a transaction response, the transactionhas succeeded, and all responses are error free.
   */
  TransactionResponse: CodingArgs;
}

/**
 * Indicates the purpose of a bundle - how it was intended to be used.
 */
export const BundleTypeCodings:BundleTypeCodingType = {
  /**
   * batch: The bundle is a transaction - intended to be processed by a server as a group of actions.
   */
  Batch: {
    display: "Batch",
    code: "batch",
    system: "http://hl7.org/fhir/bundle-type",
  },
  /**
   * batch-response: The bundle is a batch response. Note that as a batch, some responses may indicate failure and others success.
   */
  BatchResponse: {
    display: "Batch Response",
    code: "batch-response",
    system: "http://hl7.org/fhir/bundle-type",
  },
  /**
   * collection: The bundle is a set of resources collected into a single document for ease of distribution.
   */
  Collection: {
    display: "Collection",
    code: "collection",
    system: "http://hl7.org/fhir/bundle-type",
  },
  /**
   * document: The bundle is a document. The first resource is a Composition.
   */
  Document: {
    display: "Document",
    code: "document",
    system: "http://hl7.org/fhir/bundle-type",
  },
  /**
   * history: The bundle is a list of resources from a history interaction on a server.
   */
  HistoryList: {
    display: "History List",
    code: "history",
    system: "http://hl7.org/fhir/bundle-type",
  },
  /**
   * message: The bundle is a message. The first resource is a MessageHeader.
   */
  Message: {
    display: "Message",
    code: "message",
    system: "http://hl7.org/fhir/bundle-type",
  },
  /**
   * searchset: The bundle is a list of resources returned as a result of a search/query interaction, operation, or message.
   */
  SearchResults: {
    display: "Search Results",
    code: "searchset",
    system: "http://hl7.org/fhir/bundle-type",
  },
  /**
   * transaction: The bundle is a transaction - intended to be processed by a server as an atomic commit.
   */
  Transaction: {
    display: "Transaction",
    code: "transaction",
    system: "http://hl7.org/fhir/bundle-type",
  },
  /**
   * transaction-response: The bundle is a transaction response. Because the response is a transaction response, the transactionhas succeeded, and all responses are error free.
   */
  TransactionResponse: {
    display: "Transaction Response",
    code: "transaction-response",
    system: "http://hl7.org/fhir/bundle-type",
  },
} as const;