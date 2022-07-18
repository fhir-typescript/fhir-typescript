// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR Resource: Consent

import * as fhir from '../fhir.js';

// @ts-ignore
import { SecurityRoleTypeCodes,  SecurityRoleTypeCodeType } from '../fhirValueSets/SecurityRoleTypeCodes.js';
// @ts-ignore
import { SecurityRoleTypeVsValidation } from '../fhirValueSets/SecurityRoleTypeVsValidation.js';
// @ts-ignore
import { ConsentDataMeaningCodes,  ConsentDataMeaningCodeType } from '../fhirValueSets/ConsentDataMeaningCodes.js';
// @ts-ignore
import { ConsentDataMeaningVsValidation } from '../fhirValueSets/ConsentDataMeaningVsValidation.js';
// @ts-ignore
import { ConsentProvisionTypeCodes,  ConsentProvisionTypeCodeType } from '../fhirValueSets/ConsentProvisionTypeCodes.js';
// @ts-ignore
import { ConsentProvisionTypeVsValidation } from '../fhirValueSets/ConsentProvisionTypeVsValidation.js';
// @ts-ignore
import { ConsentActionCodes,  ConsentActionCodeType } from '../fhirValueSets/ConsentActionCodes.js';
// @ts-ignore
import { ConsentActionVsValidation } from '../fhirValueSets/ConsentActionVsValidation.js';
// @ts-ignore
import { SecurityLabelsCodes,  SecurityLabelsCodeType } from '../fhirValueSets/SecurityLabelsCodes.js';
// @ts-ignore
import { SecurityLabelsVsValidation } from '../fhirValueSets/SecurityLabelsVsValidation.js';
// @ts-ignore
import { V3PurposeOfUseCodes,  V3PurposeOfUseCodeType } from '../fhirValueSets/V3PurposeOfUseCodes.js';
// @ts-ignore
import { V3PurposeOfUseVsValidation } from '../fhirValueSets/V3PurposeOfUseVsValidation.js';
// @ts-ignore
import { ConsentContentClassCodes,  ConsentContentClassCodeType } from '../fhirValueSets/ConsentContentClassCodes.js';
// @ts-ignore
import { ConsentContentClassVsValidation } from '../fhirValueSets/ConsentContentClassVsValidation.js';
// @ts-ignore
import { ConsentContentCodes,  ConsentContentCodeType } from '../fhirValueSets/ConsentContentCodes.js';
// @ts-ignore
import { ConsentContentVsValidation } from '../fhirValueSets/ConsentContentVsValidation.js';
// @ts-ignore
import { ConsentStateCodes,  ConsentStateCodeType } from '../fhirValueSets/ConsentStateCodes.js';
// @ts-ignore
import { ConsentStateVsValidation } from '../fhirValueSets/ConsentStateVsValidation.js';
// @ts-ignore
import { ConsentScopeCodes,  ConsentScopeCodeType } from '../fhirValueSets/ConsentScopeCodes.js';
// @ts-ignore
import { ConsentScopeVsValidation } from '../fhirValueSets/ConsentScopeVsValidation.js';
// @ts-ignore
import { ConsentCategoryCodes,  ConsentCategoryCodeType } from '../fhirValueSets/ConsentCategoryCodes.js';
// @ts-ignore
import { ConsentCategoryVsValidation } from '../fhirValueSets/ConsentCategoryVsValidation.js';
// @ts-ignore
import { ConsentPolicyCodes,  ConsentPolicyCodeType } from '../fhirValueSets/ConsentPolicyCodes.js';
// @ts-ignore
import { ConsentPolicyVsValidation } from '../fhirValueSets/ConsentPolicyVsValidation.js';
/**
 * Valid arguments for the ConsentPolicy type.
 */
