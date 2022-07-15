import { CodingArgs } from '../fhir/Coding.js';
/**
 * Identifies types of events that might trigger the start of a goal.
 */
export declare type GoalStartEventCodingType = {
    /**
     * Code: 308283009
     */
    DischargeFromHospital: CodingArgs;
    /**
     * Code: 32485007
     */
    AdmissionToHospital: CodingArgs;
    /**
     * Code: 386216000
     */
    Childbirth: CodingArgs;
    /**
     * Code: 442137000
     */
    CompletionTimeOfProcedure: CodingArgs;
};
/**
 * Identifies types of events that might trigger the start of a goal.
 */
export declare const GoalStartEventCodings: GoalStartEventCodingType;
//# sourceMappingURL=GoalStartEventCodings.d.ts.map