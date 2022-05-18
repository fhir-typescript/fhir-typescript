import { Coding } from '../fhir/Coding.js';
/**
 * Codes for the stage in the progression of a therapy from initial experimental use in humans in clinical trials to post-market evaluation.
 */
export declare const ResearchStudyPhaseCodings: {
    /**
     * early-phase-1: Designation for optional exploratory trials conducted in accordance with the United States Food and Drug Administration's (FDA) 2006 Guidance on Exploratory Investigational New Drug (IND) Studies. Formerly called Phase 0.
     */
    readonly EarlyPhase1: Coding;
    /**
     * n-a: Trials without phases (for example, studies of devices or behavioral interventions).
     */
    readonly NA: Coding;
    /**
     * phase-1: Includes initial studies to determine the metabolism and pharmacologic actions of drugs in humans, the side effects associated with increasing doses, and to gain early evidence of effectiveness; may include healthy participants and/or patients.
     */
    readonly Phase1: Coding;
    /**
     * phase-1-phase-2: Trials that are a combination of phases 1 and 2.
     */
    readonly Phase1Phase2: Coding;
    /**
     * phase-2: Includes controlled clinical studies conducted to evaluate the effectiveness of the drug for a particular indication or indications in participants with the disease or condition under study and to determine the common short-term side effects and risks.
     */
    readonly Phase2: Coding;
    /**
     * phase-2-phase-3: Trials that are a combination of phases 2 and 3.
     */
    readonly Phase2Phase3: Coding;
    /**
     * phase-3: Includes trials conducted after preliminary evidence suggesting effectiveness of the drug has been obtained, and are intended to gather additional information to evaluate the overall benefit-risk relationship of the drug.
     */
    readonly Phase3: Coding;
    /**
     * phase-4: Studies of FDA-approved drugs to delineate additional information including the drug's risks, benefits, and optimal use.
     */
    readonly Phase4: Coding;
};
/**
 * Codes for the stage in the progression of a therapy from initial experimental use in humans in clinical trials to post-market evaluation.
 */
export declare type ResearchStudyPhaseCodingType = typeof ResearchStudyPhaseCodings;
//# sourceMappingURL=ResearchStudyPhaseCodings.d.ts.map