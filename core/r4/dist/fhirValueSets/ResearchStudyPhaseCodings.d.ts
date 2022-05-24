import { CodingArgs } from '../fhir/Coding.js';
/**
 * Codes for the stage in the progression of a therapy from initial experimental use in humans in clinical trials to post-market evaluation.
 */
export declare type ResearchStudyPhaseCodingType = {
    /**
     * early-phase-1: Designation for optional exploratory trials conducted in accordance with the United States Food and Drug Administration's (FDA) 2006 Guidance on Exploratory Investigational New Drug (IND) Studies. Formerly called Phase 0.
     */
    EarlyPhase1: CodingArgs;
    /**
     * n-a: Trials without phases (for example, studies of devices or behavioral interventions).
     */
    NA: CodingArgs;
    /**
     * phase-1: Includes initial studies to determine the metabolism and pharmacologic actions of drugs in humans, the side effects associated with increasing doses, and to gain early evidence of effectiveness; may include healthy participants and/or patients.
     */
    Phase1: CodingArgs;
    /**
     * phase-1-phase-2: Trials that are a combination of phases 1 and 2.
     */
    Phase1Phase2: CodingArgs;
    /**
     * phase-2: Includes controlled clinical studies conducted to evaluate the effectiveness of the drug for a particular indication or indications in participants with the disease or condition under study and to determine the common short-term side effects and risks.
     */
    Phase2: CodingArgs;
    /**
     * phase-2-phase-3: Trials that are a combination of phases 2 and 3.
     */
    Phase2Phase3: CodingArgs;
    /**
     * phase-3: Includes trials conducted after preliminary evidence suggesting effectiveness of the drug has been obtained, and are intended to gather additional information to evaluate the overall benefit-risk relationship of the drug.
     */
    Phase3: CodingArgs;
    /**
     * phase-4: Studies of FDA-approved drugs to delineate additional information including the drug's risks, benefits, and optimal use.
     */
    Phase4: CodingArgs;
};
/**
 * Codes for the stage in the progression of a therapy from initial experimental use in humans in clinical trials to post-market evaluation.
 */
export declare const ResearchStudyPhaseCodings: ResearchStudyPhaseCodingType;
//# sourceMappingURL=ResearchStudyPhaseCodings.d.ts.map