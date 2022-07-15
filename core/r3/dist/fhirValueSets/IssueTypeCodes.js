// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/issue-type|3.0.2
/**
 * A code that describes the type of issue.
 */
export const IssueTypeCodes = {
    /**
     * business-rule: The content/operation failed to pass some business rule, and so could not proceed.
     */
    BusinessRuleViolation: "business-rule",
    /**
     * code-invalid: The code or system could not be understood, or it was not valid in the context of a particular ValueSet.code.
     */
    InvalidCode: "code-invalid",
    /**
     * conflict: Content could not be accepted because of an edit conflict (i.e. version aware updates) (In a pure RESTful environment, this would be an HTTP 404 error, but this code may be used where the conflict is discovered further into the application architecture.)
     */
    EditVersionConflict: "conflict",
    /**
     * duplicate: An attempt was made to create a duplicate record.
     */
    Duplicate: "duplicate",
    /**
     * exception: An unexpected internal error has occurred.
     */
    Exception: "exception",
    /**
     * expired: User session expired; a login may be required.
     */
    SessionExpired: "expired",
    /**
     * extension: An extension was found that was not acceptable, could not be resolved, or a modifierExtension was not recognized.
     */
    UnacceptableExtension: "extension",
    /**
     * forbidden: The user does not have the rights to perform this action.
     */
    Forbidden: "forbidden",
    /**
     * incomplete: Not all data sources typically accessed could be reached, or responded in time, so the returned information may not be complete.
     */
    IncompleteResults: "incomplete",
    /**
     * informational: A message unrelated to the processing success of the completed operation (examples of the latter include things like reminders of password expiry, system maintenance times, etc.).
     */
    InformationalNote: "informational",
    /**
     * invalid: Content invalid against the specification or a profile.
     */
    InvalidContent: "invalid",
    /**
     * invariant: A content validation rule failed - e.g. a schematron rule.
     */
    ValidationRuleFailed: "invariant",
    /**
     * lock-error: A resource/record locking failure (usually in an underlying database).
     */
    LockError: "lock-error",
    /**
     * login: The client needs to initiate an authentication process.
     */
    LoginRequired: "login",
    /**
     * no-store: The persistent store is unavailable; e.g. the database is down for maintenance or similar action.
     */
    NoStoreAvailable: "no-store",
    /**
     * not-found: The reference provided was not found. In a pure RESTful environment, this would be an HTTP 404 error, but this code may be used where the content is not found further into the application architecture.
     */
    NotFound: "not-found",
    /**
     * not-supported: The resource or profile is not supported.
     */
    ContentNotSupported: "not-supported",
    /**
     * processing: Processing issues. These are expected to be final e.g. there is no point resubmitting the same content unchanged.
     */
    ProcessingFailure: "processing",
    /**
     * required: A required element is missing.
     */
    RequiredElementMissing: "required",
    /**
     * security: An authentication/authorization/permissions issue of some kind.
     */
    SecurityProblem: "security",
    /**
     * structure: A structural issue in the content such as wrong namespace, or unable to parse the content completely, or invalid json syntax.
     */
    StructuralIssue: "structure",
    /**
     * suppressed: Some information was not or may not have been returned due to business rules, consent or privacy rules, or access permission constraints.  This information may be accessible through alternate processes.
     */
    InformationSuppressed: "suppressed",
    /**
     * throttled: The system is not prepared to handle this request due to load management.
     */
    Throttled: "throttled",
    /**
     * timeout: An internal timeout has occurred.
     */
    Timeout: "timeout",
    /**
     * too-costly: The operation was stopped to protect server resources; e.g. a request for a value set expansion on all of SNOMED CT.
     */
    OperationTooCostly: "too-costly",
    /**
     * too-long: Provided content is too long (typically, this is a denial of service protection type of error).
     */
    ContentTooLong: "too-long",
    /**
     * transient: Transient processing issues. The system receiving the error may be able to resubmit the same content once an underlying issue is resolved.
     */
    TransientIssue: "transient",
    /**
     * unknown: The user or system was not able to be authenticated (either there is no process, or the proferred token is unacceptable).
     */
    UnknownUser: "unknown",
    /**
     * value: An element value is invalid.
     */
    ElementValueInvalid: "value",
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSXNzdWVUeXBlQ29kZXMuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyVmFsdWVTZXRzL0lzc3VlVHlwZUNvZGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQiwrQ0FBK0M7QUFDL0Msa0NBQWtDO0FBQ2xDLCtEQUErRDtBQUUvRDs7R0FFRztBQUNILE1BQU0sQ0FBQyxNQUFNLGNBQWMsR0FBRztJQUM1Qjs7T0FFRztJQUNILHFCQUFxQixFQUFFLGVBQWU7SUFDdEM7O09BRUc7SUFDSCxXQUFXLEVBQUUsY0FBYztJQUMzQjs7T0FFRztJQUNILG1CQUFtQixFQUFFLFVBQVU7SUFDL0I7O09BRUc7SUFDSCxTQUFTLEVBQUUsV0FBVztJQUN0Qjs7T0FFRztJQUNILFNBQVMsRUFBRSxXQUFXO0lBQ3RCOztPQUVHO0lBQ0gsY0FBYyxFQUFFLFNBQVM7SUFDekI7O09BRUc7SUFDSCxxQkFBcUIsRUFBRSxXQUFXO0lBQ2xDOztPQUVHO0lBQ0gsU0FBUyxFQUFFLFdBQVc7SUFDdEI7O09BRUc7SUFDSCxpQkFBaUIsRUFBRSxZQUFZO0lBQy9COztPQUVHO0lBQ0gsaUJBQWlCLEVBQUUsZUFBZTtJQUNsQzs7T0FFRztJQUNILGNBQWMsRUFBRSxTQUFTO0lBQ3pCOztPQUVHO0lBQ0gsb0JBQW9CLEVBQUUsV0FBVztJQUNqQzs7T0FFRztJQUNILFNBQVMsRUFBRSxZQUFZO0lBQ3ZCOztPQUVHO0lBQ0gsYUFBYSxFQUFFLE9BQU87SUFDdEI7O09BRUc7SUFDSCxnQkFBZ0IsRUFBRSxVQUFVO0lBQzVCOztPQUVHO0lBQ0gsUUFBUSxFQUFFLFdBQVc7SUFDckI7O09BRUc7SUFDSCxtQkFBbUIsRUFBRSxlQUFlO0lBQ3BDOztPQUVHO0lBQ0gsaUJBQWlCLEVBQUUsWUFBWTtJQUMvQjs7T0FFRztJQUNILHNCQUFzQixFQUFFLFVBQVU7SUFDbEM7O09BRUc7SUFDSCxlQUFlLEVBQUUsVUFBVTtJQUMzQjs7T0FFRztJQUNILGVBQWUsRUFBRSxXQUFXO0lBQzVCOztPQUVHO0lBQ0gscUJBQXFCLEVBQUUsWUFBWTtJQUNuQzs7T0FFRztJQUNILFNBQVMsRUFBRSxXQUFXO0lBQ3RCOztPQUVHO0lBQ0gsT0FBTyxFQUFFLFNBQVM7SUFDbEI7O09BRUc7SUFDSCxrQkFBa0IsRUFBRSxZQUFZO0lBQ2hDOztPQUVHO0lBQ0gsY0FBYyxFQUFFLFVBQVU7SUFDMUI7O09BRUc7SUFDSCxjQUFjLEVBQUUsV0FBVztJQUMzQjs7T0FFRztJQUNILFdBQVcsRUFBRSxTQUFTO0lBQ3RCOztPQUVHO0lBQ0gsbUJBQW1CLEVBQUUsT0FBTztDQUNwQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnIzLmNvcmUgdmVyc2lvbjogMy4wLjJcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFZhbHVlU2V0OiBodHRwOi8vaGw3Lm9yZy9maGlyL1ZhbHVlU2V0L2lzc3VlLXR5cGV8My4wLjJcclxuXHJcbi8qKlxyXG4gKiBBIGNvZGUgdGhhdCBkZXNjcmliZXMgdGhlIHR5cGUgb2YgaXNzdWUuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgSXNzdWVUeXBlQ29kZXMgPSB7XHJcbiAgLyoqXHJcbiAgICogYnVzaW5lc3MtcnVsZTogVGhlIGNvbnRlbnQvb3BlcmF0aW9uIGZhaWxlZCB0byBwYXNzIHNvbWUgYnVzaW5lc3MgcnVsZSwgYW5kIHNvIGNvdWxkIG5vdCBwcm9jZWVkLlxyXG4gICAqL1xyXG4gIEJ1c2luZXNzUnVsZVZpb2xhdGlvbjogXCJidXNpbmVzcy1ydWxlXCIsXHJcbiAgLyoqXHJcbiAgICogY29kZS1pbnZhbGlkOiBUaGUgY29kZSBvciBzeXN0ZW0gY291bGQgbm90IGJlIHVuZGVyc3Rvb2QsIG9yIGl0IHdhcyBub3QgdmFsaWQgaW4gdGhlIGNvbnRleHQgb2YgYSBwYXJ0aWN1bGFyIFZhbHVlU2V0LmNvZGUuXHJcbiAgICovXHJcbiAgSW52YWxpZENvZGU6IFwiY29kZS1pbnZhbGlkXCIsXHJcbiAgLyoqXHJcbiAgICogY29uZmxpY3Q6IENvbnRlbnQgY291bGQgbm90IGJlIGFjY2VwdGVkIGJlY2F1c2Ugb2YgYW4gZWRpdCBjb25mbGljdCAoaS5lLiB2ZXJzaW9uIGF3YXJlIHVwZGF0ZXMpIChJbiBhIHB1cmUgUkVTVGZ1bCBlbnZpcm9ubWVudCwgdGhpcyB3b3VsZCBiZSBhbiBIVFRQIDQwNCBlcnJvciwgYnV0IHRoaXMgY29kZSBtYXkgYmUgdXNlZCB3aGVyZSB0aGUgY29uZmxpY3QgaXMgZGlzY292ZXJlZCBmdXJ0aGVyIGludG8gdGhlIGFwcGxpY2F0aW9uIGFyY2hpdGVjdHVyZS4pXHJcbiAgICovXHJcbiAgRWRpdFZlcnNpb25Db25mbGljdDogXCJjb25mbGljdFwiLFxyXG4gIC8qKlxyXG4gICAqIGR1cGxpY2F0ZTogQW4gYXR0ZW1wdCB3YXMgbWFkZSB0byBjcmVhdGUgYSBkdXBsaWNhdGUgcmVjb3JkLlxyXG4gICAqL1xyXG4gIER1cGxpY2F0ZTogXCJkdXBsaWNhdGVcIixcclxuICAvKipcclxuICAgKiBleGNlcHRpb246IEFuIHVuZXhwZWN0ZWQgaW50ZXJuYWwgZXJyb3IgaGFzIG9jY3VycmVkLlxyXG4gICAqL1xyXG4gIEV4Y2VwdGlvbjogXCJleGNlcHRpb25cIixcclxuICAvKipcclxuICAgKiBleHBpcmVkOiBVc2VyIHNlc3Npb24gZXhwaXJlZDsgYSBsb2dpbiBtYXkgYmUgcmVxdWlyZWQuXHJcbiAgICovXHJcbiAgU2Vzc2lvbkV4cGlyZWQ6IFwiZXhwaXJlZFwiLFxyXG4gIC8qKlxyXG4gICAqIGV4dGVuc2lvbjogQW4gZXh0ZW5zaW9uIHdhcyBmb3VuZCB0aGF0IHdhcyBub3QgYWNjZXB0YWJsZSwgY291bGQgbm90IGJlIHJlc29sdmVkLCBvciBhIG1vZGlmaWVyRXh0ZW5zaW9uIHdhcyBub3QgcmVjb2duaXplZC5cclxuICAgKi9cclxuICBVbmFjY2VwdGFibGVFeHRlbnNpb246IFwiZXh0ZW5zaW9uXCIsXHJcbiAgLyoqXHJcbiAgICogZm9yYmlkZGVuOiBUaGUgdXNlciBkb2VzIG5vdCBoYXZlIHRoZSByaWdodHMgdG8gcGVyZm9ybSB0aGlzIGFjdGlvbi5cclxuICAgKi9cclxuICBGb3JiaWRkZW46IFwiZm9yYmlkZGVuXCIsXHJcbiAgLyoqXHJcbiAgICogaW5jb21wbGV0ZTogTm90IGFsbCBkYXRhIHNvdXJjZXMgdHlwaWNhbGx5IGFjY2Vzc2VkIGNvdWxkIGJlIHJlYWNoZWQsIG9yIHJlc3BvbmRlZCBpbiB0aW1lLCBzbyB0aGUgcmV0dXJuZWQgaW5mb3JtYXRpb24gbWF5IG5vdCBiZSBjb21wbGV0ZS5cclxuICAgKi9cclxuICBJbmNvbXBsZXRlUmVzdWx0czogXCJpbmNvbXBsZXRlXCIsXHJcbiAgLyoqXHJcbiAgICogaW5mb3JtYXRpb25hbDogQSBtZXNzYWdlIHVucmVsYXRlZCB0byB0aGUgcHJvY2Vzc2luZyBzdWNjZXNzIG9mIHRoZSBjb21wbGV0ZWQgb3BlcmF0aW9uIChleGFtcGxlcyBvZiB0aGUgbGF0dGVyIGluY2x1ZGUgdGhpbmdzIGxpa2UgcmVtaW5kZXJzIG9mIHBhc3N3b3JkIGV4cGlyeSwgc3lzdGVtIG1haW50ZW5hbmNlIHRpbWVzLCBldGMuKS5cclxuICAgKi9cclxuICBJbmZvcm1hdGlvbmFsTm90ZTogXCJpbmZvcm1hdGlvbmFsXCIsXHJcbiAgLyoqXHJcbiAgICogaW52YWxpZDogQ29udGVudCBpbnZhbGlkIGFnYWluc3QgdGhlIHNwZWNpZmljYXRpb24gb3IgYSBwcm9maWxlLlxyXG4gICAqL1xyXG4gIEludmFsaWRDb250ZW50OiBcImludmFsaWRcIixcclxuICAvKipcclxuICAgKiBpbnZhcmlhbnQ6IEEgY29udGVudCB2YWxpZGF0aW9uIHJ1bGUgZmFpbGVkIC0gZS5nLiBhIHNjaGVtYXRyb24gcnVsZS5cclxuICAgKi9cclxuICBWYWxpZGF0aW9uUnVsZUZhaWxlZDogXCJpbnZhcmlhbnRcIixcclxuICAvKipcclxuICAgKiBsb2NrLWVycm9yOiBBIHJlc291cmNlL3JlY29yZCBsb2NraW5nIGZhaWx1cmUgKHVzdWFsbHkgaW4gYW4gdW5kZXJseWluZyBkYXRhYmFzZSkuXHJcbiAgICovXHJcbiAgTG9ja0Vycm9yOiBcImxvY2stZXJyb3JcIixcclxuICAvKipcclxuICAgKiBsb2dpbjogVGhlIGNsaWVudCBuZWVkcyB0byBpbml0aWF0ZSBhbiBhdXRoZW50aWNhdGlvbiBwcm9jZXNzLlxyXG4gICAqL1xyXG4gIExvZ2luUmVxdWlyZWQ6IFwibG9naW5cIixcclxuICAvKipcclxuICAgKiBuby1zdG9yZTogVGhlIHBlcnNpc3RlbnQgc3RvcmUgaXMgdW5hdmFpbGFibGU7IGUuZy4gdGhlIGRhdGFiYXNlIGlzIGRvd24gZm9yIG1haW50ZW5hbmNlIG9yIHNpbWlsYXIgYWN0aW9uLlxyXG4gICAqL1xyXG4gIE5vU3RvcmVBdmFpbGFibGU6IFwibm8tc3RvcmVcIixcclxuICAvKipcclxuICAgKiBub3QtZm91bmQ6IFRoZSByZWZlcmVuY2UgcHJvdmlkZWQgd2FzIG5vdCBmb3VuZC4gSW4gYSBwdXJlIFJFU1RmdWwgZW52aXJvbm1lbnQsIHRoaXMgd291bGQgYmUgYW4gSFRUUCA0MDQgZXJyb3IsIGJ1dCB0aGlzIGNvZGUgbWF5IGJlIHVzZWQgd2hlcmUgdGhlIGNvbnRlbnQgaXMgbm90IGZvdW5kIGZ1cnRoZXIgaW50byB0aGUgYXBwbGljYXRpb24gYXJjaGl0ZWN0dXJlLlxyXG4gICAqL1xyXG4gIE5vdEZvdW5kOiBcIm5vdC1mb3VuZFwiLFxyXG4gIC8qKlxyXG4gICAqIG5vdC1zdXBwb3J0ZWQ6IFRoZSByZXNvdXJjZSBvciBwcm9maWxlIGlzIG5vdCBzdXBwb3J0ZWQuXHJcbiAgICovXHJcbiAgQ29udGVudE5vdFN1cHBvcnRlZDogXCJub3Qtc3VwcG9ydGVkXCIsXHJcbiAgLyoqXHJcbiAgICogcHJvY2Vzc2luZzogUHJvY2Vzc2luZyBpc3N1ZXMuIFRoZXNlIGFyZSBleHBlY3RlZCB0byBiZSBmaW5hbCBlLmcuIHRoZXJlIGlzIG5vIHBvaW50IHJlc3VibWl0dGluZyB0aGUgc2FtZSBjb250ZW50IHVuY2hhbmdlZC5cclxuICAgKi9cclxuICBQcm9jZXNzaW5nRmFpbHVyZTogXCJwcm9jZXNzaW5nXCIsXHJcbiAgLyoqXHJcbiAgICogcmVxdWlyZWQ6IEEgcmVxdWlyZWQgZWxlbWVudCBpcyBtaXNzaW5nLlxyXG4gICAqL1xyXG4gIFJlcXVpcmVkRWxlbWVudE1pc3Npbmc6IFwicmVxdWlyZWRcIixcclxuICAvKipcclxuICAgKiBzZWN1cml0eTogQW4gYXV0aGVudGljYXRpb24vYXV0aG9yaXphdGlvbi9wZXJtaXNzaW9ucyBpc3N1ZSBvZiBzb21lIGtpbmQuXHJcbiAgICovXHJcbiAgU2VjdXJpdHlQcm9ibGVtOiBcInNlY3VyaXR5XCIsXHJcbiAgLyoqXHJcbiAgICogc3RydWN0dXJlOiBBIHN0cnVjdHVyYWwgaXNzdWUgaW4gdGhlIGNvbnRlbnQgc3VjaCBhcyB3cm9uZyBuYW1lc3BhY2UsIG9yIHVuYWJsZSB0byBwYXJzZSB0aGUgY29udGVudCBjb21wbGV0ZWx5LCBvciBpbnZhbGlkIGpzb24gc3ludGF4LlxyXG4gICAqL1xyXG4gIFN0cnVjdHVyYWxJc3N1ZTogXCJzdHJ1Y3R1cmVcIixcclxuICAvKipcclxuICAgKiBzdXBwcmVzc2VkOiBTb21lIGluZm9ybWF0aW9uIHdhcyBub3Qgb3IgbWF5IG5vdCBoYXZlIGJlZW4gcmV0dXJuZWQgZHVlIHRvIGJ1c2luZXNzIHJ1bGVzLCBjb25zZW50IG9yIHByaXZhY3kgcnVsZXMsIG9yIGFjY2VzcyBwZXJtaXNzaW9uIGNvbnN0cmFpbnRzLiAgVGhpcyBpbmZvcm1hdGlvbiBtYXkgYmUgYWNjZXNzaWJsZSB0aHJvdWdoIGFsdGVybmF0ZSBwcm9jZXNzZXMuXHJcbiAgICovXHJcbiAgSW5mb3JtYXRpb25TdXBwcmVzc2VkOiBcInN1cHByZXNzZWRcIixcclxuICAvKipcclxuICAgKiB0aHJvdHRsZWQ6IFRoZSBzeXN0ZW0gaXMgbm90IHByZXBhcmVkIHRvIGhhbmRsZSB0aGlzIHJlcXVlc3QgZHVlIHRvIGxvYWQgbWFuYWdlbWVudC5cclxuICAgKi9cclxuICBUaHJvdHRsZWQ6IFwidGhyb3R0bGVkXCIsXHJcbiAgLyoqXHJcbiAgICogdGltZW91dDogQW4gaW50ZXJuYWwgdGltZW91dCBoYXMgb2NjdXJyZWQuXHJcbiAgICovXHJcbiAgVGltZW91dDogXCJ0aW1lb3V0XCIsXHJcbiAgLyoqXHJcbiAgICogdG9vLWNvc3RseTogVGhlIG9wZXJhdGlvbiB3YXMgc3RvcHBlZCB0byBwcm90ZWN0IHNlcnZlciByZXNvdXJjZXM7IGUuZy4gYSByZXF1ZXN0IGZvciBhIHZhbHVlIHNldCBleHBhbnNpb24gb24gYWxsIG9mIFNOT01FRCBDVC5cclxuICAgKi9cclxuICBPcGVyYXRpb25Ub29Db3N0bHk6IFwidG9vLWNvc3RseVwiLFxyXG4gIC8qKlxyXG4gICAqIHRvby1sb25nOiBQcm92aWRlZCBjb250ZW50IGlzIHRvbyBsb25nICh0eXBpY2FsbHksIHRoaXMgaXMgYSBkZW5pYWwgb2Ygc2VydmljZSBwcm90ZWN0aW9uIHR5cGUgb2YgZXJyb3IpLlxyXG4gICAqL1xyXG4gIENvbnRlbnRUb29Mb25nOiBcInRvby1sb25nXCIsXHJcbiAgLyoqXHJcbiAgICogdHJhbnNpZW50OiBUcmFuc2llbnQgcHJvY2Vzc2luZyBpc3N1ZXMuIFRoZSBzeXN0ZW0gcmVjZWl2aW5nIHRoZSBlcnJvciBtYXkgYmUgYWJsZSB0byByZXN1Ym1pdCB0aGUgc2FtZSBjb250ZW50IG9uY2UgYW4gdW5kZXJseWluZyBpc3N1ZSBpcyByZXNvbHZlZC5cclxuICAgKi9cclxuICBUcmFuc2llbnRJc3N1ZTogXCJ0cmFuc2llbnRcIixcclxuICAvKipcclxuICAgKiB1bmtub3duOiBUaGUgdXNlciBvciBzeXN0ZW0gd2FzIG5vdCBhYmxlIHRvIGJlIGF1dGhlbnRpY2F0ZWQgKGVpdGhlciB0aGVyZSBpcyBubyBwcm9jZXNzLCBvciB0aGUgcHJvZmVycmVkIHRva2VuIGlzIHVuYWNjZXB0YWJsZSkuXHJcbiAgICovXHJcbiAgVW5rbm93blVzZXI6IFwidW5rbm93blwiLFxyXG4gIC8qKlxyXG4gICAqIHZhbHVlOiBBbiBlbGVtZW50IHZhbHVlIGlzIGludmFsaWQuXHJcbiAgICovXHJcbiAgRWxlbWVudFZhbHVlSW52YWxpZDogXCJ2YWx1ZVwiLFxyXG59IGFzIGNvbnN0O1xyXG5cclxuLyoqXHJcbiAqIEEgY29kZSB0aGF0IGRlc2NyaWJlcyB0aGUgdHlwZSBvZiBpc3N1ZS5cclxuICovXHJcbmV4cG9ydCB0eXBlIElzc3VlVHlwZUNvZGVUeXBlID0gdHlwZW9mIElzc3VlVHlwZUNvZGVzW2tleW9mIHR5cGVvZiBJc3N1ZVR5cGVDb2Rlc107XHJcbiJdfQ==