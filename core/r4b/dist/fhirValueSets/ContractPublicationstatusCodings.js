// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/contract-publicationstatus|4.3.0
/**
 * This value set contract specific codes for status.
 */
export const ContractPublicationstatusCodings = {
    /**
     * amended: Contract is augmented with additional information to correct errors in a predecessor or to updated values in a predecessor. Usage: Contract altered within effective time. Precedence Order = 9. Comparable FHIR and v.3 status codes: revised; replaced.
     */
    Amended: {
        display: "Amended",
        code: "amended",
        system: "http://hl7.org/fhir/contract-publicationstatus",
    },
    /**
     * appended: Contract is augmented with additional information that was missing from a predecessor Contract. Usage: Contract altered within effective time. Precedence Order = 9. Comparable FHIR and v.3 status codes: updated, replaced.
     */
    Appended: {
        display: "Appended",
        code: "appended",
        system: "http://hl7.org/fhir/contract-publicationstatus",
    },
    /**
     * cancelled: Contract is terminated due to failure of the Grantor and/or the Grantee to fulfil one or more contract provisions. Usage: Abnormal contract termination. Precedence Order = 10. Comparable FHIR and v.3 status codes: stopped; failed; aborted.
     */
    Cancelled: {
        display: "Cancelled",
        code: "cancelled",
        system: "http://hl7.org/fhir/contract-publicationstatus",
    },
    /**
     * disputed: Contract is pended to rectify failure of the Grantor or the Grantee to fulfil contract provision(s). E.g., Grantee complaint about Grantor's failure to comply with contract provisions. Usage: Contract pended. Precedence Order = 7. Comparable FHIR and v.3 status codes: on hold; pended; suspended.
     */
    Disputed: {
        display: "Disputed",
        code: "disputed",
        system: "http://hl7.org/fhir/contract-publicationstatus",
    },
    /**
     * entered-in-error: Contract was created in error. No Precedence Order.  Status may be applied to a Contract with any status.
     */
    EnteredInError: {
        display: "Entered in Error",
        code: "entered-in-error",
        system: "http://hl7.org/fhir/contract-publicationstatus",
    },
    /**
     * executable: Contract execution pending; may be executed when either the Grantor or the Grantee accepts the contract provisions by signing. I.e., where either the Grantor or the Grantee has signed, but not both. E.g., when an insurance applicant signs the insurers application, which references the policy. Usage: Optional first step of contract execution activity.  May be skipped and contracting activity moves directly to executed state. Precedence Order = 3. Comparable FHIR and v.3 status codes: draft; preliminary; planned; intended; active.
     */
    Executable: {
        display: "Executable",
        code: "executable",
        system: "http://hl7.org/fhir/contract-publicationstatus",
    },
    /**
     * executed: Contract is activated for period stipulated when both the Grantor and Grantee have signed it. Usage: Required state for normal completion of contracting activity.  Precedence Order = 6. Comparable FHIR and v.3 status codes: accepted; completed.
     */
    Executed: {
        display: "Executed",
        code: "executed",
        system: "http://hl7.org/fhir/contract-publicationstatus",
    },
    /**
     * negotiable: Contract execution is suspended while either or both the Grantor and Grantee propose and consider new or revised contract provisions. I.e., where the party which has not signed proposes changes to the terms.  E .g., a life insurer declines to agree to the signed application because the life insurer has evidence that the applicant, who asserted to being younger or a non-smoker to get a lower premium rate - but offers instead to agree to a higher premium based on the applicants actual age or smoking status. Usage: Optional contract activity between executable and executed state. Precedence Order = 4. Comparable FHIR and v.3 status codes: in progress; review; held.
     */
    Negotiable: {
        display: "Negotiable",
        code: "negotiable",
        system: "http://hl7.org/fhir/contract-publicationstatus",
    },
    /**
     * offered: Contract is a proposal by either the Grantor or the Grantee. Aka - A Contract hard copy or electronic 'template', 'form' or 'application'. E.g., health insurance application; consent directive form. Usage: Beginning of contract negotiation, which may have been completed as a precondition because used for 0..* contracts. Precedence Order = 2. Comparable FHIR and v.3 status codes: requested; new.
     */
    Offered: {
        display: "Offered",
        code: "offered",
        system: "http://hl7.org/fhir/contract-publicationstatus",
    },
    /**
     * policy: Contract template is available as the basis for an application or offer by the Grantor or Grantee. E.g., health insurance policy; consent directive policy.  Usage: Required initial contract activity, which may have been completed as a precondition because used for 0..* contracts. Precedence Order = 1. Comparable FHIR and v.3 status codes: proposed; intended.
     */
    Policy: {
        display: "Policy",
        code: "policy",
        system: "http://hl7.org/fhir/contract-publicationstatus",
    },
    /**
     * rejected:  Execution of the Contract is not completed because either or both the Grantor and Grantee decline to accept some or all of the contract provisions. Usage: Optional contract activity between executable and abnormal termination. Precedence Order = 5. Comparable FHIR and v.3 status codes:  stopped; cancelled.
     */
    Rejected: {
        display: "Rejected",
        code: "rejected",
        system: "http://hl7.org/fhir/contract-publicationstatus",
    },
    /**
     * renewed: Beginning of a successor Contract at the termination of predecessor Contract lifecycle. Usage: Follows termination of a preceding Contract that has reached its expiry date. Precedence Order = 13. Comparable FHIR and v.3 status codes: superseded.
     */
    Renewed: {
        display: "Renewed",
        code: "renewed",
        system: "http://hl7.org/fhir/contract-publicationstatus",
    },
    /**
     * resolved: Contract is reactivated after being pended because of faulty execution. *E.g., competency of the signer(s), or where the policy is substantially different from and did not accompany the application/form so that the applicant could not compare them. Aka - ''reactivated''. Usage: Optional stage where a pended contract is reactivated. Precedence Order = 8. Comparable FHIR and v.3 status codes: reactivated.
     */
    Resolved: {
        display: "Resolved",
        code: "resolved",
        system: "http://hl7.org/fhir/contract-publicationstatus",
    },
    /**
     * revoked: A Contract that is rescinded.  May be required prior to replacing with an updated Contract. Comparable FHIR and v.3 status codes: nullified.
     */
    Revoked: {
        display: "Revoked",
        code: "revoked",
        system: "http://hl7.org/fhir/contract-publicationstatus",
    },
    /**
     * terminated: Contract reaches its expiry date. It might or might not be renewed or renegotiated. Usage: Normal end of contract period. Precedence Order = 12. Comparable FHIR and v.3 status codes: Obsoleted.
     */
    Terminated: {
        display: "Terminated",
        code: "terminated",
        system: "http://hl7.org/fhir/contract-publicationstatus",
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udHJhY3RQdWJsaWNhdGlvbnN0YXR1c0NvZGluZ3MuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyVmFsdWVTZXRzL0NvbnRyYWN0UHVibGljYXRpb25zdGF0dXNDb2RpbmdzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQixnREFBZ0Q7QUFDaEQsa0NBQWtDO0FBQ2xDLCtFQUErRTtBQXNFL0U7O0dBRUc7QUFDSCxNQUFNLENBQUMsTUFBTSxnQ0FBZ0MsR0FBdUM7SUFDbEY7O09BRUc7SUFDSCxPQUFPLEVBQUU7UUFDUCxPQUFPLEVBQUUsU0FBUztRQUNsQixJQUFJLEVBQUUsU0FBUztRQUNmLE1BQU0sRUFBRSxnREFBZ0Q7S0FDekQ7SUFDRDs7T0FFRztJQUNILFFBQVEsRUFBRTtRQUNSLE9BQU8sRUFBRSxVQUFVO1FBQ25CLElBQUksRUFBRSxVQUFVO1FBQ2hCLE1BQU0sRUFBRSxnREFBZ0Q7S0FDekQ7SUFDRDs7T0FFRztJQUNILFNBQVMsRUFBRTtRQUNULE9BQU8sRUFBRSxXQUFXO1FBQ3BCLElBQUksRUFBRSxXQUFXO1FBQ2pCLE1BQU0sRUFBRSxnREFBZ0Q7S0FDekQ7SUFDRDs7T0FFRztJQUNILFFBQVEsRUFBRTtRQUNSLE9BQU8sRUFBRSxVQUFVO1FBQ25CLElBQUksRUFBRSxVQUFVO1FBQ2hCLE1BQU0sRUFBRSxnREFBZ0Q7S0FDekQ7SUFDRDs7T0FFRztJQUNILGNBQWMsRUFBRTtRQUNkLE9BQU8sRUFBRSxrQkFBa0I7UUFDM0IsSUFBSSxFQUFFLGtCQUFrQjtRQUN4QixNQUFNLEVBQUUsZ0RBQWdEO0tBQ3pEO0lBQ0Q7O09BRUc7SUFDSCxVQUFVLEVBQUU7UUFDVixPQUFPLEVBQUUsWUFBWTtRQUNyQixJQUFJLEVBQUUsWUFBWTtRQUNsQixNQUFNLEVBQUUsZ0RBQWdEO0tBQ3pEO0lBQ0Q7O09BRUc7SUFDSCxRQUFRLEVBQUU7UUFDUixPQUFPLEVBQUUsVUFBVTtRQUNuQixJQUFJLEVBQUUsVUFBVTtRQUNoQixNQUFNLEVBQUUsZ0RBQWdEO0tBQ3pEO0lBQ0Q7O09BRUc7SUFDSCxVQUFVLEVBQUU7UUFDVixPQUFPLEVBQUUsWUFBWTtRQUNyQixJQUFJLEVBQUUsWUFBWTtRQUNsQixNQUFNLEVBQUUsZ0RBQWdEO0tBQ3pEO0lBQ0Q7O09BRUc7SUFDSCxPQUFPLEVBQUU7UUFDUCxPQUFPLEVBQUUsU0FBUztRQUNsQixJQUFJLEVBQUUsU0FBUztRQUNmLE1BQU0sRUFBRSxnREFBZ0Q7S0FDekQ7SUFDRDs7T0FFRztJQUNILE1BQU0sRUFBRTtRQUNOLE9BQU8sRUFBRSxRQUFRO1FBQ2pCLElBQUksRUFBRSxRQUFRO1FBQ2QsTUFBTSxFQUFFLGdEQUFnRDtLQUN6RDtJQUNEOztPQUVHO0lBQ0gsUUFBUSxFQUFFO1FBQ1IsT0FBTyxFQUFFLFVBQVU7UUFDbkIsSUFBSSxFQUFFLFVBQVU7UUFDaEIsTUFBTSxFQUFFLGdEQUFnRDtLQUN6RDtJQUNEOztPQUVHO0lBQ0gsT0FBTyxFQUFFO1FBQ1AsT0FBTyxFQUFFLFNBQVM7UUFDbEIsSUFBSSxFQUFFLFNBQVM7UUFDZixNQUFNLEVBQUUsZ0RBQWdEO0tBQ3pEO0lBQ0Q7O09BRUc7SUFDSCxRQUFRLEVBQUU7UUFDUixPQUFPLEVBQUUsVUFBVTtRQUNuQixJQUFJLEVBQUUsVUFBVTtRQUNoQixNQUFNLEVBQUUsZ0RBQWdEO0tBQ3pEO0lBQ0Q7O09BRUc7SUFDSCxPQUFPLEVBQUU7UUFDUCxPQUFPLEVBQUUsU0FBUztRQUNsQixJQUFJLEVBQUUsU0FBUztRQUNmLE1BQU0sRUFBRSxnREFBZ0Q7S0FDekQ7SUFDRDs7T0FFRztJQUNILFVBQVUsRUFBRTtRQUNWLE9BQU8sRUFBRSxZQUFZO1FBQ3JCLElBQUksRUFBRSxZQUFZO1FBQ2xCLE1BQU0sRUFBRSxnREFBZ0Q7S0FDekQ7Q0FDTyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnI0Yi5jb3JlIHZlcnNpb246IDQuMy4wXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBWYWx1ZVNldDogaHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC9jb250cmFjdC1wdWJsaWNhdGlvbnN0YXR1c3w0LjMuMFxyXG5cclxuaW1wb3J0IHsgQ29kaW5nQXJncyB9IGZyb20gJy4uL2ZoaXIvQ29kaW5nLmpzJ1xyXG5cclxuLyoqXHJcbiAqIFRoaXMgdmFsdWUgc2V0IGNvbnRyYWN0IHNwZWNpZmljIGNvZGVzIGZvciBzdGF0dXMuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBDb250cmFjdFB1YmxpY2F0aW9uc3RhdHVzQ29kaW5nVHlwZSA9IHtcclxuICAvKipcclxuICAgKiBhbWVuZGVkOiBDb250cmFjdCBpcyBhdWdtZW50ZWQgd2l0aCBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHRvIGNvcnJlY3QgZXJyb3JzIGluIGEgcHJlZGVjZXNzb3Igb3IgdG8gdXBkYXRlZCB2YWx1ZXMgaW4gYSBwcmVkZWNlc3Nvci4gVXNhZ2U6IENvbnRyYWN0IGFsdGVyZWQgd2l0aGluIGVmZmVjdGl2ZSB0aW1lLiBQcmVjZWRlbmNlIE9yZGVyID0gOS4gQ29tcGFyYWJsZSBGSElSIGFuZCB2LjMgc3RhdHVzIGNvZGVzOiByZXZpc2VkOyByZXBsYWNlZC5cclxuICAgKi9cclxuICBBbWVuZGVkOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIGFwcGVuZGVkOiBDb250cmFjdCBpcyBhdWdtZW50ZWQgd2l0aCBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHRoYXQgd2FzIG1pc3NpbmcgZnJvbSBhIHByZWRlY2Vzc29yIENvbnRyYWN0LiBVc2FnZTogQ29udHJhY3QgYWx0ZXJlZCB3aXRoaW4gZWZmZWN0aXZlIHRpbWUuIFByZWNlZGVuY2UgT3JkZXIgPSA5LiBDb21wYXJhYmxlIEZISVIgYW5kIHYuMyBzdGF0dXMgY29kZXM6IHVwZGF0ZWQsIHJlcGxhY2VkLlxyXG4gICAqL1xyXG4gIEFwcGVuZGVkOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIGNhbmNlbGxlZDogQ29udHJhY3QgaXMgdGVybWluYXRlZCBkdWUgdG8gZmFpbHVyZSBvZiB0aGUgR3JhbnRvciBhbmQvb3IgdGhlIEdyYW50ZWUgdG8gZnVsZmlsIG9uZSBvciBtb3JlIGNvbnRyYWN0IHByb3Zpc2lvbnMuIFVzYWdlOiBBYm5vcm1hbCBjb250cmFjdCB0ZXJtaW5hdGlvbi4gUHJlY2VkZW5jZSBPcmRlciA9IDEwLiBDb21wYXJhYmxlIEZISVIgYW5kIHYuMyBzdGF0dXMgY29kZXM6IHN0b3BwZWQ7IGZhaWxlZDsgYWJvcnRlZC5cclxuICAgKi9cclxuICBDYW5jZWxsZWQ6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogZGlzcHV0ZWQ6IENvbnRyYWN0IGlzIHBlbmRlZCB0byByZWN0aWZ5IGZhaWx1cmUgb2YgdGhlIEdyYW50b3Igb3IgdGhlIEdyYW50ZWUgdG8gZnVsZmlsIGNvbnRyYWN0IHByb3Zpc2lvbihzKS4gRS5nLiwgR3JhbnRlZSBjb21wbGFpbnQgYWJvdXQgR3JhbnRvcidzIGZhaWx1cmUgdG8gY29tcGx5IHdpdGggY29udHJhY3QgcHJvdmlzaW9ucy4gVXNhZ2U6IENvbnRyYWN0IHBlbmRlZC4gUHJlY2VkZW5jZSBPcmRlciA9IDcuIENvbXBhcmFibGUgRkhJUiBhbmQgdi4zIHN0YXR1cyBjb2Rlczogb24gaG9sZDsgcGVuZGVkOyBzdXNwZW5kZWQuXHJcbiAgICovXHJcbiAgRGlzcHV0ZWQ6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogZW50ZXJlZC1pbi1lcnJvcjogQ29udHJhY3Qgd2FzIGNyZWF0ZWQgaW4gZXJyb3IuIE5vIFByZWNlZGVuY2UgT3JkZXIuICBTdGF0dXMgbWF5IGJlIGFwcGxpZWQgdG8gYSBDb250cmFjdCB3aXRoIGFueSBzdGF0dXMuXHJcbiAgICovXHJcbiAgRW50ZXJlZEluRXJyb3I6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogZXhlY3V0YWJsZTogQ29udHJhY3QgZXhlY3V0aW9uIHBlbmRpbmc7IG1heSBiZSBleGVjdXRlZCB3aGVuIGVpdGhlciB0aGUgR3JhbnRvciBvciB0aGUgR3JhbnRlZSBhY2NlcHRzIHRoZSBjb250cmFjdCBwcm92aXNpb25zIGJ5IHNpZ25pbmcuIEkuZS4sIHdoZXJlIGVpdGhlciB0aGUgR3JhbnRvciBvciB0aGUgR3JhbnRlZSBoYXMgc2lnbmVkLCBidXQgbm90IGJvdGguIEUuZy4sIHdoZW4gYW4gaW5zdXJhbmNlIGFwcGxpY2FudCBzaWducyB0aGUgaW5zdXJlcnMgYXBwbGljYXRpb24sIHdoaWNoIHJlZmVyZW5jZXMgdGhlIHBvbGljeS7CoFVzYWdlOiBPcHRpb25hbCBmaXJzdCBzdGVwIG9mIGNvbnRyYWN0IGV4ZWN1dGlvbiBhY3Rpdml0eS4gIE1heSBiZSBza2lwcGVkIGFuZCBjb250cmFjdGluZyBhY3Rpdml0eSBtb3ZlcyBkaXJlY3RseSB0byBleGVjdXRlZCBzdGF0ZS4gUHJlY2VkZW5jZSBPcmRlciA9IDMuIENvbXBhcmFibGUgRkhJUiBhbmQgdi4zIHN0YXR1cyBjb2RlczogZHJhZnQ7IHByZWxpbWluYXJ5OyBwbGFubmVkOyBpbnRlbmRlZDsgYWN0aXZlLlxyXG4gICAqL1xyXG4gIEV4ZWN1dGFibGU6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogZXhlY3V0ZWQ6IENvbnRyYWN0IGlzIGFjdGl2YXRlZCBmb3IgcGVyaW9kIHN0aXB1bGF0ZWQgd2hlbiBib3RoIHRoZSBHcmFudG9yIGFuZCBHcmFudGVlIGhhdmUgc2lnbmVkIGl0LiBVc2FnZTogUmVxdWlyZWQgc3RhdGUgZm9yIG5vcm1hbCBjb21wbGV0aW9uIG9mIGNvbnRyYWN0aW5nIGFjdGl2aXR5LiAgUHJlY2VkZW5jZSBPcmRlciA9IDYuIENvbXBhcmFibGUgRkhJUiBhbmQgdi4zIHN0YXR1cyBjb2RlczogYWNjZXB0ZWQ7IGNvbXBsZXRlZC5cclxuICAgKi9cclxuICBFeGVjdXRlZDogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBuZWdvdGlhYmxlOiBDb250cmFjdCBleGVjdXRpb24gaXMgc3VzcGVuZGVkIHdoaWxlIGVpdGhlciBvciBib3RoIHRoZSBHcmFudG9yIGFuZCBHcmFudGVlIHByb3Bvc2UgYW5kIGNvbnNpZGVyIG5ldyBvciByZXZpc2VkIGNvbnRyYWN0IHByb3Zpc2lvbnMuIEkuZS4sIHdoZXJlIHRoZSBwYXJ0eSB3aGljaCBoYXMgbm90IHNpZ25lZCBwcm9wb3NlcyBjaGFuZ2VzIHRvIHRoZSB0ZXJtcy4gIEUgLmcuLCBhIGxpZmUgaW5zdXJlciBkZWNsaW5lcyB0byBhZ3JlZSB0byB0aGUgc2lnbmVkIGFwcGxpY2F0aW9uIGJlY2F1c2UgdGhlIGxpZmUgaW5zdXJlciBoYXMgZXZpZGVuY2UgdGhhdCB0aGUgYXBwbGljYW50LCB3aG8gYXNzZXJ0ZWQgdG8gYmVpbmcgeW91bmdlciBvciBhIG5vbi1zbW9rZXIgdG8gZ2V0IGEgbG93ZXIgcHJlbWl1bSByYXRlIC0gYnV0IG9mZmVycyBpbnN0ZWFkIHRvIGFncmVlIHRvIGEgaGlnaGVyIHByZW1pdW0gYmFzZWQgb24gdGhlIGFwcGxpY2FudHMgYWN0dWFsIGFnZSBvciBzbW9raW5nIHN0YXR1cy4gVXNhZ2U6IE9wdGlvbmFsIGNvbnRyYWN0IGFjdGl2aXR5IGJldHdlZW4gZXhlY3V0YWJsZSBhbmQgZXhlY3V0ZWQgc3RhdGUuIFByZWNlZGVuY2UgT3JkZXIgPSA0LiBDb21wYXJhYmxlIEZISVIgYW5kIHYuMyBzdGF0dXMgY29kZXM6IGluIHByb2dyZXNzOyByZXZpZXc7IGhlbGQuXHJcbiAgICovXHJcbiAgTmVnb3RpYWJsZTogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBvZmZlcmVkOiBDb250cmFjdCBpcyBhIHByb3Bvc2FsIGJ5IGVpdGhlciB0aGUgR3JhbnRvciBvciB0aGUgR3JhbnRlZS4gQWthIC0gQSBDb250cmFjdCBoYXJkIGNvcHkgb3IgZWxlY3Ryb25pYyAndGVtcGxhdGUnLCAnZm9ybScgb3IgJ2FwcGxpY2F0aW9uJy4gRS5nLiwgaGVhbHRoIGluc3VyYW5jZSBhcHBsaWNhdGlvbjsgY29uc2VudCBkaXJlY3RpdmUgZm9ybS4gVXNhZ2U6IEJlZ2lubmluZyBvZiBjb250cmFjdCBuZWdvdGlhdGlvbiwgd2hpY2ggbWF5IGhhdmUgYmVlbiBjb21wbGV0ZWQgYXMgYSBwcmVjb25kaXRpb24gYmVjYXVzZSB1c2VkIGZvciAwLi4qIGNvbnRyYWN0cy4gUHJlY2VkZW5jZSBPcmRlciA9IDIuIENvbXBhcmFibGUgRkhJUiBhbmQgdi4zIHN0YXR1cyBjb2RlczogcmVxdWVzdGVkOyBuZXcuXHJcbiAgICovXHJcbiAgT2ZmZXJlZDogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBwb2xpY3k6IENvbnRyYWN0IHRlbXBsYXRlIGlzIGF2YWlsYWJsZSBhcyB0aGUgYmFzaXMgZm9yIGFuIGFwcGxpY2F0aW9uIG9yIG9mZmVyIGJ5IHRoZSBHcmFudG9yIG9yIEdyYW50ZWUuIEUuZy4sIGhlYWx0aCBpbnN1cmFuY2UgcG9saWN5OyBjb25zZW50IGRpcmVjdGl2ZSBwb2xpY3kuICBVc2FnZTogUmVxdWlyZWQgaW5pdGlhbCBjb250cmFjdCBhY3Rpdml0eSwgd2hpY2ggbWF5IGhhdmUgYmVlbiBjb21wbGV0ZWQgYXMgYSBwcmVjb25kaXRpb24gYmVjYXVzZSB1c2VkIGZvciAwLi4qIGNvbnRyYWN0cy4gUHJlY2VkZW5jZSBPcmRlciA9IDEuIENvbXBhcmFibGUgRkhJUiBhbmQgdi4zIHN0YXR1cyBjb2RlczogcHJvcG9zZWQ7IGludGVuZGVkLlxyXG4gICAqL1xyXG4gIFBvbGljeTogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiByZWplY3RlZDogIEV4ZWN1dGlvbiBvZiB0aGUgQ29udHJhY3QgaXMgbm90IGNvbXBsZXRlZCBiZWNhdXNlIGVpdGhlciBvciBib3RoIHRoZSBHcmFudG9yIGFuZCBHcmFudGVlIGRlY2xpbmUgdG8gYWNjZXB0IHNvbWUgb3IgYWxsIG9mIHRoZSBjb250cmFjdCBwcm92aXNpb25zLiBVc2FnZTogT3B0aW9uYWwgY29udHJhY3QgYWN0aXZpdHkgYmV0d2VlbiBleGVjdXRhYmxlIGFuZCBhYm5vcm1hbCB0ZXJtaW5hdGlvbi4gUHJlY2VkZW5jZSBPcmRlciA9IDUuIENvbXBhcmFibGUgRkhJUiBhbmQgdi4zIHN0YXR1cyBjb2RlczogIHN0b3BwZWQ7IGNhbmNlbGxlZC5cclxuICAgKi9cclxuICBSZWplY3RlZDogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiByZW5ld2VkOiBCZWdpbm5pbmcgb2YgYSBzdWNjZXNzb3IgQ29udHJhY3QgYXQgdGhlIHRlcm1pbmF0aW9uIG9mIHByZWRlY2Vzc29yIENvbnRyYWN0IGxpZmVjeWNsZS4gVXNhZ2U6IEZvbGxvd3MgdGVybWluYXRpb24gb2YgYSBwcmVjZWRpbmcgQ29udHJhY3QgdGhhdCBoYXMgcmVhY2hlZCBpdHMgZXhwaXJ5IGRhdGUuIFByZWNlZGVuY2UgT3JkZXIgPSAxMy4gQ29tcGFyYWJsZSBGSElSIGFuZCB2LjMgc3RhdHVzIGNvZGVzOiBzdXBlcnNlZGVkLlxyXG4gICAqL1xyXG4gIFJlbmV3ZWQ6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogcmVzb2x2ZWQ6IENvbnRyYWN0IGlzIHJlYWN0aXZhdGVkIGFmdGVyIGJlaW5nIHBlbmRlZCBiZWNhdXNlIG9mIGZhdWx0eSBleGVjdXRpb24uICpFLmcuLCBjb21wZXRlbmN5IG9mIHRoZSBzaWduZXIocyksIG9yIHdoZXJlIHRoZSBwb2xpY3kgaXMgc3Vic3RhbnRpYWxseSBkaWZmZXJlbnQgZnJvbSBhbmQgZGlkIG5vdCBhY2NvbXBhbnkgdGhlIGFwcGxpY2F0aW9uL2Zvcm0gc28gdGhhdCB0aGUgYXBwbGljYW50IGNvdWxkIG5vdCBjb21wYXJlIHRoZW0uIEFrYSAtICcncmVhY3RpdmF0ZWQnJy4gVXNhZ2U6IE9wdGlvbmFsIHN0YWdlIHdoZXJlIGEgcGVuZGVkIGNvbnRyYWN0IGlzIHJlYWN0aXZhdGVkLiBQcmVjZWRlbmNlIE9yZGVyID0gOC4gQ29tcGFyYWJsZSBGSElSIGFuZCB2LjMgc3RhdHVzIGNvZGVzOiByZWFjdGl2YXRlZC5cclxuICAgKi9cclxuICBSZXNvbHZlZDogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiByZXZva2VkOiBBIENvbnRyYWN0IHRoYXQgaXMgcmVzY2luZGVkLiAgTWF5IGJlIHJlcXVpcmVkIHByaW9yIHRvIHJlcGxhY2luZyB3aXRoIGFuIHVwZGF0ZWQgQ29udHJhY3QuIENvbXBhcmFibGUgRkhJUiBhbmQgdi4zIHN0YXR1cyBjb2RlczogbnVsbGlmaWVkLlxyXG4gICAqL1xyXG4gIFJldm9rZWQ6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogdGVybWluYXRlZDogQ29udHJhY3QgcmVhY2hlcyBpdHMgZXhwaXJ5IGRhdGUuwqBJdCBtaWdodCBvciBtaWdodCBub3QgYmUgcmVuZXdlZCBvciByZW5lZ290aWF0ZWQuIFVzYWdlOiBOb3JtYWwgZW5kIG9mIGNvbnRyYWN0IHBlcmlvZC4gUHJlY2VkZW5jZSBPcmRlciA9IDEyLiBDb21wYXJhYmxlIEZISVIgYW5kIHYuMyBzdGF0dXMgY29kZXM6IE9ic29sZXRlZC5cclxuICAgKi9cclxuICBUZXJtaW5hdGVkOiBDb2RpbmdBcmdzO1xyXG59XHJcblxyXG4vKipcclxuICogVGhpcyB2YWx1ZSBzZXQgY29udHJhY3Qgc3BlY2lmaWMgY29kZXMgZm9yIHN0YXR1cy5cclxuICovXHJcbmV4cG9ydCBjb25zdCBDb250cmFjdFB1YmxpY2F0aW9uc3RhdHVzQ29kaW5nczpDb250cmFjdFB1YmxpY2F0aW9uc3RhdHVzQ29kaW5nVHlwZSA9IHtcclxuICAvKipcclxuICAgKiBhbWVuZGVkOiBDb250cmFjdCBpcyBhdWdtZW50ZWQgd2l0aCBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHRvIGNvcnJlY3QgZXJyb3JzIGluIGEgcHJlZGVjZXNzb3Igb3IgdG8gdXBkYXRlZCB2YWx1ZXMgaW4gYSBwcmVkZWNlc3Nvci4gVXNhZ2U6IENvbnRyYWN0IGFsdGVyZWQgd2l0aGluIGVmZmVjdGl2ZSB0aW1lLiBQcmVjZWRlbmNlIE9yZGVyID0gOS4gQ29tcGFyYWJsZSBGSElSIGFuZCB2LjMgc3RhdHVzIGNvZGVzOiByZXZpc2VkOyByZXBsYWNlZC5cclxuICAgKi9cclxuICBBbWVuZGVkOiB7XHJcbiAgICBkaXNwbGF5OiBcIkFtZW5kZWRcIixcclxuICAgIGNvZGU6IFwiYW1lbmRlZFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvY29udHJhY3QtcHVibGljYXRpb25zdGF0dXNcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIGFwcGVuZGVkOiBDb250cmFjdCBpcyBhdWdtZW50ZWQgd2l0aCBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHRoYXQgd2FzIG1pc3NpbmcgZnJvbSBhIHByZWRlY2Vzc29yIENvbnRyYWN0LiBVc2FnZTogQ29udHJhY3QgYWx0ZXJlZCB3aXRoaW4gZWZmZWN0aXZlIHRpbWUuIFByZWNlZGVuY2UgT3JkZXIgPSA5LiBDb21wYXJhYmxlIEZISVIgYW5kIHYuMyBzdGF0dXMgY29kZXM6IHVwZGF0ZWQsIHJlcGxhY2VkLlxyXG4gICAqL1xyXG4gIEFwcGVuZGVkOiB7XHJcbiAgICBkaXNwbGF5OiBcIkFwcGVuZGVkXCIsXHJcbiAgICBjb2RlOiBcImFwcGVuZGVkXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9jb250cmFjdC1wdWJsaWNhdGlvbnN0YXR1c1wiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogY2FuY2VsbGVkOiBDb250cmFjdCBpcyB0ZXJtaW5hdGVkIGR1ZSB0byBmYWlsdXJlIG9mIHRoZSBHcmFudG9yIGFuZC9vciB0aGUgR3JhbnRlZSB0byBmdWxmaWwgb25lIG9yIG1vcmUgY29udHJhY3QgcHJvdmlzaW9ucy4gVXNhZ2U6IEFibm9ybWFsIGNvbnRyYWN0IHRlcm1pbmF0aW9uLiBQcmVjZWRlbmNlIE9yZGVyID0gMTAuIENvbXBhcmFibGUgRkhJUiBhbmQgdi4zIHN0YXR1cyBjb2Rlczogc3RvcHBlZDsgZmFpbGVkOyBhYm9ydGVkLlxyXG4gICAqL1xyXG4gIENhbmNlbGxlZDoge1xyXG4gICAgZGlzcGxheTogXCJDYW5jZWxsZWRcIixcclxuICAgIGNvZGU6IFwiY2FuY2VsbGVkXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9jb250cmFjdC1wdWJsaWNhdGlvbnN0YXR1c1wiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogZGlzcHV0ZWQ6IENvbnRyYWN0IGlzIHBlbmRlZCB0byByZWN0aWZ5IGZhaWx1cmUgb2YgdGhlIEdyYW50b3Igb3IgdGhlIEdyYW50ZWUgdG8gZnVsZmlsIGNvbnRyYWN0IHByb3Zpc2lvbihzKS4gRS5nLiwgR3JhbnRlZSBjb21wbGFpbnQgYWJvdXQgR3JhbnRvcidzIGZhaWx1cmUgdG8gY29tcGx5IHdpdGggY29udHJhY3QgcHJvdmlzaW9ucy4gVXNhZ2U6IENvbnRyYWN0IHBlbmRlZC4gUHJlY2VkZW5jZSBPcmRlciA9IDcuIENvbXBhcmFibGUgRkhJUiBhbmQgdi4zIHN0YXR1cyBjb2Rlczogb24gaG9sZDsgcGVuZGVkOyBzdXNwZW5kZWQuXHJcbiAgICovXHJcbiAgRGlzcHV0ZWQ6IHtcclxuICAgIGRpc3BsYXk6IFwiRGlzcHV0ZWRcIixcclxuICAgIGNvZGU6IFwiZGlzcHV0ZWRcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL2NvbnRyYWN0LXB1YmxpY2F0aW9uc3RhdHVzXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBlbnRlcmVkLWluLWVycm9yOiBDb250cmFjdCB3YXMgY3JlYXRlZCBpbiBlcnJvci4gTm8gUHJlY2VkZW5jZSBPcmRlci4gIFN0YXR1cyBtYXkgYmUgYXBwbGllZCB0byBhIENvbnRyYWN0IHdpdGggYW55IHN0YXR1cy5cclxuICAgKi9cclxuICBFbnRlcmVkSW5FcnJvcjoge1xyXG4gICAgZGlzcGxheTogXCJFbnRlcmVkIGluIEVycm9yXCIsXHJcbiAgICBjb2RlOiBcImVudGVyZWQtaW4tZXJyb3JcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL2NvbnRyYWN0LXB1YmxpY2F0aW9uc3RhdHVzXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBleGVjdXRhYmxlOiBDb250cmFjdCBleGVjdXRpb24gcGVuZGluZzsgbWF5IGJlIGV4ZWN1dGVkIHdoZW4gZWl0aGVyIHRoZSBHcmFudG9yIG9yIHRoZSBHcmFudGVlIGFjY2VwdHMgdGhlIGNvbnRyYWN0IHByb3Zpc2lvbnMgYnkgc2lnbmluZy4gSS5lLiwgd2hlcmUgZWl0aGVyIHRoZSBHcmFudG9yIG9yIHRoZSBHcmFudGVlIGhhcyBzaWduZWQsIGJ1dCBub3QgYm90aC4gRS5nLiwgd2hlbiBhbiBpbnN1cmFuY2UgYXBwbGljYW50IHNpZ25zIHRoZSBpbnN1cmVycyBhcHBsaWNhdGlvbiwgd2hpY2ggcmVmZXJlbmNlcyB0aGUgcG9saWN5LsKgVXNhZ2U6IE9wdGlvbmFsIGZpcnN0IHN0ZXAgb2YgY29udHJhY3QgZXhlY3V0aW9uIGFjdGl2aXR5LiAgTWF5IGJlIHNraXBwZWQgYW5kIGNvbnRyYWN0aW5nIGFjdGl2aXR5IG1vdmVzIGRpcmVjdGx5IHRvIGV4ZWN1dGVkIHN0YXRlLiBQcmVjZWRlbmNlIE9yZGVyID0gMy4gQ29tcGFyYWJsZSBGSElSIGFuZCB2LjMgc3RhdHVzIGNvZGVzOiBkcmFmdDsgcHJlbGltaW5hcnk7IHBsYW5uZWQ7IGludGVuZGVkOyBhY3RpdmUuXHJcbiAgICovXHJcbiAgRXhlY3V0YWJsZToge1xyXG4gICAgZGlzcGxheTogXCJFeGVjdXRhYmxlXCIsXHJcbiAgICBjb2RlOiBcImV4ZWN1dGFibGVcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL2NvbnRyYWN0LXB1YmxpY2F0aW9uc3RhdHVzXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBleGVjdXRlZDogQ29udHJhY3QgaXMgYWN0aXZhdGVkIGZvciBwZXJpb2Qgc3RpcHVsYXRlZCB3aGVuIGJvdGggdGhlIEdyYW50b3IgYW5kIEdyYW50ZWUgaGF2ZSBzaWduZWQgaXQuIFVzYWdlOiBSZXF1aXJlZCBzdGF0ZSBmb3Igbm9ybWFsIGNvbXBsZXRpb24gb2YgY29udHJhY3RpbmcgYWN0aXZpdHkuICBQcmVjZWRlbmNlIE9yZGVyID0gNi4gQ29tcGFyYWJsZSBGSElSIGFuZCB2LjMgc3RhdHVzIGNvZGVzOiBhY2NlcHRlZDsgY29tcGxldGVkLlxyXG4gICAqL1xyXG4gIEV4ZWN1dGVkOiB7XHJcbiAgICBkaXNwbGF5OiBcIkV4ZWN1dGVkXCIsXHJcbiAgICBjb2RlOiBcImV4ZWN1dGVkXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9jb250cmFjdC1wdWJsaWNhdGlvbnN0YXR1c1wiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogbmVnb3RpYWJsZTogQ29udHJhY3QgZXhlY3V0aW9uIGlzIHN1c3BlbmRlZCB3aGlsZSBlaXRoZXIgb3IgYm90aCB0aGUgR3JhbnRvciBhbmQgR3JhbnRlZSBwcm9wb3NlIGFuZCBjb25zaWRlciBuZXcgb3IgcmV2aXNlZCBjb250cmFjdCBwcm92aXNpb25zLiBJLmUuLCB3aGVyZSB0aGUgcGFydHkgd2hpY2ggaGFzIG5vdCBzaWduZWQgcHJvcG9zZXMgY2hhbmdlcyB0byB0aGUgdGVybXMuICBFIC5nLiwgYSBsaWZlIGluc3VyZXIgZGVjbGluZXMgdG8gYWdyZWUgdG8gdGhlIHNpZ25lZCBhcHBsaWNhdGlvbiBiZWNhdXNlIHRoZSBsaWZlIGluc3VyZXIgaGFzIGV2aWRlbmNlIHRoYXQgdGhlIGFwcGxpY2FudCwgd2hvIGFzc2VydGVkIHRvIGJlaW5nIHlvdW5nZXIgb3IgYSBub24tc21va2VyIHRvIGdldCBhIGxvd2VyIHByZW1pdW0gcmF0ZSAtIGJ1dCBvZmZlcnMgaW5zdGVhZCB0byBhZ3JlZSB0byBhIGhpZ2hlciBwcmVtaXVtIGJhc2VkIG9uIHRoZSBhcHBsaWNhbnRzIGFjdHVhbCBhZ2Ugb3Igc21va2luZyBzdGF0dXMuIFVzYWdlOiBPcHRpb25hbCBjb250cmFjdCBhY3Rpdml0eSBiZXR3ZWVuIGV4ZWN1dGFibGUgYW5kIGV4ZWN1dGVkIHN0YXRlLiBQcmVjZWRlbmNlIE9yZGVyID0gNC4gQ29tcGFyYWJsZSBGSElSIGFuZCB2LjMgc3RhdHVzIGNvZGVzOiBpbiBwcm9ncmVzczsgcmV2aWV3OyBoZWxkLlxyXG4gICAqL1xyXG4gIE5lZ290aWFibGU6IHtcclxuICAgIGRpc3BsYXk6IFwiTmVnb3RpYWJsZVwiLFxyXG4gICAgY29kZTogXCJuZWdvdGlhYmxlXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9jb250cmFjdC1wdWJsaWNhdGlvbnN0YXR1c1wiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogb2ZmZXJlZDogQ29udHJhY3QgaXMgYSBwcm9wb3NhbCBieSBlaXRoZXIgdGhlIEdyYW50b3Igb3IgdGhlIEdyYW50ZWUuIEFrYSAtIEEgQ29udHJhY3QgaGFyZCBjb3B5IG9yIGVsZWN0cm9uaWMgJ3RlbXBsYXRlJywgJ2Zvcm0nIG9yICdhcHBsaWNhdGlvbicuIEUuZy4sIGhlYWx0aCBpbnN1cmFuY2UgYXBwbGljYXRpb247IGNvbnNlbnQgZGlyZWN0aXZlIGZvcm0uIFVzYWdlOiBCZWdpbm5pbmcgb2YgY29udHJhY3QgbmVnb3RpYXRpb24sIHdoaWNoIG1heSBoYXZlIGJlZW4gY29tcGxldGVkIGFzIGEgcHJlY29uZGl0aW9uIGJlY2F1c2UgdXNlZCBmb3IgMC4uKiBjb250cmFjdHMuIFByZWNlZGVuY2UgT3JkZXIgPSAyLiBDb21wYXJhYmxlIEZISVIgYW5kIHYuMyBzdGF0dXMgY29kZXM6IHJlcXVlc3RlZDsgbmV3LlxyXG4gICAqL1xyXG4gIE9mZmVyZWQ6IHtcclxuICAgIGRpc3BsYXk6IFwiT2ZmZXJlZFwiLFxyXG4gICAgY29kZTogXCJvZmZlcmVkXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9jb250cmFjdC1wdWJsaWNhdGlvbnN0YXR1c1wiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogcG9saWN5OiBDb250cmFjdCB0ZW1wbGF0ZSBpcyBhdmFpbGFibGUgYXMgdGhlIGJhc2lzIGZvciBhbiBhcHBsaWNhdGlvbiBvciBvZmZlciBieSB0aGUgR3JhbnRvciBvciBHcmFudGVlLiBFLmcuLCBoZWFsdGggaW5zdXJhbmNlIHBvbGljeTsgY29uc2VudCBkaXJlY3RpdmUgcG9saWN5LiAgVXNhZ2U6IFJlcXVpcmVkIGluaXRpYWwgY29udHJhY3QgYWN0aXZpdHksIHdoaWNoIG1heSBoYXZlIGJlZW4gY29tcGxldGVkIGFzIGEgcHJlY29uZGl0aW9uIGJlY2F1c2UgdXNlZCBmb3IgMC4uKiBjb250cmFjdHMuIFByZWNlZGVuY2UgT3JkZXIgPSAxLiBDb21wYXJhYmxlIEZISVIgYW5kIHYuMyBzdGF0dXMgY29kZXM6IHByb3Bvc2VkOyBpbnRlbmRlZC5cclxuICAgKi9cclxuICBQb2xpY3k6IHtcclxuICAgIGRpc3BsYXk6IFwiUG9saWN5XCIsXHJcbiAgICBjb2RlOiBcInBvbGljeVwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvY29udHJhY3QtcHVibGljYXRpb25zdGF0dXNcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIHJlamVjdGVkOiAgRXhlY3V0aW9uIG9mIHRoZSBDb250cmFjdCBpcyBub3QgY29tcGxldGVkIGJlY2F1c2UgZWl0aGVyIG9yIGJvdGggdGhlIEdyYW50b3IgYW5kIEdyYW50ZWUgZGVjbGluZSB0byBhY2NlcHQgc29tZSBvciBhbGwgb2YgdGhlIGNvbnRyYWN0IHByb3Zpc2lvbnMuIFVzYWdlOiBPcHRpb25hbCBjb250cmFjdCBhY3Rpdml0eSBiZXR3ZWVuIGV4ZWN1dGFibGUgYW5kIGFibm9ybWFsIHRlcm1pbmF0aW9uLiBQcmVjZWRlbmNlIE9yZGVyID0gNS4gQ29tcGFyYWJsZSBGSElSIGFuZCB2LjMgc3RhdHVzIGNvZGVzOiAgc3RvcHBlZDsgY2FuY2VsbGVkLlxyXG4gICAqL1xyXG4gIFJlamVjdGVkOiB7XHJcbiAgICBkaXNwbGF5OiBcIlJlamVjdGVkXCIsXHJcbiAgICBjb2RlOiBcInJlamVjdGVkXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9jb250cmFjdC1wdWJsaWNhdGlvbnN0YXR1c1wiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogcmVuZXdlZDogQmVnaW5uaW5nIG9mIGEgc3VjY2Vzc29yIENvbnRyYWN0IGF0IHRoZSB0ZXJtaW5hdGlvbiBvZiBwcmVkZWNlc3NvciBDb250cmFjdCBsaWZlY3ljbGUuIFVzYWdlOiBGb2xsb3dzIHRlcm1pbmF0aW9uIG9mIGEgcHJlY2VkaW5nIENvbnRyYWN0IHRoYXQgaGFzIHJlYWNoZWQgaXRzIGV4cGlyeSBkYXRlLiBQcmVjZWRlbmNlIE9yZGVyID0gMTMuIENvbXBhcmFibGUgRkhJUiBhbmQgdi4zIHN0YXR1cyBjb2Rlczogc3VwZXJzZWRlZC5cclxuICAgKi9cclxuICBSZW5ld2VkOiB7XHJcbiAgICBkaXNwbGF5OiBcIlJlbmV3ZWRcIixcclxuICAgIGNvZGU6IFwicmVuZXdlZFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvY29udHJhY3QtcHVibGljYXRpb25zdGF0dXNcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIHJlc29sdmVkOiBDb250cmFjdCBpcyByZWFjdGl2YXRlZCBhZnRlciBiZWluZyBwZW5kZWQgYmVjYXVzZSBvZiBmYXVsdHkgZXhlY3V0aW9uLiAqRS5nLiwgY29tcGV0ZW5jeSBvZiB0aGUgc2lnbmVyKHMpLCBvciB3aGVyZSB0aGUgcG9saWN5IGlzIHN1YnN0YW50aWFsbHkgZGlmZmVyZW50IGZyb20gYW5kIGRpZCBub3QgYWNjb21wYW55IHRoZSBhcHBsaWNhdGlvbi9mb3JtIHNvIHRoYXQgdGhlIGFwcGxpY2FudCBjb3VsZCBub3QgY29tcGFyZSB0aGVtLiBBa2EgLSAnJ3JlYWN0aXZhdGVkJycuIFVzYWdlOiBPcHRpb25hbCBzdGFnZSB3aGVyZSBhIHBlbmRlZCBjb250cmFjdCBpcyByZWFjdGl2YXRlZC4gUHJlY2VkZW5jZSBPcmRlciA9IDguIENvbXBhcmFibGUgRkhJUiBhbmQgdi4zIHN0YXR1cyBjb2RlczogcmVhY3RpdmF0ZWQuXHJcbiAgICovXHJcbiAgUmVzb2x2ZWQ6IHtcclxuICAgIGRpc3BsYXk6IFwiUmVzb2x2ZWRcIixcclxuICAgIGNvZGU6IFwicmVzb2x2ZWRcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL2NvbnRyYWN0LXB1YmxpY2F0aW9uc3RhdHVzXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiByZXZva2VkOiBBIENvbnRyYWN0IHRoYXQgaXMgcmVzY2luZGVkLiAgTWF5IGJlIHJlcXVpcmVkIHByaW9yIHRvIHJlcGxhY2luZyB3aXRoIGFuIHVwZGF0ZWQgQ29udHJhY3QuIENvbXBhcmFibGUgRkhJUiBhbmQgdi4zIHN0YXR1cyBjb2RlczogbnVsbGlmaWVkLlxyXG4gICAqL1xyXG4gIFJldm9rZWQ6IHtcclxuICAgIGRpc3BsYXk6IFwiUmV2b2tlZFwiLFxyXG4gICAgY29kZTogXCJyZXZva2VkXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9jb250cmFjdC1wdWJsaWNhdGlvbnN0YXR1c1wiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogdGVybWluYXRlZDogQ29udHJhY3QgcmVhY2hlcyBpdHMgZXhwaXJ5IGRhdGUuwqBJdCBtaWdodCBvciBtaWdodCBub3QgYmUgcmVuZXdlZCBvciByZW5lZ290aWF0ZWQuIFVzYWdlOiBOb3JtYWwgZW5kIG9mIGNvbnRyYWN0IHBlcmlvZC4gUHJlY2VkZW5jZSBPcmRlciA9IDEyLiBDb21wYXJhYmxlIEZISVIgYW5kIHYuMyBzdGF0dXMgY29kZXM6IE9ic29sZXRlZC5cclxuICAgKi9cclxuICBUZXJtaW5hdGVkOiB7XHJcbiAgICBkaXNwbGF5OiBcIlRlcm1pbmF0ZWRcIixcclxuICAgIGNvZGU6IFwidGVybWluYXRlZFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvY29udHJhY3QtcHVibGljYXRpb25zdGF0dXNcIixcclxuICB9LFxyXG59IGFzIGNvbnN0O1xyXG4iXX0=