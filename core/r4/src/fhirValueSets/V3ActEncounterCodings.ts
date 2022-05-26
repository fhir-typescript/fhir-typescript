// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://terminology.hl7.org/ValueSet/v3-ActEncounterCode|2014-03-26

import { CodingArgs } from '../fhir/Coding.js'

/**
 *  Domain provides codes that qualify the ActEncounterClass (ENC)
 */
export type V3ActEncounterCodingType = {
  /**
   * ACUTE: An acute inpatient encounter.
   */
  InpatientAcute: CodingArgs;
  /**
   * AMB: A comprehensive term for health care provided in a healthcare facility (e.g. a practitioneraTMs office, clinic setting, or hospital) on a nonresident basis. The term ambulatory usually implies that the patient has come to the location and is not assigned to a bed. Sometimes referred to as an outpatient encounter.
   */
  Ambulatory: CodingArgs;
  /**
   * EMER: A patient encounter that takes place at a dedicated healthcare service delivery location where the patient receives immediate evaluation and treatment, provided until the patient can be discharged or responsibility for the patient's care is transferred elsewhere (for example, the patient could be admitted as an inpatient or transferred to another facility.)
   */
  Emergency: CodingArgs;
  /**
   * FLD: A patient encounter that takes place both outside a dedicated service delivery location and outside a patient's residence. Example locations might include an accident site and at a supermarket.
   */
  Field: CodingArgs;
  /**
   * HH: Healthcare encounter that takes place in the residence of the patient or a designee
   */
  HomeHealth: CodingArgs;
  /**
   * IMP: A patient encounter where a patient is admitted by a hospital or equivalent facility, assigned to a location where patients generally stay at least overnight and provided with room, board, and continuous nursing service.
   */
  InpatientEncounter: CodingArgs;
  /**
   * NONAC: Any category of inpatient encounter except 'acute'
   */
  InpatientNonAcute: CodingArgs;
  /**
   * OBSENC: An encounter where the patient usually will start in different encounter, such as one in the emergency department (EMER) but then transition to this type of encounter because they require a significant period of treatment and monitoring to determine whether or not their condition warrants an inpatient admission or discharge. In the majority of cases the decision about admission or discharge will occur within a time period determined by local, regional or national regulation, often between 24 and 48 hours.
   */
  ObservationEncounter: CodingArgs;
  /**
   * PRENC: A patient encounter where patient is scheduled or planned to receive service delivery in the future, and the patient is given a pre-admission account number. When the patient comes back for subsequent service, the pre-admission encounter is selected and is encapsulated into the service registration, and a new account number is generated.
   * 
   *                         
   *                            Usage Note: This is intended to be used in advance of encounter types such as ambulatory, inpatient encounter, virtual, etc.
   */
  PreAdmission: CodingArgs;
  /**
   * SS: An encounter where the patient is admitted to a health care facility for a predetermined length of time, usually less than 24 hours.
   */
  ShortStay: CodingArgs;
  /**
   * VR: A patient encounter where the patient and the practitioner(s) are not in the same physical location. Examples include telephone conference, email exchange, robotic surgery, and televideo conference.
   */
  Virtual: CodingArgs;
}

/**
 *  Domain provides codes that qualify the ActEncounterClass (ENC)
 */
export const V3ActEncounterCodings:V3ActEncounterCodingType = {
  /**
   * ACUTE: An acute inpatient encounter.
   */
  InpatientAcute: {
    display: "inpatient acute",
    code: "ACUTE",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
  },
  /**
   * AMB: A comprehensive term for health care provided in a healthcare facility (e.g. a practitioneraTMs office, clinic setting, or hospital) on a nonresident basis. The term ambulatory usually implies that the patient has come to the location and is not assigned to a bed. Sometimes referred to as an outpatient encounter.
   */
  Ambulatory: {
    display: "ambulatory",
    code: "AMB",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
  },
  /**
   * EMER: A patient encounter that takes place at a dedicated healthcare service delivery location where the patient receives immediate evaluation and treatment, provided until the patient can be discharged or responsibility for the patient's care is transferred elsewhere (for example, the patient could be admitted as an inpatient or transferred to another facility.)
   */
  Emergency: {
    display: "emergency",
    code: "EMER",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
  },
  /**
   * FLD: A patient encounter that takes place both outside a dedicated service delivery location and outside a patient's residence. Example locations might include an accident site and at a supermarket.
   */
  Field: {
    display: "field",
    code: "FLD",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
  },
  /**
   * HH: Healthcare encounter that takes place in the residence of the patient or a designee
   */
  HomeHealth: {
    display: "home health",
    code: "HH",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
  },
  /**
   * IMP: A patient encounter where a patient is admitted by a hospital or equivalent facility, assigned to a location where patients generally stay at least overnight and provided with room, board, and continuous nursing service.
   */
  InpatientEncounter: {
    display: "inpatient encounter",
    code: "IMP",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
  },
  /**
   * NONAC: Any category of inpatient encounter except 'acute'
   */
  InpatientNonAcute: {
    display: "inpatient non-acute",
    code: "NONAC",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
  },
  /**
   * OBSENC: An encounter where the patient usually will start in different encounter, such as one in the emergency department (EMER) but then transition to this type of encounter because they require a significant period of treatment and monitoring to determine whether or not their condition warrants an inpatient admission or discharge. In the majority of cases the decision about admission or discharge will occur within a time period determined by local, regional or national regulation, often between 24 and 48 hours.
   */
  ObservationEncounter: {
    display: "observation encounter",
    code: "OBSENC",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
  },
  /**
   * PRENC: A patient encounter where patient is scheduled or planned to receive service delivery in the future, and the patient is given a pre-admission account number. When the patient comes back for subsequent service, the pre-admission encounter is selected and is encapsulated into the service registration, and a new account number is generated.
   * 
   *                         
   *                            Usage Note: This is intended to be used in advance of encounter types such as ambulatory, inpatient encounter, virtual, etc.
   */
  PreAdmission: {
    display: "pre-admission",
    code: "PRENC",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
  },
  /**
   * SS: An encounter where the patient is admitted to a health care facility for a predetermined length of time, usually less than 24 hours.
   */
  ShortStay: {
    display: "short stay",
    code: "SS",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
  },
  /**
   * VR: A patient encounter where the patient and the practitioner(s) are not in the same physical location. Examples include telephone conference, email exchange, robotic surgery, and televideo conference.
   */
  Virtual: {
    display: "virtual",
    code: "VR",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
  },
} as const;
