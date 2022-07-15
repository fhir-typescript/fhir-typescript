/**
 * A single value set for all security labels defined by FHIR.
 */
export declare const SecurityLabelsCodes: {
    /**
     * _ActUSPrivacyLaw: Definition: A jurisdictional mandate in the U.S. relating to privacy.
     *
     *
     *                            Usage Note: ActPrivacyLaw codes may be associated with an Act or a Role to indicate the legal provision to which the assignment of an Act.confidentialityCode or Role.confidentialtyCode complies.  May be used to further specify rationale for assignment of other ActPrivacyPolicy codes in the US realm, e.g., ETH and 42CFRPart2 can be differentiated from ETH and Title38Part1.
     */
    readonly ActUSPrivacyLaw: "_ActUSPrivacyLaw";
    /**
     * 42CFRPart2: 42 CFR Part 2 stipulates the right of an individual who has applied for or been given diagnosis or treatment for alcohol or drug abuse at a federally assisted program.
     *
     *
     *                            Definition: Non-disclosure of health information relating to health care paid for by a federally assisted substance abuse program without patient consent.
     *
     *
     *                            Usage Note: May be associated with an Act or a Role to indicate the legal provision to which the assignment of an Act.confidentialityCode or Role.confidentialityCode complies.
     */
    readonly VAL42CFRPart2: "42CFRPart2";
    /**
     * ABSTRED: Security metadata observation values used to indicate the use of a more abstract version of the content, e.g., replacing exact value of an age or date field with a range, or remove the left digits of a credit card number or SSN.
     */
    readonly Abstracted: "ABSTRED";
    /**
     * ADOL: Policy for handling information related to an adolescent, which will be afforded heightened confidentiality per applicable organizational or jurisdictional policy.  An enterprise may have a policy that requires that adolescent patient information be provided heightened confidentiality.  Information deemed sensitive typically includes health information and patient role information including patient status, demographics, next of kin, and location.
     *
     *
     *                            Usage Note: For use within an enterprise in which an adolescent is the information subject.  If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law rather than or in addition to this more generic code.
     */
    readonly AdolescentInformationSensitivity: "ADOL";
    /**
     * AGGRED: Security metadata observation values used to indicate the use of an algorithmic combination of actual values with the result of an aggregate function, e.g., average, sum, or count in order to limit disclosure of an IT resource (data, information object, service, or system capability) to the minimum necessary.
     */
    readonly Aggregated: "AGGRED";
    /**
     * ANONY: Custodian system must remove any information that could result in identifying the information subject.
     */
    readonly Anonymize: "ANONY";
    /**
     * ANONYED: Security metadata observation value conveying the alteration integrity of an IT resource (data, information object, service, or system capability) by used to indicate the mechanism by which software systems can strip portions of the resource that could allow the identification of the source of the information or the information subject.  No key to relink the data is retained.
     */
    readonly Anonymized: "ANONYED";
    /**
     * AOD: Custodian system must make available to an information subject upon request an accounting of certain disclosures of the individualâ€™s protected health information over a period of time.  Policy may dictate that the accounting include information about the information disclosed,  the date of disclosure, the identification of the receiver, the purpose of the disclosure, the time in which the disclosing entity must provide a response and the time period for which accountings of disclosure can be requested.
     */
    readonly AccountingOfDisclosure: "AOD";
    /**
     * AUDIT: Custodian system must monitor systems to ensure that all users are authorized to operate on information objects.
     */
    readonly Audit: "AUDIT";
    /**
     * AUDTR: Custodian system must monitor and maintain retrievable log for each user and operation on information.
     */
    readonly AuditTrail: "AUDTR";
    /**
     * B: Policy for handling trade secrets such as financial information or intellectual property, which will be afforded heightened confidentiality.  Description:  Since the service class can represent knowledge structures that may be considered a trade or business secret, there is sometimes (though rarely) the need to flag those items as of business level confidentiality.
     *
     *
     *                            Usage Notes: No patient related information may ever be of this confidentiality level.   If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law rather than or in addition to this more generic code.
     */
    readonly BusinessInformationSensitivity: "B";
    /**
     * CAREMGT: To perform one or more operations on information for provision of health care coordination.
     */
    readonly CareManagement: "CAREMGT";
    /**
     * CEL: Policy for handling information related to a celebrity (people of public interest (VIP), which will be afforded heightened confidentiality.  Celebrities are people of public interest (VIP) about whose information an enterprise may have a policy that requires heightened confidentiality.  Information deemed sensitive may include health information and patient role information including patient status, demographics, next of kin, and location.
     *
     *
     *                            Usage Note:  For use within an enterprise in which the information subject is deemed a celebrity or very important person.  If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law rather than or in addition to this more generic code.
     */
    readonly CelebrityInformationSensitivity: "CEL";
    /**
     * CLINAST: Security provenance metadata observation value used to indicate that an IT resource (data, information object, service, or system capability) was asserted by a clinician.
     */
    readonly ClinicianAsserted: "CLINAST";
    /**
     * CLINRPT: Security provenance metadata observation value used to indicate that an IT resource (data, information object, service, or system capability) was reported by a clinician.
     */
    readonly ClinicianReported: "CLINRPT";
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
     * CommonRule: U.S. Federal regulations governing the protection of human subjects in research (codified at Subpart A of 45 CFR part 46) that has been adopted by 15 U.S. Federal departments and agencies in an effort to promote uniformity, understanding, and compliance with human subject protections. Existing regulations governing the protection of human subjects in Food and Drug Administration (FDA)-regulated research (21 CFR parts 50, 56, 312, and 812) are separate from the Common Rule but include similar requirements.
     *
     *
     *                            Definition: U.S. federal laws governing research-related privacy policies.
     *
     *
     *                            Usage Note: May be associated with an Act or a Role to indicate the legal provision to which the assignment of an Act.confidentialityCode or Role.confidentialtyCode complies.
     */
    readonly CommonRule: "CommonRule";
    /**
     * COMPT: This is the healthcare analog to the US Intelligence Community's concept of a Special Access Program.  Compartment codes may be used in as a field value in an initiator's clearance to indicate permission to access and use an IT Resource with a security label having the same compartment value in security category label field.
     *
     *                         Map: Aligns with ISO 2382-8 definition of Compartment - "A division of data into isolated blocks with separate security controls for the purpose of reducing risk."
     */
    readonly Compartment: "COMPT";
    /**
     * COVAUTH: To perform one or more operations on information for conducting prior authorization or predetermination of coverage for services.
     */
    readonly CoverageAuthorization: "COVAUTH";
    /**
     * COVERAGE: To perform one or more operations on information for conducting activities related to coverage under a program or policy.
     */
    readonly CoverageUnderPolicyOrProgram: "COVERAGE";
    /**
     * CPLYCC: Custodian security system must retrieve, evaluate, and comply with the information handling directions of the Confidentiality Code associated with an information target.
     */
    readonly ComplyWithConfidentialityCode: "CPLYCC";
    /**
     * CPLYCD: Custodian security system must retrieve, evaluate, and comply with applicable information subject consent directives.
     */
    readonly ComplyWithConsentDirective: "CPLYCD";
    /**
     * CPLYJPP: Custodian security system must retrieve, evaluate, and comply with applicable jurisdictional privacy policies associated with the target information.
     */
    readonly ComplyWithJurisdictionalPrivacyPolicy: "CPLYJPP";
    /**
     * CPLYOPP: Custodian security system must retrieve, evaluate, and comply with applicable organizational privacy policies associated with the target information.
     */
    readonly ComplyWithOrganizationalPrivacyPolicy: "CPLYOPP";
    /**
     * CPLYOSP: Custodian security system must retrieve, evaluate, and comply with the organizational security policies associated with the target information.
     */
    readonly ComplyWithOrganizationalSecurityPolicy: "CPLYOSP";
    /**
     * CPLYPOL: Custodian security system must retrieve, evaluate, and comply with applicable policies associated with the target information.
     */
    readonly ComplyWithPolicy: "CPLYPOL";
    /**
     * CRYTOHASH: Security metadata observation value used to indicate the mechanism by which software systems can establish that data was not modified in transit.
     *
     *
     *                            Rationale: This definition is intended to align with the ISO 22600-2 3.3.19 definition of cryptographic checkvalue: Information which is derived by performing a cryptographic transformation (see cryptography) on the data unit.  The derivation of the checkvalue may be performed in one or more steps and is a result of a mathematical function of the key and a data unit. It is usually used to check the integrity of a data unit.
     *
     *
     *                            Examples:
     *
     *
     *
     *                            SHA-1
     *                            SHA-2 (Secure Hash Algorithm)
     */
    readonly CryptographicHashFunction: "CRYTOHASH";
    /**
     * DECLASSIFYLABEL: Custodian security system must declassify information assigned security labels by instantiating a new version of the classified information so as to break the binding of the classifying security label when assigning a new security label that marks the information as unclassified in accordance with applicable jurisdictional privacy policies associated with the target information. The system must retain an immutable record of the previous assignment and binding.
     */
    readonly DeclassifySecurityLabel: "DECLASSIFYLABEL";
    /**
     * DEID: Custodian system must strip information of data that would allow the identification of the source of the information or the information subject.
     */
    readonly Deidentify: "DEID";
    /**
     * DELAU: Custodian system must remove target information from access after use.
     */
    readonly DeleteAfterUse: "DELAU";
    /**
     * DEMO: Policy for handling all demographic information about an information subject, which will be afforded heightened confidentiality. Policies may govern sensitivity of information related to all demographic about an information subject, the disclosure of which could impact the privacy, well-being, or safety of that subject.
     *
     *
     *                            Usage Note: If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law rather than or in addition to this more generic code.
     */
    readonly AllDemographicInformationSensitivity: "DEMO";
    /**
     * DEVAST: Security provenance metadata observation value used to indicate that an IT resource (data, information object, service, or system capability) was asserted by a device.
     */
    readonly DeviceAsserted: "DEVAST";
    /**
     * DEVRPT: Security provenance metadata observation value used to indicate that an IT resource (data, information object, service, or system capability) was reported by a device.
     */
    readonly DeviceReported: "DEVRPT";
    /**
     * DIA: Policy for handling information related to a diagnosis, health condition or health problem, which will be afforded heightened confidentiality.  Diagnostic, health condition or health problem related information may be deemed sensitive by organizational policy, and require heightened confidentiality.
     *
     *
     *                            Usage Note: For use within an enterprise that provides heightened confidentiality to  diagnostic, health condition or health problem related information deemed sensitive.   If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law rather than or in addition to this more generic code.
     */
    readonly DiagnosisInformationSensitivity: "DIA";
    /**
     * DIGSIG: Security metadata observation value used to indicate the mechanism by which software systems use digital signature to establish that data has not been modified.
     *
     *
     *                            Rationale: This definition is intended to align with the ISO 22600-2 3.3.26 definition of digital signature:  Data appended to, or a cryptographic transformation (see cryptography) of, a data unit that allows a recipient of the data unit to prove the source and integrity of the data unit and protect against forgery e.g., by the recipient.
     */
    readonly DigitalSignature: "DIGSIG";
    /**
     * DISASTER: To perform one or more operations on information used for provision of immediately needed health care to a population of living subjects located in a disaster zone.
     */
    readonly Disaster: "DISASTER";
    /**
     * DOB: Policy for handling information related to an information subject's date of birth, which will be afforded heightened confidentiality.Policies may govern sensitivity of information related to an information subject's date of birth, the disclosure of which could impact the privacy, well-being, or safety of that subject.
     *
     *
     *                            Usage Note: If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law rather than or in addition to this more generic code.
     */
    readonly DateOfBirthInformationSensitivity: "DOB";
    /**
     * DONAT: To perform one or more operations on information used for cadaveric organ, eye or tissue donation.
     */
    readonly Donation: "DONAT";
    /**
     * DOWNGRDLABEL: Custodian security system must downgrade information assigned security labels by instantiating a new version of the classified information so as to break the binding of the classifying security label when assigning a new security label that marks the information as classified at a less protected level in accordance with applicable jurisdictional privacy policies associated with the target information. The system must retain an immutable record of the previous assignment and binding.
     */
    readonly DowngradeSecurityLabel: "DOWNGRDLABEL";
    /**
     * DRGIS: Policy for handling information related to a drug, which will be afforded heightened confidentiality. Drug information may be deemed sensitive by organizational policy, and require heightened confidentiality.
     *
     *
     *                            Usage Note: For use within an enterprise that provides heightened confidentiality to drug information deemed sensitive.   If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law rather than or in addition to this more generic code.
     */
    readonly DrugInformationSensitivity: "DRGIS";
    /**
     * DRIVLABEL: Custodian security system must assign and bind security labels derived from compilations of information by aggregation or disaggregation in order to classify information compiled in the information systems under its control for collection, access, use and disclosure in accordance with applicable jurisdictional privacy policies associated with the target information. The system must retain an immutable record of the previous assignment and binding.
     */
    readonly DeriveSecurityLabel: "DRIVLABEL";
    /**
     * ELIGDTRM: To perform one or more operations on information used for conducting eligibility determination for coverage in a program or policy.  May entail review of financial status or disability assessment.
     */
    readonly EligibilityDetermination: "ELIGDTRM";
    /**
     * ELIGVER: To perform one or more operations on information used for conducting eligibility verification of coverage in a program or policy.  May entail provider contacting coverage source (e.g., government health program such as workers compensation or health plan) for confirmation of enrollment, eligibility for specific services, and any applicable copays.
     */
    readonly EligibilityVerification: "ELIGVER";
    /**
     * EMP: Policy for handling information related to an employee, which will be afforded heightened confidentiality. When a patient is an employee, an enterprise may have a policy that requires heightened confidentiality.  Information deemed sensitive typically includes health information and patient role information including patient status, demographics, next of kin, and location.
     *
     *
     *                            Usage Note: Policy for handling information related to an employee, which will be afforded heightened confidentiality.  Description:  When a patient is an employee, an enterprise may have a policy that requires heightened confidentiality.  Information deemed sensitive typically includes health information and patient role information including patient status, demographics, next of kin, and location.
     */
    readonly EmployeeInformationSensitivity: "EMP";
    /**
     * EMPL: Policy for handling information related to an employer which is deemed classified to protect an employee who is the information subject, and which will be afforded heightened confidentiality.  Description:  Policies may govern sensitivity of information related to an employer, such as law enforcement or national security, the identity of which could impact the privacy, well-being, or safety of an information subject who is an employee.
     *
     *
     *                            Usage Notes: If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law rather than or in addition to this more generic code.
     */
    readonly EmployerInformationSensitivity: "EMPL";
    /**
     * ENCRYPT: Custodian system must render information unreadable by algorithmically transforming plaintext into ciphertext.
     *
     *
     *
     *
     *                            Usage Notes: A mathematical transposition of a file or data stream so that it cannot be deciphered at the receiving end without the proper key. Encryption is a security feature that assures that only the parties who are supposed to be participating in a videoconference or data transfer are able to do so. It can include a password, public and private keys, or a complex combination of all.  (Per Infoway.)
     */
    readonly Encrypt: "ENCRYPT";
    /**
     * ENCRYPTR: Custodian system must render information unreadable and unusable by algorithmically transforming plaintext into ciphertext when "at rest" or in storage.
     */
    readonly EncryptAtRest: "ENCRYPTR";
    /**
     * ENCRYPTT: Custodian system must render information unreadable and unusable by algorithmically transforming plaintext into ciphertext while "in transit" or being transported by any means.
     */
    readonly EncryptInTransit: "ENCRYPTT";
    /**
     * ENCRYPTU: Custodian system must render information unreadable and unusable by algorithmically transforming plaintext into ciphertext while in use such that operations permitted on the target information are limited by the license granted to the end user.
     */
    readonly EncryptInUse: "ENCRYPTU";
    /**
     * ENROLLM: To perform one or more operations on information used for enrolling a covered party in a program or policy.  May entail recording of covered party's and any dependent's demographic information and benefit choices.
     */
    readonly Enrollment: "ENROLLM";
    /**
     * ETH: Policy for handling alcohol or drug-abuse information, which will be afforded heightened confidentiality.  Information handling protocols based on organizational policies related to alcohol or drug-abuse information that is deemed sensitive.
     *
     *
     *                            Usage Note: If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law rather than or in addition to this more generic code.
     */
    readonly SubstanceAbuseInformationSensitivity: "ETH";
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
     * GDIS: Policy for handling genetic disease information, which will be afforded heightened confidentiality. Information handling protocols based on organizational policies related to genetic disease information that is deemed sensitive.
     *
     *
     *                            Usage Note: If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law rather than or in addition to this more generic code.
     */
    readonly GeneticDiseaseInformationSensitivity: "GDIS";
    /**
     * GENDER: Policy for handling information related to an information subject's gender and sexual orientation, which will be afforded heightened confidentiality.  Policies may govern sensitivity of information related to an information subject's gender and sexual orientation, the disclosure of which could impact the privacy, well-being, or safety of that subject.
     *
     *
     *                            Usage Note: If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law rather than or in addition to this more generic code.
     */
    readonly GenderAndSexualOrientationInformationSensitivity: "GENDER";
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
     * HCPAST: Security provenance metadata observation value used to indicate that an IT resource (data, information object, service, or system capability) was asserted by a healthcare professional.
     */
    readonly HealthcareProfessionalAsserted: "HCPAST";
    /**
     * HCPRPT: Security provenance metadata observation value used to indicate that an IT resource (data, information object, service, or system capability) was reported by a healthcare professional.
     */
    readonly HealthcareProfessionalReported: "HCPRPT";
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
     * HIPAANOPP: The U.S. Public Law 104-191 Health Insurance Portability and Accountability Act (HIPAA) Privacy Rule (45 CFR Part 164 Subpart E) permits access, use and disclosure of certain personal health information (PHI as defined under the law) for purposes of Treatment, Payment, and Operations, and requires that the provider ask that patients acknowledge the Provider's Notice of Privacy Practices as permitted conduct under the law.
     *
     *
     *                            Definition: Notification of HIPAA Privacy Practices.
     *
     *
     *                            Usage Note: May be associated with an Act or a Role to indicate the legal provision to which the assignment of an Act.confidentialityCode or Role.confidentialtyCode complies.
     */
    readonly HIPAANoticeOfPrivacyPractices: "HIPAANOPP";
    /**
     * HIPAAPsyNotes: The U.S. Public Law 104-191 Health Insurance Portability and Accountability Act (HIPAA) Privacy Rule (45 CFR Part 164 Section 164.508) requires authorization for certain uses and disclosure of psychotherapy notes.
     *
     *
     *                            Definition: Authorization that must be obtained for disclosure of psychotherapy notes.
     *
     *
     *                            Usage Note: May be associated with an Act or a Role to indicate the legal provision to which the assignment of an Act.confidentialityCode or Role.confidentialityCode complies.
     */
    readonly HIPAAPsychotherapyNotes: "HIPAAPsyNotes";
    /**
     * HIPAASelfPay: Section 13405(a) of the Health Information Technology for Economic and Clinical Health Act (HITECH) stipulates the right of an individual to have disclosures regarding certain health care items or services for which the individual pays out of pocket in full restricted from a health plan.
     *
     *
     *                            Definition: Non-disclosure of health information to a health plan relating to health care items or services for which an individual pays out of pocket in full.
     *
     *
     *                            Usage Note: May be associated with an Act or a Role to indicate the legal provision to which the assignment of an Act.confidentialityCode or Role.confidentialityCode complies.
     */
    readonly HIPAASelfPay: "HIPAASelfPay";
    /**
     * HIV: Policy for handling HIV or AIDS information, which will be afforded heightened confidentiality. Information handling protocols based on organizational policies related to HIV or AIDS information that is deemed sensitive.
     *
     *
     *                            Usage Note: If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law rather than or in addition to this more generic code.
     */
    readonly HIVAIDSInformationSensitivity: "HIV";
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
     * HRCOMPT: A security category label field value, which indicates that access and use of an IT resource is restricted to members of human resources department or workflow.
     */
    readonly HumanResourceCompartment: "HRCOMPT";
    /**
     * HRELIABLE: Security metadata observation value used to indicate that the veracity or trustworthiness of an IT resource (data, information object, service, or system capability) for a specified purpose of use is perceived to be or deemed by policy to be very high.
     */
    readonly HighlyReliable: "HRELIABLE";
    /**
     * HRESCH: To perform one or more operations on information for conducting scientific investigations to obtain health care knowledge.
     */
    readonly HealthcareResearch: "HRESCH";
    /**
     * HSYSADMIN: To perform one or more operations on information to administer the electronic systems used for the delivery of health care.
     */
    readonly HealthSystemAdministration: "HSYSADMIN";
    /**
     * HUAPRV: Custodian system must require human review and approval for permission requested.
     */
    readonly HumanApproval: "HUAPRV";
    /**
     * L: Definition: Privacy metadata indicating that the information has been de-identified, and there are mitigating circumstances that prevent re-identification, which minimize risk of harm from unauthorized disclosure.  The information requires protection to maintain low sensitivity.
     *
     *
     *                            Examples: Includes anonymized, pseudonymized, or non-personally identifiable information such as HIPAA limited data sets.
     *
     *
     *                            Map: No clear map to ISO 13606-4 Sensitivity Level (1) Care Management:   RECORD_COMPONENTs that might need to be accessed by a wide range of administrative staff to manage the subject of care's access to health services.
     *
     *
     *                            Usage Note: This metadata indicates the receiver may have an obligation to comply with a data use agreement.
     */
    readonly Low: "L";
    /**
     * LABEL: Custodian security system must assign and bind security labels in order to classify information created in the information systems under its control for collection, access, use and disclosure in accordance with applicable jurisdictional privacy policies associated with the target information. The system must retain an immutable record of the assignment and binding.
     *
     *
     *                            Usage Note: In security systems, security policy label assignments do not change, they may supersede prior assignments, and such reassignments are always tracked for auditing and other purposes.
     */
    readonly AssignSecurityLabel: "LABEL";
    /**
     * LIVARG: Policy for handling information related to an information subject's living arrangement, which will be afforded heightened confidentiality.  Policies may govern sensitivity of information related to an information subject's living arrangement, the disclosure of which could impact the privacy, well-being, or safety of that subject.
     *
     *
     *                            Usage Note: If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law rather than or in addition to this more generic code.
     */
    readonly LivingArrangementInformationSensitivity: "LIVARG";
    /**
     * LOCIS: Policy for handling information related to the location of the information subject, which will be afforded heightened confidentiality.  Description:  Policies may govern sensitivity of information related to the location of the information subject, the disclosure of which could impact the privacy, well-being, or safety of that subject.
     *
     *
     *                            Usage Notes: If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law rather than or in addition to this more generic code.
     */
    readonly LocationInformationSensitivity: "LOCIS";
    /**
     * M: Definition: Privacy metadata indicating moderately sensitive information, which presents moderate risk of harm if disclosed without authorization.
     *
     *
     *                            Examples: Includes allergies of non-sensitive nature used inform food service; health information a patient authorizes to be used for marketing, released to a bank for a health credit card or savings account; or information in personal health record systems that are not governed under health privacy laws.
     *
     *
     *                            Map: Partial Map to ISO 13606-4 Sensitivity Level (2) Clinical Management:  Less sensitive RECORD_COMPONENTs that might need to be accessed by a wider range of personnel not all of whom are actively caring for the patient (e.g. radiology staff).
     *
     *
     *                            Usage Note: This metadata indicates that the receiver may be obligated to comply with the receiver's terms of use or privacy policies.
     */
    readonly Moderate: "M";
    /**
     * MAPPED: Security metadata observation value used to indicate that the IT resource semantic content has been transformed from one encoding to another.
     *
     *
     *                            Usage Note: "MAP" code does not indicate the semantic fidelity of the transformed content.
     *
     *                         To indicate semantic fidelity for maps of HL7 to other code systems, this security alteration integrity observation may be further specified using an Act valued with Value Set: MapRelationship (2.16.840.1.113883.1.11.11052).
     *
     *                         Semantic fidelity of the mapped IT Resource may also be indicated using a SecurityIntegrityConfidenceObservation.
     */
    readonly Mapped: "MAPPED";
    /**
     * MARST: Policy for handling information related to an information subject's marital status, which will be afforded heightened confidentiality. Policies may govern sensitivity of information related to an information subject's marital status, the disclosure of which could impact the privacy, well-being, or safety of that subject.
     *
     *
     *                            Usage Note: If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law rather than or in addition to this more generic code.
     */
    readonly MaritalStatusInformationSensitivity: "MARST";
    /**
     * MASK: Custodian system must render information unreadable and unusable by algorithmically transforming plaintext into ciphertext.  User may be provided a key to decrypt per license or "shared secret".
     */
    readonly Mask: "MASK";
    /**
     * MASKED: Security metadata observation value conveying the alteration integrity of an IT resource (data, information object, service, or system capability) by indicating the mechanism by which software systems can make data unintelligible (that is, as unreadable and unusable by algorithmically transforming plaintext into ciphertext) such that it can only be accessed or used by authorized users.  An authorized user may be provided a key to decrypt per license or "shared secret".
     *
     *
     *                            Usage Note: "MASKED" may be used, per applicable policy, as a flag to indicate to a user or receiver that some portion of an IT resource has been further encrypted, and may be accessed only by an authorized user or receiver to which a decryption key is provided.
     */
    readonly Masked: "MASKED";
    /**
     * MEMADMIN: To perform one or more operations on information to administer health care coverage to an enrollee under a policy or program.
     */
    readonly MemberAdministration: "MEMADMIN";
    /**
     * MINEC: Custodian must limit access and disclosure to the minimum information required to support an authorized user's purpose of use.
     *
     *
     *                            Usage Note: Limiting the information available for access and disclosure to that an authorized user or receiver "needs to know" in order to perform permitted workflow or purpose of use.
     */
    readonly MinimumNecessary: "MINEC";
    /**
     * N: Definition: Privacy metadata indicating that the information is typical, non-stigmatizing health information, which presents typical risk of harm if disclosed without authorization.
     *
     *
     *                            Examples: In the US, this includes what HIPAA identifies as the minimum necessary protected health information (PHI) given a covered purpose of use (treatment, payment, or operations).  Includes typical, non-stigmatizing health information disclosed in an application for health, workers compensation, disability, or life insurance.
     *
     *
     *                            Map: Partial Map to ISO 13606-4 Sensitivity Level (3) Clinical Care:   Default for normal clinical care access (i.e. most clinical staff directly caring for the patient should be able to access nearly all of the EHR).   Maps to normal confidentiality for treatment information but not to ancillary care, payment and operations.
     *
     *
     *                            Usage Note: This metadata indicates that the receiver may be obligated to comply with applicable jurisdictional privacy law or disclosure authorization.
     */
    readonly Normal: "N";
    /**
     * NOAUTH: Prohibition on disclosure without information subject's authorization.
     */
    readonly NoDisclosureWithoutSubjectAuthorization: "NOAUTH";
    /**
     * NOCOLLECT: Prohibition on collection or storage of the information.
     */
    readonly NoCollection: "NOCOLLECT";
    /**
     * NODSCLCD: Prohibition on disclosure without organizational approved patient restriction.
     */
    readonly NoDisclosureWithoutConsentDirective: "NODSCLCD";
    /**
     * NODSCLCDS: Prohibition on disclosure without a consent directive from the information subject.
     */
    readonly NoDisclosureWithoutInformationSubjectQuoteSConsentDirective: "NODSCLCDS";
    /**
     * NOINTEGRATE: Prohibition on Integration into other records.
     */
    readonly NoIntegration: "NOINTEGRATE";
    /**
     * NOLIST: Prohibition on disclosure except to entities on specific access list.
     */
    readonly NoUnlistedEntityDisclosure: "NOLIST";
    /**
     * NOMOU: Prohibition on disclosure without an interagency service agreement or memorandum of understanding (MOU).
     */
    readonly NoDisclosureWithoutMOU: "NOMOU";
    /**
     * NOORGPOL: Prohibition on disclosure without organizational authorization.
     */
    readonly NoDisclosureWithoutOrganizationalAuthorization: "NOORGPOL";
    /**
     * NOPAT: Prohibition on disclosing information to patient, family or caregivers without attending provider's authorization.
     *
     *
     *                            Usage Note: The information may be labeled with the ActInformationSensitivity TBOO code, triggering application of this RefrainPolicy code as a handling caveat controlling access.
     *
     *                         Maps to FHIR NOPAT: Typically, this is used on an Alert resource, when the alert records information on patient abuse or non-compliance.
     *
     *                         FHIR print name is "keep information from patient". Maps to the French realm - code: INVISIBLE_PATIENT.
     *
     *
     *                            displayName: Document non visible par le patient
     *                            codingScheme: 1.2.250.1.213.1.1.4.13
     *
     *                         French use case:  A label for documents that the author  chose to hide from the patient until the content can be disclose to the patient in a face to face meeting between a healthcare professional and the patient (in French law some results like cancer diagnosis or AIDS diagnosis must be announced to the patient by a healthcare professional and should not be find out by the patient alone).
     */
    readonly NoDisclosureToPatientFamilyOrCaregiversWithoutAttendingProviderQuoteSAuthorization: "NOPAT";
    /**
     * NOPERSISTP: Prohibition on collection of the information beyond time necessary to accomplish authorized purpose of use is prohibited.
     */
    readonly NoCollectionBeyondPurposeOfUse: "NOPERSISTP";
    /**
     * NORDSCLCD: Prohibition on redisclosure without patient consent directive.
     */
    readonly NoRedisclosureWithoutConsentDirective: "NORDSCLCD";
    /**
     * NORDSCLCDS: Prohibition on redisclosure without a consent directive from the information subject.
     */
    readonly NoRedisclosureWithoutInformationSubjectQuoteSConsentDirective: "NORDSCLCDS";
    /**
     * NORDSCLW: Prohibition on disclosure without authorization under jurisdictional law.
     */
    readonly NoDisclosureWithoutJurisdictionalAuthorization: "NORDSCLW";
    /**
     * NORELINK: Prohibition on associating de-identified or pseudonymized information with other information in a manner that could or does result in disclosing information intended to be masked.
     */
    readonly NoRelinking: "NORELINK";
    /**
     * NOREUSE: Prohibition on use of the information beyond the purpose of use initially authorized.
     */
    readonly NoReuseBeyondPurposeOfUse: "NOREUSE";
    /**
     * NOVIP: Prohibition on disclosure except to principals with access permission to specific VIP information.
     */
    readonly NoUnauthorizedVIPDisclosure: "NOVIP";
    /**
     * ObligationPolicy: Conveys the mandated workflow action that an information custodian, receiver, or user must perform.
     *
     *
     *                            Usage Notes: Per ISO 22600-2, ObligationPolicy instances 'are event-triggered and define actions to be performed by manager agent'. Per HL7 Composite Security and Privacy Domain Analysis Model:  This value set refers to the action required to receive the permission specified in the privacy rule. Per OASIS XACML, an obligation is an operation specified in a policy or policy that is performed in conjunction with the enforcement of an access control decision.
     */
    readonly ObligationPolicy: "ObligationPolicy";
    /**
     * ORCON: Prohibition on disclosure except as permitted by the information originator.
     */
    readonly NoDisclosureWithoutOriginatorAuthorization: "ORCON";
    /**
     * PACQAST: Security provenance metadata observation value used to indicate that an IT resource (data, information object, service, or system capability) was asserted by a patient acquaintance.
     */
    readonly PatientAcquaintanceAsserted: "PACQAST";
    /**
     * PACQRPT: Security provenance metadata observation value used to indicate that an IT resource (data, information object, service, or system capability) was reported by a patient acquaintance.
     */
    readonly PatientAcquaintanceReported: "PACQRPT";
    /**
     * PATADMIN: To perform one or more operations on information used for operational activities conducted to administer the delivery of health care to a patient.
     */
    readonly PatientAdministration: "PATADMIN";
    /**
     * PATAST: Security provenance metadata observation value used to indicate that an IT resource (data, information object, service, or system capability) was asserted by a patient.
     */
    readonly PatientAsserted: "PATAST";
    /**
     * PATRPT: Security provenance metadata observation value used to indicate that an IT resource (data, information object, service, or system capability) was reported by a patient.
     */
    readonly PatientReported: "PATRPT";
    /**
     * PATRQT: To perform one or more operations on information in response to a patient's request.
     */
    readonly PatientRequested: "PATRQT";
    /**
     * PATSFTY: To perform one or more operations on information in processes related to ensuring the safety of health care.
     */
    readonly PatientSafety: "PATSFTY";
    /**
     * PAYAST: Security provenance metadata observation value used to indicate that an IT resource (data, information object, service, or system capability) was asserted by a payer.
     */
    readonly PayerAsserted: "PAYAST";
    /**
     * PAYRPT: Security provenance metadata observation value used to indicate that an IT resource (data, information object, service, or system capability) was reported by a payer.
     */
    readonly PayerReported: "PAYRPT";
    /**
     * PDS: Policy for handling information reported by the patient about another person, e.g., a family member, which will be afforded heightened confidentiality. Sensitive information reported by the patient about another person, e.g., family members may be deemed sensitive by default.  The flag may be set or cleared on patient's request.
     *
     *
     *                            Usage Note: For sensitive information relayed by or about a patient, which is deemed sensitive within the enterprise (i.e., by default regardless of whether the patient requested that the information be deemed sensitive.)   If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law rather than or in addition to this more generic code.
     */
    readonly PatientDefaultSensitivity: "PDS";
    /**
     * PERFMSR: To perform one or more operations on information used for monitoring performance of recommended health care practices and interventions.
     */
    readonly PerformanceMeasure: "PERFMSR";
    /**
     * PERSISTLABEL: Custodian security system must persist the binding of security labels to classify information received or imported by information systems under its control for collection, access, use and disclosure in accordance with applicable jurisdictional privacy policies associated with the target information.  The system must retain an immutable record of the assignment and binding.
     */
    readonly PersistSecurityLabel: "PERSISTLABEL";
    /**
     * POPHLTH: To perform one or more operations on information for provision of health care to a population of living subjects, e.g., needle exchange program.
     */
    readonly PopulationHealth: "POPHLTH";
    /**
     * PRIVMARK: Custodian must create and/or maintain human readable security label tags as required by policy.
     *
     *                         Map:  Aligns with ISO 22600-3 Section A.3.4.3 description of privacy mark:  "If present, the privacy-mark is not used for access control. The content of the privacy-mark may be defined by the security policy in force (identified by the security-policy-identifier) which may define a list of values to be used. Alternately, the value may be determined by the originator of the security-label."
     */
    readonly PrivacyMark: "PRIVMARK";
    /**
     * PROAST: Security provenance metadata observation value used to indicate that an IT resource (data, information object, service, or system capability) was asserted by a professional.
     */
    readonly ProfessionalAsserted: "PROAST";
    /**
     * PRORPT: Security provenance metadata observation value used to indicate that an IT resource (data, information object, service, or system capability) was reported by a professional.
     */
    readonly ProfessionalReported: "PRORPT";
    /**
     * PRS: For sensitive information relayed by or about a patient, which is deemed sensitive within the enterprise (i.e., by default regardless of whether the patient requested that the information be deemed sensitive.)   If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law rather than or in addition to this more generic code.
     *
     *
     *                            Usage Note: For use within an enterprise that provides heightened confidentiality to certain types of information designated by a patient as sensitive.   If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law rather than or in addition to this more generic code.
     */
    readonly PatientRequestedSensitivity: "PRS";
    /**
     * PSEUD: Custodian system must strip information of data that would allow the identification of the source of the information or the information subject.  Custodian may retain a key to relink data necessary to reidentify the information subject.
     */
    readonly Pseudonymize: "PSEUD";
    /**
     * PSEUDED: Security metadata observation value conveying the alteration integrity of an IT resource (data, information object, service, or system capability), by indicating the mechanism by which software systems can strip portions of the resource that could allow the identification of the source of the information or the information subject.  Custodian may retain a key to relink data necessary to reidentify the information subject.
     *
     *
     *                            Rationale: Personal data which has been processed to make it impossible to know whose data it is. Used particularly for secondary use of health data. In some cases, it may be possible for authorized individuals to restore the identity of the individual, e.g.,for public health case management.  Based on ISO/TS 25237:2008 Health informaticsâ€”Pseudonymization
     */
    readonly Pseudonymized: "PSEUDED";
    /**
     * PSY: Policy for handling psychiatry information, which will be afforded heightened confidentiality. Information handling protocols based on organizational policies related to psychiatry information that is deemed sensitive.
     *
     *
     *                            Usage Note: If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law rather than or in addition to this more generic code.
     */
    readonly PsychiatryInformationSensitivity: "PSY";
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
     * R: Privacy metadata indicating highly sensitive, potentially stigmatizing information, which presents a high risk to the information subject if disclosed without authorization. May be pre-empted by jurisdictional law, e.g., for public health reporting or emergency treatment.
     *
     *
     *                            Examples: Includes information that is additionally protected such as sensitive conditions mental health, HIV, substance abuse, domestic violence, child abuse, genetic disease, and reproductive health; or sensitive demographic information such as a patient's standing as an employee or a celebrity. May be used to indicate proprietary or classified information that is not related to an individual, e.g., secret ingredients in a therapeutic substance; or the name of a manufacturer.
     *
     *
     *                            Map: Partial Map to ISO 13606-4 Sensitivity Level (3) Clinical Care: Default for normal clinical care access (i.e. most clinical staff directly caring for the patient should be able to access nearly all of the EHR). Maps to normal confidentiality for treatment information but not to ancillary care, payment and operations..
     *
     *
     *                            Usage Note: This metadata indicates that the receiver may be obligated to comply with applicable, prevailing (default) jurisdictional privacy law or disclosure authorization..
     */
    readonly Restricted: "R";
    /**
     * RACE: Policy for handling information related to an information subject's race, which will be afforded heightened confidentiality.  Policies may govern sensitivity of information related to an information subject's race, the disclosure of which could impact the privacy, well-being, or safety of that subject.
     *
     *
     *                            Usage Note: If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law rather than or in addition to this more generic code.
     */
    readonly RaceInformationSensitivity: "RACE";
    /**
     * RECORDMGT: To perform one or more operations on information used within the health records management process.
     */
    readonly RecordsManagement: "RECORDMGT";
    /**
     * REDACT: Custodian system must remove information, which is not authorized to be access, used, or disclosed from records made available to otherwise authorized users.
     */
    readonly Redact: "REDACT";
    /**
     * REDACTED: Security metadata observation value used to indicate the mechanism by which software systems can filter an IT resource (data, information object, service, or system capability) to remove any portion of the resource that is not authorized to be access, used, or disclosed.
     *
     *
     *                            Usage Note: "REDACTED" may be used, per applicable policy, as a flag to indicate to a user or receiver that some portion of an IT resource has filtered and not included in the content accessed or received.
     */
    readonly Redacted: "REDACTED";
    /**
     * RefrainPolicy: Conveys prohibited actions which an information custodian, receiver, or user is not permitted to perform unless otherwise authorized or permitted under specified circumstances.
     *
     *
     *
     *
     *                            Usage Notes: ISO 22600-2 species that a Refrain Policy "defines actions the subjects must refrain from performing".  Per HL7 Composite Security and Privacy Domain Analysis Model:  May be used to indicate that a specific action is prohibited based on specific access control attributes e.g., purpose of use, information type, user role, etc.
     */
    readonly RefrainPolicy: "RefrainPolicy";
    /**
     * REL: Policy for handling information related to an information subject's religious affiliation, which will be afforded heightened confidentiality.  Policies may govern sensitivity of information related to an information subject's religion, the disclosure of which could impact the privacy, well-being, or safety of that subject.
     *
     *
     *                            Usage Notes: If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law rather than or in addition to this more generic code.
     */
    readonly ReligionInformationSensitivity: "REL";
    /**
     * RELIABLE: Security metadata observation value used to indicate that the veracity or trustworthiness of an IT resource (data, information object, service, or system capability) for a specified purpose of use is perceived to be or deemed by policy to be adequate.
     */
    readonly Reliable: "RELIABLE";
    /**
     * REMITADV: To perform one or more operations on information about the amount remitted for a health care claim.
     */
    readonly RemittanceAdvice: "REMITADV";
    /**
     * RESCOMPT: A security category label field value, which indicates that access and use of an IT resource is restricted to members of a research project.
     */
    readonly ResearchProjectCompartment: "RESCOMPT";
    /**
     * RMGTCOMPT: A security category label field value, which indicates that access and use of an IT resource is restricted to members of records management department or workflow.
     */
    readonly RecordsManagementCompartment: "RMGTCOMPT";
    /**
     * SCA: Policy for handling sickle cell disease information, which is afforded heightened confidentiality.  Information handling protocols are based on organizational policies related to sickle cell disease information, which is deemed sensitive.
     *
     *
     *                            Usage Note: If there is a jurisdictional mandate, then the Act valued with this ActCode should be associated with an Act valued with any applicable laws from the ActPrivacyLaw code system.
     */
    readonly SickleCellAnemia: "SCA";
    /**
     * SDMAST: Security provenance metadata observation value used to indicate that an IT resource (data, information object, service, or system capability) was asserted by a substitute decision maker.
     */
    readonly SubstituteDecisionMakerAsserted: "SDMAST";
    /**
     * SDMRPT: Security provenance metadata observation value used to indicate that an IT resource (data, information object, service, or system capability) was reported by a substitute decision maker.
     */
    readonly SubstituteDecisionMakerReported: "SDMRPT";
    /**
     * SDV: Policy for handling sexual assault, abuse, or domestic violence information, which will be afforded heightened confidentiality. Information handling protocols based on organizational policies related to sexual assault, abuse, or domestic violence information that is deemed sensitive.
     *
     *
     *                            Usage Note: If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law rather than or in addition to this more generic code.
     */
    readonly SexualAssaultAbuseOrDomesticViolenceInformationSensitivity: "SDV";
    /**
     * SecurityPolicy: Types of security policies that further specify the ActClassPolicy value set.
     *
     *
     *                            Examples:
     *
     *
     *
     *                            obligation to encrypt
     *                            refrain from redisclosure without consent
     */
    readonly SecurityPolicy: "SecurityPolicy";
    /**
     * SEX: Policy for handling sexuality and reproductive health information, which will be afforded heightened confidentiality.  Information handling protocols based on organizational policies related to sexuality and reproductive health information that is deemed sensitive.
     *
     *
     *                            Usage Note: If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law rather than or in addition to this more generic code.
     */
    readonly SexualityAndReproductiveHealthInformationSensitivity: "SEX";
    /**
     * SICKLE: Types of sensitivity policies that apply to Acts.  Act.confidentialityCode is defined in the RIM as "constraints around appropriate disclosure of information about this Act, regardless of mood."
     *
     *
     *                            Usage Note: ActSensitivity codes are used to bind information to an Act.confidentialityCode according to local sensitivity policy so that those confidentiality codes can then govern its handling across enterprises.  Internally to a policy domain, however, local policies guide the access control system on how end users in that policy domain are able to use information tagged with these sensitivity values.
     */
    readonly SickleCell: "SICKLE";
    /**
     * SOC: Information about provision of social services.
     *
     *
     *                            Usage Note: This is a temporary addition to FHIR to be proposed in harmonization.
     */
    readonly SocialServicesSensitivity: "SOC";
    /**
     * SSP: Policy for handling information related to a provider of sensitive services, which will be afforded heightened confidentiality.  Description:  Policies may govern sensitivity of information related to providers who deliver sensitive healthcare services in order to protect the privacy, well-being, and safety of the provider and of patients receiving sensitive services.
     *
     *
     *                            Usage Notes: If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law rather than or in addition to this more generic code.
     */
    readonly SensitiveServiceProviderInformationSensitivity: "SSP";
    /**
     * STD: Policy for handling sexually transmitted disease information, which will be afforded heightened confidentiality.
     *  Information handling protocols based on organizational policies related to sexually transmitted disease information that is deemed sensitive.
     *
     *
     *                            Usage Note: If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law rather than or in addition to this more generic code.
     */
    readonly SexuallyTransmittedDiseaseInformationSensitivity: "STD";
    /**
     * SUBSETTED: Metadata observation used to indicate that some information has been removed from the source object when the view this object contains was constructed because of configuration options when the view was created. The content may not be suitable for use as the basis of a record update
     *
     *
     *                            Usage Note: This is not suitable to be used when information is removed for security reasons - see the code REDACTED for this use.
     */
    readonly Subsetted: "SUBSETTED";
    /**
     * SUPNWK: To perform one or more operations on information in response to a request by a person authorized by the patient.
     */
    readonly SupportNetwork: "SUPNWK";
    /**
     * SYNTAC: Security metadata observation value used to indicate that the IT resource syntax has been transformed from one syntactical representation to another.
     *
     *
     *                            Usage Note: "SYNTAC" code does not indicate the syntactical correctness of the syntactically transformed IT resource.
     */
    readonly SyntacticTransform: "SYNTAC";
    /**
     * TBOO: Policy for handling information not to be initially disclosed or discussed with patient except by a physician assigned to patient in this case. Information handling protocols based on organizational policies related to sensitive patient information that must be initially discussed with the patient by an attending physician before being disclosed to the patient.
     *
     *
     *                            Usage Note: If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law rather than or in addition to this more generic code.
     *
     *
     *                            Open Issue: This definition conflates a rule and a characteristic, and there may be a similar issue with ts sibling codes.
     */
    readonly Taboo: "TBOO";
    /**
     * THREAT: To perform one or more operations on information used to prevent injury or disease to living subjects who may be the target of violence.
     */
    readonly Threat: "THREAT";
    /**
     * Title38Section7332: Title 38 Part 1-protected information may only be disclosed to a third party with the special written consent of the patient except where expressly authorized by 38 USC 7332. VA may disclose this information for specific purposes to: VA employees on a need to know basis - more restrictive than Privacy Act need to know; contractors who need the information in order to perform or fulfill the duties of the contract; and researchers who provide assurances that the information will not be identified in any report.  This information may also be disclosed without consent where patient lacks decision-making capacity; in a medical emergency for the purpose of treating a condition which poses an immediate threat to the health of any individual and which requires immediate medical intervention; for eye, tissue, or organ donation purposes; and disclosure of HIV information for public health purposes.
     *
     *
     *                            Definition: Title 38 Part 1 - Â§1.462 Confidentiality restrictions.
     *
     *
     * (a) General. The patient records to which Â§Â§1.460 through 1.499 of this part apply may be disclosed or used only as permitted by these regulations and may not otherwise be disclosed or used in any civil, criminal, administrative, or legislative proceedings conducted by any Federal, State, or local authority. Any disclosure made under these regulations must be limited to that information which is necessary to carry out the purpose of the disclosure. SUBCHAPTER III--PROTECTION OF PATIENT RIGHTS Sec. 7332. Confidentiality of certain medical records (a)(1) Records of the identity, diagnosis, prognosis, or treatment of any patient or subject which are maintained in connection with the performance of any program or activity (including education, training, treatment, rehabilitation, or research) relating to drug abuse, alcoholism or alcohol abuse, infection with the human immunodeficiency virus, or sickle cell anemia which is carried out by or for the Department under this title shall, except as provided in subsections (e) and (f), be confidential, and (section 5701 of this title to the contrary notwithstanding) such records may be disclosed only for the purposes and under the circumstances expressly authorized under subsection (b).
     *
     *
     *                            Usage Note: May be associated with an Act or a Role to indicate the legal provision to which the assignment of an Act.confidentialityCode or Role.confidentialityCode complies.
     */
    readonly Title38Section7332: "Title38Section7332";
    /**
     * TRAIN: To perform one or more operations on information used in training and education.
     */
    readonly Training: "TRAIN";
    /**
     * TREAT: To perform one or more operations on information for provision of health care.
     */
    readonly Treatment: "TREAT";
    /**
     * TRSLT: Security metadata observation value used to indicate that the IT resource has been translated from one human language to another.
     *
     *
     *                            Usage Note: "TRSLT" does not indicate the fidelity of the translation or the languages translated.
     *
     *                         The fidelity of the IT Resource translation may be indicated using a SecurityIntegrityConfidenceObservation.
     *
     *                         To indicate languages, use the Value Set:HumanLanguage (2.16.840.1.113883.1.11.11526)
     */
    readonly Translated: "TRSLT";
    /**
     * U: Definition: Privacy metadata indicating that the information is not classified as sensitive.
     *
     *
     *                            Examples: Includes publicly available information, e.g., business name, phone, email or physical address.
     *
     *
     *                            Usage Note: This metadata indicates that the receiver has no obligation to consider additional policies when making access control decisions.   Note that in some jurisdictions, personally identifiable information must be protected as confidential, so it would not be appropriate to assign a confidentiality code of "unrestricted"  to that information even if it is publicly available.
     */
    readonly Unrestricted: "U";
    /**
     * UNCERTREL: Security metadata observation value used to indicate that the veracity or trustworthiness of an IT resource (data, information object, service, or system capability) for a specified purpose of use is perceived to be or deemed by policy to be uncertain.
     */
    readonly UncertainReliability: "UNCERTREL";
    /**
     * UNRELIABLE: Security metadata observation value used to indicate that the veracity or trustworthiness of an IT resource (data, information object, service, or system capability) for a specified purpose of use is perceived to be or deemed by policy to be inadequate.
     */
    readonly Unreliable: "UNRELIABLE";
    /**
     * UPGRDLABEL: Custodian security system must declassify information assigned security labels by instantiating a new version of the classified information so as to break the binding of the classifying security label when assigning a new security label that marks the information as classified at a more protected level  in accordance with applicable jurisdictional privacy policies associated with the target information. The system must retain an immutable record of the previous assignment and binding.
     */
    readonly UpgradeSecurityLabel: "UPGRDLABEL";
    /**
     * V: . Privacy metadata indicating that the information is extremely sensitive and likely stigmatizing health information that presents a very high risk if disclosed without authorization.  This information must be kept in the highest confidence.
     *
     *
     *                            Examples:  Includes information about a victim of abuse, patient requested information sensitivity, and taboo subjects relating to health status that must be discussed with the patient by an attending provider before sharing with the patient.  May also include information held under â€œlegal lockâ€? or attorney-client privilege
     *
     *
     *                            Map:  This metadata indicates that the receiver may not disclose this information except as directed by the information custodian, who may be the information subject.
     *
     *
     *                            Usage Note:  This metadata indicates that the receiver may not disclose this information except as directed by the information custodian, who may be the information subject.
     */
    readonly VeryRestricted: "V";
    /**
     * VERSIONED: Security metadata observation value conveying the alteration integrity of an IT resource (data, information object, service, or system capability)  which indicates that the resource only retains versions of an IT resource  for access and use per applicable policy
     *
     *
     *                            Usage Note: When this code is used, expectation is that the system has removed historical versions of the data that falls outside the time period deemed to be the effective time of the applicable version.
     */
    readonly Versioned: "VERSIONED";
};
/**
 * A single value set for all security labels defined by FHIR.
 */
export declare type SecurityLabelsCodeType = typeof SecurityLabelsCodes[keyof typeof SecurityLabelsCodes];
//# sourceMappingURL=SecurityLabelsCodes.d.ts.map