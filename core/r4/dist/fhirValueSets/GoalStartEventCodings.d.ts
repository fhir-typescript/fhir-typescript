import { Coding } from '../fhir/Coding.js';
/**
 * Identifies types of events that might trigger the start of a goal.
 */
export declare const GoalStartEventCodings: {
    /**
     * Code: 308283009
     */
    readonly DischargeFromHospital: Coding;
    /**
     * Code: 32485007
     */
    readonly AdmissionToHospital: Coding;
    /**
     * Code: 386216000
     */
    readonly Childbirth: Coding;
    /**
     * Code: 442137000
     */
    readonly CompletionTimeOfProcedure: Coding;
};
/**
 * Identifies types of events that might trigger the start of a goal.
 */
export declare type GoalStartEventCodingType = typeof GoalStartEventCodings;
//# sourceMappingURL=GoalStartEventCodings.d.ts.map