import { CodingArgs } from '../fhir/Coding.js';
/**
 *  Supports communication of purpose of use at a general level.
 */
export declare type V3PurposeOfUseCodingType = {
    /**
     * CAREMGT: To perform one or more operations on information for provision of health care coordination.
     */
    CareManagement: CodingArgs;
    /**
     * CLINTRCH: To perform one or more operations on information for conducting scientific investigations in accordance with clinical trial protocols to obtain health care knowledge.
     */
    ClinicalTrialResearch: CodingArgs;
    /**
     * CLINTRL: To perform health care as part of the clinical trial protocol.
     */
    ClinicalTrial: CodingArgs;
    /**
     * CLMATTCH: To perform one or more operations on information for provision of additional clinical evidence in support of a request for coverage or payment for health services.
     */
    ClaimAttachment: CodingArgs;
    /**
     * COVAUTH: To perform one or more operations on information for conducting prior authorization or predetermination of coverage for services.
     */
    CoverageAuthorization: CodingArgs;
    /**
     * COVERAGE: To perform one or more operations on information for conducting activities related to coverage under a program or policy.
     */
    CoverageUnderPolicyOrProgram: CodingArgs;
    /**
     * DISASTER: To perform one or more operations on information used for provision of immediately needed health care to a population of living subjects located in a disaster zone.
     */
    Disaster: CodingArgs;
    /**
     * DONAT: To perform one or more operations on information used for cadaveric organ, eye or tissue donation.
     */
    Donation: CodingArgs;
    /**
     * ELIGDTRM: To perform one or more operations on information used for conducting eligibility determination for coverage in a program or policy.  May entail review of financial status or disability assessment.
     */
    EligibilityDetermination: CodingArgs;
    /**
     * ELIGVER: To perform one or more operations on information used for conducting eligibility verification of coverage in a program or policy.  May entail provider contacting coverage source (e.g., government health program such as workers compensation or health plan) for confirmation of enrollment, eligibility for specific services, and any applicable copays.
     */
    EligibilityVerification: CodingArgs;
    /**
     * ENROLLM: To perform one or more operations on information used for enrolling a covered party in a program or policy.  May entail recording of covered party's and any dependent's demographic information and benefit choices.
     */
    Enrollment: CodingArgs;
    /**
     * ETREAT: To perform one or more operations on information for provision of immediately needed health care for an emergent condition.
     */
    EmergencyTreatment: CodingArgs;
    /**
     * FAMRQT: To perform one or more operations on information in response to a request by a family member authorized by the patient.
     */
    FamilyRequested: CodingArgs;
    /**
     * FRAUD: To perform one or more operations on information used for fraud detection and prevention processes.
     */
    Fraud: CodingArgs;
    /**
     * GOV: To perform one or more operations on information used within government processes.
     */
    Government: CodingArgs;
    /**
     * HACCRED: To perform one or more operations on information for conducting activities related to meeting accreditation criteria.
     */
    HealthAccreditation: CodingArgs;
    /**
     * HCOMPL: To perform one or more operations on information used for conducting activities required to meet a mandate.
     */
    HealthCompliance: CodingArgs;
    /**
     * HDECD: To perform one or more operations on information used for handling deceased patient matters.
     */
    Decedent: CodingArgs;
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
    Directory: CodingArgs;
    /**
     * HLEGAL: To perform one or more operations on information for conducting activities required by legal proceeding.
     */
    Legal: CodingArgs;
    /**
     * HMARKT: To perform one or more operations on information for marketing services and products related to health care.
     */
    HealthcareMarketing: CodingArgs;
    /**
     * HOPERAT: To perform one or more operations on information used for conducting administrative and contractual activities related to the provision of health care.
     */
    HealthcareOperations: CodingArgs;
    /**
     * HOUTCOMS: To perform one or more operations on information used for assessing results and comparative effectiveness achieved by health care practices and interventions.
     */
    HealthOutcomeMeasure: CodingArgs;
    /**
     * HPAYMT: To perform one or more operations on information for conducting financial or contractual activities related to payment for provision of health care.
     */
    HealthcarePayment: CodingArgs;
    /**
     * HPRGRP: To perform one or more operations on information used for conducting activities to meet program accounting requirements.
     */
    HealthProgramReporting: CodingArgs;
    /**
     * HQUALIMP: To perform one or more operations on information used for conducting administrative activities to improve health care quality.
     */
    HealthQualityImprovement: CodingArgs;
    /**
     * HRESCH: To perform one or more operations on information for conducting scientific investigations to obtain health care knowledge.
     */
    HealthcareResearch: CodingArgs;
    /**
     * HSYSADMIN: To perform one or more operations on information to administer the electronic systems used for the delivery of health care.
     */
    HealthSystemAdministration: CodingArgs;
    /**
     * MEMADMIN: To perform one or more operations on information to administer health care coverage to an enrollee under a policy or program.
     */
    MemberAdministration: CodingArgs;
    /**
     * PATADMIN: To perform one or more operations on information used for operational activities conducted to administer the delivery of health care to a patient.
     */
    PatientAdministration: CodingArgs;
    /**
     * PATRQT: To perform one or more operations on information in response to a patient's request.
     */
    PatientRequested: CodingArgs;
    /**
     * PATSFTY: To perform one or more operations on information in processes related to ensuring the safety of health care.
     */
    PatientSafety: CodingArgs;
    /**
     * PERFMSR: To perform one or more operations on information used for monitoring performance of recommended health care practices and interventions.
     */
    PerformanceMeasure: CodingArgs;
    /**
     * POPHLTH: To perform one or more operations on information for provision of health care to a population of living subjects, e.g., needle exchange program.
     */
    PopulationHealth: CodingArgs;
    /**
     * PUBHLTH: To perform one or more operations on information for conducting public health activities, such as the reporting of notifiable conditions.
     */
    PublicHealth: CodingArgs;
    /**
     * PurposeOfUse: Reason for performing one or more operations on information, which may be permitted by source system's security policy in accordance with one or more privacy policies and consent directives.
     *
     *
     *                            Usage Notes: The rationale or purpose for an act relating to the management of personal health information, such as collecting personal health information for research or public health purposes.
     */
    PurposeOfUse: CodingArgs;
    /**
     * PWATRNY: To perform one or more operations on information in response to a request by a person appointed as the patient's legal representative.
     */
    PowerOfAttorney: CodingArgs;
    /**
     * RECORDMGT: To perform one or more operations on information used within the health records management process.
     */
    RecordsManagement: CodingArgs;
    /**
     * REMITADV: To perform one or more operations on information about the amount remitted for a health care claim.
     */
    RemittanceAdvice: CodingArgs;
    /**
     * SUPNWK: To perform one or more operations on information in response to a request by a person authorized by the patient.
     */
    SupportNetwork: CodingArgs;
    /**
     * THREAT: To perform one or more operations on information used to prevent injury or disease to living subjects who may be the target of violence.
     */
    Threat: CodingArgs;
    /**
     * TRAIN: To perform one or more operations on information used in training and education.
     */
    Training: CodingArgs;
    /**
     * TREAT: To perform one or more operations on information for provision of health care.
     */
    Treatment: CodingArgs;
};
/**
 *  Supports communication of purpose of use at a general level.
 */
export declare const V3PurposeOfUseCodings: V3PurposeOfUseCodingType;
//# sourceMappingURL=V3PurposeOfUseCodings.d.ts.map