// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/issue-type|4.3.0
/**
 * A code that describes the type of issue.
 */
export const IssueTypeCodes = {
    /**
     * business-rule: The content/operation failed to pass some business rule and so could not proceed.
     */
    BusinessRuleViolation: "business-rule",
    /**
     * code-invalid: The code or system could not be understood, or it was not valid in the context of a particular ValueSet.code.
     */
    InvalidCode: "code-invalid",
    /**
     * conflict: Content could not be accepted because of an edit conflict (i.e. version aware updates). (In a pure RESTful environment, this would be an HTTP 409 error, but this code may be used where the conflict is discovered further into the application architecture.).
     */
    EditVersionConflict: "conflict",
    /**
     * deleted: The reference pointed to content (usually a resource) that has been deleted.
     */
    Deleted: "deleted",
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
     * incomplete: Not all data sources typically accessed could be reached or responded in time, so the returned information might not be complete (applies to search interactions and some operations).
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
     * multiple-matches: Multiple matching records were found when the operation required only one match.
     */
    MultipleMatches: "multiple-matches",
    /**
     * no-store: The persistent store is unavailable; e.g. the database is down for maintenance or similar action, and the interaction or operation cannot be processed.
     */
    NoStoreAvailable: "no-store",
    /**
     * not-found: The reference provided was not found. In a pure RESTful environment, this would be an HTTP 404 error, but this code may be used where the content is not found further into the application architecture.
     */
    NotFound: "not-found",
    /**
     * not-supported: The interaction, operation, resource or profile is not supported.
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
     * structure: A structural issue in the content such as wrong namespace, unable to parse the content completely, invalid syntax, etc.
     */
    StructuralIssue: "structure",
    /**
     * suppressed: Some information was not or might not have been returned due to business rules, consent or privacy rules, or access permission constraints.  This information may be accessible through alternate processes.
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
     * transient: Transient processing issues. The system receiving the message may be able to resubmit the same content once an underlying issue is resolved.
     */
    TransientIssue: "transient",
    /**
     * unknown: The user or system was not able to be authenticated (either there is no process, or the proferred token is unacceptable).
     */
    UnknownUser: "unknown",
    /**
     * value: An element or header value is invalid.
     */
    ElementValueInvalid: "value",
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSXNzdWVUeXBlQ29kZXMuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyVmFsdWVTZXRzL0lzc3VlVHlwZUNvZGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQixnREFBZ0Q7QUFDaEQsa0NBQWtDO0FBQ2xDLCtEQUErRDtBQUUvRDs7R0FFRztBQUNILE1BQU0sQ0FBQyxNQUFNLGNBQWMsR0FBRztJQUM1Qjs7T0FFRztJQUNILHFCQUFxQixFQUFFLGVBQWU7SUFDdEM7O09BRUc7SUFDSCxXQUFXLEVBQUUsY0FBYztJQUMzQjs7T0FFRztJQUNILG1CQUFtQixFQUFFLFVBQVU7SUFDL0I7O09BRUc7SUFDSCxPQUFPLEVBQUUsU0FBUztJQUNsQjs7T0FFRztJQUNILFNBQVMsRUFBRSxXQUFXO0lBQ3RCOztPQUVHO0lBQ0gsU0FBUyxFQUFFLFdBQVc7SUFDdEI7O09BRUc7SUFDSCxjQUFjLEVBQUUsU0FBUztJQUN6Qjs7T0FFRztJQUNILHFCQUFxQixFQUFFLFdBQVc7SUFDbEM7O09BRUc7SUFDSCxTQUFTLEVBQUUsV0FBVztJQUN0Qjs7T0FFRztJQUNILGlCQUFpQixFQUFFLFlBQVk7SUFDL0I7O09BRUc7SUFDSCxpQkFBaUIsRUFBRSxlQUFlO0lBQ2xDOztPQUVHO0lBQ0gsY0FBYyxFQUFFLFNBQVM7SUFDekI7O09BRUc7SUFDSCxvQkFBb0IsRUFBRSxXQUFXO0lBQ2pDOztPQUVHO0lBQ0gsU0FBUyxFQUFFLFlBQVk7SUFDdkI7O09BRUc7SUFDSCxhQUFhLEVBQUUsT0FBTztJQUN0Qjs7T0FFRztJQUNILGVBQWUsRUFBRSxrQkFBa0I7SUFDbkM7O09BRUc7SUFDSCxnQkFBZ0IsRUFBRSxVQUFVO0lBQzVCOztPQUVHO0lBQ0gsUUFBUSxFQUFFLFdBQVc7SUFDckI7O09BRUc7SUFDSCxtQkFBbUIsRUFBRSxlQUFlO0lBQ3BDOztPQUVHO0lBQ0gsaUJBQWlCLEVBQUUsWUFBWTtJQUMvQjs7T0FFRztJQUNILHNCQUFzQixFQUFFLFVBQVU7SUFDbEM7O09BRUc7SUFDSCxlQUFlLEVBQUUsVUFBVTtJQUMzQjs7T0FFRztJQUNILGVBQWUsRUFBRSxXQUFXO0lBQzVCOztPQUVHO0lBQ0gscUJBQXFCLEVBQUUsWUFBWTtJQUNuQzs7T0FFRztJQUNILFNBQVMsRUFBRSxXQUFXO0lBQ3RCOztPQUVHO0lBQ0gsT0FBTyxFQUFFLFNBQVM7SUFDbEI7O09BRUc7SUFDSCxrQkFBa0IsRUFBRSxZQUFZO0lBQ2hDOztPQUVHO0lBQ0gsY0FBYyxFQUFFLFVBQVU7SUFDMUI7O09BRUc7SUFDSCxjQUFjLEVBQUUsV0FBVztJQUMzQjs7T0FFRztJQUNILFdBQVcsRUFBRSxTQUFTO0lBQ3RCOztPQUVHO0lBQ0gsbUJBQW1CLEVBQUUsT0FBTztDQUNwQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnI0Yi5jb3JlIHZlcnNpb246IDQuMy4wXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBWYWx1ZVNldDogaHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC9pc3N1ZS10eXBlfDQuMy4wXHJcblxyXG4vKipcclxuICogQSBjb2RlIHRoYXQgZGVzY3JpYmVzIHRoZSB0eXBlIG9mIGlzc3VlLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IElzc3VlVHlwZUNvZGVzID0ge1xyXG4gIC8qKlxyXG4gICAqIGJ1c2luZXNzLXJ1bGU6IFRoZSBjb250ZW50L29wZXJhdGlvbiBmYWlsZWQgdG8gcGFzcyBzb21lIGJ1c2luZXNzIHJ1bGUgYW5kIHNvIGNvdWxkIG5vdCBwcm9jZWVkLlxyXG4gICAqL1xyXG4gIEJ1c2luZXNzUnVsZVZpb2xhdGlvbjogXCJidXNpbmVzcy1ydWxlXCIsXHJcbiAgLyoqXHJcbiAgICogY29kZS1pbnZhbGlkOiBUaGUgY29kZSBvciBzeXN0ZW0gY291bGQgbm90IGJlIHVuZGVyc3Rvb2QsIG9yIGl0IHdhcyBub3QgdmFsaWQgaW4gdGhlIGNvbnRleHQgb2YgYSBwYXJ0aWN1bGFyIFZhbHVlU2V0LmNvZGUuXHJcbiAgICovXHJcbiAgSW52YWxpZENvZGU6IFwiY29kZS1pbnZhbGlkXCIsXHJcbiAgLyoqXHJcbiAgICogY29uZmxpY3Q6IENvbnRlbnQgY291bGQgbm90IGJlIGFjY2VwdGVkIGJlY2F1c2Ugb2YgYW4gZWRpdCBjb25mbGljdCAoaS5lLiB2ZXJzaW9uIGF3YXJlIHVwZGF0ZXMpLiAoSW4gYSBwdXJlIFJFU1RmdWwgZW52aXJvbm1lbnQsIHRoaXMgd291bGQgYmUgYW4gSFRUUCA0MDkgZXJyb3IsIGJ1dCB0aGlzIGNvZGUgbWF5IGJlIHVzZWQgd2hlcmUgdGhlIGNvbmZsaWN0IGlzIGRpc2NvdmVyZWQgZnVydGhlciBpbnRvIHRoZSBhcHBsaWNhdGlvbiBhcmNoaXRlY3R1cmUuKS5cclxuICAgKi9cclxuICBFZGl0VmVyc2lvbkNvbmZsaWN0OiBcImNvbmZsaWN0XCIsXHJcbiAgLyoqXHJcbiAgICogZGVsZXRlZDogVGhlIHJlZmVyZW5jZSBwb2ludGVkIHRvIGNvbnRlbnQgKHVzdWFsbHkgYSByZXNvdXJjZSkgdGhhdCBoYXMgYmVlbiBkZWxldGVkLlxyXG4gICAqL1xyXG4gIERlbGV0ZWQ6IFwiZGVsZXRlZFwiLFxyXG4gIC8qKlxyXG4gICAqIGR1cGxpY2F0ZTogQW4gYXR0ZW1wdCB3YXMgbWFkZSB0byBjcmVhdGUgYSBkdXBsaWNhdGUgcmVjb3JkLlxyXG4gICAqL1xyXG4gIER1cGxpY2F0ZTogXCJkdXBsaWNhdGVcIixcclxuICAvKipcclxuICAgKiBleGNlcHRpb246IEFuIHVuZXhwZWN0ZWQgaW50ZXJuYWwgZXJyb3IgaGFzIG9jY3VycmVkLlxyXG4gICAqL1xyXG4gIEV4Y2VwdGlvbjogXCJleGNlcHRpb25cIixcclxuICAvKipcclxuICAgKiBleHBpcmVkOiBVc2VyIHNlc3Npb24gZXhwaXJlZDsgYSBsb2dpbiBtYXkgYmUgcmVxdWlyZWQuXHJcbiAgICovXHJcbiAgU2Vzc2lvbkV4cGlyZWQ6IFwiZXhwaXJlZFwiLFxyXG4gIC8qKlxyXG4gICAqIGV4dGVuc2lvbjogQW4gZXh0ZW5zaW9uIHdhcyBmb3VuZCB0aGF0IHdhcyBub3QgYWNjZXB0YWJsZSwgY291bGQgbm90IGJlIHJlc29sdmVkLCBvciBhIG1vZGlmaWVyRXh0ZW5zaW9uIHdhcyBub3QgcmVjb2duaXplZC5cclxuICAgKi9cclxuICBVbmFjY2VwdGFibGVFeHRlbnNpb246IFwiZXh0ZW5zaW9uXCIsXHJcbiAgLyoqXHJcbiAgICogZm9yYmlkZGVuOiBUaGUgdXNlciBkb2VzIG5vdCBoYXZlIHRoZSByaWdodHMgdG8gcGVyZm9ybSB0aGlzIGFjdGlvbi5cclxuICAgKi9cclxuICBGb3JiaWRkZW46IFwiZm9yYmlkZGVuXCIsXHJcbiAgLyoqXHJcbiAgICogaW5jb21wbGV0ZTogTm90IGFsbCBkYXRhIHNvdXJjZXMgdHlwaWNhbGx5IGFjY2Vzc2VkIGNvdWxkIGJlIHJlYWNoZWQgb3IgcmVzcG9uZGVkIGluIHRpbWUsIHNvIHRoZSByZXR1cm5lZCBpbmZvcm1hdGlvbiBtaWdodCBub3QgYmUgY29tcGxldGUgKGFwcGxpZXMgdG8gc2VhcmNoIGludGVyYWN0aW9ucyBhbmQgc29tZSBvcGVyYXRpb25zKS5cclxuICAgKi9cclxuICBJbmNvbXBsZXRlUmVzdWx0czogXCJpbmNvbXBsZXRlXCIsXHJcbiAgLyoqXHJcbiAgICogaW5mb3JtYXRpb25hbDogQSBtZXNzYWdlIHVucmVsYXRlZCB0byB0aGUgcHJvY2Vzc2luZyBzdWNjZXNzIG9mIHRoZSBjb21wbGV0ZWQgb3BlcmF0aW9uIChleGFtcGxlcyBvZiB0aGUgbGF0dGVyIGluY2x1ZGUgdGhpbmdzIGxpa2UgcmVtaW5kZXJzIG9mIHBhc3N3b3JkIGV4cGlyeSwgc3lzdGVtIG1haW50ZW5hbmNlIHRpbWVzLCBldGMuKS5cclxuICAgKi9cclxuICBJbmZvcm1hdGlvbmFsTm90ZTogXCJpbmZvcm1hdGlvbmFsXCIsXHJcbiAgLyoqXHJcbiAgICogaW52YWxpZDogQ29udGVudCBpbnZhbGlkIGFnYWluc3QgdGhlIHNwZWNpZmljYXRpb24gb3IgYSBwcm9maWxlLlxyXG4gICAqL1xyXG4gIEludmFsaWRDb250ZW50OiBcImludmFsaWRcIixcclxuICAvKipcclxuICAgKiBpbnZhcmlhbnQ6IEEgY29udGVudCB2YWxpZGF0aW9uIHJ1bGUgZmFpbGVkIC0gZS5nLiBhIHNjaGVtYXRyb24gcnVsZS5cclxuICAgKi9cclxuICBWYWxpZGF0aW9uUnVsZUZhaWxlZDogXCJpbnZhcmlhbnRcIixcclxuICAvKipcclxuICAgKiBsb2NrLWVycm9yOiBBIHJlc291cmNlL3JlY29yZCBsb2NraW5nIGZhaWx1cmUgKHVzdWFsbHkgaW4gYW4gdW5kZXJseWluZyBkYXRhYmFzZSkuXHJcbiAgICovXHJcbiAgTG9ja0Vycm9yOiBcImxvY2stZXJyb3JcIixcclxuICAvKipcclxuICAgKiBsb2dpbjogVGhlIGNsaWVudCBuZWVkcyB0byBpbml0aWF0ZSBhbiBhdXRoZW50aWNhdGlvbiBwcm9jZXNzLlxyXG4gICAqL1xyXG4gIExvZ2luUmVxdWlyZWQ6IFwibG9naW5cIixcclxuICAvKipcclxuICAgKiBtdWx0aXBsZS1tYXRjaGVzOiBNdWx0aXBsZSBtYXRjaGluZyByZWNvcmRzIHdlcmUgZm91bmQgd2hlbiB0aGUgb3BlcmF0aW9uIHJlcXVpcmVkIG9ubHkgb25lIG1hdGNoLlxyXG4gICAqL1xyXG4gIE11bHRpcGxlTWF0Y2hlczogXCJtdWx0aXBsZS1tYXRjaGVzXCIsXHJcbiAgLyoqXHJcbiAgICogbm8tc3RvcmU6IFRoZSBwZXJzaXN0ZW50IHN0b3JlIGlzIHVuYXZhaWxhYmxlOyBlLmcuIHRoZSBkYXRhYmFzZSBpcyBkb3duIGZvciBtYWludGVuYW5jZSBvciBzaW1pbGFyIGFjdGlvbiwgYW5kIHRoZSBpbnRlcmFjdGlvbiBvciBvcGVyYXRpb24gY2Fubm90IGJlIHByb2Nlc3NlZC5cclxuICAgKi9cclxuICBOb1N0b3JlQXZhaWxhYmxlOiBcIm5vLXN0b3JlXCIsXHJcbiAgLyoqXHJcbiAgICogbm90LWZvdW5kOiBUaGUgcmVmZXJlbmNlIHByb3ZpZGVkIHdhcyBub3QgZm91bmQuIEluIGEgcHVyZSBSRVNUZnVsIGVudmlyb25tZW50LCB0aGlzIHdvdWxkIGJlIGFuIEhUVFAgNDA0IGVycm9yLCBidXQgdGhpcyBjb2RlIG1heSBiZSB1c2VkIHdoZXJlIHRoZSBjb250ZW50IGlzIG5vdCBmb3VuZCBmdXJ0aGVyIGludG8gdGhlIGFwcGxpY2F0aW9uIGFyY2hpdGVjdHVyZS5cclxuICAgKi9cclxuICBOb3RGb3VuZDogXCJub3QtZm91bmRcIixcclxuICAvKipcclxuICAgKiBub3Qtc3VwcG9ydGVkOiBUaGUgaW50ZXJhY3Rpb24sIG9wZXJhdGlvbiwgcmVzb3VyY2Ugb3IgcHJvZmlsZSBpcyBub3Qgc3VwcG9ydGVkLlxyXG4gICAqL1xyXG4gIENvbnRlbnROb3RTdXBwb3J0ZWQ6IFwibm90LXN1cHBvcnRlZFwiLFxyXG4gIC8qKlxyXG4gICAqIHByb2Nlc3Npbmc6IFByb2Nlc3NpbmcgaXNzdWVzLiBUaGVzZSBhcmUgZXhwZWN0ZWQgdG8gYmUgZmluYWwgZS5nLiB0aGVyZSBpcyBubyBwb2ludCByZXN1Ym1pdHRpbmcgdGhlIHNhbWUgY29udGVudCB1bmNoYW5nZWQuXHJcbiAgICovXHJcbiAgUHJvY2Vzc2luZ0ZhaWx1cmU6IFwicHJvY2Vzc2luZ1wiLFxyXG4gIC8qKlxyXG4gICAqIHJlcXVpcmVkOiBBIHJlcXVpcmVkIGVsZW1lbnQgaXMgbWlzc2luZy5cclxuICAgKi9cclxuICBSZXF1aXJlZEVsZW1lbnRNaXNzaW5nOiBcInJlcXVpcmVkXCIsXHJcbiAgLyoqXHJcbiAgICogc2VjdXJpdHk6IEFuIGF1dGhlbnRpY2F0aW9uL2F1dGhvcml6YXRpb24vcGVybWlzc2lvbnMgaXNzdWUgb2Ygc29tZSBraW5kLlxyXG4gICAqL1xyXG4gIFNlY3VyaXR5UHJvYmxlbTogXCJzZWN1cml0eVwiLFxyXG4gIC8qKlxyXG4gICAqIHN0cnVjdHVyZTogQSBzdHJ1Y3R1cmFsIGlzc3VlIGluIHRoZSBjb250ZW50IHN1Y2ggYXMgd3JvbmcgbmFtZXNwYWNlLCB1bmFibGUgdG8gcGFyc2UgdGhlIGNvbnRlbnQgY29tcGxldGVseSwgaW52YWxpZCBzeW50YXgsIGV0Yy5cclxuICAgKi9cclxuICBTdHJ1Y3R1cmFsSXNzdWU6IFwic3RydWN0dXJlXCIsXHJcbiAgLyoqXHJcbiAgICogc3VwcHJlc3NlZDogU29tZSBpbmZvcm1hdGlvbiB3YXMgbm90IG9yIG1pZ2h0IG5vdCBoYXZlIGJlZW4gcmV0dXJuZWQgZHVlIHRvIGJ1c2luZXNzIHJ1bGVzLCBjb25zZW50IG9yIHByaXZhY3kgcnVsZXMsIG9yIGFjY2VzcyBwZXJtaXNzaW9uIGNvbnN0cmFpbnRzLiAgVGhpcyBpbmZvcm1hdGlvbiBtYXkgYmUgYWNjZXNzaWJsZSB0aHJvdWdoIGFsdGVybmF0ZSBwcm9jZXNzZXMuXHJcbiAgICovXHJcbiAgSW5mb3JtYXRpb25TdXBwcmVzc2VkOiBcInN1cHByZXNzZWRcIixcclxuICAvKipcclxuICAgKiB0aHJvdHRsZWQ6IFRoZSBzeXN0ZW0gaXMgbm90IHByZXBhcmVkIHRvIGhhbmRsZSB0aGlzIHJlcXVlc3QgZHVlIHRvIGxvYWQgbWFuYWdlbWVudC5cclxuICAgKi9cclxuICBUaHJvdHRsZWQ6IFwidGhyb3R0bGVkXCIsXHJcbiAgLyoqXHJcbiAgICogdGltZW91dDogQW4gaW50ZXJuYWwgdGltZW91dCBoYXMgb2NjdXJyZWQuXHJcbiAgICovXHJcbiAgVGltZW91dDogXCJ0aW1lb3V0XCIsXHJcbiAgLyoqXHJcbiAgICogdG9vLWNvc3RseTogVGhlIG9wZXJhdGlvbiB3YXMgc3RvcHBlZCB0byBwcm90ZWN0IHNlcnZlciByZXNvdXJjZXM7IGUuZy4gYSByZXF1ZXN0IGZvciBhIHZhbHVlIHNldCBleHBhbnNpb24gb24gYWxsIG9mIFNOT01FRCBDVC5cclxuICAgKi9cclxuICBPcGVyYXRpb25Ub29Db3N0bHk6IFwidG9vLWNvc3RseVwiLFxyXG4gIC8qKlxyXG4gICAqIHRvby1sb25nOiBQcm92aWRlZCBjb250ZW50IGlzIHRvbyBsb25nICh0eXBpY2FsbHksIHRoaXMgaXMgYSBkZW5pYWwgb2Ygc2VydmljZSBwcm90ZWN0aW9uIHR5cGUgb2YgZXJyb3IpLlxyXG4gICAqL1xyXG4gIENvbnRlbnRUb29Mb25nOiBcInRvby1sb25nXCIsXHJcbiAgLyoqXHJcbiAgICogdHJhbnNpZW50OiBUcmFuc2llbnQgcHJvY2Vzc2luZyBpc3N1ZXMuIFRoZSBzeXN0ZW0gcmVjZWl2aW5nIHRoZSBtZXNzYWdlIG1heSBiZSBhYmxlIHRvIHJlc3VibWl0IHRoZSBzYW1lIGNvbnRlbnQgb25jZSBhbiB1bmRlcmx5aW5nIGlzc3VlIGlzIHJlc29sdmVkLlxyXG4gICAqL1xyXG4gIFRyYW5zaWVudElzc3VlOiBcInRyYW5zaWVudFwiLFxyXG4gIC8qKlxyXG4gICAqIHVua25vd246IFRoZSB1c2VyIG9yIHN5c3RlbSB3YXMgbm90IGFibGUgdG8gYmUgYXV0aGVudGljYXRlZCAoZWl0aGVyIHRoZXJlIGlzIG5vIHByb2Nlc3MsIG9yIHRoZSBwcm9mZXJyZWQgdG9rZW4gaXMgdW5hY2NlcHRhYmxlKS5cclxuICAgKi9cclxuICBVbmtub3duVXNlcjogXCJ1bmtub3duXCIsXHJcbiAgLyoqXHJcbiAgICogdmFsdWU6IEFuIGVsZW1lbnQgb3IgaGVhZGVyIHZhbHVlIGlzIGludmFsaWQuXHJcbiAgICovXHJcbiAgRWxlbWVudFZhbHVlSW52YWxpZDogXCJ2YWx1ZVwiLFxyXG59IGFzIGNvbnN0O1xyXG5cclxuLyoqXHJcbiAqIEEgY29kZSB0aGF0IGRlc2NyaWJlcyB0aGUgdHlwZSBvZiBpc3N1ZS5cclxuICovXHJcbmV4cG9ydCB0eXBlIElzc3VlVHlwZUNvZGVUeXBlID0gdHlwZW9mIElzc3VlVHlwZUNvZGVzW2tleW9mIHR5cGVvZiBJc3N1ZVR5cGVDb2Rlc107XHJcbiJdfQ==