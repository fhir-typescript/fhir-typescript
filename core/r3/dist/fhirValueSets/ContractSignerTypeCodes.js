// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/contract-signer-type|3.0.2
/**
 * This value set includes sample Contract Signer Type codes.
 */
export const ContractSignerTypeCodes = {
    /**
     * AFFL: An entity that has a business or professional relationship with another entity in accordance with an agreement.
     */
    Affiliate: "AFFL",
    /**
     * AGNT: An entity that acts or is authorized to act on behalf of another entity in accordance with an agreement.
     */
    Agent: "AGNT",
    /**
     * AMENDER: A person who has corrected, edited, or amended pre-existing information.
     */
    Amender: "AMENDER",
    /**
     * ASSIGNED: An agent role in which the agent is an Entity acting in the employ of an organization. The focus is on functional role on behalf of the organization, unlike the Employee role where the focus is on the 'Human Resources' relationship between the employee and the organization.
     */
    AssignedEntity: "ASSIGNED",
    /**
     * AUT: An entity that authored specific content. There can be multiple authors of content, which may take such forms as a contract, a healthcare record entry or document, a policy, or a consent directive.
     */
    Author: "AUT",
    /**
     * AUTHN: A person in the role of verifier who attests to the accuracy of an act, but who does not have privileges to legally authenticate information content. An example would be a resident physician who sees a patient and dictates a note, then later signs it. The resident's signature constitutes an authentication.
     */
    Authenticator: "AUTHN",
    /**
     * CIT: The member of a jurisdiction afforded certain rights and encumbered with certain obligation in accordance with jurisdictional policy.
     */
    Citizen: "CIT",
    /**
     * CLAIMANT: A party that makes a claim for coverage under a policy.
     */
    Claimant: "CLAIMANT",
    /**
     * COAUTH: The entity that co-authored content. There can be multiple co-authors of content,which may take such forms as a  such as a contract, a healthcare record entry or document, a policy, or a consent directive.
     */
    CoAuthor: "COAUTH",
    /**
     * CONSENTER: A patient or patient representative who is the grantee in a healthcare related agreement such as a consent for healthcare services, advanced directive, or a privacy consent directive in accordance with jurisdictional, organizational, or patient policy.
     */
    Consenter: "CONSENTER",
    /**
     * CONSWIT: A person who has witnessed and attests to observing a patient being counseled about a healthcare related agreement such as a consent for healthcare services, advanced directive, or a privacy consent directive.
     */
    ConsentWitness: "CONSWIT",
    /**
     * CONT: A person or an organization that provides or receives information regarding another entity. Examples; patient NOK and emergency contacts; guarantor contact; employer contact.
     */
    Contact: "CONT",
    /**
     * COPART: A person who participates in the generation of and attest to veracity of content, but is not an author or co-author. For example a surgeon who is required by institutional, regulatory, or legal rules to sign an operative report, but who was not involved in the authorship of that report.
     */
    CoParticipant: "COPART",
    /**
     * COVPTY: An entity, which is the insured, that receives benefits such as healthcare services, reimbursement for out-of-pocket expenses, or compensation for losses through coverage under the terms of an insurance policy. The underwriter of that policy is the scoping entity. The covered party receives coverage because of some contractual or other relationship with the holder of that policy. Note that a particular policy may cover several individuals one of whom may be, but need not be, the policy holder. Thus the notion of covered party is a role that is distinct from that of the policy holder.
     */
    CoveredParty: "COVPTY",
    /**
     * DELEGATEE: A party to whom some right or authority is delegated by a delegator.
     */
    Delegatee: "DELEGATEE",
    /**
     * delegator: A party that delegates a right or authority to another party.
     */
    Delegator: "delegator",
    /**
     * DEPEND: A person covered under an insurance policy or program based on an association with a subscriber, which is recognized by the policy holder. The dependent has an association with the subscriber such as a financial dependency or personal relationship such as that of a spouse, or a natural or adopted child. The policy holder may be required by law to recognize certain associations or may have discretion about the associations. For example, a policy holder may dictate the criteria for the dependent status of adult children who are students, such as requiring full time enrollment, or may recognize domestic partners as dependents. Under certain circumstances, the dependent may be under the indirect authority of a responsible party acting as a surrogate for the subscriber, for example, if the subscriber is differently-abled or deceased, a guardian ad Lidem or estate executor may be appointed to assume the subscriber's legal standing in the relationship with the dependent.
     */
    Dependent: "DEPEND",
    /**
     * DPOWATT: A person who has been granted the authority to represent or act on another's behalf generally in a manner which is a legally binding upon the person giving such authority as if he or she personally were to do the acts. Unlike ordinary powers of attorney, durable powers can survive for long periods of time, and again, unlike standard powers of attorney, durable powers can continue after incompetency.
     */
    DurablePowerOfAttorney: "DPOWATT",
    /**
     * EMGCON: An entity to be contacted in the event of an emergency
     */
    EmergencyContact: "EMGCON",
    /**
     * EVTWIT: A person who attests to observing an occurrence.  For example, the witness has observed a procedure and is attesting to this fact.
     */
    EventWitness: "EVTWIT",
    /**
     * EXCEST: A person who has been granted the authority to act as an estate executor for a deceased person who was the responsible party.
     */
    ExecutorOfEstate: "EXCEST",
    /**
     * GRANTEE: A person who grants to another person the authority to represent or act on that person's behalf.  Examples include (1) exercising specific rights belonging to the grantee; (2) performing specific duties on behalf of a grantee; and (3) making specific decisions concerning a grantee.
     */
    Grantee: "GRANTEE",
    /**
     * GRANTOR: A person who has been granted the authority to represent or act on another's behalf. Examples include (1) exercising specific rights belonging to the grantee; (2) performing specific duties on behalf of a grantee; and (3) making specific decisions concerning a grantee.
     */
    Grantor: "GRANTOR",
    /**
     * GUADLTM: A person appointed by the court to look out for the best interests of a minor child during the course of legal proceedings.
     */
    GuardianAdLidem: "GUADLTM",
    /**
     * GUAR: A person or organization contractually recognized by the issuer as an entity that has assumed fiscal responsibility (e.g., by making or giving a promise, assurance, or pledge) for another entity's financial obligations by guaranteeing to pay for amounts owed to a particular account.  In a healthcare context, the account may be a patient's billing account for services rendered by a provider or a health plan premium account.
     */
    Guarantor: "GUAR",
    /**
     * GUARD: A person or organization legally empowered with responsibility for the care of a ward.
     */
    Guardian: "GUARD",
    /**
     * HPOWATT: A person who has been granted the authority to represent or act on another's behalf for healthcare related matters in a manner which is a legally binding upon the person giving such authority as if he or she personally were to do the acts. Examples include (1) exercising specific healthcare legal rights belonging to the grantee such as signing a consent directive; (2) performing specific healthcare related legal duties on behalf of a grantee such as claims payment; and (3) making specific healthcare legal decisions concerning a grantee such as consenting to healthcare services.
     */
    HealthcarePowerOfAttorney: "HPOWATT",
    /**
     * HPROV: An entity that is authorized to provide health care services by an authorizing organization or jurisdiction.
     */
    HealthcareProvider: "HPROV",
    /**
     * INF: An entity that is the source of reported information (e.g., a next of kin who answers questions about the patient's history). For history questions, the patient is logically an informant, yet the informant of history questions is implicitly the subject.
     */
    Informant: "INF",
    /**
     * INSBJ: An entity that is the subject of an investigation. This role is scoped by the party responsible for the investigation.
     */
    InvestigationSubject: "INSBJ",
    /**
     * INTPRT: A person who converts spoken or written language into the language of key participants in an event such as when a provider is obtaining a patient's consent to treatment or permission to disclose information.
     */
    Interpreter: "INTPRT",
    /**
     * LEGAUTHN: A person in the role of verifier who attests to the accuracy of information content, and who has privileges to certify the legal authenticity of that content with a signature that constitutes a legal authentication.  For example, a licensed physician who signs a consult authored by a resident physician who authenticated it.
     */
    LegalAuthenticator: "LEGAUTHN",
    /**
     * NMDINS: A party to an insurance policy under which the insurer agrees to indemnify for losses, provides benefits for, or renders services. A named insured may be either a person, non-person living subject, or an organization, or a group of persons, non-person living subject that is the named insured under a comprehensive automobile, disability, or property and casualty policy.  The named insured and may or may not be the policy holder.
     */
    NamedInsured: "NMDINS",
    /**
     * NOK: A person, who is a type of contact, designated to receive notifications on behalf of another person who is a relative.
     */
    NextOfKin: "NOK",
    /**
     * NOTARY: The party credentialed to legally attest to the contract binding by verifying the identity and capacity of the grantor and grantee, and witnessing their signing of the contract or agreement such as a real estate transaction, pre-nuptial agreement, or a will.
     */
    Notary: "NOTARY",
    /**
     * PAT: A person, animal, or other living subject that is the actual or potential recipient of health care services.
     */
    Patient: "PAT",
    /**
     * POWATT: A person who has been granted the authority to represent or act on another's behalf generally in a manner which is a legally binding upon the person giving such authority as if he or she personally were to do the acts. Examples include (1) exercising specific legal rights belonging to the grantee such as signing a contract; (2) performing specific legal duties on behalf of a grantee such as making loan payments; and (3) making specific legal decisions concerning a grantee such as financial investment decisions.
     */
    PowerOfAttorney: "POWATT",
    /**
     * PRIMAUTH: An entity that is the primary or sole author of information content.  In the healthcare context, there can be only one primary author of health information content in a record entry or document.
     */
    PrimaryAuthor: "PRIMAUTH",
    /**
     * PRIRECIP: An entity that may, should receive, or has received information or an object to which it was primarily addressed.
     */
    PrimaryResponsibleParty: "PRIRECIP",
    /**
     * RECIP: An entity that may, should receive, or has received information or an object, which may not have been primarily addressed to it. For example, the staff of a provider, a clearinghouse, or other intermediary.
     */
    Recipient: "RECIP",
    /**
     * RESPRSN: An entity that has legal responsibility for another party.
     */
    ResponsibleParty: "RESPRSN",
    /**
     * REVIEWER: A person, device, or algorithm that has used approved criteria for filtered data for inclusion into the patient record.  Examples: (1) a medical records clerk who scans a document for inclusion in the medical record, enters header information, or catalogues and classifies the data, or a combination thereof; (2) a gateway that receives data from another computer system and interprets that data or changes its format, or both, before entering it into the patient record.
     */
    Reviewer: "REVIEWER",
    /**
     * SOURCE: An automated data source that generates a signature along with content. Examples: (1) the signature for an image that is generated by a device for inclusion in the patient record; (2) the signature for an ECG derived by an ECG system for inclusion in the patient record; (3) the data from a biomedical monitoring device or system that is for inclusion in the patient record.
     */
    Source: "SOURCE",
    /**
     * SPOWATT: A person who has been granted the authority to represent or act on another's behalf for a limited set of specific matters in a manner which is a legally binding upon the person giving such authority as if he or she personally were to do the acts. Examples include (1) exercising specific legal rights belonging to the grantee such as drafting a will; (2) performing specific legal duties on behalf of a grantee such as making a reversible mortgage to pay for end of life expenses; and (3) making specific legal decisions concerning a grantee such as managing a trust.
     */
    ApecialPowerOfAttorney: "SPOWATT",
    /**
     * TRANS: An entity entering the data into the originating system. This includes the transcriptionist for dictated text transcribed into electronic form.
     */
    Transcriber: "TRANS",
    /**
     * VALID: A person who validates a health information document for inclusion in the patient record. For example, a medical student or resident is credentialed to perform history or physical examinations and to write progress notes. The attending physician signs the history and physical examination to validate the entry for inclusion in the patient's medical record.
     */
    Validator: "VALID",
    /**
     * VERF: A person who asserts the correctness and appropriateness of an act or the recording of the act, and is accountable for the assertion that the act or the recording of the act complies with jurisdictional or organizational policy. For example, a physician is required to countersign a verbal order that has previously been recorded in the medical record by a registered nurse who has carried out the verbal order.
     */
    Verifier: "VERF",
    /**
     * WIT: A person witnessing the signature of another party. A witness is not knowledgeable about the content being signed, much less approves of anything stated in the content. For example, an advanced directive witness or a witness that a party to a contract signed that certain demographic or financial information is truthful.
     */
    Witness: "WIT",
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udHJhY3RTaWduZXJUeXBlQ29kZXMuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyVmFsdWVTZXRzL0NvbnRyYWN0U2lnbmVyVHlwZUNvZGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQiwrQ0FBK0M7QUFDL0Msa0NBQWtDO0FBQ2xDLHlFQUF5RTtBQUV6RTs7R0FFRztBQUNILE1BQU0sQ0FBQyxNQUFNLHVCQUF1QixHQUFHO0lBQ3JDOztPQUVHO0lBQ0gsU0FBUyxFQUFFLE1BQU07SUFDakI7O09BRUc7SUFDSCxLQUFLLEVBQUUsTUFBTTtJQUNiOztPQUVHO0lBQ0gsT0FBTyxFQUFFLFNBQVM7SUFDbEI7O09BRUc7SUFDSCxjQUFjLEVBQUUsVUFBVTtJQUMxQjs7T0FFRztJQUNILE1BQU0sRUFBRSxLQUFLO0lBQ2I7O09BRUc7SUFDSCxhQUFhLEVBQUUsT0FBTztJQUN0Qjs7T0FFRztJQUNILE9BQU8sRUFBRSxLQUFLO0lBQ2Q7O09BRUc7SUFDSCxRQUFRLEVBQUUsVUFBVTtJQUNwQjs7T0FFRztJQUNILFFBQVEsRUFBRSxRQUFRO0lBQ2xCOztPQUVHO0lBQ0gsU0FBUyxFQUFFLFdBQVc7SUFDdEI7O09BRUc7SUFDSCxjQUFjLEVBQUUsU0FBUztJQUN6Qjs7T0FFRztJQUNILE9BQU8sRUFBRSxNQUFNO0lBQ2Y7O09BRUc7SUFDSCxhQUFhLEVBQUUsUUFBUTtJQUN2Qjs7T0FFRztJQUNILFlBQVksRUFBRSxRQUFRO0lBQ3RCOztPQUVHO0lBQ0gsU0FBUyxFQUFFLFdBQVc7SUFDdEI7O09BRUc7SUFDSCxTQUFTLEVBQUUsV0FBVztJQUN0Qjs7T0FFRztJQUNILFNBQVMsRUFBRSxRQUFRO0lBQ25COztPQUVHO0lBQ0gsc0JBQXNCLEVBQUUsU0FBUztJQUNqQzs7T0FFRztJQUNILGdCQUFnQixFQUFFLFFBQVE7SUFDMUI7O09BRUc7SUFDSCxZQUFZLEVBQUUsUUFBUTtJQUN0Qjs7T0FFRztJQUNILGdCQUFnQixFQUFFLFFBQVE7SUFDMUI7O09BRUc7SUFDSCxPQUFPLEVBQUUsU0FBUztJQUNsQjs7T0FFRztJQUNILE9BQU8sRUFBRSxTQUFTO0lBQ2xCOztPQUVHO0lBQ0gsZUFBZSxFQUFFLFNBQVM7SUFDMUI7O09BRUc7SUFDSCxTQUFTLEVBQUUsTUFBTTtJQUNqQjs7T0FFRztJQUNILFFBQVEsRUFBRSxPQUFPO0lBQ2pCOztPQUVHO0lBQ0gseUJBQXlCLEVBQUUsU0FBUztJQUNwQzs7T0FFRztJQUNILGtCQUFrQixFQUFFLE9BQU87SUFDM0I7O09BRUc7SUFDSCxTQUFTLEVBQUUsS0FBSztJQUNoQjs7T0FFRztJQUNILG9CQUFvQixFQUFFLE9BQU87SUFDN0I7O09BRUc7SUFDSCxXQUFXLEVBQUUsUUFBUTtJQUNyQjs7T0FFRztJQUNILGtCQUFrQixFQUFFLFVBQVU7SUFDOUI7O09BRUc7SUFDSCxZQUFZLEVBQUUsUUFBUTtJQUN0Qjs7T0FFRztJQUNILFNBQVMsRUFBRSxLQUFLO0lBQ2hCOztPQUVHO0lBQ0gsTUFBTSxFQUFFLFFBQVE7SUFDaEI7O09BRUc7SUFDSCxPQUFPLEVBQUUsS0FBSztJQUNkOztPQUVHO0lBQ0gsZUFBZSxFQUFFLFFBQVE7SUFDekI7O09BRUc7SUFDSCxhQUFhLEVBQUUsVUFBVTtJQUN6Qjs7T0FFRztJQUNILHVCQUF1QixFQUFFLFVBQVU7SUFDbkM7O09BRUc7SUFDSCxTQUFTLEVBQUUsT0FBTztJQUNsQjs7T0FFRztJQUNILGdCQUFnQixFQUFFLFNBQVM7SUFDM0I7O09BRUc7SUFDSCxRQUFRLEVBQUUsVUFBVTtJQUNwQjs7T0FFRztJQUNILE1BQU0sRUFBRSxRQUFRO0lBQ2hCOztPQUVHO0lBQ0gsc0JBQXNCLEVBQUUsU0FBUztJQUNqQzs7T0FFRztJQUNILFdBQVcsRUFBRSxPQUFPO0lBQ3BCOztPQUVHO0lBQ0gsU0FBUyxFQUFFLE9BQU87SUFDbEI7O09BRUc7SUFDSCxRQUFRLEVBQUUsTUFBTTtJQUNoQjs7T0FFRztJQUNILE9BQU8sRUFBRSxLQUFLO0NBQ04sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yMy5jb3JlIHZlcnNpb246IDMuMC4yXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBWYWx1ZVNldDogaHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC9jb250cmFjdC1zaWduZXItdHlwZXwzLjAuMlxyXG5cclxuLyoqXHJcbiAqIFRoaXMgdmFsdWUgc2V0IGluY2x1ZGVzIHNhbXBsZSBDb250cmFjdCBTaWduZXIgVHlwZSBjb2Rlcy5cclxuICovXHJcbmV4cG9ydCBjb25zdCBDb250cmFjdFNpZ25lclR5cGVDb2RlcyA9IHtcclxuICAvKipcclxuICAgKiBBRkZMOiBBbiBlbnRpdHkgdGhhdCBoYXMgYSBidXNpbmVzcyBvciBwcm9mZXNzaW9uYWwgcmVsYXRpb25zaGlwIHdpdGggYW5vdGhlciBlbnRpdHkgaW4gYWNjb3JkYW5jZSB3aXRoIGFuIGFncmVlbWVudC5cclxuICAgKi9cclxuICBBZmZpbGlhdGU6IFwiQUZGTFwiLFxyXG4gIC8qKlxyXG4gICAqIEFHTlQ6IEFuIGVudGl0eSB0aGF0IGFjdHMgb3IgaXMgYXV0aG9yaXplZCB0byBhY3Qgb24gYmVoYWxmIG9mIGFub3RoZXIgZW50aXR5IGluIGFjY29yZGFuY2Ugd2l0aCBhbiBhZ3JlZW1lbnQuXHJcbiAgICovXHJcbiAgQWdlbnQ6IFwiQUdOVFwiLFxyXG4gIC8qKlxyXG4gICAqIEFNRU5ERVI6IEEgcGVyc29uIHdobyBoYXMgY29ycmVjdGVkLCBlZGl0ZWQsIG9yIGFtZW5kZWQgcHJlLWV4aXN0aW5nIGluZm9ybWF0aW9uLlxyXG4gICAqL1xyXG4gIEFtZW5kZXI6IFwiQU1FTkRFUlwiLFxyXG4gIC8qKlxyXG4gICAqIEFTU0lHTkVEOiBBbiBhZ2VudCByb2xlIGluIHdoaWNoIHRoZSBhZ2VudCBpcyBhbiBFbnRpdHkgYWN0aW5nIGluIHRoZSBlbXBsb3kgb2YgYW4gb3JnYW5pemF0aW9uLiBUaGUgZm9jdXMgaXMgb24gZnVuY3Rpb25hbCByb2xlIG9uIGJlaGFsZiBvZiB0aGUgb3JnYW5pemF0aW9uLCB1bmxpa2UgdGhlIEVtcGxveWVlIHJvbGUgd2hlcmUgdGhlIGZvY3VzIGlzIG9uIHRoZSAnSHVtYW4gUmVzb3VyY2VzJyByZWxhdGlvbnNoaXAgYmV0d2VlbiB0aGUgZW1wbG95ZWUgYW5kIHRoZSBvcmdhbml6YXRpb24uXHJcbiAgICovXHJcbiAgQXNzaWduZWRFbnRpdHk6IFwiQVNTSUdORURcIixcclxuICAvKipcclxuICAgKiBBVVQ6IEFuIGVudGl0eSB0aGF0IGF1dGhvcmVkIHNwZWNpZmljIGNvbnRlbnQuIFRoZXJlIGNhbiBiZSBtdWx0aXBsZSBhdXRob3JzIG9mIGNvbnRlbnQsIHdoaWNoIG1heSB0YWtlIHN1Y2ggZm9ybXMgYXMgYSBjb250cmFjdCwgYSBoZWFsdGhjYXJlIHJlY29yZCBlbnRyeSBvciBkb2N1bWVudCwgYSBwb2xpY3ksIG9yIGEgY29uc2VudCBkaXJlY3RpdmUuXHJcbiAgICovXHJcbiAgQXV0aG9yOiBcIkFVVFwiLFxyXG4gIC8qKlxyXG4gICAqIEFVVEhOOiBBIHBlcnNvbiBpbiB0aGUgcm9sZSBvZiB2ZXJpZmllciB3aG8gYXR0ZXN0cyB0byB0aGUgYWNjdXJhY3kgb2YgYW4gYWN0LCBidXQgd2hvIGRvZXMgbm90IGhhdmUgcHJpdmlsZWdlcyB0byBsZWdhbGx5IGF1dGhlbnRpY2F0ZSBpbmZvcm1hdGlvbiBjb250ZW50LiBBbiBleGFtcGxlIHdvdWxkIGJlIGEgcmVzaWRlbnQgcGh5c2ljaWFuIHdobyBzZWVzIGEgcGF0aWVudCBhbmQgZGljdGF0ZXMgYSBub3RlLCB0aGVuIGxhdGVyIHNpZ25zIGl0LiBUaGUgcmVzaWRlbnQncyBzaWduYXR1cmUgY29uc3RpdHV0ZXMgYW4gYXV0aGVudGljYXRpb24uXHJcbiAgICovXHJcbiAgQXV0aGVudGljYXRvcjogXCJBVVRITlwiLFxyXG4gIC8qKlxyXG4gICAqIENJVDogVGhlIG1lbWJlciBvZiBhIGp1cmlzZGljdGlvbiBhZmZvcmRlZCBjZXJ0YWluIHJpZ2h0cyBhbmQgZW5jdW1iZXJlZCB3aXRoIGNlcnRhaW4gb2JsaWdhdGlvbiBpbiBhY2NvcmRhbmNlIHdpdGgganVyaXNkaWN0aW9uYWwgcG9saWN5LlxyXG4gICAqL1xyXG4gIENpdGl6ZW46IFwiQ0lUXCIsXHJcbiAgLyoqXHJcbiAgICogQ0xBSU1BTlQ6IEEgcGFydHkgdGhhdCBtYWtlcyBhIGNsYWltIGZvciBjb3ZlcmFnZSB1bmRlciBhIHBvbGljeS5cclxuICAgKi9cclxuICBDbGFpbWFudDogXCJDTEFJTUFOVFwiLFxyXG4gIC8qKlxyXG4gICAqIENPQVVUSDogVGhlIGVudGl0eSB0aGF0IGNvLWF1dGhvcmVkIGNvbnRlbnQuIFRoZXJlIGNhbiBiZSBtdWx0aXBsZSBjby1hdXRob3JzIG9mIGNvbnRlbnQsd2hpY2ggbWF5IHRha2Ugc3VjaCBmb3JtcyBhcyBhICBzdWNoIGFzIGEgY29udHJhY3QsIGEgaGVhbHRoY2FyZSByZWNvcmQgZW50cnkgb3IgZG9jdW1lbnQsIGEgcG9saWN5LCBvciBhIGNvbnNlbnQgZGlyZWN0aXZlLlxyXG4gICAqL1xyXG4gIENvQXV0aG9yOiBcIkNPQVVUSFwiLFxyXG4gIC8qKlxyXG4gICAqIENPTlNFTlRFUjogQSBwYXRpZW50IG9yIHBhdGllbnQgcmVwcmVzZW50YXRpdmUgd2hvIGlzIHRoZSBncmFudGVlIGluIGEgaGVhbHRoY2FyZSByZWxhdGVkIGFncmVlbWVudCBzdWNoIGFzIGEgY29uc2VudCBmb3IgaGVhbHRoY2FyZSBzZXJ2aWNlcywgYWR2YW5jZWQgZGlyZWN0aXZlLCBvciBhIHByaXZhY3kgY29uc2VudCBkaXJlY3RpdmUgaW4gYWNjb3JkYW5jZSB3aXRoIGp1cmlzZGljdGlvbmFsLCBvcmdhbml6YXRpb25hbCwgb3IgcGF0aWVudCBwb2xpY3kuXHJcbiAgICovXHJcbiAgQ29uc2VudGVyOiBcIkNPTlNFTlRFUlwiLFxyXG4gIC8qKlxyXG4gICAqIENPTlNXSVQ6IEEgcGVyc29uIHdobyBoYXMgd2l0bmVzc2VkIGFuZCBhdHRlc3RzIHRvIG9ic2VydmluZyBhIHBhdGllbnQgYmVpbmcgY291bnNlbGVkIGFib3V0IGEgaGVhbHRoY2FyZSByZWxhdGVkIGFncmVlbWVudCBzdWNoIGFzIGEgY29uc2VudCBmb3IgaGVhbHRoY2FyZSBzZXJ2aWNlcywgYWR2YW5jZWQgZGlyZWN0aXZlLCBvciBhIHByaXZhY3kgY29uc2VudCBkaXJlY3RpdmUuXHJcbiAgICovXHJcbiAgQ29uc2VudFdpdG5lc3M6IFwiQ09OU1dJVFwiLFxyXG4gIC8qKlxyXG4gICAqIENPTlQ6IEEgcGVyc29uIG9yIGFuIG9yZ2FuaXphdGlvbiB0aGF0IHByb3ZpZGVzIG9yIHJlY2VpdmVzIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBhbm90aGVyIGVudGl0eS4gRXhhbXBsZXM7IHBhdGllbnQgTk9LIGFuZCBlbWVyZ2VuY3kgY29udGFjdHM7IGd1YXJhbnRvciBjb250YWN0OyBlbXBsb3llciBjb250YWN0LlxyXG4gICAqL1xyXG4gIENvbnRhY3Q6IFwiQ09OVFwiLFxyXG4gIC8qKlxyXG4gICAqIENPUEFSVDogQSBwZXJzb24gd2hvIHBhcnRpY2lwYXRlcyBpbiB0aGUgZ2VuZXJhdGlvbiBvZiBhbmQgYXR0ZXN0IHRvIHZlcmFjaXR5IG9mIGNvbnRlbnQsIGJ1dCBpcyBub3QgYW4gYXV0aG9yIG9yIGNvLWF1dGhvci4gRm9yIGV4YW1wbGUgYSBzdXJnZW9uIHdobyBpcyByZXF1aXJlZCBieSBpbnN0aXR1dGlvbmFsLCByZWd1bGF0b3J5LCBvciBsZWdhbCBydWxlcyB0byBzaWduIGFuIG9wZXJhdGl2ZSByZXBvcnQsIGJ1dCB3aG8gd2FzIG5vdCBpbnZvbHZlZCBpbiB0aGUgYXV0aG9yc2hpcCBvZiB0aGF0IHJlcG9ydC5cclxuICAgKi9cclxuICBDb1BhcnRpY2lwYW50OiBcIkNPUEFSVFwiLFxyXG4gIC8qKlxyXG4gICAqIENPVlBUWTogQW4gZW50aXR5LCB3aGljaCBpcyB0aGUgaW5zdXJlZCwgdGhhdCByZWNlaXZlcyBiZW5lZml0cyBzdWNoIGFzIGhlYWx0aGNhcmUgc2VydmljZXMsIHJlaW1idXJzZW1lbnQgZm9yIG91dC1vZi1wb2NrZXQgZXhwZW5zZXMsIG9yIGNvbXBlbnNhdGlvbiBmb3IgbG9zc2VzIHRocm91Z2ggY292ZXJhZ2UgdW5kZXIgdGhlIHRlcm1zIG9mIGFuIGluc3VyYW5jZSBwb2xpY3kuIFRoZSB1bmRlcndyaXRlciBvZiB0aGF0IHBvbGljeSBpcyB0aGUgc2NvcGluZyBlbnRpdHkuIFRoZSBjb3ZlcmVkIHBhcnR5IHJlY2VpdmVzIGNvdmVyYWdlIGJlY2F1c2Ugb2Ygc29tZSBjb250cmFjdHVhbCBvciBvdGhlciByZWxhdGlvbnNoaXAgd2l0aCB0aGUgaG9sZGVyIG9mIHRoYXQgcG9saWN5LiBOb3RlIHRoYXQgYSBwYXJ0aWN1bGFyIHBvbGljeSBtYXkgY292ZXIgc2V2ZXJhbCBpbmRpdmlkdWFscyBvbmUgb2Ygd2hvbSBtYXkgYmUsIGJ1dCBuZWVkIG5vdCBiZSwgdGhlIHBvbGljeSBob2xkZXIuIFRodXMgdGhlIG5vdGlvbiBvZiBjb3ZlcmVkIHBhcnR5IGlzIGEgcm9sZSB0aGF0IGlzIGRpc3RpbmN0IGZyb20gdGhhdCBvZiB0aGUgcG9saWN5IGhvbGRlci5cclxuICAgKi9cclxuICBDb3ZlcmVkUGFydHk6IFwiQ09WUFRZXCIsXHJcbiAgLyoqXHJcbiAgICogREVMRUdBVEVFOiBBIHBhcnR5IHRvIHdob20gc29tZSByaWdodCBvciBhdXRob3JpdHkgaXMgZGVsZWdhdGVkIGJ5IGEgZGVsZWdhdG9yLlxyXG4gICAqL1xyXG4gIERlbGVnYXRlZTogXCJERUxFR0FURUVcIixcclxuICAvKipcclxuICAgKiBkZWxlZ2F0b3I6IEEgcGFydHkgdGhhdCBkZWxlZ2F0ZXMgYSByaWdodCBvciBhdXRob3JpdHkgdG8gYW5vdGhlciBwYXJ0eS5cclxuICAgKi9cclxuICBEZWxlZ2F0b3I6IFwiZGVsZWdhdG9yXCIsXHJcbiAgLyoqXHJcbiAgICogREVQRU5EOiBBIHBlcnNvbiBjb3ZlcmVkIHVuZGVyIGFuIGluc3VyYW5jZSBwb2xpY3kgb3IgcHJvZ3JhbSBiYXNlZCBvbiBhbiBhc3NvY2lhdGlvbiB3aXRoIGEgc3Vic2NyaWJlciwgd2hpY2ggaXMgcmVjb2duaXplZCBieSB0aGUgcG9saWN5IGhvbGRlci4gVGhlIGRlcGVuZGVudCBoYXMgYW4gYXNzb2NpYXRpb24gd2l0aCB0aGUgc3Vic2NyaWJlciBzdWNoIGFzIGEgZmluYW5jaWFsIGRlcGVuZGVuY3kgb3IgcGVyc29uYWwgcmVsYXRpb25zaGlwIHN1Y2ggYXMgdGhhdCBvZiBhIHNwb3VzZSwgb3IgYSBuYXR1cmFsIG9yIGFkb3B0ZWQgY2hpbGQuIFRoZSBwb2xpY3kgaG9sZGVyIG1heSBiZSByZXF1aXJlZCBieSBsYXcgdG8gcmVjb2duaXplIGNlcnRhaW4gYXNzb2NpYXRpb25zIG9yIG1heSBoYXZlIGRpc2NyZXRpb24gYWJvdXQgdGhlIGFzc29jaWF0aW9ucy4gRm9yIGV4YW1wbGUsIGEgcG9saWN5IGhvbGRlciBtYXkgZGljdGF0ZSB0aGUgY3JpdGVyaWEgZm9yIHRoZSBkZXBlbmRlbnQgc3RhdHVzIG9mIGFkdWx0IGNoaWxkcmVuIHdobyBhcmUgc3R1ZGVudHMsIHN1Y2ggYXMgcmVxdWlyaW5nIGZ1bGwgdGltZSBlbnJvbGxtZW50LCBvciBtYXkgcmVjb2duaXplIGRvbWVzdGljIHBhcnRuZXJzIGFzIGRlcGVuZGVudHMuIFVuZGVyIGNlcnRhaW4gY2lyY3Vtc3RhbmNlcywgdGhlIGRlcGVuZGVudCBtYXkgYmUgdW5kZXIgdGhlIGluZGlyZWN0IGF1dGhvcml0eSBvZiBhIHJlc3BvbnNpYmxlIHBhcnR5IGFjdGluZyBhcyBhIHN1cnJvZ2F0ZSBmb3IgdGhlIHN1YnNjcmliZXIsIGZvciBleGFtcGxlLCBpZiB0aGUgc3Vic2NyaWJlciBpcyBkaWZmZXJlbnRseS1hYmxlZCBvciBkZWNlYXNlZCwgYSBndWFyZGlhbiBhZCBMaWRlbSBvciBlc3RhdGUgZXhlY3V0b3IgbWF5IGJlIGFwcG9pbnRlZCB0byBhc3N1bWUgdGhlIHN1YnNjcmliZXIncyBsZWdhbCBzdGFuZGluZyBpbiB0aGUgcmVsYXRpb25zaGlwIHdpdGggdGhlIGRlcGVuZGVudC5cclxuICAgKi9cclxuICBEZXBlbmRlbnQ6IFwiREVQRU5EXCIsXHJcbiAgLyoqXHJcbiAgICogRFBPV0FUVDogQSBwZXJzb24gd2hvIGhhcyBiZWVuIGdyYW50ZWQgdGhlIGF1dGhvcml0eSB0byByZXByZXNlbnQgb3IgYWN0IG9uIGFub3RoZXIncyBiZWhhbGYgZ2VuZXJhbGx5IGluIGEgbWFubmVyIHdoaWNoIGlzIGEgbGVnYWxseSBiaW5kaW5nIHVwb24gdGhlIHBlcnNvbiBnaXZpbmcgc3VjaCBhdXRob3JpdHkgYXMgaWYgaGUgb3Igc2hlIHBlcnNvbmFsbHkgd2VyZSB0byBkbyB0aGUgYWN0cy4gVW5saWtlIG9yZGluYXJ5IHBvd2VycyBvZiBhdHRvcm5leSwgZHVyYWJsZSBwb3dlcnMgY2FuIHN1cnZpdmUgZm9yIGxvbmcgcGVyaW9kcyBvZiB0aW1lLCBhbmQgYWdhaW4sIHVubGlrZSBzdGFuZGFyZCBwb3dlcnMgb2YgYXR0b3JuZXksIGR1cmFibGUgcG93ZXJzIGNhbiBjb250aW51ZSBhZnRlciBpbmNvbXBldGVuY3kuXHJcbiAgICovXHJcbiAgRHVyYWJsZVBvd2VyT2ZBdHRvcm5leTogXCJEUE9XQVRUXCIsXHJcbiAgLyoqXHJcbiAgICogRU1HQ09OOiBBbiBlbnRpdHkgdG8gYmUgY29udGFjdGVkIGluIHRoZSBldmVudCBvZiBhbiBlbWVyZ2VuY3lcclxuICAgKi9cclxuICBFbWVyZ2VuY3lDb250YWN0OiBcIkVNR0NPTlwiLFxyXG4gIC8qKlxyXG4gICAqIEVWVFdJVDogQSBwZXJzb24gd2hvIGF0dGVzdHMgdG8gb2JzZXJ2aW5nIGFuIG9jY3VycmVuY2UuICBGb3IgZXhhbXBsZSwgdGhlIHdpdG5lc3MgaGFzIG9ic2VydmVkIGEgcHJvY2VkdXJlIGFuZCBpcyBhdHRlc3RpbmcgdG8gdGhpcyBmYWN0LlxyXG4gICAqL1xyXG4gIEV2ZW50V2l0bmVzczogXCJFVlRXSVRcIixcclxuICAvKipcclxuICAgKiBFWENFU1Q6IEEgcGVyc29uIHdobyBoYXMgYmVlbiBncmFudGVkIHRoZSBhdXRob3JpdHkgdG8gYWN0IGFzIGFuIGVzdGF0ZSBleGVjdXRvciBmb3IgYSBkZWNlYXNlZCBwZXJzb24gd2hvIHdhcyB0aGUgcmVzcG9uc2libGUgcGFydHkuXHJcbiAgICovXHJcbiAgRXhlY3V0b3JPZkVzdGF0ZTogXCJFWENFU1RcIixcclxuICAvKipcclxuICAgKiBHUkFOVEVFOiBBIHBlcnNvbiB3aG8gZ3JhbnRzIHRvIGFub3RoZXIgcGVyc29uIHRoZSBhdXRob3JpdHkgdG8gcmVwcmVzZW50IG9yIGFjdCBvbiB0aGF0IHBlcnNvbidzIGJlaGFsZi4gIEV4YW1wbGVzIGluY2x1ZGUgKDEpIGV4ZXJjaXNpbmcgc3BlY2lmaWMgcmlnaHRzIGJlbG9uZ2luZyB0byB0aGUgZ3JhbnRlZTsgKDIpIHBlcmZvcm1pbmcgc3BlY2lmaWMgZHV0aWVzIG9uIGJlaGFsZiBvZiBhIGdyYW50ZWU7IGFuZCAoMykgbWFraW5nIHNwZWNpZmljIGRlY2lzaW9ucyBjb25jZXJuaW5nIGEgZ3JhbnRlZS5cclxuICAgKi9cclxuICBHcmFudGVlOiBcIkdSQU5URUVcIixcclxuICAvKipcclxuICAgKiBHUkFOVE9SOiBBIHBlcnNvbiB3aG8gaGFzIGJlZW4gZ3JhbnRlZCB0aGUgYXV0aG9yaXR5IHRvIHJlcHJlc2VudCBvciBhY3Qgb24gYW5vdGhlcidzIGJlaGFsZi4gRXhhbXBsZXMgaW5jbHVkZSAoMSkgZXhlcmNpc2luZyBzcGVjaWZpYyByaWdodHMgYmVsb25naW5nIHRvIHRoZSBncmFudGVlOyAoMikgcGVyZm9ybWluZyBzcGVjaWZpYyBkdXRpZXMgb24gYmVoYWxmIG9mIGEgZ3JhbnRlZTsgYW5kICgzKSBtYWtpbmcgc3BlY2lmaWMgZGVjaXNpb25zIGNvbmNlcm5pbmcgYSBncmFudGVlLlxyXG4gICAqL1xyXG4gIEdyYW50b3I6IFwiR1JBTlRPUlwiLFxyXG4gIC8qKlxyXG4gICAqIEdVQURMVE06IEEgcGVyc29uIGFwcG9pbnRlZCBieSB0aGUgY291cnQgdG8gbG9vayBvdXQgZm9yIHRoZSBiZXN0IGludGVyZXN0cyBvZiBhIG1pbm9yIGNoaWxkIGR1cmluZyB0aGUgY291cnNlIG9mIGxlZ2FsIHByb2NlZWRpbmdzLlxyXG4gICAqL1xyXG4gIEd1YXJkaWFuQWRMaWRlbTogXCJHVUFETFRNXCIsXHJcbiAgLyoqXHJcbiAgICogR1VBUjogQSBwZXJzb24gb3Igb3JnYW5pemF0aW9uIGNvbnRyYWN0dWFsbHkgcmVjb2duaXplZCBieSB0aGUgaXNzdWVyIGFzIGFuIGVudGl0eSB0aGF0IGhhcyBhc3N1bWVkIGZpc2NhbCByZXNwb25zaWJpbGl0eSAoZS5nLiwgYnkgbWFraW5nIG9yIGdpdmluZyBhIHByb21pc2UsIGFzc3VyYW5jZSwgb3IgcGxlZGdlKSBmb3IgYW5vdGhlciBlbnRpdHkncyBmaW5hbmNpYWwgb2JsaWdhdGlvbnMgYnkgZ3VhcmFudGVlaW5nIHRvIHBheSBmb3IgYW1vdW50cyBvd2VkIHRvIGEgcGFydGljdWxhciBhY2NvdW50LiAgSW4gYSBoZWFsdGhjYXJlIGNvbnRleHQsIHRoZSBhY2NvdW50IG1heSBiZSBhIHBhdGllbnQncyBiaWxsaW5nIGFjY291bnQgZm9yIHNlcnZpY2VzIHJlbmRlcmVkIGJ5IGEgcHJvdmlkZXIgb3IgYSBoZWFsdGggcGxhbiBwcmVtaXVtIGFjY291bnQuXHJcbiAgICovXHJcbiAgR3VhcmFudG9yOiBcIkdVQVJcIixcclxuICAvKipcclxuICAgKiBHVUFSRDogQSBwZXJzb24gb3Igb3JnYW5pemF0aW9uIGxlZ2FsbHkgZW1wb3dlcmVkIHdpdGggcmVzcG9uc2liaWxpdHkgZm9yIHRoZSBjYXJlIG9mIGEgd2FyZC5cclxuICAgKi9cclxuICBHdWFyZGlhbjogXCJHVUFSRFwiLFxyXG4gIC8qKlxyXG4gICAqIEhQT1dBVFQ6IEEgcGVyc29uIHdobyBoYXMgYmVlbiBncmFudGVkIHRoZSBhdXRob3JpdHkgdG8gcmVwcmVzZW50IG9yIGFjdCBvbiBhbm90aGVyJ3MgYmVoYWxmIGZvciBoZWFsdGhjYXJlIHJlbGF0ZWQgbWF0dGVycyBpbiBhIG1hbm5lciB3aGljaCBpcyBhIGxlZ2FsbHkgYmluZGluZyB1cG9uIHRoZSBwZXJzb24gZ2l2aW5nIHN1Y2ggYXV0aG9yaXR5IGFzIGlmIGhlIG9yIHNoZSBwZXJzb25hbGx5IHdlcmUgdG8gZG8gdGhlIGFjdHMuIEV4YW1wbGVzIGluY2x1ZGUgKDEpIGV4ZXJjaXNpbmcgc3BlY2lmaWMgaGVhbHRoY2FyZSBsZWdhbCByaWdodHMgYmVsb25naW5nIHRvIHRoZSBncmFudGVlIHN1Y2ggYXMgc2lnbmluZyBhIGNvbnNlbnQgZGlyZWN0aXZlOyAoMikgcGVyZm9ybWluZyBzcGVjaWZpYyBoZWFsdGhjYXJlIHJlbGF0ZWQgbGVnYWwgZHV0aWVzIG9uIGJlaGFsZiBvZiBhIGdyYW50ZWUgc3VjaCBhcyBjbGFpbXMgcGF5bWVudDsgYW5kICgzKSBtYWtpbmcgc3BlY2lmaWMgaGVhbHRoY2FyZSBsZWdhbCBkZWNpc2lvbnMgY29uY2VybmluZyBhIGdyYW50ZWUgc3VjaCBhcyBjb25zZW50aW5nIHRvIGhlYWx0aGNhcmUgc2VydmljZXMuXHJcbiAgICovXHJcbiAgSGVhbHRoY2FyZVBvd2VyT2ZBdHRvcm5leTogXCJIUE9XQVRUXCIsXHJcbiAgLyoqXHJcbiAgICogSFBST1Y6IEFuIGVudGl0eSB0aGF0IGlzIGF1dGhvcml6ZWQgdG8gcHJvdmlkZSBoZWFsdGggY2FyZSBzZXJ2aWNlcyBieSBhbiBhdXRob3JpemluZyBvcmdhbml6YXRpb24gb3IganVyaXNkaWN0aW9uLlxyXG4gICAqL1xyXG4gIEhlYWx0aGNhcmVQcm92aWRlcjogXCJIUFJPVlwiLFxyXG4gIC8qKlxyXG4gICAqIElORjogQW4gZW50aXR5IHRoYXQgaXMgdGhlIHNvdXJjZSBvZiByZXBvcnRlZCBpbmZvcm1hdGlvbiAoZS5nLiwgYSBuZXh0IG9mIGtpbiB3aG8gYW5zd2VycyBxdWVzdGlvbnMgYWJvdXQgdGhlIHBhdGllbnQncyBoaXN0b3J5KS4gRm9yIGhpc3RvcnkgcXVlc3Rpb25zLCB0aGUgcGF0aWVudCBpcyBsb2dpY2FsbHkgYW4gaW5mb3JtYW50LCB5ZXQgdGhlIGluZm9ybWFudCBvZiBoaXN0b3J5IHF1ZXN0aW9ucyBpcyBpbXBsaWNpdGx5IHRoZSBzdWJqZWN0LlxyXG4gICAqL1xyXG4gIEluZm9ybWFudDogXCJJTkZcIixcclxuICAvKipcclxuICAgKiBJTlNCSjogQW4gZW50aXR5IHRoYXQgaXMgdGhlIHN1YmplY3Qgb2YgYW4gaW52ZXN0aWdhdGlvbi4gVGhpcyByb2xlIGlzIHNjb3BlZCBieSB0aGUgcGFydHkgcmVzcG9uc2libGUgZm9yIHRoZSBpbnZlc3RpZ2F0aW9uLlxyXG4gICAqL1xyXG4gIEludmVzdGlnYXRpb25TdWJqZWN0OiBcIklOU0JKXCIsXHJcbiAgLyoqXHJcbiAgICogSU5UUFJUOiBBIHBlcnNvbiB3aG8gY29udmVydHMgc3Bva2VuIG9yIHdyaXR0ZW4gbGFuZ3VhZ2UgaW50byB0aGUgbGFuZ3VhZ2Ugb2Yga2V5IHBhcnRpY2lwYW50cyBpbiBhbiBldmVudCBzdWNoIGFzIHdoZW4gYSBwcm92aWRlciBpcyBvYnRhaW5pbmcgYSBwYXRpZW50J3MgY29uc2VudCB0byB0cmVhdG1lbnQgb3IgcGVybWlzc2lvbiB0byBkaXNjbG9zZSBpbmZvcm1hdGlvbi5cclxuICAgKi9cclxuICBJbnRlcnByZXRlcjogXCJJTlRQUlRcIixcclxuICAvKipcclxuICAgKiBMRUdBVVRITjogQSBwZXJzb24gaW4gdGhlIHJvbGUgb2YgdmVyaWZpZXIgd2hvIGF0dGVzdHMgdG8gdGhlIGFjY3VyYWN5IG9mIGluZm9ybWF0aW9uIGNvbnRlbnQsIGFuZCB3aG8gaGFzIHByaXZpbGVnZXMgdG8gY2VydGlmeSB0aGUgbGVnYWwgYXV0aGVudGljaXR5IG9mIHRoYXQgY29udGVudCB3aXRoIGEgc2lnbmF0dXJlIHRoYXQgY29uc3RpdHV0ZXMgYSBsZWdhbCBhdXRoZW50aWNhdGlvbi4gIEZvciBleGFtcGxlLCBhIGxpY2Vuc2VkIHBoeXNpY2lhbiB3aG8gc2lnbnMgYSBjb25zdWx0IGF1dGhvcmVkIGJ5IGEgcmVzaWRlbnQgcGh5c2ljaWFuIHdobyBhdXRoZW50aWNhdGVkIGl0LlxyXG4gICAqL1xyXG4gIExlZ2FsQXV0aGVudGljYXRvcjogXCJMRUdBVVRITlwiLFxyXG4gIC8qKlxyXG4gICAqIE5NRElOUzogQSBwYXJ0eSB0byBhbiBpbnN1cmFuY2UgcG9saWN5IHVuZGVyIHdoaWNoIHRoZSBpbnN1cmVyIGFncmVlcyB0byBpbmRlbW5pZnkgZm9yIGxvc3NlcywgcHJvdmlkZXMgYmVuZWZpdHMgZm9yLCBvciByZW5kZXJzIHNlcnZpY2VzLiBBIG5hbWVkIGluc3VyZWQgbWF5IGJlIGVpdGhlciBhIHBlcnNvbiwgbm9uLXBlcnNvbiBsaXZpbmcgc3ViamVjdCwgb3IgYW4gb3JnYW5pemF0aW9uLCBvciBhIGdyb3VwIG9mIHBlcnNvbnMsIG5vbi1wZXJzb24gbGl2aW5nIHN1YmplY3QgdGhhdCBpcyB0aGUgbmFtZWQgaW5zdXJlZCB1bmRlciBhIGNvbXByZWhlbnNpdmUgYXV0b21vYmlsZSwgZGlzYWJpbGl0eSwgb3IgcHJvcGVydHkgYW5kIGNhc3VhbHR5IHBvbGljeS4gIFRoZSBuYW1lZCBpbnN1cmVkIGFuZCBtYXkgb3IgbWF5IG5vdCBiZSB0aGUgcG9saWN5IGhvbGRlci5cclxuICAgKi9cclxuICBOYW1lZEluc3VyZWQ6IFwiTk1ESU5TXCIsXHJcbiAgLyoqXHJcbiAgICogTk9LOiBBIHBlcnNvbiwgd2hvIGlzIGEgdHlwZSBvZiBjb250YWN0LCBkZXNpZ25hdGVkIHRvIHJlY2VpdmUgbm90aWZpY2F0aW9ucyBvbiBiZWhhbGYgb2YgYW5vdGhlciBwZXJzb24gd2hvIGlzIGEgcmVsYXRpdmUuXHJcbiAgICovXHJcbiAgTmV4dE9mS2luOiBcIk5PS1wiLFxyXG4gIC8qKlxyXG4gICAqIE5PVEFSWTogVGhlIHBhcnR5IGNyZWRlbnRpYWxlZCB0byBsZWdhbGx5IGF0dGVzdCB0byB0aGUgY29udHJhY3QgYmluZGluZyBieSB2ZXJpZnlpbmcgdGhlIGlkZW50aXR5IGFuZCBjYXBhY2l0eSBvZiB0aGUgZ3JhbnRvciBhbmQgZ3JhbnRlZSwgYW5kIHdpdG5lc3NpbmcgdGhlaXIgc2lnbmluZyBvZiB0aGUgY29udHJhY3Qgb3IgYWdyZWVtZW50IHN1Y2ggYXMgYSByZWFsIGVzdGF0ZSB0cmFuc2FjdGlvbiwgcHJlLW51cHRpYWwgYWdyZWVtZW50LCBvciBhIHdpbGwuXHJcbiAgICovXHJcbiAgTm90YXJ5OiBcIk5PVEFSWVwiLFxyXG4gIC8qKlxyXG4gICAqIFBBVDogQSBwZXJzb24sIGFuaW1hbCwgb3Igb3RoZXIgbGl2aW5nIHN1YmplY3QgdGhhdCBpcyB0aGUgYWN0dWFsIG9yIHBvdGVudGlhbCByZWNpcGllbnQgb2YgaGVhbHRoIGNhcmUgc2VydmljZXMuXHJcbiAgICovXHJcbiAgUGF0aWVudDogXCJQQVRcIixcclxuICAvKipcclxuICAgKiBQT1dBVFQ6IEEgcGVyc29uIHdobyBoYXMgYmVlbiBncmFudGVkIHRoZSBhdXRob3JpdHkgdG8gcmVwcmVzZW50IG9yIGFjdCBvbiBhbm90aGVyJ3MgYmVoYWxmIGdlbmVyYWxseSBpbiBhIG1hbm5lciB3aGljaCBpcyBhIGxlZ2FsbHkgYmluZGluZyB1cG9uIHRoZSBwZXJzb24gZ2l2aW5nIHN1Y2ggYXV0aG9yaXR5IGFzIGlmIGhlIG9yIHNoZSBwZXJzb25hbGx5IHdlcmUgdG8gZG8gdGhlIGFjdHMuIEV4YW1wbGVzIGluY2x1ZGUgKDEpIGV4ZXJjaXNpbmcgc3BlY2lmaWMgbGVnYWwgcmlnaHRzIGJlbG9uZ2luZyB0byB0aGUgZ3JhbnRlZSBzdWNoIGFzIHNpZ25pbmcgYSBjb250cmFjdDsgKDIpIHBlcmZvcm1pbmcgc3BlY2lmaWMgbGVnYWwgZHV0aWVzIG9uIGJlaGFsZiBvZiBhIGdyYW50ZWUgc3VjaCBhcyBtYWtpbmcgbG9hbiBwYXltZW50czsgYW5kICgzKSBtYWtpbmcgc3BlY2lmaWMgbGVnYWwgZGVjaXNpb25zIGNvbmNlcm5pbmcgYSBncmFudGVlIHN1Y2ggYXMgZmluYW5jaWFsIGludmVzdG1lbnQgZGVjaXNpb25zLlxyXG4gICAqL1xyXG4gIFBvd2VyT2ZBdHRvcm5leTogXCJQT1dBVFRcIixcclxuICAvKipcclxuICAgKiBQUklNQVVUSDogQW4gZW50aXR5IHRoYXQgaXMgdGhlIHByaW1hcnkgb3Igc29sZSBhdXRob3Igb2YgaW5mb3JtYXRpb24gY29udGVudC4gIEluIHRoZSBoZWFsdGhjYXJlIGNvbnRleHQsIHRoZXJlIGNhbiBiZSBvbmx5IG9uZSBwcmltYXJ5IGF1dGhvciBvZiBoZWFsdGggaW5mb3JtYXRpb24gY29udGVudCBpbiBhIHJlY29yZCBlbnRyeSBvciBkb2N1bWVudC5cclxuICAgKi9cclxuICBQcmltYXJ5QXV0aG9yOiBcIlBSSU1BVVRIXCIsXHJcbiAgLyoqXHJcbiAgICogUFJJUkVDSVA6IEFuIGVudGl0eSB0aGF0IG1heSwgc2hvdWxkIHJlY2VpdmUsIG9yIGhhcyByZWNlaXZlZCBpbmZvcm1hdGlvbiBvciBhbiBvYmplY3QgdG8gd2hpY2ggaXQgd2FzIHByaW1hcmlseSBhZGRyZXNzZWQuXHJcbiAgICovXHJcbiAgUHJpbWFyeVJlc3BvbnNpYmxlUGFydHk6IFwiUFJJUkVDSVBcIixcclxuICAvKipcclxuICAgKiBSRUNJUDogQW4gZW50aXR5IHRoYXQgbWF5LCBzaG91bGQgcmVjZWl2ZSwgb3IgaGFzIHJlY2VpdmVkIGluZm9ybWF0aW9uIG9yIGFuIG9iamVjdCwgd2hpY2ggbWF5IG5vdCBoYXZlIGJlZW4gcHJpbWFyaWx5IGFkZHJlc3NlZCB0byBpdC4gRm9yIGV4YW1wbGUsIHRoZSBzdGFmZiBvZiBhIHByb3ZpZGVyLCBhIGNsZWFyaW5naG91c2UsIG9yIG90aGVyIGludGVybWVkaWFyeS5cclxuICAgKi9cclxuICBSZWNpcGllbnQ6IFwiUkVDSVBcIixcclxuICAvKipcclxuICAgKiBSRVNQUlNOOiBBbiBlbnRpdHkgdGhhdCBoYXMgbGVnYWwgcmVzcG9uc2liaWxpdHkgZm9yIGFub3RoZXIgcGFydHkuXHJcbiAgICovXHJcbiAgUmVzcG9uc2libGVQYXJ0eTogXCJSRVNQUlNOXCIsXHJcbiAgLyoqXHJcbiAgICogUkVWSUVXRVI6IEEgcGVyc29uLCBkZXZpY2UsIG9yIGFsZ29yaXRobSB0aGF0IGhhcyB1c2VkIGFwcHJvdmVkIGNyaXRlcmlhIGZvciBmaWx0ZXJlZCBkYXRhIGZvciBpbmNsdXNpb24gaW50byB0aGUgcGF0aWVudCByZWNvcmQuICBFeGFtcGxlczogKDEpIGEgbWVkaWNhbCByZWNvcmRzIGNsZXJrIHdobyBzY2FucyBhIGRvY3VtZW50IGZvciBpbmNsdXNpb24gaW4gdGhlIG1lZGljYWwgcmVjb3JkLCBlbnRlcnMgaGVhZGVyIGluZm9ybWF0aW9uLCBvciBjYXRhbG9ndWVzIGFuZCBjbGFzc2lmaWVzIHRoZSBkYXRhLCBvciBhIGNvbWJpbmF0aW9uIHRoZXJlb2Y7ICgyKSBhIGdhdGV3YXkgdGhhdCByZWNlaXZlcyBkYXRhIGZyb20gYW5vdGhlciBjb21wdXRlciBzeXN0ZW0gYW5kIGludGVycHJldHMgdGhhdCBkYXRhIG9yIGNoYW5nZXMgaXRzIGZvcm1hdCwgb3IgYm90aCwgYmVmb3JlIGVudGVyaW5nIGl0IGludG8gdGhlIHBhdGllbnQgcmVjb3JkLlxyXG4gICAqL1xyXG4gIFJldmlld2VyOiBcIlJFVklFV0VSXCIsXHJcbiAgLyoqXHJcbiAgICogU09VUkNFOiBBbiBhdXRvbWF0ZWQgZGF0YSBzb3VyY2UgdGhhdCBnZW5lcmF0ZXMgYSBzaWduYXR1cmUgYWxvbmcgd2l0aCBjb250ZW50LiBFeGFtcGxlczogKDEpIHRoZSBzaWduYXR1cmUgZm9yIGFuIGltYWdlIHRoYXQgaXMgZ2VuZXJhdGVkIGJ5IGEgZGV2aWNlIGZvciBpbmNsdXNpb24gaW4gdGhlIHBhdGllbnQgcmVjb3JkOyAoMikgdGhlIHNpZ25hdHVyZSBmb3IgYW4gRUNHIGRlcml2ZWQgYnkgYW4gRUNHIHN5c3RlbSBmb3IgaW5jbHVzaW9uIGluIHRoZSBwYXRpZW50IHJlY29yZDsgKDMpIHRoZSBkYXRhIGZyb20gYSBiaW9tZWRpY2FsIG1vbml0b3JpbmcgZGV2aWNlIG9yIHN5c3RlbSB0aGF0IGlzIGZvciBpbmNsdXNpb24gaW4gdGhlIHBhdGllbnQgcmVjb3JkLlxyXG4gICAqL1xyXG4gIFNvdXJjZTogXCJTT1VSQ0VcIixcclxuICAvKipcclxuICAgKiBTUE9XQVRUOiBBIHBlcnNvbiB3aG8gaGFzIGJlZW4gZ3JhbnRlZCB0aGUgYXV0aG9yaXR5IHRvIHJlcHJlc2VudCBvciBhY3Qgb24gYW5vdGhlcidzIGJlaGFsZiBmb3IgYSBsaW1pdGVkIHNldCBvZiBzcGVjaWZpYyBtYXR0ZXJzIGluIGEgbWFubmVyIHdoaWNoIGlzIGEgbGVnYWxseSBiaW5kaW5nIHVwb24gdGhlIHBlcnNvbiBnaXZpbmcgc3VjaCBhdXRob3JpdHkgYXMgaWYgaGUgb3Igc2hlIHBlcnNvbmFsbHkgd2VyZSB0byBkbyB0aGUgYWN0cy4gRXhhbXBsZXMgaW5jbHVkZSAoMSkgZXhlcmNpc2luZyBzcGVjaWZpYyBsZWdhbCByaWdodHMgYmVsb25naW5nIHRvIHRoZSBncmFudGVlIHN1Y2ggYXMgZHJhZnRpbmcgYSB3aWxsOyAoMikgcGVyZm9ybWluZyBzcGVjaWZpYyBsZWdhbCBkdXRpZXMgb24gYmVoYWxmIG9mIGEgZ3JhbnRlZSBzdWNoIGFzIG1ha2luZyBhIHJldmVyc2libGUgbW9ydGdhZ2UgdG8gcGF5IGZvciBlbmQgb2YgbGlmZSBleHBlbnNlczsgYW5kICgzKSBtYWtpbmcgc3BlY2lmaWMgbGVnYWwgZGVjaXNpb25zIGNvbmNlcm5pbmcgYSBncmFudGVlIHN1Y2ggYXMgbWFuYWdpbmcgYSB0cnVzdC5cclxuICAgKi9cclxuICBBcGVjaWFsUG93ZXJPZkF0dG9ybmV5OiBcIlNQT1dBVFRcIixcclxuICAvKipcclxuICAgKiBUUkFOUzogQW4gZW50aXR5IGVudGVyaW5nIHRoZSBkYXRhIGludG8gdGhlIG9yaWdpbmF0aW5nIHN5c3RlbS4gVGhpcyBpbmNsdWRlcyB0aGUgdHJhbnNjcmlwdGlvbmlzdCBmb3IgZGljdGF0ZWQgdGV4dCB0cmFuc2NyaWJlZCBpbnRvIGVsZWN0cm9uaWMgZm9ybS5cclxuICAgKi9cclxuICBUcmFuc2NyaWJlcjogXCJUUkFOU1wiLFxyXG4gIC8qKlxyXG4gICAqIFZBTElEOiBBIHBlcnNvbiB3aG8gdmFsaWRhdGVzIGEgaGVhbHRoIGluZm9ybWF0aW9uIGRvY3VtZW50IGZvciBpbmNsdXNpb24gaW4gdGhlIHBhdGllbnQgcmVjb3JkLiBGb3IgZXhhbXBsZSwgYSBtZWRpY2FsIHN0dWRlbnQgb3IgcmVzaWRlbnQgaXMgY3JlZGVudGlhbGVkIHRvIHBlcmZvcm0gaGlzdG9yeSBvciBwaHlzaWNhbCBleGFtaW5hdGlvbnMgYW5kIHRvIHdyaXRlIHByb2dyZXNzIG5vdGVzLiBUaGUgYXR0ZW5kaW5nIHBoeXNpY2lhbiBzaWducyB0aGUgaGlzdG9yeSBhbmQgcGh5c2ljYWwgZXhhbWluYXRpb24gdG8gdmFsaWRhdGUgdGhlIGVudHJ5IGZvciBpbmNsdXNpb24gaW4gdGhlIHBhdGllbnQncyBtZWRpY2FsIHJlY29yZC5cclxuICAgKi9cclxuICBWYWxpZGF0b3I6IFwiVkFMSURcIixcclxuICAvKipcclxuICAgKiBWRVJGOiBBIHBlcnNvbiB3aG8gYXNzZXJ0cyB0aGUgY29ycmVjdG5lc3MgYW5kIGFwcHJvcHJpYXRlbmVzcyBvZiBhbiBhY3Qgb3IgdGhlIHJlY29yZGluZyBvZiB0aGUgYWN0LCBhbmQgaXMgYWNjb3VudGFibGUgZm9yIHRoZSBhc3NlcnRpb24gdGhhdCB0aGUgYWN0IG9yIHRoZSByZWNvcmRpbmcgb2YgdGhlIGFjdCBjb21wbGllcyB3aXRoIGp1cmlzZGljdGlvbmFsIG9yIG9yZ2FuaXphdGlvbmFsIHBvbGljeS4gRm9yIGV4YW1wbGUsIGEgcGh5c2ljaWFuIGlzIHJlcXVpcmVkIHRvIGNvdW50ZXJzaWduIGEgdmVyYmFsIG9yZGVyIHRoYXQgaGFzIHByZXZpb3VzbHkgYmVlbiByZWNvcmRlZCBpbiB0aGUgbWVkaWNhbCByZWNvcmQgYnkgYSByZWdpc3RlcmVkIG51cnNlIHdobyBoYXMgY2FycmllZCBvdXQgdGhlIHZlcmJhbCBvcmRlci5cclxuICAgKi9cclxuICBWZXJpZmllcjogXCJWRVJGXCIsXHJcbiAgLyoqXHJcbiAgICogV0lUOiBBIHBlcnNvbiB3aXRuZXNzaW5nIHRoZSBzaWduYXR1cmUgb2YgYW5vdGhlciBwYXJ0eS4gQSB3aXRuZXNzIGlzIG5vdCBrbm93bGVkZ2VhYmxlIGFib3V0IHRoZSBjb250ZW50IGJlaW5nIHNpZ25lZCwgbXVjaCBsZXNzIGFwcHJvdmVzIG9mIGFueXRoaW5nIHN0YXRlZCBpbiB0aGUgY29udGVudC4gRm9yIGV4YW1wbGUsIGFuIGFkdmFuY2VkIGRpcmVjdGl2ZSB3aXRuZXNzIG9yIGEgd2l0bmVzcyB0aGF0IGEgcGFydHkgdG8gYSBjb250cmFjdCBzaWduZWQgdGhhdCBjZXJ0YWluIGRlbW9ncmFwaGljIG9yIGZpbmFuY2lhbCBpbmZvcm1hdGlvbiBpcyB0cnV0aGZ1bC5cclxuICAgKi9cclxuICBXaXRuZXNzOiBcIldJVFwiLFxyXG59IGFzIGNvbnN0O1xyXG5cclxuLyoqXHJcbiAqIFRoaXMgdmFsdWUgc2V0IGluY2x1ZGVzIHNhbXBsZSBDb250cmFjdCBTaWduZXIgVHlwZSBjb2Rlcy5cclxuICovXHJcbmV4cG9ydCB0eXBlIENvbnRyYWN0U2lnbmVyVHlwZUNvZGVUeXBlID0gdHlwZW9mIENvbnRyYWN0U2lnbmVyVHlwZUNvZGVzW2tleW9mIHR5cGVvZiBDb250cmFjdFNpZ25lclR5cGVDb2Rlc107XHJcbiJdfQ==