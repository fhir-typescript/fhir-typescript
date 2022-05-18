import * as fhir from '../fhirJson.js';
/**
 * Several agents may be associated (i.e. has some responsibility for an activity) with an activity and vice-versa.
 */
export interface ProvenanceAgent extends fhir.BackboneElement {
    /**
     * For example: author, performer, enterer, attester, etc.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * For example: doctor, nurse, clerk, etc.
     */
    role?: fhir.CodeableConcept[] | undefined;
    /**
     * whoIdentity should be used when the agent is not a Resource type.
     */
    who: fhir.Reference | null;
    /**
     * onBehalfOfIdentity should be used when the agent is not a Resource type.
     */
    onBehalfOf?: fhir.Reference | undefined;
}
/**
 * An entity used in this activity.
 */
export interface ProvenanceEntity extends fhir.BackboneElement {
    /**
     * How the entity was used during the activity.
     */
    role: 'derivation' | 'quotation' | 'removal' | 'revision' | 'source' | null;
    /**
     * whatIdentity should be used for entities that are not a Resource type.
     */
    what: fhir.Reference | null;
    /**
     * A usecase where one Provenance.entity.agent is used where the Entity that was used in the creation/updating of the Target, is not in the context of the same custodianship as the Target, and thus the meaning of Provenance.entity.agent is to say that the entity referenced is managed elsewhere and that this Agent provided access to it.  This would be similar to where the Entity being referenced is managed outside FHIR, such as through HL7 v2, v3, or XDS. This might be where the Entity being referenced is managed in another FHIR resource server. Thus it explains the Provenance of that Entity's use in the context of this Provenance activity.
     */
    agent?: fhir.ProvenanceAgent[] | undefined;
}
/**
 * Provenance of a resource is a record that describes entities and processes involved in producing and delivering or otherwise influencing that resource. Provenance provides a critical foundation for assessing authenticity, enabling trust, and allowing reproducibility. Provenance assertions are a form of contextual metadata and can themselves become important records with their own provenance. Provenance statement indicates clinical significance in terms of confidence in authenticity, reliability, and trustworthiness, integrity, and stage in lifecycle (e.g. Document Completion - has the artifact been legally authenticated), all of which may impact security, privacy, and trust policies.
 */
export interface Provenance extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "Provenance";
    /**
     * Target references are usually version specific, but might not be, if a version has not been assigned or if the provenance information is part of the set of resources being maintained (i.e. a document). When using the RESTful API, the identity of the resource might not be known (especially not the version specific one); the client may either submit the resource first, and then the provenance, or it may submit both using a single transaction. See the notes on transaction for further discussion.
     */
    target: fhir.Reference[] | null;
    /**
     * The period can be a little arbitrary; where possible, the time should correspond to human assessment of the activity time.
     */
    occurredPeriod?: fhir.Period | undefined;
    /**
     * The period can be a little arbitrary; where possible, the time should correspond to human assessment of the activity time.
     */
    occurredDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: Provenance.occurred[x]
     */
    _occurredDateTime?: fhir.FhirElement;
    /**
     * This can be a little different from the time stamp on the resource if there is a delay between recording the event and updating the provenance and target resource.
     */
    recorded: string | null;
    /**
     * Extended properties for primitive element: Provenance.recorded
     */
    _recorded?: fhir.FhirElement;
    /**
     * For example: Where an OAuth token authorizes, the unique identifier from the OAuth token is placed into the policy element Where a policy engine (e.g. XACML) holds policy logic, the unique policy identifier is placed into the policy element.
     */
    policy?: string[] | undefined;
    /**
     * Extended properties for primitive element: Provenance.policy
     */
    _policy?: (fhir.FhirElement | null)[];
    /**
     * Where the activity occurred, if relevant.
     */
    location?: fhir.Reference | undefined;
    /**
     * The reason that the activity was taking place.
     */
    reason?: fhir.CodeableConcept[] | undefined;
    /**
     * An activity is something that occurs over a period of time and acts upon or with entities; it may include consuming, processing, transforming, modifying, relocating, using, or generating entities.
     */
    activity?: fhir.CodeableConcept | undefined;
    /**
     * Several agents may be associated (i.e. has some responsibility for an activity) with an activity and vice-versa.
     */
    agent: fhir.ProvenanceAgent[] | null;
    /**
     * An entity used in this activity.
     */
    entity?: fhir.ProvenanceEntity[] | undefined;
    /**
     * A digital signature on the target Reference(s). The signer should match a Provenance.agent. The purpose of the signature is indicated.
     */
    signature?: fhir.Signature[] | undefined;
}
//# sourceMappingURL=Provenance.d.ts.map