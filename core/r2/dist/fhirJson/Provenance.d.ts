import * as fhir from '../fhirJson.js';
/**
 * A relationship between two the agents referenced in this resource. This is defined to allow for explicit description of the delegation between agents.  For example, this human author used this device, or one person acted on another's behest.
 */
export interface ProvenanceAgentRelatedAgent extends fhir.BackboneElement {
    /**
     * The type of relationship between agents.
     */
    type: fhir.CodeableConcept | null;
    /**
     * An internal reference to another agent listed in this provenance by its identifier.
     */
    target: string | null;
    /**
     * Extended properties for primitive element: Provenance.agent.relatedAgent.target
     */
    _target?: fhir.FhirElement;
}
/**
 * An agent takes a role in an activity such that the agent can be assigned some degree of responsibility for the activity taking place. An agent can be a person, an organization, software, or other entities that may be ascribed responsibility.
 */
export interface ProvenanceAgent extends fhir.BackboneElement {
    /**
     * The function of the agent with respect to the activity.
     */
    role: fhir.Coding | null;
    /**
     * The individual, device or organization that participated in the event.
     */
    actor?: fhir.Reference | undefined;
    /**
     * The identity of the agent as known by the authorization system.
     */
    userId?: fhir.Identifier | undefined;
    /**
     * A relationship between two the agents referenced in this resource. This is defined to allow for explicit description of the delegation between agents.  For example, this human author used this device, or one person acted on another's behest.
     */
    relatedAgent?: (fhir.ProvenanceAgentRelatedAgent | null)[] | undefined;
}
/**
 * An entity used in this activity.
 */
export interface ProvenanceEntity extends fhir.BackboneElement {
    /**
     * How the entity was used during the activity.
     */
    role: 'derivation' | 'quotation' | 'revision' | 'source' | null;
    /**
     * Extended properties for primitive element: Provenance.entity.role
     */
    _role?: fhir.FhirElement;
    /**
     * If the type is "resource" then the resource itself was the participant. If the type is a type of resource, then the entity identified by the resource is the participant.
     */
    type: fhir.Coding | null;
    /**
     * Identity of the  Entity used. May be a logical or physical uri and maybe absolute or relative.
     */
    reference: string | null;
    /**
     * Extended properties for primitive element: Provenance.entity.reference
     */
    _reference?: fhir.FhirElement;
    /**
     * Human-readable description of the entity.
     */
    display?: string | undefined;
    /**
     * Extended properties for primitive element: Provenance.entity.display
     */
    _display?: fhir.FhirElement;
    /**
     * The entity is attributed to an agent to express the agent's responsibility for that entity, possibly along with other agents. This description can be understood as shorthand for saying that the agent was responsible for the activity which generated the entity.
     */
    agent?: fhir.ProvenanceAgent | undefined;
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
     * The Reference(s) that were generated or updated by  the activity described in this resource. A provenance can point to more than one target if multiple resources were created/updated by the same activity.
     */
    target: (fhir.Reference | null)[] | null;
    /**
     * The period during which the activity occurred.
     */
    period?: fhir.Period | undefined;
    /**
     * The instant of time at which the activity was recorded.
     */
    recorded: string | null;
    /**
     * Extended properties for primitive element: Provenance.recorded
     */
    _recorded?: fhir.FhirElement;
    /**
     * The reason that the activity was taking place.
     */
    reason?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * An activity is something that occurs over a period of time and acts upon or with entities; it may include consuming, processing, transforming, modifying, relocating, using, or generating entities.
     */
    activity?: fhir.CodeableConcept | undefined;
    /**
     * Where the activity occurred, if relevant.
     */
    location?: fhir.Reference | undefined;
    /**
     * Policy or plan the activity was defined by. Typically, a single activity may have multiple applicable policy documents, such as patient consent, guarantor funding, etc.
     */
    policy?: (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: Provenance.policy
     */
    _policy?: (fhir.FhirElement | null)[];
    /**
     * An agent takes a role in an activity such that the agent can be assigned some degree of responsibility for the activity taking place. An agent can be a person, an organization, software, or other entities that may be ascribed responsibility.
     */
    agent?: (fhir.ProvenanceAgent | null)[] | undefined;
    /**
     * An entity used in this activity.
     */
    entity?: (fhir.ProvenanceEntity | null)[] | undefined;
    /**
     * A digital signature on the target Reference(s). The signer should match a Provenance.agent. The purpose of the signature is indicated.
     */
    signature?: (fhir.Signature | null)[] | undefined;
}
//# sourceMappingURL=Provenance.d.ts.map