export interface ConsentPolicyArgs extends fhir.BackboneElementArgs {
  /**
   * Entity or Organization having regulatory jurisdiction or accountability for  enforcing policies pertaining to Consent Directives.
   */
  authority?: fhir.FhirUri|string|undefined;
  /**
   * Extended properties for primitive element: Consent.policy.authority
   */
  _authority?:fhir.FhirElementArgs;
  /**
   * This element is for discoverability / documentation and does not modify or qualify the policy rules.
   */
  uri?: fhir.FhirUri|string|undefined;
  /**
   * Extended properties for primitive element: Consent.policy.uri
   */
  _uri?:fhir.FhirElementArgs;
}

/**
 * The references to the policies that are included in this consent scope. Policies may be organizational, but are often defined jurisdictionally, or in law.
 */
export class ConsentPolicy extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'ConsentPolicy';
  /**
   * Entity or Organization having regulatory jurisdiction or accountability for  enforcing policies pertaining to Consent Directives.
   */
  public authority?: fhir.FhirUri|undefined;
  /**
   * This element is for discoverability / documentation and does not modify or qualify the policy rules.
   */
  public uri?: fhir.FhirUri|undefined;
  /**
   * Default constructor for ConsentPolicy - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<ConsentPolicyArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['authority']) { this.authority = new fhir.FhirUri({value: source.authority}); }
    if (source['_authority']) {
      if (this.authority) { this.authority.addExtendedProperties(source._authority!); }
      else { this.authority = new fhir.FhirUri(source._authority as Partial<fhir.FhirUriArgs>); }
    }
    if (source['uri']) { this.uri = new fhir.FhirUri({value: source.uri}); }
    if (source['_uri']) {
      if (this.uri) { this.uri.addExtendedProperties(source._uri!); }
      else { this.uri = new fhir.FhirUri(source._uri as Partial<fhir.FhirUriArgs>); }
    }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'Consent.policy' }
    iss.push(...this.vOS('authority',exp));
    iss.push(...this.vOS('uri',exp));
    return iss;
  }
}
/**
 * Valid arguments for the ConsentVerification type.
 */
export interface ConsentVerificationArgs extends fhir.BackboneElementArgs {
  /**
   * Has the instruction been verified.
   */
  verified: fhir.FhirBoolean|boolean|undefined;
  /**
   * Extended properties for primitive element: Consent.verification.verified
   */
  _verified?:fhir.FhirElementArgs;
  /**
   * Who verified the instruction (Patient, Relative or other Authorized Person).
   */
  verifiedWith?: fhir.ReferenceArgs|undefined;
  /**
   * Date verification was collected.
   */
  verificationDate?: fhir.FhirDateTime|string|undefined;
  /**
   * Extended properties for primitive element: Consent.verification.verificationDate
   */
  _verificationDate?:fhir.FhirElementArgs;
}

/**
 * Whether a treatment instruction (e.g. artificial respiration yes or no) was verified with the patient, his/her family or another authorized person.
 */
export class ConsentVerification extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'ConsentVerification';
  /**
   * Has the instruction been verified.
   */
  public verified: fhir.FhirBoolean|null;
  /**
   * Who verified the instruction (Patient, Relative or other Authorized Person).
   */
  public verifiedWith?: fhir.Reference|undefined;
  /**
   * Date verification was collected.
   */
  public verificationDate?: fhir.FhirDateTime|undefined;
  /**
   * Default constructor for ConsentVerification - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<ConsentVerificationArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['verified']) { this.verified = new fhir.FhirBoolean({value: source.verified}); }
    else { this.verified = null; }
    if (source['_verified']) {
      if (this.verified) { this.verified.addExtendedProperties(source._verified!); }
      else { this.verified = new fhir.FhirBoolean(source._verified as Partial<fhir.FhirBooleanArgs>); }
    }
    if (source['verifiedWith']) { this.verifiedWith = new fhir.Reference(source.verifiedWith); }
    if (source['verificationDate']) { this.verificationDate = new fhir.FhirDateTime({value: source.verificationDate}); }
    if (source['_verificationDate']) {
      if (this.verificationDate) { this.verificationDate.addExtendedProperties(source._verificationDate!); }
      else { this.verificationDate = new fhir.FhirDateTime(source._verificationDate as Partial<fhir.FhirDateTimeArgs>); }
    }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'Consent.verification' }
    iss.push(...this.vRS('verified',exp));
    iss.push(...this.vOS('verifiedWith',exp));
    iss.push(...this.vOS('verificationDate',exp));
    return iss;
  }
}
/**
 * Valid arguments for the ConsentProvisionActor type.
 */
