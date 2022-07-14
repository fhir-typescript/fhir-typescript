// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: Provenance

import * as fhir from '../fhir.js';

// @ts-ignore
import { ProvenanceAgentTypeCodes,  ProvenanceAgentTypeCodeType } from '../fhirValueSets/ProvenanceAgentTypeCodes.js';
// @ts-ignore
import { ProvenanceAgentTypeVsValidation } from '../fhirValueSets/ProvenanceAgentTypeVsValidation.js';
// @ts-ignore
import { SecurityRoleTypeCodes,  SecurityRoleTypeCodeType } from '../fhirValueSets/SecurityRoleTypeCodes.js';
// @ts-ignore
import { SecurityRoleTypeVsValidation } from '../fhirValueSets/SecurityRoleTypeVsValidation.js';
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
   * For example: author, performer, enterer, attester, etc.
   */
  type?: fhir.CodeableConceptArgs|undefined;
  /**
   * For example: doctor, nurse, clerk, etc.
   */
  role?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * whoIdentity should be used when the agent is not a Resource type.
   */
  who: fhir.ReferenceArgs|null;
  /**
   * onBehalfOfIdentity should be used when the agent is not a Resource type.
   */
  onBehalfOf?: fhir.ReferenceArgs|undefined;
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
   * For example: author, performer, enterer, attester, etc.
   */
  public type?: fhir.CodeableConcept|undefined;
  /**
   * For example: doctor, nurse, clerk, etc.
   */
  public role: fhir.CodeableConcept[];
  /**
   * whoIdentity should be used when the agent is not a Resource type.
   */
  public who: fhir.Reference|null;
  /**
   * onBehalfOfIdentity should be used when the agent is not a Resource type.
   */
  public onBehalfOf?: fhir.Reference|undefined;
  /**
   * Default constructor for ProvenanceAgent - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<ProvenanceAgentArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['type']) { this.type = new fhir.CodeableConcept(source.type); }
    if (source['role']) { this.role = source.role.map((x) => new fhir.CodeableConcept(x)); }
    else { this.role = []; }
    if (source['who']) { this.who = new fhir.Reference(source.who); }
    else { this.who = null; }
    if (source['onBehalfOf']) { this.onBehalfOf = new fhir.Reference(source.onBehalfOf); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(expression:string = ''):fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation(expression);
    if (expression === '') { expression = 'Provenance.agent' }
    this.vOptS('type',expression)
    this.vOptA('role',expression)
    this.vReqS('who',expression)
    this.vOptS('onBehalfOf',expression)
    return issues;
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
   * whatIdentity should be used for entities that are not a Resource type.
   */
  what: fhir.ReferenceArgs|null;
  /**
   * A usecase where one Provenance.entity.agent is used where the Entity that was used in the creation/updating of the Target, is not in the context of the same custodianship as the Target, and thus the meaning of Provenance.entity.agent is to say that the entity referenced is managed elsewhere and that this Agent provided access to it.  This would be similar to where the Entity being referenced is managed outside FHIR, such as through HL7 v2, v3, or XDS. This might be where the Entity being referenced is managed in another FHIR resource server. Thus it explains the Provenance of that Entity's use in the context of this Provenance activity.
   */
  agent?: fhir.ProvenanceAgentArgs[]|undefined;
}

