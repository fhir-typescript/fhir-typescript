// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/type-restful-interaction|1.0.2

import { CodingArgs } from '../fhir/Coding.js'

/**
 * Operations supported by REST at the type or instance level.
 */
export type TypeRestfulInteractionCodingType = {
  /**
   * Code: create
   */
  Create: CodingArgs;
  /**
   * Code: delete
   */
  Delete: CodingArgs;
  /**
   * Code: history-instance
   */
  HistoryInstance: CodingArgs;
  /**
   * Code: history-type
   */
  HistoryType: CodingArgs;
  /**
   * Code: read
   */
  Read: CodingArgs;
  /**
   * Code: search-type
   */
  SearchType: CodingArgs;
  /**
   * Code: update
   */
  Update: CodingArgs;
  /**
   * Code: validate
   */
  Validate: CodingArgs;
  /**
   * Code: vread
   */
  Vread: CodingArgs;
}

/**
 * Operations supported by REST at the type or instance level.
 */
export const TypeRestfulInteractionCodings:TypeRestfulInteractionCodingType = {
  /**
   * Code: create
   */
  Create: {
    code: "create",
    system: "http://hl7.org/fhir/restful-interaction",
  },
  /**
   * Code: delete
   */
  Delete: {
    code: "delete",
    system: "http://hl7.org/fhir/restful-interaction",
  },
  /**
   * Code: history-instance
   */
  HistoryInstance: {
    code: "history-instance",
    system: "http://hl7.org/fhir/restful-interaction",
  },
  /**
   * Code: history-type
   */
  HistoryType: {
    code: "history-type",
    system: "http://hl7.org/fhir/restful-interaction",
  },
  /**
   * Code: read
   */
  Read: {
    code: "read",
    system: "http://hl7.org/fhir/restful-interaction",
  },
  /**
   * Code: search-type
   */
  SearchType: {
    code: "search-type",
    system: "http://hl7.org/fhir/restful-interaction",
  },
  /**
   * Code: update
   */
  Update: {
    code: "update",
    system: "http://hl7.org/fhir/restful-interaction",
  },
  /**
   * Code: validate
   */
  Validate: {
    code: "validate",
    system: "http://hl7.org/fhir/restful-interaction",
  },
  /**
   * Code: vread
   */
  Vread: {
    code: "vread",
    system: "http://hl7.org/fhir/restful-interaction",
  },
} as const;
