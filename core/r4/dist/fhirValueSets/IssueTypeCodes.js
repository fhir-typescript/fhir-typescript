// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/issue-type|4.0.1
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSXNzdWVUeXBlQ29kZXMuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyVmFsdWVTZXRzL0lzc3VlVHlwZUNvZGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQiwrQ0FBK0M7QUFDL0Msa0NBQWtDO0FBQ2xDLCtEQUErRDtBQUUvRDs7R0FFRztBQUNILE1BQU0sQ0FBQyxNQUFNLGNBQWMsR0FBRztJQUM1Qjs7T0FFRztJQUNILHFCQUFxQixFQUFFLGVBQWU7SUFDdEM7O09BRUc7SUFDSCxXQUFXLEVBQUUsY0FBYztJQUMzQjs7T0FFRztJQUNILG1CQUFtQixFQUFFLFVBQVU7SUFDL0I7O09BRUc7SUFDSCxPQUFPLEVBQUUsU0FBUztJQUNsQjs7T0FFRztJQUNILFNBQVMsRUFBRSxXQUFXO0lBQ3RCOztPQUVHO0lBQ0gsU0FBUyxFQUFFLFdBQVc7SUFDdEI7O09BRUc7SUFDSCxjQUFjLEVBQUUsU0FBUztJQUN6Qjs7T0FFRztJQUNILHFCQUFxQixFQUFFLFdBQVc7SUFDbEM7O09BRUc7SUFDSCxTQUFTLEVBQUUsV0FBVztJQUN0Qjs7T0FFRztJQUNILGlCQUFpQixFQUFFLFlBQVk7SUFDL0I7O09BRUc7SUFDSCxpQkFBaUIsRUFBRSxlQUFlO0lBQ2xDOztPQUVHO0lBQ0gsY0FBYyxFQUFFLFNBQVM7SUFDekI7O09BRUc7SUFDSCxvQkFBb0IsRUFBRSxXQUFXO0lBQ2pDOztPQUVHO0lBQ0gsU0FBUyxFQUFFLFlBQVk7SUFDdkI7O09BRUc7SUFDSCxhQUFhLEVBQUUsT0FBTztJQUN0Qjs7T0FFRztJQUNILGVBQWUsRUFBRSxrQkFBa0I7SUFDbkM7O09BRUc7SUFDSCxnQkFBZ0IsRUFBRSxVQUFVO0lBQzVCOztPQUVHO0lBQ0gsUUFBUSxFQUFFLFdBQVc7SUFDckI7O09BRUc7SUFDSCxtQkFBbUIsRUFBRSxlQUFlO0lBQ3BDOztPQUVHO0lBQ0gsaUJBQWlCLEVBQUUsWUFBWTtJQUMvQjs7T0FFRztJQUNILHNCQUFzQixFQUFFLFVBQVU7SUFDbEM7O09BRUc7SUFDSCxlQUFlLEVBQUUsVUFBVTtJQUMzQjs7T0FFRztJQUNILGVBQWUsRUFBRSxXQUFXO0lBQzVCOztPQUVHO0lBQ0gscUJBQXFCLEVBQUUsWUFBWTtJQUNuQzs7T0FFRztJQUNILFNBQVMsRUFBRSxXQUFXO0lBQ3RCOztPQUVHO0lBQ0gsT0FBTyxFQUFFLFNBQVM7SUFDbEI7O09BRUc7SUFDSCxrQkFBa0IsRUFBRSxZQUFZO0lBQ2hDOztPQUVHO0lBQ0gsY0FBYyxFQUFFLFVBQVU7SUFDMUI7O09BRUc7SUFDSCxjQUFjLEVBQUUsV0FBVztJQUMzQjs7T0FFRztJQUNILFdBQVcsRUFBRSxTQUFTO0lBQ3RCOztPQUVHO0lBQ0gsbUJBQW1CLEVBQUUsT0FBTztDQUNwQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnI0LmNvcmUgdmVyc2lvbjogNC4wLjFcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFZhbHVlU2V0OiBodHRwOi8vaGw3Lm9yZy9maGlyL1ZhbHVlU2V0L2lzc3VlLXR5cGV8NC4wLjFcclxuXHJcbi8qKlxyXG4gKiBBIGNvZGUgdGhhdCBkZXNjcmliZXMgdGhlIHR5cGUgb2YgaXNzdWUuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgSXNzdWVUeXBlQ29kZXMgPSB7XHJcbiAgLyoqXHJcbiAgICogYnVzaW5lc3MtcnVsZTogVGhlIGNvbnRlbnQvb3BlcmF0aW9uIGZhaWxlZCB0byBwYXNzIHNvbWUgYnVzaW5lc3MgcnVsZSBhbmQgc28gY291bGQgbm90IHByb2NlZWQuXHJcbiAgICovXHJcbiAgQnVzaW5lc3NSdWxlVmlvbGF0aW9uOiBcImJ1c2luZXNzLXJ1bGVcIixcclxuICAvKipcclxuICAgKiBjb2RlLWludmFsaWQ6IFRoZSBjb2RlIG9yIHN5c3RlbSBjb3VsZCBub3QgYmUgdW5kZXJzdG9vZCwgb3IgaXQgd2FzIG5vdCB2YWxpZCBpbiB0aGUgY29udGV4dCBvZiBhIHBhcnRpY3VsYXIgVmFsdWVTZXQuY29kZS5cclxuICAgKi9cclxuICBJbnZhbGlkQ29kZTogXCJjb2RlLWludmFsaWRcIixcclxuICAvKipcclxuICAgKiBjb25mbGljdDogQ29udGVudCBjb3VsZCBub3QgYmUgYWNjZXB0ZWQgYmVjYXVzZSBvZiBhbiBlZGl0IGNvbmZsaWN0IChpLmUuIHZlcnNpb24gYXdhcmUgdXBkYXRlcykuIChJbiBhIHB1cmUgUkVTVGZ1bCBlbnZpcm9ubWVudCwgdGhpcyB3b3VsZCBiZSBhbiBIVFRQIDQwOSBlcnJvciwgYnV0IHRoaXMgY29kZSBtYXkgYmUgdXNlZCB3aGVyZSB0aGUgY29uZmxpY3QgaXMgZGlzY292ZXJlZCBmdXJ0aGVyIGludG8gdGhlIGFwcGxpY2F0aW9uIGFyY2hpdGVjdHVyZS4pLlxyXG4gICAqL1xyXG4gIEVkaXRWZXJzaW9uQ29uZmxpY3Q6IFwiY29uZmxpY3RcIixcclxuICAvKipcclxuICAgKiBkZWxldGVkOiBUaGUgcmVmZXJlbmNlIHBvaW50ZWQgdG8gY29udGVudCAodXN1YWxseSBhIHJlc291cmNlKSB0aGF0IGhhcyBiZWVuIGRlbGV0ZWQuXHJcbiAgICovXHJcbiAgRGVsZXRlZDogXCJkZWxldGVkXCIsXHJcbiAgLyoqXHJcbiAgICogZHVwbGljYXRlOiBBbiBhdHRlbXB0IHdhcyBtYWRlIHRvIGNyZWF0ZSBhIGR1cGxpY2F0ZSByZWNvcmQuXHJcbiAgICovXHJcbiAgRHVwbGljYXRlOiBcImR1cGxpY2F0ZVwiLFxyXG4gIC8qKlxyXG4gICAqIGV4Y2VwdGlvbjogQW4gdW5leHBlY3RlZCBpbnRlcm5hbCBlcnJvciBoYXMgb2NjdXJyZWQuXHJcbiAgICovXHJcbiAgRXhjZXB0aW9uOiBcImV4Y2VwdGlvblwiLFxyXG4gIC8qKlxyXG4gICAqIGV4cGlyZWQ6IFVzZXIgc2Vzc2lvbiBleHBpcmVkOyBhIGxvZ2luIG1heSBiZSByZXF1aXJlZC5cclxuICAgKi9cclxuICBTZXNzaW9uRXhwaXJlZDogXCJleHBpcmVkXCIsXHJcbiAgLyoqXHJcbiAgICogZXh0ZW5zaW9uOiBBbiBleHRlbnNpb24gd2FzIGZvdW5kIHRoYXQgd2FzIG5vdCBhY2NlcHRhYmxlLCBjb3VsZCBub3QgYmUgcmVzb2x2ZWQsIG9yIGEgbW9kaWZpZXJFeHRlbnNpb24gd2FzIG5vdCByZWNvZ25pemVkLlxyXG4gICAqL1xyXG4gIFVuYWNjZXB0YWJsZUV4dGVuc2lvbjogXCJleHRlbnNpb25cIixcclxuICAvKipcclxuICAgKiBmb3JiaWRkZW46IFRoZSB1c2VyIGRvZXMgbm90IGhhdmUgdGhlIHJpZ2h0cyB0byBwZXJmb3JtIHRoaXMgYWN0aW9uLlxyXG4gICAqL1xyXG4gIEZvcmJpZGRlbjogXCJmb3JiaWRkZW5cIixcclxuICAvKipcclxuICAgKiBpbmNvbXBsZXRlOiBOb3QgYWxsIGRhdGEgc291cmNlcyB0eXBpY2FsbHkgYWNjZXNzZWQgY291bGQgYmUgcmVhY2hlZCBvciByZXNwb25kZWQgaW4gdGltZSwgc28gdGhlIHJldHVybmVkIGluZm9ybWF0aW9uIG1pZ2h0IG5vdCBiZSBjb21wbGV0ZSAoYXBwbGllcyB0byBzZWFyY2ggaW50ZXJhY3Rpb25zIGFuZCBzb21lIG9wZXJhdGlvbnMpLlxyXG4gICAqL1xyXG4gIEluY29tcGxldGVSZXN1bHRzOiBcImluY29tcGxldGVcIixcclxuICAvKipcclxuICAgKiBpbmZvcm1hdGlvbmFsOiBBIG1lc3NhZ2UgdW5yZWxhdGVkIHRvIHRoZSBwcm9jZXNzaW5nIHN1Y2Nlc3Mgb2YgdGhlIGNvbXBsZXRlZCBvcGVyYXRpb24gKGV4YW1wbGVzIG9mIHRoZSBsYXR0ZXIgaW5jbHVkZSB0aGluZ3MgbGlrZSByZW1pbmRlcnMgb2YgcGFzc3dvcmQgZXhwaXJ5LCBzeXN0ZW0gbWFpbnRlbmFuY2UgdGltZXMsIGV0Yy4pLlxyXG4gICAqL1xyXG4gIEluZm9ybWF0aW9uYWxOb3RlOiBcImluZm9ybWF0aW9uYWxcIixcclxuICAvKipcclxuICAgKiBpbnZhbGlkOiBDb250ZW50IGludmFsaWQgYWdhaW5zdCB0aGUgc3BlY2lmaWNhdGlvbiBvciBhIHByb2ZpbGUuXHJcbiAgICovXHJcbiAgSW52YWxpZENvbnRlbnQ6IFwiaW52YWxpZFwiLFxyXG4gIC8qKlxyXG4gICAqIGludmFyaWFudDogQSBjb250ZW50IHZhbGlkYXRpb24gcnVsZSBmYWlsZWQgLSBlLmcuIGEgc2NoZW1hdHJvbiBydWxlLlxyXG4gICAqL1xyXG4gIFZhbGlkYXRpb25SdWxlRmFpbGVkOiBcImludmFyaWFudFwiLFxyXG4gIC8qKlxyXG4gICAqIGxvY2stZXJyb3I6IEEgcmVzb3VyY2UvcmVjb3JkIGxvY2tpbmcgZmFpbHVyZSAodXN1YWxseSBpbiBhbiB1bmRlcmx5aW5nIGRhdGFiYXNlKS5cclxuICAgKi9cclxuICBMb2NrRXJyb3I6IFwibG9jay1lcnJvclwiLFxyXG4gIC8qKlxyXG4gICAqIGxvZ2luOiBUaGUgY2xpZW50IG5lZWRzIHRvIGluaXRpYXRlIGFuIGF1dGhlbnRpY2F0aW9uIHByb2Nlc3MuXHJcbiAgICovXHJcbiAgTG9naW5SZXF1aXJlZDogXCJsb2dpblwiLFxyXG4gIC8qKlxyXG4gICAqIG11bHRpcGxlLW1hdGNoZXM6IE11bHRpcGxlIG1hdGNoaW5nIHJlY29yZHMgd2VyZSBmb3VuZCB3aGVuIHRoZSBvcGVyYXRpb24gcmVxdWlyZWQgb25seSBvbmUgbWF0Y2guXHJcbiAgICovXHJcbiAgTXVsdGlwbGVNYXRjaGVzOiBcIm11bHRpcGxlLW1hdGNoZXNcIixcclxuICAvKipcclxuICAgKiBuby1zdG9yZTogVGhlIHBlcnNpc3RlbnQgc3RvcmUgaXMgdW5hdmFpbGFibGU7IGUuZy4gdGhlIGRhdGFiYXNlIGlzIGRvd24gZm9yIG1haW50ZW5hbmNlIG9yIHNpbWlsYXIgYWN0aW9uLCBhbmQgdGhlIGludGVyYWN0aW9uIG9yIG9wZXJhdGlvbiBjYW5ub3QgYmUgcHJvY2Vzc2VkLlxyXG4gICAqL1xyXG4gIE5vU3RvcmVBdmFpbGFibGU6IFwibm8tc3RvcmVcIixcclxuICAvKipcclxuICAgKiBub3QtZm91bmQ6IFRoZSByZWZlcmVuY2UgcHJvdmlkZWQgd2FzIG5vdCBmb3VuZC4gSW4gYSBwdXJlIFJFU1RmdWwgZW52aXJvbm1lbnQsIHRoaXMgd291bGQgYmUgYW4gSFRUUCA0MDQgZXJyb3IsIGJ1dCB0aGlzIGNvZGUgbWF5IGJlIHVzZWQgd2hlcmUgdGhlIGNvbnRlbnQgaXMgbm90IGZvdW5kIGZ1cnRoZXIgaW50byB0aGUgYXBwbGljYXRpb24gYXJjaGl0ZWN0dXJlLlxyXG4gICAqL1xyXG4gIE5vdEZvdW5kOiBcIm5vdC1mb3VuZFwiLFxyXG4gIC8qKlxyXG4gICAqIG5vdC1zdXBwb3J0ZWQ6IFRoZSBpbnRlcmFjdGlvbiwgb3BlcmF0aW9uLCByZXNvdXJjZSBvciBwcm9maWxlIGlzIG5vdCBzdXBwb3J0ZWQuXHJcbiAgICovXHJcbiAgQ29udGVudE5vdFN1cHBvcnRlZDogXCJub3Qtc3VwcG9ydGVkXCIsXHJcbiAgLyoqXHJcbiAgICogcHJvY2Vzc2luZzogUHJvY2Vzc2luZyBpc3N1ZXMuIFRoZXNlIGFyZSBleHBlY3RlZCB0byBiZSBmaW5hbCBlLmcuIHRoZXJlIGlzIG5vIHBvaW50IHJlc3VibWl0dGluZyB0aGUgc2FtZSBjb250ZW50IHVuY2hhbmdlZC5cclxuICAgKi9cclxuICBQcm9jZXNzaW5nRmFpbHVyZTogXCJwcm9jZXNzaW5nXCIsXHJcbiAgLyoqXHJcbiAgICogcmVxdWlyZWQ6IEEgcmVxdWlyZWQgZWxlbWVudCBpcyBtaXNzaW5nLlxyXG4gICAqL1xyXG4gIFJlcXVpcmVkRWxlbWVudE1pc3Npbmc6IFwicmVxdWlyZWRcIixcclxuICAvKipcclxuICAgKiBzZWN1cml0eTogQW4gYXV0aGVudGljYXRpb24vYXV0aG9yaXphdGlvbi9wZXJtaXNzaW9ucyBpc3N1ZSBvZiBzb21lIGtpbmQuXHJcbiAgICovXHJcbiAgU2VjdXJpdHlQcm9ibGVtOiBcInNlY3VyaXR5XCIsXHJcbiAgLyoqXHJcbiAgICogc3RydWN0dXJlOiBBIHN0cnVjdHVyYWwgaXNzdWUgaW4gdGhlIGNvbnRlbnQgc3VjaCBhcyB3cm9uZyBuYW1lc3BhY2UsIHVuYWJsZSB0byBwYXJzZSB0aGUgY29udGVudCBjb21wbGV0ZWx5LCBpbnZhbGlkIHN5bnRheCwgZXRjLlxyXG4gICAqL1xyXG4gIFN0cnVjdHVyYWxJc3N1ZTogXCJzdHJ1Y3R1cmVcIixcclxuICAvKipcclxuICAgKiBzdXBwcmVzc2VkOiBTb21lIGluZm9ybWF0aW9uIHdhcyBub3Qgb3IgbWlnaHQgbm90IGhhdmUgYmVlbiByZXR1cm5lZCBkdWUgdG8gYnVzaW5lc3MgcnVsZXMsIGNvbnNlbnQgb3IgcHJpdmFjeSBydWxlcywgb3IgYWNjZXNzIHBlcm1pc3Npb24gY29uc3RyYWludHMuICBUaGlzIGluZm9ybWF0aW9uIG1heSBiZSBhY2Nlc3NpYmxlIHRocm91Z2ggYWx0ZXJuYXRlIHByb2Nlc3Nlcy5cclxuICAgKi9cclxuICBJbmZvcm1hdGlvblN1cHByZXNzZWQ6IFwic3VwcHJlc3NlZFwiLFxyXG4gIC8qKlxyXG4gICAqIHRocm90dGxlZDogVGhlIHN5c3RlbSBpcyBub3QgcHJlcGFyZWQgdG8gaGFuZGxlIHRoaXMgcmVxdWVzdCBkdWUgdG8gbG9hZCBtYW5hZ2VtZW50LlxyXG4gICAqL1xyXG4gIFRocm90dGxlZDogXCJ0aHJvdHRsZWRcIixcclxuICAvKipcclxuICAgKiB0aW1lb3V0OiBBbiBpbnRlcm5hbCB0aW1lb3V0IGhhcyBvY2N1cnJlZC5cclxuICAgKi9cclxuICBUaW1lb3V0OiBcInRpbWVvdXRcIixcclxuICAvKipcclxuICAgKiB0b28tY29zdGx5OiBUaGUgb3BlcmF0aW9uIHdhcyBzdG9wcGVkIHRvIHByb3RlY3Qgc2VydmVyIHJlc291cmNlczsgZS5nLiBhIHJlcXVlc3QgZm9yIGEgdmFsdWUgc2V0IGV4cGFuc2lvbiBvbiBhbGwgb2YgU05PTUVEIENULlxyXG4gICAqL1xyXG4gIE9wZXJhdGlvblRvb0Nvc3RseTogXCJ0b28tY29zdGx5XCIsXHJcbiAgLyoqXHJcbiAgICogdG9vLWxvbmc6IFByb3ZpZGVkIGNvbnRlbnQgaXMgdG9vIGxvbmcgKHR5cGljYWxseSwgdGhpcyBpcyBhIGRlbmlhbCBvZiBzZXJ2aWNlIHByb3RlY3Rpb24gdHlwZSBvZiBlcnJvcikuXHJcbiAgICovXHJcbiAgQ29udGVudFRvb0xvbmc6IFwidG9vLWxvbmdcIixcclxuICAvKipcclxuICAgKiB0cmFuc2llbnQ6IFRyYW5zaWVudCBwcm9jZXNzaW5nIGlzc3Vlcy4gVGhlIHN5c3RlbSByZWNlaXZpbmcgdGhlIG1lc3NhZ2UgbWF5IGJlIGFibGUgdG8gcmVzdWJtaXQgdGhlIHNhbWUgY29udGVudCBvbmNlIGFuIHVuZGVybHlpbmcgaXNzdWUgaXMgcmVzb2x2ZWQuXHJcbiAgICovXHJcbiAgVHJhbnNpZW50SXNzdWU6IFwidHJhbnNpZW50XCIsXHJcbiAgLyoqXHJcbiAgICogdW5rbm93bjogVGhlIHVzZXIgb3Igc3lzdGVtIHdhcyBub3QgYWJsZSB0byBiZSBhdXRoZW50aWNhdGVkIChlaXRoZXIgdGhlcmUgaXMgbm8gcHJvY2Vzcywgb3IgdGhlIHByb2ZlcnJlZCB0b2tlbiBpcyB1bmFjY2VwdGFibGUpLlxyXG4gICAqL1xyXG4gIFVua25vd25Vc2VyOiBcInVua25vd25cIixcclxuICAvKipcclxuICAgKiB2YWx1ZTogQW4gZWxlbWVudCBvciBoZWFkZXIgdmFsdWUgaXMgaW52YWxpZC5cclxuICAgKi9cclxuICBFbGVtZW50VmFsdWVJbnZhbGlkOiBcInZhbHVlXCIsXHJcbn0gYXMgY29uc3Q7XHJcblxyXG4vKipcclxuICogQSBjb2RlIHRoYXQgZGVzY3JpYmVzIHRoZSB0eXBlIG9mIGlzc3VlLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgSXNzdWVUeXBlQ29kZVR5cGUgPSB0eXBlb2YgSXNzdWVUeXBlQ29kZXNba2V5b2YgdHlwZW9mIElzc3VlVHlwZUNvZGVzXTtcclxuIl19