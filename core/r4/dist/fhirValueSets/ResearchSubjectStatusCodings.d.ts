import { Coding } from '../fhir/Coding.js';
/**
 * Indicates the progression of a study subject through a study.
 */
export declare const ResearchSubjectStatusCodings: {
    /**
     * candidate: An identified person that can be considered for inclusion in a study.
     */
    readonly Candidate: Coding;
    /**
     * eligible: A person that has met the eligibility criteria for inclusion in a study.
     */
    readonly Eligible: Coding;
    /**
     * follow-up: A person is no longer receiving study intervention and/or being evaluated with tests and procedures according to the protocol, but they are being monitored on a protocol-prescribed schedule.
     */
    readonly FollowUp: Coding;
    /**
     * ineligible: A person who did not meet one or more criteria required for participation in a study is considered to have failed screening or
     * is ineligible for the study.
     */
    readonly Ineligible: Coding;
    /**
     * not-registered: A person for whom registration was not completed.
     */
    readonly NotRegistered: Coding;
    /**
     * off-study: A person that has ended their participation on a study either because their treatment/observation is complete or through not
     * responding, withdrawal, non-compliance and/or adverse event.
     */
    readonly OffStudy: Coding;
    /**
     * on-study: A person that is enrolled or registered on a study.
     */
    readonly OnStudy: Coding;
    /**
     * on-study-intervention: The person is receiving the treatment or participating in an activity (e.g. yoga, diet, etc.) that the study is evaluating.
     */
    readonly OnStudyIntervention: Coding;
    /**
     * on-study-observation: The subject is being evaluated via tests and assessments according to the study calendar, but is not receiving any intervention. Note that this state is study-dependent and might not exist in all studies.  A synonym for this is "short-term follow-up".
     */
    readonly OnStudyObservation: Coding;
    /**
     * pending-on-study: A person is pre-registered for a study.
     */
    readonly PendingOnStudy: Coding;
    /**
     * potential-candidate: A person that is potentially eligible for participation in the study.
     */
    readonly PotentialCandidate: Coding;
    /**
     * screening: A person who is being evaluated for eligibility for a study.
     */
    readonly Screening: Coding;
    /**
     * withdrawn: The person has withdrawn their participation in the study before registration.
     */
    readonly Withdrawn: Coding;
};
/**
 * Indicates the progression of a study subject through a study.
 */
export declare type ResearchSubjectStatusCodingType = typeof ResearchSubjectStatusCodings;
//# sourceMappingURL=ResearchSubjectStatusCodings.d.ts.map