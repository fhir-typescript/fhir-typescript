/**
 *  Supports communication of purpose of use at a general level.
 */
export declare const V3PurposeOfUseCodes: {
    /**
     * CAREMGT: To perform one or more operations on information for provision of health care coordination.
     */
    readonly CareManagement: "CAREMGT";
    /**
     * CLINTRCH: To perform one or more operations on information for conducting scientific investigations in accordance with clinical trial protocols to obtain health care knowledge.
     */
    readonly ClinicalTrialResearch: "CLINTRCH";
    /**
     * CLINTRL: To perform health care as part of the clinical trial protocol.
     */
    readonly ClinicalTrial: "CLINTRL";
    /**
     * CLMATTCH: To perform one or more operations on information for provision of additional clinical evidence in support of a request for coverage or payment for health services.
     */
    readonly ClaimAttachment: "CLMATTCH";
    /**
     * COVAUTH: To perform one or more operations on information for conducting prior authorization or predetermination of coverage for services.
     */
    readonly CoverageAuthorization: "COVAUTH";
    /**
     * COVERAGE: To perform one or more operations on information for conducting activities related to coverage under a program or policy.
     */
    readonly CoverageUnderPolicyOrProgram: "COVERAGE";
    /**
     * DISASTER: To perform one or more operations on information used for provision of immediately needed health care to a population of living subjects located in a disaster zone.
     */
    readonly Disaster: "DISASTER";
    /**
     * DONAT: To perform one or more operations on information used for cadaveric organ, eye or tissue donation.
     */
    readonly Donation: "DONAT";
    /**
     * ELIGDTRM: To perform one or more operations on information used for conducting eligibility determination for coverage in a program or policy.  May entail review of financial status or disability assessment.
     */
    readonly EligibilityDetermination: "ELIGDTRM";
    /**
     * ELIGVER: To perform one or more operations on information used for conducting eligibility verification of coverage in a program or policy.  May entail provider contacting coverage source (e.g., government health program such as workers compensation or health plan) for confirmation of enrollment, eligibility for specific services, and any applicable copays.
     */
    readonly EligibilityVerification: "ELIGVER";
    /**
     * ENROLLM: To perform one or more operations on information used for enrolling a covered party in a program or policy.  May entail recording of covered party's and any dependent's demographic information and benefit choices.
     */
    readonly Enrollment: "ENROLLM";
    /**
     * ETREAT: To perform one or more operations on information for provision of immediately needed health care for an emergent condition.
     */
    readonly EmergencyTreatment: "ETREAT";
    /**
     * FAMRQT: To perform one or more operations on information in response to a request by a family member authorized by the patient.
     */
    readonly FamilyRequested: "FAMRQT";
    /**
     * FRAUD: To perform one or more operations on information used for fraud detection and prevention processes.
     */
    readonly Fraud: "FRAUD";
    /**
     * GOV: To perform one or more operations on information used within government processes.
     */
    readonly Government: "GOV";
    /**
     * HACCRED: To perform one or more operations on information for conducting activities related to meeting accreditation criteria.
     */
    readonly HealthAccreditation: "HACCRED";
    /**
     * HCOMPL: To perform one or more operations on information used for conducting activities required to meet a mandate.
     */
    readonly HealthCompliance: "HCOMPL";
    /**
     * HDECD: To perform one or more operations on information used for handling deceased patient matters.
     */
    readonly Decedent: "HDECD";
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
    readonly Directory: "HDIRECT";
    /**
     * HLEGAL: To perform one or more operations on information for conducting activities required by legal proceeding.
     */
    readonly Legal: "HLEGAL";
    /**
     * HMARKT: To perform one or more operations on information for marketing services and products related to health care.
     */
    readonly HealthcareMarketing: "HMARKT";
    /**
     * HOPERAT: To perform one or more operations on information used for conducting administrative and contractual activities related to the provision of health care.
     */
    readonly HealthcareOperations: "HOPERAT";
    /**
     * HOUTCOMS: To perform one or more operations on information used for assessing results and comparative effectiveness achieved by health care practices and interventions.
     */
    readonly HealthOutcomeMeasure: "HOUTCOMS";
    /**
     * HPAYMT: To perform one or more operations on information for conducting financial or contractual activities related to payment for provision of health care.
     */
    readonly HealthcarePayment: "HPAYMT";
    /**
     * HPRGRP: To perform one or more operations on information used for conducting activities to meet program accounting requirements.
     */
    readonly HealthProgramReporting: "HPRGRP";
    /**
     * HQUALIMP: To perform one or more operations on information used for conducting administrative activities to improve health care quality.
     */
    readonly HealthQualityImprovement: "HQUALIMP";
    /**
     * HRESCH: To perform one or more operations on information for conducting scientific investigations to obtain health care knowledge.
     */
    readonly HealthcareResearch: "HRESCH";
    /**
     * HSYSADMIN: To perform one or more operations on information to administer the electronic systems used for the delivery of health care.
     */
    readonly HealthSystemAdministration: "HSYSADMIN";
    /**
     * MEMADMIN: To perform one or more operations on information to administer health care coverage to an enrollee under a policy or program.
     */
    readonly MemberAdministration: "MEMADMIN";
    /**
     * PATADMIN: To perform one or more operations on information used for operational activities conducted to administer the delivery of health care to a patient.
     */
    readonly PatientAdministration: "PATADMIN";
    /**
     * PATRQT: To perform one or more operations on information in response to a patient's request.
     */
    readonly PatientRequested: "PATRQT";
    /**
     * PATSFTY: To perform one or more operations on information in processes related to ensuring the safety of health care.
     */
    readonly PatientSafety: "PATSFTY";
    /**
     * PERFMSR: To perform one or more operations on information used for monitoring performance of recommended health care practices and interventions.
     */
    readonly PerformanceMeasure: "PERFMSR";
    /**
     * POPHLTH: To perform one or more operations on information for provision of health care to a population of living subjects, e.g., needle exchange program.
     */
    readonly PopulationHealth: "POPHLTH";
    /**
     * PUBHLTH: To perform one or more operations on information for conducting public health activities, such as the reporting of notifiable conditions.
     */
    readonly PublicHealth: "PUBHLTH";
    /**
     * PurposeOfUse: Reason for performing one or more operations on information, which may be permitted by source system's security policy in accordance with one or more privacy policies and consent directives.
     *
     *
     *                            Usage Notes: The rationale or purpose for an act relating to the management of personal health information, such as collecting personal health information for research or public health purposes.
     */
    readonly PurposeOfUse: "PurposeOfUse";
    /**
     * PWATRNY: To perform one or more operations on information in response to a request by a person appointed as the patient's legal representative.
     */
    readonly PowerOfAttorney: "PWATRNY";
    /**
     * RECORDMGT: To perform one or more operations on information used within the health records management process.
     */
    readonly RecordsManagement: "RECORDMGT";
    /**
     * REMITADV: To perform one or more operations on information about the amount remitted for a health care claim.
     */
    readonly RemittanceAdvice: "REMITADV";
    /**
     * SUPNWK: To perform one or more operations on information in response to a request by a person authorized by the patient.
     */
    readonly SupportNetwork: "SUPNWK";
    /**
     * THREAT: To perform one or more operations on information used to prevent injury or disease to living subjects who may be the target of violence.
     */
    readonly Threat: "THREAT";
    /**
     * TRAIN: To perform one or more operations on information used in training and education.
     */
    readonly Training: "TRAIN";
    /**
     * TREAT: To perform one or more operations on information for provision of health care.
     */
    readonly Treatment: "TREAT";
};
/**
 *  Supports communication of purpose of use at a general level.
 */
export declare type V3PurposeOfUseCodeType = typeof V3PurposeOfUseCodes[keyof typeof V3PurposeOfUseCodes];
//# sourceMappingURL=V3PurposeOfUseCodes.d.ts.map