import * as fhir from '../fhirJson.js';
/**
 * The history of statuses that the EpisodeOfCare has been through (without requiring processing the history of the resource).
 */
export interface EpisodeOfCareStatusHistory extends fhir.BackboneElement {
    /**
     * planned | waitlist | active | onhold | finished | cancelled.
     */
    status: 'active' | 'cancelled' | 'finished' | 'onhold' | 'planned' | 'waitlist' | null;
    /**
     * Extended properties for primitive element: EpisodeOfCare.statusHistory.status
     */
    _status?: fhir.FhirElement;
    /**
     * The period during this EpisodeOfCare that the specific status applied.
     */
    period: fhir.Period | null;
}
/**
 * The list of practitioners that may be facilitating this episode of care for specific purposes.
 */
export interface EpisodeOfCareCareTeam extends fhir.BackboneElement {
    /**
     * The role this team member is taking within this episode of care.
     */
    role?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * The period of time this practitioner is performing some role within the episode of care.
     */
    period?: fhir.Period | undefined;
    /**
     * The practitioner (or Organization) within the team.
     */
    member?: fhir.Reference | undefined;
}
/**
 * An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time.
 */
export interface EpisodeOfCare extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "EpisodeOfCare" | null;
    /**
     * Identifier(s) by which this EpisodeOfCare is known.
     */
    identifier?: (fhir.Identifier | null)[] | undefined;
    /**
     * planned | waitlist | active | onhold | finished | cancelled.
     */
    status: 'active' | 'cancelled' | 'finished' | 'onhold' | 'planned' | 'waitlist' | null;
    /**
     * Extended properties for primitive element: EpisodeOfCare.status
     */
    _status?: fhir.FhirElement;
    /**
     * The history of statuses that the EpisodeOfCare has been through (without requiring processing the history of the resource).
     */
    statusHistory?: (fhir.EpisodeOfCareStatusHistory | null)[] | undefined;
    /**
     * A classification of the type of encounter; e.g. specialist referral, disease management, type of funded care.
     */
    type?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * A list of conditions/problems/diagnoses that this episode of care is intended to be providing care for.
     */
    condition?: (fhir.Reference | null)[] | undefined;
    /**
     * The patient that this EpisodeOfCare applies to.
     */
    patient: fhir.Reference | null;
    /**
     * The organization that has assumed the specific responsibilities for the specified duration.
     */
    managingOrganization?: fhir.Reference | undefined;
    /**
     * The interval during which the managing organization assumes the defined responsibility.
     */
    period?: fhir.Period | undefined;
    /**
     * Referral Request(s) that are fulfilled by this EpisodeOfCare, incoming referrals.
     */
    referralRequest?: (fhir.Reference | null)[] | undefined;
    /**
     * The practitioner that is the care manager/care co-ordinator for this patient.
     */
    careManager?: fhir.Reference | undefined;
    /**
     * The list of practitioners that may be facilitating this episode of care for specific purposes.
     */
    careTeam?: (fhir.EpisodeOfCareCareTeam | null)[] | undefined;
}
//# sourceMappingURL=EpisodeOfCare.d.ts.map