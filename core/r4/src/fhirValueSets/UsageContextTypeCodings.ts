// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/usage-context-type|4.0.1

import { Coding } from '../fhir/Coding.js'

/**
 * A code that specifies a type of context being specified by a usage context.
 */
export const UsageContextTypeCodings = {
  /**
   * age: The age of the patient. For this context type, the value could be a range that specifies the applicable ages or a code from an appropriate value set such as the MeSH value set http://terminology.hl7.org/ValueSet/v3-AgeGroupObservationValue.
   */
  AgeRange: new Coding({
    display: "Age Range",
    code: "age",
    system: "http://terminology.hl7.org/CodeSystem/usage-context-type",
  }),
  /**
   * focus: The clinical concept(s) addressed by the artifact. For example, disease, diagnostic test interpretation, medication ordering as in http://hl7.org/fhir/ValueSet/condition-code.
   */
  ClinicalFocus: new Coding({
    display: "Clinical Focus",
    code: "focus",
    system: "http://terminology.hl7.org/CodeSystem/usage-context-type",
  }),
  /**
   * gender: The gender of the patient. For this context type, appropriate values can be found in the http://hl7.org/fhir/ValueSet/administrative-gender value set.
   */
  Gender: new Coding({
    display: "Gender",
    code: "gender",
    system: "http://terminology.hl7.org/CodeSystem/usage-context-type",
  }),
  /**
   * program: A program/project of work for which this artifact is applicable.
   */
  Program: new Coding({
    display: "Program",
    code: "program",
    system: "http://terminology.hl7.org/CodeSystem/usage-context-type",
  }),
  /**
   * species: The species to which an artifact applies. For example, SNOMED - 387961004 | Kingdom Animalia (organism).
   */
  Species: new Coding({
    display: "Species",
    code: "species",
    system: "http://terminology.hl7.org/CodeSystem/usage-context-type",
  }),
  /**
   * task: The context for the clinical task(s) represented by this artifact. For example, this could be any task context represented by the HL7 ActTaskCode value set http://terminology.hl7.org/ValueSet/v3-ActTaskCode. General categories include: order entry, patient documentation and patient information review.
   */
  WorkflowTask: new Coding({
    display: "Workflow Task",
    code: "task",
    system: "http://terminology.hl7.org/CodeSystem/usage-context-type",
  }),
  /**
   * user: The clinical specialty of the context in which the patient is being treated - For example, PCP, Patient, Cardiologist, Behavioral Professional, Oral Health Professional, Prescriber, etc... taken from a specialty value set such as the NUCC Health Care provider taxonomy value set http://hl7.org/fhir/ValueSet/provider-taxonomy.
   */
  UserType: new Coding({
    display: "User Type",
    code: "user",
    system: "http://terminology.hl7.org/CodeSystem/usage-context-type",
  }),
  /**
   * venue: The venue in which an artifact could be used. For example, Outpatient, Inpatient, Home, Nursing home. The code value may originate from the HL7 ServiceDeliveryLocationRoleType value set (http://terminology.hl7.org/ValueSet/v3-ServiceDeliveryLocationRoleType).
   */
  ClinicalVenue: new Coding({
    display: "Clinical Venue",
    code: "venue",
    system: "http://terminology.hl7.org/CodeSystem/usage-context-type",
  }),
  /**
   * workflow: The settings in which the artifact is intended for use. For example, admission, pre-op, etc. For example, the ActEncounterCode value set http://terminology.hl7.org/ValueSet/v3-ActEncounterCode.
   */
  WorkflowSetting: new Coding({
    display: "Workflow Setting",
    code: "workflow",
    system: "http://terminology.hl7.org/CodeSystem/usage-context-type",
  }),
} as const;

/**
 * A code that specifies a type of context being specified by a usage context.
 */
export type UsageContextTypeCodingType = typeof UsageContextTypeCodings;