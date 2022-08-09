// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR Resource: Provenance

import * as fhir from '../fhir.js';

// @ts-ignore
import { V3RoleLinkTypeCodes,  V3RoleLinkTypeCodeType } from '../fhirValueSets/V3RoleLinkTypeCodes.js';
// @ts-ignore
import { V3RoleLinkTypeVsValidation } from '../fhirValueSets/V3RoleLinkTypeVsValidation.js';
// @ts-ignore
import { ProvenanceEntityRoleCodes,  ProvenanceEntityRoleCodeType } from '../fhirValueSets/ProvenanceEntityRoleCodes.js';
// @ts-ignore
import { ProvenanceEntityRoleVsValidation } from '../fhirValueSets/ProvenanceEntityRoleVsValidation.js';
// @ts-ignore
import { V3PurposeOfUseCodes,  V3PurposeOfUseCodeType } from '../fhirValueSets/V3PurposeOfUseCodes.js';
// @ts-ignore
import { V3PurposeOfUseVsValidation } from '../fhirValueSets/V3PurposeOfUseVsValidation.js';
// @ts-ignore
import { ProvenanceActivityTypeCodes,  ProvenanceActivityTypeCodeType } from '../fhirValueSets/ProvenanceActivityTypeCodes.js';
// @ts-ignore
import { ProvenanceActivityTypeVsValidation } from '../fhirValueSets/ProvenanceActivityTypeVsValidation.js';
/**
 * Valid arguments for the ProvenanceAgent type.
 */
export interface ProvenanceAgentArgs extends fhir.BackboneElementArgs {
  /**
   * For example: author, performer, enterer, attester, doctor, nurse, clerk, etc.
   */
  role?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * The individual, device or organization that participated in the event.
   */
  who?: fhir.FhirUri|fhir.Reference|undefined;
  /**
   * The individual, device or organization that participated in the event.
   */
  whoUri?: fhir.FhirUri|string|undefined;
  /**
   * The individual, device or organization that participated in the event.
   */
  whoReference?: fhir.ReferenceArgs|undefined;
  /**
   * The individual, device, or organization for whom the change was made.
   */
  onBehalfOf?: fhir.FhirUri|fhir.Reference|undefined;
  /**
   * The individual, device, or organization for whom the change was made.
   */
  onBehalfOfUri?: fhir.FhirUri|string|undefined;
  /**
   * The individual, device, or organization for whom the change was made.
   */
  onBehalfOfReference?: fhir.ReferenceArgs|undefined;
  /**
   * The type of relationship between agents.
   */
  relatedAgentType?: fhir.CodeableConceptArgs|undefined;
}

/**
 * Several agents may be associated (i.e. has some responsibility for an activity) with an activity and vice-versa.
 */
export class ProvenanceAgent extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'ProvenanceAgent';
  /**
   * For example: author, performer, enterer, attester, doctor, nurse, clerk, etc.
   */
  public role: fhir.CodeableConcept[];
  /**
   * The individual, device or organization that participated in the event.
   */
  public who: (fhir.FhirUri|fhir.Reference)|null;
  /**
   * Internal flag to properly serialize choice-type element Provenance.agent.who[x]
   */
  protected static readonly _fts_whoIsChoice:true = true;
  /**
   * The individual, device, or organization for whom the change was made.
   */
  public onBehalfOf?: (fhir.FhirUri|fhir.Reference)|undefined;
  /**
   * Internal flag to properly serialize choice-type element Provenance.agent.onBehalfOf[x]
   */
  protected static readonly _fts_onBehalfOfIsChoice:true = true;
  /**
   * The type of relationship between agents.
   */
  public relatedAgentType?: fhir.CodeableConcept|undefined;
  /**
   * Default constructor for ProvenanceAgent - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<ProvenanceAgentArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['role']) { this.role = source.role.map((x) => new fhir.CodeableConcept(x, options)); }
    else { this.role = []; }
    if (source['who']) { this.who = source.who; }
    else if (source['whoUri'] !== undefined) { this.who = new fhir.FhirUri({value: source.whoUri}, options); }
    else if (source['whoReference']) { this.who = new fhir.Reference(source.whoReference, options); }
    else { this.who = null; }
    if (source['onBehalfOf']) { this.onBehalfOf = source.onBehalfOf; }
    else if (source['onBehalfOfUri'] !== undefined) { this.onBehalfOf = new fhir.FhirUri({value: source.onBehalfOfUri}, options); }
    else if (source['onBehalfOfReference']) { this.onBehalfOf = new fhir.Reference(source.onBehalfOfReference, options); }
    if (source['relatedAgentType']) { this.relatedAgentType = new fhir.CodeableConcept(source.relatedAgentType, options); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'Provenance.agent' }
    iss.push(...this.vOA('role',exp));
    iss.push(...this.vRS('who',exp));
    iss.push(...this.vOS('onBehalfOf',exp));
    iss.push(...this.vOS('relatedAgentType',exp));
    return iss;
  }
}
/**
 * Valid arguments for the ProvenanceEntity type.
 */
