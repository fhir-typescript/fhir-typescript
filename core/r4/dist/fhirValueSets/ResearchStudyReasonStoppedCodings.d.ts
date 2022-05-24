import { CodingArgs } from '../fhir/Coding.js';
/**
 * Codes for why the study ended prematurely.
 */
export declare type ResearchStudyReasonStoppedCodingType = {
    /**
     * accrual-goal-met: The study prematurely ended because the accrual goal was met.
     */
    AccrualGoalMet: CodingArgs;
    /**
     * closed-due-to-lack-of-study-progress: The study prematurely ended due to lack of study progress.
     */
    ClosedDueToLackOfStudyProgress: CodingArgs;
    /**
     * closed-due-to-toxicity: The study prematurely ended due to toxicity.
     */
    ClosedDueToToxicity: CodingArgs;
    /**
     * temporarily-closed-per-study-design: The study prematurely ended temporarily per study design.
     */
    TemporarilyClosedPerStudyDesign: CodingArgs;
};
/**
 * Codes for why the study ended prematurely.
 */
export declare const ResearchStudyReasonStoppedCodings: ResearchStudyReasonStoppedCodingType;
//# sourceMappingURL=ResearchStudyReasonStoppedCodings.d.ts.map