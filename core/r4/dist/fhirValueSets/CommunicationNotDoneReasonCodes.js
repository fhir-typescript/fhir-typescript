// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/communication-not-done-reason|4.0.1
/**
 * Codes for the reason why a communication did not happen.
 */
export const CommunicationNotDoneReasonCodes = {
    /**
     * family-objection: The communication was not done due to a family objection.
     */
    FamilyObjection: "family-objection",
    /**
     * invalid-phone-number: The communication was not done due to an invalid phone number.
     */
    InvalidPhoneNumber: "invalid-phone-number",
    /**
     * patient-objection: The communication was not done due to a patient objection.
     */
    PatientObjection: "patient-objection",
    /**
     * recipient-unavailable: The communication was not done due to the recipient being unavailable.
     */
    RecipientUnavailable: "recipient-unavailable",
    /**
     * system-error: The communication was not done due to a system error.
     */
    SystemError: "system-error",
    /**
     * unknown: The communication was not done due to an unknown reason.
     */
    Unknown: "unknown",
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tbXVuaWNhdGlvbk5vdERvbmVSZWFzb25Db2Rlcy5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXJWYWx1ZVNldHMvQ29tbXVuaWNhdGlvbk5vdERvbmVSZWFzb25Db2Rlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsK0NBQStDO0FBQy9DLGtDQUFrQztBQUNsQyxrRkFBa0Y7QUFFbEY7O0dBRUc7QUFDSCxNQUFNLENBQUMsTUFBTSwrQkFBK0IsR0FBRztJQUM3Qzs7T0FFRztJQUNILGVBQWUsRUFBRSxrQkFBa0I7SUFDbkM7O09BRUc7SUFDSCxrQkFBa0IsRUFBRSxzQkFBc0I7SUFDMUM7O09BRUc7SUFDSCxnQkFBZ0IsRUFBRSxtQkFBbUI7SUFDckM7O09BRUc7SUFDSCxvQkFBb0IsRUFBRSx1QkFBdUI7SUFDN0M7O09BRUc7SUFDSCxXQUFXLEVBQUUsY0FBYztJQUMzQjs7T0FFRztJQUNILE9BQU8sRUFBRSxTQUFTO0NBQ1YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yNC5jb3JlIHZlcnNpb246IDQuMC4xXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBWYWx1ZVNldDogaHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC9jb21tdW5pY2F0aW9uLW5vdC1kb25lLXJlYXNvbnw0LjAuMVxyXG5cclxuLyoqXHJcbiAqIENvZGVzIGZvciB0aGUgcmVhc29uIHdoeSBhIGNvbW11bmljYXRpb24gZGlkIG5vdCBoYXBwZW4uXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgQ29tbXVuaWNhdGlvbk5vdERvbmVSZWFzb25Db2RlcyA9IHtcclxuICAvKipcclxuICAgKiBmYW1pbHktb2JqZWN0aW9uOiBUaGUgY29tbXVuaWNhdGlvbiB3YXMgbm90IGRvbmUgZHVlIHRvIGEgZmFtaWx5IG9iamVjdGlvbi5cclxuICAgKi9cclxuICBGYW1pbHlPYmplY3Rpb246IFwiZmFtaWx5LW9iamVjdGlvblwiLFxyXG4gIC8qKlxyXG4gICAqIGludmFsaWQtcGhvbmUtbnVtYmVyOiBUaGUgY29tbXVuaWNhdGlvbiB3YXMgbm90IGRvbmUgZHVlIHRvIGFuIGludmFsaWQgcGhvbmUgbnVtYmVyLlxyXG4gICAqL1xyXG4gIEludmFsaWRQaG9uZU51bWJlcjogXCJpbnZhbGlkLXBob25lLW51bWJlclwiLFxyXG4gIC8qKlxyXG4gICAqIHBhdGllbnQtb2JqZWN0aW9uOiBUaGUgY29tbXVuaWNhdGlvbiB3YXMgbm90IGRvbmUgZHVlIHRvIGEgcGF0aWVudCBvYmplY3Rpb24uXHJcbiAgICovXHJcbiAgUGF0aWVudE9iamVjdGlvbjogXCJwYXRpZW50LW9iamVjdGlvblwiLFxyXG4gIC8qKlxyXG4gICAqIHJlY2lwaWVudC11bmF2YWlsYWJsZTogVGhlIGNvbW11bmljYXRpb24gd2FzIG5vdCBkb25lIGR1ZSB0byB0aGUgcmVjaXBpZW50IGJlaW5nIHVuYXZhaWxhYmxlLlxyXG4gICAqL1xyXG4gIFJlY2lwaWVudFVuYXZhaWxhYmxlOiBcInJlY2lwaWVudC11bmF2YWlsYWJsZVwiLFxyXG4gIC8qKlxyXG4gICAqIHN5c3RlbS1lcnJvcjogVGhlIGNvbW11bmljYXRpb24gd2FzIG5vdCBkb25lIGR1ZSB0byBhIHN5c3RlbSBlcnJvci5cclxuICAgKi9cclxuICBTeXN0ZW1FcnJvcjogXCJzeXN0ZW0tZXJyb3JcIixcclxuICAvKipcclxuICAgKiB1bmtub3duOiBUaGUgY29tbXVuaWNhdGlvbiB3YXMgbm90IGRvbmUgZHVlIHRvIGFuIHVua25vd24gcmVhc29uLlxyXG4gICAqL1xyXG4gIFVua25vd246IFwidW5rbm93blwiLFxyXG59IGFzIGNvbnN0O1xyXG5cclxuLyoqXHJcbiAqIENvZGVzIGZvciB0aGUgcmVhc29uIHdoeSBhIGNvbW11bmljYXRpb24gZGlkIG5vdCBoYXBwZW4uXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBDb21tdW5pY2F0aW9uTm90RG9uZVJlYXNvbkNvZGVUeXBlID0gdHlwZW9mIENvbW11bmljYXRpb25Ob3REb25lUmVhc29uQ29kZXNba2V5b2YgdHlwZW9mIENvbW11bmljYXRpb25Ob3REb25lUmVhc29uQ29kZXNdO1xyXG4iXX0=