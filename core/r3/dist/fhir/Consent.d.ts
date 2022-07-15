import * as fhir from '../fhir.js';
import { ConsentDataMeaningCodeType } from '../fhirValueSets/ConsentDataMeaningCodes.js';
import { ConsentExceptTypeCodeType } from '../fhirValueSets/ConsentExceptTypeCodes.js';
import { ConsentStateCodeType } from '../fhirValueSets/ConsentStateCodes.js';
/**
 * Valid arguments for the ConsentActor type.
 */
export interface ConsentActorArgs extends fhir.BackboneElementArgs {
    /**
     * How the individual is involved in the resources content that is described in the consent.
     */
    role: fhir.CodeableConceptArgs | null;
    /**
     * The resource that identifies the actor. To identify a actors by type, use group to identify a set of actors by some property they share (e.g. 'admitting officers').
     */
    reference: fhir.ReferenceArgs | null;
}
/**
 * Who or what is controlled by this consent. Use group to identify a set of actors by some property they share (e.g. 'admitting officers').
 */
export declare class ConsentActor extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * How the individual is involved in the resources content that is described in the consent.
     */
    role: fhir.CodeableConcept | null;
    /**
     * The resource that identifies the actor. To identify a actors by type, use group to identify a set of actors by some property they share (e.g. 'admitting officers').
     */
    reference: fhir.Reference | null;
    /**
     * Default constructor for ConsentActor - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ConsentActorArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ConsentPolicy type.
 */
export interface ConsentPolicyArgs extends fhir.BackboneElementArgs {
    /**
     * Entity or Organization having regulatory jurisdiction or accountability for  enforcing policies pertaining to Consent Directives.
     */
    authority?: fhir.FhirUri | string | undefined;
    /**
     * Extended properties for primitive element: Consent.policy.authority
     */
    _authority?: fhir.FhirElementArgs;
    /**
     * This element is for discoverability / documentation, and does not modify or qualify the policy rules.
     */
    uri?: fhir.FhirUri | string | undefined;
    /**
     * Extended properties for primitive element: Consent.policy.uri
     */
    _uri?: fhir.FhirElementArgs;
}
/**
 * The references to the policies that are included in this consent scope. Policies may be organizational, but are often defined jurisdictionally, or in law.
 */
export declare class ConsentPolicy extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Entity or Organization having regulatory jurisdiction or accountability for  enforcing policies pertaining to Consent Directives.
     */
    authority?: fhir.FhirUri | undefined;
    /**
     * This element is for discoverability / documentation, and does not modify or qualify the policy rules.
     */
    uri?: fhir.FhirUri | undefined;
    /**
     * Default constructor for ConsentPolicy - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ConsentPolicyArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ConsentData type.
 */
export interface ConsentDataArgs extends fhir.BackboneElementArgs {
    /**
     * How the resource reference is interpreted when testing consent restrictions.
     */
    meaning: fhir.FhirCode<ConsentDataMeaningCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: Consent.data.meaning
     */
    _meaning?: fhir.FhirElementArgs;
    /**
     * A reference to a specific resource that defines which resources are covered by this consent.
     */
    reference: fhir.ReferenceArgs | null;
}
/**
 * The resources controlled by this consent, if specific resources are referenced.
 */
export declare class ConsentData extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * How the resource reference is interpreted when testing consent restrictions.
     */
    meaning: fhir.FhirCode<ConsentDataMeaningCodeType> | null;
    /**
     * A reference to a specific resource that defines which resources are covered by this consent.
     */
    reference: fhir.Reference | null;
    /**
     * Default constructor for ConsentData - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ConsentDataArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ConsentExceptActor type.
 */
export interface ConsentExceptActorArgs extends fhir.BackboneElementArgs {
    /**
     * How the individual is involved in the resources content that is described in the exception.
     */
    role: fhir.CodeableConceptArgs | null;
    /**
     * The resource that identifies the actor. To identify a actors by type, use group to identify a set of actors by some property they share (e.g. 'admitting officers').
     */
    reference: fhir.ReferenceArgs | null;
}
/**
 * Who or what is controlled by this Exception. Use group to identify a set of actors by some property they share (e.g. 'admitting officers').
 */
export declare class ConsentExceptActor extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * How the individual is involved in the resources content that is described in the exception.
     */
    role: fhir.CodeableConcept | null;
    /**
     * The resource that identifies the actor. To identify a actors by type, use group to identify a set of actors by some property they share (e.g. 'admitting officers').
     */
    reference: fhir.Reference | null;
    /**
     * Default constructor for ConsentExceptActor - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ConsentExceptActorArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ConsentExceptData type.
 */
