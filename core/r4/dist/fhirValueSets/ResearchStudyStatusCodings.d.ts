import { Coding } from '../fhir/Coding.js';
/**
 * Codes that convey the current status of the research study.
 */
export declare const ResearchStudyStatusCodings: {
    /**
     * active: Study is opened for accrual.
     */
    readonly Active: Coding;
    /**
     * administratively-completed: Study is completed prematurely and will not resume; patients are no longer examined nor treated.
     */
    readonly AdministrativelyCompleted: Coding;
    /**
     * approved: Protocol is approved by the review board.
     */
    readonly Approved: Coding;
    /**
     * closed-to-accrual: Study is closed for accrual; patients can be examined and treated.
     */
    readonly ClosedToAccrual: Coding;
    /**
     * closed-to-accrual-and-intervention: Study is closed to accrual and intervention, i.e. the study is closed to enrollment, all study subjects have completed treatment or intervention but are still being followed according to the primary objective of the study.
     */
    readonly ClosedToAccrualAndIntervention: Coding;
    /**
     * completed: Study is closed to accrual and intervention, i.e. the study is closed to enrollment, all study subjects have completed treatment
     * or intervention but are still being followed according to the primary objective of the study.
     */
    readonly Completed: Coding;
    /**
     * disapproved: Protocol was disapproved by the review board.
     */
    readonly Disapproved: Coding;
    /**
     * in-review: Protocol is submitted to the review board for approval.
     */
    readonly InReview: Coding;
    /**
     * temporarily-closed-to-accrual: Study is temporarily closed for accrual; can be potentially resumed in the future; patients can be examined and treated.
     */
    readonly TemporarilyClosedToAccrual: Coding;
    /**
     * temporarily-closed-to-accrual-and-intervention: Study is temporarily closed for accrual and intervention and potentially can be resumed in the future.
     */
    readonly TemporarilyClosedToAccrualAndIntervention: Coding;
    /**
     * withdrawn: Protocol was withdrawn by the lead organization.
     */
    readonly Withdrawn: Coding;
};
/**
 * Codes that convey the current status of the research study.
 */
export declare type ResearchStudyStatusCodingType = typeof ResearchStudyStatusCodings;
//# sourceMappingURL=ResearchStudyStatusCodings.d.ts.map