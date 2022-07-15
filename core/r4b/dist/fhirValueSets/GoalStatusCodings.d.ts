import { CodingArgs } from '../fhir/Coding.js';
/**
 * Codes that reflect the current state of a goal and whether the goal is still being targeted.
 */
export declare type GoalStatusCodingType = {
    /**
     * accepted: A proposed goal was accepted or acknowledged.
     */
    Accepted: CodingArgs;
    /**
     * active: The goal is being sought actively.
     */
    Active: CodingArgs;
    /**
     * cancelled: The goal has been abandoned.
     */
    Cancelled: CodingArgs;
    /**
     * completed: The goal is no longer being sought.
     */
    Completed: CodingArgs;
    /**
     * entered-in-error: The goal was entered in error and voided.
     */
    EnteredInError: CodingArgs;
    /**
     * on-hold: The goal remains a long term objective but is no longer being actively pursued for a temporary period of time.
     */
    OnHold: CodingArgs;
    /**
     * planned: A goal is planned for this patient.
     */
    Planned: CodingArgs;
    /**
     * proposed: A goal is proposed for this patient.
     */
    Proposed: CodingArgs;
    /**
     * rejected: A proposed goal was rejected.
     */
    Rejected: CodingArgs;
};
/**
 * Codes that reflect the current state of a goal and whether the goal is still being targeted.
 */
export declare const GoalStatusCodings: GoalStatusCodingType;
//# sourceMappingURL=GoalStatusCodings.d.ts.map