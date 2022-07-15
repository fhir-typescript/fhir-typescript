import * as fhir from '../fhir.js';
import { ProvenanceEntityRoleCodeType } from '../fhirValueSets/ProvenanceEntityRoleCodes.js';
/**
 * Valid arguments for the ProvenanceAgentRelatedAgent type.
 */
export interface ProvenanceAgentRelatedAgentArgs extends fhir.BackboneElementArgs {
    /**
     * The type of relationship between agents.
     */
    type: fhir.CodeableConceptArgs | null;
    /**
     * An internal reference to another agent listed in this provenance by its identifier.
     */
    target: fhir.FhirUri | string | undefined;
    /**
     * Extended properties for primitive element: Provenance.agent.relatedAgent.target
     */
    _target?: fhir.FhirElementArgs;
}
/**
 * A relationship between two the agents referenced in this resource. This is defined to allow for explicit description of the delegation between agents.  For example, this human author used this device, or one person acted on another's behest.
 */
export declare class ProvenanceAgentRelatedAgent extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The type of relationship between agents.
     */
    type: fhir.CodeableConcept | null;
    /**
     * An internal reference to another agent listed in this provenance by its identifier.
     */
    target: fhir.FhirUri | null;
    /**
     * Default constructor for ProvenanceAgentRelatedAgent - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ProvenanceAgentRelatedAgentArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ProvenanceAgent type.
 */
export interface ProvenanceAgentArgs extends fhir.BackboneElementArgs {
    /**
     * The function of the agent with respect to the activity.
     */
    role: fhir.CodingArgs | null;
    /**
     * The individual, device or organization that participated in the event.
     */
    actor?: fhir.ReferenceArgs | undefined;
    /**
     * The identity of the agent as known by the authorization system.
     */
    userId?: fhir.IdentifierArgs | undefined;
    /**
     * A relationship between two the agents referenced in this resource. This is defined to allow for explicit description of the delegation between agents.  For example, this human author used this device, or one person acted on another's behest.
     */
    relatedAgent?: fhir.ProvenanceAgentRelatedAgentArgs[] | undefined;
}
/**
 * An agent takes a role in an activity such that the agent can be assigned some degree of responsibility for the activity taking place. An agent can be a person, an organization, software, or other entities that may be ascribed responsibility.
 */
export declare class ProvenanceAgent extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
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
    relatedAgent: fhir.ProvenanceAgentRelatedAgent[];
    /**
     * Default constructor for ProvenanceAgent - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ProvenanceAgentArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ProvenanceEntity type.
 */
export interface ProvenanceEntityArgs extends fhir.BackboneElementArgs {
    /**
     * How the entity was used during the activity.
     */
    role: fhir.FhirCode<ProvenanceEntityRoleCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: Provenance.entity.role
     */
    _role?: fhir.FhirElementArgs;
    /**
     * If the type is "resource" then the resource itself was the participant. If the type is a type of resource, then the entity identified by the resource is the participant.
     */
    type: fhir.CodingArgs | null;
    /**
     * Identity of the  Entity used. May be a logical or physical uri and maybe absolute or relative.
     */
    reference: fhir.FhirUri | string | undefined;
    /**
     * Extended properties for primitive element: Provenance.entity.reference
     */
    _reference?: fhir.FhirElementArgs;
    /**
     * Human-readable description of the entity.
     */
    display?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Provenance.entity.display
     */
    _display?: fhir.FhirElementArgs;
    /**
     * The entity is attributed to an agent to express the agent's responsibility for that entity, possibly along with other agents. This description can be understood as shorthand for saying that the agent was responsible for the activity which generated the entity.
     */
    agent?: fhir.ProvenanceAgentArgs | undefined;
}
/**
 * An entity used in this activity.
 */