export interface ConsentProvisionActorArgs extends fhir.BackboneElementArgs {
  /**
   * How the individual is involved in the resources content that is described in the exception.
   */
  role: fhir.CodeableConceptArgs|null;
  /**
   * The resource that identifies the actor. To identify actors by type, use group to identify a set of actors by some property they share (e.g. 'admitting officers').
   */
  reference: fhir.ReferenceArgs|null;
}

/**
 * Who or what is controlled by this rule. Use group to identify a set of actors by some property they share (e.g. 'admitting officers').
 */
export class ConsentProvisionActor extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'ConsentProvisionActor';
  /**
   * How the individual is involved in the resources content that is described in the exception.
   */
  public role: fhir.CodeableConcept|null;
  /**
   * The resource that identifies the actor. To identify actors by type, use group to identify a set of actors by some property they share (e.g. 'admitting officers').
   */
  public reference: fhir.Reference|null;
  /**
   * Default constructor for ConsentProvisionActor - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<ConsentProvisionActorArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['role']) { this.role = new fhir.CodeableConcept(source.role); }
    else { this.role = null; }
    if (source['reference']) { this.reference = new fhir.Reference(source.reference); }
    else { this.reference = null; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'Consent.provision.actor' }
    iss.push(...this.vRS('role',exp));
    iss.push(...this.vRS('reference',exp));
    return iss;
  }
}
/**
 * Valid arguments for the ConsentProvisionData type.
 */
export interface ConsentProvisionDataArgs extends fhir.BackboneElementArgs {
  /**
   * How the resource reference is interpreted when testing consent restrictions.
   */
  meaning: fhir.FhirCode<ConsentDataMeaningCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: Consent.provision.data.meaning
   */
  _meaning?:fhir.FhirElementArgs;
  /**
   * A reference to a specific resource that defines which resources are covered by this consent.
   */
  reference: fhir.ReferenceArgs|null;
}

/**
 * The resources controlled by this rule if specific resources are referenced.
 */
export class ConsentProvisionData extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'ConsentProvisionData';
  /**
   * How the resource reference is interpreted when testing consent restrictions.
   */
  public meaning: fhir.FhirCode<ConsentDataMeaningCodeType>|null;
  /**
   * A reference to a specific resource that defines which resources are covered by this consent.
   */
  public reference: fhir.Reference|null;
  /**
   * Default constructor for ConsentProvisionData - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<ConsentProvisionDataArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['meaning']) { this.meaning = new fhir.FhirCode<ConsentDataMeaningCodeType>({value: source.meaning}); }
    else { this.meaning = null; }
    if (source['_meaning']) {
      if (this.meaning) { this.meaning.addExtendedProperties(source._meaning!); }
      else { this.meaning = new fhir.FhirCode<ConsentDataMeaningCodeType>(source._meaning as Partial<fhir.FhirCode>); }
    }
    if (source['reference']) { this.reference = new fhir.Reference(source.reference); }
    else { this.reference = null; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'Consent.provision.data' }
    iss.push(...this.vRSV('meaning',exp,'ConsentDataMeaning',ConsentDataMeaningVsValidation,'r'));
    iss.push(...this.vRS('reference',exp));
    return iss;
  }
}
/**
 * Valid arguments for the ConsentProvision type.
 */
