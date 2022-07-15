/**
 * Operation Outcome codes used by FHIR test servers (see Implementation file translations.xml)
 */
export declare const OperationOutcomeCodes: {
    /**
     * Code: DELETE_MULTIPLE_MATCHES
     */
    readonly ErrorMultipleMatchesExistForTheConditionalDelete: "DELETE_MULTIPLE_MATCHES";
    /**
     * Code: MSG_AUTH_REQUIRED
     */
    readonly YouMustAuthenticateBeforeYouCanUseThisService: "MSG_AUTH_REQUIRED";
    /**
     * Code: MSG_BAD_FORMAT
     */
    readonly BadSyntaxQuotationPercentSQuotationMustBeAPercentSQuote: "MSG_BAD_FORMAT";
    /**
     * Code: MSG_BAD_SYNTAX
     */
    readonly BadSyntaxInPercentS: "MSG_BAD_SYNTAX";
    /**
     * Code: MSG_CANT_PARSE_CONTENT
     */
    readonly UnableToParseFeedEntryContentTypeEqualsQuotationPercentSQuotation: "MSG_CANT_PARSE_CONTENT";
    /**
     * Code: MSG_CANT_PARSE_ROOT
     */
    readonly UnableToParseFeedRootElementNameEqualsQuotationPercentSQuotation: "MSG_CANT_PARSE_ROOT";
    /**
     * Code: MSG_CREATED
     */
    readonly NewResourceCreated: "MSG_CREATED";
    /**
     * Code: MSG_DATE_FORMAT
     */
    readonly TheDateValuePercentSIsNotInTheCorrectFormatXmlDateFormatRequired: "MSG_DATE_FORMAT";
    /**
     * Code: MSG_DELETED
     */
    readonly ThisResourceHasBeenDeleted: "MSG_DELETED";
    /**
     * Code: MSG_DELETED_DONE
     */
    readonly ResourceDeleted: "MSG_DELETED_DONE";
    /**
     * Code: MSG_DELETED_ID
     */
    readonly TheResourceQuotationPercentSQuotationHasBeenDeleted: "MSG_DELETED_ID";
    /**
     * Code: MSG_DUPLICATE_ID
     */
    readonly DuplicateIdPercentSForResourceTypePercentS: "MSG_DUPLICATE_ID";
    /**
     * Code: MSG_ERROR_PARSING
     */
    readonly ErrorParsingResourceXmlPercentS: "MSG_ERROR_PARSING";
    /**
     * Code: MSG_ID_INVALID
     */
    readonly IdQuotationPercentSQuotationHasAnInvalidCharacterQuotationPercentSQuotation: "MSG_ID_INVALID";
    /**
     * Code: MSG_ID_TOO_LONG
     */
    readonly IdQuotationPercentSQuotationTooLongLengthLimit36: "MSG_ID_TOO_LONG";
    /**
     * Code: MSG_INVALID_ID
     */
    readonly IdNotAccepted: "MSG_INVALID_ID";
    /**
     * Code: MSG_JSON_OBJECT
     */
    readonly JsonSourceForAResourceShouldStartWithAnObject: "MSG_JSON_OBJECT";
    /**
     * Code: MSG_LOCAL_FAIL
     */
    readonly UnableToResolveLocalReferenceToResourcePercentS: "MSG_LOCAL_FAIL";
    /**
     * Code: MSG_NO_EXIST
     */
    readonly ResourceIdQuotationPercentSQuotationDoesNotExist: "MSG_NO_EXIST";
    /**
     * Code: MSG_NO_MATCH
     */
    readonly NoResourceFoundMatchingTheQueryQuotationPercentSQuotation: "MSG_NO_MATCH";
    /**
     * Code: MSG_NO_MODULE
     */
    readonly NoModuleCouldBeFoundToHandleTheRequestQuotationPercentSQuotation: "MSG_NO_MODULE";
    /**
     * Code: MSG_NO_SUMMARY
     */
    readonly NoSummaryForThisResource: "MSG_NO_SUMMARY";
    /**
     * Code: MSG_OP_NOT_ALLOWED
     */
    readonly OperationPercentSNotAllowedForResourcePercentSDueToLocalConfiguration: "MSG_OP_NOT_ALLOWED";
    /**
     * Code: MSG_PARAM_CHAINED
     */
    readonly UnknownChainedParameterNameQuotationPercentSQuotation: "MSG_PARAM_CHAINED";
    /**
     * Code: MSG_PARAM_INVALID
     */
    readonly ParameterQuotationPercentSQuotationContentIsInvalid: "MSG_PARAM_INVALID";
    /**
     * Code: MSG_PARAM_MODIFIER_INVALID
     */
    readonly ParameterQuotationPercentSQuotationModifierIsInvalid: "MSG_PARAM_MODIFIER_INVALID";
    /**
     * Code: MSG_PARAM_NO_REPEAT
     */
    readonly ParameterQuotationPercentSQuotationIsNotAllowedToRepeat: "MSG_PARAM_NO_REPEAT";
    /**
     * Code: MSG_PARAM_UNKNOWN
     */
    readonly ParameterQuotationPercentSQuotationNotUnderstood: "MSG_PARAM_UNKNOWN";
    /**
     * Code: MSG_RESOURCE_EXAMPLE_PROTECTED
     */
    readonly ResourcesWithIdentityQuotationExampleQuotationCannotBeDeletedForTestingTrainingPurposes: "MSG_RESOURCE_EXAMPLE_PROTECTED";
    /**
     * Code: MSG_RESOURCE_ID_FAIL
     */
    readonly UnableToAllocateResourceId: "MSG_RESOURCE_ID_FAIL";
    /**
     * Code: MSG_RESOURCE_ID_MISMATCH
     */
    readonly ResourceIdMismatch: "MSG_RESOURCE_ID_MISMATCH";
    /**
     * Code: MSG_RESOURCE_ID_MISSING
     */
    readonly ResourceIdMissing: "MSG_RESOURCE_ID_MISSING";
    /**
     * Code: MSG_RESOURCE_NOT_ALLOWED
     */
    readonly NotAllowedToSubmitAResourceForThisOperation: "MSG_RESOURCE_NOT_ALLOWED";
    /**
     * Code: MSG_RESOURCE_REQUIRED
     */
    readonly AResourceIsRequired: "MSG_RESOURCE_REQUIRED";
    /**
     * Code: MSG_RESOURCE_TYPE_MISMATCH
     */
    readonly ResourceTypeMismatch: "MSG_RESOURCE_TYPE_MISMATCH";
    /**
     * Code: MSG_SORT_UNKNOWN
     */
    readonly UnknownSortParameterNameQuotationPercentSQuotation: "MSG_SORT_UNKNOWN";
    /**
     * Code: MSG_TRANSACTION_DUPLICATE_ID
     */
    readonly DuplicateIdentifierInTransactionPercentS: "MSG_TRANSACTION_DUPLICATE_ID";
    /**
     * Code: MSG_TRANSACTION_MISSING_ID
     */
    readonly MissingIdentifierInTransactionAnEntryIdMustBeProvided: "MSG_TRANSACTION_MISSING_ID";
    /**
     * Code: MSG_UNHANDLED_NODE_TYPE
     */
    readonly UnhandledXmlNodeTypeQuotationPercentSQuotation: "MSG_UNHANDLED_NODE_TYPE";
    /**
     * Code: MSG_UNKNOWN_CONTENT
     */
    readonly UnknownContentPercentSAtPercentS: "MSG_UNKNOWN_CONTENT";
    /**
     * Code: MSG_UNKNOWN_OPERATION
     */
    readonly UnknownFHIRHttpOperation: "MSG_UNKNOWN_OPERATION";
    /**
     * Code: MSG_UNKNOWN_TYPE
     */
    readonly ResourceTypeQuotationPercentSQuotationNotRecognised: "MSG_UNKNOWN_TYPE";
    /**
     * Code: MSG_UPDATED
     */
    readonly ExistingResourceUpdated: "MSG_UPDATED";
    /**
     * Code: MSG_VERSION_AWARE
     */
    readonly VersionAwareUpdatesAreRequiredForThisResource: "MSG_VERSION_AWARE";
    /**
     * Code: MSG_VERSION_AWARE_CONFLICT
     */
    readonly UpdateConflictServerCurrentVersionEqualsQuotationPercentSQuotationClientVersionReferencedEqualsQuotationPercentSQuotation: "MSG_VERSION_AWARE_CONFLICT";
    /**
     * Code: MSG_VERSION_AWARE_URL
     */
    readonly VersionSpecificURLNotRecognised: "MSG_VERSION_AWARE_URL";
    /**
     * Code: MSG_WRONG_NS
     */
    readonly ThisDoesNotAppearToBeAFHIRElementOrResourceWrongNamespaceQuotationPercentSQuotation: "MSG_WRONG_NS";
    /**
     * Code: SEARCH_MULTIPLE
     */
    readonly ErrorMultipleMatchesExistForPercentSSearchParametersQuotationPercentSQuotation: "SEARCH_MULTIPLE";
    /**
     * Code: SEARCH_NONE
     */
    readonly ErrorNoProcessableSearchFoundForPercentSSearchParametersQuotationPercentSQuotation: "SEARCH_NONE";
    /**
     * Code: UPDATE_MULTIPLE_MATCHES
     */
    readonly ErrorMultipleMatchesExistForTheConditionalUpdate: "UPDATE_MULTIPLE_MATCHES";
};
/**
 * Operation Outcome codes used by FHIR test servers (see Implementation file translations.xml)
 */
export declare type OperationOutcomeCodeType = typeof OperationOutcomeCodes[keyof typeof OperationOutcomeCodes];
//# sourceMappingURL=OperationOutcomeCodes.d.ts.map