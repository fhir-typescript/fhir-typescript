// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/type-restful-interaction|4.3.0

import { CodingArgs } from '../fhir/Coding.js'

/**
 * Operations supported by REST at the type or instance level.
 */
export type TypeRestfulInteractionCodingType = {
  /**
   * create: Create a new resource with a server assigned id.
   */
  Create: CodingArgs;
  /**
   * delete: Delete a resource.
   */
  Delete: CodingArgs;
  /**
   * history-instance: Retrieve the change history for a particular resource.
   */
  HistoryInstance: CodingArgs;
  /**
   * history-type: Retrieve the change history for all resources of a particular type.
   */
  HistoryType: CodingArgs;
  /**
   * patch: Update an existing resource by posting a set of changes to it.
   */
  Patch: CodingArgs;
  /**
   * read: Read the current state of the resource.
   */
  Read: CodingArgs;
  /**
   * search-type: Search all resources of the specified type based on some filter criteria.
   */
  SearchType: CodingArgs;
  /**
   * update: Update an existing resource by its id (or create it if it is new).
   */
  Update: CodingArgs;
  /**
   * vread: Read the state of a specific version of the resource.
   */
  Vread: CodingArgs;
}

/**
 * Operations supported by REST at the type or instance level.
 */
export const TypeRestfulInteractionCodings:TypeRestfulInteractionCodingType = {
  /**
   * create: Create a new resource with a server assigned id.
   */
  Create: {
    display: "create",
    code: "create",
    system: "http://hl7.org/fhir/restful-interaction",
  },
  /**
   * delete: Delete a resource.
   */
  Delete: {
    display: "delete",
    code: "delete",
    system: "http://hl7.org/fhir/restful-interaction",
  },
  /**
   * history-instance: Retrieve the change history for a particular resource.
   */
  HistoryInstance: {
    display: "history-instance",
    code: "history-instance",
    system: "http://hl7.org/fhir/restful-interaction",
  },
  /**
   * history-type: Retrieve the change history for all resources of a particular type.
   */
  HistoryType: {
    display: "history-type",
    code: "history-type",
    system: "http://hl7.org/fhir/restful-interaction",
  },
  /**
   * patch: Update an existing resource by posting a set of changes to it.
   */
  Patch: {
    display: "patch",
    code: "patch",
    system: "http://hl7.org/fhir/restful-interaction",
  },
  /**
   * read: Read the current state of the resource.
   */
  Read: {
    display: "read",
    code: "read",
    system: "http://hl7.org/fhir/restful-interaction",
  },
  /**
   * search-type: Search all resources of the specified type based on some filter criteria.
   */
  SearchType: {
    display: "search-type",
    code: "search-type",
    system: "http://hl7.org/fhir/restful-interaction",
  },
  /**
   * update: Update an existing resource by its id (or create it if it is new).
   */
  Update: {
    display: "update",
    code: "update",
    system: "http://hl7.org/fhir/restful-interaction",
  },
  /**
   * vread: Read the state of a specific version of the resource.
   */
  Vread: {
    display: "vread",
    code: "vread",
    system: "http://hl7.org/fhir/restful-interaction",
  },
} as const;