export interface ProvenanceEntityArgs extends fhir.BackboneElementArgs {
  /**
   * How the entity was used during the activity.
   */
  role: fhir.FhirCode<ProvenanceEntityRoleCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: Provenance.entity.role
   */
  _role?:fhir.FhirElementArgs;
  /**
   * Identity may be a reference to a resource or to something else, depending on the type.
   */
  what?: fhir.FhirUri|fhir.Reference|fhir.Identifier|undefined;
  /**
   * Identity may be a reference to a resource or to something else, depending on the type.
   */
  whatUri?: fhir.FhirUri|string|undefined;
  /**
   * Identity may be a reference to a resource or to something else, depending on the type.
   */
  whatReference?: fhir.ReferenceArgs|undefined;
  /**
   * Identity may be a reference to a resource or to something else, depending on the type.
   */
  whatIdentifier?: fhir.IdentifierArgs|undefined;
  /**
   * A usecase where one Provenance.entity.agent is used where the Entity that was used in the creation/updating of the Target, is not in the context of the same custodianship as the Target, and thus the meaning of Provenance.entity.agent is to say that the entity referenced is managed elsewhere and that this Agent provided access to it.  This would be similar to where the Entity being referenced is managed outside FHIR, such as through HL7 v2, v3, or XDS. This might be where the Entity being referenced is managed in another FHIR resource server. Thus it explains the Provenance of that Entity's use in the context of this Provenance activity.
   */
  agent?: fhir.ProvenanceAgentArgs[]|undefined;
}

/**
 * Multiple userIds may be associated with the same Practitioner or other individual across various appearances, each with distinct privileges.
 */
export class ProvenanceEntity extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'ProvenanceEntity';
  /**
   * How the entity was used during the activity.
   */
  public role: fhir.FhirCode<ProvenanceEntityRoleCodeType>|null;
  /**
   * Identity may be a reference to a resource or to something else, depending on the type.
   */
  public what: (fhir.FhirUri|fhir.Reference|fhir.Identifier)|null;
  /**
   * Internal flag to properly serialize choice-type element Provenance.entity.what[x]
   */
  protected static readonly _fts_whatIsChoice:true = true;
  /**
   * A usecase where one Provenance.entity.agent is used where the Entity that was used in the creation/updating of the Target, is not in the context of the same custodianship as the Target, and thus the meaning of Provenance.entity.agent is to say that the entity referenced is managed elsewhere and that this Agent provided access to it.  This would be similar to where the Entity being referenced is managed outside FHIR, such as through HL7 v2, v3, or XDS. This might be where the Entity being referenced is managed in another FHIR resource server. Thus it explains the Provenance of that Entity's use in the context of this Provenance activity.
   */
  public agent: fhir.ProvenanceAgent[];
  /**
   * Default constructor for ProvenanceEntity - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<ProvenanceEntityArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['role'] !== undefined) { this.role = new fhir.FhirCode<ProvenanceEntityRoleCodeType>({value: source.role}, options); }
    else { this.role = null; }
    if (source['_role']) {
      if (this.role) { this.role.addExtendedProperties(source._role!); }
      else { this.role = new fhir.FhirCode<ProvenanceEntityRoleCodeType>(source._role as Partial<fhir.FhirCode>, options); }
    }
    if (source['what']) { this.what = source.what; }
    else if (source['whatUri'] !== undefined) { this.what = new fhir.FhirUri({value: source.whatUri}, options); }
    else if (source['whatReference']) { this.what = new fhir.Reference(source.whatReference, options); }
    else if (source['whatIdentifier']) { this.what = new fhir.Identifier(source.whatIdentifier, options); }
    else { this.what = null; }
    if (source['agent']) { this.agent = source.agent.map((x) => new fhir.ProvenanceAgent(x, options)); }
    else { this.agent = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'Provenance.entity' }
    iss.push(...this.vRSV('role',exp,'ProvenanceEntityRole',ProvenanceEntityRoleVsValidation,'r'));
    iss.push(...this.vRS('what',exp));
    iss.push(...this.vOA('agent',exp));
    return iss;
  }
}
/**
 * Valid arguments for the Provenance type.
 */