export declare class ProvenanceEntity extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * How the entity was used during the activity.
     */
    role: fhir.FhirCode<ProvenanceEntityRoleCodeType> | null;
    /**
     * If the type is "resource" then the resource itself was the participant. If the type is a type of resource, then the entity identified by the resource is the participant.
     */
    type: fhir.Coding | null;
    /**
     * Identity of the  Entity used. May be a logical or physical uri and maybe absolute or relative.
     */
    reference: fhir.FhirUri | null;
    /**
     * Human-readable description of the entity.
     */
    display?: fhir.FhirString | undefined;
    /**
     * The entity is attributed to an agent to express the agent's responsibility for that entity, possibly along with other agents. This description can be understood as shorthand for saying that the agent was responsible for the activity which generated the entity.
     */
    agent?: fhir.ProvenanceAgent | undefined;
    /**
     * Default constructor for ProvenanceEntity - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ProvenanceEntityArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the Provenance type.
 */
export interface ProvenanceArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "Provenance" | undefined;
    /**
     * The Reference(s) that were generated or updated by  the activity described in this resource. A provenance can point to more than one target if multiple resources were created/updated by the same activity.
     */
    target: fhir.ReferenceArgs[] | null;
    /**
     * The period during which the activity occurred.
     */
    period?: fhir.PeriodArgs | undefined;
    /**
     * The instant of time at which the activity was recorded.
     */
    recorded: fhir.FhirInstant | string | undefined;
    /**
     * Extended properties for primitive element: Provenance.recorded
     */
    _recorded?: fhir.FhirElementArgs;
    /**
     * The reason that the activity was taking place.
     */
    reason?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * An activity is something that occurs over a period of time and acts upon or with entities; it may include consuming, processing, transforming, modifying, relocating, using, or generating entities.
     */
    activity?: fhir.CodeableConceptArgs | undefined;
    /**
     * Where the activity occurred, if relevant.
     */
    location?: fhir.ReferenceArgs | undefined;
    /**
     * Policy or plan the activity was defined by. Typically, a single activity may have multiple applicable policy documents, such as patient consent, guarantor funding, etc.
     */
    policy?: fhir.FhirUri[] | (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: Provenance.policy
     */
    _policy?: (fhir.FhirElementArgs | null)[];
    /**
     * An agent takes a role in an activity such that the agent can be assigned some degree of responsibility for the activity taking place. An agent can be a person, an organization, software, or other entities that may be ascribed responsibility.
     */
    agent?: fhir.ProvenanceAgentArgs[] | undefined;
    /**
     * An entity used in this activity.
     */
    entity?: fhir.ProvenanceEntityArgs[] | undefined;
    /**
     * A digital signature on the target Reference(s). The signer should match a Provenance.agent. The purpose of the signature is indicated.
     */
    signature?: fhir.SignatureArgs[] | undefined;
}
/**
 * Provenance of a resource is a record that describes entities and processes involved in producing and delivering or otherwise influencing that resource. Provenance provides a critical foundation for assessing authenticity, enabling trust, and allowing reproducibility. Provenance assertions are a form of contextual metadata and can themselves become important records with their own provenance. Provenance statement indicates clinical significance in terms of confidence in authenticity, reliability, and trustworthiness, integrity, and stage in lifecycle (e.g. Document Completion - has the artifact been legally authenticated), all of which may impact security, privacy, and trust policies.
 */
export declare class Provenance extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "Provenance";
    /**
     * The Reference(s) that were generated or updated by  the activity described in this resource. A provenance can point to more than one target if multiple resources were created/updated by the same activity.
     */
    target: fhir.Reference[];
    /**
     * The period during which the activity occurred.
     */
    period?: fhir.Period | undefined;
    /**
     * The instant of time at which the activity was recorded.
     */
    recorded: fhir.FhirInstant | null;
    /**
     * The reason that the activity was taking place.
     */
    reason: fhir.CodeableConcept[];
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
    policy: fhir.FhirUri[];
    /**
     * An agent takes a role in an activity such that the agent can be assigned some degree of responsibility for the activity taking place. An agent can be a person, an organization, software, or other entities that may be ascribed responsibility.
     */
    agent: fhir.ProvenanceAgent[];
    /**
     * An entity used in this activity.
     */
    entity: fhir.ProvenanceEntity[];
    /**
     * A digital signature on the target Reference(s). The signer should match a Provenance.agent. The purpose of the signature is indicated.
     */
    signature: fhir.Signature[];
    /**
     * Default constructor for Provenance - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ProvenanceArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=Provenance.d.ts.map