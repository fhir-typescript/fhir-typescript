// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/research-study-status|4.3.0

import { CodingArgs } from '../fhir/Coding.js'

/**
 * Codes that convey the current status of the research study.
 */
export type ResearchStudyStatusCodingType = {
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
}

/**
 * Codes that convey the current status of the research study.
 */
export const ResearchStudyStatusCodings:ResearchStudyStatusCodingType = {
  /**
   * active: Study is opened for accrual.
   */
  Active: {
    display: "Active",
    code: "active",
    system: "http://hl7.org/fhir/research-study-status",
  },
  /**
   * administratively-completed: Study is completed prematurely and will not resume; patients are no longer examined nor treated.
   */
  AdministrativelyCompleted: {
    display: "Administratively Completed",
    code: "administratively-completed",
    system: "http://hl7.org/fhir/research-study-status",
  },
  /**
   * approved: Protocol is approved by the review board.
   */
  Approved: {
    display: "Approved",
    code: "approved",
    system: "http://hl7.org/fhir/research-study-status",
  },
  /**
   * closed-to-accrual: Study is closed for accrual; patients can be examined and treated.
   */
  ClosedToAccrual: {
    display: "Closed to Accrual",
    code: "closed-to-accrual",
    system: "http://hl7.org/fhir/research-study-status",
  },
  /**
   * closed-to-accrual-and-intervention: Study is closed to accrual and intervention, i.e. the study is closed to enrollment, all study subjects have completed treatment or intervention but are still being followed according to the primary objective of the study.
   */
  ClosedToAccrualAndIntervention: {
    display: "Closed to Accrual and Intervention",
    code: "closed-to-accrual-and-intervention",
    system: "http://hl7.org/fhir/research-study-status",
  },
  /**
   * completed: Study is closed to accrual and intervention, i.e. the study is closed to enrollment, all study subjects have completed treatment
   * or intervention but are still being followed according to the primary objective of the study.
   */
  Completed: {
    display: "Completed",
    code: "completed",
    system: "http://hl7.org/fhir/research-study-status",
  },
  /**
   * disapproved: Protocol was disapproved by the review board.
   */
  Disapproved: {
    display: "Disapproved",
    code: "disapproved",
    system: "http://hl7.org/fhir/research-study-status",
  },
  /**
   * in-review: Protocol is submitted to the review board for approval.
   */
  InReview: {
    display: "In Review",
    code: "in-review",
    system: "http://hl7.org/fhir/research-study-status",
  },
  /**
   * temporarily-closed-to-accrual: Study is temporarily closed for accrual; can be potentially resumed in the future; patients can be examined and treated.
   */
  TemporarilyClosedToAccrual: {
    display: "Temporarily Closed to Accrual",
    code: "temporarily-closed-to-accrual",
    system: "http://hl7.org/fhir/research-study-status",
  },
  /**
   * temporarily-closed-to-accrual-and-intervention: Study is temporarily closed for accrual and intervention and potentially can be resumed in the future.
   */
  TemporarilyClosedToAccrualAndIntervention: {
    display: "Temporarily Closed to Accrual and Intervention",
    code: "temporarily-closed-to-accrual-and-intervention",
    system: "http://hl7.org/fhir/research-study-status",
  },
  /**
   * withdrawn: Protocol was withdrawn by the lead organization.
   */
  Withdrawn: {
    display: "Withdrawn",
    code: "withdrawn",
    system: "http://hl7.org/fhir/research-study-status",
  },
} as const;
