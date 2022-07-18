// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/detectedissue-mitigation-action|3.0.2

import { CodingArgs } from '../fhir/Coding.js'

/**
 * Kinds of mitigating actions and observations that can be associated with a detected issue or contraindication, such as 'added concurrent therapy', 'prior therapy documented', etc.
 */
export type DetectedissueMitigationActionCodingType = {
  /**
   * _ActAdministrativeDetectedIssueManagementCode: Codes dealing with the management of Detected Issue observations for the administrative and patient administrative acts domains.
   */
  ActAdministrativeDetectedIssueManagementCode: CodingArgs;
  /**
   * _ActDetectedIssueManagementCode: Codes dealing with the management of Detected Issue observations
   */
  ActDetectedIssueManagementCode: CodingArgs;
  /**
   * _AuthorizationIssueManagementCode: Authorization Issue Management Code
   */
  AuthorizationIssueManagementCode: CodingArgs;
  /**
   * 1: Confirmed drug therapy appropriate
   */
  TherapyAppropriate: CodingArgs;
  /**
   * 10: Provided education or training to the patient on appropriate therapy use
   */
  ProvidedPatientEducation: CodingArgs;
  /**
   * 11: Instituted an additional therapy to mitigate potential negative effects
   */
  AddedConcurrentTherapy: CodingArgs;
  /**
   * 12: Suspended existing therapy that triggered interaction for the duration of this therapy
   */
  TemporarilySuspendedConcurrentTherapy: CodingArgs;
  /**
   * 13: Aborted existing therapy that triggered interaction.
   */
  StoppedConcurrentTherapy: CodingArgs;
  /**
   * 14: Confirmed supply action appropriate
   */
  SupplyAppropriate: CodingArgs;
  /**
   * 15: Patient's existing supply was lost/wasted
   */
  Replacement: CodingArgs;
  /**
   * 16: Supply date is due to patient vacation
   */
  VacationSupply: CodingArgs;
  /**
   * 17: Supply date is intended to carry patient over weekend
   */
  WeekendSupply: CodingArgs;
  /**
   * 18: Supply is intended for use during a leave of absence from an institution.
   */
  LeaveOfAbsence: CodingArgs;
  /**
   * 19: Consulted other supplier/pharmacy, therapy confirmed
   */
  ConsultedSupplier: CodingArgs;
  /**
   * 2: Assessed patient, therapy is appropriate
   */
  AssessedPatient: CodingArgs;
  /**
   * 20: Description: Supply is different than expected as an additional quantity has been supplied in a separate dispense.
   */
  AdditionalQuantityOnSeparateDispense: CodingArgs;
  /**
   * 21: Description: Indicates that the permissions have been externally verified and the request should be processed.
   */
  AuthorizationConfirmed: CodingArgs;
  /**
   * 22: Description: The patient has the appropriate indication or diagnosis for the action to be taken.
   */
  AppropriateIndicationOrDiagnosis: CodingArgs;
  /**
   * 23: Description: It has been confirmed that the appropriate pre-requisite therapy has been tried.
   */
  PriorTherapyDocumented: CodingArgs;
  /**
   * 3: Patient gave adequate explanation
   */
  PatientExplanation: CodingArgs;
  /**
   * 4: Consulted other supply source, therapy still appropriate
   */
  ConsultedOtherSource: CodingArgs;
  /**
   * 5: Consulted prescriber, therapy confirmed
   */
  ConsultedPrescriber: CodingArgs;
  /**
   * 6: Consulted prescriber and recommended change, prescriber declined
   */
  PrescriberDeclinedChange: CodingArgs;
  /**
   * 7: Concurrent therapy triggering alert is no longer on-going or planned
   */
  InteractingTherapyNoLongerActivePlanned: CodingArgs;
  /**
   * 8: Order is performed as issued, but other action taken to mitigate potential adverse effects
   */
  OtherActionTaken: CodingArgs;
  /**
   * 9: Arranged to monitor patient for adverse effects
   */
  InstitutedOngoingMonitoringProgram: CodingArgs;
  /**
   * EMAUTH: Used to temporarily override normal authorization rules to gain access to data in a case of emergency. Use of this override code will typically be monitored, and a procedure to verify its proper use may be triggered when used.
   */
  EmergencyAuthorizationOverride: CodingArgs;
}

