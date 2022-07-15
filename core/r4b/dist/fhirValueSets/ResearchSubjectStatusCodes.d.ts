/**
 * Indicates the progression of a study subject through a study.
 */
export declare const ResearchSubjectStatusCodes: {
    /**
     * candidate: An identified person that can be considered for inclusion in a study.
     */
    readonly Candidate: "candidate";
    /**
     * eligible: A person that has met the eligibility criteria for inclusion in a study.
     */
    readonly Eligible: "eligible";
    /**
     * follow-up: A person is no longer receiving study intervention and/or being evaluated with tests and procedures according to the protocol, but they are being monitored on a protocol-prescribed schedule.
     */
    readonly FollowUp: "follow-up";
    /**
     * ineligible: A person who did not meet one or more criteria required for participation in a study is considered to have failed screening or
     * is ineligible for the study.
     */
    readonly Ineligible: "ineligible";
    /**
     * not-registered: A person for whom registration was not completed.
     */
    readonly NotRegistered: "not-registered";
    /**
     * off-study: A person that has ended their participation on a study either because their treatment/observation is complete or through not
     * responding, withdrawal, non-compliance and/or adverse event.
     */
    readonly OffStudy: "off-study";
    /**
     * on-study: A person that is enrolled or registered on a study.
     */
    readonly OnStudy: "on-study";
    /**
     * on-study-intervention: The person is receiving the treatment or participating in an activity (e.g. yoga, diet, etc.) that the study is evaluating.
     */
    readonly OnStudyIntervention: "on-study-intervention";
    /**
     * on-study-observation: The subject is being evaluated via tests and assessments according to the study calendar, but is not receiving any intervention. Note that this state is study-dependent and might not exist in all studies.  A synonym for this is "short-term follow-up".
     */
    readonly OnStudyObservation: "on-study-observation";
    /**
     * pending-on-study: A person is pre-registered for a study.
     */
    readonly PendingOnStudy: "pending-on-study";
    /**
     * potential-candidate: A person that is potentially eligible for participation in the study.
     */
    readonly PotentialCandidate: "potential-candidate";
    /**
     * screening: A person who is being evaluated for eligibility for a study.
     */
    readonly Screening: "screening";
    /**
     * withdrawn: The person has withdrawn their participation in the study before registration.
     */
    readonly Withdrawn: "withdrawn";
};
/**
 * Indicates the progression of a study subject through a study.
 */
export declare type ResearchSubjectStatusCodeType = typeof ResearchSubjectStatusCodes[keyof typeof ResearchSubjectStatusCodes];
//# sourceMappingURL=ResearchSubjectStatusCodes.d.ts.map