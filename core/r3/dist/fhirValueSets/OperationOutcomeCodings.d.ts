import { CodingArgs } from '../fhir/Coding.js';
/**
 * Operation Outcome codes used by FHIR test servers (see Implementation file translations.xml)
 */
export declare type OperationOutcomeCodingType = {
    /**
     * Code: DELETE_MULTIPLE_MATCHES
     */
    ErrorMultipleMatchesExistForTheConditionalDelete: CodingArgs;
    /**
     * Code: MSG_AUTH_REQUIRED
     */
    YouMustAuthenticateBeforeYouCanUseThisService: CodingArgs;
    /**
     * Code: MSG_BAD_FORMAT
     */
    BadSyntaxQuotationPercentSQuotationMustBeAPercentSQuote: CodingArgs;
    /**
     * Code: MSG_BAD_SYNTAX
     */
    BadSyntaxInPercentS: CodingArgs;
    /**
     * Code: MSG_CANT_PARSE_CONTENT
     */
    UnableToParseFeedEntryContentTypeEqualsQuotationPercentSQuotation: CodingArgs;
    /**
     * Code: MSG_CANT_PARSE_ROOT
     */
    UnableToParseFeedRootElementNameEqualsQuotationPercentSQuotation: CodingArgs;
    /**
     * Code: MSG_CREATED
     */
    NewResourceCreated: CodingArgs;
    /**
     * Code: MSG_DATE_FORMAT
     */
    TheDateValuePercentSIsNotInTheCorrectFormatXmlDateFormatRequired: CodingArgs;
    /**
     * Code: MSG_DELETED
     */
    ThisResourceHasBeenDeleted: CodingArgs;
    /**
     * Code: MSG_DELETED_DONE
     */
    ResourceDeleted: CodingArgs;
    /**
     * Code: MSG_DELETED_ID
     */
    TheResourceQuotationPercentSQuotationHasBeenDeleted: CodingArgs;
    /**
     * Code: MSG_DUPLICATE_ID
     */
    DuplicateIdPercentSForResourceTypePercentS: CodingArgs;
    /**
     * Code: MSG_ERROR_PARSING
     */
    ErrorParsingResourceXmlPercentS: CodingArgs;
    /**
     * Code: MSG_ID_INVALID
     */
    IdQuotationPercentSQuotationHasAnInvalidCharacterQuotationPercentSQuotation: CodingArgs;
    /**
     * Code: MSG_ID_TOO_LONG
     */
    IdQuotationPercentSQuotationTooLongLengthLimit36: CodingArgs;
    /**
     * Code: MSG_INVALID_ID
     */
    IdNotAccepted: CodingArgs;
    /**
     * Code: MSG_JSON_OBJECT
     */
    JsonSourceForAResourceShouldStartWithAnObject: CodingArgs;
    /**
     * Code: MSG_LOCAL_FAIL
     */
    UnableToResolveLocalReferenceToResourcePercentS: CodingArgs;
    /**
     * Code: MSG_NO_EXIST
     */
    ResourceIdQuotationPercentSQuotationDoesNotExist: CodingArgs;
    /**
     * Code: MSG_NO_MATCH
     */
    NoResourceFoundMatchingTheQueryQuotationPercentSQuotation: CodingArgs;
    /**
     * Code: MSG_NO_MODULE
     */
    NoModuleCouldBeFoundToHandleTheRequestQuotationPercentSQuotation: CodingArgs;
    /**
     * Code: MSG_NO_SUMMARY
     */
    NoSummaryForThisResource: CodingArgs;
    /**
     * Code: MSG_OP_NOT_ALLOWED
     */
    OperationPercentSNotAllowedForResourcePercentSDueToLocalConfiguration: CodingArgs;
    /**
     * Code: MSG_PARAM_CHAINED
     */
    UnknownChainedParameterNameQuotationPercentSQuotation: CodingArgs;
    /**
     * Code: MSG_PARAM_INVALID
     */
    ParameterQuotationPercentSQuotationContentIsInvalid: CodingArgs;
    /**
     * Code: MSG_PARAM_MODIFIER_INVALID
     */
    ParameterQuotationPercentSQuotationModifierIsInvalid: CodingArgs;
    /**
     * Code: MSG_PARAM_NO_REPEAT
     */
    ParameterQuotationPercentSQuotationIsNotAllowedToRepeat: CodingArgs;
    /**
     * Code: MSG_PARAM_UNKNOWN
     */
    ParameterQuotationPercentSQuotationNotUnderstood: CodingArgs;
    /**
     * Code: MSG_RESOURCE_EXAMPLE_PROTECTED
     */
    ResourcesWithIdentityQuotationExampleQuotationCannotBeDeletedForTestingTrainingPurposes: CodingArgs;
    /**
     * Code: MSG_RESOURCE_ID_FAIL
     */
    UnableToAllocateResourceId: CodingArgs;
    /**
     * Code: MSG_RESOURCE_ID_MISMATCH
     */
    ResourceIdMismatch: CodingArgs;
    /**
     * Code: MSG_RESOURCE_ID_MISSING
     */
    ResourceIdMissing: CodingArgs;
    /**
     * Code: MSG_RESOURCE_NOT_ALLOWED
     */
    NotAllowedToSubmitAResourceForThisOperation: CodingArgs;
    /**
     * Code: MSG_RESOURCE_REQUIRED
     */
    AResourceIsRequired: CodingArgs;
    /**
     * Code: MSG_RESOURCE_TYPE_MISMATCH
     */
    ResourceTypeMismatch: CodingArgs;
    /**
     * Code: MSG_SORT_UNKNOWN
     */
    UnknownSortParameterNameQuotationPercentSQuotation: CodingArgs;
    /**
     * Code: MSG_TRANSACTION_DUPLICATE_ID
     */
    DuplicateIdentifierInTransactionPercentS: CodingArgs;
    /**
     * Code: MSG_TRANSACTION_MISSING_ID
     */
    MissingIdentifierInTransactionAnEntryIdMustBeProvided: CodingArgs;
    /**
     * Code: MSG_UNHANDLED_NODE_TYPE
     */
    UnhandledXmlNodeTypeQuotationPercentSQuotation: CodingArgs;
    /**
     * Code: MSG_UNKNOWN_CONTENT
     */
    UnknownContentPercentSAtPercentS: CodingArgs;
    /**
     * Code: MSG_UNKNOWN_OPERATION
     */
    UnknownFHIRHttpOperation: CodingArgs;
    /**
     * Code: MSG_UNKNOWN_TYPE
     */
    ResourceTypeQuotationPercentSQuotationNotRecognised: CodingArgs;
    /**
     * Code: MSG_UPDATED
     */
    ExistingResourceUpdated: CodingArgs;
    /**
     * Code: MSG_VERSION_AWARE
     */
    VersionAwareUpdatesAreRequiredForThisResource: CodingArgs;
    /**
     * Code: MSG_VERSION_AWARE_CONFLICT
     */
    UpdateConflictServerCurrentVersionEqualsQuotationPercentSQuotationClientVersionReferencedEqualsQuotationPercentSQuotation: CodingArgs;
    /**
     * Code: MSG_VERSION_AWARE_URL
     */
    VersionSpecificURLNotRecognised: CodingArgs;
    /**
     * Code: MSG_WRONG_NS
     */
    ThisDoesNotAppearToBeAFHIRElementOrResourceWrongNamespaceQuotationPercentSQuotation: CodingArgs;
    /**
     * Code: SEARCH_MULTIPLE
     */
    ErrorMultipleMatchesExistForPercentSSearchParametersQuotationPercentSQuotation: CodingArgs;
    /**
     * Code: SEARCH_NONE
     */
    ErrorNoProcessableSearchFoundForPercentSSearchParametersQuotationPercentSQuotation: CodingArgs;
    /**
     * Code: UPDATE_MULTIPLE_MATCHES
     */
    ErrorMultipleMatchesExistForTheConditionalUpdate: CodingArgs;
};
/**
 * Operation Outcome codes used by FHIR test servers (see Implementation file translations.xml)
 */
export declare const OperationOutcomeCodings: OperationOutcomeCodingType;
//# sourceMappingURL=OperationOutcomeCodings.d.ts.map