// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/research-study-reason-stopped|4.3.0

import { CodingArgs } from '../fhir/Coding.js'

/**
 * Codes for why the study ended prematurely.
 */
export type ResearchStudyReasonStoppedCodingType = {
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
}

/**
 * Codes for why the study ended prematurely.
 */
export const ResearchStudyReasonStoppedCodings:ResearchStudyReasonStoppedCodingType = {
  /**
   * accrual-goal-met: The study prematurely ended because the accrual goal was met.
   */
  AccrualGoalMet: {
    display: "Accrual Goal Met",
    code: "accrual-goal-met",
    system: "http://terminology.hl7.org/CodeSystem/research-study-reason-stopped",
  },
  /**
   * closed-due-to-lack-of-study-progress: The study prematurely ended due to lack of study progress.
   */
  ClosedDueToLackOfStudyProgress: {
    display: "Closed due to lack of study progress",
    code: "closed-due-to-lack-of-study-progress",
    system: "http://terminology.hl7.org/CodeSystem/research-study-reason-stopped",
  },
  /**
   * closed-due-to-toxicity: The study prematurely ended due to toxicity.
   */
  ClosedDueToToxicity: {
    display: "Closed due to toxicity",
    code: "closed-due-to-toxicity",
    system: "http://terminology.hl7.org/CodeSystem/research-study-reason-stopped",
  },
  /**
   * temporarily-closed-per-study-design: The study prematurely ended temporarily per study design.
   */
  TemporarilyClosedPerStudyDesign: {
    display: "Temporarily closed per study design",
    code: "temporarily-closed-per-study-design",
    system: "http://terminology.hl7.org/CodeSystem/research-study-reason-stopped",
  },
} as const;