export interface ProvenanceArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "Provenance"|undefined;
  /**
   * Target references are usually version specific, but may not be, if a version has not been assigned or if the provenance information is part of the set of resources being maintained (i.e. a document). When using the RESTful API, the identity of the resource may not be known (especially not the version specific one); the client may either submit the resource first, and then the provenance, or it may submit both using a single transaction. See the notes on transaction for further discussion.
   */
  target: fhir.ReferenceArgs[]|null;
  /**
   * The period can be a little arbitrary; where possible, the time should correspond to human assessment of the activity time.
   */
  period?: fhir.PeriodArgs|undefined;
  /**
   * This can be a little different from the time stamp on the resource if there is a delay between recording the event and updating the provenance and target resource.
   */
  recorded: fhir.FhirInstant|string|undefined;
  /**
   * Extended properties for primitive element: Provenance.recorded
   */
  _recorded?:fhir.FhirElementArgs;
  /**
   * For example: Where an OAuth token authorizes, the unique identifier from the OAuth token is placed into the policy element Where a policy engine (e.g. XACML) holds policy logic, the unique policy identifier is placed into the policy element.
   */
  policy?: fhir.FhirUri[]|(string|null)[]|undefined;
  /**
   * Extended properties for primitive element: Provenance.policy
   */
  _policy?:(fhir.FhirElementArgs|null)[];
  /**
   * Where the activity occurred, if relevant.
   */
  location?: fhir.ReferenceArgs|undefined;
  /**
   * The reason that the activity was taking place.
   */
  reason?: fhir.CodingArgs[]|undefined;
  /**
   * An activity is something that occurs over a period of time and acts upon or with entities; it may include consuming, processing, transforming, modifying, relocating, using, or generating entities.
   */
  activity?: fhir.CodingArgs|undefined;
  /**
   * Several agents may be associated (i.e. has some responsibility for an activity) with an activity and vice-versa.
   */
  agent: fhir.ProvenanceAgentArgs[]|null;
  /**
   * Multiple userIds may be associated with the same Practitioner or other individual across various appearances, each with distinct privileges.
   */
  entity?: fhir.ProvenanceEntityArgs[]|undefined;
  /**
   * A digital signature on the target Reference(s). The signer should match a Provenance.agent. The purpose of the signature is indicated.
   */
  signature?: fhir.SignatureArgs[]|undefined;
}

/**
 * Provenance of a resource is a record that describes entities and processes involved in producing and delivering or otherwise influencing that resource. Provenance provides a critical foundation for assessing authenticity, enabling trust, and allowing reproducibility. Provenance assertions are a form of contextual metadata and can themselves become important records with their own provenance. Provenance statement indicates clinical significance in terms of confidence in authenticity, reliability, and trustworthiness, integrity, and stage in lifecycle (e.g. Document Completion - has the artifact been legally authenticated), all of which may impact security, privacy, and trust policies.
 */