export interface ConsentProvisionArgs extends fhir.BackboneElementArgs {
  /**
   * Action  to take - permit or deny - when the rule conditions are met.  Not permitted in root rule, required in all nested rules.
   */
  type?: fhir.FhirCode<ConsentProvisionTypeCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: Consent.provision.type
   */
  _type?:fhir.FhirElementArgs;
  /**
   * The timeframe in this rule is valid.
   */
  period?: fhir.PeriodArgs|undefined;
  /**
   * Who or what is controlled by this rule. Use group to identify a set of actors by some property they share (e.g. 'admitting officers').
   */
  actor?: fhir.ConsentProvisionActorArgs[]|undefined;
  /**
   * Note that this is the direct action (not the grounds for the action covered in the purpose element). At present, the only action in the understood and tested scope of this resource is 'read'.
   */
  action?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * If the consent specifies a security label of "R" then it applies to all resources that are labeled "R" or lower. E.g. for Confidentiality, it's a high water mark. For other kinds of security labels, subsumption logic applies. When the purpose of use tag is on the data, access request purpose of use shall not conflict.
   */
  securityLabel?: fhir.CodingArgs[]|undefined;
  /**
   * When the purpose of use tag is on the data, access request purpose of use shall not conflict.
   */
  purpose?: fhir.CodingArgs[]|undefined;
  /**
   * Multiple types are or'ed together. The intention of the contentType element is that the codes refer to profiles or document types defined in a standard or an implementation guide somewhere.
   */
  class?: fhir.CodingArgs[]|undefined;
  /**
   * Typical use of this is a Document code with class = CDA.
   */
  code?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * This has a different sense to the Consent.period - that is when the consent agreement holds. This is the time period of the data that is controlled by the agreement.
   */
  dataPeriod?: fhir.PeriodArgs|undefined;
  /**
   * The resources controlled by this rule if specific resources are referenced.
   */
  data?: fhir.ConsentProvisionDataArgs[]|undefined;
  /**
   * Rules which provide exceptions to the base rule or subrules.
   */
  provision?: fhir.ConsentProvisionArgs[]|undefined;
}

/**
 * An exception to the base policy of this consent. An exception can be an addition or removal of access permissions.
 */
