// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet Validation: http://terminology.hl7.org/ValueSet/v3-ParticipationMode|2018-08-12

/**
 *  A set of codes specifying the modality by which the Entity playing the Role is participating in the Act.  Examples:
 * Physically present, over the telephone, written communication.  Rationale:
 * Particularly for author (originator) participants this is used to specify whether the information represented by the act was initially provided verbally, (hand-)written, or electronically.  Open Issue:
 * There needs to be a reexamination of the hierarchies as there seems to be some muddling between ELECTRONIC and other concepts that involve electronic communication that are in other hierarchies.
 */
export const V3ParticipationModeVsValidation: readonly string[] = [
  "DICTATE",
  "ELECTRONIC",
  "EMAILWRIT",
  "FACE",
  "FAXWRIT",
  "HANDWRIT",
  "http://terminology.hl7.org/CodeSystem/v3-ParticipationMode|DICTATE",
  "http://terminology.hl7.org/CodeSystem/v3-ParticipationMode|ELECTRONIC",
  "http://terminology.hl7.org/CodeSystem/v3-ParticipationMode|EMAILWRIT",
  "http://terminology.hl7.org/CodeSystem/v3-ParticipationMode|FACE",
  "http://terminology.hl7.org/CodeSystem/v3-ParticipationMode|FAXWRIT",
  "http://terminology.hl7.org/CodeSystem/v3-ParticipationMode|HANDWRIT",
  "http://terminology.hl7.org/CodeSystem/v3-ParticipationMode|MAILWRIT",
  "http://terminology.hl7.org/CodeSystem/v3-ParticipationMode|ONLINEWRIT",
  "http://terminology.hl7.org/CodeSystem/v3-ParticipationMode|PHONE",
  "http://terminology.hl7.org/CodeSystem/v3-ParticipationMode|PHYSICAL",
  "http://terminology.hl7.org/CodeSystem/v3-ParticipationMode|REMOTE",
  "http://terminology.hl7.org/CodeSystem/v3-ParticipationMode|TYPEWRIT",
  "http://terminology.hl7.org/CodeSystem/v3-ParticipationMode|VERBAL",
  "http://terminology.hl7.org/CodeSystem/v3-ParticipationMode|VIDEOCONF",
  "http://terminology.hl7.org/CodeSystem/v3-ParticipationMode|WRITTEN",
  "MAILWRIT",
  "ONLINEWRIT",
  "PHONE",
  "PHYSICAL",
  "REMOTE",
  "TYPEWRIT",
  "VERBAL",
  "VIDEOCONF",
  "WRITTEN",
] as const;
