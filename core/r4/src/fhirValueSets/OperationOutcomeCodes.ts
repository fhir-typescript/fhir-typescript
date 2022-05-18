// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/operation-outcome|4.0.1

/**
 * Operation Outcome codes used by FHIR test servers (see Implementation file translations.xml)
 */
export const OperationOutcomeCodes = {
  /**
   * Code: DELETE_MULTIPLE_MATCHES
   */
  DELETEMULTIPLEMATCHES: "DELETE_MULTIPLE_MATCHES",
  /**
   * Code: MSG_AUTH_REQUIRED
   */
  MSGAUTHREQUIRED: "MSG_AUTH_REQUIRED",
  /**
   * Code: MSG_BAD_FORMAT
   */
  MSGBADFORMAT: "MSG_BAD_FORMAT",
  /**
   * Code: MSG_BAD_SYNTAX
   */
  MSGBADSYNTAX: "MSG_BAD_SYNTAX",
  /**
   * Code: MSG_CANT_PARSE_CONTENT
   */
  MSGCANTPARSECONTENT: "MSG_CANT_PARSE_CONTENT",
  /**
   * Code: MSG_CANT_PARSE_ROOT
   */
  MSGCANTPARSEROOT: "MSG_CANT_PARSE_ROOT",
  /**
   * Code: MSG_CREATED
   */
  MSGCREATED: "MSG_CREATED",
  /**
   * Code: MSG_DATE_FORMAT
   */
  MSGDATEFORMAT: "MSG_DATE_FORMAT",
  /**
   * Code: MSG_DELETED
   */
  MSGDELETED: "MSG_DELETED",
  /**
   * Code: MSG_DELETED_DONE
   */
  MSGDELETEDDONE: "MSG_DELETED_DONE",
  /**
   * Code: MSG_DELETED_ID
   */
  MSGDELETEDID: "MSG_DELETED_ID",
  /**
   * Code: MSG_DUPLICATE_ID
   */
  MSGDUPLICATEID: "MSG_DUPLICATE_ID",
  /**
   * Code: MSG_ERROR_PARSING
   */
  MSGERRORPARSING: "MSG_ERROR_PARSING",
  /**
   * Code: MSG_ID_INVALID
   */
  MSGIDINVALID: "MSG_ID_INVALID",
  /**
   * Code: MSG_ID_TOO_LONG
   */
  MSGIDTOOLONG: "MSG_ID_TOO_LONG",
  /**
   * Code: MSG_INVALID_ID
   */
  MSGINVALIDID: "MSG_INVALID_ID",
  /**
   * Code: MSG_JSON_OBJECT
   */
  MSGJSONOBJECT: "MSG_JSON_OBJECT",
  /**
   * Code: MSG_LOCAL_FAIL
   */
  MSGLOCALFAIL: "MSG_LOCAL_FAIL",
  /**
   * Code: MSG_NO_EXIST
   */
  MSGNOEXIST: "MSG_NO_EXIST",
  /**
   * Code: MSG_NO_MATCH
   */
  MSGNOMATCH: "MSG_NO_MATCH",
  /**
   * Code: MSG_NO_MODULE
   */
  MSGNOMODULE: "MSG_NO_MODULE",
  /**
   * Code: MSG_NO_SUMMARY
   */
  MSGNOSUMMARY: "MSG_NO_SUMMARY",
  /**
   * Code: MSG_OP_NOT_ALLOWED
   */
  MSGOPNOTALLOWED: "MSG_OP_NOT_ALLOWED",
  /**
   * Code: MSG_PARAM_CHAINED
   */
  MSGPARAMCHAINED: "MSG_PARAM_CHAINED",
  /**
   * Code: MSG_PARAM_INVALID
   */
  MSGPARAMINVALID: "MSG_PARAM_INVALID",
  /**
   * Code: MSG_PARAM_MODIFIER_INVALID
   */
  MSGPARAMMODIFIERINVALID: "MSG_PARAM_MODIFIER_INVALID",
  /**
   * Code: MSG_PARAM_NO_REPEAT
   */
  MSGPARAMNOREPEAT: "MSG_PARAM_NO_REPEAT",
  /**
   * Code: MSG_PARAM_UNKNOWN
   */
  MSGPARAMUNKNOWN: "MSG_PARAM_UNKNOWN",
  /**
   * Code: MSG_RESOURCE_EXAMPLE_PROTECTED
   */
  MSGRESOURCEEXAMPLEPROTECTED: "MSG_RESOURCE_EXAMPLE_PROTECTED",
  /**
   * Code: MSG_RESOURCE_ID_FAIL
   */
  MSGRESOURCEIDFAIL: "MSG_RESOURCE_ID_FAIL",
  /**
   * Code: MSG_RESOURCE_ID_MISMATCH
   */
  MSGRESOURCEIDMISMATCH: "MSG_RESOURCE_ID_MISMATCH",
  /**
   * Code: MSG_RESOURCE_ID_MISSING
   */
  MSGRESOURCEIDMISSING: "MSG_RESOURCE_ID_MISSING",
  /**
   * Code: MSG_RESOURCE_NOT_ALLOWED
   */
  MSGRESOURCENOTALLOWED: "MSG_RESOURCE_NOT_ALLOWED",
  /**
   * Code: MSG_RESOURCE_REQUIRED
   */
  MSGRESOURCEREQUIRED: "MSG_RESOURCE_REQUIRED",
  /**
   * Code: MSG_RESOURCE_TYPE_MISMATCH
   */
  MSGRESOURCETYPEMISMATCH: "MSG_RESOURCE_TYPE_MISMATCH",
  /**
   * Code: MSG_SORT_UNKNOWN
   */
  MSGSORTUNKNOWN: "MSG_SORT_UNKNOWN",
  /**
   * Code: MSG_TRANSACTION_DUPLICATE_ID
   */
  MSGTRANSACTIONDUPLICATEID: "MSG_TRANSACTION_DUPLICATE_ID",
  /**
   * Code: MSG_TRANSACTION_MISSING_ID
   */
  MSGTRANSACTIONMISSINGID: "MSG_TRANSACTION_MISSING_ID",
  /**
   * Code: MSG_UNHANDLED_NODE_TYPE
   */
  MSGUNHANDLEDNODETYPE: "MSG_UNHANDLED_NODE_TYPE",
  /**
   * Code: MSG_UNKNOWN_CONTENT
   */
  MSGUNKNOWNCONTENT: "MSG_UNKNOWN_CONTENT",
  /**
   * Code: MSG_UNKNOWN_OPERATION
   */
  MSGUNKNOWNOPERATION: "MSG_UNKNOWN_OPERATION",
  /**
   * Code: MSG_UNKNOWN_TYPE
   */
  MSGUNKNOWNTYPE: "MSG_UNKNOWN_TYPE",
  /**
   * Code: MSG_UPDATED
   */
  MSGUPDATED: "MSG_UPDATED",
  /**
   * Code: MSG_VERSION_AWARE
   */
  MSGVERSIONAWARE: "MSG_VERSION_AWARE",
  /**
   * Code: MSG_VERSION_AWARE_CONFLICT
   */
  MSGVERSIONAWARECONFLICT: "MSG_VERSION_AWARE_CONFLICT",
  /**
   * Code: MSG_VERSION_AWARE_URL
   */
  MSGVERSIONAWAREURL: "MSG_VERSION_AWARE_URL",
  /**
   * Code: MSG_WRONG_NS
   */
  MSGWRONGNS: "MSG_WRONG_NS",
  /**
   * Code: SEARCH_MULTIPLE
   */
  SEARCHMULTIPLE: "SEARCH_MULTIPLE",
  /**
   * Code: SEARCH_NONE
   */
  SEARCHNONE: "SEARCH_NONE",
  /**
   * Code: UPDATE_MULTIPLE_MATCHES
   */
  UPDATEMULTIPLEMATCHES: "UPDATE_MULTIPLE_MATCHES",
} as const;

/**
 * Operation Outcome codes used by FHIR test servers (see Implementation file translations.xml)
 */
export type OperationOutcomeCodeType = typeof OperationOutcomeCodes[keyof typeof OperationOutcomeCodes];