export class ConsentProvision extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'ConsentProvision';
  /**
   * Action  to take - permit or deny - when the rule conditions are met.  Not permitted in root rule, required in all nested rules.
   */
  public type?: fhir.FhirCode<ConsentProvisionTypeCodeType>|undefined;
  /**
   * The timeframe in this rule is valid.
   */
  public period?: fhir.Period|undefined;
  /**
   * Who or what is controlled by this rule. Use group to identify a set of actors by some property they share (e.g. 'admitting officers').
   */
  public actor: fhir.ConsentProvisionActor[];
  /**
   * Note that this is the direct action (not the grounds for the action covered in the purpose element). At present, the only action in the understood and tested scope of this resource is 'read'.
   */
  public action: fhir.CodeableConcept[];
  /**
   * If the consent specifies a security label of "R" then it applies to all resources that are labeled "R" or lower. E.g. for Confidentiality, it's a high water mark. For other kinds of security labels, subsumption logic applies. When the purpose of use tag is on the data, access request purpose of use shall not conflict.
   */
  public securityLabel: fhir.Coding[];
  /**
   * When the purpose of use tag is on the data, access request purpose of use shall not conflict.
   */
  public purpose: fhir.Coding[];
  /**
   * Multiple types are or'ed together. The intention of the contentType element is that the codes refer to profiles or document types defined in a standard or an implementation guide somewhere.
   */
  public class: fhir.Coding[];
  /**
   * Typical use of this is a Document code with class = CDA.
   */
  public code: fhir.CodeableConcept[];
  /**
   * This has a different sense to the Consent.period - that is when the consent agreement holds. This is the time period of the data that is controlled by the agreement.
   */
  public dataPeriod?: fhir.Period|undefined;
  /**
   * The resources controlled by this rule if specific resources are referenced.
   */
  public data: fhir.ConsentProvisionData[];
  /**
   * Rules which provide exceptions to the base rule or subrules.
   */
  public provision: fhir.ConsentProvision[];
  /**
   * Default constructor for ConsentProvision - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<ConsentProvisionArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['type']) { this.type = new fhir.FhirCode<ConsentProvisionTypeCodeType>({value: source.type}); }
    if (source['_type']) {
      if (this.type) { this.type.addExtendedProperties(source._type!); }
      else { this.type = new fhir.FhirCode<ConsentProvisionTypeCodeType>(source._type as Partial<fhir.FhirCode>); }
    }
    if (source['period']) { this.period = new fhir.Period(source.period); }
    if (source['actor']) { this.actor = source.actor.map((x) => new fhir.ConsentProvisionActor(x)); }
    else { this.actor = []; }
    if (source['action']) { this.action = source.action.map((x) => new fhir.CodeableConcept(x)); }
    else { this.action = []; }
    if (source['securityLabel']) { this.securityLabel = source.securityLabel.map((x) => new fhir.Coding(x)); }
    else { this.securityLabel = []; }
    if (source['purpose']) { this.purpose = source.purpose.map((x) => new fhir.Coding(x)); }
    else { this.purpose = []; }
    if (source['class']) { this.class = source.class.map((x) => new fhir.Coding(x)); }
    else { this.class = []; }
    if (source['code']) { this.code = source.code.map((x) => new fhir.CodeableConcept(x)); }
    else { this.code = []; }
    if (source['dataPeriod']) { this.dataPeriod = new fhir.Period(source.dataPeriod); }
    if (source['data']) { this.data = source.data.map((x) => new fhir.ConsentProvisionData(x)); }
    else { this.data = []; }
    if (source['provision']) { this.provision = source.provision.map((x) => new fhir.ConsentProvision(x)); }
    else { this.provision = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'Consent.provision' }
    iss.push(...this.vOSV('type',exp,'ConsentProvisionType',ConsentProvisionTypeVsValidation,'r'));
    iss.push(...this.vOS('period',exp));
    iss.push(...this.vOA('actor',exp));
    iss.push(...this.vOA('action',exp));
    iss.push(...this.vOA('securityLabel',exp));
    iss.push(...this.vOA('purpose',exp));
    iss.push(...this.vOA('class',exp));
    iss.push(...this.vOA('code',exp));
    iss.push(...this.vOS('dataPeriod',exp));
    iss.push(...this.vOA('data',exp));
    iss.push(...this.vOA('provision',exp));
    return iss;
  }
}
/**
 * Valid arguments for the Consent type.
 */
