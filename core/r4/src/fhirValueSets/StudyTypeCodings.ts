// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/study-type|4.0.1

import { Coding } from '../fhir/Coding.js'

/**
 * Types of research studies (types of research methods).
 */
export const StudyTypeCodings = {
  /**
   * case-control: case-control study.
   */
  CaseControlStudy: new Coding({
    display: "case-control study",
    code: "case-control",
    system: "http://terminology.hl7.org/CodeSystem/study-type",
  }),
  /**
   * case-report: a single case report.
   */
  CaseReport: new Coding({
    display: "case report",
    code: "case-report",
    system: "http://terminology.hl7.org/CodeSystem/study-type",
  }),
  /**
   * CCT: controlled (but not randomized) trial.
   */
  ControlledTrialNonRandomized: new Coding({
    display: "controlled trial (non-randomized)",
    code: "CCT",
    system: "http://terminology.hl7.org/CodeSystem/study-type",
  }),
  /**
   * cohort: observational study comparing cohorts.
   */
  ComparativeCohortStudy: new Coding({
    display: "comparative cohort study",
    code: "cohort",
    system: "http://terminology.hl7.org/CodeSystem/study-type",
  }),
  /**
   * mixed: a combination of 1 or more types of studies.
   */
  MixedMethods: new Coding({
    display: "mixed methods",
    code: "mixed",
    system: "http://terminology.hl7.org/CodeSystem/study-type",
  }),
  /**
   * RCT: randomized controlled trial.
   */
  RandomizedTrial: new Coding({
    display: "randomized trial",
    code: "RCT",
    system: "http://terminology.hl7.org/CodeSystem/study-type",
  }),
  /**
   * series: uncontrolled cohort or case series.
   */
  UncontrolledCohortOrCaseSeries: new Coding({
    display: "uncontrolled cohort or case series",
    code: "series",
    system: "http://terminology.hl7.org/CodeSystem/study-type",
  }),
} as const;

/**
 * Types of research studies (types of research methods).
 */
export type StudyTypeCodingType = typeof StudyTypeCodings;