/**
 * This value set includes sample Consent Directive Type codes, including several consent directive related LOINC codes; HL7 VALUE SET: ActConsentType(2.16.840.1.113883.1.11.19897); examples of US realm consent directive legal descriptions and references to online and/or downloadable forms such as the SSA-827 Authorization to Disclose Information to the Social Security Administration; and other anticipated consent directives related to participation in a clinical trial, medical procedures, reproductive procedures; health care directive (Living Will); advance directive, do not resuscitate (DNR); Physician Orders for Life-Sustaining Treatment (POLST)
 */
export declare const ConsentCategoryCodes: {
    /**
     * 42-CFR-2: Required elements in a written consent to a disclosure of information governed under 42 CFR Part 2. http://www.ecfr.gov/cgi-bin/text-idx?SID=69c4339acd2df9fab9dcbed15181917b&amp;mc=true&amp;node=pt42.1.2&amp;rgn=div5
     */
    readonly VAL42CFRPart2FormOfWrittenConsent: "42-CFR-2";
    /**
     * Code: 57016-8
     */
    readonly PrivacyPolicyAcknowledgementDocument: "57016-8";
    /**
     * Code: 57017-6
     */
    readonly PrivacyPolicyOrganizationDocument: "57017-6";
    /**
     * Code: 59284-0
     */
    readonly PatientConsent: "59284-0";
    /**
     * Code: 64292-6
     */
    readonly ReleaseOfInformationConsent: "64292-6";
    /**
     * ACD: Any instructions, written or given verbally by a patient to a health care provider in anticipation of potential need for medical treatment. [2005 Honor My Wishes]
     */
    readonly AdvanceDirective: "ACD";
    /**
     * CRIC: 45 CFR part 46 Â§46.116 General requirements for informed consent; and Â§46.117 Documentation of informed consent. https://www.gpo.gov/fdsys/pkg/FR-2017-01-19/pdf/2017-01058.pdf
     */
    readonly CommonRuleInformedConsent: "CRIC";
    /**
     * DNR: A legal document, signed by both the patient and their provider, stating a desire not to have CPR initiated in case of a cardiac event. Note: This form was replaced in 2003 with the Physician Orders for Life-Sustaining Treatment [POLST].
     */
    readonly DoNotResuscitate: "DNR";
    /**
     * EMRGONLY: Opt-in to disclosure of health information for emergency only consent directive. Comment: This general consent directive specifically limits disclosure of health information for purpose of emergency treatment. Additional parameters may further limit the disclosure to specific users, roles, duration, types of information, and impose uses obligations. [ActConsentDirective (2.16.840.1.113883.1.11.20425)]
     */
    readonly EmergencyOnly: "EMRGONLY";
    /**
     * HCD: Patientâ€™s document telling patientâ€™s health care provider what the patient wants or does not want if the patient is diagnosed as being terminally ill and in a persistent vegetative state or in a permanently unconscious condition.[2005 Honor My Wishes]
     */
    readonly HealthCareDirective: "HCD";
    /**
     * HIPAA-Auth: HIPAA 45 CFR Section 164.508 Uses and disclosures for which an authorization is required. (a) Standard: Authorizations for uses and disclosures. (1) Authorization required: General rule. Except as otherwise permitted or required by this subchapter, a covered entity may not use or disclose protected health information without an authorization that is valid under this section. When a covered entity obtains or receives a valid authorization for its use or disclosure of protected health information, such use or disclosure must be consistent with such authorization. Usage Note: Authorizations governed under this regulation meet the definition of an opt in class of consent directive.
     */
    readonly HIPAAAuthorization: "HIPAA-Auth";
    /**
     * HIPAA-NPP: Â§ 164.520 â€” Notice of privacy practices for protected health information. (1) Right to notice. Except as provided by paragraph (a)(2) or (3) of this section, an individual has a right to adequate notice of the uses and disclosures of protected health information that may be made by the covered entity, and of the individual's rights and the covered entity's legal duties with respect to protected health information. Usage Note: Restrictions governed under this regulation meet the definition of an implied with an opportunity to dissent class of consent directive.
     */
    readonly HIPAANoticeOfPrivacyPractices: "HIPAA-NPP";
    /**
     * HIPAA-Research: HIPAA 45 CFR Â§ 164.508 - Uses and disclosures for which an authorization is required. (a) Standard: Authorizations for uses and disclosures. (3) Compound authorizations. An authorization for use or disclosure of protected health information may not be combined with any other document to create a compound authorization, except as follows: (i) An authorization for the use or disclosure of protected health information for a research study may be combined with any other type of written permission for the same or another research study. This exception includes combining an authorization for the use or disclosure of protected health information for a research study with another authorization for the same research study, with an authorization for the creation or maintenance of a research database or repository, or with a consent to participate in research. Where a covered health care provider has conditioned the provision of research-related treatment on the provision of one of the authorizations, as permitted under paragraph (b)(4)(i) of this section, any compound authorization created under this paragraph must clearly differentiate between the conditioned and unconditioned components and provide the individual with an opportunity to opt in to the research activities described in the unconditioned authorization. Usage Notes: See HHS http://www.hhs.gov/hipaa/for-professionals/special-topics/research/index.html and OCR http://www.hhs.gov/hipaa/for-professionals/special-topics/research/index.html
     */
    readonly HIPAAResearchAuthorization: "HIPAA-Research";
    /**
     * HIPAA-Restrictions: HIPAA 45 CFR Â§ 164.510 - Uses and disclosures requiring an opportunity for the individual to agree or to object. A covered entity may use or disclose protected health information, provided that the individual is informed in advance of the use or disclosure and has the opportunity to agree to or prohibit or restrict the use or disclosure, in accordance with the applicable requirements of this section. The covered entity may orally inform the individual of and obtain the individual's oral agreement or objection to a use or disclosure permitted by this section. Usage Note: Restrictions governed under this regulation meet the definition of an opt out with exception class of consent directive.
     */
    readonly HIPAARestrictions: "HIPAA-Restrictions";
    /**
     * HIPAA-Self-Pay: HIPAA 45 CFR Â§ 164.522(a)â€”Right To Request a Restriction of Uses and Disclosures. (vi) A covered entity must agree to the request of an individual to restrict disclosure of protected health information about the individual to a health plan if: (A) The disclosure is for the purpose of carrying out payment or health care operations and is not otherwise required by law; and (B) The protected health information pertains solely to a health care item or service for which the individual, or person other than the health plan on behalf of the individual, has paid the covered entity in full. Usage Note: Restrictions governed under this regulation meet the definition of an opt out with exception class of consent directive. Opt out is limited to disclosures to a payer for payment and operations purpose of use. See HL7 HIPAA Self-Pay code in ActPrivacyLaw (2.16.840.1.113883.1.11.20426).
     */
    readonly HIPAASelfPayRestriction: "HIPAA-Self-Pay";
    /**
     * ICOL: Definition: Consent to have healthcare information collected in an electronic health record.  This entails that the information may be used in analysis, modified, updated.
     */
    readonly InformationCollection: "ICOL";
    /**
     * IDSCL: Definition: Consent to have collected healthcare information disclosed.
     */
    readonly InformationDisclosure: "IDSCL";
    /**
     * Illinois-Minor-Procedure: The consent to the performance of a medical or surgical procedure by a physician licensed to practice medicine and surgery, a licensed advanced practice nurse, or a licensed physician assistant executed by a married person who is a minor, by a parent who is a minor, by a pregnant woman who is a minor, or by any person 18 years of age or older, is not voidable because of such minority, and, for such purpose, a married person who is a minor, a parent who is a minor, a pregnant woman who is a minor, or any person 18 years of age or older, is deemed to have the same legal capacity to act and has the same powers and obligations as has a person of legal age. Consent by Minors to Medical Procedures Act. (410 ILCS 210/0.01) (from Ch. 111, par. 4500) Sec. 0.01. Short title. This Act may be cited as the Consent by Minors to Medical Procedures Act. (Source: P.A. 86-1324.) http://www.ilga.gov/legislation/ilcs/ilcs3.asp?ActID=1539&amp;ChapterID=35
     */
    readonly IllinoisConsentByMinorsToMedicalProcedures: "Illinois-Minor-Procedure";
    /**
     * INFA: Definition: Consent to access healthcare information.
     */
    readonly InformationAccess: "INFA";
    /**
     * INFAO: Definition: Consent to access or "read" only, which entails that the information is not to be copied, screen printed, saved, emailed, stored, re-disclosed or altered in any way.  This level ensures that data which is masked or to which access is restricted will not be.
     *
     *
     *                            Example: Opened and then emailed or screen printed for use outside of the consent directive purpose.
     */
    readonly AccessOnly: "INFAO";
    /**
     * INFASO: Definition: Consent to access and save only, which entails that access to the saved copy will remain locked.
     */
    readonly AccessAndSaveOnly: "INFASO";
    /**
     * IRDSCL: Definition: Information re-disclosed without the patient's consent.
     */
    readonly InformationRedisclosure: "IRDSCL";
    /**
     * MDHHS-5515: On January 1, 2015, the Michigan Department of Health and Human Services (MDHHS) released a standard consent form for the sharing of health information specific to behavioral health and substance use treatment in accordance with Public Act 129 of 2014. In Michigan, while providers are not required to use this new standard form (MDHHS-5515), they are required to accept it. Note: Form is available at http://www.michigan.gov/documents/mdhhs/Consent_to_Share_Behavioral_Health_Information_for_Care_Coordination_Purposes_548835_7.docx For more information see http://www.michigan.gov/documents/mdhhs/Behavioral_Health_Consent_Form_Background_Information_548864_7.pdf
     */
    readonly MichiganMDHHS5515ConsentToShareBehavioralHealthInformationForCareCoordinationPurposes: "MDHHS-5515";
    /**
     * NPP: Acknowledgement of custodian notice of privacy practices. Usage Notes: This type of consent directive acknowledges a custodian's notice of privacy practices including its permitted collection, access, use and disclosure of health information to users and for purposes of use specified. [ActConsentDirective (2.16.840.1.113883.1.11.20425)]
     */
    readonly NoticeOfPrivacyPractices: "NPP";
    /**
     * NYSSIPP: The New York State Surgical and Invasive Procedure Protocol (NYSSIPP) applies to all operative and invasive procedures including endoscopy, general surgery or interventional radiology. Other procedures that involve puncture or incision of the skin, or insertion of an instrument or foreign material into the body are within the scope of the protocol. This protocol also applies to those anesthesia procedures either prior to a surgical procedure or independent of a surgical procedure such as spinal facet blocks. Example: Certain 'minor' procedures such as venipuncture, peripheral IV placement, insertion of nasogastric tube and foley catheter insertion are not within the scope of the protocol. From http://www.health.ny.gov/professionals/protocols_and_guidelines/surgical_and_invasive_procedure/nyssipp_faq.htm Note: HHC 100B-1 Form is available at http://www.downstate.edu/emergency_medicine/documents/Consent_CT_with_contrast.pdf
     */
    readonly NewYorkStateSurgicalAndInvasiveProcedureProtocol: "NYSSIPP";
    /**
     * POLST: The Physician Order for Life-Sustaining Treatment form records a personâ€™s health care wishes for end of life emergency treatment and translates them into an order by the physician. It must be reviewed and signed by both the patient and the physician, Advanced Registered Nurse Practitioner or Physician Assistant. [2005 Honor My Wishes] Comment: Opt-in Consent Directive with restrictions.
     */
    readonly POLST: "POLST";
    /**
     * RESEARCH: Consent to have healthcare information in an electronic health record accessed for research purposes. [VALUE SET: ActConsentType (2.16.840.1.113883.1.11.19897)]
     */
    readonly ResearchInformationAccess: "RESEARCH";
    /**
     * RESEARCH: Definition: Consent to have healthcare information in an electronic health record accessed for research purposes.
     */
    readonly ResearchInformationAccessRESEARCH: "RESEARCH";
    /**
     * RSDID: Consent to have de-identified healthcare information in an electronic health record that is accessed for research purposes, but without consent to re-identify the information under any circumstance. [VALUE SET: ActConsentType (2.16.840.1.113883.1.11.19897)
     */
    readonly DeIdentifiedInformationAccess: "RSDID";
    /**
     * RSDID: Definition: Consent to have de-identified healthcare information in an electronic health record that is accessed for research purposes, but without consent to re-identify the information under any circumstance.
     */
    readonly DeIdentifiedInformationAccessRSDID: "RSDID";
    /**
     * RSREID: Consent to have de-identified healthcare information in an electronic health record that is accessed for research purposes re-identified under specific circumstances outlined in the consent. [VALUE SET: ActConsentType (2.16.840.1.113883.1.11.19897)]
     */
    readonly ReIdentifiableInformationAccess: "RSREID";
    /**
     * RSREID: Definition: Consent to have de-identified healthcare information in an electronic health record that is accessed for research purposes re-identified under specific circumstances outlined in the consent.
     *
     *
     *                            Example:: Where there is a need to inform the subject of potential health issues.
     */
    readonly ReIdentifiableInformationAccessRSREID: "RSREID";
    /**
     * SSA-827: SSA Form SSA-827 (Authorization to Disclose Information to the Social Security Administration (SSA))and its affiliated State disability determination services use Form SSA-827, Authorization to Disclose Information to the Social Security Administration (SSA) to obtain medical and other information needed to determine whether or not a claimant is disabled. Comment: Opt-in Consent Directive. Note: Form is available at https://www.socialsecurity.gov/forms/ssa-827-inst-sp.pdf
     */
    readonly FormSSA827: "SSA-827";
    /**
     * VA-10-0484: VA Form 10-0484 Revocation for Release of Individually-Identifiable Health Information enables a veteran to revoke authorization for the VA to release specified copies of individually-identifiable health information with the non-VA health care provider organizations participating in the eHealth Exchange and partnering with VA. Comment: Opt-in Consent Directive with status = rescinded (aka 'revoked'). Note: Form is available at http://www.va.gov/vaforms/medical/pdf/vha-10-0484-fill.pdf
     */
    readonly VAForm100484: "VA-10-0484";
    /**
     * VA-10-0485: VA Form 10-0485 Request for and Authorization to Release Protected Health Information to eHealth Exchange enables a veteran to request and authorize a VA health care facility to release protected health information (PHI) for treatment purposes only to the communities that are participating in the eHealth Exchange, VLER Directive, and other Health Information Exchanges with who VA has an agreement. This information may consist of the diagnosis of Sickle Cell Anemia, the treatment of or referral for Drug Abuse, treatment of or referral for Alcohol Abuse or the treatment of or testing for infection with Human Immunodeficiency Virus. This authorization covers the diagnoses that I may have upon signing of the authorization and the diagnoses that I may acquire in the future including those protected by 38 U.S.C. 7332. Comment: Opt-in Consent Directive. Note: Form is available at http://www.va.gov/vaforms/medical/pdf/10-0485-fill.pdf
     */
    readonly VAForm100485: "VA-10-0485";
    /**
     * VA-10-10116: VA Form 10-10116 Revocation of Authorization for Use and Release of Individually Identifiable Health Information for Veterans Health Administration Research. Comment: Opt-in with Restriction Consent Directive with status = 'completed'. Note: Form is available at http://www.northerncalifornia.va.gov/northerncalifornia/services/rnd/docs/vha-10-10116.pdf
     */
    readonly VAForm101010116: "VA-10-10116";
    /**
     * VA-10-5345: VA Form 10-5345 Request for and Authorization to Release Medical Records or Health Information enables a veteran to request and authorize the VA to release specified copies of protected health information (PHI), such as hospital summary or outpatient treatment notes, which may include information about conditions governed under Title 38 Section 7332 (drug abuse, alcoholism or alcohol abuse, testing for or infection with HIV, and sickle cell anemia). Comment: Opt-in Consent Directive. Note: Form is available at http://www.va.gov/vaforms/medical/pdf/vha-10-5345-fill.pdf
     */
    readonly VAForm105345: "VA-10-5345";
    /**
     * VA-10-5345a: VA Form 10-5345a Individuals' Request for a Copy of Their Own Health Information enables a veteran to request and authorize the VA to release specified copies of protected health information (PHI), such as hospital summary or outpatient treatment notes. Note: Form is available at http://www.va.gov/vaforms/medical/pdf/vha-10-5345a-fill.pdf
     */
    readonly VAForm105345a: "VA-10-5345a";
    /**
     * VA-10-5345a-MHV: VA Form 10-5345a-MHV Individualâ€™s Request for a Copy of their own health information from MyHealtheVet enables a veteran to receive a copy of all available personal health information to be delivered through the veteranâ€™s My HealtheVet account. Note: Form is available at http://www.va.gov/vaforms/medical/pdf/vha-10-5345a-MHV-fill.pdf
     */
    readonly VAForm105345aMHV: "VA-10-5345a-MHV";
    /**
     * VA-21-4142: VA Form 21-4142 (Authorization and Consent to Release Information to the Department of Veterans Affairs (VA) enables a veteran to authorize the US Veterans Administration [VA] to request veteranâ€™s health information from non-VA providers. Aka VA Compensation Application Note: Form is available at http://www.vba.va.gov/pubs/forms/VBA-21-4142-ARE.pdf . For additional information regarding VA Form 21-4142, refer to the following website: www.benefits.va.gov/compensation/consent_privateproviders
     */
    readonly VAForm214142: "VA-21-4142";
};
/**
 * This value set includes sample Consent Directive Type codes, including several consent directive related LOINC codes; HL7 VALUE SET: ActConsentType(2.16.840.1.113883.1.11.19897); examples of US realm consent directive legal descriptions and references to online and/or downloadable forms such as the SSA-827 Authorization to Disclose Information to the Social Security Administration; and other anticipated consent directives related to participation in a clinical trial, medical procedures, reproductive procedures; health care directive (Living Will); advance directive, do not resuscitate (DNR); Physician Orders for Life-Sustaining Treatment (POLST)
 */
export declare type ConsentCategoryCodeType = typeof ConsentCategoryCodes[keyof typeof ConsentCategoryCodes];
//# sourceMappingURL=ConsentCategoryCodes.d.ts.map