/**
 * A code that describes the type of issue.
 */
export declare const IssueTypeCodes: {
    /**
     * business-rule: The content/operation failed to pass some business rule, and so could not proceed.
     */
    readonly BusinessRuleViolation: "business-rule";
    /**
     * code-invalid: The code or system could not be understood, or it was not valid in the context of a particular ValueSet.code.
     */
    readonly InvalidCode: "code-invalid";
    /**
     * conflict: Content could not be accepted because of an edit conflict (i.e. version aware updates) (In a pure RESTful environment, this would be an HTTP 404 error, but this code may be used where the conflict is discovered further into the application architecture.)
     */
    readonly EditVersionConflict: "conflict";
    /**
     * duplicate: An attempt was made to create a duplicate record.
     */
    readonly Duplicate: "duplicate";
    /**
     * exception: An unexpected internal error has occurred.
     */
    readonly Exception: "exception";
    /**
     * expired: User session expired; a login may be required.
     */
    readonly SessionExpired: "expired";
    /**
     * extension: An extension was found that was not acceptable, could not be resolved, or a modifierExtension was not recognized.
     */
    readonly UnacceptableExtension: "extension";
    /**
     * forbidden: The user does not have the rights to perform this action.
     */
    readonly Forbidden: "forbidden";
    /**
     * incomplete: Not all data sources typically accessed could be reached, or responded in time, so the returned information may not be complete.
     */
    readonly IncompleteResults: "incomplete";
    /**
     * informational: A message unrelated to the processing success of the completed operation (examples of the latter include things like reminders of password expiry, system maintenance times, etc.).
     */
    readonly InformationalNote: "informational";
    /**
     * invalid: Content invalid against the specification or a profile.
     */
    readonly InvalidContent: "invalid";
    /**
     * invariant: A content validation rule failed - e.g. a schematron rule.
     */
    readonly ValidationRuleFailed: "invariant";
    /**
     * lock-error: A resource/record locking failure (usually in an underlying database).
     */
    readonly LockError: "lock-error";
    /**
     * login: The client needs to initiate an authentication process.
     */
    readonly LoginRequired: "login";
    /**
     * no-store: The persistent store is unavailable; e.g. the database is down for maintenance or similar action.
     */
    readonly NoStoreAvailable: "no-store";
    /**
     * not-found: The reference provided was not found. In a pure RESTful environment, this would be an HTTP 404 error, but this code may be used where the content is not found further into the application architecture.
     */
    readonly NotFound: "not-found";
    /**
     * not-supported: The resource or profile is not supported.
     */
    readonly ContentNotSupported: "not-supported";
    /**
     * processing: Processing issues. These are expected to be final e.g. there is no point resubmitting the same content unchanged.
     */
    readonly ProcessingFailure: "processing";
    /**
     * required: A required element is missing.
     */
    readonly RequiredElementMissing: "required";
    /**
     * security: An authentication/authorization/permissions issue of some kind.
     */
    readonly SecurityProblem: "security";
    /**
     * structure: A structural issue in the content such as wrong namespace, or unable to parse the content completely, or invalid json syntax.
     */
    readonly StructuralIssue: "structure";
    /**
     * suppressed: Some information was not or may not have been returned due to business rules, consent or privacy rules, or access permission constraints.  This information may be accessible through alternate processes.
     */
    readonly InformationSuppressed: "suppressed";
    /**
     * throttled: The system is not prepared to handle this request due to load management.
     */
    readonly Throttled: "throttled";
    /**
     * timeout: An internal timeout has occurred.
     */
    readonly Timeout: "timeout";
    /**
     * too-costly: The operation was stopped to protect server resources; e.g. a request for a value set expansion on all of SNOMED CT.
     */
    readonly OperationTooCostly: "too-costly";
    /**
     * too-long: Provided content is too long (typically, this is a denial of service protection type of error).
     */
    readonly ContentTooLong: "too-long";
    /**
     * transient: Transient processing issues. The system receiving the error may be able to resubmit the same content once an underlying issue is resolved.
     */
    readonly TransientIssue: "transient";
    /**
     * unknown: The user or system was not able to be authenticated (either there is no process, or the proferred token is unacceptable).
     */
    readonly UnknownUser: "unknown";
    /**
     * value: An element value is invalid.
     */
    readonly ElementValueInvalid: "value";
};
/**
 * A code that describes the type of issue.
 */
export declare type IssueTypeCodeType = typeof IssueTypeCodes[keyof typeof IssueTypeCodes];
//# sourceMappingURL=IssueTypeCodes.d.ts.map