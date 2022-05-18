/**
 * Codes that convey the current status of the research study.
 */
export declare const ResearchStudyStatusCodes: {
    /**
     * active: Study is opened for accrual.
     */
    readonly Active: "active";
    /**
     * administratively-completed: Study is completed prematurely and will not resume; patients are no longer examined nor treated.
     */
    readonly AdministrativelyCompleted: "administratively-completed";
    /**
     * approved: Protocol is approved by the review board.
     */
    readonly Approved: "approved";
    /**
     * closed-to-accrual: Study is closed for accrual; patients can be examined and treated.
     */
    readonly ClosedToAccrual: "closed-to-accrual";
    /**
     * closed-to-accrual-and-intervention: Study is closed to accrual and intervention, i.e. the study is closed to enrollment, all study subjects have completed treatment or intervention but are still being followed according to the primary objective of the study.
     */
    readonly ClosedToAccrualAndIntervention: "closed-to-accrual-and-intervention";
    /**
     * completed: Study is closed to accrual and intervention, i.e. the study is closed to enrollment, all study subjects have completed treatment
     * or intervention but are still being followed according to the primary objective of the study.
     */
    readonly Completed: "completed";
    /**
     * disapproved: Protocol was disapproved by the review board.
     */
    readonly Disapproved: "disapproved";
    /**
     * in-review: Protocol is submitted to the review board for approval.
     */
    readonly InReview: "in-review";
    /**
     * temporarily-closed-to-accrual: Study is temporarily closed for accrual; can be potentially resumed in the future; patients can be examined and treated.
     */
    readonly TemporarilyClosedToAccrual: "temporarily-closed-to-accrual";
    /**
     * temporarily-closed-to-accrual-and-intervention: Study is temporarily closed for accrual and intervention and potentially can be resumed in the future.
     */
    readonly TemporarilyClosedToAccrualAndIntervention: "temporarily-closed-to-accrual-and-intervention";
    /**
     * withdrawn: Protocol was withdrawn by the lead organization.
     */
    readonly Withdrawn: "withdrawn";
};
/**
 * Codes that convey the current status of the research study.
 */
export declare type ResearchStudyStatusCodeType = typeof ResearchStudyStatusCodes[keyof typeof ResearchStudyStatusCodes];
//# sourceMappingURL=ResearchStudyStatusCodes.d.ts.map