export interface ConsentArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "Consent"|undefined;
  /**
   * This identifier identifies this copy of the consent. Where this identifier is also used elsewhere as the identifier for a consent record (e.g. a CDA consent document) then the consent details are expected to be the same.
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * This element is labeled as a modifier because the status contains the codes rejected and entered-in-error that mark the Consent as not currently valid.
   */
  status: fhir.FhirCode<ConsentStateCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: Consent.status
   */
  _status?:fhir.FhirElementArgs;
  /**
   * A selector of the type of consent being presented: ADR, Privacy, Treatment, Research.  This list is now extensible.
   */
  scope: fhir.CodeableConceptArgs|null;
  /**
   * A classification of the type of consents found in the statement. This element supports indexing and retrieval of consent statements.
   */
  category: fhir.CodeableConceptArgs[]|null;
  /**
   * Commonly, the patient the consent pertains to is the author, but for young and old people, it may be some other person.
   */
  patient?: fhir.ReferenceArgs|undefined;
  /**
   * This is not the time of the original consent, but the time that this statement was made or derived.
   */
  dateTime?: fhir.FhirDateTime|string|undefined;
  /**
   * Extended properties for primitive element: Consent.dateTime
   */
  _dateTime?:fhir.FhirElementArgs;
  /**
   * Commonly, the patient the consent pertains to is the consentor, but particularly for young and old people, it may be some other person - e.g. a legal guardian.
   */
  performer?: fhir.ReferenceArgs[]|undefined;
  /**
   * The organization that manages the consent, and the framework within which it is executed.
   */
  organization?: fhir.ReferenceArgs[]|undefined;
  /**
   * The source can be contained inline (Attachment), referenced directly (Consent), referenced in a consent repository (DocumentReference), or simply by an identifier (Identifier), e.g. a CDA document id.
   */
  source?: fhir.Attachment|fhir.Reference|undefined;
  /**
   * The source can be contained inline (Attachment), referenced directly (Consent), referenced in a consent repository (DocumentReference), or simply by an identifier (Identifier), e.g. a CDA document id.
   */
  sourceAttachment?: fhir.AttachmentArgs|undefined;
  /**
   * The source can be contained inline (Attachment), referenced directly (Consent), referenced in a consent repository (DocumentReference), or simply by an identifier (Identifier), e.g. a CDA document id.
   */
  sourceReference?: fhir.ReferenceArgs|undefined;
  /**
   * The references to the policies that are included in this consent scope. Policies may be organizational, but are often defined jurisdictionally, or in law.
   */
  policy?: fhir.ConsentPolicyArgs[]|undefined;
  /**
   * If the policyRule is absent, computable consent would need to be constructed from the elements of the Consent resource.
   */
  policyRule?: fhir.CodeableConceptArgs|undefined;
  /**
   * Whether a treatment instruction (e.g. artificial respiration yes or no) was verified with the patient, his/her family or another authorized person.
   */
  verification?: fhir.ConsentVerificationArgs[]|undefined;
  /**
   * An exception to the base policy of this consent. An exception can be an addition or removal of access permissions.
   */
  provision?: fhir.ConsentProvisionArgs|undefined;
}

/**
 * A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time.
 */
