// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/issue-type|3.0.2
/**
 * A code that describes the type of issue.
 */
export const IssueTypeCodings = {
    /**
     * business-rule: The content/operation failed to pass some business rule, and so could not proceed.
     */
    BusinessRuleViolation: {
        display: "Business Rule Violation",
        code: "business-rule",
        system: "http://hl7.org/fhir/issue-type",
    },
    /**
     * code-invalid: The code or system could not be understood, or it was not valid in the context of a particular ValueSet.code.
     */
    InvalidCode: {
        display: "Invalid Code",
        code: "code-invalid",
        system: "http://hl7.org/fhir/issue-type",
    },
    /**
     * conflict: Content could not be accepted because of an edit conflict (i.e. version aware updates) (In a pure RESTful environment, this would be an HTTP 404 error, but this code may be used where the conflict is discovered further into the application architecture.)
     */
    EditVersionConflict: {
        display: "Edit Version Conflict",
        code: "conflict",
        system: "http://hl7.org/fhir/issue-type",
    },
    /**
     * duplicate: An attempt was made to create a duplicate record.
     */
    Duplicate: {
        display: "Duplicate",
        code: "duplicate",
        system: "http://hl7.org/fhir/issue-type",
    },
    /**
     * exception: An unexpected internal error has occurred.
     */
    Exception: {
        display: "Exception",
        code: "exception",
        system: "http://hl7.org/fhir/issue-type",
    },
    /**
     * expired: User session expired; a login may be required.
     */
    SessionExpired: {
        display: "Session Expired",
        code: "expired",
        system: "http://hl7.org/fhir/issue-type",
    },
    /**
     * extension: An extension was found that was not acceptable, could not be resolved, or a modifierExtension was not recognized.
     */
    UnacceptableExtension: {
        display: "Unacceptable Extension",
        code: "extension",
        system: "http://hl7.org/fhir/issue-type",
    },
    /**
     * forbidden: The user does not have the rights to perform this action.
     */
    Forbidden: {
        display: "Forbidden",
        code: "forbidden",
        system: "http://hl7.org/fhir/issue-type",
    },
    /**
     * incomplete: Not all data sources typically accessed could be reached, or responded in time, so the returned information may not be complete.
     */
    IncompleteResults: {
        display: "Incomplete Results",
        code: "incomplete",
        system: "http://hl7.org/fhir/issue-type",
    },
    /**
     * informational: A message unrelated to the processing success of the completed operation (examples of the latter include things like reminders of password expiry, system maintenance times, etc.).
     */
    InformationalNote: {
        display: "Informational Note",
        code: "informational",
        system: "http://hl7.org/fhir/issue-type",
    },
    /**
     * invalid: Content invalid against the specification or a profile.
     */
    InvalidContent: {
        display: "Invalid Content",
        code: "invalid",
        system: "http://hl7.org/fhir/issue-type",
    },
    /**
     * invariant: A content validation rule failed - e.g. a schematron rule.
     */
    ValidationRuleFailed: {
        display: "Validation rule failed",
        code: "invariant",
        system: "http://hl7.org/fhir/issue-type",
    },
    /**
     * lock-error: A resource/record locking failure (usually in an underlying database).
     */
    LockError: {
        display: "Lock Error",
        code: "lock-error",
        system: "http://hl7.org/fhir/issue-type",
    },
    /**
     * login: The client needs to initiate an authentication process.
     */
    LoginRequired: {
        display: "Login Required",
        code: "login",
        system: "http://hl7.org/fhir/issue-type",
    },
    /**
     * no-store: The persistent store is unavailable; e.g. the database is down for maintenance or similar action.
     */
    NoStoreAvailable: {
        display: "No Store Available",
        code: "no-store",
        system: "http://hl7.org/fhir/issue-type",
    },
    /**
     * not-found: The reference provided was not found. In a pure RESTful environment, this would be an HTTP 404 error, but this code may be used where the content is not found further into the application architecture.
     */
    NotFound: {
        display: "Not Found",
        code: "not-found",
        system: "http://hl7.org/fhir/issue-type",
    },
    /**
     * not-supported: The resource or profile is not supported.
     */
    ContentNotSupported: {
        display: "Content not supported",
        code: "not-supported",
        system: "http://hl7.org/fhir/issue-type",
    },
    /**
     * processing: Processing issues. These are expected to be final e.g. there is no point resubmitting the same content unchanged.
     */
    ProcessingFailure: {
        display: "Processing Failure",
        code: "processing",
        system: "http://hl7.org/fhir/issue-type",
    },
    /**
     * required: A required element is missing.
     */
    RequiredElementMissing: {
        display: "Required element missing",
        code: "required",
        system: "http://hl7.org/fhir/issue-type",
    },
    /**
     * security: An authentication/authorization/permissions issue of some kind.
     */
    SecurityProblem: {
        display: "Security Problem",
        code: "security",
        system: "http://hl7.org/fhir/issue-type",
    },
    /**
     * structure: A structural issue in the content such as wrong namespace, or unable to parse the content completely, or invalid json syntax.
     */
    StructuralIssue: {
        display: "Structural Issue",
        code: "structure",
        system: "http://hl7.org/fhir/issue-type",
    },
    /**
     * suppressed: Some information was not or may not have been returned due to business rules, consent or privacy rules, or access permission constraints.  This information may be accessible through alternate processes.
     */
    InformationSuppressed: {
        display: "Information  Suppressed",
        code: "suppressed",
        system: "http://hl7.org/fhir/issue-type",
    },
    /**
     * throttled: The system is not prepared to handle this request due to load management.
     */
    Throttled: {
        display: "Throttled",
        code: "throttled",
        system: "http://hl7.org/fhir/issue-type",
    },
    /**
     * timeout: An internal timeout has occurred.
     */
    Timeout: {
        display: "Timeout",
        code: "timeout",
        system: "http://hl7.org/fhir/issue-type",
    },
    /**
     * too-costly: The operation was stopped to protect server resources; e.g. a request for a value set expansion on all of SNOMED CT.
     */
    OperationTooCostly: {
        display: "Operation Too Costly",
        code: "too-costly",
        system: "http://hl7.org/fhir/issue-type",
    },
    /**
     * too-long: Provided content is too long (typically, this is a denial of service protection type of error).
     */
    ContentTooLong: {
        display: "Content Too Long",
        code: "too-long",
        system: "http://hl7.org/fhir/issue-type",
    },
    /**
     * transient: Transient processing issues. The system receiving the error may be able to resubmit the same content once an underlying issue is resolved.
     */
    TransientIssue: {
        display: "Transient Issue",
        code: "transient",
        system: "http://hl7.org/fhir/issue-type",
    },
    /**
     * unknown: The user or system was not able to be authenticated (either there is no process, or the proferred token is unacceptable).
     */
    UnknownUser: {
        display: "Unknown User",
        code: "unknown",
        system: "http://hl7.org/fhir/issue-type",
    },
    /**
     * value: An element value is invalid.
     */
    ElementValueInvalid: {
        display: "Element value invalid",
        code: "value",
        system: "http://hl7.org/fhir/issue-type",
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSXNzdWVUeXBlQ29kaW5ncy5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXJWYWx1ZVNldHMvSXNzdWVUeXBlQ29kaW5ncy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsK0NBQStDO0FBQy9DLGtDQUFrQztBQUNsQywrREFBK0Q7QUE4SC9EOztHQUVHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sZ0JBQWdCLEdBQXVCO0lBQ2xEOztPQUVHO0lBQ0gscUJBQXFCLEVBQUU7UUFDckIsT0FBTyxFQUFFLHlCQUF5QjtRQUNsQyxJQUFJLEVBQUUsZUFBZTtRQUNyQixNQUFNLEVBQUUsZ0NBQWdDO0tBQ3pDO0lBQ0Q7O09BRUc7SUFDSCxXQUFXLEVBQUU7UUFDWCxPQUFPLEVBQUUsY0FBYztRQUN2QixJQUFJLEVBQUUsY0FBYztRQUNwQixNQUFNLEVBQUUsZ0NBQWdDO0tBQ3pDO0lBQ0Q7O09BRUc7SUFDSCxtQkFBbUIsRUFBRTtRQUNuQixPQUFPLEVBQUUsdUJBQXVCO1FBQ2hDLElBQUksRUFBRSxVQUFVO1FBQ2hCLE1BQU0sRUFBRSxnQ0FBZ0M7S0FDekM7SUFDRDs7T0FFRztJQUNILFNBQVMsRUFBRTtRQUNULE9BQU8sRUFBRSxXQUFXO1FBQ3BCLElBQUksRUFBRSxXQUFXO1FBQ2pCLE1BQU0sRUFBRSxnQ0FBZ0M7S0FDekM7SUFDRDs7T0FFRztJQUNILFNBQVMsRUFBRTtRQUNULE9BQU8sRUFBRSxXQUFXO1FBQ3BCLElBQUksRUFBRSxXQUFXO1FBQ2pCLE1BQU0sRUFBRSxnQ0FBZ0M7S0FDekM7SUFDRDs7T0FFRztJQUNILGNBQWMsRUFBRTtRQUNkLE9BQU8sRUFBRSxpQkFBaUI7UUFDMUIsSUFBSSxFQUFFLFNBQVM7UUFDZixNQUFNLEVBQUUsZ0NBQWdDO0tBQ3pDO0lBQ0Q7O09BRUc7SUFDSCxxQkFBcUIsRUFBRTtRQUNyQixPQUFPLEVBQUUsd0JBQXdCO1FBQ2pDLElBQUksRUFBRSxXQUFXO1FBQ2pCLE1B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QUNEOztPQUVHO0lBQ0gsY0FBYyxFQUFFO1FBQ2QsT0FBTyxFQUFFLGtCQUFrQjtRQUMzQixJQUFJLEVBQUUsVUFBVTtRQUNoQixNQUFNLEVBQUUsZ0NBQWdDO0tBQ3pDO0lBQ0Q7O09BRUc7SUFDSCxjQUFjLEVBQUU7UUFDZCxPQUFPLEVBQUUsaUJBQWlCO1FBQzFCLElBQUksRUFBRSxXQUFXO1FBQ2pCLE1BQU0sRUFBRSxnQ0FBZ0M7S0FDekM7SUFDRDs7T0FFRztJQUNILFdBQVcsRUFBRTtRQUNYLE9BQU8sRUFBRSxjQUFjO1FBQ3ZCLElBQUksRUFBRSxTQUFTO1FBQ2YsTUFBTSxFQUFFLGdDQUFnQztLQUN6QztJQUNEOztPQUVHO0lBQ0gsbUJBQW1CLEVBQUU7UUFDbkIsT0FBTyxFQUFFLHVCQUF1QjtRQUNoQyxJQUFJLEVBQUUsT0FBTztRQUNiLE1BQU0sRUFBRSxnQ0FBZ0M7S0FDekM7Q0FDTyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnIzLmNvcmUgdmVyc2lvbjogMy4wLjJcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFZhbHVlU2V0OiBodHRwOi8vaGw3Lm9yZy9maGlyL1ZhbHVlU2V0L2lzc3VlLXR5cGV8My4wLjJcclxuXHJcbmltcG9ydCB7IENvZGluZ0FyZ3MgfSBmcm9tICcuLi9maGlyL0NvZGluZy5qcydcclxuXHJcbi8qKlxyXG4gKiBBIGNvZGUgdGhhdCBkZXNjcmliZXMgdGhlIHR5cGUgb2YgaXNzdWUuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBJc3N1ZVR5cGVDb2RpbmdUeXBlID0ge1xyXG4gIC8qKlxyXG4gICAqIGJ1c2luZXNzLXJ1bGU6IFRoZSBjb250ZW50L29wZXJhdGlvbiBmYWlsZWQgdG8gcGFzcyBzb21lIGJ1c2luZXNzIHJ1bGUsIGFuZCBzbyBjb3VsZCBub3QgcHJvY2VlZC5cclxuICAgKi9cclxuICBCdXNpbmVzc1J1bGVWaW9sYXRpb246IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogY29kZS1pbnZhbGlkOiBUaGUgY29kZSBvciBzeXN0ZW0gY291bGQgbm90IGJlIHVuZGVyc3Rvb2QsIG9yIGl0IHdhcyBub3QgdmFsaWQgaW4gdGhlIGNvbnRleHQgb2YgYSBwYXJ0aWN1bGFyIFZhbHVlU2V0LmNvZGUuXHJcbiAgICovXHJcbiAgSW52YWxpZENvZGU6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogY29uZmxpY3Q6IENvbnRlbnQgY291bGQgbm90IGJlIGFjY2VwdGVkIGJlY2F1c2Ugb2YgYW4gZWRpdCBjb25mbGljdCAoaS5lLiB2ZXJzaW9uIGF3YXJlIHVwZGF0ZXMpIChJbiBhIHB1cmUgUkVTVGZ1bCBlbnZpcm9ubWVudCwgdGhpcyB3b3VsZCBiZSBhbiBIVFRQIDQwNCBlcnJvciwgYnV0IHRoaXMgY29kZSBtYXkgYmUgdXNlZCB3aGVyZSB0aGUgY29uZmxpY3QgaXMgZGlzY292ZXJlZCBmdXJ0aGVyIGludG8gdGhlIGFwcGxpY2F0aW9uIGFyY2hpdGVjdHVyZS4pXHJcbiAgICovXHJcbiAgRWRpdFZlcnNpb25Db25mbGljdDogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBkdXBsaWNhdGU6IEFuIGF0dGVtcHQgd2FzIG1hZGUgdG8gY3JlYXRlIGEgZHVwbGljYXRlIHJlY29yZC5cclxuICAgKi9cclxuICBEdXBsaWNhdGU6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogZXhjZXB0aW9uOiBBbiB1bmV4cGVjdGVkIGludGVybmFsIGVycm9yIGhhcyBvY2N1cnJlZC5cclxuICAgKi9cclxuICBFeGNlcHRpb246IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogZXhwaXJlZDogVXNlciBzZXNzaW9uIGV4cGlyZWQ7IGEgbG9naW4gbWF5IGJlIHJlcXVpcmVkLlxyXG4gICAqL1xyXG4gIFNlc3Npb25FeHBpcmVkOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIGV4dGVuc2lvbjogQW4gZXh0ZW5zaW9uIHdhcyBmb3VuZCB0aGF0IHdhcyBub3QgYWNjZXB0YWJsZSwgY291bGQgbm90IGJlIHJlc29sdmVkLCBvciBhIG1vZGlmaWVyRXh0ZW5zaW9uIHdhcyBub3QgcmVjb2duaXplZC5cclxuICAgKi9cclxuICBVbmFjY2VwdGFibGVFeHRlbnNpb246IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogZm9yYmlkZGVuOiBUaGUgdXNlciBkb2VzIG5vdCBoYXZlIHRoZSByaWdodHMgdG8gcGVyZm9ybSB0aGlzIGFjdGlvbi5cclxuICAgKi9cclxuICBGb3JiaWRkZW46IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogaW5jb21wbGV0ZTogTm90IGFsbCBkYXRhIHNvdXJjZXMgdHlwaWNhbGx5IGFjY2Vzc2VkIGNvdWxkIGJlIHJlYWNoZWQsIG9yIHJlc3BvbmRlZCBpbiB0aW1lLCBzbyB0aGUgcmV0dXJuZWQgaW5mb3JtYXRpb24gbWF5IG5vdCBiZSBjb21wbGV0ZS5cclxuICAgKi9cclxuICBJbmNvbXBsZXRlUmVzdWx0czogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBpbmZvcm1hdGlvbmFsOiBBIG1lc3NhZ2UgdW5yZWxhdGVkIHRvIHRoZSBwcm9jZXNzaW5nIHN1Y2Nlc3Mgb2YgdGhlIGNvbXBsZXRlZCBvcGVyYXRpb24gKGV4YW1wbGVzIG9mIHRoZSBsYXR0ZXIgaW5jbHVkZSB0aGluZ3MgbGlrZSByZW1pbmRlcnMgb2YgcGFzc3dvcmQgZXhwaXJ5LCBzeXN0ZW0gbWFpbnRlbmFuY2UgdGltZXMsIGV0Yy4pLlxyXG4gICAqL1xyXG4gIEluZm9ybWF0aW9uYWxOb3RlOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIGludmFsaWQ6IENvbnRlbnQgaW52YWxpZCBhZ2FpbnN0IHRoZSBzcGVjaWZpY2F0aW9uIG9yIGEgcHJvZmlsZS5cclxuICAgKi9cclxuICBJbnZhbGlkQ29udGVudDogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBpbnZhcmlhbnQ6IEEgY29udGVudCB2YWxpZGF0aW9uIHJ1bGUgZmFpbGVkIC0gZS5nLiBhIHNjaGVtYXRyb24gcnVsZS5cclxuICAgKi9cclxuICBWYWxpZGF0aW9uUnVsZUZhaWxlZDogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBsb2NrLWVycm9yOiBBIHJlc291cmNlL3JlY29yZCBsb2NraW5nIGZhaWx1cmUgKHVzdWFsbHkgaW4gYW4gdW5kZXJseWluZyBkYXRhYmFzZSkuXHJcbiAgICovXHJcbiAgTG9ja0Vycm9yOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIGxvZ2luOiBUaGUgY2xpZW50IG5lZWRzIHRvIGluaXRpYXRlIGFuIGF1dGhlbnRpY2F0aW9uIHByb2Nlc3MuXHJcbiAgICovXHJcbiAgTG9naW5SZXF1aXJlZDogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBuby1zdG9yZTogVGhlIHBlcnNpc3RlbnQgc3RvcmUgaXMgdW5hdmFpbGFibGU7IGUuZy4gdGhlIGRhdGFiYXNlIGlzIGRvd24gZm9yIG1haW50ZW5hbmNlIG9yIHNpbWlsYXIgYWN0aW9uLlxyXG4gICAqL1xyXG4gIE5vU3RvcmVBdmFpbGFibGU6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogbm90LWZvdW5kOiBUaGUgcmVmZXJlbmNlIHByb3ZpZGVkIHdhcyBub3QgZm91bmQuIEluIGEgcHVyZSBSRVNUZnVsIGVudmlyb25tZW50LCB0aGlzIHdvdWxkIGJlIGFuIEhUVFAgNDA0IGVycm9yLCBidXQgdGhpcyBjb2RlIG1heSBiZSB1c2VkIHdoZXJlIHRoZSBjb250ZW50IGlzIG5vdCBmb3VuZCBmdXJ0aGVyIGludG8gdGhlIGFwcGxpY2F0aW9uIGFyY2hpdGVjdHVyZS5cclxuICAgKi9cclxuICBOb3RGb3VuZDogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBub3Qtc3VwcG9ydGVkOiBUaGUgcmVzb3VyY2Ugb3IgcHJvZmlsZSBpcyBub3Qgc3VwcG9ydGVkLlxyXG4gICAqL1xyXG4gIENvbnRlbnROb3RTdXBwb3J0ZWQ6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogcHJvY2Vzc2luZzogUHJvY2Vzc2luZyBpc3N1ZXMuIFRoZXNlIGFyZSBleHBlY3RlZCB0byBiZSBmaW5hbCBlLmcuIHRoZXJlIGlzIG5vIHBvaW50IHJlc3VibWl0dGluZyB0aGUgc2FtZSBjb250ZW50IHVuY2hhbmdlZC5cclxuICAgKi9cclxuICBQcm9jZXNzaW5nRmFpbHVyZTogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiByZXF1aXJlZDogQSByZXF1aXJlZCBlbGVtZW50IGlzIG1pc3NpbmcuXHJcbiAgICovXHJcbiAgUmVxdWlyZWRFbGVtZW50TWlzc2luZzogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBzZWN1cml0eTogQW4gYXV0aGVudGljYXRpb24vYXV0aG9yaXphdGlvbi9wZXJtaXNzaW9ucyBpc3N1ZSBvZiBzb21lIGtpbmQuXHJcbiAgICovXHJcbiAgU2VjdXJpdHlQcm9ibGVtOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIHN0cnVjdHVyZTogQSBzdHJ1Y3R1cmFsIGlzc3VlIGluIHRoZSBjb250ZW50IHN1Y2ggYXMgd3JvbmcgbmFtZXNwYWNlLCBvciB1bmFibGUgdG8gcGFyc2UgdGhlIGNvbnRlbnQgY29tcGxldGVseSwgb3IgaW52YWxpZCBqc29uIHN5bnRheC5cclxuICAgKi9cclxuICBTdHJ1Y3R1cmFsSXNzdWU6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogc3VwcHJlc3NlZDogU29tZSBpbmZvcm1hdGlvbiB3YXMgbm90IG9yIG1heSBub3QgaGF2ZSBiZWVuIHJldHVybmVkIGR1ZSB0byBidXNpbmVzcyBydWxlcywgY29uc2VudCBvciBwcml2YWN5IHJ1bGVzLCBvciBhY2Nlc3MgcGVybWlzc2lvbiBjb25zdHJhaW50cy4gIFRoaXMgaW5mb3JtYXRpb24gbWF5IGJlIGFjY2Vzc2libGUgdGhyb3VnaCBhbHRlcm5hdGUgcHJvY2Vzc2VzLlxyXG4gICAqL1xyXG4gIEluZm9ybWF0aW9uU3VwcHJlc3NlZDogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiB0aHJvdHRsZWQ6IFRoZSBzeXN0ZW0gaXMgbm90IHByZXBhcmVkIHRvIGhhbmRsZSB0aGlzIHJlcXVlc3QgZHVlIHRvIGxvYWQgbWFuYWdlbWVudC5cclxuICAgKi9cclxuICBUaHJvdHRsZWQ6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogdGltZW91dDogQW4gaW50ZXJuYWwgdGltZW91dCBoYXMgb2NjdXJyZWQuXHJcbiAgICovXHJcbiAgVGltZW91dDogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiB0b28tY29zdGx5OiBUaGUgb3BlcmF0aW9uIHdhcyBzdG9wcGVkIHRvIHByb3RlY3Qgc2VydmVyIHJlc291cmNlczsgZS5nLiBhIHJlcXVlc3QgZm9yIGEgdmFsdWUgc2V0IGV4cGFuc2lvbiBvbiBhbGwgb2YgU05PTUVEIENULlxyXG4gICAqL1xyXG4gIE9wZXJhdGlvblRvb0Nvc3RseTogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiB0b28tbG9uZzogUHJvdmlkZWQgY29udGVudCBpcyB0b28gbG9uZyAodHlwaWNhbGx5LCB0aGlzIGlzIGEgZGVuaWFsIG9mIHNlcnZpY2UgcHJvdGVjdGlvbiB0eXBlIG9mIGVycm9yKS5cclxuICAgKi9cclxuICBDb250ZW50VG9vTG9uZzogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiB0cmFuc2llbnQ6IFRyYW5zaWVudCBwcm9jZXNzaW5nIGlzc3Vlcy4gVGhlIHN5c3RlbSByZWNlaXZpbmcgdGhlIGVycm9yIG1heSBiZSBhYmxlIHRvIHJlc3VibWl0IHRoZSBzYW1lIGNvbnRlbnQgb25jZSBhbiB1bmRlcmx5aW5nIGlzc3VlIGlzIHJlc29sdmVkLlxyXG4gICAqL1xyXG4gIFRyYW5zaWVudElzc3VlOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIHVua25vd246IFRoZSB1c2VyIG9yIHN5c3RlbSB3YXMgbm90IGFibGUgdG8gYmUgYXV0aGVudGljYXRlZCAoZWl0aGVyIHRoZXJlIGlzIG5vIHByb2Nlc3MsIG9yIHRoZSBwcm9mZXJyZWQgdG9rZW4gaXMgdW5hY2NlcHRhYmxlKS5cclxuICAgKi9cclxuICBVbmtub3duVXNlcjogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiB2YWx1ZTogQW4gZWxlbWVudCB2YWx1ZSBpcyBpbnZhbGlkLlxyXG4gICAqL1xyXG4gIEVsZW1lbnRWYWx1ZUludmFsaWQ6IENvZGluZ0FyZ3M7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBIGNvZGUgdGhhdCBkZXNjcmliZXMgdGhlIHR5cGUgb2YgaXNzdWUuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgSXNzdWVUeXBlQ29kaW5nczpJc3N1ZVR5cGVDb2RpbmdUeXBlID0ge1xyXG4gIC8qKlxyXG4gICAqIGJ1c2luZXNzLXJ1bGU6IFRoZSBjb250ZW50L29wZXJhdGlvbiBmYWlsZWQgdG8gcGFzcyBzb21lIGJ1c2luZXNzIHJ1bGUsIGFuZCBzbyBjb3VsZCBub3QgcHJvY2VlZC5cclxuICAgKi9cclxuICBCdXNpbmVzc1J1bGVWaW9sYXRpb246IHtcclxuICAgIGRpc3BsYXk6IFwiQnVzaW5lc3MgUnVsZSBWaW9sYXRpb25cIixcclxuICAgIGNvZGU6IFwiYnVzaW5lc3MtcnVsZVwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvaXNzdWUtdHlwZVwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogY29kZS1pbnZhbGlkOiBUaGUgY29kZSBvciBzeXN0ZW0gY291bGQgbm90IGJlIHVuZGVyc3Rvb2QsIG9yIGl0IHdhcyBub3QgdmFsaWQgaW4gdGhlIGNvbnRleHQgb2YgYSBwYXJ0aWN1bGFyIFZhbHVlU2V0LmNvZGUuXHJcbiAgICovXHJcbiAgSW52YWxpZENvZGU6IHtcclxuICAgIGRpc3BsYXk6IFwiSW52YWxpZCBDb2RlXCIsXHJcbiAgICBjb2RlOiBcImNvZGUtaW52YWxpZFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvaXNzdWUtdHlwZVwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogY29uZmxpY3Q6IENvbnRlbnQgY291bGQgbm90IGJlIGFjY2VwdGVkIGJlY2F1c2Ugb2YgYW4gZWRpdCBjb25mbGljdCAoaS5lLiB2ZXJzaW9uIGF3YXJlIHVwZGF0ZXMpIChJbiBhIHB1cmUgUkVTVGZ1bCBlbnZpcm9ubWVudCwgdGhpcyB3b3VsZCBiZSBhbiBIVFRQIDQwNCBlcnJvciwgYnV0IHRoaXMgY29kZSBtYXkgYmUgdXNlZCB3aGVyZSB0aGUgY29uZmxpY3QgaXMgZGlzY292ZXJlZCBmdXJ0aGVyIGludG8gdGhlIGFwcGxpY2F0aW9uIGFyY2hpdGVjdHVyZS4pXHJcbiAgICovXHJcbiAgRWRpdFZlcnNpb25Db25mbGljdDoge1xyXG4gICAgZGlzcGxheTogXCJFZGl0IFZlcnNpb24gQ29uZmxpY3RcIixcclxuICAgIGNvZGU6IFwiY29uZmxpY3RcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL2lzc3VlLXR5cGVcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIGR1cGxpY2F0ZTogQW4gYXR0ZW1wdCB3YXMgbWFkZSB0byBjcmVhdGUgYSBkdXBsaWNhdGUgcmVjb3JkLlxyXG4gICAqL1xyXG4gIER1cGxpY2F0ZToge1xyXG4gICAgZGlzcGxheTogXCJEdXBsaWNhdGVcIixcclxuICAgIGNvZGU6IFwiZHVwbGljYXRlXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9pc3N1ZS10eXBlXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBleGNlcHRpb246IEFuIHVuZXhwZWN0ZWQgaW50ZXJuYWwgZXJyb3IgaGFzIG9jY3VycmVkLlxyXG4gICAqL1xyXG4gIEV4Y2VwdGlvbjoge1xyXG4gICAgZGlzcGxheTogXCJFeGNlcHRpb25cIixcclxuICAgIGNvZGU6IFwiZXhjZXB0aW9uXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9pc3N1ZS10eXBlXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBleHBpcmVkOiBVc2VyIHNlc3Npb24gZXhwaXJlZDsgYSBsb2dpbiBtYXkgYmUgcmVxdWlyZWQuXHJcbiAgICovXHJcbiAgU2Vzc2lvbkV4cGlyZWQ6IHtcclxuICAgIGRpc3BsYXk6IFwiU2Vzc2lvbiBFeHBpcmVkXCIsXHJcbiAgICBjb2RlOiBcImV4cGlyZWRcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL2lzc3VlLXR5cGVcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIGV4dGVuc2lvbjogQW4gZXh0ZW5zaW9uIHdhcyBmb3VuZCB0aGF0IHdhcyBub3QgYWNjZXB0YWJsZSwgY291bGQgbm90IGJlIHJlc29sdmVkLCBvciBhIG1vZGlmaWVyRXh0ZW5zaW9uIHdhcyBub3QgcmVjb2duaXplZC5cclxuICAgKi9cclxuICBVbmFjY2VwdGFibGVFeHRlbnNpb246IHtcclxuICAgIGRpc3BsYXk6IFwiVW5hY2NlcHRhYmxlIEV4dGVuc2lvblwiLFxyXG4gICAgY29kZTogXCJleHRlbnNpb25cIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL2lzc3VlLXR5cGVcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIGZvcmJpZGRlbjogVGhlIHVzZXIgZG9lcyBub3QgaGF2ZSB0aGUgcmlnaHRzIHRvIHBlcmZvcm0gdGhpcyBhY3Rpb24uXHJcbiAgICovXHJcbiAgRm9yYmlkZGVuOiB7XHJcbiAgICBkaXNwbGF5OiBcIkZvcmJpZGRlblwiLFxyXG4gICAgY29kZTogXCJmb3JiaWRkZW5cIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL2lzc3VlLXR5cGVcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIGluY29tcGxldGU6IE5vdCBhbGwgZGF0YSBzb3VyY2VzIHR5cGljYWxseSBhY2Nlc3NlZCBjb3VsZCBiZSByZWFjaGVkLCBvciByZXNwb25kZWQgaW4gdGltZSwgc28gdGhlIHJldHVybmVkIGluZm9ybWF0aW9uIG1heSBub3QgYmUgY29tcGxldGUuXHJcbiAgICovXHJcbiAgSW5jb21wbGV0ZVJlc3VsdHM6IHtcclxuICAgIGRpc3BsYXk6IFwiSW5jb21wbGV0ZSBSZXN1bHRzXCIsXHJcbiAgICBjb2RlOiBcImluY29tcGxldGVcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL2lzc3VlLXR5cGVcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIGluZm9ybWF0aW9uYWw6IEEgbWVzc2FnZSB1bnJlbGF0ZWQgdG8gdGhlIHByb2Nlc3Npbmcgc3VjY2VzcyBvZiB0aGUgY29tcGxldGVkIG9wZXJhdGlvbiAoZXhhbXBsZXMgb2YgdGhlIGxhdHRlciBpbmNsdWRlIHRoaW5ncyBsaWtlIHJlbWluZGVycyBvZiBwYXNzd29yZCBleHBpcnksIHN5c3RlbSBtYWludGVuYW5jZSB0aW1lcywgZXRjLikuXHJcbiAgICovXHJcbiAgSW5mb3JtYXRpb25hbE5vdGU6IHtcclxuICAgIGRpc3BsYXk6IFwiSW5mb3JtYXRpb25hbCBOb3RlXCIsXHJcbiAgICBjb2RlOiBcImluZm9ybWF0aW9uYWxcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL2lzc3VlLXR5cGVcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIGludmFsaWQ6IENvbnRlbnQgaW52YWxpZCBhZ2FpbnN0IHRoZSBzcGVjaWZpY2F0aW9uIG9yIGEgcHJvZmlsZS5cclxuICAgKi9cclxuICBJbnZhbGlkQ29udGVudDoge1xyXG4gICAgZGlzcGxheTogXCJJbnZhbGlkIENvbnRlbnRcIixcclxuICAgIGNvZGU6IFwiaW52YWxpZFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvaXNzdWUtdHlwZVwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogaW52YXJpYW50OiBBIGNvbnRlbnQgdmFsaWRhdGlvbiBydWxlIGZhaWxlZCAtIGUuZy4gYSBzY2hlbWF0cm9uIHJ1bGUuXHJcbiAgICovXHJcbiAgVmFsaWRhdGlvblJ1bGVGYWlsZWQ6IHtcclxuICAgIGRpc3BsYXk6IFwiVmFsaWRhdGlvbiBydWxlIGZhaWxlZFwiLFxyXG4gICAgY29kZTogXCJpbnZhcmlhbnRcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL2lzc3VlLXR5cGVcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIGxvY2stZXJyb3I6IEEgcmVzb3VyY2UvcmVjb3JkIGxvY2tpbmcgZmFpbHVyZSAodXN1YWxseSBpbiBhbiB1bmRlcmx5aW5nIGRhdGFiYXNlKS5cclxuICAgKi9cclxuICBMb2NrRXJyb3I6IHtcclxuICAgIGRpc3BsYXk6IFwiTG9jayBFcnJvclwiLFxyXG4gICAgY29kZTogXCJsb2NrLWVycm9yXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9pc3N1ZS10eXBlXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBsb2dpbjogVGhlIGNsaWVudCBuZWVkcyB0byBpbml0aWF0ZSBhbiBhdXRoZW50aWNhdGlvbiBwcm9jZXNzLlxyXG4gICAqL1xyXG4gIExvZ2luUmVxdWlyZWQ6IHtcclxuICAgIGRpc3BsYXk6IFwiTG9naW4gUmVxdWlyZWRcIixcclxuICAgIGNvZGU6IFwibG9naW5cIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL2lzc3VlLXR5cGVcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIG5vLXN0b3JlOiBUaGUgcGVyc2lzdGVudCBzdG9yZSBpcyB1bmF2YWlsYWJsZTsgZS5nLiB0aGUgZGF0YWJhc2UgaXMgZG93biBmb3IgbWFpbnRlbmFuY2Ugb3Igc2ltaWxhciBhY3Rpb24uXHJcbiAgICovXHJcbiAgTm9TdG9yZUF2YWlsYWJsZToge1xyXG4gICAgZGlzcGxheTogXCJObyBTdG9yZSBBdmFpbGFibGVcIixcclxuICAgIGNvZGU6IFwibm8tc3RvcmVcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL2lzc3VlLXR5cGVcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIG5vdC1mb3VuZDogVGhlIHJlZmVyZW5jZSBwcm92aWRlZCB3YXMgbm90IGZvdW5kLiBJbiBhIHB1cmUgUkVTVGZ1bCBlbnZpcm9ubWVudCwgdGhpcyB3b3VsZCBiZSBhbiBIVFRQIDQwNCBlcnJvciwgYnV0IHRoaXMgY29kZSBtYXkgYmUgdXNlZCB3aGVyZSB0aGUgY29udGVudCBpcyBub3QgZm91bmQgZnVydGhlciBpbnRvIHRoZSBhcHBsaWNhdGlvbiBhcmNoaXRlY3R1cmUuXHJcbiAgICovXHJcbiAgTm90Rm91bmQ6IHtcclxuICAgIGRpc3BsYXk6IFwiTm90IEZvdW5kXCIsXHJcbiAgICBjb2RlOiBcIm5vdC1mb3VuZFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvaXNzdWUtdHlwZVwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogbm90LXN1cHBvcnRlZDogVGhlIHJlc291cmNlIG9yIHByb2ZpbGUgaXMgbm90IHN1cHBvcnRlZC5cclxuICAgKi9cclxuICBDb250ZW50Tm90U3VwcG9ydGVkOiB7XHJcbiAgICBkaXNwbGF5OiBcIkNvbnRlbnQgbm90IHN1cHBvcnRlZFwiLFxyXG4gICAgY29kZTogXCJub3Qtc3VwcG9ydGVkXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9pc3N1ZS10eXBlXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBwcm9jZXNzaW5nOiBQcm9jZXNzaW5nIGlzc3Vlcy4gVGhlc2UgYXJlIGV4cGVjdGVkIHRvIGJlIGZpbmFsIGUuZy4gdGhlcmUgaXMgbm8gcG9pbnQgcmVzdWJtaXR0aW5nIHRoZSBzYW1lIGNvbnRlbnQgdW5jaGFuZ2VkLlxyXG4gICAqL1xyXG4gIFByb2Nlc3NpbmdGYWlsdXJlOiB7XHJcbiAgICBkaXNwbGF5OiBcIlByb2Nlc3NpbmcgRmFpbHVyZVwiLFxyXG4gICAgY29kZTogXCJwcm9jZXNzaW5nXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9pc3N1ZS10eXBlXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiByZXF1aXJlZDogQSByZXF1aXJlZCBlbGVtZW50IGlzIG1pc3NpbmcuXHJcbiAgICovXHJcbiAgUmVxdWlyZWRFbGVtZW50TWlzc2luZzoge1xyXG4gICAgZGlzcGxheTogXCJSZXF1aXJlZCBlbGVtZW50IG1pc3NpbmdcIixcclxuICAgIGNvZGU6IFwicmVxdWlyZWRcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL2lzc3VlLXR5cGVcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIHNlY3VyaXR5OiBBbiBhdXRoZW50aWNhdGlvbi9hdXRob3JpemF0aW9uL3Blcm1pc3Npb25zIGlzc3VlIG9mIHNvbWUga2luZC5cclxuICAgKi9cclxuICBTZWN1cml0eVByb2JsZW06IHtcclxuICAgIGRpc3BsYXk6IFwiU2VjdXJpdHkgUHJvYmxlbVwiLFxyXG4gICAgY29kZTogXCJzZWN1cml0eVwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvaXNzdWUtdHlwZVwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogc3RydWN0dXJlOiBBIHN0cnVjdHVyYWwgaXNzdWUgaW4gdGhlIGNvbnRlbnQgc3VjaCBhcyB3cm9uZyBuYW1lc3BhY2UsIG9yIHVuYWJsZSB0byBwYXJzZSB0aGUgY29udGVudCBjb21wbGV0ZWx5LCBvciBpbnZhbGlkIGpzb24gc3ludGF4LlxyXG4gICAqL1xyXG4gIFN0cnVjdHVyYWxJc3N1ZToge1xyXG4gICAgZGlzcGxheTogXCJTdHJ1Y3R1cmFsIElzc3VlXCIsXHJcbiAgICBjb2RlOiBcInN0cnVjdHVyZVwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvaXNzdWUtdHlwZVwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogc3VwcHJlc3NlZDogU29tZSBpbmZvcm1hdGlvbiB3YXMgbm90IG9yIG1heSBub3QgaGF2ZSBiZWVuIHJldHVybmVkIGR1ZSB0byBidXNpbmVzcyBydWxlcywgY29uc2VudCBvciBwcml2YWN5IHJ1bGVzLCBvciBhY2Nlc3MgcGVybWlzc2lvbiBjb25zdHJhaW50cy4gIFRoaXMgaW5mb3JtYXRpb24gbWF5IGJlIGFjY2Vzc2libGUgdGhyb3VnaCBhbHRlcm5hdGUgcHJvY2Vzc2VzLlxyXG4gICAqL1xyXG4gIEluZm9ybWF0aW9uU3VwcHJlc3NlZDoge1xyXG4gICAgZGlzcGxheTogXCJJbmZvcm1hdGlvbiAgU3VwcHJlc3NlZFwiLFxyXG4gICAgY29kZTogXCJzdXBwcmVzc2VkXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9pc3N1ZS10eXBlXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiB0aHJvdHRsZWQ6IFRoZSBzeXN0ZW0gaXMgbm90IHByZXBhcmVkIHRvIGhhbmRsZSB0aGlzIHJlcXVlc3QgZHVlIHRvIGxvYWQgbWFuYWdlbWVudC5cclxuICAgKi9cclxuICBUaHJvdHRsZWQ6IHtcclxuICAgIGRpc3BsYXk6IFwiVGhyb3R0bGVkXCIsXHJcbiAgICBjb2RlOiBcInRocm90dGxlZFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvaXNzdWUtdHlwZVwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogdGltZW91dDogQW4gaW50ZXJuYWwgdGltZW91dCBoYXMgb2NjdXJyZWQuXHJcbiAgICovXHJcbiAgVGltZW91dDoge1xyXG4gICAgZGlzcGxheTogXCJUaW1lb3V0XCIsXHJcbiAgICBjb2RlOiBcInRpbWVvdXRcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL2lzc3VlLXR5cGVcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIHRvby1jb3N0bHk6IFRoZSBvcGVyYXRpb24gd2FzIHN0b3BwZWQgdG8gcHJvdGVjdCBzZXJ2ZXIgcmVzb3VyY2VzOyBlLmcuIGEgcmVxdWVzdCBmb3IgYSB2YWx1ZSBzZXQgZXhwYW5zaW9uIG9uIGFsbCBvZiBTTk9NRUQgQ1QuXHJcbiAgICovXHJcbiAgT3BlcmF0aW9uVG9vQ29zdGx5OiB7XHJcbiAgICBkaXNwbGF5OiBcIk9wZXJhdGlvbiBUb28gQ29zdGx5XCIsXHJcbiAgICBjb2RlOiBcInRvby1jb3N0bHlcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL2lzc3VlLXR5cGVcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIHRvby1sb25nOiBQcm92aWRlZCBjb250ZW50IGlzIHRvbyBsb25nICh0eXBpY2FsbHksIHRoaXMgaXMgYSBkZW5pYWwgb2Ygc2VydmljZSBwcm90ZWN0aW9uIHR5cGUgb2YgZXJyb3IpLlxyXG4gICAqL1xyXG4gIENvbnRlbnRUb29Mb25nOiB7XHJcbiAgICBkaXNwbGF5OiBcIkNvbnRlbnQgVG9vIExvbmdcIixcclxuICAgIGNvZGU6IFwidG9vLWxvbmdcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL2lzc3VlLXR5cGVcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIHRyYW5zaWVudDogVHJhbnNpZW50IHByb2Nlc3NpbmcgaXNzdWVzLiBUaGUgc3lzdGVtIHJlY2VpdmluZyB0aGUgZXJyb3IgbWF5IGJlIGFibGUgdG8gcmVzdWJtaXQgdGhlIHNhbWUgY29udGVudCBvbmNlIGFuIHVuZGVybHlpbmcgaXNzdWUgaXMgcmVzb2x2ZWQuXHJcbiAgICovXHJcbiAgVHJhbnNpZW50SXNzdWU6IHtcclxuICAgIGRpc3BsYXk6IFwiVHJhbnNpZW50IElzc3VlXCIsXHJcbiAgICBjb2RlOiBcInRyYW5zaWVudFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvaXNzdWUtdHlwZVwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogdW5rbm93bjogVGhlIHVzZXIgb3Igc3lzdGVtIHdhcyBub3QgYWJsZSB0byBiZSBhdXRoZW50aWNhdGVkIChlaXRoZXIgdGhlcmUgaXMgbm8gcHJvY2Vzcywgb3IgdGhlIHByb2ZlcnJlZCB0b2tlbiBpcyB1bmFjY2VwdGFibGUpLlxyXG4gICAqL1xyXG4gIFVua25vd25Vc2VyOiB7XHJcbiAgICBkaXNwbGF5OiBcIlVua25vd24gVXNlclwiLFxyXG4gICAgY29kZTogXCJ1bmtub3duXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9pc3N1ZS10eXBlXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiB2YWx1ZTogQW4gZWxlbWVudCB2YWx1ZSBpcyBpbnZhbGlkLlxyXG4gICAqL1xyXG4gIEVsZW1lbnRWYWx1ZUludmFsaWQ6IHtcclxuICAgIGRpc3BsYXk6IFwiRWxlbWVudCB2YWx1ZSBpbnZhbGlkXCIsXHJcbiAgICBjb2RlOiBcInZhbHVlXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9pc3N1ZS10eXBlXCIsXHJcbiAgfSxcclxufSBhcyBjb25zdDtcclxuIl19