export class Provenance extends fhir.DomainResource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'Provenance';
  /**
   * Resource Type Name
   */
  public override resourceType: "Provenance";
  /**
   * Target references are usually version specific, but may not be, if a version has not been assigned or if the provenance information is part of the set of resources being maintained (i.e. a document). When using the RESTful API, the identity of the resource may not be known (especially not the version specific one); the client may either submit the resource first, and then the provenance, or it may submit both using a single transaction. See the notes on transaction for further discussion.
   */
  public target: fhir.Reference[];
  /**
   * The period can be a little arbitrary; where possible, the time should correspond to human assessment of the activity time.
   */
  public period?: fhir.Period|undefined;
  /**
   * This can be a little different from the time stamp on the resource if there is a delay between recording the event and updating the provenance and target resource.
   */
  public recorded: fhir.FhirInstant|null;
  /**
   * For example: Where an OAuth token authorizes, the unique identifier from the OAuth token is placed into the policy element Where a policy engine (e.g. XACML) holds policy logic, the unique policy identifier is placed into the policy element.
   */
  public policy: fhir.FhirUri[];
  /**
   * Where the activity occurred, if relevant.
   */
  public location?: fhir.Reference|undefined;
  /**
   * The reason that the activity was taking place.
   */
  public reason: fhir.Coding[];
  /**
   * An activity is something that occurs over a period of time and acts upon or with entities; it may include consuming, processing, transforming, modifying, relocating, using, or generating entities.
   */
  public activity?: fhir.Coding|undefined;
  /**
   * Several agents may be associated (i.e. has some responsibility for an activity) with an activity and vice-versa.
   */
  public agent: fhir.ProvenanceAgent[];
  /**
   * Multiple userIds may be associated with the same Practitioner or other individual across various appearances, each with distinct privileges.
   */
  public entity: fhir.ProvenanceEntity[];
  /**
   * A digital signature on the target Reference(s). The signer should match a Provenance.agent. The purpose of the signature is indicated.
   */
  public signature: fhir.Signature[];
  /**
   * Default constructor for Provenance - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<ProvenanceArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'Provenance';
    if (source['target']) { this.target = source.target.map((x) => new fhir.Reference(x, options)); }
    else { this.target = []; }
    if (source['period']) { this.period = new fhir.Period(source.period, options); }
    if (source['recorded'] !== undefined) { this.recorded = new fhir.FhirInstant({value: source.recorded}, options); }
    else { this.recorded = null; }
    if (source['_recorded']) {
      if (this.recorded) { this.recorded.addExtendedProperties(source._recorded!); }
      else { this.recorded = new fhir.FhirInstant(source._recorded as Partial<fhir.FhirInstantArgs>, options); }
    }
    if (source['policy'] !== undefined) { this.policy = source.policy.map((x) => new fhir.FhirUri({value: x}, options)); }
    else { this.policy = []; }
    if (source['_policy']) {
      source._policy.forEach((x,i) => {
        if (this.policy.length >= i) { if (x) { this.policy[i].addExtendedProperties(x); } }
        else { if (x) { this.policy.push(new fhir.FhirUri(x as Partial<fhir.FhirUriArgs>)); } }
      });
    }
    if (source['location']) { this.location = new fhir.Reference(source.location, options); }
    if (source['reason']) { this.reason = source.reason.map((x) => new fhir.Coding(x, options)); }
    else { this.reason = []; }
    if (source['activity']) { this.activity = new fhir.Coding(source.activity, options); }
    if (source['agent']) { this.agent = source.agent.map((x) => new fhir.ProvenanceAgent(x, options)); }
    else { this.agent = []; }
    if (source['entity']) { this.entity = source.entity.map((x) => new fhir.ProvenanceEntity(x, options)); }
    else { this.entity = []; }
    if (source['signature']) { this.signature = source.signature.map((x) => new fhir.Signature(x, options)); }
    else { this.signature = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'Provenance' }
    iss.push(...this.vRA('target',exp));
    iss.push(...this.vOS('period',exp));
    iss.push(...this.vRS('recorded',exp));
    iss.push(...this.vOA('policy',exp));
    iss.push(...this.vOS('location',exp));
    iss.push(...this.vOA('reason',exp));
    iss.push(...this.vOS('activity',exp));
    iss.push(...this.vRA('agent',exp));
    iss.push(...this.vOA('entity',exp));
    iss.push(...this.vOA('signature',exp));
    return iss;
  }
}