/**
 * Kinds of mitigating actions and observations that can be associated with a detected issue or contraindication, such as 'added concurrent therapy', 'prior therapy documented', etc.
 */
export const DetectedissueMitigationActionCodings:DetectedissueMitigationActionCodingType = {
  /**
   * _ActAdministrativeDetectedIssueManagementCode: Codes dealing with the management of Detected Issue observations for the administrative and patient administrative acts domains.
   */
  ActAdministrativeDetectedIssueManagementCode: {
    display: "ActAdministrativeDetectedIssueManagementCode",
    code: "_ActAdministrativeDetectedIssueManagementCode",
    system: "http://hl7.org/fhir/v3/ActCode",
  },
  /**
   * _ActDetectedIssueManagementCode: Codes dealing with the management of Detected Issue observations
   */
  ActDetectedIssueManagementCode: {
    display: "ActDetectedIssueManagementCode",
    code: "_ActDetectedIssueManagementCode",
    system: "http://hl7.org/fhir/v3/ActCode",
  },
  /**
   * _AuthorizationIssueManagementCode: Authorization Issue Management Code
   */
  AuthorizationIssueManagementCode: {
    display: "Authorization Issue Management Code",
    code: "_AuthorizationIssueManagementCode",
    system: "http://hl7.org/fhir/v3/ActCode",
  },
  /**
   * 1: Confirmed drug therapy appropriate
   */
  TherapyAppropriate: {
    display: "Therapy Appropriate",
    code: "1",
    system: "http://hl7.org/fhir/v3/ActCode",
  },
  /**
   * 10: Provided education or training to the patient on appropriate therapy use
   */
  ProvidedPatientEducation: {
    display: "Provided Patient Education",
    code: "10",
    system: "http://hl7.org/fhir/v3/ActCode",
  },
  /**
   * 11: Instituted an additional therapy to mitigate potential negative effects
   */
  AddedConcurrentTherapy: {
    display: "Added Concurrent Therapy",
    code: "11",
    system: "http://hl7.org/fhir/v3/ActCode",
  },
  /**
   * 12: Suspended existing therapy that triggered interaction for the duration of this therapy
   */
  TemporarilySuspendedConcurrentTherapy: {
    display: "Temporarily Suspended Concurrent Therapy",
    code: "12",
    system: "http://hl7.org/fhir/v3/ActCode",
  },
  /**
   * 13: Aborted existing therapy that triggered interaction.
   */
  StoppedConcurrentTherapy: {
    display: "Stopped Concurrent Therapy",
    code: "13",
    system: "http://hl7.org/fhir/v3/ActCode",
  },
  /**
   * 14: Confirmed supply action appropriate
   */
  SupplyAppropriate: {
    display: "Supply Appropriate",
    code: "14",
    system: "http://hl7.org/fhir/v3/ActCode",
  },
  /**
   * 15: Patient's existing supply was lost/wasted
   */
  Replacement: {
    display: "Replacement",
    code: "15",
    system: "http://hl7.org/fhir/v3/ActCode",
  },
  /**
   * 16: Supply date is due to patient vacation
   */
  VacationSupply: {
    display: "Vacation Supply",
    code: "16",
    system: "http://hl7.org/fhir/v3/ActCode",
  },
  /**
   * 17: Supply date is intended to carry patient over weekend
   */
  WeekendSupply: {
    display: "Weekend Supply",
    code: "17",
    system: "http://hl7.org/fhir/v3/ActCode",
  },
  /**
   * 18: Supply is intended for use during a leave of absence from an institution.
   */
  LeaveOfAbsence: {
    display: "Leave of Absence",
    code: "18",
    system: "http://hl7.org/fhir/v3/ActCode",
  },
  /**
   * 19: Consulted other supplier/pharmacy, therapy confirmed
   */
  ConsultedSupplier: {
    display: "Consulted Supplier",
    code: "19",
    system: "http://hl7.org/fhir/v3/ActCode",
  },
  /**
   * 2: Assessed patient, therapy is appropriate
   */
  AssessedPatient: {
    display: "Assessed Patient",
    code: "2",
    system: "http://hl7.org/fhir/v3/ActCode",
  },
  /**
   * 20: Description: Supply is different than expected as an additional quantity has been supplied in a separate dispense.
   */
  AdditionalQuantityOnSeparateDispense: {
    display: "additional quantity on separate dispense",
    code: "20",
    system: "http://hl7.org/fhir/v3/ActCode",
  },
  /**
   * 21: Description: Indicates that the permissions have been externally verified and the request should be processed.
   */
  AuthorizationConfirmed: {
    display: "authorization confirmed",
    code: "21",
    system: "http://hl7.org/fhir/v3/ActCode",
  },
  /**
   * 22: Description: The patient has the appropriate indication or diagnosis for the action to be taken.
   */
  AppropriateIndicationOrDiagnosis: {
    display: "appropriate indication or diagnosis",
    code: "22",
    system: "http://hl7.org/fhir/v3/ActCode",
  },
  /**
   * 23: Description: It has been confirmed that the appropriate pre-requisite therapy has been tried.
   */
  PriorTherapyDocumented: {
    display: "prior therapy documented",
    code: "23",
    system: "http://hl7.org/fhir/v3/ActCode",
  },
  /**
   * 3: Patient gave adequate explanation
   */
  PatientExplanation: {
    display: "Patient Explanation",
    code: "3",
    system: "http://hl7.org/fhir/v3/ActCode",
  },
  /**
   * 4: Consulted other supply source, therapy still appropriate
   */
  ConsultedOtherSource: {
    display: "Consulted Other Source",
    code: "4",
    system: "http://hl7.org/fhir/v3/ActCode",
  },
  /**
   * 5: Consulted prescriber, therapy confirmed
   */
  ConsultedPrescriber: {
    display: "Consulted Prescriber",
    code: "5",
    system: "http://hl7.org/fhir/v3/ActCode",
  },
  /**
   * 6: Consulted prescriber and recommended change, prescriber declined
   */
  PrescriberDeclinedChange: {
    display: "Prescriber Declined Change",
    code: "6",
    system: "http://hl7.org/fhir/v3/ActCode",
  },
  /**
   * 7: Concurrent therapy triggering alert is no longer on-going or planned
   */
  InteractingTherapyNoLongerActivePlanned: {
    display: "Interacting Therapy No Longer Active/Planned",
    code: "7",
    system: "http://hl7.org/fhir/v3/ActCode",
  },
  /**
   * 8: Order is performed as issued, but other action taken to mitigate potential adverse effects
   */
  OtherActionTaken: {
    display: "Other Action Taken",
    code: "8",
    system: "http://hl7.org/fhir/v3/ActCode",
  },
  /**
   * 9: Arranged to monitor patient for adverse effects
   */
  InstitutedOngoingMonitoringProgram: {
    display: "Instituted Ongoing Monitoring Program",
    code: "9",
    system: "http://hl7.org/fhir/v3/ActCode",
  },
  /**
   * EMAUTH: Used to temporarily override normal authorization rules to gain access to data in a case of emergency. Use of this override code will typically be monitored, and a procedure to verify its proper use may be triggered when used.
   */
  EmergencyAuthorizationOverride: {
    display: "emergency authorization override",
    code: "EMAUTH",
    system: "http://hl7.org/fhir/v3/ActCode",
  },
} as const;