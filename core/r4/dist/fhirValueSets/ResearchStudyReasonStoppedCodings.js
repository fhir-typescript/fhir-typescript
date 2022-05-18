/*! @fhir-typescript/r4-core v0.0.11-beta.2 2022-05-18 */
'use strict';
import { Coding } from '../fhir/Coding.js';

// <auto-generated/>
/**
 * Codes for why the study ended prematurely.
 */
var ResearchStudyReasonStoppedCodings = {
    /**
     * accrual-goal-met: The study prematurely ended because the accrual goal was met.
     */
    AccrualGoalMet: new Coding({
        display: "Accrual Goal Met",
        code: "accrual-goal-met",
        system: "http://terminology.hl7.org/CodeSystem/research-study-reason-stopped",
    }),
    /**
     * closed-due-to-lack-of-study-progress: The study prematurely ended due to lack of study progress.
     */
    ClosedDueToLackOfStudyProgress: new Coding({
        display: "Closed due to lack of study progress",
        code: "closed-due-to-lack-of-study-progress",
        system: "http://terminology.hl7.org/CodeSystem/research-study-reason-stopped",
    }),
    /**
     * closed-due-to-toxicity: The study prematurely ended due to toxicity.
     */
    ClosedDueToToxicity: new Coding({
        display: "Closed due to toxicity",
        code: "closed-due-to-toxicity",
        system: "http://terminology.hl7.org/CodeSystem/research-study-reason-stopped",
    }),
    /**
     * temporarily-closed-per-study-design: The study prematurely ended temporarily per study design.
     */
    TemporarilyClosedPerStudyDesign: new Coding({
        display: "Temporarily closed per study design",
        code: "temporarily-closed-per-study-design",
        system: "http://terminology.hl7.org/CodeSystem/research-study-reason-stopped",
    }),
};

export { ResearchStudyReasonStoppedCodings };
//# sourceMappingURL=ResearchStudyReasonStoppedCodings.js.map