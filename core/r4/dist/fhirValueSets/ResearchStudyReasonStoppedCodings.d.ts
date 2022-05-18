import { Coding } from '../fhir/Coding.js';
/**
 * Codes for why the study ended prematurely.
 */
export declare const ResearchStudyReasonStoppedCodings: {
    /**
     * accrual-goal-met: The study prematurely ended because the accrual goal was met.
     */
    readonly AccrualGoalMet: Coding;
    /**
     * closed-due-to-lack-of-study-progress: The study prematurely ended due to lack of study progress.
     */
    readonly ClosedDueToLackOfStudyProgress: Coding;
    /**
     * closed-due-to-toxicity: The study prematurely ended due to toxicity.
     */
    readonly ClosedDueToToxicity: Coding;
    /**
     * temporarily-closed-per-study-design: The study prematurely ended temporarily per study design.
     */
    readonly TemporarilyClosedPerStudyDesign: Coding;
};
/**
 * Codes for why the study ended prematurely.
 */
export declare type ResearchStudyReasonStoppedCodingType = typeof ResearchStudyReasonStoppedCodings;
//# sourceMappingURL=ResearchStudyReasonStoppedCodings.d.ts.map