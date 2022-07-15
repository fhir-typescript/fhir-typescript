// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/v3-PurposeOfUse|2014-03-26

/**
 *  Supports communication of purpose of use at a general level.
 */
export const V3PurposeOfUseCodes = {
  /**
   * CAREMGT: To perform one or more operations on information for provision of health care coordination.
   */
  CareManagement: "CAREMGT",
  /**
   * CLINTRCH: To perform one or more operations on information for conducting scientific investigations in accordance with clinical trial protocols to obtain health care knowledge.
   */
  ClinicalTrialResearch: "CLINTRCH",
  /**
   * CLINTRL: To perform health care as part of the clinical trial protocol.
   */
  ClinicalTrial: "CLINTRL",
  /**
   * CLMATTCH: To perform one or more operations on information for provision of additional clinical evidence in support of a request for coverage or payment for health services.
   */
  ClaimAttachment: "CLMATTCH",
  /**
   * COVAUTH: To perform one or more operations on information for conducting prior authorization or predetermination of coverage for services.
   */
  CoverageAuthorization: "COVAUTH",
  /**
   * COVERAGE: To perform one or more operations on information for conducting activities related to coverage under a program or policy.
   */
  CoverageUnderPolicyOrProgram: "COVERAGE",
  /**
   * DISASTER: To perform one or more operations on information used for provision of immediately needed health care to a population of living subjects located in a disaster zone.
   */
  Disaster: "DISASTER",
  /**
   * DONAT: To perform one or more operations on information used for cadaveric organ, eye or tissue donation.
   */
  Donation: "DONAT",
  /**
   * ELIGDTRM: To perform one or more operations on information used for conducting eligibility determination for coverage in a program or policy.  May entail review of financial status or disability assessment.
   */
  EligibilityDetermination: "ELIGDTRM",
  /**
   * ELIGVER: To perform one or more operations on information used for conducting eligibility verification of coverage in a program or policy.  May entail provider contacting coverage source (e.g., government health program such as workers compensation or health plan) for confirmation of enrollment, eligibility for specific services, and any applicable copays.
   */
  EligibilityVerification: "ELIGVER",
  /**
   * ENROLLM: To perform one or more operations on information used for enrolling a covered party in a program or policy.  May entail recording of covered party's and any dependent's demographic information and benefit choices.
   */
  Enrollment: "ENROLLM",
  /**
   * ETREAT: To perform one or more operations on information for provision of immediately needed health care for an emergent condition.
   */
  EmergencyTreatment: "ETREAT",
  /**
   * FAMRQT: To perform one or more operations on information in response to a request by a family member authorized by the patient.
   */
  FamilyRequested: "FAMRQT",
  /**
   * FRAUD: To perform one or more operations on information used for fraud detection and prevention processes.
   */
  Fraud: "FRAUD",
  /**
   * GOV: To perform one or more operations on information used within government processes.
   */
  Government: "GOV",
  /**
   * HACCRED: To perform one or more operations on information for conducting activities related to meeting accreditation criteria.
   */
  HealthAccreditation: "HACCRED",
  /**
   * HCOMPL: To perform one or more operations on information used for conducting activities required to meet a mandate.
   */
  HealthCompliance: "HCOMPL",
  /**
   * HDECD: To perform one or more operations on information used for handling deceased patient matters.
   */
  Decedent: "HDECD",
  /**
   * HDIRECT: To perform one or more operation operations on information used to manage a patient directory.
   * 
   *                         
   *                            Examples: 
   *                         
   * 
   *                         
   *                            facility
   *                            enterprise
   *                            payer
   *                            health information exchange patient directory
   */
  Directory: "HDIRECT",
  /**
   * HLEGAL: To perform one or more operations on information for conducting activities required by legal proceeding.
   */
  Legal: "HLEGAL",
  /**
   * HMARKT: To perform one or more operations on information for marketing services and products related to health care.
   */
  HealthcareMarketing: "HMARKT",
  /**
   * HOPERAT: To perform one or more operations on information used for conducting administrative and contractual activities related to the provision of health care.
   */
  HealthcareOperations: "HOPERAT",
  /**
   * HOUTCOMS: To perform one or more operations on information used for assessing results and comparative effectiveness achieved by health care practices and interventions.
   */
  HealthOutcomeMeasure: "HOUTCOMS",
  /**
   * HPAYMT: To perform one or more operations on information for conducting financial or contractual activities related to payment for provision of health care.
   */
  HealthcarePayment: "HPAYMT",
  /**
   * HPRGRP: To perform one or more operations on information used for conducting activities to meet program accounting requirements.
   */
  HealthProgramReporting: "HPRGRP",
  /**
   * HQUALIMP: To perform one or more operations on information used for conducting administrative activities to improve health care quality.
   */
  HealthQualityImprovement: "HQUALIMP",
  /**
   * HRESCH: To perform one or more operations on information for conducting scientific investigations to obtain health care knowledge.
   */
  HealthcareResearch: "HRESCH",
  /**
   * HSYSADMIN: To perform one or more operations on information to administer the electronic systems used for the delivery of health care.
   */
  HealthSystemAdministration: "HSYSADMIN",
  /**
   * MEMADMIN: To perform one or more operations on information to administer health care coverage to an enrollee under a policy or program.
   */
  MemberAdministration: "MEMADMIN",
  /**
   * PATADMIN: To perform one or more operations on information used for operational activities conducted to administer the delivery of health care to a patient.
   */
  PatientAdministration: "PATADMIN",
  /**
   * PATRQT: To perform one or more operations on information in response to a patient's request.
   */
  PatientRequested: "PATRQT",
  /**
   * PATSFTY: To perform one or more operations on information in processes related to ensuring the safety of health care.
   */
  PatientSafety: "PATSFTY",
  /**
   * PERFMSR: To perform one or more operations on information used for monitoring performance of recommended health care practices and interventions.
   */
  PerformanceMeasure: "PERFMSR",
  /**
   * POPHLTH: To perform one or more operations on information for provision of health care to a population of living subjects, e.g., needle exchange program.
   */
  PopulationHealth: "POPHLTH",
  /**
   * PUBHLTH: To perform one or more operations on information for conducting public health activities, such as the reporting of notifiable conditions.
   */
  PublicHealth: "PUBHLTH",
  /**
   * PurposeOfUse: Reason for performing one or more operations on information, which may be permitted by source system's security policy in accordance with one or more privacy policies and consent directives.
   * 
   *                         
   *                            Usage Notes: The rationale or purpose for an act relating to the management of personal health information, such as collecting personal health information for research or public health purposes.
   */
  PurposeOfUse: "PurposeOfUse",
  /**
   * PWATRNY: To perform one or more operations on information in response to a request by a person appointed as the patient's legal representative.
   */
  PowerOfAttorney: "PWATRNY",
  /**
   * RECORDMGT: To perform one or more operations on information used within the health records management process.
   */
  RecordsManagement: "RECORDMGT",
  /**
   * REMITADV: To perform one or more operations on information about the amount remitted for a health care claim.
   */
  RemittanceAdvice: "REMITADV",
  /**
   * SUPNWK: To perform one or more operations on information in response to a request by a person authorized by the patient.
   */
  SupportNetwork: "SUPNWK",
  /**
   * THREAT: To perform one or more operations on information used to prevent injury or disease to living subjects who may be the target of violence.
   */
  Threat: "THREAT",
  /**
   * TRAIN: To perform one or more operations on information used in training and education.
   */
  Training: "TRAIN",
  /**
   * TREAT: To perform one or more operations on information for provision of health care.
   */
  Treatment: "TREAT",
} as const;

/**
 *  Supports communication of purpose of use at a general level.
 */
export type V3PurposeOfUseCodeType = typeof V3PurposeOfUseCodes[keyof typeof V3PurposeOfUseCodes];
