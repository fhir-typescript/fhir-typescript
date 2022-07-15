// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/contract-status|3.0.2
/**
 * This value set contract specific codes for status.
 */
export const ContractStatusCodes = {
    /**
     * amended: Contract is augmented with additional information to correct errors in a predecessor or to updated values in a predecessor. Usage: Contract altered within effective time. Precedence Order = 9. Comparable FHIR and v.3 status codes: revised; replaced.
     */
    Amended: "amended",
    /**
     * appended: Contract is augmented with additional information that was missing from a predecessor Contract. Usage: Contract altered within effective time. Precedence Order = 9. Comparable FHIR and v.3 status codes: updated, replaced.
     */
    Appended: "appended",
    /**
     * cancelled: Contract is terminated due to failure of the Grantor and/or the Grantee to fulfil one or more contract provisions. Usage: Abnormal contract termination. Precedence Order = 10. Comparable FHIR and v.3 status codes: stopped; failed; aborted.
     */
    Cancelled: "cancelled",
    /**
     * disputed: Contract is pended to rectify failure of the Grantor or the Grantee to fulfil contract provision(s). E.g., Grantee complaint about Grantor's failure to comply with contract provisions. Usage: Contract pended. Precedence Order = 7.Comparable FHIR and v.3 status codes: on hold; pended; suspended.
     */
    Disputed: "disputed",
    /**
     * entered-in-error: Contract was created in error. No Precedence Order.  Status may be applied to a Contract with any status.
     */
    EnteredInError: "entered-in-error",
    /**
     * executable: Contract execution pending; may be executed when either the Grantor or the Grantee accepts the contract provisions by signing. I.e., where either the Grantor or the Grantee has signed, but not both. E.g., when an insurance applicant signs the insurers application, which references the policy. Usage: Optional first step of contract execution activity.  May be skipped and contracting activity moves directly to executed state. Precedence Order = 3. Comparable FHIR and v.3 status codes: draft; preliminary; planned; intended; active.
     */
    Executable: "executable",
    /**
     * executed: Contract is activated for period stipulated when both the Grantor and Grantee have signed it. Usage: Required state for normal completion of contracting activity.  Precedence Order = 6. Comparable FHIR and v.3 status codes: accepted; completed.
     */
    Executed: "executed",
    /**
     * negotiable: Contract execution is suspended while either or both the Grantor and Grantee propose and consider new or revised contract provisions. I.e., where the party which has not signed proposes changes to the terms.  E .g., a life insurer declines to agree to the signed application because the life insurer has evidence that the applicant, who asserted to being younger or a non-smoker to get a lower premium rate - but offers instead to agree to a higher premium based on the applicants actual age or smoking status. Usage: Optional contract activity between executable and executed state. Precedence Order = 4. Comparable FHIR and v.3 status codes: in progress; review; held.
     */
    Negotiable: "negotiable",
    /**
     * offered: Contract is a proposal by either the Grantor or the Grantee. Aka - A Contract hard copy or electronic 'template','form' or 'application'. E.g., health insurance application; consent directive form. Usage: Beginning of contract negotiation, which may have been completed as a precondition because used for 0..* contracts. Precedence Order = 2. Comparable FHIR and v.3 status codes: requested; new.
     */
    Offered: "offered",
    /**
     * policy: Contract template is available as the basis for an application or offer by the Grantor or Grantee. E.g., health insurance policy; consent directive policy.  Usage: Required initial contract activity, which may have been completed as a precondition because used for 0..* contracts. Precedence Order = 1. Comparable FHIR and v.3 status codes: proposed; intended.
     */
    Policy: "policy",
    /**
     * rejected:  Execution of the Contract is not completed because either or both the Grantor and Grantee decline to accept some or all of the contract provisions. Usage: Optional contract activity between executable and abnormal termination. Precedence Order = 5. Comparable FHIR and v.3 status codes:  stopped; cancelled.
     */
    Rejected: "rejected",
    /**
     * renewed: Beginning of a successor Contract at the termination of predecessor Contract lifecycle. Usage: Follows termination of a preceding Contract that has reached its expiry date. Precedence Order = 13. Comparable FHIR and v.3 status codes: superseded.
     */
    Renewed: "renewed",
    /**
     * resolved: Contract is reactivated after being pended because of faulty execution. *E.g., competency of the signer(s), or where the policy is substantially different from and did not accompany the application/form so that the applicant could not compare them. Aka - ''reactivated''. Usage: Optional stage where a pended contract is reactivated. Precedence Order = 8. Comparable FHIR and v.3 status codes: reactivated.
     */
    Resolved: "resolved",
    /**
     * revoked: A Contract that is rescinded.  May be required prior to replacing with an updated Contract. Comparable FHIR and v.3 status codes: nullified.
     */
    Revoked: "revoked",
    /**
     * terminated: Contract reaches its expiry date. It may or may not be renewed or renegotiated. Usage: Normal end of contract period. Precedence Order = 12. Comparable FHIR and v.3 status codes: Obsoleted.
     */
    Terminated: "terminated",
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udHJhY3RTdGF0dXNDb2Rlcy5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXJWYWx1ZVNldHMvQ29udHJhY3RTdGF0dXNDb2Rlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsK0NBQStDO0FBQy9DLGtDQUFrQztBQUNsQyxvRUFBb0U7QUFFcEU7O0dBRUc7QUFDSCxNQUFNLENBQUMsTUFBTSxtQkFBbUIsR0FBRztJQUNqQzs7T0FFRztJQUNILE9BQU8sRUFBRSxTQUFTO0lBQ2xCOztPQUVHO0lBQ0gsUUFBUSxFQUFFLFVBQVU7SUFDcEI7O09BRUc7SUFDSCxTQUFTLEVBQUUsV0FBVztJQUN0Qjs7T0FFRztJQUNILFFBQVEsRUFBRSxVQUFVO0lBQ3BCOztPQUVHO0lBQ0gsY0FBYyxFQUFFLGtCQUFrQjtJQUNsQzs7T0FFRztJQUNILFVBQVUsRUFBRSxZQUFZO0lBQ3hCOztPQUVHO0lBQ0gsUUFBUSxFQUFFLFVBQVU7SUFDcEI7O09BRUc7SUFDSCxVQUFVLEVBQUUsWUFBWTtJQUN4Qjs7T0FFRztJQUNILE9BQU8sRUFBRSxTQUFTO0lBQ2xCOztPQUVHO0lBQ0gsTUFBTSxFQUFFLFFBQVE7SUFDaEI7O09BRUc7SUFDSCxRQUFRLEVBQUUsVUFBVTtJQUNwQjs7T0FFRztJQUNILE9BQU8sRUFBRSxTQUFTO0lBQ2xCOztPQUVHO0lBQ0gsUUFBUSxFQUFFLFVBQVU7SUFDcEI7O09BRUc7SUFDSCxPQUFPLEVBQUUsU0FBUztJQUNsQjs7T0FFRztJQUNILFVBQVUsRUFBRSxZQUFZO0NBQ2hCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjMuY29yZSB2ZXJzaW9uOiAzLjAuMlxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgVmFsdWVTZXQ6IGh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvY29udHJhY3Qtc3RhdHVzfDMuMC4yXHJcblxyXG4vKipcclxuICogVGhpcyB2YWx1ZSBzZXQgY29udHJhY3Qgc3BlY2lmaWMgY29kZXMgZm9yIHN0YXR1cy5cclxuICovXHJcbmV4cG9ydCBjb25zdCBDb250cmFjdFN0YXR1c0NvZGVzID0ge1xyXG4gIC8qKlxyXG4gICAqIGFtZW5kZWQ6IENvbnRyYWN0IGlzIGF1Z21lbnRlZCB3aXRoIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gdG8gY29ycmVjdCBlcnJvcnMgaW4gYSBwcmVkZWNlc3NvciBvciB0byB1cGRhdGVkIHZhbHVlcyBpbiBhIHByZWRlY2Vzc29yLiBVc2FnZTogQ29udHJhY3QgYWx0ZXJlZCB3aXRoaW4gZWZmZWN0aXZlIHRpbWUuIFByZWNlZGVuY2UgT3JkZXIgPSA5LiBDb21wYXJhYmxlIEZISVIgYW5kIHYuMyBzdGF0dXMgY29kZXM6IHJldmlzZWQ7IHJlcGxhY2VkLlxyXG4gICAqL1xyXG4gIEFtZW5kZWQ6IFwiYW1lbmRlZFwiLFxyXG4gIC8qKlxyXG4gICAqIGFwcGVuZGVkOiBDb250cmFjdCBpcyBhdWdtZW50ZWQgd2l0aCBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHRoYXQgd2FzIG1pc3NpbmcgZnJvbSBhIHByZWRlY2Vzc29yIENvbnRyYWN0LiBVc2FnZTogQ29udHJhY3QgYWx0ZXJlZCB3aXRoaW4gZWZmZWN0aXZlIHRpbWUuIFByZWNlZGVuY2UgT3JkZXIgPSA5LiBDb21wYXJhYmxlIEZISVIgYW5kIHYuMyBzdGF0dXMgY29kZXM6IHVwZGF0ZWQsIHJlcGxhY2VkLlxyXG4gICAqL1xyXG4gIEFwcGVuZGVkOiBcImFwcGVuZGVkXCIsXHJcbiAgLyoqXHJcbiAgICogY2FuY2VsbGVkOiBDb250cmFjdCBpcyB0ZXJtaW5hdGVkIGR1ZSB0byBmYWlsdXJlIG9mIHRoZSBHcmFudG9yIGFuZC9vciB0aGUgR3JhbnRlZSB0byBmdWxmaWwgb25lIG9yIG1vcmUgY29udHJhY3QgcHJvdmlzaW9ucy4gVXNhZ2U6IEFibm9ybWFsIGNvbnRyYWN0IHRlcm1pbmF0aW9uLiBQcmVjZWRlbmNlIE9yZGVyID0gMTAuIENvbXBhcmFibGUgRkhJUiBhbmQgdi4zIHN0YXR1cyBjb2Rlczogc3RvcHBlZDsgZmFpbGVkOyBhYm9ydGVkLlxyXG4gICAqL1xyXG4gIENhbmNlbGxlZDogXCJjYW5jZWxsZWRcIixcclxuICAvKipcclxuICAgKiBkaXNwdXRlZDogQ29udHJhY3QgaXMgcGVuZGVkIHRvIHJlY3RpZnkgZmFpbHVyZSBvZiB0aGUgR3JhbnRvciBvciB0aGUgR3JhbnRlZSB0byBmdWxmaWwgY29udHJhY3QgcHJvdmlzaW9uKHMpLiBFLmcuLCBHcmFudGVlIGNvbXBsYWludCBhYm91dCBHcmFudG9yJ3MgZmFpbHVyZSB0byBjb21wbHkgd2l0aCBjb250cmFjdCBwcm92aXNpb25zLiBVc2FnZTogQ29udHJhY3QgcGVuZGVkLiBQcmVjZWRlbmNlIE9yZGVyID0gNy5Db21wYXJhYmxlIEZISVIgYW5kIHYuMyBzdGF0dXMgY29kZXM6IG9uIGhvbGQ7IHBlbmRlZDsgc3VzcGVuZGVkLlxyXG4gICAqL1xyXG4gIERpc3B1dGVkOiBcImRpc3B1dGVkXCIsXHJcbiAgLyoqXHJcbiAgICogZW50ZXJlZC1pbi1lcnJvcjogQ29udHJhY3Qgd2FzIGNyZWF0ZWQgaW4gZXJyb3IuIE5vIFByZWNlZGVuY2UgT3JkZXIuICBTdGF0dXMgbWF5IGJlIGFwcGxpZWQgdG8gYSBDb250cmFjdCB3aXRoIGFueSBzdGF0dXMuXHJcbiAgICovXHJcbiAgRW50ZXJlZEluRXJyb3I6IFwiZW50ZXJlZC1pbi1lcnJvclwiLFxyXG4gIC8qKlxyXG4gICAqIGV4ZWN1dGFibGU6IENvbnRyYWN0IGV4ZWN1dGlvbiBwZW5kaW5nOyBtYXkgYmUgZXhlY3V0ZWQgd2hlbiBlaXRoZXIgdGhlIEdyYW50b3Igb3IgdGhlIEdyYW50ZWUgYWNjZXB0cyB0aGUgY29udHJhY3QgcHJvdmlzaW9ucyBieSBzaWduaW5nLiBJLmUuLCB3aGVyZSBlaXRoZXIgdGhlIEdyYW50b3Igb3IgdGhlIEdyYW50ZWUgaGFzIHNpZ25lZCwgYnV0IG5vdCBib3RoLiBFLmcuLCB3aGVuIGFuIGluc3VyYW5jZSBhcHBsaWNhbnQgc2lnbnMgdGhlIGluc3VyZXJzIGFwcGxpY2F0aW9uLCB3aGljaCByZWZlcmVuY2VzIHRoZSBwb2xpY3kuwqBVc2FnZTogT3B0aW9uYWwgZmlyc3Qgc3RlcCBvZiBjb250cmFjdCBleGVjdXRpb24gYWN0aXZpdHkuICBNYXkgYmUgc2tpcHBlZCBhbmQgY29udHJhY3RpbmcgYWN0aXZpdHkgbW92ZXMgZGlyZWN0bHkgdG8gZXhlY3V0ZWQgc3RhdGUuIFByZWNlZGVuY2UgT3JkZXIgPSAzLiBDb21wYXJhYmxlIEZISVIgYW5kIHYuMyBzdGF0dXMgY29kZXM6IGRyYWZ0OyBwcmVsaW1pbmFyeTsgcGxhbm5lZDsgaW50ZW5kZWQ7IGFjdGl2ZS5cclxuICAgKi9cclxuICBFeGVjdXRhYmxlOiBcImV4ZWN1dGFibGVcIixcclxuICAvKipcclxuICAgKiBleGVjdXRlZDogQ29udHJhY3QgaXMgYWN0aXZhdGVkIGZvciBwZXJpb2Qgc3RpcHVsYXRlZCB3aGVuIGJvdGggdGhlIEdyYW50b3IgYW5kIEdyYW50ZWUgaGF2ZSBzaWduZWQgaXQuIFVzYWdlOiBSZXF1aXJlZCBzdGF0ZSBmb3Igbm9ybWFsIGNvbXBsZXRpb24gb2YgY29udHJhY3RpbmcgYWN0aXZpdHkuICBQcmVjZWRlbmNlIE9yZGVyID0gNi4gQ29tcGFyYWJsZSBGSElSIGFuZCB2LjMgc3RhdHVzIGNvZGVzOiBhY2NlcHRlZDsgY29tcGxldGVkLlxyXG4gICAqL1xyXG4gIEV4ZWN1dGVkOiBcImV4ZWN1dGVkXCIsXHJcbiAgLyoqXHJcbiAgICogbmVnb3RpYWJsZTogQ29udHJhY3QgZXhlY3V0aW9uIGlzIHN1c3BlbmRlZCB3aGlsZSBlaXRoZXIgb3IgYm90aCB0aGUgR3JhbnRvciBhbmQgR3JhbnRlZSBwcm9wb3NlIGFuZCBjb25zaWRlciBuZXcgb3IgcmV2aXNlZCBjb250cmFjdCBwcm92aXNpb25zLiBJLmUuLCB3aGVyZSB0aGUgcGFydHkgd2hpY2ggaGFzIG5vdCBzaWduZWQgcHJvcG9zZXMgY2hhbmdlcyB0byB0aGUgdGVybXMuICBFIC5nLiwgYSBsaWZlIGluc3VyZXIgZGVjbGluZXMgdG8gYWdyZWUgdG8gdGhlIHNpZ25lZCBhcHBsaWNhdGlvbiBiZWNhdXNlIHRoZSBsaWZlIGluc3VyZXIgaGFzIGV2aWRlbmNlIHRoYXQgdGhlIGFwcGxpY2FudCwgd2hvIGFzc2VydGVkIHRvIGJlaW5nIHlvdW5nZXIgb3IgYSBub24tc21va2VyIHRvIGdldCBhIGxvd2VyIHByZW1pdW0gcmF0ZSAtIGJ1dCBvZmZlcnMgaW5zdGVhZCB0byBhZ3JlZSB0byBhIGhpZ2hlciBwcmVtaXVtIGJhc2VkIG9uIHRoZSBhcHBsaWNhbnRzIGFjdHVhbCBhZ2Ugb3Igc21va2luZyBzdGF0dXMuIFVzYWdlOiBPcHRpb25hbCBjb250cmFjdCBhY3Rpdml0eSBiZXR3ZWVuIGV4ZWN1dGFibGUgYW5kIGV4ZWN1dGVkIHN0YXRlLiBQcmVjZWRlbmNlIE9yZGVyID0gNC4gQ29tcGFyYWJsZSBGSElSIGFuZCB2LjMgc3RhdHVzIGNvZGVzOiBpbiBwcm9ncmVzczsgcmV2aWV3OyBoZWxkLlxyXG4gICAqL1xyXG4gIE5lZ290aWFibGU6IFwibmVnb3RpYWJsZVwiLFxyXG4gIC8qKlxyXG4gICAqIG9mZmVyZWQ6IENvbnRyYWN0IGlzIGEgcHJvcG9zYWwgYnkgZWl0aGVyIHRoZSBHcmFudG9yIG9yIHRoZSBHcmFudGVlLiBBa2EgLSBBIENvbnRyYWN0IGhhcmQgY29weSBvciBlbGVjdHJvbmljICd0ZW1wbGF0ZScsJ2Zvcm0nIG9yICdhcHBsaWNhdGlvbicuIEUuZy4sIGhlYWx0aCBpbnN1cmFuY2UgYXBwbGljYXRpb247IGNvbnNlbnQgZGlyZWN0aXZlIGZvcm0uIFVzYWdlOiBCZWdpbm5pbmcgb2YgY29udHJhY3QgbmVnb3RpYXRpb24sIHdoaWNoIG1heSBoYXZlIGJlZW4gY29tcGxldGVkIGFzIGEgcHJlY29uZGl0aW9uIGJlY2F1c2UgdXNlZCBmb3IgMC4uKiBjb250cmFjdHMuIFByZWNlZGVuY2UgT3JkZXIgPSAyLiBDb21wYXJhYmxlIEZISVIgYW5kIHYuMyBzdGF0dXMgY29kZXM6IHJlcXVlc3RlZDsgbmV3LlxyXG4gICAqL1xyXG4gIE9mZmVyZWQ6IFwib2ZmZXJlZFwiLFxyXG4gIC8qKlxyXG4gICAqIHBvbGljeTogQ29udHJhY3QgdGVtcGxhdGUgaXMgYXZhaWxhYmxlIGFzIHRoZSBiYXNpcyBmb3IgYW4gYXBwbGljYXRpb24gb3Igb2ZmZXIgYnkgdGhlIEdyYW50b3Igb3IgR3JhbnRlZS4gRS5nLiwgaGVhbHRoIGluc3VyYW5jZSBwb2xpY3k7IGNvbnNlbnQgZGlyZWN0aXZlIHBvbGljeS4gIFVzYWdlOiBSZXF1aXJlZCBpbml0aWFsIGNvbnRyYWN0IGFjdGl2aXR5LCB3aGljaCBtYXkgaGF2ZSBiZWVuIGNvbXBsZXRlZCBhcyBhIHByZWNvbmRpdGlvbiBiZWNhdXNlIHVzZWQgZm9yIDAuLiogY29udHJhY3RzLiBQcmVjZWRlbmNlIE9yZGVyID0gMS4gQ29tcGFyYWJsZSBGSElSIGFuZCB2LjMgc3RhdHVzIGNvZGVzOiBwcm9wb3NlZDsgaW50ZW5kZWQuXHJcbiAgICovXHJcbiAgUG9saWN5OiBcInBvbGljeVwiLFxyXG4gIC8qKlxyXG4gICAqIHJlamVjdGVkOiAgRXhlY3V0aW9uIG9mIHRoZSBDb250cmFjdCBpcyBub3QgY29tcGxldGVkIGJlY2F1c2UgZWl0aGVyIG9yIGJvdGggdGhlIEdyYW50b3IgYW5kIEdyYW50ZWUgZGVjbGluZSB0byBhY2NlcHQgc29tZSBvciBhbGwgb2YgdGhlIGNvbnRyYWN0IHByb3Zpc2lvbnMuIFVzYWdlOiBPcHRpb25hbCBjb250cmFjdCBhY3Rpdml0eSBiZXR3ZWVuIGV4ZWN1dGFibGUgYW5kIGFibm9ybWFsIHRlcm1pbmF0aW9uLiBQcmVjZWRlbmNlIE9yZGVyID0gNS4gQ29tcGFyYWJsZSBGSElSIGFuZCB2LjMgc3RhdHVzIGNvZGVzOiAgc3RvcHBlZDsgY2FuY2VsbGVkLlxyXG4gICAqL1xyXG4gIFJlamVjdGVkOiBcInJlamVjdGVkXCIsXHJcbiAgLyoqXHJcbiAgICogcmVuZXdlZDogQmVnaW5uaW5nIG9mIGEgc3VjY2Vzc29yIENvbnRyYWN0IGF0IHRoZSB0ZXJtaW5hdGlvbiBvZiBwcmVkZWNlc3NvciBDb250cmFjdCBsaWZlY3ljbGUuIFVzYWdlOiBGb2xsb3dzIHRlcm1pbmF0aW9uIG9mIGEgcHJlY2VkaW5nIENvbnRyYWN0IHRoYXQgaGFzIHJlYWNoZWQgaXRzIGV4cGlyeSBkYXRlLiBQcmVjZWRlbmNlIE9yZGVyID0gMTMuIENvbXBhcmFibGUgRkhJUiBhbmQgdi4zIHN0YXR1cyBjb2Rlczogc3VwZXJzZWRlZC5cclxuICAgKi9cclxuICBSZW5ld2VkOiBcInJlbmV3ZWRcIixcclxuICAvKipcclxuICAgKiByZXNvbHZlZDogQ29udHJhY3QgaXMgcmVhY3RpdmF0ZWQgYWZ0ZXIgYmVpbmcgcGVuZGVkIGJlY2F1c2Ugb2YgZmF1bHR5IGV4ZWN1dGlvbi4gKkUuZy4sIGNvbXBldGVuY3kgb2YgdGhlIHNpZ25lcihzKSwgb3Igd2hlcmUgdGhlIHBvbGljeSBpcyBzdWJzdGFudGlhbGx5IGRpZmZlcmVudCBmcm9tIGFuZCBkaWQgbm90IGFjY29tcGFueSB0aGUgYXBwbGljYXRpb24vZm9ybSBzbyB0aGF0IHRoZSBhcHBsaWNhbnQgY291bGQgbm90IGNvbXBhcmUgdGhlbS4gQWthIC0gJydyZWFjdGl2YXRlZCcnLiBVc2FnZTogT3B0aW9uYWwgc3RhZ2Ugd2hlcmUgYSBwZW5kZWQgY29udHJhY3QgaXMgcmVhY3RpdmF0ZWQuIFByZWNlZGVuY2UgT3JkZXIgPSA4LiBDb21wYXJhYmxlIEZISVIgYW5kIHYuMyBzdGF0dXMgY29kZXM6IHJlYWN0aXZhdGVkLlxyXG4gICAqL1xyXG4gIFJlc29sdmVkOiBcInJlc29sdmVkXCIsXHJcbiAgLyoqXHJcbiAgICogcmV2b2tlZDogQSBDb250cmFjdCB0aGF0IGlzIHJlc2NpbmRlZC4gIE1heSBiZSByZXF1aXJlZCBwcmlvciB0byByZXBsYWNpbmcgd2l0aCBhbiB1cGRhdGVkIENvbnRyYWN0LiBDb21wYXJhYmxlIEZISVIgYW5kIHYuMyBzdGF0dXMgY29kZXM6IG51bGxpZmllZC5cclxuICAgKi9cclxuICBSZXZva2VkOiBcInJldm9rZWRcIixcclxuICAvKipcclxuICAgKiB0ZXJtaW5hdGVkOiBDb250cmFjdCByZWFjaGVzIGl0cyBleHBpcnkgZGF0ZS7CoEl0IG1heSBvciBtYXkgbm90IGJlIHJlbmV3ZWQgb3IgcmVuZWdvdGlhdGVkLiBVc2FnZTogTm9ybWFsIGVuZCBvZiBjb250cmFjdCBwZXJpb2QuIFByZWNlZGVuY2UgT3JkZXIgPSAxMi4gQ29tcGFyYWJsZSBGSElSIGFuZCB2LjMgc3RhdHVzIGNvZGVzOiBPYnNvbGV0ZWQuXHJcbiAgICovXHJcbiAgVGVybWluYXRlZDogXCJ0ZXJtaW5hdGVkXCIsXHJcbn0gYXMgY29uc3Q7XHJcblxyXG4vKipcclxuICogVGhpcyB2YWx1ZSBzZXQgY29udHJhY3Qgc3BlY2lmaWMgY29kZXMgZm9yIHN0YXR1cy5cclxuICovXHJcbmV4cG9ydCB0eXBlIENvbnRyYWN0U3RhdHVzQ29kZVR5cGUgPSB0eXBlb2YgQ29udHJhY3RTdGF0dXNDb2Rlc1trZXlvZiB0eXBlb2YgQ29udHJhY3RTdGF0dXNDb2Rlc107XHJcbiJdfQ==