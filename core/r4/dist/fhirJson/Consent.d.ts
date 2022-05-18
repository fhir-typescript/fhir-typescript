import * as fhir from '../fhirJson.js';
/**
 * The references to the policies that are included in this consent scope. Policies may be organizational, but are often defined jurisdictionally, or in law.
 */
export interface ConsentPolicy extends fhir.BackboneElement {
    /**
     * Entity or Organization having regulatory jurisdiction or accountability for  enforcing policies pertaining to Consent Directives.
     */
    authority?: string | undefined;
    /**
     * Extended properties for primitive element: Consent.policy.authority
     */
    _authority?: fhir.FhirElement;
    /**
     * This element is for discoverability / documentation and does not modify or qualify the policy rules.
     */
    uri?: string | undefined;
    /**
     * Extended properties for primitive element: Consent.policy.uri
     */
    _uri?: fhir.FhirElement;
}
/**
 * Whether a treatment instruction (e.g. artificial respiration yes or no) was verified with the patient, his/her family or another authorized person.
 */
export interface ConsentVerification extends fhir.BackboneElement {
    /**
     * Has the instruction been verified.
     */
    verified: boolean | null;
    /**
     * Extended properties for primitive element: Consent.verification.verified
     */
    _verified?: fhir.FhirElement;
    /**
     * Who verified the instruction (Patient, Relative or other Authorized Person).
     */
    verifiedWith?: fhir.Reference | undefined;
    /**
     * Date verification was collected.
     */
    verificationDate?: string | undefined;
    /**
     * Extended properties for primitive element: Consent.verification.verificationDate
     */
    _verificationDate?: fhir.FhirElement;
}
/**
 * Who or what is controlled by this rule. Use group to identify a set of actors by some property they share (e.g. 'admitting officers').
 */
export interface ConsentProvisionActor extends fhir.BackboneElement {
    /**
     * How the individual is involved in the resources content that is described in the exception.
     */
    role: fhir.CodeableConcept | null;
    /**
     * The resource that identifies the actor. To identify actors by type, use group to identify a set of actors by some property they share (e.g. 'admitting officers').
     */
    reference: fhir.Reference | null;
}
/**
 * The resources controlled by this rule if specific resources are referenced.
 */
export interface ConsentProvisionData extends fhir.BackboneElement {
    /**
     * How the resource reference is interpreted when testing consent restrictions.
     */
    meaning: 'authoredby' | 'dependents' | 'instance' | 'related' | null;
    /**
     * A reference to a specific resource that defines which resources are covered by this consent.
     */
    reference: fhir.Reference | null;
}
/**
 * An exception to the base policy of this consent. An exception can be an addition or removal of access permissions.
 */
export interface ConsentProvision extends fhir.BackboneElement {
    /**
     * Action  to take - permit or deny - when the rule conditions are met.  Not permitted in root rule, required in all nested rules.
     */
    type?: 'deny' | 'permit' | undefined;
    /**
     * The timeframe in this rule is valid.
     */
    period?: fhir.Period | undefined;
    /**
     * Who or what is controlled by this rule. Use group to identify a set of actors by some property they share (e.g. 'admitting officers').
     */
    actor?: fhir.ConsentProvisionActor[] | undefined;
    /**
     * Note that this is the direct action (not the grounds for the action covered in the purpose element). At present, the only action in the understood and tested scope of this resource is 'read'.
     */
    action?: fhir.CodeableConcept[] | undefined;
    /**
     * If the consent specifies a security label of "R" then it applies to all resources that are labeled "R" or lower. E.g. for Confidentiality, it's a high water mark. For other kinds of security labels, subsumption logic applies. When the purpose of use tag is on the data, access request purpose of use shall not conflict.
     */
    securityLabel?: fhir.Coding[] | undefined;
    /**
     * When the purpose of use tag is on the data, access request purpose of use shall not conflict.
     */
    purpose?: fhir.Coding[] | undefined;
    /**
     * Multiple types are or'ed together. The intention of the contentType element is that the codes refer to profiles or document types defined in a standard or an implementation guide somewhere.
     */
    class?: fhir.Coding[] | undefined;
    /**
     * Typical use of this is a Document code with class = CDA.
     */
    code?: fhir.CodeableConcept[] | undefined;
    /**
     * This has a different sense to the Consent.period - that is when the consent agreement holds. This is the time period of the data that is controlled by the agreement.
     */
    dataPeriod?: fhir.Period | undefined;
    /**
     * The resources controlled by this rule if specific resources are referenced.
     */
    data?: fhir.ConsentProvisionData[] | undefined;
    /**
     * Rules which provide exceptions to the base rule or subrules.
     */
    provision?: fhir.ConsentProvision[] | undefined;
}
/**
 * A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time.
 */
export interface Consent extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "Consent";
    /**
     * This identifier identifies this copy of the consent. Where this identifier is also used elsewhere as the identifier for a consent record (e.g. a CDA consent document) then the consent details are expected to be the same.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains the codes rejected and entered-in-error that mark the Consent as not currently valid.
     */
    status: 'active' | 'draft' | 'entered-in-error' | 'inactive' | 'proposed' | 'rejected' | null;
    /**
     * A selector of the type of consent being presented: ADR, Privacy, Treatment, Research.  This list is now extensible.
     */
    scope: fhir.CodeableConcept | null;
    /**
     * A classification of the type of consents found in the statement. This element supports indexing and retrieval of consent statements.
     */
    category: fhir.CodeableConcept[] | null;
    /**
     * Commonly, the patient the consent pertains to is the author, but for young and old people, it may be some other person.
     */
    patient?: fhir.Reference | undefined;
    /**
     * This is not the time of the original consent, but the time that this statement was made or derived.
     */
    dateTime?: string | undefined;
    /**
     * Extended properties for primitive element: Consent.dateTime
     */
    _dateTime?: fhir.FhirElement;
    /**
     * Commonly, the patient the consent pertains to is the consentor, but particularly for young and old people, it may be some other person - e.g. a legal guardian.
     */
    performer?: fhir.Reference[] | undefined;
    /**
     * The organization that manages the consent, and the framework within which it is executed.
     */
    organization?: fhir.Reference[] | undefined;
    /**
     * The source can be contained inline (Attachment), referenced directly (Consent), referenced in a consent repository (DocumentReference), or simply by an identifier (Identifier), e.g. a CDA document id.
     */
    sourceAttachment?: fhir.Attachment | undefined;
    /**
     * The source can be contained inline (Attachment), referenced directly (Consent), referenced in a consent repository (DocumentReference), or simply by an identifier (Identifier), e.g. a CDA document id.
     */
    sourceReference?: fhir.Reference | undefined;
    /**
     * The references to the policies that are included in this consent scope. Policies may be organizational, but are often defined jurisdictionally, or in law.
     */
    policy?: fhir.ConsentPolicy[] | undefined;
    /**
     * If the policyRule is absent, computable consent would need to be constructed from the elements of the Consent resource.
     */
    policyRule?: fhir.CodeableConcept | undefined;
    /**
     * Whether a treatment instruction (e.g. artificial respiration yes or no) was verified with the patient, his/her family or another authorized person.
     */
    verification?: fhir.ConsentVerification[] | undefined;
    /**
     * An exception to the base policy of this consent. An exception can be an addition or removal of access permissions.
     */
    provision?: fhir.ConsentProvision | undefined;
}
//# sourceMappingURL=Consent.d.ts.map