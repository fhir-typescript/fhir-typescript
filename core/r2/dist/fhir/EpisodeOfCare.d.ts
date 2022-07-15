import * as fhir from '../fhir.js';
import { EpisodeOfCareStatusCodeType } from '../fhirValueSets/EpisodeOfCareStatusCodes.js';
/**
 * Valid arguments for the EpisodeOfCareStatusHistory type.
 */
export interface EpisodeOfCareStatusHistoryArgs extends fhir.BackboneElementArgs {
    /**
     * planned | waitlist | active | onhold | finished | cancelled.
     */
    status: fhir.FhirCode<EpisodeOfCareStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: EpisodeOfCare.statusHistory.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * The period during this EpisodeOfCare that the specific status applied.
     */
    period: fhir.PeriodArgs | null;
}
/**
 * The history of statuses that the EpisodeOfCare has been through (without requiring processing the history of the resource).
 */
export declare class EpisodeOfCareStatusHistory extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * planned | waitlist | active | onhold | finished | cancelled.
     */
    status: fhir.FhirCode<EpisodeOfCareStatusCodeType> | null;
    /**
     * The period during this EpisodeOfCare that the specific status applied.
     */
    period: fhir.Period | null;
    /**
     * Default constructor for EpisodeOfCareStatusHistory - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<EpisodeOfCareStatusHistoryArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the EpisodeOfCareCareTeam type.
 */
export interface EpisodeOfCareCareTeamArgs extends fhir.BackboneElementArgs {
    /**
     * The role this team member is taking within this episode of care.
     */
    role?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * The period of time this practitioner is performing some role within the episode of care.
     */
    period?: fhir.PeriodArgs | undefined;
    /**
     * The practitioner (or Organization) within the team.
     */
    member?: fhir.ReferenceArgs | undefined;
}
/**
 * The list of practitioners that may be facilitating this episode of care for specific purposes.
 */
export declare class EpisodeOfCareCareTeam extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The role this team member is taking within this episode of care.
     */
    role: fhir.CodeableConcept[];
    /**
     * The period of time this practitioner is performing some role within the episode of care.
     */
    period?: fhir.Period | undefined;
    /**
     * The practitioner (or Organization) within the team.
     */
    member?: fhir.Reference | undefined;
    /**
     * Default constructor for EpisodeOfCareCareTeam - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<EpisodeOfCareCareTeamArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the EpisodeOfCare type.
 */
export interface EpisodeOfCareArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "EpisodeOfCare" | undefined;
    /**
     * Identifier(s) by which this EpisodeOfCare is known.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * planned | waitlist | active | onhold | finished | cancelled.
     */
    status: fhir.FhirCode<EpisodeOfCareStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: EpisodeOfCare.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * The history of statuses that the EpisodeOfCare has been through (without requiring processing the history of the resource).
     */
    statusHistory?: fhir.EpisodeOfCareStatusHistoryArgs[] | undefined;
    /**
     * A classification of the type of encounter; e.g. specialist referral, disease management, type of funded care.
     */
    type?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * A list of conditions/problems/diagnoses that this episode of care is intended to be providing care for.
     */
    condition?: fhir.ReferenceArgs[] | undefined;
    /**
     * The patient that this EpisodeOfCare applies to.
     */
    patient: fhir.ReferenceArgs | null;
    /**
     * The organization that has assumed the specific responsibilities for the specified duration.
     */
    managingOrganization?: fhir.ReferenceArgs | undefined;
    /**
     * The interval during which the managing organization assumes the defined responsibility.
     */
    period?: fhir.PeriodArgs | undefined;
    /**
     * Referral Request(s) that are fulfilled by this EpisodeOfCare, incoming referrals.
     */
    referralRequest?: fhir.ReferenceArgs[] | undefined;
    /**
     * The practitioner that is the care manager/care co-ordinator for this patient.
     */
    careManager?: fhir.ReferenceArgs | undefined;
    /**
     * The list of practitioners that may be facilitating this episode of care for specific purposes.
     */
    careTeam?: fhir.EpisodeOfCareCareTeamArgs[] | undefined;
}
/**
 * An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time.
 */
export declare class EpisodeOfCare extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "EpisodeOfCare";
    /**
     * Identifier(s) by which this EpisodeOfCare is known.
     */
    identifier: fhir.Identifier[];
    /**
     * planned | waitlist | active | onhold | finished | cancelled.
     */
    status: fhir.FhirCode<EpisodeOfCareStatusCodeType> | null;
    /**
     * The history of statuses that the EpisodeOfCare has been through (without requiring processing the history of the resource).
     */
    statusHistory: fhir.EpisodeOfCareStatusHistory[];
    /**
     * A classification of the type of encounter; e.g. specialist referral, disease management, type of funded care.
     */
    type: fhir.CodeableConcept[];
    /**
     * A list of conditions/problems/diagnoses that this episode of care is intended to be providing care for.
     */
    condition: fhir.Reference[];
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
    referralRequest: fhir.Reference[];
    /**
     * The practitioner that is the care manager/care co-ordinator for this patient.
     */
    careManager?: fhir.Reference | undefined;
    /**
     * The list of practitioners that may be facilitating this episode of care for specific purposes.
     */
    careTeam: fhir.EpisodeOfCareCareTeam[];
    /**
     * Default constructor for EpisodeOfCare - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<EpisodeOfCareArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=EpisodeOfCare.d.ts.map