// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/http-operations|4.3.0

import { CodingArgs } from '../fhir/Coding.js'

/**
 * The allowable request method or HTTP operation codes.
 */
export type HttpOperationsCodingType = {
  /**
   * delete: HTTP DELETE operation.
   */
  DELETE: CodingArgs;
  /**
   * get: HTTP GET operation.
   */
  GET: CodingArgs;
  /**
   * head: HTTP HEAD operation.
   */
  HEAD: CodingArgs;
  /**
   * options: HTTP OPTIONS operation.
   */
  OPTIONS: CodingArgs;
  /**
   * patch: HTTP PATCH operation.
   */
  PATCH: CodingArgs;
  /**
   * post: HTTP POST operation.
   */
  POST: CodingArgs;
  /**
   * put: HTTP PUT operation.
   */
  PUT: CodingArgs;
}

/**
 * The allowable request method or HTTP operation codes.
 */
export const HttpOperationsCodings:HttpOperationsCodingType = {
  /**
   * delete: HTTP DELETE operation.
   */
  DELETE: {
    display: "DELETE",
    code: "delete",
    system: "http://hl7.org/fhir/http-operations",
  },
  /**
   * get: HTTP GET operation.
   */
  GET: {
    display: "GET",
    code: "get",
    system: "http://hl7.org/fhir/http-operations",
  },
  /**
   * head: HTTP HEAD operation.
   */
  HEAD: {
    display: "HEAD",
    code: "head",
    system: "http://hl7.org/fhir/http-operations",
  },
  /**
   * options: HTTP OPTIONS operation.
   */
  OPTIONS: {
    display: "OPTIONS",
    code: "options",
    system: "http://hl7.org/fhir/http-operations",
  },
  /**
   * patch: HTTP PATCH operation.
   */
  PATCH: {
    display: "PATCH",
    code: "patch",
    system: "http://hl7.org/fhir/http-operations",
  },
  /**
   * post: HTTP POST operation.
   */
  POST: {
    display: "POST",
    code: "post",
    system: "http://hl7.org/fhir/http-operations",
  },
  /**
   * put: HTTP PUT operation.
   */
  PUT: {
    display: "PUT",
    code: "put",
    system: "http://hl7.org/fhir/http-operations",
  },
} as const;
