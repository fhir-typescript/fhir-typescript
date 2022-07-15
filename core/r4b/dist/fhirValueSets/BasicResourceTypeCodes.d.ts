/**
 * This value set defines codes for resources not yet supported by (or which will never be supported by) FHIR.  Many of the codes listed here will eventually be turned into official resources.  However, there is no guarantee that any particular resource will be created nor that the scope will be exactly as defined by the codes presented here.  Codes in this set will be deprecated if/when formal resources are defined that encompass these concepts.
 */
export declare const BasicResourceTypeCodes: {
    /**
     * account: A financial instrument used to track costs, charges or other amounts.
     */
    readonly Account: "account";
    /**
     * adjudicat: The determination of what will be paid against a particular invoice based on coverage, plan rules, etc.
     */
    readonly InvoiceAdjudication: "adjudicat";
    /**
     * adminact: An occurrence of a non-care-related event in the healthcare domain, such as approvals, reviews, etc.
     */
    readonly AdministrativeActivity: "adminact";
    /**
     * advevent: An undesired reaction caused by exposure to some agent (e.g. a medication, immunization, food, or environmental agent).
     */
    readonly AdverseEvent: "advevent";
    /**
     * aptmtreq: A request that a time be scheduled for a type of service for a specified patient, potentially subject to other constraints
     */
    readonly AppointmentRequest: "aptmtreq";
    /**
     * consent: An assertion of permission for an activity or set of activities to occur, possibly subject to particular limitations; e.g. surgical consent, information disclosure consent, etc.
     */
    readonly Consent: "consent";
    /**
     * diet: The specification of a set of food and/or other nutritional material to be delivered to a patient.
     */
    readonly Diet: "diet";
    /**
     * exposure: Record of a situation where a subject was exposed to a substance.  Usually of interest to public health.
     */
    readonly Exposure: "exposure";
    /**
     * investigation: A formalized inquiry into the circumstances surrounding a particular unplanned event or potential event for the purposes of identifying possible causes and contributing factors for the event
     */
    readonly Investigation: "investigation";
    /**
     * invoice: A request for payment for goods and/or services.  Includes the idea of a healthcare insurance claim.
     */
    readonly Invoice: "invoice";
    /**
     * predetermine: An adjudication of what would be paid under an insurance plan for a hypothetical claim for goods or services
     */
    readonly Predetermination: "predetermine";
    /**
     * predetreq: A request for a pre-determination of the cost that would be paid under an insurance plan for a hypothetical claim for goods or services
     */
    readonly PreDeterminationRequest: "predetreq";
    /**
     * protocol: A set of (possibly conditional) steps to be taken to achieve some aim.  Includes study protocols, treatment protocols, emergency protocols, etc.
     */
    readonly Protocol: "protocol";
    /**
     * referral: A request that care of a particular type be provided to a patient.  Could involve the transfer of care, a consult, etc.
     */
    readonly Referral: "referral";
    /**
     * study: An investigation to determine information about a particular therapy or product
     */
    readonly Study: "study";
    /**
     * transfer: The transition of a patient or set of material from one location to another
     */
    readonly Transfer: "transfer";
};
/**
 * This value set defines codes for resources not yet supported by (or which will never be supported by) FHIR.  Many of the codes listed here will eventually be turned into official resources.  However, there is no guarantee that any particular resource will be created nor that the scope will be exactly as defined by the codes presented here.  Codes in this set will be deprecated if/when formal resources are defined that encompass these concepts.
 */
export declare type BasicResourceTypeCodeType = typeof BasicResourceTypeCodes[keyof typeof BasicResourceTypeCodes];
//# sourceMappingURL=BasicResourceTypeCodes.d.ts.map