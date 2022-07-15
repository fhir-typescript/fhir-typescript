import { CodingArgs } from '../fhir/Coding.js';
/**
 * Codes that convey the current status of the research study.
 */
export declare type ResearchStudyStatusCodingType = {
    /**
     * active: Study is opened for accrual.
     */
    Active: CodingArgs;
    /**
     * administratively-completed: Study is completed prematurely and will not resume; patients are no longer examined nor treated.
     */
    AdministrativelyCompleted: CodingArgs;
    /**
     * approved: Protocol is approved by the review board.
     */
    Approved: CodingArgs;
    /**
     * closed-to-accrual: Study is closed for accrual; patients can be examined and treated.
     */
    ClosedToAccrual: CodingArgs;
    /**
     * closed-to-accrual-and-intervention: Study is closed to accrual and intervention, i.e. the study is closed to enrollment, all study subjects have completed treatment or intervention but are still being followed according to the primary objective of the study.
     */
    ClosedToAccrualAndIntervention: CodingArgs;
    /**
     * completed: Study is closed to accrual and intervention, i.e. the study is closed to enrollment, all study subjects have completed treatment
     * or intervention but are still being followed according to the primary objective of the study.
     */
    Completed: CodingArgs;
    /**
     * disapproved: Protocol was disapproved by the review board.
     */
    Disapproved: CodingArgs;
    /**
     * in-review: Protocol is submitted to the review board for approval.
     */
    InReview: CodingArgs;
    /**
     * temporarily-closed-to-accrual: Study is temporarily closed for accrual; can be potentially resumed in the future; patients can be examined and treated.
     */
    TemporarilyClosedToAccrual: CodingArgs;
    /**
     * temporarily-closed-to-accrual-and-intervention: Study is temporarily closed for accrual and intervention and potentially can be resumed in the future.
     */
    TemporarilyClosedToAccrualAndIntervention: CodingArgs;
    /**
     * withdrawn: Protocol was withdrawn by the lead organization.
     */
    Withdrawn: CodingArgs;
};
/**
 * Codes that convey the current status of the research study.
 */
export declare const ResearchStudyStatusCodings: ResearchStudyStatusCodingType;
//# sourceMappingURL=ResearchStudyStatusCodings.d.ts.map