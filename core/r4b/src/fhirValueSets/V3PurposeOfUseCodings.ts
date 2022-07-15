// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://terminology.hl7.org/ValueSet/v3-PurposeOfUse|2.0.0

import { CodingArgs } from '../fhir/Coding.js'

/**
 * Supports communication of purpose of use at a general level.
 */
export type V3PurposeOfUseCodingType = {
  /**
   * Code: BIORCH
   */
  BiomedicalResearch: CodingArgs;
  /**
   * Code: BTG
   */
  BreakTheGlass: CodingArgs;
  /**
   * Code: CAREMGT
   */
  CareManagement: CodingArgs;
  /**
   * Code: CLINTRCH
   */
  ClinicalTrialResearch: CodingArgs;
  /**
   * Code: CLINTRCHNPC
   */
  ClinicalTrialResearchWithoutPatientCare: CodingArgs;
  /**
   * Code: CLINTRCHPC
   */
  ClinicalTrialResearchWithPatientCare: CodingArgs;
  /**
   * Code: CLINTRL
   */
  ClinicalTrial: CodingArgs;
  /**
   * Code: CLMATTCH
   */
  ClaimAttachment: CodingArgs;
  /**
   * Code: COC
   */
  CoordinationOfCare: CodingArgs;
  /**
   * Code: COVAUTH
   */
  CoverageAuthorization: CodingArgs;
  /**
   * Code: COVERAGE
   */
  CoverageUnderPolicyOrProgram: CodingArgs;
  /**
   * Code: DISASTER
   */
  Disaster: CodingArgs;
  /**
   * Code: DONAT
   */
  Donation: CodingArgs;
  /**
   * Code: DSRCH
   */
  DiseaseSpecificHealthcareResearch: CodingArgs;
  /**
   * Code: ELIGDTRM
   */
  EligibilityDetermination: CodingArgs;
  /**
   * Code: ELIGVER
   */
  EligibilityVerification: CodingArgs;
  /**
   * Code: ENROLLM
   */
  Enrollment: CodingArgs;
  /**
   * Code: ERTREAT
   */
  EmergencyRoomTreatment: CodingArgs;
  /**
   * Code: ETREAT
   */
  EmergencyTreatment: CodingArgs;
  /**
   * Code: FAMRQT
   */
  FamilyRequested: CodingArgs;
  /**
   * Code: FRAUD
   */
  Fraud: CodingArgs;
  /**
   * Code: GOV
   */
  Government: CodingArgs;
  /**
   * Code: HACCRED
   */
  HealthAccreditation: CodingArgs;
  /**
   * Code: HCOMPL
   */
  HealthCompliance: CodingArgs;
  /**
   * Code: HDECD
   */
  Decedent: CodingArgs;
  /**
   * Code: HDIRECT
   */
  Directory: CodingArgs;
  /**
   * Code: HDM
   */
  HealthcareDeliveryManagement: CodingArgs;
  /**
   * Code: HLEGAL
   */
  Legal: CodingArgs;
  /**
   * Code: HMARKT
   */
  HealthcareMarketing: CodingArgs;
  /**
   * Code: HOPERAT
   */
  HealthcareOperations: CodingArgs;
  /**
   * Code: HOUTCOMS
   */
  HealthOutcomeMeasure: CodingArgs;
  /**
   * Code: HPAYMT
   */
  HealthcarePayment: CodingArgs;
  /**
   * Code: HPRGRP
   */
  HealthProgramReporting: CodingArgs;
  /**
   * Code: HQUALIMP
   */
  HealthQualityImprovement: CodingArgs;
  /**
   * Code: HRESCH
   */
  HealthcareResearch: CodingArgs;
  /**
   * Code: HSYSADMIN
   */
  HealthSystemAdministration: CodingArgs;
  /**
   * Code: HTEST
   */
  TestHealthData: CodingArgs;
  /**
   * Code: LABELING
   */
  Labeling: CodingArgs;
  /**
   * Code: MEMADMIN
   */
  MemberAdministration: CodingArgs;
  /**
   * Code: METAMGT
   */
  MetadataManagement: CodingArgs;
  /**
   * Code: MILCDM
   */
  MilitaryCommand: CodingArgs;
  /**
   * Code: MILDCRG
   */
  MilitaryDischarge: CodingArgs;
  /**
   * Code: PATADMIN
   */
  PatientAdministration: CodingArgs;
  /**
   * Code: PATRQT
   */
  PatientRequested: CodingArgs;
  /**
   * Code: PATSFTY
   */
  PatientSafety: CodingArgs;
  /**
   * Code: PERFMSR
   */
  PerformanceMeasure: CodingArgs;
  /**
   * Code: POARCH
   */
  PopulationOriginsOrAncestryHealthcareResearch: CodingArgs;
  /**
   * Code: POPHLTH
   */
  PopulationHealth: CodingArgs;
  /**
   * Code: PRECLINTRCH
   */
  PreclinicalTrialResearch: CodingArgs;
  /**
   * Code: PUBHLTH
   */
  PublicHealth: CodingArgs;
  /**
   * Code: PWATRNY
   */
  PowerOfAttorney: CodingArgs;
  /**
   * Code: RECORDMGT
   */
  RecordsManagement: CodingArgs;
  /**
   * Code: REMITADV
   */
  RemittanceAdvice: CodingArgs;
  /**
   * Code: SUPNWK
   */
  SupportNetwork: CodingArgs;
  /**
   * Code: SYSDEV
   */
  SystemDevelopment: CodingArgs;
  /**
   * Code: THREAT
   */
  Threat: CodingArgs;
  /**
   * Code: TRAIN
   */
  Training: CodingArgs;
  /**
   * Code: TRANSRCH
   */
  TranslationalHealthcareResearch: CodingArgs;
  /**
   * Code: TREAT
   */
  Treatment: CodingArgs;
}

