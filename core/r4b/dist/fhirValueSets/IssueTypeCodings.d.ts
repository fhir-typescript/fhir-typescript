import { CodingArgs } from '../fhir/Coding.js';
/**
 * A code that describes the type of issue.
 */
export declare type IssueTypeCodingType = {
    /**
     * business-rule: The content/operation failed to pass some business rule and so could not proceed.
     */
    BusinessRuleViolation: CodingArgs;
    /**
     * code-invalid: The code or system could not be understood, or it was not valid in the context of a particular ValueSet.code.
     */
    InvalidCode: CodingArgs;
    /**
     * conflict: Content could not be accepted because of an edit conflict (i.e. version aware updates). (In a pure RESTful environment, this would be an HTTP 409 error, but this code may be used where the conflict is discovered further into the application architecture.).
     */
    EditVersionConflict: CodingArgs;
    /**
     * deleted: The reference pointed to content (usually a resource) that has been deleted.
     */
    Deleted: CodingArgs;
    /**
     * duplicate: An attempt was made to create a duplicate record.
     */
    Duplicate: CodingArgs;
    /**
     * exception: An unexpected internal error has occurred.
     */
    Exception: CodingArgs;
    /**
     * expired: User session expired; a login may be required.
     */
    SessionExpired: CodingArgs;
    /**
     * extension: An extension was found that was not acceptable, could not be resolved, or a modifierExtension was not recognized.
     */
    UnacceptableExtension: CodingArgs;
    /**
     * forbidden: The user does not have the rights to perform this action.
     */
    Forbidden: CodingArgs;
    /**
     * incomplete: Not all data sources typically accessed could be reached or responded in time, so the returned information might not be complete (applies to search interactions and some operations).
     */
    IncompleteResults: CodingArgs;
    /**
     * informational: A message unrelated to the processing success of the completed operation (examples of the latter include things like reminders of password expiry, system maintenance times, etc.).
     */
    InformationalNote: CodingArgs;
    /**
     * invalid: Content invalid against the specification or a profile.
     */
    InvalidContent: CodingArgs;
    /**
     * invariant: A content validation rule failed - e.g. a schematron rule.
     */
    ValidationRuleFailed: CodingArgs;
    /**
     * lock-error: A resource/record locking failure (usually in an underlying database).
     */
    LockError: CodingArgs;
    /**
     * login: The client needs to initiate an authentication process.
     */
    LoginRequired: CodingArgs;
    /**
     * multiple-matches: Multiple matching records were found when the operation required only one match.
     */
    MultipleMatches: CodingArgs;
    /**
     * no-store: The persistent store is unavailable; e.g. the database is down for maintenance or similar action, and the interaction or operation cannot be processed.
     */
    NoStoreAvailable: CodingArgs;
    /**
     * not-found: The reference provided was not found. In a pure RESTful environment, this would be an HTTP 404 error, but this code may be used where the content is not found further into the application architecture.
     */
    NotFound: CodingArgs;
    /**
     * not-supported: The interaction, operation, resource or profile is not supported.
     */
    ContentNotSupported: CodingArgs;
    /**
     * processing: Processing issues. These are expected to be final e.g. there is no point resubmitting the same content unchanged.
     */
    ProcessingFailure: CodingArgs;
    /**
     * required: A required element is missing.
     */
    RequiredElementMissing: CodingArgs;
    /**
     * security: An authentication/authorization/permissions issue of some kind.
     */
    SecurityProblem: CodingArgs;
    /**
     * structure: A structural issue in the content such as wrong namespace, unable to parse the content completely, invalid syntax, etc.
     */
    StructuralIssue: CodingArgs;
    /**
     * suppressed: Some information was not or might not have been returned due to business rules, consent or privacy rules, or access permission constraints.  This information may be accessible through alternate processes.
     */
    InformationSuppressed: CodingArgs;
    /**
     * throttled: The system is not prepared to handle this request due to load management.
     */
    Throttled: CodingArgs;
    /**
     * timeout: An internal timeout has occurred.
     */
    Timeout: CodingArgs;
    /**
     * too-costly: The operation was stopped to protect server resources; e.g. a request for a value set expansion on all of SNOMED CT.
     */
    OperationTooCostly: CodingArgs;
    /**
     * too-long: Provided content is too long (typically, this is a denial of service protection type of error).
     */
    ContentTooLong: CodingArgs;
    /**
     * transient: Transient processing issues. The system receiving the message may be able to resubmit the same content once an underlying issue is resolved.
     */
    TransientIssue: CodingArgs;
    /**
     * unknown: The user or system was not able to be authenticated (either there is no process, or the proferred token is unacceptable).
     */
    UnknownUser: CodingArgs;
    /**
     * value: An element or header value is invalid.
     */
    ElementValueInvalid: CodingArgs;
};
/**
 * A code that describes the type of issue.
 */
export declare const IssueTypeCodings: IssueTypeCodingType;
//# sourceMappingURL=IssueTypeCodings.d.ts.map