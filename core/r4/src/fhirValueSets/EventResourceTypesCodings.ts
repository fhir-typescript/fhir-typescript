// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/event-resource-types|4.0.1

import { Coding } from '../fhir/Coding.js'

/**
 * A list of all the event resource types defined in this version of the FHIR specification.
 */
export const EventResourceTypesCodings = {
  /**
   * ChargeItem: Item containing charge code(s) associated with the provision of healthcare provider products.
   */
  ChargeItem: new Coding({
    display: "ChargeItem",
    code: "ChargeItem",
    system: "http://hl7.org/fhir/event-resource-types",
  }),
  /**
   * ClaimResponse: Remittance resource.
   */
  ClaimResponse: new Coding({
    display: "ClaimResponse",
    code: "ClaimResponse",
    system: "http://hl7.org/fhir/event-resource-types",
  }),
  /**
   * ClinicalImpression: A clinical assessment performed when planning treatments and management strategies for a patient.
   */
  ClinicalImpression: new Coding({
    display: "ClinicalImpression",
    code: "ClinicalImpression",
    system: "http://hl7.org/fhir/event-resource-types",
  }),
  /**
   * Communication: A record of information transmitted from a sender to a receiver.
   */
  Communication: new Coding({
    display: "Communication",
    code: "Communication",
    system: "http://hl7.org/fhir/event-resource-types",
  }),
  /**
   * Composition: A set of resources composed into a single coherent clinical statement with clinical attestation.
   */
  Composition: new Coding({
    display: "Composition",
    code: "Composition",
    system: "http://hl7.org/fhir/event-resource-types",
  }),
  /**
   * Condition: Detailed information about conditions, problems or diagnoses.
   */
  Condition: new Coding({
    display: "Condition",
    code: "Condition",
    system: "http://hl7.org/fhir/event-resource-types",
  }),
  /**
   * Consent: A healthcare consumer's policy choices to permits or denies recipients or roles to perform actions for specific purposes and periods of time.
   */
  Consent: new Coding({
    display: "Consent",
    code: "Consent",
    system: "http://hl7.org/fhir/event-resource-types",
  }),
  /**
   * Coverage: Insurance or medical plan or a payment agreement.
   */
  Coverage: new Coding({
    display: "Coverage",
    code: "Coverage",
    system: "http://hl7.org/fhir/event-resource-types",
  }),
  /**
   * DeviceUseStatement: Record of use of a device.
   */
  DeviceUseStatement: new Coding({
    display: "DeviceUseStatement",
    code: "DeviceUseStatement",
    system: "http://hl7.org/fhir/event-resource-types",
  }),
  /**
   * DiagnosticReport: A Diagnostic report - a combination of request information, atomic results, images, interpretation, as well as formatted reports.
   */
  DiagnosticReport: new Coding({
    display: "DiagnosticReport",
    code: "DiagnosticReport",
    system: "http://hl7.org/fhir/event-resource-types",
  }),
  /**
   * DocumentManifest: A list that defines a set of documents.
   */
  DocumentManifest: new Coding({
    display: "DocumentManifest",
    code: "DocumentManifest",
    system: "http://hl7.org/fhir/event-resource-types",
  }),
  /**
   * DocumentReference: A reference to a document.
   */
  DocumentReference: new Coding({
    display: "DocumentReference",
    code: "DocumentReference",
    system: "http://hl7.org/fhir/event-resource-types",
  }),
  /**
   * Encounter: An interaction during which services are provided to the patient.
   */
  Encounter: new Coding({
    display: "Encounter",
    code: "Encounter",
    system: "http://hl7.org/fhir/event-resource-types",
  }),
  /**
   * EnrollmentResponse: EnrollmentResponse resource.
   */
  EnrollmentResponse: new Coding({
    display: "EnrollmentResponse",
    code: "EnrollmentResponse",
    system: "http://hl7.org/fhir/event-resource-types",
  }),
  /**
   * EpisodeOfCare: An association of a Patient with an Organization and  Healthcare Provider(s) for a period of time that the Organization assumes some level of responsibility.
   */
  EpisodeOfCare: new Coding({
    display: "EpisodeOfCare",
    code: "EpisodeOfCare",
    system: "http://hl7.org/fhir/event-resource-types",
  }),
  /**
   * ExplanationOfBenefit: Explanation of Benefit resource.
   */
  ExplanationOfBenefit: new Coding({
    display: "ExplanationOfBenefit",
    code: "ExplanationOfBenefit",
    system: "http://hl7.org/fhir/event-resource-types",
  }),
  /**
   * FamilyMemberHistory: Information about patient's relatives, relevant for patient.
   */
  FamilyMemberHistory: new Coding({
    display: "FamilyMemberHistory",
    code: "FamilyMemberHistory",
    system: "http://hl7.org/fhir/event-resource-types",
  }),
  /**
   * GuidanceResponse: The formal response to a guidance request.
   */
  GuidanceResponse: new Coding({
    display: "GuidanceResponse",
    code: "GuidanceResponse",
    system: "http://hl7.org/fhir/event-resource-types",
  }),
  /**
   * ImagingStudy: A set of images produced in single study (one or more series of references images).
   */
  ImagingStudy: new Coding({
    display: "ImagingStudy",
    code: "ImagingStudy",
    system: "http://hl7.org/fhir/event-resource-types",
  }),
  /**
   * Immunization: Immunization event information.
   */
  Immunization: new Coding({
    display: "Immunization",
    code: "Immunization",
    system: "http://hl7.org/fhir/event-resource-types",
  }),
  /**
   * MeasureReport: Results of a measure evaluation.
   */
  MeasureReport: new Coding({
    display: "MeasureReport",
    code: "MeasureReport",
    system: "http://hl7.org/fhir/event-resource-types",
  }),
  /**
   * Media: A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference.
   */
  Media: new Coding({
    display: "Media",
    code: "Media",
    system: "http://hl7.org/fhir/event-resource-types",
  }),
  /**
   * MedicationAdministration: Administration of medication to a patient.
   */
  MedicationAdministration: new Coding({
    display: "MedicationAdministration",
    code: "MedicationAdministration",
    system: "http://hl7.org/fhir/event-resource-types",
  }),
  /**
   * MedicationDispense: Dispensing a medication to a named patient.
   */
  MedicationDispense: new Coding({
    display: "MedicationDispense",
    code: "MedicationDispense",
    system: "http://hl7.org/fhir/event-resource-types",
  }),
  /**
   * MedicationStatement: Record of medication being taken by a patient.
   */
  MedicationStatement: new Coding({
    display: "MedicationStatement",
    code: "MedicationStatement",
    system: "http://hl7.org/fhir/event-resource-types",
  }),
  /**
   * Observation: Measurements and simple assertions.
   */
  Observation: new Coding({
    display: "Observation",
    code: "Observation",
    system: "http://hl7.org/fhir/event-resource-types",
  }),
  /**
   * PaymentNotice: PaymentNotice request.
   */
  PaymentNotice: new Coding({
    display: "PaymentNotice",
    code: "PaymentNotice",
    system: "http://hl7.org/fhir/event-resource-types",
  }),
  /**
   * PaymentReconciliation: PaymentReconciliation resource.
   */
  PaymentReconciliation: new Coding({
    display: "PaymentReconciliation",
    code: "PaymentReconciliation",
    system: "http://hl7.org/fhir/event-resource-types",
  }),
  /**
   * Procedure: An action that is being or was performed on a patient.
   */
  Procedure: new Coding({
    display: "Procedure",
    code: "Procedure",
    system: "http://hl7.org/fhir/event-resource-types",
  }),
  /**
   * ProcessResponse: ProcessResponse resource.
   */
  ProcessResponse: new Coding({
    display: "ProcessResponse",
    code: "ProcessResponse",
    system: "http://hl7.org/fhir/event-resource-types",
  }),
  /**
   * QuestionnaireResponse: A structured set of questions and their answers.
   */
  QuestionnaireResponse: new Coding({
    display: "QuestionnaireResponse",
    code: "QuestionnaireResponse",
    system: "http://hl7.org/fhir/event-resource-types",
  }),
  /**
   * RiskAssessment: Potential outcomes for a subject with likelihood.
   */
  RiskAssessment: new Coding({
    display: "RiskAssessment",
    code: "RiskAssessment",
    system: "http://hl7.org/fhir/event-resource-types",
  }),
  /**
   * SupplyDelivery: Delivery of bulk Supplies.
   */
  SupplyDelivery: new Coding({
    display: "SupplyDelivery",
    code: "SupplyDelivery",
    system: "http://hl7.org/fhir/event-resource-types",
  }),
  /**
   * Task: A task to be performed.
   */
  Task: new Coding({
    display: "Task",
    code: "Task",
    system: "http://hl7.org/fhir/event-resource-types",
  }),
} as const;

/**
 * A list of all the event resource types defined in this version of the FHIR specification.
 */
export type EventResourceTypesCodingType = typeof EventResourceTypesCodings;
