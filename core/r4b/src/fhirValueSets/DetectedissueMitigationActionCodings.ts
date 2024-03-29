// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/detectedissue-mitigation-action|4.3.0

import { CodingArgs } from '../fhir/Coding.js'

/**
 * Kinds of mitigating actions and observations that can be associated with a detected issue or contraindication, such as 'added concurrent therapy', 'prior therapy documented', etc.
 */
export type DetectedissueMitigationActionCodingType = {
  /**
   * Code: _ActAdministrativeDetectedIssueManagementCode
   */
  ActAdministrativeDetectedIssueManagementCode: CodingArgs;
  /**
   * Code: _ActDetectedIssueManagementCode
   */
  ActDetectedIssueManagementCode: CodingArgs;
  /**
   * Code: _ActFinancialDetectedIssueManagementCode
   */
  ActFinancialDetectedIssueManagementCode: CodingArgs;
  /**
   * Code: _AuthorizationIssueManagementCode
   */
  AuthorizationIssueManagementCode: CodingArgs;
  /**
   * Code: 1
   */
  TherapyAppropriate: CodingArgs;
  /**
   * Code: 10
   */
  ProvidedPatientEducation: CodingArgs;
  /**
   * Code: 11
   */
  AddedConcurrentTherapy: CodingArgs;
  /**
   * Code: 12
   */
  TemporarilySuspendedConcurrentTherapy: CodingArgs;
  /**
   * Code: 13
   */
  StoppedConcurrentTherapy: CodingArgs;
  /**
   * Code: 14
   */
  SupplyAppropriate: CodingArgs;
  /**
   * Code: 15
   */
  Replacement: CodingArgs;
  /**
   * Code: 16
   */
  VacationSupply: CodingArgs;
  /**
   * Code: 17
   */
  WeekendSupply: CodingArgs;
  /**
   * Code: 18
   */
  LeaveOfAbsence: CodingArgs;
  /**
   * Code: 19
   */
  ConsultedSupplier: CodingArgs;
  /**
   * Code: 2
   */
  AssessedPatient: CodingArgs;
  /**
   * Code: 20
   */
  AdditionalQuantityOnSeparateDispense: CodingArgs;
  /**
   * Code: 21
   */
  AuthorizationConfirmed: CodingArgs;
  /**
   * Code: 22
   */
  AppropriateIndicationOrDiagnosis: CodingArgs;
  /**
   * Code: 23
   */
  PriorTherapyDocumented: CodingArgs;
  /**
   * Code: 3
   */
  PatientExplanation: CodingArgs;
  /**
   * Code: 4
   */
  ConsultedOtherSource: CodingArgs;
  /**
   * Code: 5
   */
  ConsultedPrescriber: CodingArgs;
  /**
   * Code: 6
   */
  PrescriberDeclinedChange: CodingArgs;
  /**
   * Code: 7
   */
  InteractingTherapyNoLongerActivePlanned: CodingArgs;
  /**
   * Code: 8
   */
  OtherActionTaken: CodingArgs;
  /**
   * Code: 9
   */
  InstitutedOngoingMonitoringProgram: CodingArgs;
  /**
   * Code: EMAUTH
   */
  EmergencyAuthorizationOverride: CodingArgs;
}

/**
 * Kinds of mitigating actions and observations that can be associated with a detected issue or contraindication, such as 'added concurrent therapy', 'prior therapy documented', etc.
 */