export interface ConsentExceptDataArgs extends fhir.BackboneElementArgs {
    /**
     * How the resource reference is interpreted when testing consent restrictions.
     */
    meaning: fhir.FhirCode<ConsentDataMeaningCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: Consent.except.data.meaning
     */
    _meaning?: fhir.FhirElementArgs;
    /**
     * A reference to a specific resource that defines which resources are covered by this consent.
     */
    reference: fhir.ReferenceArgs | null;
}
/**
 * The resources controlled by this exception, if specific resources are referenced.
 */
export declare class ConsentExceptData extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * How the resource reference is interpreted when testing consent restrictions.
     */
    meaning: fhir.FhirCode<ConsentDataMeaningCodeType> | null;
    /**
     * A reference to a specific resource that defines which resources are covered by this consent.
     */
    reference: fhir.Reference | null;
    /**
     * Default constructor for ConsentExceptData - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ConsentExceptDataArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ConsentExcept type.
 */
export interface ConsentExceptArgs extends fhir.BackboneElementArgs {
    /**
     * Action  to take - permit or deny - when the exception conditions are met.
     */
    type: fhir.FhirCode<ConsentExceptTypeCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: Consent.except.type
     */
    _type?: fhir.FhirElementArgs;
    /**
     * The timeframe in this exception is valid.
     */
    period?: fhir.PeriodArgs | undefined;
    /**
     * Who or what is controlled by this Exception. Use group to identify a set of actors by some property they share (e.g. 'admitting officers').
     */
    actor?: fhir.ConsentExceptActorArgs[] | undefined;
    /**
     * Note that this is the direct action (not the grounds for the action covered in the purpose element). At present, the only action in the understood and tested scope of this resource is 'read'.
     */
    action?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * If the consent specifies a security label of "R" then it applies to all resources that are labeled "R" or lower. E.g. for Confidentiality, it's a high water mark. For other kinds of security labels, subsumption logic applies. Not all of the security labels make sense for use in this element (may define a narrower value set?).
     */
    securityLabel?: fhir.CodingArgs[] | undefined;
    /**
     * E.g. if the purpose is 'research', then the operational context must be research, in order for the consent to apply. Not all of the security labels make sense for use in this element (may define a narrower value set?).
     */
    purpose?: fhir.CodingArgs[] | undefined;
    /**
     * Multiple types are or'ed together. The intention of the contentType element is that the codes refer to profiles or document types defined in a standard or an implementation guide somewhere.
     */
    class?: fhir.CodingArgs[] | undefined;
    /**
     * Typical use of this is a Document code with class = CDA.
     */
    code?: fhir.CodingArgs[] | undefined;
    /**
     * This has a different sense to the Consent.period - that is when the consent agreement holds. This is the time period of the data that is controlled by the agreement.
     */
    dataPeriod?: fhir.PeriodArgs | undefined;
    /**
     * The resources controlled by this exception, if specific resources are referenced.
     */
    data?: fhir.ConsentExceptDataArgs[] | undefined;
}
/**
 * An exception to the base policy of this consent. An exception can be an addition or removal of access permissions.
 */
export declare class ConsentExcept extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Action  to take - permit or deny - when the exception conditions are met.
     */
    type: fhir.FhirCode<ConsentExceptTypeCodeType> | null;
    /**
     * The timeframe in this exception is valid.
     */
    period?: fhir.Period | undefined;
    /**
     * Who or what is controlled by this Exception. Use group to identify a set of actors by some property they share (e.g. 'admitting officers').
     */
    actor: fhir.ConsentExceptActor[];
    /**
     * Note that this is the direct action (not the grounds for the action covered in the purpose element). At present, the only action in the understood and tested scope of this resource is 'read'.
     */
    action: fhir.CodeableConcept[];
    /**
     * If the consent specifies a security label of "R" then it applies to all resources that are labeled "R" or lower. E.g. for Confidentiality, it's a high water mark. For other kinds of security labels, subsumption logic applies. Not all of the security labels make sense for use in this element (may define a narrower value set?).
     */
    securityLabel: fhir.Coding[];
    /**
     * E.g. if the purpose is 'research', then the operational context must be research, in order for the consent to apply. Not all of the security labels make sense for use in this element (may define a narrower value set?).
     */
    purpose: fhir.Coding[];
    /**
     * Multiple types are or'ed together. The intention of the contentType element is that the codes refer to profiles or document types defined in a standard or an implementation guide somewhere.
     */
    class: fhir.Coding[];
    /**
     * Typical use of this is a Document code with class = CDA.
     */
    code: fhir.Coding[];
    /**
     * This has a different sense to the Consent.period - that is when the consent agreement holds. This is the time period of the data that is controlled by the agreement.
     */
    dataPeriod?: fhir.Period | undefined;
    /**
     * The resources controlled by this exception, if specific resources are referenced.
     */
    data: fhir.ConsentExceptData[];
    /**
     * Default constructor for ConsentExcept - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ConsentExceptArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the Consent type.
 */
