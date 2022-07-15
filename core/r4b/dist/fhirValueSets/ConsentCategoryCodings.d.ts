import { CodingArgs } from '../fhir/Coding.js';
/**
 * This value set includes sample Consent Directive Type codes, including several consent directive related LOINC codes; HL7 VALUE SET: ActConsentType(2.16.840.1.113883.1.11.19897); examples of US realm consent directive legal descriptions and references to online and/or downloadable forms such as the SSA-827 Authorization to Disclose Information to the Social Security Administration; and other anticipated consent directives related to participation in a clinical trial, medical procedures, reproductive procedures; health care directive (Living Will); advance directive, do not resuscitate (DNR); Physician Orders for Life-Sustaining Treatment (POLST)
 */
export declare type ConsentCategoryCodingType = {
    /**
     * Code: _ActConsentType
     */
    ActConsentType: CodingArgs;
    /**
     * Code: 57016-8
     */
    PrivacyPolicyAcknowledgementDocument: CodingArgs;
    /**
     * Code: 57017-6
     */
    PrivacyPolicyOrganizationDocument: CodingArgs;
    /**
     * Code: 59284-0
     */
    PatientConsent: CodingArgs;
    /**
     * Code: 64292-6
     */
    ReleaseOfInformationConsent: CodingArgs;
    /**
     * acd: Any instructions, written or given verbally by a patient to a health care provider in anticipation of potential need for medical treatment. [2005 Honor My Wishes]
     */
    AdvanceDirective: CodingArgs;
    /**
     * dnr: A legal document, signed by both the patient and their provider, stating a desire not to have CPR initiated in case of a cardiac event. Note: This form was replaced in 2003 with the Physician Orders for Life-Sustaining Treatment [POLST].
     */
    DoNotResuscitate: CodingArgs;
    /**
     * emrgonly: Opt-in to disclosure of health information for emergency only consent directive. Comment: This general consent directive specifically limits disclosure of health information for purpose of emergency treatment. Additional parameters may further limit the disclosure to specific users, roles, duration, types of information, and impose uses obligations. [ActConsentDirective (2.16.840.1.113883.1.11.20425)]
     */
    EmergencyOnly: CodingArgs;
    /**
     * hcd: Patient's document telling patient's health care provider what the patient wants or does not want if the patient is diagnosed as being terminally ill and in a persistent vegetative state or in a permanently unconscious condition.[2005 Honor My Wishes]
     */
    HealthCareDirective: CodingArgs;
    /**
     * Code: ICOL
     */
    InformationCollection: CodingArgs;
    /**
     * Code: IDSCL
     */
    InformationDisclosure: CodingArgs;
    /**
     * Code: INFA
     */
    InformationAccess: CodingArgs;
    /**
     * Code: INFAO
     */
    AccessOnly: CodingArgs;
    /**
     * Code: INFASO
     */
    AccessAndSaveOnly: CodingArgs;
    /**
     * Code: IRDSCL
     */
    InformationRedisclosure: CodingArgs;
    /**
     * npp: Acknowledgement of custodian notice of privacy practices. Usage Notes: This type of consent directive acknowledges a custodian's notice of privacy practices including its permitted collection, access, use and disclosure of health information to users and for purposes of use specified. [ActConsentDirective (2.16.840.1.113883.1.11.20425)]
     */
    NoticeOfPrivacyPractices: CodingArgs;
    /**
     * polst: The Physician Order for Life-Sustaining Treatment form records a person's health care wishes for end of life emergency treatment and translates them into an order by the physician. It must be reviewed and signed by both the patient and the physician, Advanced Registered Nurse Practitioner or Physician Assistant. [2005 Honor My Wishes] Comment: Opt-in Consent Directive with restrictions.
     */
    POLST: CodingArgs;
    /**
     * research: Consent to have healthcare information in an electronic health record accessed for research purposes. [VALUE SET: ActConsentType (2.16.840.1.113883.1.11.19897)]
     */
    ResearchInformationAccess: CodingArgs;
    /**
     * Code: RESEARCH
     */
    ResearchInformationAccessRESEARCH: CodingArgs;
    /**
     * rsdid: Consent to have de-identified healthcare information in an electronic health record that is accessed for research purposes, but without consent to re-identify the information under any circumstance. [VALUE SET: ActConsentType (2.16.840.1.113883.1.11.19897)
     */
    DeIdentifiedInformationAccess: CodingArgs;
    /**
     * Code: RSDID
     */
    DeIdentifiedInformationAccessRSDID: CodingArgs;
    /**
     * rsreid: Consent to have de-identified healthcare information in an electronic health record that is accessed for research purposes re-identified under specific circumstances outlined in the consent. [VALUE SET: ActConsentType (2.16.840.1.113883.1.11.19897)]
     */
    ReIdentifiableInformationAccess: CodingArgs;
    /**
     * Code: RSREID
     */
    ReIdentifiableInformationAccessRSREID: CodingArgs;
};
/**
 * This value set includes sample Consent Directive Type codes, including several consent directive related LOINC codes; HL7 VALUE SET: ActConsentType(2.16.840.1.113883.1.11.19897); examples of US realm consent directive legal descriptions and references to online and/or downloadable forms such as the SSA-827 Authorization to Disclose Information to the Social Security Administration; and other anticipated consent directives related to participation in a clinical trial, medical procedures, reproductive procedures; health care directive (Living Will); advance directive, do not resuscitate (DNR); Physician Orders for Life-Sustaining Treatment (POLST)
 */
export declare const ConsentCategoryCodings: ConsentCategoryCodingType;
//# sourceMappingURL=ConsentCategoryCodings.d.ts.map