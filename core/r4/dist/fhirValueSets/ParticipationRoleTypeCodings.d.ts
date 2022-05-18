import { Coding } from '../fhir/Coding.js';
/**
 * This FHIR value set is comprised of Actor participation Type codes, which can be used to value FHIR agents, actors, and other role         elements. The FHIR Actor participation type value set is based on    DICOM Audit Message, C402;   ASTM Standard, E1762-95 [2013]; selected codes and          derived actor roles from HL7 RoleClass OID 2.16.840.1.113883.5.110;    HL7 Role Code 2.16.840.1.113883.5.111, including AgentRoleType;          HL7 ParticipationType OID: 2.16.840.1.113883.5.90; and    HL7 ParticipationFunction codes OID: 2.16.840.1.113883.5.88.           This value set includes, by reference, role codes from external code systems: NUCC Health Care Provider Taxonomy OID: 2.16.840.1.113883.6.101;          North American Industry Classification System [NAICS]OID: 2.16.840.1.113883.6.85; IndustryClassificationSystem 2.16.840.1.113883.1.11.16039;          and US Census Occupation Code OID: 2.16.840.1.113883.6.243 for relevant recipient or custodian codes not included in this value set.            If no source is indicated in the definition comments, then these are example FHIR codes.
 */
export declare const ParticipationRoleTypeCodings: {
    /**
     * _CitizenRoleType: A role type used to qualify a person's legal status within a country or nation.
     */
    readonly CitizenRoleType: Coding;
    /**
     * 110150: Audit participant role ID of software application
     */
    readonly Application: Coding;
    /**
     * 110151: Audit participant role ID of software application launcher, i.e., the entity that started or stopped an application
     */
    readonly ApplicationLauncher: Coding;
    /**
     * 110152: Audit participant role ID of the receiver of data
     */
    readonly DestinationRoleID: Coding;
    /**
     * 110153: Audit participant role ID of the sender of data
     */
    readonly SourceRoleID: Coding;
    /**
     * 110154: Audit participant role ID of media receiving data during an export
     */
    readonly DestinationMedia: Coding;
    /**
     * 110155: Audit participant role ID of media providing data during an import
     */
    readonly SourceMedia: Coding;
    /**
     * AFFL: Player of the Affiliate role has a business/professional relationship with scoper.  Player and scoper may be persons or organization.  The Affiliate relationship does not imply membership in a group, nor does it exist for resource scheduling purposes.
     *
     *
     *                            Example: A healthcare provider is affiliated with another provider as a business associate.
     */
    readonly Affiliate: Coding;
    /**
     * AGNT: An entity (player) that acts or is authorized to act on behalf of another entity (scoper).
     */
    readonly Agent: Coding;
    /**
     * AMENDER: A person who has corrected, edited, or amended pre-existing information.
     */
    readonly Amender: Coding;
    /**
     * ASSIGNED: An agent role in which the agent is an Entity acting in the employ of an organization.  The focus is on functional role on behalf of the organization, unlike the Employee role where the focus is on the 'Human Resources' relationship between the employee and the organization.
     */
    readonly AssignedEntity: Coding;
    /**
     * AUCG: Description:Caregiver authorized to receive patient health information.
     */
    readonly CaregiverInformationReceiver: Coding;
    /**
     * AULR: Description:Provider with legitimate relationship authorized to receive patient health information.
     */
    readonly LegitimateRelationshipInformationReceiver: Coding;
    /**
     * AUT: Definition: A party that originates the Act and therefore has responsibility for the information given in the Act and ownership of this Act.
     *
     *
     *                            Example: the report writer, the person writing the act definition, the guideline author, the placer of an order, the EKG cart (device) creating a report etc. Every Act should have an author. Authorship is regardless of mood always actual authorship.
     *
     *                         Examples of such policies might include:
     *
     *
     *
     *                               The author and anyone they explicitly delegate may update the report;
     *
     *
     *
     *                               All administrators within the same clinic may cancel and reschedule appointments created by other administrators within that clinic;
     *
     *
     *
     *                         A party that is neither an author nor a party who is extended authorship maintenance rights by policy, may only amend, reverse, override, replace, or follow up in other ways on this Act, whereby the Act remains intact and is linked to another Act authored by that other party.
     */
    readonly AuthorOriginator: Coding;
    /**
     * authserver: An entity providing authorization services to enable the electronic sharing of health-related information based on resource owner's preapproved permissions. For example, an UMA Authorization Server[UMA]
     */
    readonly AuthorizationServer: Coding;
    /**
     * AUTM: Description:Member of care team authorized to receive patient health information.
     */
    readonly CareTeamInformationReceiver: Coding;
    /**
     * AUWA: Description:Entities within specified work area authorized to receive patient health information.
     */
    readonly WorkAreaInformationReceiver: Coding;
    /**
     * CAS: A person who has fled his or her home country to find a safe place elsewhere.
     */
    readonly AsylumSeeker: Coding;
    /**
     * CASM: A person who is someone of below legal age who has fled his or her home country, without his or her parents, to find a safe place elsewhere at time of categorization.
     */
    readonly SingleMinorAsylumSeeker: Coding;
    /**
     * CLAIM: Description: A role played by a party making a claim for coverage under a policy or program.  A claimant must be either a person or organization, or a group of persons or organizations.  A claimant is not a named insured or a program eligible.
     *
     *
     *                            Discussion: With respect to liability insurance such as property and casualty insurance, a claimant must file a claim requesting indemnification for a loss that the claimant considers covered under the policy of a named insured.  The claims adjuster for the policy underwriter will review the claim to determine whether the loss meets the benefit coverage criteria under a policy, and base any indemnification or coverage payment on that review.  If a third party is liable in whole or part for the loss, the underwriter may pursue third party liability recovery.  A claimant may be involved in civil or criminal legal proceedings involving claims against a defendant party that is indemnified by an insurance policy or to protest the finding of a claims adjustor. With respect to life insurance, a beneficiary designated by a named insured becomes a claimant of the proceeds of coverage, as in the case of a life insurance policy.  However, a claimant for coverage under life insurance is not necessarily a designated beneficiary.
     *
     *
     *                            Note: A claimant is not a named insured.  However, a named insured may make a claim under a policy, e.g., an insured driver may make a claim for an injury under his or her comprehensive automobile insurance policy.  Similarly, a program eligible may make a claim under program, e.g., an unemployed worker may claim benefits under an unemployment insurance program, but parties playing these covered party role classes are not, for purposes of this vocabulary and in an effort to clearly distinguish role classes, considered claimants.
     *
     *                         In the case of a named insured making a claim, a role type code INSCLM (insured claimant) subtypes the class to indicate that either a named insured or an individual insured has filed a claim for a loss.  In the case of a program eligible, a role type code INJWKR (injured worker) subtypes the class to indicate that the covered party in a workers compensation program is an injured worker, and as such, has filed a "claim" under the program for benefits.  Likewise, a covered role type code UNEMP (unemployed worker) subtypes the program eligible class to indicate that the covered party in an unemployment insurance program has filed a claim for unemployment benefits.
     *
     *
     *                            Example: A claimant under automobile policy that is not the named insured.
     */
    readonly Claimant: Coding;
    /**
     * CLASSIFIER: An individual authorized to assign an original classification to information, including compilations of unclassified information, based on a determination that the information requires protection against unauthorized disclosure. The individual marks the information with immutable, computable, and human readable security labels in accordance with applicable security labeling policies.  The labeling policies provide instructions on whether and if so how the security labels may be later reclassified [i.e., upgraded, downgraded, used in derivative classification, or declassified] in a manner that preserves the overridden original classification binding and provenance.
     */
    readonly Classifier: Coding;
    /**
     * CN: A person who is legally recognized as a member of a nation or country, with associated rights and obligations.
     */
    readonly National: Coding;
    /**
     * CNRP: A foreigner who is present in a country (which is foreign to him/her) unlawfully or without the country's authorization (may be called an illegal alien).
     */
    readonly NonCountryMemberWithoutResidencePermit: Coding;
    /**
     * CNRPM: A person who is below legal age present in a country, without his or her parents, (which is foreign to him/her) unlawfully or without the country's authorization.
     */
    readonly NonCountryMemberMinorWithoutResidencePermit: Coding;
    /**
     * COAUTH: The entity that co-authored content. There can be multiple co-authors of content, which may take such forms as a contract, a healthcare record entry or document, a policy, or a consent directive.
     */
    readonly CoAuthor: Coding;
    /**
     * CONSENTER: An entity or an entity's delegatee who is the grantee in an agreement such as a consent for services, advanced directive, or a privacy consent directive in accordance with jurisdictional, organizational, or patient policy.
     */
    readonly Consenter: Coding;
    /**
     * CONSWIT: An entity which has witnessed and attests to observing another entity being counseled about an agreement such as a consent for services, advanced directive, or a privacy consent directive.
     */
    readonly ConsentWitness: Coding;
    /**
     * CONT: A person or an organization that provides or receives information regarding another entity. Examples; patient NOK and emergency contacts; guarantor contact; employer contact.
     */
    readonly Contact: Coding;
    /**
     * COPART: An entity which participates in the generation of and attest to veracity of content, but is not an author or coauthor. For example a surgeon who is required by institutional, regulatory, or legal rules to sign an operative report, but who was not involved in the authorship of that report.
     */
    readonly CoParticipant: Coding;
    /**
     * COVPTY: A role class played by a person who receives benefit coverage under the terms of a particular insurance policy.  The underwriter of that policy is the scoping entity.  The covered party receives coverage because of some contractual or other relationship with the holder of that policy.
     *
     *
     *                            Discussion:This reason for coverage is captured in 'Role.code' and a relationship link with type code of indirect authority should be included using the policy holder role as the source, and the covered party role as the target.
     *
     *                         Note that a particular policy may cover several individuals one of whom may be, but need not be, the policy holder.  Thus the notion of covered party is a role that is distinct from that of the policy holder.
     */
    readonly CoveredParty: Coding;
    /**
     * CPCA: A non-country member admitted to the territory of a nation or country as a non-resident for an explicit purpose.
     */
    readonly PermitCardApplicant: Coding;
    /**
     * CRP: A foreigner who is a resident of the country but does not have citizenship.
     */
    readonly NonCountryMemberWithResidencePermit: Coding;
    /**
     * CRPM: A person who is a resident below legal age of the country without his or her parents and does not have citizenship.
     */
    readonly NonCountryMemberMinorWithResidencePermit: Coding;
    /**
     * CST: An entity (person, organization or device) that is in charge of maintaining the information of this act (e.g., who maintains the report or the master service catalog item, etc.).
     */
    readonly Custodian: Coding;
    /**
     * datacollector: An entity that collects information over which the data subject may have certain rights under policy or law to control that information's management and distribution by data collectors, including the right to access, retrieve, distribute, or delete that information.
     */
    readonly DataCollector: Coding;
    /**
     * dataprocessor: An entity that processes collected information over which the data subject may have certain rights under policy or law to control that information's management and distribution by data processors, including the right to access, retrieve, distribute, or delete that information.
     */
    readonly DataProcessor: Coding;
    /**
     * datasubject: A person whose personal information is collected or processed, and who may have certain rights under policy or law to control that information's management and distribution by data collectors or processors, including the right to access, retrieve, distribute, or delete that information.
     */
    readonly DataSubject: Coding;
    /**
     * DECLASSIFIER: An individual which is authorized to declassify information based on a determination that the information no longer requires protection against unauthorized disclosure.  The individual marks the information being declassified using computable and human readable security labels indicating that this is copy of previously classified information is unclassified in accordance with applicable security labeling policies.  The labeling policies provide instructions on whether and if so how the security labels may be later reclassified [i.e., upgraded or used in derivative classification] in a manner that preserves the overridden original classification binding and provenance.
     */
    readonly Declassifier: Coding;
    /**
     * DELEGATEE: A party to whom some right or authority is granted by a delegator.
     */
    readonly Delegatee: Coding;
    /**
     * DELEGATOR: A party that grants all or some portion its right or authority to another party.
     */
    readonly Delegator: Coding;
    /**
     * DEPEN: Description: A role played by a person covered under a policy or program based on an association with a subscriber, which is recognized by the policy holder.
     *
     *
     *                            Note:  The party playing the role of a dependent is not a claimant in the sense conveyed by the RoleClassCoveredParty CLAIM (claimant).  However, a dependent may make a claim under a policy, e.g., a dependent under a health insurance policy may become the claimant for coverage under that policy for wellness examines or if injured and there is no liable third party.  In the case of a dependent making a claim, a role type code INSCLM (insured claimant) subtypes the class to indicate that the dependent has filed a claim for services covered under the health insurance policy.
     *
     *
     *                            Example: The dependent has an association with the subscriber such as a financial dependency or personal relationship such as that of a spouse, or a natural or adopted child.  The policy holder may be required by law to recognize certain associations or may have discretion about the associations.  For example, a policy holder may dictate the criteria for the dependent status of adult children who are students, such as requiring full time enrollment, or may recognize domestic partners as dependents.  Under certain circumstances, the dependent may be under the indirect authority of a responsible party acting as a surrogate for the subscriber, for example, if the subscriber is differently abled or deceased, a guardian ad Lidem or estate executor may be appointed to assume the subscriberaTMs legal standing in the relationship with the dependent.
     */
    readonly Dependent: Coding;
    /**
     * DOWNGRDER: An individual authorized to lower the classification level of labeled content and provide rationale for doing so as directed by a classification guide.
     */
    readonly Downgrader: Coding;
    /**
     * DPOWATT: A relationship between two people in which one person authorizes another, usually a family member or relative, to act for him or her in a manner which is a legally binding upon the person giving such authority as if he or she personally were to do the acts that is often limited in the kinds of powers that can be assigned.  Unlike ordinary powers of attorney, durable powers can survive for long periods of time, and again, unlike standard powers of attorney, durable powers can continue after incompetency.
     */
    readonly DurablePowerOfAttorney: Coding;
    /**
     * ECON: An entity to be contacted in the event of an emergency.
     */
    readonly EmergencyContact: Coding;
    /**
     * EMP: A relationship between a person or organization and a person or organization formed for the purpose of exchanging work for compensation.  The purpose of the role is to identify the type of relationship the employee has to the employer, rather than the nature of the work actually performed.  (Contrast with AssignedEntity.)
     */
    readonly Employee: Coding;
    /**
     * EVTWIT: A person who attests to observing an occurrence.  For example, the witness has observed a procedure and is attesting to this fact.
     */
    readonly EventWitness: Coding;
    /**
     * EXCEST: The role played by a person acting as the estate executor for a deceased subscriber or policyholder who was the responsible party
     */
    readonly ExecutorOfEstate: Coding;
    /**
     * GRANTEE: An entity which accepts certain rights or authority from a grantor.
     */
    readonly Grantee: Coding;
    /**
     * GRANTOR: An entity which agrees to confer certain rights or authority to a grantee.
     */
    readonly Grantor: Coding;
    /**
     * GT: An individual or organization that makes or gives a promise, assurance, pledge to pay or has paid the healthcare service provider.
     */
    readonly Guarantor: Coding;
    /**
     * GUADLTM: The role played by a person appointed by the court to look out for the best interests of a minor child during the course of legal proceedings.
     */
    readonly GuardianAdLidem: Coding;
    /**
     * GUARD: Guardian of a ward
     */
    readonly Guardian: Coding;
    /**
     * HPOWATT: A relationship between two people in which one person authorizes another to act for him or her in a manner which is a legally binding upon the person giving such authority as if he or she personally were to do the acts that continues (by its terms) to be effective even though the grantor has become mentally incompetent after signing the document.
     */
    readonly HealthcarePowerOfAttorney: Coding;
    /**
     * humanuser: The human user that has participated.
     */
    readonly HumanUser: Coding;
    /**
     * INF: A source of reported information (e.g., a next of kin who answers questions about the patient's history).  For history questions, the patient is logically an informant, yet the informant of history questions is implicitly the subject.
     */
    readonly Informant: Coding;
    /**
     * INTPRTER: An entity which converts spoken or written language into the language of key participants in an event such as when a provider is obtaining a patient's consent to treatment or permission to disclose information.
     */
    readonly Interpreter: Coding;
    /**
     * INVSBJ: An entity that is the subject of an investigation. This role is scoped by the party responsible for the investigation.
     */
    readonly InvestigationSubject: Coding;
    /**
     * IRCP: A party, who may or should receive or who has recieved the Act or subsequent or derivative information of that Act. Information recipient is inert, i.e., independent of mood." Rationale: this is a generalization of a too diverse family that the definition can't be any more specific, and the concept is abstract so one of the specializations should be used.
     */
    readonly InformationRecipient: Coding;
    /**
     * LA: A verifier who legally authenticates the accuracy of an act. An example would be a staff physician who sees a patient and dictates a note, then later signs it. Their signature constitutes a legal authentication.
     */
    readonly LegalAuthenticator: Coding;
    /**
     * NAMED: Description: A role played by a party to an insurance policy to which the insurer agrees to indemnify for losses, provides benefits for, or renders services.  A named insured may be either a person, non-person living subject, or an organization, or a group of persons, non-person living subjects, or organizations.
     *
     *
     *                            Discussion: The coded concept NAMED should not be used where a more specific child concept in this Specializable value set applies.  In some cases, the named insured may not be the policy holder, e.g., where a policy holder purchases life insurance policy in which another party is the named insured and the policy holder is the beneficiary of the policy.
     *
     *
     *                            Note: The party playing the role of a named insured is not a claimant in the sense conveyed by the RoleClassCoveredParty CLAIM (claimant).  However, a named insured may make a claim under a policy, e.g., e.g., a party that is the named insured and policy holder under a comprehensive automobile insurance policy may become the claimant for coverage under that policy e.g., if injured in an automobile accident and there is no liable third party.  In the case of a named insured making a claim, a role type code INSCLM (insured claimant) subtypes the class to indicate that a named insured has filed a claim for a loss.
     *
     *
     *                            Example: The named insured under a comprehensive automobile, disability, or property and casualty policy that is the named insured and may or may not be the policy holder.
     */
    readonly NamedInsured: Coding;
    /**
     * NOK: An individual designated for notification as the next of kin for a given entity.
     */
    readonly NextOfKin: Coding;
    /**
     * NOT: notary public
     */
    readonly NotaryPublic: Coding;
    /**
     * PAT: A Role of a LivingSubject (player) as an actual or potential recipient of health care services from a healthcare provider organization (scoper).
     *
     *
     *                            Usage Note: Communication about relationships between patients and specific healthcare practitioners (people) is not done via scoper.  Instead this is generally done using the CareProvision act.  This allows linkage between patient and a particular healthcare practitioner role and also allows description of the type of care involved in the relationship.
     */
    readonly Patient: Coding;
    /**
     * POWATT: A relationship between two people in which one person authorizes another to act for him in a manner which is a legally binding upon the person giving such authority as if he or she personally were to do the acts.
     */
    readonly PowerOfAttorney: Coding;
    /**
     * PRIMAUTH: An entity that is the primary or sole author of information content.  In the healthcare context, there can be only one primary author of health information content in a record entry or document.
     */
    readonly PrimaryAuthor: Coding;
    /**
     * PROMSK: Definition:Provider authorized to mask information to protect the patient, a third party, or to ensure that the provider has consulted with the patient prior to release of this information.
     */
    readonly AuthorizedProviderMaskingAuthor: Coding;
    /**
     * PROV: An Entity (player) that is authorized to provide health care services by some authorizing agency (scoper).
     */
    readonly HealthcareProvider: Coding;
    /**
     * RESPRSN: The role played by a party who has legal responsibility for another party.
     */
    readonly ResponsibleParty: Coding;
    /**
     * REVIEWER: A person, device, or algorithm that has used approved criteria for filtered data for inclusion into the patient record.  Examples: (1) a medical records clerk who scans a document for inclusion in the medical record, enters header information, or catalogues and classifies the data, or a combination thereof; (2) a gateway that receives data from another computer system and interprets that data or changes its format, or both, before entering it into the patient record.
     */
    readonly Reviewer: Coding;
    /**
     * SOURCE: An automated data source that generates a signature along with content. Examples: (1) the signature for an image that is generated by a device for inclusion in the patient record; (2) the signature for an ECG derived by an ECG system for inclusion in the patient record; (3) the data from a biomedical monitoring device or system that is for inclusion in the patient record.
     */
    readonly Source: Coding;
    /**
     * SPOWATT: A relationship between two people in which one person authorizes another to act for him or her in a manner which is a legally binding upon the person giving such authority as if he or she personally were to do the acts that is often limited in the kinds of powers that can be assigned.
     */
    readonly SpecialPowerOfAttorney: Coding;
    /**
     * TRANS: An entity entering the data into the originating system. This includes the transcriptionist for dictated text transcribed into electronic form.
     */
    readonly Transcriber: Coding;
    /**
     * TRC: A secondary information recipient, who receives copies (e.g., a primary care provider receiving copies of results as ordered by specialist).
     */
    readonly Tracker: Coding;
    /**
     * VALID: A person who validates a health information document for inclusion in the patient record. For example, a medical student or resident is credentialed to perform history or physical examinations and to write progress notes. The attending physician signs the history and physical examination to validate the entry for inclusion in the patient's medical record.
     */
    readonly Validator: Coding;
    /**
     * VERF: A person who asserts the correctness and appropriateness of an act or the recording of the act, and is accountable for the assertion that the act or the recording of the act complies with jurisdictional or organizational policy. For example, a physician is required to countersign a verbal order that has previously been recorded in the medical record by a registered nurse who has carried out the verbal order.
     */
    readonly Verifier: Coding;
    /**
     * WIT: Only with service events.  A person witnessing the action happening without doing anything.  A witness is not necessarily aware, much less approves of anything stated in the service event.  Example for a witness is students watching an operation or an advanced directive witness.
     */
    readonly Witness: Coding;
};
/**
 * This FHIR value set is comprised of Actor participation Type codes, which can be used to value FHIR agents, actors, and other role         elements. The FHIR Actor participation type value set is based on    DICOM Audit Message, C402;   ASTM Standard, E1762-95 [2013]; selected codes and          derived actor roles from HL7 RoleClass OID 2.16.840.1.113883.5.110;    HL7 Role Code 2.16.840.1.113883.5.111, including AgentRoleType;          HL7 ParticipationType OID: 2.16.840.1.113883.5.90; and    HL7 ParticipationFunction codes OID: 2.16.840.1.113883.5.88.           This value set includes, by reference, role codes from external code systems: NUCC Health Care Provider Taxonomy OID: 2.16.840.1.113883.6.101;          North American Industry Classification System [NAICS]OID: 2.16.840.1.113883.6.85; IndustryClassificationSystem 2.16.840.1.113883.1.11.16039;          and US Census Occupation Code OID: 2.16.840.1.113883.6.243 for relevant recipient or custodian codes not included in this value set.            If no source is indicated in the definition comments, then these are example FHIR codes.
 */
export declare type ParticipationRoleTypeCodingType = typeof ParticipationRoleTypeCodings;
//# sourceMappingURL=ParticipationRoleTypeCodings.d.ts.map