/**
 * Supports communication of purpose of use at a general level.
 */
export const V3PurposeOfUseCodings:V3PurposeOfUseCodingType = {
  /**
   * Code: BIORCH
   */
  BiomedicalResearch: {
    display: "biomedical research",
    code: "BIORCH",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
  },
  /**
   * Code: BTG
   */
  BreakTheGlass: {
    display: "break the glass",
    code: "BTG",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
  },
  /**
   * Code: CAREMGT
   */
  CareManagement: {
    display: "care management",
    code: "CAREMGT",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
  },
  /**
   * Code: CLINTRCH
   */
  ClinicalTrialResearch: {
    display: "clinical trial research",
    code: "CLINTRCH",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
  },
  /**
   * Code: CLINTRCHNPC
   */
  ClinicalTrialResearchWithoutPatientCare: {
    display: "clinical trial research without patient care",
    code: "CLINTRCHNPC",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
  },
  /**
   * Code: CLINTRCHPC
   */
  ClinicalTrialResearchWithPatientCare: {
    display: "clinical trial research with patient care",
    code: "CLINTRCHPC",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
  },
  /**
   * Code: CLINTRL
   */
  ClinicalTrial: {
    display: "clinical trial",
    code: "CLINTRL",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
  },
  /**
   * Code: CLMATTCH
   */
  ClaimAttachment: {
    display: "claim attachment",
    code: "CLMATTCH",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
  },
  /**
   * Code: COC
   */
  CoordinationOfCare: {
    display: "coordination of care",
    code: "COC",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
  },
  /**
   * Code: COVAUTH
   */
  CoverageAuthorization: {
    display: "coverage authorization",
    code: "COVAUTH",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
  },
  /**
   * Code: COVERAGE
   */
  CoverageUnderPolicyOrProgram: {
    display: "coverage under policy or program",
    code: "COVERAGE",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
  },
  /**
   * Code: DISASTER
   */
  Disaster: {
    display: "disaster",
    code: "DISASTER",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
  },
  /**
   * Code: DONAT
   */
  Donation: {
    display: "donation",
    code: "DONAT",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
  },
  /**
   * Code: DSRCH
   */
  DiseaseSpecificHealthcareResearch: {
    display: "disease specific healthcare research",
    code: "DSRCH",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
  },
  /**
   * Code: ELIGDTRM
   */
  EligibilityDetermination: {
    display: "eligibility determination",
    code: "ELIGDTRM",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
  },
  /**
   * Code: ELIGVER
   */
  EligibilityVerification: {
    display: "eligibility verification",
    code: "ELIGVER",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
  },
  /**
   * Code: ENROLLM
   */
  Enrollment: {
    display: "enrollment",
    code: "ENROLLM",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
  },
  /**
   * Code: ERTREAT
   */
  EmergencyRoomTreatment: {
    display: "emergency room treatment",
    code: "ERTREAT",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
  },
  /**
   * Code: ETREAT
   */
  EmergencyTreatment: {
    display: "Emergency Treatment",
    code: "ETREAT",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
  },
  /**
   * Code: FAMRQT
   */
  FamilyRequested: {
    display: "family requested",
    code: "FAMRQT",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
  },
  /**
   * Code: FRAUD
   */
  Fraud: {
    display: "fraud",
    code: "FRAUD",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
  },
  /**
   * Code: GOV
   */
  Government: {
    display: "government",
    code: "GOV",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
  },
  /**
   * Code: HACCRED
   */
  HealthAccreditation: {
    display: "health accreditation",
    code: "HACCRED",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
  },
  /**
   * Code: HCOMPL
   */
  HealthCompliance: {
    display: "health compliance",
    code: "HCOMPL",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
  },
  /**
   * Code: HDECD
   */
  Decedent: {
    display: "decedent",
    code: "HDECD",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
  },
  /**
   * Code: HDIRECT
   */
  Directory: {
    display: "directory",
    code: "HDIRECT",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
  },
  /**
   * Code: HDM
   */
  HealthcareDeliveryManagement: {
    display: "healthcare delivery management",
    code: "HDM",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
  },
  /**
   * Code: HLEGAL
   */
  Legal: {
    display: "legal",
    code: "HLEGAL",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
  },
  /**
   * Code: HMARKT
   */
  HealthcareMarketing: {
    display: "healthcare marketing",
    code: "HMARKT",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
  },
  /**
   * Code: HOPERAT
   */
  HealthcareOperations: {
    display: "healthcare operations",
    code: "HOPERAT",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
  },
  /**
   * Code: HOUTCOMS
   */
  HealthOutcomeMeasure: {
    display: "health outcome measure",
    code: "HOUTCOMS",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
  },
  /**
   * Code: HPAYMT
   */
  HealthcarePayment: {
    display: "healthcare payment",
    code: "HPAYMT",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
  },
  /**
   * Code: HPRGRP
   */
  HealthProgramReporting: {
    display: "health program reporting",
    code: "HPRGRP",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
  },
  /**
   * Code: HQUALIMP
   */
  HealthQualityImprovement: {
    display: "health quality improvement",
    code: "HQUALIMP",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
  },
  /**
   * Code: HRESCH
   */
  HealthcareResearch: {
    display: "healthcare research",
    code: "HRESCH",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
  },
  /**
   * Code: HSYSADMIN
   */
  HealthSystemAdministration: {
    display: "health system administration",
    code: "HSYSADMIN",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
  },
  /**
   * Code: HTEST
   */
  TestHealthData: {
    display: "test health data",
    code: "HTEST",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
  },
  /**
   * Code: LABELING
   */
  Labeling: {
    display: "labeling",
    code: "LABELING",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
  },
  /**
   * Code: MEMADMIN
   */
  MemberAdministration: {
    display: "member administration",
    code: "MEMADMIN",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
  },
  /**
   * Code: METAMGT
   */
  MetadataManagement: {
    display: "metadata management",
    code: "METAMGT",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
  },
  /**
   * Code: MILCDM
   */
  MilitaryCommand: {
    display: "military command",
    code: "MILCDM",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
  },
  /**
   * Code: MILDCRG
   */
  MilitaryDischarge: {
    display: "military discharge",
    code: "MILDCRG",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
  },
  /**
   * Code: PATADMIN
   */
  PatientAdministration: {
    display: "patient administration",
    code: "PATADMIN",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
  },
  /**
   * Code: PATRQT
   */
  PatientRequested: {
    display: "patient requested",
    code: "PATRQT",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
  },
  /**
   * Code: PATSFTY
   */
  PatientSafety: {
    display: "patient safety",
    code: "PATSFTY",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
  },
  /**
   * Code: PERFMSR
   */
  PerformanceMeasure: {
    display: "performance measure",
    code: "PERFMSR",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
  },
  /**
   * Code: POARCH
   */
  PopulationOriginsOrAncestryHealthcareResearch: {
    display: "population origins or ancestry healthcare research",
    code: "POARCH",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
  },
  /**
   * Code: POPHLTH
   */
  PopulationHealth: {
    display: "population health",
    code: "POPHLTH",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
  },
  /**
   * Code: PRECLINTRCH
   */
  PreclinicalTrialResearch: {
    display: "preclinical trial research",
    code: "PRECLINTRCH",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
  },
  /**
   * Code: PUBHLTH
   */
  PublicHealth: {
    display: "public health",
    code: "PUBHLTH",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
  },
  /**
   * Code: PWATRNY
   */
  PowerOfAttorney: {
    display: "power of attorney",
    code: "PWATRNY",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
  },
  /**
   * Code: RECORDMGT
   */
  RecordsManagement: {
    display: "records management",
    code: "RECORDMGT",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
  },
  /**
   * Code: REMITADV
   */
  RemittanceAdvice: {
    display: "remittance advice",
    code: "REMITADV",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
  },
  /**
   * Code: SUPNWK
   */
  SupportNetwork: {
    display: "support network",
    code: "SUPNWK",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
  },
  /**
   * Code: SYSDEV
   */
  SystemDevelopment: {
    display: "system development",
    code: "SYSDEV",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
  },
  /**
   * Code: THREAT
   */
  Threat: {
    display: "threat",
    code: "THREAT",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
  },
  /**
   * Code: TRAIN
   */
  Training: {
    display: "training",
    code: "TRAIN",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
  },
  /**
   * Code: TRANSRCH
   */
  TranslationalHealthcareResearch: {
    display: "translational healthcare research",
    code: "TRANSRCH",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
  },
  /**
   * Code: TREAT
   */
  Treatment: {
    display: "treatment",
    code: "TREAT",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
  },
} as const;