export interface ConsentArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "Consent" | undefined;
    /**
     * This identifier is identifies this copy of the consent. Where this identifier is also used elsewhere as the identifier for a consent record (e.g. a CDA consent document) then the consent details are expected to be the same.
     */
    identifier?: fhir.IdentifierArgs | undefined;
    /**
     * This element is labeled as a modifier because the status contains the codes rejected and entered-in-error that mark the Consent as not currently valid.
     */
    status: fhir.FhirCode<ConsentStateCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: Consent.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * A classification of the type of consents found in the statement. This element supports indexing and retrieval of consent statements.
     */
    category?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Commonly, the patient the consent pertains to is the author, but for young and old people, it may be some other person.
     */
    patient: fhir.ReferenceArgs | null;
    /**
     * This can be a subset of the period of the original statement.
     */
    period?: fhir.PeriodArgs | undefined;
    /**
     * This is not the time of the original consent, but the time that this statement was made or derived.
     */
    dateTime?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: Consent.dateTime
     */
    _dateTime?: fhir.FhirElementArgs;
    /**
     * Commonly, the patient the consent pertains to is the consentor, but particularly for young and old people, it may be some other person - e.g. a legal guardian.
     */
    consentingParty?: fhir.ReferenceArgs[] | undefined;
    /**
     * Who or what is controlled by this consent. Use group to identify a set of actors by some property they share (e.g. 'admitting officers').
     */
    actor?: fhir.ConsentActorArgs[] | undefined;
    /**
     * Note that this is the direct action (not the grounds for the action covered in the purpose element). At present, the only action in the understood and tested scope of this resource is 'read'.
     */
    action?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * The organization that manages the consent, and the framework within which it is executed.
     */
    organization?: fhir.ReferenceArgs[] | undefined;
    /**
     * The source can be contained inline (Attachment), referenced directly (Consent), referenced in a consent repository (DocumentReference), or simply by an identifier (Identifier), e.g. a CDA document id.
     */
    source?: fhir.Attachment | fhir.Identifier | fhir.Reference | undefined;
    /**
     * The source can be contained inline (Attachment), referenced directly (Consent), referenced in a consent repository (DocumentReference), or simply by an identifier (Identifier), e.g. a CDA document id.
     */
    sourceAttachment?: fhir.AttachmentArgs | undefined;
    /**
     * The source can be contained inline (Attachment), referenced directly (Consent), referenced in a consent repository (DocumentReference), or simply by an identifier (Identifier), e.g. a CDA document id.
     */
    sourceIdentifier?: fhir.IdentifierArgs | undefined;
    /**
     * The source can be contained inline (Attachment), referenced directly (Consent), referenced in a consent repository (DocumentReference), or simply by an identifier (Identifier), e.g. a CDA document id.
     */
    sourceReference?: fhir.ReferenceArgs | undefined;
    /**
     * The references to the policies that are included in this consent scope. Policies may be organizational, but are often defined jurisdictionally, or in law.
     */
    policy?: fhir.ConsentPolicyArgs[] | undefined;
    /**
     * If the policy reference is not known, the resource cannot be processed. Where the reference is absent, there is no particular policy other than what is expressed directly in the consent resource.
     */
    policyRule?: fhir.FhirUri | string | undefined;
    /**
     * Extended properties for primitive element: Consent.policyRule
     */
    _policyRule?: fhir.FhirElementArgs;
    /**
     * If the consent specifies a security label of "R" then it applies to all resources that are labeled "R" or lower. E.g. for Confidentiality, it's a high water mark. For other kinds of security labels, subsumption logic applies. Not all of the security labels make sense for use in this element (may define a narrower value set?).
     */
    securityLabel?: fhir.CodingArgs[] | undefined;
    /**
     * This element is for discoverability / documentation, and does not modify or qualify the policy (e.g. the policy itself describes the purposes for which it applies).
     */
    purpose?: fhir.CodingArgs[] | undefined;
    /**
     * This has a different sense to the Consent.period - that is when the consent agreement holds. This is the time period of the data that is controlled by the agreement.
     */
    dataPeriod?: fhir.PeriodArgs | undefined;
    /**
     * The resources controlled by this consent, if specific resources are referenced.
     */
    data?: fhir.ConsentDataArgs[] | undefined;
    /**
     * An exception to the base policy of this consent. An exception can be an addition or removal of access permissions.
     */
    except?: fhir.ConsentExceptArgs[] | undefined;
}
/**
 * A record of a healthcare consumer’s policy choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time.
 */
