// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/type-restful-interaction|1.0.2

/**
 * Operations supported by REST at the type or instance level.
 */
export const TypeRestfulInteractionCodes = {
  /**
   * Code: create
   */
  Create: "create",
  /**
   * Code: delete
   */
  Delete: "delete",
  /**
   * Code: history-instance
   */
  HistoryInstance: "history-instance",
  /**
   * Code: history-type
   */
  HistoryType: "history-type",
  /**
   * Code: read
   */
  Read: "read",
  /**
   * Code: search-type
   */
  SearchType: "search-type",
  /**
   * Code: update
   */
  Update: "update",
  /**
   * Code: validate
   */
  Validate: "validate",
  /**
   * Code: vread
   */
  Vread: "vread",
} as const;

/**
 * Operations supported by REST at the type or instance level.
 */
export type TypeRestfulInteractionCodeType = typeof TypeRestfulInteractionCodes[keyof typeof TypeRestfulInteractionCodes];
