// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/consent-category|4.3.0
/**
 * This value set includes sample Consent Directive Type codes, including several consent directive related LOINC codes; HL7 VALUE SET: ActConsentType(2.16.840.1.113883.1.11.19897); examples of US realm consent directive legal descriptions and references to online and/or downloadable forms such as the SSA-827 Authorization to Disclose Information to the Social Security Administration; and other anticipated consent directives related to participation in a clinical trial, medical procedures, reproductive procedures; health care directive (Living Will); advance directive, do not resuscitate (DNR); Physician Orders for Life-Sustaining Treatment (POLST)
 */
export const ConsentCategoryCodes = {
    /**
     * Code: _ActConsentType
     */
    ActConsentType: "_ActConsentType",
    /**
     * Code: 57016-8
     */
    PrivacyPolicyAcknowledgementDocument: "57016-8",
    /**
     * Code: 57017-6
     */
    PrivacyPolicyOrganizationDocument: "57017-6",
    /**
     * Code: 59284-0
     */
    PatientConsent: "59284-0",
    /**
     * Code: 64292-6
     */
    ReleaseOfInformationConsent: "64292-6",
    /**
     * acd: Any instructions, written or given verbally by a patient to a health care provider in anticipation of potential need for medical treatment. [2005 Honor My Wishes]
     */
    AdvanceDirective: "acd",
    /**
     * dnr: A legal document, signed by both the patient and their provider, stating a desire not to have CPR initiated in case of a cardiac event. Note: This form was replaced in 2003 with the Physician Orders for Life-Sustaining Treatment [POLST].
     */
    DoNotResuscitate: "dnr",
    /**
     * emrgonly: Opt-in to disclosure of health information for emergency only consent directive. Comment: This general consent directive specifically limits disclosure of health information for purpose of emergency treatment. Additional parameters may further limit the disclosure to specific users, roles, duration, types of information, and impose uses obligations. [ActConsentDirective (2.16.840.1.113883.1.11.20425)]
     */
    EmergencyOnly: "emrgonly",
    /**
     * hcd: Patient's document telling patient's health care provider what the patient wants or does not want if the patient is diagnosed as being terminally ill and in a persistent vegetative state or in a permanently unconscious condition.[2005 Honor My Wishes]
     */
    HealthCareDirective: "hcd",
    /**
     * Code: ICOL
     */
    InformationCollection: "ICOL",
    /**
     * Code: IDSCL
     */
    InformationDisclosure: "IDSCL",
    /**
     * Code: INFA
     */
    InformationAccess: "INFA",
    /**
     * Code: INFAO
     */
    AccessOnly: "INFAO",
    /**
     * Code: INFASO
     */
    AccessAndSaveOnly: "INFASO",
    /**
     * Code: IRDSCL
     */
    InformationRedisclosure: "IRDSCL",
    /**
     * npp: Acknowledgement of custodian notice of privacy practices. Usage Notes: This type of consent directive acknowledges a custodian's notice of privacy practices including its permitted collection, access, use and disclosure of health information to users and for purposes of use specified. [ActConsentDirective (2.16.840.1.113883.1.11.20425)]
     */
    NoticeOfPrivacyPractices: "npp",
    /**
     * polst: The Physician Order for Life-Sustaining Treatment form records a person's health care wishes for end of life emergency treatment and translates them into an order by the physician. It must be reviewed and signed by both the patient and the physician, Advanced Registered Nurse Practitioner or Physician Assistant. [2005 Honor My Wishes] Comment: Opt-in Consent Directive with restrictions.
     */
    POLST: "polst",
    /**
     * research: Consent to have healthcare information in an electronic health record accessed for research purposes. [VALUE SET: ActConsentType (2.16.840.1.113883.1.11.19897)]
     */
    ResearchInformationAccess: "research",
    /**
     * Code: RESEARCH
     */
    ResearchInformationAccessRESEARCH: "RESEARCH",
    /**
     * rsdid: Consent to have de-identified healthcare information in an electronic health record that is accessed for research purposes, but without consent to re-identify the information under any circumstance. [VALUE SET: ActConsentType (2.16.840.1.113883.1.11.19897)
     */
    DeIdentifiedInformationAccess: "rsdid",
    /**
     * Code: RSDID
     */
    DeIdentifiedInformationAccessRSDID: "RSDID",
    /**
     * rsreid: Consent to have de-identified healthcare information in an electronic health record that is accessed for research purposes re-identified under specific circumstances outlined in the consent. [VALUE SET: ActConsentType (2.16.840.1.113883.1.11.19897)]
     */
    ReIdentifiableInformationAccess: "rsreid",
    /**
     * Code: RSREID
     */
    ReIdentifiableInformationAccessRSREID: "RSREID",
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29uc2VudENhdGVnb3J5Q29kZXMuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyVmFsdWVTZXRzL0NvbnNlbnRDYXRlZ29yeUNvZGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQixnREFBZ0Q7QUFDaEQsa0NBQWtDO0FBQ2xDLHFFQUFxRTtBQUVyRTs7R0FFRztBQUNILE1BQU0sQ0FBQyxNQUFNLG9CQUFvQixHQUFHO0lBQ2xDOztPQUVHO0lBQ0gsY0FBYyxFQUFFLGlCQUFpQjtJQUNqQzs7T0FFRztJQUNILG9DQUFvQyxFQUFFLFNBQVM7SUFDL0M7O09BRUc7SUFDSCxpQ0FBaUMsRUFBRSxTQUFTO0lBQzVDOztPQUVHO0lBQ0gsY0FBYyxFQUFFLFNBQVM7SUFDekI7O09BRUc7SUFDSCwyQkFBMkIsRUFBRSxTQUFTO0lBQ3RDOztPQUVHO0lBQ0gsZ0JBQWdCLEVBQUUsS0FBSztJQUN2Qjs7T0FFRztJQUNILGdCQUFnQixFQUFFLEtBQUs7SUFDdkI7O09BRUc7SUFDSCxhQUFhLEVBQUUsVUFBVTtJQUN6Qjs7T0FFRztJQUNILG1CQUFtQixFQUFFLEtBQUs7SUFDMUI7O09BRUc7SUFDSCxxQkFBcUIsRUFBRSxNQUFNO0lBQzdCOztPQUVHO0lBQ0gscUJBQXFCLEVBQUUsT0FBTztJQUM5Qjs7T0FFRztJQUNILGlCQUFpQixFQUFFLE1BQU07SUFDekI7O09BRUc7SUFDSCxVQUFVLEVBQUUsT0FBTztJQUNuQjs7T0FFRztJQUNILGlCQUFpQixFQUFFLFFBQVE7SUFDM0I7O09BRUc7SUFDSCx1QkFBdUIsRUFBRSxRQUFRO0lBQ2pDOztPQUVHO0lBQ0gsd0JBQXdCLEVBQUUsS0FBSztJQUMvQjs7T0FFRztJQUNILEtBQUssRUFBRSxPQUFPO0lBQ2Q7O09BRUc7SUFDSCx5QkFBeUIsRUFBRSxVQUFVO0lBQ3JDOztPQUVHO0lBQ0gsaUNBQWlDLEVBQUUsVUFBVTtJQUM3Qzs7T0FFRztJQUNILDZCQUE2QixFQUFFLE9BQU87SUFDdEM7O09BRUc7SUFDSCxrQ0FBa0MsRUFBRSxPQUFPO0lBQzNDOztPQUVHO0lBQ0gsK0JBQStCLEVBQUUsUUFBUTtJQUN6Qzs7T0FFRztJQUNILHFDQUFxQyxFQUFFLFFBQVE7Q0FDdkMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yNGIuY29yZSB2ZXJzaW9uOiA0LjMuMFxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgVmFsdWVTZXQ6IGh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvY29uc2VudC1jYXRlZ29yeXw0LjMuMFxyXG5cclxuLyoqXHJcbiAqIFRoaXMgdmFsdWUgc2V0IGluY2x1ZGVzIHNhbXBsZSBDb25zZW50IERpcmVjdGl2ZSBUeXBlIGNvZGVzLCBpbmNsdWRpbmcgc2V2ZXJhbCBjb25zZW50IGRpcmVjdGl2ZSByZWxhdGVkIExPSU5DIGNvZGVzOyBITDcgVkFMVUUgU0VUOiBBY3RDb25zZW50VHlwZSgyLjE2Ljg0MC4xLjExMzg4My4xLjExLjE5ODk3KTsgZXhhbXBsZXMgb2YgVVMgcmVhbG0gY29uc2VudCBkaXJlY3RpdmUgbGVnYWwgZGVzY3JpcHRpb25zIGFuZCByZWZlcmVuY2VzIHRvIG9ubGluZSBhbmQvb3IgZG93bmxvYWRhYmxlIGZvcm1zIHN1Y2ggYXMgdGhlIFNTQS04MjcgQXV0aG9yaXphdGlvbiB0byBEaXNjbG9zZSBJbmZvcm1hdGlvbiB0byB0aGUgU29jaWFsIFNlY3VyaXR5IEFkbWluaXN0cmF0aW9uOyBhbmQgb3RoZXIgYW50aWNpcGF0ZWQgY29uc2VudCBkaXJlY3RpdmVzIHJlbGF0ZWQgdG8gcGFydGljaXBhdGlvbiBpbiBhIGNsaW5pY2FsIHRyaWFsLCBtZWRpY2FsIHByb2NlZHVyZXMsIHJlcHJvZHVjdGl2ZSBwcm9jZWR1cmVzOyBoZWFsdGggY2FyZSBkaXJlY3RpdmUgKExpdmluZyBXaWxsKTsgYWR2YW5jZSBkaXJlY3RpdmUsIGRvIG5vdCByZXN1c2NpdGF0ZSAoRE5SKTsgUGh5c2ljaWFuIE9yZGVycyBmb3IgTGlmZS1TdXN0YWluaW5nIFRyZWF0bWVudCAoUE9MU1QpXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgQ29uc2VudENhdGVnb3J5Q29kZXMgPSB7XHJcbiAgLyoqXHJcbiAgICogQ29kZTogX0FjdENvbnNlbnRUeXBlXHJcbiAgICovXHJcbiAgQWN0Q29uc2VudFR5cGU6IFwiX0FjdENvbnNlbnRUeXBlXCIsXHJcbiAgLyoqXHJcbiAgICogQ29kZTogNTcwMTYtOFxyXG4gICAqL1xyXG4gIFByaXZhY3lQb2xpY3lBY2tub3dsZWRnZW1lbnREb2N1bWVudDogXCI1NzAxNi04XCIsXHJcbiAgLyoqXHJcbiAgICogQ29kZTogNTcwMTctNlxyXG4gICAqL1xyXG4gIFByaXZhY3lQb2xpY3lPcmdhbml6YXRpb25Eb2N1bWVudDogXCI1NzAxNy02XCIsXHJcbiAgLyoqXHJcbiAgICogQ29kZTogNTkyODQtMFxyXG4gICAqL1xyXG4gIFBhdGllbnRDb25zZW50OiBcIjU5Mjg0LTBcIixcclxuICAvKipcclxuICAgKiBDb2RlOiA2NDI5Mi02XHJcbiAgICovXHJcbiAgUmVsZWFzZU9mSW5mb3JtYXRpb25Db25zZW50OiBcIjY0MjkyLTZcIixcclxuICAvKipcclxuICAgKiBhY2Q6IEFueSBpbnN0cnVjdGlvbnMsIHdyaXR0ZW4gb3IgZ2l2ZW4gdmVyYmFsbHkgYnkgYSBwYXRpZW50IHRvIGEgaGVhbHRoIGNhcmUgcHJvdmlkZXIgaW4gYW50aWNpcGF0aW9uIG9mIHBvdGVudGlhbCBuZWVkIGZvciBtZWRpY2FsIHRyZWF0bWVudC4gWzIwMDUgSG9ub3IgTXkgV2lzaGVzXVxyXG4gICAqL1xyXG4gIEFkdmFuY2VEaXJlY3RpdmU6IFwiYWNkXCIsXHJcbiAgLyoqXHJcbiAgICogZG5yOiBBIGxlZ2FsIGRvY3VtZW50LCBzaWduZWQgYnkgYm90aCB0aGUgcGF0aWVudCBhbmQgdGhlaXIgcHJvdmlkZXIsIHN0YXRpbmcgYSBkZXNpcmUgbm90IHRvIGhhdmUgQ1BSIGluaXRpYXRlZCBpbiBjYXNlIG9mIGEgY2FyZGlhYyBldmVudC4gTm90ZTogVGhpcyBmb3JtIHdhcyByZXBsYWNlZCBpbiAyMDAzIHdpdGggdGhlIFBoeXNpY2lhbiBPcmRlcnMgZm9yIExpZmUtU3VzdGFpbmluZyBUcmVhdG1lbnQgW1BPTFNUXS5cclxuICAgKi9cclxuICBEb05vdFJlc3VzY2l0YXRlOiBcImRuclwiLFxyXG4gIC8qKlxyXG4gICAqIGVtcmdvbmx5OiBPcHQtaW4gdG8gZGlzY2xvc3VyZSBvZiBoZWFsdGggaW5mb3JtYXRpb24gZm9yIGVtZXJnZW5jeSBvbmx5IGNvbnNlbnQgZGlyZWN0aXZlLiBDb21tZW50OiBUaGlzIGdlbmVyYWwgY29uc2VudCBkaXJlY3RpdmUgc3BlY2lmaWNhbGx5IGxpbWl0cyBkaXNjbG9zdXJlIG9mIGhlYWx0aCBpbmZvcm1hdGlvbiBmb3IgcHVycG9zZSBvZiBlbWVyZ2VuY3kgdHJlYXRtZW50LiBBZGRpdGlvbmFsIHBhcmFtZXRlcnMgbWF5IGZ1cnRoZXIgbGltaXQgdGhlIGRpc2Nsb3N1cmUgdG8gc3BlY2lmaWMgdXNlcnMsIHJvbGVzLCBkdXJhdGlvbiwgdHlwZXMgb2YgaW5mb3JtYXRpb24sIGFuZCBpbXBvc2UgdXNlcyBvYmxpZ2F0aW9ucy4gW0FjdENvbnNlbnREaXJlY3RpdmUgKDIuMTYuODQwLjEuMTEzODgzLjEuMTEuMjA0MjUpXVxyXG4gICAqL1xyXG4gIEVtZXJnZW5jeU9ubHk6IFwiZW1yZ29ubHlcIixcclxuICAvKipcclxuICAgKiBoY2Q6IFBhdGllbnQncyBkb2N1bWVudCB0ZWxsaW5nIHBhdGllbnQncyBoZWFsdGggY2FyZSBwcm92aWRlciB3aGF0IHRoZSBwYXRpZW50IHdhbnRzIG9yIGRvZXMgbm90IHdhbnQgaWYgdGhlIHBhdGllbnQgaXMgZGlhZ25vc2VkIGFzIGJlaW5nIHRlcm1pbmFsbHkgaWxsIGFuZCBpbiBhIHBlcnNpc3RlbnQgdmVnZXRhdGl2ZSBzdGF0ZSBvciBpbiBhIHBlcm1hbmVudGx5IHVuY29uc2Npb3VzIGNvbmRpdGlvbi5bMjAwNSBIb25vciBNeSBXaXNoZXNdXHJcbiAgICovXHJcbiAgSGVhbHRoQ2FyZURpcmVjdGl2ZTogXCJoY2RcIixcclxuICAvKipcclxuICAgKiBDb2RlOiBJQ09MXHJcbiAgICovXHJcbiAgSW5mb3JtYXRpb25Db2xsZWN0aW9uOiBcIklDT0xcIixcclxuICAvKipcclxuICAgKiBDb2RlOiBJRFNDTFxyXG4gICAqL1xyXG4gIEluZm9ybWF0aW9uRGlzY2xvc3VyZTogXCJJRFNDTFwiLFxyXG4gIC8qKlxyXG4gICAqIENvZGU6IElORkFcclxuICAgKi9cclxuICBJbmZvcm1hdGlvbkFjY2VzczogXCJJTkZBXCIsXHJcbiAgLyoqXHJcbiAgICogQ29kZTogSU5GQU9cclxuICAgKi9cclxuICBBY2Nlc3NPbmx5OiBcIklORkFPXCIsXHJcbiAgLyoqXHJcbiAgICogQ29kZTogSU5GQVNPXHJcbiAgICovXHJcbiAgQWNjZXNzQW5kU2F2ZU9ubHk6IFwiSU5GQVNPXCIsXHJcbiAgLyoqXHJcbiAgICogQ29kZTogSVJEU0NMXHJcbiAgICovXHJcbiAgSW5mb3JtYXRpb25SZWRpc2Nsb3N1cmU6IFwiSVJEU0NMXCIsXHJcbiAgLyoqXHJcbiAgICogbnBwOiBBY2tub3dsZWRnZW1lbnQgb2YgY3VzdG9kaWFuIG5vdGljZSBvZiBwcml2YWN5IHByYWN0aWNlcy4gVXNhZ2UgTm90ZXM6IFRoaXMgdHlwZSBvZiBjb25zZW50IGRpcmVjdGl2ZSBhY2tub3dsZWRnZXMgYSBjdXN0b2RpYW4ncyBub3RpY2Ugb2YgcHJpdmFjeSBwcmFjdGljZXMgaW5jbHVkaW5nIGl0cyBwZXJtaXR0ZWQgY29sbGVjdGlvbiwgYWNjZXNzLCB1c2UgYW5kIGRpc2Nsb3N1cmUgb2YgaGVhbHRoIGluZm9ybWF0aW9uIHRvIHVzZXJzIGFuZCBmb3IgcHVycG9zZXMgb2YgdXNlIHNwZWNpZmllZC4gW0FjdENvbnNlbnREaXJlY3RpdmUgKDIuMTYuODQwLjEuMTEzODgzLjEuMTEuMjA0MjUpXVxyXG4gICAqL1xyXG4gIE5vdGljZU9mUHJpdmFjeVByYWN0aWNlczogXCJucHBcIixcclxuICAvKipcclxuICAgKiBwb2xzdDogVGhlIFBoeXNpY2lhbiBPcmRlciBmb3IgTGlmZS1TdXN0YWluaW5nIFRyZWF0bWVudCBmb3JtIHJlY29yZHMgYSBwZXJzb24ncyBoZWFsdGggY2FyZSB3aXNoZXMgZm9yIGVuZCBvZiBsaWZlIGVtZXJnZW5jeSB0cmVhdG1lbnQgYW5kIHRyYW5zbGF0ZXMgdGhlbSBpbnRvIGFuIG9yZGVyIGJ5IHRoZSBwaHlzaWNpYW4uIEl0IG11c3QgYmUgcmV2aWV3ZWQgYW5kIHNpZ25lZCBieSBib3RoIHRoZSBwYXRpZW50IGFuZCB0aGUgcGh5c2ljaWFuLCBBZHZhbmNlZCBSZWdpc3RlcmVkIE51cnNlIFByYWN0aXRpb25lciBvciBQaHlzaWNpYW4gQXNzaXN0YW50LiBbMjAwNSBIb25vciBNeSBXaXNoZXNdIENvbW1lbnQ6IE9wdC1pbiBDb25zZW50IERpcmVjdGl2ZSB3aXRoIHJlc3RyaWN0aW9ucy5cclxuICAgKi9cclxuICBQT0xTVDogXCJwb2xzdFwiLFxyXG4gIC8qKlxyXG4gICAqIHJlc2VhcmNoOiBDb25zZW50IHRvIGhhdmUgaGVhbHRoY2FyZSBpbmZvcm1hdGlvbiBpbiBhbiBlbGVjdHJvbmljIGhlYWx0aCByZWNvcmQgYWNjZXNzZWQgZm9yIHJlc2VhcmNoIHB1cnBvc2VzLiBbVkFMVUUgU0VUOiBBY3RDb25zZW50VHlwZSAoMi4xNi44NDAuMS4xMTM4ODMuMS4xMS4xOTg5NyldXHJcbiAgICovXHJcbiAgUmVzZWFyY2hJbmZvcm1hdGlvbkFjY2VzczogXCJyZXNlYXJjaFwiLFxyXG4gIC8qKlxyXG4gICAqIENvZGU6IFJFU0VBUkNIXHJcbiAgICovXHJcbiAgUmVzZWFyY2hJbmZvcm1hdGlvbkFjY2Vzc1JFU0VBUkNIOiBcIlJFU0VBUkNIXCIsXHJcbiAgLyoqXHJcbiAgICogcnNkaWQ6IENvbnNlbnQgdG8gaGF2ZSBkZS1pZGVudGlmaWVkIGhlYWx0aGNhcmUgaW5mb3JtYXRpb24gaW4gYW4gZWxlY3Ryb25pYyBoZWFsdGggcmVjb3JkIHRoYXQgaXMgYWNjZXNzZWQgZm9yIHJlc2VhcmNoIHB1cnBvc2VzLCBidXQgd2l0aG91dCBjb25zZW50IHRvIHJlLWlkZW50aWZ5IHRoZSBpbmZvcm1hdGlvbiB1bmRlciBhbnkgY2lyY3Vtc3RhbmNlLiBbVkFMVUUgU0VUOiBBY3RDb25zZW50VHlwZSAoMi4xNi44NDAuMS4xMTM4ODMuMS4xMS4xOTg5NylcclxuICAgKi9cclxuICBEZUlkZW50aWZpZWRJbmZvcm1hdGlvbkFjY2VzczogXCJyc2RpZFwiLFxyXG4gIC8qKlxyXG4gICAqIENvZGU6IFJTRElEXHJcbiAgICovXHJcbiAgRGVJZGVudGlmaWVkSW5mb3JtYXRpb25BY2Nlc3NSU0RJRDogXCJSU0RJRFwiLFxyXG4gIC8qKlxyXG4gICAqIHJzcmVpZDogQ29uc2VudCB0byBoYXZlIGRlLWlkZW50aWZpZWQgaGVhbHRoY2FyZSBpbmZvcm1hdGlvbiBpbiBhbiBlbGVjdHJvbmljIGhlYWx0aCByZWNvcmQgdGhhdCBpcyBhY2Nlc3NlZCBmb3IgcmVzZWFyY2ggcHVycG9zZXMgcmUtaWRlbnRpZmllZCB1bmRlciBzcGVjaWZpYyBjaXJjdW1zdGFuY2VzIG91dGxpbmVkIGluIHRoZSBjb25zZW50LiBbVkFMVUUgU0VUOiBBY3RDb25zZW50VHlwZSAoMi4xNi44NDAuMS4xMTM4ODMuMS4xMS4xOTg5NyldXHJcbiAgICovXHJcbiAgUmVJZGVudGlmaWFibGVJbmZvcm1hdGlvbkFjY2VzczogXCJyc3JlaWRcIixcclxuICAvKipcclxuICAgKiBDb2RlOiBSU1JFSURcclxuICAgKi9cclxuICBSZUlkZW50aWZpYWJsZUluZm9ybWF0aW9uQWNjZXNzUlNSRUlEOiBcIlJTUkVJRFwiLFxyXG59IGFzIGNvbnN0O1xyXG5cclxuLyoqXHJcbiAqIFRoaXMgdmFsdWUgc2V0IGluY2x1ZGVzIHNhbXBsZSBDb25zZW50IERpcmVjdGl2ZSBUeXBlIGNvZGVzLCBpbmNsdWRpbmcgc2V2ZXJhbCBjb25zZW50IGRpcmVjdGl2ZSByZWxhdGVkIExPSU5DIGNvZGVzOyBITDcgVkFMVUUgU0VUOiBBY3RDb25zZW50VHlwZSgyLjE2Ljg0MC4xLjExMzg4My4xLjExLjE5ODk3KTsgZXhhbXBsZXMgb2YgVVMgcmVhbG0gY29uc2VudCBkaXJlY3RpdmUgbGVnYWwgZGVzY3JpcHRpb25zIGFuZCByZWZlcmVuY2VzIHRvIG9ubGluZSBhbmQvb3IgZG93bmxvYWRhYmxlIGZvcm1zIHN1Y2ggYXMgdGhlIFNTQS04MjcgQXV0aG9yaXphdGlvbiB0byBEaXNjbG9zZSBJbmZvcm1hdGlvbiB0byB0aGUgU29jaWFsIFNlY3VyaXR5IEFkbWluaXN0cmF0aW9uOyBhbmQgb3RoZXIgYW50aWNpcGF0ZWQgY29uc2VudCBkaXJlY3RpdmVzIHJlbGF0ZWQgdG8gcGFydGljaXBhdGlvbiBpbiBhIGNsaW5pY2FsIHRyaWFsLCBtZWRpY2FsIHByb2NlZHVyZXMsIHJlcHJvZHVjdGl2ZSBwcm9jZWR1cmVzOyBoZWFsdGggY2FyZSBkaXJlY3RpdmUgKExpdmluZyBXaWxsKTsgYWR2YW5jZSBkaXJlY3RpdmUsIGRvIG5vdCByZXN1c2NpdGF0ZSAoRE5SKTsgUGh5c2ljaWFuIE9yZGVycyBmb3IgTGlmZS1TdXN0YWluaW5nIFRyZWF0bWVudCAoUE9MU1QpXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBDb25zZW50Q2F0ZWdvcnlDb2RlVHlwZSA9IHR5cGVvZiBDb25zZW50Q2F0ZWdvcnlDb2Rlc1trZXlvZiB0eXBlb2YgQ29uc2VudENhdGVnb3J5Q29kZXNdO1xyXG4iXX0=