// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/encounter-participant-type|4.0.1

import { CodingArgs } from '../fhir/Coding.js'

/**
 * This value set defines a set of codes that can be used to indicate how an individual participates in an encounter.
 */
export type EncounterParticipantTypeCodingType = {
  /**
   * ADM: The practitioner who is responsible for admitting a patient to a patient encounter.
   */
  Admitter: CodingArgs;
  /**
   * ATND: The practitioner that has responsibility for overseeing a patient's care during a patient encounter.
   */
  Attender: CodingArgs;
  /**
   * CALLBCK: A person or organization who should be contacted for follow-up questions about the act in place of the author.
   */
  CallbackContact: CodingArgs;
  /**
   * CON: An advisor participating in the service by performing evaluations and making recommendations.
   */
  Consultant: CodingArgs;
  /**
   * DIS: The practitioner who is responsible for the discharge of a patient from a patient encounter.
   */
  Discharger: CodingArgs;
  /**
   * emergency: A person to be contacted in case of an emergency during the encounter.
   */
  Emergency: CodingArgs;
  /**
   * ESC: Only with Transportation services.  A person who escorts the patient.
   */
  Escort: CodingArgs;
  /**
   * PART: Indicates that the target of the participation is involved in some manner in the act, but does not qualify how.
   */
  Participation: CodingArgs;
  /**
   * PPRF: The principal or primary performer of the act.
   */
  PrimaryPerformer: CodingArgs;
  /**
   * REF: A person having referred the subject of the service to the performer (referring physician).  Typically, a referring physician will receive a report.
   */
  Referrer: CodingArgs;
  /**
   * SPRF: A person assisting in an act through his substantial presence and involvement   This includes: assistants, technicians, associates, or whatever the job titles may be.
   */
  SecondaryPerformer: CodingArgs;
  /**
   * translator: A translator who is facilitating communication with the patient during the encounter.
   */
  Translator: CodingArgs;
}

/**
 * This value set defines a set of codes that can be used to indicate how an individual participates in an encounter.
 */
export const EncounterParticipantTypeCodings:EncounterParticipantTypeCodingType = {
  /**
   * ADM: The practitioner who is responsible for admitting a patient to a patient encounter.
   */
  Admitter: {
    display: "admitter",
    code: "ADM",
    system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
  },
  /**
   * ATND: The practitioner that has responsibility for overseeing a patient's care during a patient encounter.
   */
  Attender: {
    display: "attender",
    code: "ATND",
    system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
  },
  /**
   * CALLBCK: A person or organization who should be contacted for follow-up questions about the act in place of the author.
   */
  CallbackContact: {
    display: "callback contact",
    code: "CALLBCK",
    system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
  },
  /**
   * CON: An advisor participating in the service by performing evaluations and making recommendations.
   */
  Consultant: {
    display: "consultant",
    code: "CON",
    system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
  },
  /**
   * DIS: The practitioner who is responsible for the discharge of a patient from a patient encounter.
   */
  Discharger: {
    display: "discharger",
    code: "DIS",
    system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
  },
  /**
   * emergency: A person to be contacted in case of an emergency during the encounter.
   */
  Emergency: {
    display: "Emergency",
    code: "emergency",
    system: "http://terminology.hl7.org/CodeSystem/participant-type",
  },
  /**
   * ESC: Only with Transportation services.  A person who escorts the patient.
   */
  Escort: {
    display: "escort",
    code: "ESC",
    system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
  },
  /**
   * PART: Indicates that the target of the participation is involved in some manner in the act, but does not qualify how.
   */
  Participation: {
    display: "Participation",
    code: "PART",
    system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
  },
  /**
   * PPRF: The principal or primary performer of the act.
   */
  PrimaryPerformer: {
    display: "primary performer",
    code: "PPRF",
    system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
  },
  /**
   * REF: A person having referred the subject of the service to the performer (referring physician).  Typically, a referring physician will receive a report.
   */
  Referrer: {
    display: "referrer",
    code: "REF",
    system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
  },
  /**
   * SPRF: A person assisting in an act through his substantial presence and involvement   This includes: assistants, technicians, associates, or whatever the job titles may be.
   */
  SecondaryPerformer: {
    display: "secondary performer",
    code: "SPRF",
    system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
  },
  /**
   * translator: A translator who is facilitating communication with the patient during the encounter.
   */
  Translator: {
    display: "Translator",
    code: "translator",
    system: "http://terminology.hl7.org/CodeSystem/participant-type",
  },
} as const;
