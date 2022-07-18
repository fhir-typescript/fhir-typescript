// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR Resource: Consent

import * as fhir from '../fhirJson.js';


/**
 * Who or what is controlled by this consent. Use group to identify a set of actors by some property they share (e.g. 'admitting officers').
 */
export interface ConsentActor extends fhir.BackboneElement { 
  /**
   * How the individual is involved in the resources content that is described in the consent.
   */
  role: fhir.CodeableConcept|null;
  /**
   * The resource that identifies the actor. To identify a actors by type, use group to identify a set of actors by some property they share (e.g. 'admitting officers').
   */
  reference: fhir.Reference|null;
}

/**
 * The references to the policies that are included in this consent scope. Policies may be organizational, but are often defined jurisdictionally, or in law.
 */
export interface ConsentPolicy extends fhir.BackboneElement { 
  /**
   * Entity or Organization having regulatory jurisdiction or accountability for  enforcing policies pertaining to Consent Directives.
   */
  authority?: string|undefined;
  /**
   * Extended properties for primitive element: Consent.policy.authority
   */
  _authority?:fhir.FhirElement;
  /**
   * This element is for discoverability / documentation, and does not modify or qualify the policy rules.
   */
  uri?: string|undefined;
  /**
   * Extended properties for primitive element: Consent.policy.uri
   */
  _uri?:fhir.FhirElement;
}

/**
 * The resources controlled by this consent, if specific resources are referenced.
 */
export interface ConsentData extends fhir.BackboneElement { 
  /**
   * How the resource reference is interpreted when testing consent restrictions.
   */
  meaning: 'authoredby'|'dependents'|'instance'|'related'|null;
  /**
   * Extended properties for primitive element: Consent.data.meaning
   */
  _meaning?:fhir.FhirElement;
  /**
   * A reference to a specific resource that defines which resources are covered by this consent.
   */
  reference: fhir.Reference|null;
}

/**
 * Who or what is controlled by this Exception. Use group to identify a set of actors by some property they share (e.g. 'admitting officers').
 */
export interface ConsentExceptActor extends fhir.BackboneElement { 
  /**
   * How the individual is involved in the resources content that is described in the exception.
   */
  role: fhir.CodeableConcept|null;
  /**
   * The resource that identifies the actor. To identify a actors by type, use group to identify a set of actors by some property they share (e.g. 'admitting officers').
   */
  reference: fhir.Reference|null;
}

/**
 * The resources controlled by this exception, if specific resources are referenced.
 */
export interface ConsentExceptData extends fhir.BackboneElement { 
  /**
   * How the resource reference is interpreted when testing consent restrictions.
   */
  meaning: 'authoredby'|'dependents'|'instance'|'related'|null;
  /**
   * Extended properties for primitive element: Consent.except.data.meaning
   */
  _meaning?:fhir.FhirElement;
  /**
   * A reference to a specific resource that defines which resources are covered by this consent.
   */
  reference: fhir.Reference|null;
}

/**
 * An exception to the base policy of this consent. An exception can be an addition or removal of access permissions.
 */
export interface ConsentExcept extends fhir.BackboneElement { 
  /**
   * Action  to take - permit or deny - when the exception conditions are met.
   */
  type: 'deny'|'permit'|null;
  /**
   * Extended properties for primitive element: Consent.except.type
   */
  _type?:fhir.FhirElement;
  /**
   * The timeframe in this exception is valid.
   */
  period?: fhir.Period|undefined;
  /**
   * Who or what is controlled by this Exception. Use group to identify a set of actors by some property they share (e.g. 'admitting officers').
   */
  actor?: (fhir.ConsentExceptActor|null)[]|undefined;
  /**
   * Note that this is the direct action (not the grounds for the action covered in the purpose element). At present, the only action in the understood and tested scope of this resource is 'read'.
   */
  action?: (fhir.CodeableConcept|null)[]|undefined;
  /**
   * If the consent specifies a security label of "R" then it applies to all resources that are labeled "R" or lower. E.g. for Confidentiality, it's a high water mark. For other kinds of security labels, subsumption logic applies. Not all of the security labels make sense for use in this element (may define a narrower value set?).
   */
  securityLabel?: (fhir.Coding|null)[]|undefined;
  /**
   * E.g. if the purpose is 'research', then the operational context must be research, in order for the consent to apply. Not all of the security labels make sense for use in this element (may define a narrower value set?).
   */
  purpose?: (fhir.Coding|null)[]|undefined;
  /**
   * Multiple types are or'ed together. The intention of the contentType element is that the codes refer to profiles or document types defined in a standard or an implementation guide somewhere.
   */
  class?: (fhir.Coding|null)[]|undefined;
  /**
   * Typical use of this is a Document code with class = CDA.
   */
  code?: (fhir.Coding|null)[]|undefined;
  /**
   * This has a different sense to the Consent.period - that is when the consent agreement holds. This is the time period of the data that is controlled by the agreement.
   */
  dataPeriod?: fhir.Period|undefined;
  /**
   * The resources controlled by this exception, if specific resources are referenced.
   */
  data?: (fhir.ConsentExceptData|null)[]|undefined;
}

