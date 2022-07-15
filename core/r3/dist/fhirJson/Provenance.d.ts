import * as fhir from '../fhirJson.js';
/**
 * Several agents may be associated (i.e. has some responsibility for an activity) with an activity and vice-versa.
 */
export interface ProvenanceAgent extends fhir.BackboneElement {
    /**
     * For example: author, performer, enterer, attester, doctor, nurse, clerk, etc.
     */
    role?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * The individual, device or organization that participated in the event.
     */
    whoUri?: string | undefined;
    /**
     * Extended properties for primitive element: Provenance.agent.who[x]
     */
    _whoUri?: fhir.FhirElement;
    /**
     * The individual, device or organization that participated in the event.
     */
    whoReference?: fhir.Reference | undefined;
    /**
     * The individual, device, or organization for whom the change was made.
     */
    onBehalfOfUri?: string | undefined;
    /**
     * Extended properties for primitive element: Provenance.agent.onBehalfOf[x]
     */
    _onBehalfOfUri?: fhir.FhirElement;
    /**
     * The individual, device, or organization for whom the change was made.
     */
    onBehalfOfReference?: fhir.Reference | undefined;
    /**
     * The type of relationship between agents.
     */
    relatedAgentType?: fhir.CodeableConcept | undefined;
}
/**
 * Multiple userIds may be associated with the same Practitioner or other individual across various appearances, each with distinct privileges.
 */
export interface ProvenanceEntity extends fhir.BackboneElement {
    /**
     * How the entity was used during the activity.
     */
    role: 'derivation' | 'quotation' | 'removal' | 'revision' | 'source' | null;
    /**
     * Extended properties for primitive element: Provenance.entity.role
     */
    _role?: fhir.FhirElement;
    /**
     * Identity may be a reference to a resource or to something else, depending on the type.
     */
    whatUri?: string | undefined;
    /**
     * Extended properties for primitive element: Provenance.entity.what[x]
     */
    _whatUri?: fhir.FhirElement;
    /**
     * Identity may be a reference to a resource or to something else, depending on the type.
     */
    whatReference?: fhir.Reference | undefined;
    /**
     * Identity may be a reference to a resource or to something else, depending on the type.
     */
    whatIdentifier?: fhir.Identifier | undefined;
    /**
     * A usecase where one Provenance.entity.agent is used where the Entity that was used in the creation/updating of the Target, is not in the context of the same custodianship as the Target, and thus the meaning of Provenance.entity.agent is to say that the entity referenced is managed elsewhere and that this Agent provided access to it.  This would be similar to where the Entity being referenced is managed outside FHIR, such as through HL7 v2, v3, or XDS. This might be where the Entity being referenced is managed in another FHIR resource server. Thus it explains the Provenance of that Entity's use in the context of this Provenance activity.
     */
    agent?: (fhir.ProvenanceAgent | null)[] | undefined;
}
/**
 * Provenance of a resource is a record that describes entities and processes involved in producing and delivering or otherwise influencing that resource. Provenance provides a critical foundation for assessing authenticity, enabling trust, and allowing reproducibility. Provenance assertions are a form of contextual metadata and can themselves become important records with their own provenance. Provenance statement indicates clinical significance in terms of confidence in authenticity, reliability, and trustworthiness, integrity, and stage in lifecycle (e.g. Document Completion - has the artifact been legally authenticated), all of which may impact security, privacy, and trust policies.
 */
export interface Provenance extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "Provenance" | null;
    /**
     * Target references are usually version specific, but may not be, if a version has not been assigned or if the provenance information is part of the set of resources being maintained (i.e. a document). When using the RESTful API, the identity of the resource may not be known (especially not the version specific one); the client may either submit the resource first, and then the provenance, or it may submit both using a single transaction. See the notes on transaction for further discussion.
     */
    target: (fhir.Reference | null)[] | null;
    /**
     * The period can be a little arbitrary; where possible, the time should correspond to human assessment of the activity time.
     */
    period?: fhir.Period | undefined;
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
    policy?: (string | null)[] | undefined;
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
    reason?: (fhir.Coding | null)[] | undefined;
    /**
     * An activity is something that occurs over a period of time and acts upon or with entities; it may include consuming, processing, transforming, modifying, relocating, using, or generating entities.
     */
    activity?: fhir.Coding | undefined;
    /**
     * Several agents may be associated (i.e. has some responsibility for an activity) with an activity and vice-versa.
     */
    agent: (fhir.ProvenanceAgent | null)[] | null;
    /**
     * Multiple userIds may be associated with the same Practitioner or other individual across various appearances, each with distinct privileges.
     */
    entity?: (fhir.ProvenanceEntity | null)[] | undefined;
    /**
     * A digital signature on the target Reference(s). The signer should match a Provenance.agent. The purpose of the signature is indicated.
     */
    signature?: (fhir.Signature | null)[] | undefined;
}
//# sourceMappingURL=Provenance.d.ts.map