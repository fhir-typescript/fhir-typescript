import { CodingArgs } from '../fhir/Coding.js';
/**
 * Indicates the type of care team.
 */
export declare type CareTeamCategoryCodingType = {
    /**
     * clinical-research: This type of team is responsible for establishing, conducting, coordinating and monitoring the outcomes of clinical trials. The team focuses on research, clinical care and education.
     */
    ClinicalResearch: CodingArgs;
    /**
     * condition: This type of team focuses on one specific condition. The condition is determined by the context of use.  For example, a disease management team focused on one condition (e.g. diabetes).
     */
    Condition: CodingArgs;
    /**
     * encounter: This type of team focuses on one specific encounter. The encounter is determined by the context of use.  For example, during an inpatient encounter, the nutrition support care team
     */
    Encounter: CodingArgs;
    /**
     * episode: This type of team focuses on one specific episode of care with a defined time period or self-limiting process (e.g. 10 visits). The episode of care is determined by the context of use.  For example, a maternity care team over 9 months.
     */
    Episode: CodingArgs;
    /**
     * event: This type of team focuses on one specific type of incident, which is non-patient specific. The incident is determined by the context of use.  For example, code team (code red, code blue, medical emergency treatment) or the PICC line team.
     */
    Event: CodingArgs;
    /**
     * longitudinal: This type of team focuses on overall care coordination managing one or more conditions across the continuum of care ensuring there are smooth transitions of care. The members of the team are determined or selected by an individual or organization. When determined by an organization, the team may be assigned or based on the person's enrollment in a particular program. For example, disease management team or patient centered medical home team.
     */
    LongitudinalCareCoordination: CodingArgs;
};
/**
 * Indicates the type of care team.
 */
export declare const CareTeamCategoryCodings: CareTeamCategoryCodingType;
//# sourceMappingURL=CareTeamCategoryCodings.d.ts.map