export const DetectedissueMitigationActionCodings:DetectedissueMitigationActionCodingType = {
  /**
   * Code: _ActAdministrativeDetectedIssueManagementCode
   */
  ActAdministrativeDetectedIssueManagementCode: {
    display: "ActAdministrativeDetectedIssueManagementCode",
    code: "_ActAdministrativeDetectedIssueManagementCode",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
  },
  /**
   * Code: _ActDetectedIssueManagementCode
   */
  ActDetectedIssueManagementCode: {
    display: "ActDetectedIssueManagementCode",
    code: "_ActDetectedIssueManagementCode",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
  },
  /**
   * Code: _ActFinancialDetectedIssueManagementCode
   */
  ActFinancialDetectedIssueManagementCode: {
    display: "ActFinancialDetectedIssueManagementCode",
    code: "_ActFinancialDetectedIssueManagementCode",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
  },
  /**
   * Code: _AuthorizationIssueManagementCode
   */
  AuthorizationIssueManagementCode: {
    display: "Authorization Issue Management Code",
    code: "_AuthorizationIssueManagementCode",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
  },
  /**
   * Code: 1
   */
  TherapyAppropriate: {
    display: "Therapy Appropriate",
    code: "1",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
  },
  /**
   * Code: 10
   */
  ProvidedPatientEducation: {
    display: "Provided Patient Education",
    code: "10",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
  },
  /**
   * Code: 11
   */
  AddedConcurrentTherapy: {
    display: "Added Concurrent Therapy",
    code: "11",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
  },
  /**
   * Code: 12
   */
  TemporarilySuspendedConcurrentTherapy: {
    display: "Temporarily Suspended Concurrent Therapy",
    code: "12",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
  },
  /**
   * Code: 13
   */
  StoppedConcurrentTherapy: {
    display: "Stopped Concurrent Therapy",
    code: "13",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
  },
  /**
   * Code: 14
   */
  SupplyAppropriate: {
    display: "Supply Appropriate",
    code: "14",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
  },
  /**
   * Code: 15
   */
  Replacement: {
    display: "Replacement",
    code: "15",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
  },
  /**
   * Code: 16
   */
  VacationSupply: {
    display: "Vacation Supply",
    code: "16",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
  },
  /**
   * Code: 17
   */
  WeekendSupply: {
    display: "Weekend Supply",
    code: "17",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
  },
  /**
   * Code: 18
   */
  LeaveOfAbsence: {
    display: "Leave of Absence",
    code: "18",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
  },
  /**
   * Code: 19
   */
  ConsultedSupplier: {
    display: "Consulted Supplier",
    code: "19",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
  },
  /**
   * Code: 2
   */
  AssessedPatient: {
    display: "Assessed Patient",
    code: "2",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
  },
  /**
   * Code: 20
   */
  AdditionalQuantityOnSeparateDispense: {
    display: "additional quantity on separate dispense",
    code: "20",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
  },
  /**
   * Code: 21
   */
  AuthorizationConfirmed: {
    display: "authorization confirmed",
    code: "21",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
  },
  /**
   * Code: 22
   */
  AppropriateIndicationOrDiagnosis: {
    display: "appropriate indication or diagnosis",
    code: "22",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
  },
  /**
   * Code: 23
   */
  PriorTherapyDocumented: {
    display: "prior therapy documented",
    code: "23",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
  },
  /**
   * Code: 3
   */
  PatientExplanation: {
    display: "Patient Explanation",
    code: "3",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
  },
  /**
   * Code: 4
   */
  ConsultedOtherSource: {
    display: "Consulted Other Source",
    code: "4",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
  },
  /**
   * Code: 5
   */
  ConsultedPrescriber: {
    display: "Consulted Prescriber",
    code: "5",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
  },
  /**
   * Code: 6
   */
  PrescriberDeclinedChange: {
    display: "Prescriber Declined Change",
    code: "6",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
  },
  /**
   * Code: 7
   */
  InteractingTherapyNoLongerActivePlanned: {
    display: "Interacting Therapy No Longer Active/Planned",
    code: "7",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
  },
  /**
   * Code: 8
   */
  OtherActionTaken: {
    display: "Other Action Taken",
    code: "8",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
  },
  /**
   * Code: 9
   */
  InstitutedOngoingMonitoringProgram: {
    display: "Instituted Ongoing Monitoring Program",
    code: "9",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
  },
  /**
   * Code: EMAUTH
   */
  EmergencyAuthorizationOverride: {
    display: "emergency authorization override",
    code: "EMAUTH",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
  },
} as const;
