// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/detectedissue-category|4.0.1

import { Coding } from '../fhir/Coding.js'

/**
 * Kinds of issues or contraindications, such as 'drug-drug interaction', 'duplicate therapy', etc.
 */
export const DetectedissueCategoryCodings = {
  /**
   * _ActSuppliedItemDetectedIssueCode: Identifies types of detected issues regarding the administration or supply of an item to a patient.
   */
  ActSuppliedItemDetectedIssueCode: new Coding({
    display: "ActSuppliedItemDetectedIssueCode",
    code: "_ActSuppliedItemDetectedIssueCode",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
  }),
  /**
   * _AdministrationDetectedIssueCode: Administration of the proposed therapy may be inappropriate or contraindicated as proposed
   */
  AdministrationDetectedIssueCode: new Coding({
    display: "AdministrationDetectedIssueCode",
    code: "_AdministrationDetectedIssueCode",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
  }),
  /**
   * _AppropriatenessDetectedIssueCode: AppropriatenessDetectedIssueCode
   */
  AppropriatenessDetectedIssueCode: new Coding({
    display: "AppropriatenessDetectedIssueCode",
    code: "_AppropriatenessDetectedIssueCode",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
  }),
  /**
   * _InteractionDetectedIssueCode: InteractionDetectedIssueCode
   */
  InteractionDetectedIssueCode: new Coding({
    display: "InteractionDetectedIssueCode",
    code: "_InteractionDetectedIssueCode",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
  }),
  /**
   * _SupplyDetectedIssueCode: Supplying the product at this time may be inappropriate or indicate compliance issues with the associated therapy
   */
  SupplyDetectedIssueCode: new Coding({
    display: "SupplyDetectedIssueCode",
    code: "_SupplyDetectedIssueCode",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
  }),
  /**
   * _TimingDetectedIssueCode: Proposed therapy may be inappropriate or ineffective based on the proposed start or end time.
   */
  TimingDetectedIssueCode: new Coding({
    display: "TimingDetectedIssueCode",
    code: "_TimingDetectedIssueCode",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
  }),
  /**
   * ALLDONE: Definition:The requested action has already been performed and so this request has no effect
   */
  AlreadyPerformed: new Coding({
    display: "already performed",
    code: "ALLDONE",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
  }),
  /**
   * ALRTENDLATE: Definition:Proposed therapy may be inappropriate or ineffective because the end of administration is too close to another planned therapy.
   */
  EndTooLateAlert: new Coding({
    display: "end too late alert",
    code: "ALRTENDLATE",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
  }),
  /**
   * ALRTSTRTLATE: Definition:Proposed therapy may be inappropriate or ineffective because the start of administration is too late after the onset of the condition.
   */
  StartTooLateAlert: new Coding({
    display: "start too late alert",
    code: "ALRTSTRTLATE",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
  }),
  /**
   * DACT: Description:Proposed therapy may be contraindicated or ineffective based on an existing or recent drug therapy.
   */
  DrugActionDetectedIssue: new Coding({
    display: "drug action detected issue",
    code: "DACT",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
  }),
  /**
   * DRG: Proposed therapy may interact with an existing or recent drug therapy
   */
  DrugInteractionAlert: new Coding({
    display: "Drug Interaction Alert",
    code: "DRG",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
  }),
  /**
   * ENDLATE: Proposed therapy may be inappropriate or ineffective because the end of administration is too close to another planned therapy
   */
  EndTooLateAlertENDLATE: new Coding({
    display: "End Too Late Alert",
    code: "ENDLATE",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
  }),
  /**
   * FOOD: Proposed therapy may interact with certain foods
   */
  FoodInteractionAlert: new Coding({
    display: "Food Interaction Alert",
    code: "FOOD",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
  }),
  /**
   * FULFIL: Definition:The therapy being performed is in some way out of alignment with the requested therapy.
   */
  FulfillmentAlert: new Coding({
    display: "fulfillment alert",
    code: "FULFIL",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
  }),
  /**
   * HELD: Definition:There should be no actions taken in fulfillment of a request that has been held or suspended.
   */
  HeldSuspendedAlert: new Coding({
    display: "held/suspended alert",
    code: "HELD",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
  }),
  /**
   * HISTORIC: Description: While the record was accepted in the repository, there is a more recent version of a record of this type.
   */
  RecordRecordedAsHistorical: new Coding({
    display: "record recorded as historical",
    code: "HISTORIC",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
  }),
  /**
   * INTERVAL: Definition:The therapy action is being performed outside the bounds of the time period requested
   */
  OutsideRequestedTime: new Coding({
    display: "outside requested time",
    code: "INTERVAL",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
  }),
  /**
   * MINFREQ: Definition:The therapy action is being performed too soon after the previous occurrence based on the requested frequency
   */
  TooSoonWithinFrequencyBasedOnTheUsage: new Coding({
    display: "too soon within frequency based on the usage",
    code: "MINFREQ",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
  }),
  /**
   * NHP: Proposed therapy may interact with existing or recent natural health product therapy
   */
  NaturalHealthProductAlert: new Coding({
    display: "Natural Health Product Alert",
    code: "NHP",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
  }),
  /**
   * NONRX: Proposed therapy may interact with a non-prescription drug (e.g. alcohol, tobacco, Aspirin)
   */
  NonPrescriptionInteractionAlert: new Coding({
    display: "Non-Prescription Interaction Alert",
    code: "NONRX",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
  }),
  /**
   * NOTACTN: Definition:The status of the request being fulfilled has changed such that it is no longer actionable.  This may be because the request has expired, has already been completely fulfilled or has been otherwise stopped or disabled.  (Not used for 'suspended' orders.)
   */
  NoLongerActionable: new Coding({
    display: "no longer actionable",
    code: "NOTACTN",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
  }),
  /**
   * NOTEQUIV: Definition:The therapy being performed is not sufficiently equivalent to the therapy which was requested.
   */
  NotEquivalentAlert: new Coding({
    display: "not equivalent alert",
    code: "NOTEQUIV",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
  }),
  /**
   * NOTEQUIVGEN: Definition:The therapy being performed is not generically equivalent (having the identical biological action) to the therapy which was requested.
   */
  NotGenericallyEquivalentAlert: new Coding({
    display: "not generically equivalent alert",
    code: "NOTEQUIVGEN",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
  }),
  /**
   * NOTEQUIVTHER: Definition:The therapy being performed is not therapeutically equivalent (having the same overall patient effect) to the therapy which was requested.
   */
  NotTherapeuticallyEquivalentAlert: new Coding({
    display: "not therapeutically equivalent alert",
    code: "NOTEQUIVTHER",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
  }),
  /**
   * PATPREF: Definition:The proposed therapy goes against preferences or consent constraints recorded in the patient's record.
   */
  ViolatesStatedPreferences: new Coding({
    display: "violates stated preferences",
    code: "PATPREF",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
  }),
  /**
   * PATPREFALT: Definition:The proposed therapy goes against preferences or consent constraints recorded in the patient's record.  An alternate therapy meeting those constraints is available.
   */
  ViolatesStatedPreferencesAlternateAvailable: new Coding({
    display: "violates stated preferences, alternate available",
    code: "PATPREFALT",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
  }),
  /**
   * PREVINEF: Definition:The same or similar treatment has previously been attempted with the patient without achieving a positive effect.
   */
  PreviouslyIneffective: new Coding({
    display: "previously ineffective",
    code: "PREVINEF",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
  }),
  /**
   * STRTLATE: Proposed therapy may be inappropriate or ineffective because the start of administration is too late after the onset of the condition
   */
  StartTooLateAlertSTRTLATE: new Coding({
    display: "Start Too Late Alert",
    code: "STRTLATE",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
  }),
  /**
   * TIME: Description:Proposed therapy may be inappropriate or ineffective based on the proposed start or end time.
   */
  TimingDetectedIssue: new Coding({
    display: "timing detected issue",
    code: "TIME",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
  }),
  /**
   * TIMING: Definition:The therapy is being performed at a time which diverges from the time the therapy was requested
   */
  EventTimingIncorrectAlert: new Coding({
    display: "event timing incorrect alert",
    code: "TIMING",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
  }),
  /**
   * TOOLATE: The patient is receiving a subsequent fill significantly later than would be expected based on the amount previously supplied and the therapy dosage instructions
   */
  RefillTooLateAlert: new Coding({
    display: "Refill Too Late Alert",
    code: "TOOLATE",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
  }),
  /**
   * TOOSOON: The patient is receiving a subsequent fill significantly earlier than would be expected based on the amount previously supplied and the therapy dosage instructions
   */
  RefillTooSoonAlert: new Coding({
    display: "Refill Too Soon Alert",
    code: "TOOSOON",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
  }),
  /**
   * TPROD: Proposed therapy may interact with an existing or recent therapeutic product
   */
  TherapeuticProductAlert: new Coding({
    display: "Therapeutic Product Alert",
    code: "TPROD",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
  }),
} as const;

/**
 * Kinds of issues or contraindications, such as 'drug-drug interaction', 'duplicate therapy', etc.
 */
export type DetectedissueCategoryCodingType = typeof DetectedissueCategoryCodings;