export declare class Consent extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "Consent";
    /**
     * This identifier is identifies this copy of the consent. Where this identifier is also used elsewhere as the identifier for a consent record (e.g. a CDA consent document) then the consent details are expected to be the same.
     */
    identifier?: fhir.Identifier | undefined;
    /**
     * This element is labeled as a modifier because the status contains the codes rejected and entered-in-error that mark the Consent as not currently valid.
     */
    status: fhir.FhirCode<ConsentStateCodeType> | null;
    /**
     * A classification of the type of consents found in the statement. This element supports indexing and retrieval of consent statements.
     */
    category: fhir.CodeableConcept[];
    /**
     * Commonly, the patient the consent pertains to is the author, but for young and old people, it may be some other person.
     */
    patient: fhir.Reference | null;
    /**
     * This can be a subset of the period of the original statement.
     */
    period?: fhir.Period | undefined;
    /**
     * This is not the time of the original consent, but the time that this statement was made or derived.
     */
    dateTime?: fhir.FhirDateTime | undefined;
    /**
     * Commonly, the patient the consent pertains to is the consentor, but particularly for young and old people, it may be some other person - e.g. a legal guardian.
     */
    consentingParty: fhir.Reference[];
    /**
     * Who or what is controlled by this consent. Use group to identify a set of actors by some property they share (e.g. 'admitting officers').
     */
    actor: fhir.ConsentActor[];
    /**
     * Note that this is the direct action (not the grounds for the action covered in the purpose element). At present, the only action in the understood and tested scope of this resource is 'read'.
     */
    action: fhir.CodeableConcept[];
    /**
     * The organization that manages the consent, and the framework within which it is executed.
     */
    organization: fhir.Reference[];
    /**
     * The source can be contained inline (Attachment), referenced directly (Consent), referenced in a consent repository (DocumentReference), or simply by an identifier (Identifier), e.g. a CDA document id.
     */
    source?: (fhir.Attachment | fhir.Identifier | fhir.Reference) | undefined;
    /**
     * Internal flag to properly serialize choice-type element Consent.source[x]
     */
    protected static readonly _fts_sourceIsChoice: true;
    /**
     * The references to the policies that are included in this consent scope. Policies may be organizational, but are often defined jurisdictionally, or in law.
     */
    policy: fhir.ConsentPolicy[];
    /**
     * If the policy reference is not known, the resource cannot be processed. Where the reference is absent, there is no particular policy other than what is expressed directly in the consent resource.
     */
    policyRule?: fhir.FhirUri | undefined;
    /**
     * If the consent specifies a security label of "R" then it applies to all resources that are labeled "R" or lower. E.g. for Confidentiality, it's a high water mark. For other kinds of security labels, subsumption logic applies. Not all of the security labels make sense for use in this element (may define a narrower value set?).
     */
    securityLabel: fhir.Coding[];
    /**
     * This element is for discoverability / documentation, and does not modify or qualify the policy (e.g. the policy itself describes the purposes for which it applies).
     */
    purpose: fhir.Coding[];
    /**
     * This has a different sense to the Consent.period - that is when the consent agreement holds. This is the time period of the data that is controlled by the agreement.
     */
    dataPeriod?: fhir.Period | undefined;
    /**
     * The resources controlled by this consent, if specific resources are referenced.
     */
    data: fhir.ConsentData[];
    /**
     * An exception to the base policy of this consent. An exception can be an addition or removal of access permissions.
     */
    except: fhir.ConsentExcept[];
    /**
     * Default constructor for Consent - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ConsentArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=Consent.d.ts.map