import { CodingArgs } from '../fhir/Coding.js';
/**
 * Indicates the progression of a study subject through a study.
 */
export declare type ResearchSubjectStatusCodingType = {
    /**
     * candidate: An identified person that can be considered for inclusion in a study.
     */
    Candidate: CodingArgs;
    /**
     * eligible: A person that has met the eligibility criteria for inclusion in a study.
     */
    Eligible: CodingArgs;
    /**
     * follow-up: A person is no longer receiving study intervention and/or being evaluated with tests and procedures according to the protocol, but they are being monitored on a protocol-prescribed schedule.
     */
    FollowUp: CodingArgs;
    /**
     * ineligible: A person who did not meet one or more criteria required for participation in a study is considered to have failed screening or
     * is ineligible for the study.
     */
    Ineligible: CodingArgs;
    /**
     * not-registered: A person for whom registration was not completed.
     */
    NotRegistered: CodingArgs;
    /**
     * off-study: A person that has ended their participation on a study either because their treatment/observation is complete or through not
     * responding, withdrawal, non-compliance and/or adverse event.
     */
    OffStudy: CodingArgs;
    /**
     * on-study: A person that is enrolled or registered on a study.
     */
    OnStudy: CodingArgs;
    /**
     * on-study-intervention: The person is receiving the treatment or participating in an activity (e.g. yoga, diet, etc.) that the study is evaluating.
     */
    OnStudyIntervention: CodingArgs;
    /**
     * on-study-observation: The subject is being evaluated via tests and assessments according to the study calendar, but is not receiving any intervention. Note that this state is study-dependent and might not exist in all studies.  A synonym for this is "short-term follow-up".
     */
    OnStudyObservation: CodingArgs;
    /**
     * pending-on-study: A person is pre-registered for a study.
     */
    PendingOnStudy: CodingArgs;
    /**
     * potential-candidate: A person that is potentially eligible for participation in the study.
     */
    PotentialCandidate: CodingArgs;
    /**
     * screening: A person who is being evaluated for eligibility for a study.
     */
    Screening: CodingArgs;
    /**
     * withdrawn: The person has withdrawn their participation in the study before registration.
     */
    Withdrawn: CodingArgs;
};
/**
 * Indicates the progression of a study subject through a study.
 */
export declare const ResearchSubjectStatusCodings: ResearchSubjectStatusCodingType;
//# sourceMappingURL=ResearchSubjectStatusCodings.d.ts.map