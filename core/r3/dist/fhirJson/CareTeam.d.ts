import * as fhir from '../fhirJson.js';
/**
 * Identifies all people and organizations who are expected to be involved in the care team.
 */
export interface CareTeamParticipant extends fhir.BackboneElement {
    /**
     * Roles may sometimes be inferred by type of Practitioner.  These are relationships that hold only within the context of the care team.  General relationships should be handled as properties of the Patient resource directly.
     */
    role?: fhir.CodeableConcept | undefined;
    /**
     * Patient only needs to be listed if they have a role other than "subject of care".
     * Member is optional because some participants may be known only by their role, particularly in draft plans.
     */
    member?: fhir.Reference | undefined;
    /**
     * The organization of the practitioner.
     */
    onBehalfOf?: fhir.Reference | undefined;
    /**
     * Indicates when the specific member or organization did (or is intended to) come into effect and end.
     */
    period?: fhir.Period | undefined;
}
/**
 * The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care for a patient.
 */
export interface CareTeam extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "CareTeam" | null;
    /**
     * This records identifiers associated with this care team that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate.
     */
    identifier?: (fhir.Identifier | null)[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains the code entered-in-error that marks the care team as not currently valid.
     */
    status?: 'active' | 'entered-in-error' | 'inactive' | 'proposed' | 'suspended' | undefined;
    /**
     * Extended properties for primitive element: CareTeam.status
     */
    _status?: fhir.FhirElement;
    /**
     * There may be multiple axis of categorization and one team may serve multiple purposes.
     */
    category?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * The meaning/purpose of the team is conveyed in CareTeam.category.  This element may also convey semantics of the team (e.g. "Red trauma team"), but its primary purpose is to distinguish between identical teams in a human-friendly way.  ("Team 18735" isn't as friendly . ).
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: CareTeam.name
     */
    _name?: fhir.FhirElement;
    /**
     * Identifies the patient or group whose intended care is handled by the team.
     */
    subject?: fhir.Reference | undefined;
    /**
     * The encounter or episode of care that establishes the context for this care team.
     */
    context?: fhir.Reference | undefined;
    /**
     * Indicates when the team did (or is intended to) come into effect and end.
     */
    period?: fhir.Period | undefined;
    /**
     * Identifies all people and organizations who are expected to be involved in the care team.
     */
    participant?: (fhir.CareTeamParticipant | null)[] | undefined;
    /**
     * Describes why the care team exists.
     */
    reasonCode?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * Condition(s) that this care team addresses.
     */
    reasonReference?: (fhir.Reference | null)[] | undefined;
    /**
     * The organization responsible for the care team.
     */
    managingOrganization?: (fhir.Reference | null)[] | undefined;
    /**
     * Comments made about the CareTeam.
     */
    note?: (fhir.Annotation | null)[] | undefined;
}
//# sourceMappingURL=CareTeam.d.ts.map