/**
 * A record of a healthcare consumer’s policy choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time.
 */
export interface Consent extends fhir.DomainResource { 
  /**
   * Resource Type Name
   */
  resourceType: "Consent"|null;
  /**
   * This identifier is identifies this copy of the consent. Where this identifier is also used elsewhere as the identifier for a consent record (e.g. a CDA consent document) then the consent details are expected to be the same.
   */
  identifier?: fhir.Identifier|undefined;
  /**
   * This element is labeled as a modifier because the status contains the codes rejected and entered-in-error that mark the Consent as not currently valid.
   */
  status: 'active'|'draft'|'entered-in-error'|'inactive'|'proposed'|'rejected'|null;
  /**
   * Extended properties for primitive element: Consent.status
   */
  _status?:fhir.FhirElement;
  /**
   * A classification of the type of consents found in the statement. This element supports indexing and retrieval of consent statements.
   */
  category?: (fhir.CodeableConcept|null)[]|undefined;
  /**
   * Commonly, the patient the consent pertains to is the author, but for young and old people, it may be some other person.
   */
  patient: fhir.Reference|null;
  /**
   * This can be a subset of the period of the original statement.
   */
  period?: fhir.Period|undefined;
  /**
   * This is not the time of the original consent, but the time that this statement was made or derived.
   */
  dateTime?: string|undefined;
  /**
   * Extended properties for primitive element: Consent.dateTime
   */
  _dateTime?:fhir.FhirElement;
  /**
   * Commonly, the patient the consent pertains to is the consentor, but particularly for young and old people, it may be some other person - e.g. a legal guardian.
   */
  consentingParty?: (fhir.Reference|null)[]|undefined;
  /**
   * Who or what is controlled by this consent. Use group to identify a set of actors by some property they share (e.g. 'admitting officers').
   */
  actor?: (fhir.ConsentActor|null)[]|undefined;
  /**
   * Note that this is the direct action (not the grounds for the action covered in the purpose element). At present, the only action in the understood and tested scope of this resource is 'read'.
   */
  action?: (fhir.CodeableConcept|null)[]|undefined;
  /**
   * The organization that manages the consent, and the framework within which it is executed.
   */
  organization?: (fhir.Reference|null)[]|undefined;
  /**
   * The source can be contained inline (Attachment), referenced directly (Consent), referenced in a consent repository (DocumentReference), or simply by an identifier (Identifier), e.g. a CDA document id.
   */
  sourceAttachment?: fhir.Attachment|undefined;
  /**
   * The source can be contained inline (Attachment), referenced directly (Consent), referenced in a consent repository (DocumentReference), or simply by an identifier (Identifier), e.g. a CDA document id.
   */
  sourceIdentifier?: fhir.Identifier|undefined;
  /**
   * The source can be contained inline (Attachment), referenced directly (Consent), referenced in a consent repository (DocumentReference), or simply by an identifier (Identifier), e.g. a CDA document id.
   */
  sourceReference?: fhir.Reference|undefined;
  /**
   * The references to the policies that are included in this consent scope. Policies may be organizational, but are often defined jurisdictionally, or in law.
   */
  policy?: (fhir.ConsentPolicy|null)[]|undefined;
  /**
   * If the policy reference is not known, the resource cannot be processed. Where the reference is absent, there is no particular policy other than what is expressed directly in the consent resource.
   */
  policyRule?: string|undefined;
  /**
   * Extended properties for primitive element: Consent.policyRule
   */
  _policyRule?:fhir.FhirElement;
  /**
   * If the consent specifies a security label of "R" then it applies to all resources that are labeled "R" or lower. E.g. for Confidentiality, it's a high water mark. For other kinds of security labels, subsumption logic applies. Not all of the security labels make sense for use in this element (may define a narrower value set?).
   */
  securityLabel?: (fhir.Coding|null)[]|undefined;
  /**
   * This element is for discoverability / documentation, and does not modify or qualify the policy (e.g. the policy itself describes the purposes for which it applies).
   */
  purpose?: (fhir.Coding|null)[]|undefined;
  /**
   * This has a different sense to the Consent.period - that is when the consent agreement holds. This is the time period of the data that is controlled by the agreement.
   */
  dataPeriod?: fhir.Period|undefined;
  /**
   * The resources controlled by this consent, if specific resources are referenced.
   */
  data?: (fhir.ConsentData|null)[]|undefined;
  /**
   * An exception to the base policy of this consent. An exception can be an addition or removal of access permissions.
   */
  except?: (fhir.ConsentExcept|null)[]|undefined;
}