export class Consent extends fhir.DomainResource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'Consent';
  /**
   * Resource Type Name
   */
  public override resourceType: "Consent";
  /**
   * This identifier identifies this copy of the consent. Where this identifier is also used elsewhere as the identifier for a consent record (e.g. a CDA consent document) then the consent details are expected to be the same.
   */
  public identifier: fhir.Identifier[];
  /**
   * This element is labeled as a modifier because the status contains the codes rejected and entered-in-error that mark the Consent as not currently valid.
   */
  public status: fhir.FhirCode<ConsentStateCodeType>|null;
  /**
   * A selector of the type of consent being presented: ADR, Privacy, Treatment, Research.  This list is now extensible.
   */
  public scope: fhir.CodeableConcept|null;
  /**
   * A classification of the type of consents found in the statement. This element supports indexing and retrieval of consent statements.
   */
  public category: fhir.CodeableConcept[];
  /**
   * Commonly, the patient the consent pertains to is the author, but for young and old people, it may be some other person.
   */
  public patient?: fhir.Reference|undefined;
  /**
   * This is not the time of the original consent, but the time that this statement was made or derived.
   */
  public dateTime?: fhir.FhirDateTime|undefined;
  /**
   * Commonly, the patient the consent pertains to is the consentor, but particularly for young and old people, it may be some other person - e.g. a legal guardian.
   */
  public performer: fhir.Reference[];
  /**
   * The organization that manages the consent, and the framework within which it is executed.
   */
  public organization: fhir.Reference[];
  /**
   * The source can be contained inline (Attachment), referenced directly (Consent), referenced in a consent repository (DocumentReference), or simply by an identifier (Identifier), e.g. a CDA document id.
   */
  public source?: (fhir.Attachment|fhir.Reference)|undefined;
  /**
   * Internal flag to properly serialize choice-type element Consent.source[x]
   */
  protected static readonly _fts_sourceIsChoice:true = true;
  /**
   * The references to the policies that are included in this consent scope. Policies may be organizational, but are often defined jurisdictionally, or in law.
   */
  public policy: fhir.ConsentPolicy[];
  /**
   * If the policyRule is absent, computable consent would need to be constructed from the elements of the Consent resource.
   */
  public policyRule?: fhir.CodeableConcept|undefined;
  /**
   * Whether a treatment instruction (e.g. artificial respiration yes or no) was verified with the patient, his/her family or another authorized person.
   */
  public verification: fhir.ConsentVerification[];
  /**
   * An exception to the base policy of this consent. An exception can be an addition or removal of access permissions.
   */
  public provision?: fhir.ConsentProvision|undefined;
  /**
   * Default constructor for Consent - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<ConsentArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'Consent';
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x)); }
    else { this.identifier = []; }
    if (source['status']) { this.status = new fhir.FhirCode<ConsentStateCodeType>({value: source.status}); }
    else { this.status = null; }
    if (source['_status']) {
      if (this.status) { this.status.addExtendedProperties(source._status!); }
      else { this.status = new fhir.FhirCode<ConsentStateCodeType>(source._status as Partial<fhir.FhirCode>); }
    }
    if (source['scope']) { this.scope = new fhir.CodeableConcept(source.scope); }
    else { this.scope = null; }
    if (source['category']) { this.category = source.category.map((x) => new fhir.CodeableConcept(x)); }
    else { this.category = []; }
    if (source['patient']) { this.patient = new fhir.Reference(source.patient); }
    if (source['dateTime']) { this.dateTime = new fhir.FhirDateTime({value: source.dateTime}); }
    if (source['_dateTime']) {
      if (this.dateTime) { this.dateTime.addExtendedProperties(source._dateTime!); }
      else { this.dateTime = new fhir.FhirDateTime(source._dateTime as Partial<fhir.FhirDateTimeArgs>); }
    }
    if (source['performer']) { this.performer = source.performer.map((x) => new fhir.Reference(x)); }
    else { this.performer = []; }
    if (source['organization']) { this.organization = source.organization.map((x) => new fhir.Reference(x)); }
    else { this.organization = []; }
    if (source['source']) { this.source = source.source; }
    else if (source['sourceAttachment']) { this.source = new fhir.Attachment(source.sourceAttachment); }
    else if (source['sourceReference']) { this.source = new fhir.Reference(source.sourceReference); }
    if (source['policy']) { this.policy = source.policy.map((x) => new fhir.ConsentPolicy(x)); }
    else { this.policy = []; }
    if (source['policyRule']) { this.policyRule = new fhir.CodeableConcept(source.policyRule); }
    if (source['verification']) { this.verification = source.verification.map((x) => new fhir.ConsentVerification(x)); }
    else { this.verification = []; }
    if (source['provision']) { this.provision = new fhir.ConsentProvision(source.provision); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'Consent' }
    iss.push(...this.vRPS('resourceType',exp));
    iss.push(...this.vOA('identifier',exp));
    iss.push(...this.vRSV('status',exp,'ConsentState',ConsentStateVsValidation,'r'));
    iss.push(...this.vRS('scope',exp));
    iss.push(...this.vRA('category',exp));
    iss.push(...this.vOS('patient',exp));
    iss.push(...this.vOS('dateTime',exp));
    iss.push(...this.vOA('performer',exp));
    iss.push(...this.vOA('organization',exp));
    iss.push(...this.vOS('source',exp));
    iss.push(...this.vOA('policy',exp));
    iss.push(...this.vOS('policyRule',exp));
    iss.push(...this.vOA('verification',exp));
    iss.push(...this.vOS('provision',exp));
    return iss;
  }
}
