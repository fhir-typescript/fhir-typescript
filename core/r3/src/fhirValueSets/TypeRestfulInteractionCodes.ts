// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/type-restful-interaction|3.0.2

/**
 * Operations supported by REST at the type or instance level.
 */
export const TypeRestfulInteractionCodes = {
  /**
   * create: Create a new resource with a server assigned id.
   */
  Create: "create",
  /**
   * delete: Delete a resource.
   */
  Delete: "delete",
  /**
   * history-instance: Retrieve the change history for a particular resource.
   */
  HistoryInstance: "history-instance",
  /**
   * history-type: Retrieve the change history for all resources of a particular type.
   */
  HistoryType: "history-type",
  /**
   * patch: Update an existing resource by posting a set of changes to it.
   */
  Patch: "patch",
  /**
   * read: Read the current state of the resource.
   */
  Read: "read",
  /**
   * search-type: Search all resources of the specified type based on some filter criteria.
   */
  SearchType: "search-type",
  /**
   * update: Update an existing resource by its id (or create it if it is new).
   */
  Update: "update",
  /**
   * vread: Read the state of a specific version of the resource.
   */
  Vread: "vread",
} as const;

/**
 * Operations supported by REST at the type or instance level.
 */
export type TypeRestfulInteractionCodeType = typeof TypeRestfulInteractionCodes[keyof typeof TypeRestfulInteractionCodes];