/**
 * An entity used in this activity.
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
   * whatIdentity should be used for entities that are not a Resource type.
   */
  public what: fhir.Reference|null;
  /**
   * A usecase where one Provenance.entity.agent is used where the Entity that was used in the creation/updating of the Target, is not in the context of the same custodianship as the Target, and thus the meaning of Provenance.entity.agent is to say that the entity referenced is managed elsewhere and that this Agent provided access to it.  This would be similar to where the Entity being referenced is managed outside FHIR, such as through HL7 v2, v3, or XDS. This might be where the Entity being referenced is managed in another FHIR resource server. Thus it explains the Provenance of that Entity's use in the context of this Provenance activity.
   */
  public agent: fhir.ProvenanceAgent[];
  /**
   * Default constructor for ProvenanceEntity - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<ProvenanceEntityArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['role']) { this.role = new fhir.FhirCode<ProvenanceEntityRoleCodeType>({value: source.role}); }
    else { this.role = null; }
    if (source['_role']) {
      if (this.role) { this.role.addExtendedProperties(source._role!); }
      else { this.role = new fhir.FhirCode<ProvenanceEntityRoleCodeType>(source._role as Partial<fhir.FhirCode>); }
    }
    if (source['what']) { this.what = new fhir.Reference(source.what); }
    else { this.what = null; }
    if (source['agent']) { this.agent = source.agent.map((x) => new fhir.ProvenanceAgent(x)); }
    else { this.agent = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(expression:string = ''):fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation(expression);
    if (expression === '') { expression = 'Provenance.entity' }
    this.vReqSV('role',expression,'ProvenanceEntityRole',ProvenanceEntityRoleVsValidation,'r')
    this.vReqS('what',expression)
    this.vOptA('agent',expression)
    return issues;
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
   * Target references are usually version specific, but might not be, if a version has not been assigned or if the provenance information is part of the set of resources being maintained (i.e. a document). When using the RESTful API, the identity of the resource might not be known (especially not the version specific one); the client may either submit the resource first, and then the provenance, or it may submit both using a single transaction. See the notes on transaction for further discussion.
   */
  target: fhir.ReferenceArgs[]|null;
  /**
   * The period can be a little arbitrary; where possible, the time should correspond to human assessment of the activity time.
   */
  occurred?: fhir.Period|fhir.FhirDateTime|undefined;
  /**
   * The period can be a little arbitrary; where possible, the time should correspond to human assessment of the activity time.
   */
  occurredPeriod?: fhir.PeriodArgs|undefined;
  /**
   * The period can be a little arbitrary; where possible, the time should correspond to human assessment of the activity time.
   */
  occurredDateTime?: fhir.FhirDateTime|string|undefined;
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
  reason?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * An activity is something that occurs over a period of time and acts upon or with entities; it may include consuming, processing, transforming, modifying, relocating, using, or generating entities.
   */
  activity?: fhir.CodeableConceptArgs|undefined;
  /**
   * Several agents may be associated (i.e. has some responsibility for an activity) with an activity and vice-versa.
   */
  agent: fhir.ProvenanceAgentArgs[]|null;
  /**
   * An entity used in this activity.
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
   * Target references are usually version specific, but might not be, if a version has not been assigned or if the provenance information is part of the set of resources being maintained (i.e. a document). When using the RESTful API, the identity of the resource might not be known (especially not the version specific one); the client may either submit the resource first, and then the provenance, or it may submit both using a single transaction. See the notes on transaction for further discussion.
   */
  public target: fhir.Reference[];
  /**
   * The period can be a little arbitrary; where possible, the time should correspond to human assessment of the activity time.
   */
  public occurred?: (fhir.Period|fhir.FhirDateTime)|undefined;
  /**
   * Internal flag to properly serialize choice-type element Provenance.occurred[x]
   */
  protected static readonly _fts_occurredIsChoice:true = true;
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
  public reason: fhir.CodeableConcept[];
  /**
   * An activity is something that occurs over a period of time and acts upon or with entities; it may include consuming, processing, transforming, modifying, relocating, using, or generating entities.
   */
  public activity?: fhir.CodeableConcept|undefined;
  /**
   * Several agents may be associated (i.e. has some responsibility for an activity) with an activity and vice-versa.
   */
  public agent: fhir.ProvenanceAgent[];
  /**
   * An entity used in this activity.
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
    if (source['target']) { this.target = source.target.map((x) => new fhir.Reference(x)); }
    else { this.target = []; }
    if (source['occurred']) { this.occurred = source.occurred; }
    else if (source['occurredPeriod']) { this.occurred = new fhir.Period(source.occurredPeriod); }
    else if (source['occurredDateTime']) { this.occurred = new fhir.FhirDateTime({value: source.occurredDateTime}); }
    if (source['recorded']) { this.recorded = new fhir.FhirInstant({value: source.recorded}); }
    else { this.recorded = null; }
    if (source['_recorded']) {
      if (this.recorded) { this.recorded.addExtendedProperties(source._recorded!); }
      else { this.recorded = new fhir.FhirInstant(source._recorded as Partial<fhir.FhirInstantArgs>); }
    }
    if (source['policy']) { this.policy = source.policy.map((x) => new fhir.FhirUri({value: x})); }
    else { this.policy = []; }
    if (source['_policy']) {
      source._policy.forEach((x,i) => {
        if (this.policy.length >= i) { if (x) { this.policy[i].addExtendedProperties(x); } }
        else { if (x) { this.policy.push(new fhir.FhirUri(x as Partial<fhir.FhirUriArgs>)); } }
      });
    }
    if (source['location']) { this.location = new fhir.Reference(source.location); }
    if (source['reason']) { this.reason = source.reason.map((x) => new fhir.CodeableConcept(x)); }
    else { this.reason = []; }
    if (source['activity']) { this.activity = new fhir.CodeableConcept(source.activity); }
    if (source['agent']) { this.agent = source.agent.map((x) => new fhir.ProvenanceAgent(x)); }
    else { this.agent = []; }
    if (source['entity']) { this.entity = source.entity.map((x) => new fhir.ProvenanceEntity(x)); }
    else { this.entity = []; }
    if (source['signature']) { this.signature = source.signature.map((x) => new fhir.Signature(x)); }
    else { this.signature = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(expression:string = ''):fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation(expression);
    if (expression === '') { expression = 'Provenance' }
    this.vReqS('resourceType',expression)
    this.vReqA('target',expression)
    this.vOptS('occurred',expression)
    this.vReqS('recorded',expression)
    this.vOptA('policy',expression)
    this.vOptS('location',expression)
    this.vOptA('reason',expression)
    this.vOptS('activity',expression)
    this.vReqA('agent',expression)
    this.vOptA('entity',expression)
    this.vOptA('signature',expression)
    return issues;
  }
}
