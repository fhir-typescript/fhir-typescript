// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/participation-role-type|4.0.1

import { Coding } from '../fhir/Coding.js'

/**
 * This FHIR value set is comprised of Actor participation Type codes, which can be used to value FHIR agents, actors, and other role         elements. The FHIR Actor participation type value set is based on    DICOM Audit Message, C402;   ASTM Standard, E1762-95 [2013]; selected codes and          derived actor roles from HL7 RoleClass OID 2.16.840.1.113883.5.110;    HL7 Role Code 2.16.840.1.113883.5.111, including AgentRoleType;          HL7 ParticipationType OID: 2.16.840.1.113883.5.90; and    HL7 ParticipationFunction codes OID: 2.16.840.1.113883.5.88.           This value set includes, by reference, role codes from external code systems: NUCC Health Care Provider Taxonomy OID: 2.16.840.1.113883.6.101;          North American Industry Classification System [NAICS]OID: 2.16.840.1.113883.6.85; IndustryClassificationSystem 2.16.840.1.113883.1.11.16039;          and US Census Occupation Code OID: 2.16.840.1.113883.6.243 for relevant recipient or custodian codes not included in this value set.            If no source is indicated in the definition comments, then these are example FHIR codes.
 */
export const ParticipationRoleTypeCodings = {
  /**
   * _CitizenRoleType: A role type used to qualify a person's legal status within a country or nation.
   */
  CitizenRoleType: new Coding({
    display: "CitizenRoleType",
    code: "_CitizenRoleType",
    system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
  }),
  /**
   * 110150: Audit participant role ID of software application
   */
  Application: new Coding({
    display: "Application",
    code: "110150",
    system: "http://dicom.nema.org/resources/ontology/DCM",
  }),
  /**
   * 110151: Audit participant role ID of software application launcher, i.e., the entity that started or stopped an application
   */
  ApplicationLauncher: new Coding({
    display: "Application Launcher",
    code: "110151",
    system: "http://dicom.nema.org/resources/ontology/DCM",
  }),
  /**
   * 110152: Audit participant role ID of the receiver of data
   */
  DestinationRoleID: new Coding({
    display: "Destination Role ID",
    code: "110152",
    system: "http://dicom.nema.org/resources/ontology/DCM",
  }),
  /**
   * 110153: Audit participant role ID of the sender of data
   */
  SourceRoleID: new Coding({
    display: "Source Role ID",
    code: "110153",
    system: "http://dicom.nema.org/resources/ontology/DCM",
  }),
  /**
   * 110154: Audit participant role ID of media receiving data during an export
   */
  DestinationMedia: new Coding({
    display: "Destination Media",
    code: "110154",
    system: "http://dicom.nema.org/resources/ontology/DCM",
  }),
  /**
   * 110155: Audit participant role ID of media providing data during an import
   */
  SourceMedia: new Coding({
    display: "Source Media",
    code: "110155",
    system: "http://dicom.nema.org/resources/ontology/DCM",
  }),
  /**
   * AFFL: Player of the Affiliate role has a business/professional relationship with scoper.  Player and scoper may be persons or organization.  The Affiliate relationship does not imply membership in a group, nor does it exist for resource scheduling purposes.
   * 
   *                         
   *                            Example: A healthcare provider is affiliated with another provider as a business associate.
   */
  Affiliate: new Coding({
    display: "affiliate",
    code: "AFFL",
    system: "http://terminology.hl7.org/CodeSystem/v3-RoleClass",
  }),
  /**
   * AGNT: An entity (player) that acts or is authorized to act on behalf of another entity (scoper).
   */
  Agent: new Coding({
    display: "agent",
    code: "AGNT",
    system: "http://terminology.hl7.org/CodeSystem/v3-RoleClass",
  }),
  /**
   * AMENDER: A person who has corrected, edited, or amended pre-existing information.
   */
  Amender: new Coding({
    display: "Amender",
    code: "AMENDER",
    system: "http://terminology.hl7.org/CodeSystem/contractsignertypecodes",
  }),
  /**
   * ASSIGNED: An agent role in which the agent is an Entity acting in the employ of an organization.  The focus is on functional role on behalf of the organization, unlike the Employee role where the focus is on the 'Human Resources' relationship between the employee and the organization.
   */
  AssignedEntity: new Coding({
    display: "assigned entity",
    code: "ASSIGNED",
    system: "http://terminology.hl7.org/CodeSystem/v3-RoleClass",
  }),
  /**
   * AUCG: Description:Caregiver authorized to receive patient health information.
   */
  CaregiverInformationReceiver: new Coding({
    display: "caregiver information receiver",
    code: "AUCG",
    system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationFunction",
  }),
  /**
   * AULR: Description:Provider with legitimate relationship authorized to receive patient health information.
   */
  LegitimateRelationshipInformationReceiver: new Coding({
    display: "legitimate relationship information receiver",
    code: "AULR",
    system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationFunction",
  }),
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
  AuthorOriginator: new Coding({
    display: "author (originator)",
    code: "AUT",
    system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
  }),
  /**
   * authserver: An entity providing authorization services to enable the electronic sharing of health-related information based on resource owner's preapproved permissions. For example, an UMA Authorization Server[UMA]
   */
  AuthorizationServer: new Coding({
    display: "authorization server",
    code: "authserver",
    system: "http://terminology.hl7.org/CodeSystem/extra-security-role-type",
  }),
  /**
   * AUTM: Description:Member of care team authorized to receive patient health information.
   */
  CareTeamInformationReceiver: new Coding({
    display: "care team information receiver",
    code: "AUTM",
    system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationFunction",
  }),
  /**
   * AUWA: Description:Entities within specified work area authorized to receive patient health information.
   */
  WorkAreaInformationReceiver: new Coding({
    display: "work area information receiver",
    code: "AUWA",
    system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationFunction",
  }),
  /**
   * CAS: A person who has fled his or her home country to find a safe place elsewhere.
   */
  AsylumSeeker: new Coding({
    display: "asylum seeker",
    code: "CAS",
    system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
  }),
  /**
   * CASM: A person who is someone of below legal age who has fled his or her home country, without his or her parents, to find a safe place elsewhere at time of categorization.
   */
  SingleMinorAsylumSeeker: new Coding({
    display: "single minor asylum seeker",
    code: "CASM",
    system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
  }),
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
  Claimant: new Coding({
    display: "claimant",
    code: "CLAIM",
    system: "http://terminology.hl7.org/CodeSystem/v3-RoleClass",
  }),
  /**
   * CLASSIFIER: An individual authorized to assign an original classification to information, including compilations of unclassified information, based on a determination that the information requires protection against unauthorized disclosure. The individual marks the information with immutable, computable, and human readable security labels in accordance with applicable security labeling policies.  The labeling policies provide instructions on whether and if so how the security labels may be later reclassified [i.e., upgraded, downgraded, used in derivative classification, or declassified] in a manner that preserves the overridden original classification binding and provenance.
   */
  Classifier: new Coding({
    display: "classifier",
    code: "CLASSIFIER",
    system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
  }),
  /**
   * CN: A person who is legally recognized as a member of a nation or country, with associated rights and obligations.
   */
  National: new Coding({
    display: "national",
    code: "CN",
    system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
  }),
  /**
   * CNRP: A foreigner who is present in a country (which is foreign to him/her) unlawfully or without the country's authorization (may be called an illegal alien).
   */
  NonCountryMemberWithoutResidencePermit: new Coding({
    display: "non-country member without residence permit",
    code: "CNRP",
    system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
  }),
  /**
   * CNRPM: A person who is below legal age present in a country, without his or her parents, (which is foreign to him/her) unlawfully or without the country's authorization.
   */
  NonCountryMemberMinorWithoutResidencePermit: new Coding({
    display: "non-country member minor without residence permit",
    code: "CNRPM",
    system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
  }),
  /**
   * COAUTH: The entity that co-authored content. There can be multiple co-authors of content, which may take such forms as a contract, a healthcare record entry or document, a policy, or a consent directive.
   */
  CoAuthor: new Coding({
    display: "Co-Author",
    code: "COAUTH",
    system: "http://terminology.hl7.org/CodeSystem/contractsignertypecodes",
  }),
  /**
   * CONSENTER: An entity or an entity's delegatee who is the grantee in an agreement such as a consent for services, advanced directive, or a privacy consent directive in accordance with jurisdictional, organizational, or patient policy.
   */
  Consenter: new Coding({
    display: "consenter",
    code: "CONSENTER",
    system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
  }),
  /**
   * CONSWIT: An entity which has witnessed and attests to observing another entity being counseled about an agreement such as a consent for services, advanced directive, or a privacy consent directive.
   */
  ConsentWitness: new Coding({
    display: "consent witness",
    code: "CONSWIT",
    system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
  }),
  /**
   * CONT: A person or an organization that provides or receives information regarding another entity. Examples; patient NOK and emergency contacts; guarantor contact; employer contact.
   */
  Contact: new Coding({
    display: "Contact",
    code: "CONT",
    system: "http://terminology.hl7.org/CodeSystem/contractsignertypecodes",
  }),
  /**
   * COPART: An entity which participates in the generation of and attest to veracity of content, but is not an author or coauthor. For example a surgeon who is required by institutional, regulatory, or legal rules to sign an operative report, but who was not involved in the authorship of that report.
   */
  CoParticipant: new Coding({
    display: "co-participant",
    code: "COPART",
    system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
  }),
  /**
   * COVPTY: A role class played by a person who receives benefit coverage under the terms of a particular insurance policy.  The underwriter of that policy is the scoping entity.  The covered party receives coverage because of some contractual or other relationship with the holder of that policy.
   * 
   *                         
   *                            Discussion:This reason for coverage is captured in 'Role.code' and a relationship link with type code of indirect authority should be included using the policy holder role as the source, and the covered party role as the target.
   * 
   *                         Note that a particular policy may cover several individuals one of whom may be, but need not be, the policy holder.  Thus the notion of covered party is a role that is distinct from that of the policy holder.
   */
  CoveredParty: new Coding({
    display: "covered party",
    code: "COVPTY",
    system: "http://terminology.hl7.org/CodeSystem/v3-RoleClass",
  }),
  /**
   * CPCA: A non-country member admitted to the territory of a nation or country as a non-resident for an explicit purpose.
   */
  PermitCardApplicant: new Coding({
    display: "permit card applicant",
    code: "CPCA",
    system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
  }),
  /**
   * CRP: A foreigner who is a resident of the country but does not have citizenship.
   */
  NonCountryMemberWithResidencePermit: new Coding({
    display: "non-country member with residence permit",
    code: "CRP",
    system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
  }),
  /**
   * CRPM: A person who is a resident below legal age of the country without his or her parents and does not have citizenship.
   */
  NonCountryMemberMinorWithResidencePermit: new Coding({
    display: "non-country member minor with residence permit",
    code: "CRPM",
    system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
  }),
  /**
   * CST: An entity (person, organization or device) that is in charge of maintaining the information of this act (e.g., who maintains the report or the master service catalog item, etc.).
   */
  Custodian: new Coding({
    display: "custodian",
    code: "CST",
    system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
  }),
  /**
   * datacollector: An entity that collects information over which the data subject may have certain rights under policy or law to control that information's management and distribution by data collectors, including the right to access, retrieve, distribute, or delete that information. 
   */
  DataCollector: new Coding({
    display: "data collector",
    code: "datacollector",
    system: "http://terminology.hl7.org/CodeSystem/extra-security-role-type",
  }),
  /**
   * dataprocessor: An entity that processes collected information over which the data subject may have certain rights under policy or law to control that information's management and distribution by data processors, including the right to access, retrieve, distribute, or delete that information.
   */
  DataProcessor: new Coding({
    display: "data processor",
    code: "dataprocessor",
    system: "http://terminology.hl7.org/CodeSystem/extra-security-role-type",
  }),
  /**
   * datasubject: A person whose personal information is collected or processed, and who may have certain rights under policy or law to control that information's management and distribution by data collectors or processors, including the right to access, retrieve, distribute, or delete that information.
   */
  DataSubject: new Coding({
    display: "data subject",
    code: "datasubject",
    system: "http://terminology.hl7.org/CodeSystem/extra-security-role-type",
  }),
  /**
   * DECLASSIFIER: An individual which is authorized to declassify information based on a determination that the information no longer requires protection against unauthorized disclosure.  The individual marks the information being declassified using computable and human readable security labels indicating that this is copy of previously classified information is unclassified in accordance with applicable security labeling policies.  The labeling policies provide instructions on whether and if so how the security labels may be later reclassified [i.e., upgraded or used in derivative classification] in a manner that preserves the overridden original classification binding and provenance.
   */
  Declassifier: new Coding({
    display: "declassifier",
    code: "DECLASSIFIER",
    system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
  }),
  /**
   * DELEGATEE: A party to whom some right or authority is granted by a delegator.
   */
  Delegatee: new Coding({
    display: "delegatee",
    code: "DELEGATEE",
    system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
  }),
  /**
   * DELEGATOR: A party that grants all or some portion its right or authority to another party.
   */
  Delegator: new Coding({
    display: "delegator",
    code: "DELEGATOR",
    system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
  }),
  /**
   * DEPEN: Description: A role played by a person covered under a policy or program based on an association with a subscriber, which is recognized by the policy holder.
   * 
   *                         
   *                            Note:  The party playing the role of a dependent is not a claimant in the sense conveyed by the RoleClassCoveredParty CLAIM (claimant).  However, a dependent may make a claim under a policy, e.g., a dependent under a health insurance policy may become the claimant for coverage under that policy for wellness examines or if injured and there is no liable third party.  In the case of a dependent making a claim, a role type code INSCLM (insured claimant) subtypes the class to indicate that the dependent has filed a claim for services covered under the health insurance policy.
   * 
   *                         
   *                            Example: The dependent has an association with the subscriber such as a financial dependency or personal relationship such as that of a spouse, or a natural or adopted child.  The policy holder may be required by law to recognize certain associations or may have discretion about the associations.  For example, a policy holder may dictate the criteria for the dependent status of adult children who are students, such as requiring full time enrollment, or may recognize domestic partners as dependents.  Under certain circumstances, the dependent may be under the indirect authority of a responsible party acting as a surrogate for the subscriber, for example, if the subscriber is differently abled or deceased, a guardian ad Lidem or estate executor may be appointed to assume the subscriberaTMs legal standing in the relationship with the dependent.
   */
  Dependent: new Coding({
    display: "dependent",
    code: "DEPEN",
    system: "http://terminology.hl7.org/CodeSystem/v3-RoleClass",
  }),
  /**
   * DOWNGRDER: An individual authorized to lower the classification level of labeled content and provide rationale for doing so as directed by a classification guide.
   */
  Downgrader: new Coding({
    display: "downgrader",
    code: "DOWNGRDER",
    system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
  }),
  /**
   * DPOWATT: A relationship between two people in which one person authorizes another, usually a family member or relative, to act for him or her in a manner which is a legally binding upon the person giving such authority as if he or she personally were to do the acts that is often limited in the kinds of powers that can be assigned.  Unlike ordinary powers of attorney, durable powers can survive for long periods of time, and again, unlike standard powers of attorney, durable powers can continue after incompetency.
   */
  DurablePowerOfAttorney: new Coding({
    display: "durable power of attorney",
    code: "DPOWATT",
    system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
  }),
  /**
   * ECON: An entity to be contacted in the event of an emergency.
   */
  EmergencyContact: new Coding({
    display: "emergency contact",
    code: "ECON",
    system: "http://terminology.hl7.org/CodeSystem/v3-RoleClass",
  }),
  /**
   * EMP: A relationship between a person or organization and a person or organization formed for the purpose of exchanging work for compensation.  The purpose of the role is to identify the type of relationship the employee has to the employer, rather than the nature of the work actually performed.  (Contrast with AssignedEntity.)
   */
  Employee: new Coding({
    display: "employee",
    code: "EMP",
    system: "http://terminology.hl7.org/CodeSystem/v3-RoleClass",
  }),
  /**
   * EVTWIT: A person who attests to observing an occurrence.  For example, the witness has observed a procedure and is attesting to this fact.
   */
  EventWitness: new Coding({
    display: "Event Witness",
    code: "EVTWIT",
    system: "http://terminology.hl7.org/CodeSystem/contractsignertypecodes",
  }),
  /**
   * EXCEST: The role played by a person acting as the estate executor for a deceased subscriber or policyholder who was the responsible party
   */
  ExecutorOfEstate: new Coding({
    display: "executor of estate",
    code: "EXCEST",
    system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
  }),
  /**
   * GRANTEE: An entity which accepts certain rights or authority from a grantor.
   */
  Grantee: new Coding({
    display: "grantee",
    code: "GRANTEE",
    system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
  }),
  /**
   * GRANTOR: An entity which agrees to confer certain rights or authority to a grantee.
   */
  Grantor: new Coding({
    display: "grantor",
    code: "GRANTOR",
    system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
  }),
  /**
   * GT: An individual or organization that makes or gives a promise, assurance, pledge to pay or has paid the healthcare service provider.
   */
  Guarantor: new Coding({
    display: "Guarantor",
    code: "GT",
    system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
  }),
  /**
   * GUADLTM: The role played by a person appointed by the court to look out for the best interests of a minor child during the course of legal proceedings.
   */
  GuardianAdLidem: new Coding({
    display: "guardian ad lidem",
    code: "GUADLTM",
    system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
  }),
  /**
   * GUARD: Guardian of a ward
   */
  Guardian: new Coding({
    display: "guardian",
    code: "GUARD",
    system: "http://terminology.hl7.org/CodeSystem/v3-RoleClass",
  }),
  /**
   * HPOWATT: A relationship between two people in which one person authorizes another to act for him or her in a manner which is a legally binding upon the person giving such authority as if he or she personally were to do the acts that continues (by its terms) to be effective even though the grantor has become mentally incompetent after signing the document.
   */
  HealthcarePowerOfAttorney: new Coding({
    display: "healthcare power of attorney",
    code: "HPOWATT",
    system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
  }),
  /**
   * humanuser: The human user that has participated.
   */
  HumanUser: new Coding({
    display: "human user",
    code: "humanuser",
    system: "http://terminology.hl7.org/CodeSystem/extra-security-role-type",
  }),
  /**
   * INF: A source of reported information (e.g., a next of kin who answers questions about the patient's history).  For history questions, the patient is logically an informant, yet the informant of history questions is implicitly the subject.
   */
  Informant: new Coding({
    display: "informant",
    code: "INF",
    system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
  }),
  /**
   * INTPRTER: An entity which converts spoken or written language into the language of key participants in an event such as when a provider is obtaining a patient's consent to treatment or permission to disclose information.
   */
  Interpreter: new Coding({
    display: "interpreter",
    code: "INTPRTER",
    system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
  }),
  /**
   * INVSBJ: An entity that is the subject of an investigation. This role is scoped by the party responsible for the investigation.
   */
  InvestigationSubject: new Coding({
    display: "Investigation Subject",
    code: "INVSBJ",
    system: "http://terminology.hl7.org/CodeSystem/v3-RoleClass",
  }),
  /**
   * IRCP: A party, who may or should receive or who has recieved the Act or subsequent or derivative information of that Act. Information recipient is inert, i.e., independent of mood." Rationale: this is a generalization of a too diverse family that the definition can't be any more specific, and the concept is abstract so one of the specializations should be used.
   */
  InformationRecipient: new Coding({
    display: "information recipient",
    code: "IRCP",
    system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
  }),
  /**
   * LA: A verifier who legally authenticates the accuracy of an act. An example would be a staff physician who sees a patient and dictates a note, then later signs it. Their signature constitutes a legal authentication.
   */
  LegalAuthenticator: new Coding({
    display: "legal authenticator",
    code: "LA",
    system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
  }),
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
  NamedInsured: new Coding({
    display: "named insured",
    code: "NAMED",
    system: "http://terminology.hl7.org/CodeSystem/v3-RoleClass",
  }),
  /**
   * NOK: An individual designated for notification as the next of kin for a given entity.
   */
  NextOfKin: new Coding({
    display: "next of kin",
    code: "NOK",
    system: "http://terminology.hl7.org/CodeSystem/v3-RoleClass",
  }),
  /**
   * NOT: notary public
   */
  NotaryPublic: new Coding({
    display: "notary public",
    code: "NOT",
    system: "http://terminology.hl7.org/CodeSystem/v3-RoleClass",
  }),
  /**
   * PAT: A Role of a LivingSubject (player) as an actual or potential recipient of health care services from a healthcare provider organization (scoper).
   * 
   *                         
   *                            Usage Note: Communication about relationships between patients and specific healthcare practitioners (people) is not done via scoper.  Instead this is generally done using the CareProvision act.  This allows linkage between patient and a particular healthcare practitioner role and also allows description of the type of care involved in the relationship.
   */
  Patient: new Coding({
    display: "patient",
    code: "PAT",
    system: "http://terminology.hl7.org/CodeSystem/v3-RoleClass",
  }),
  /**
   * POWATT: A relationship between two people in which one person authorizes another to act for him in a manner which is a legally binding upon the person giving such authority as if he or she personally were to do the acts.
   */
  PowerOfAttorney: new Coding({
    display: "power of attorney",
    code: "POWATT",
    system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
  }),
  /**
   * PRIMAUTH: An entity that is the primary or sole author of information content.  In the healthcare context, there can be only one primary author of health information content in a record entry or document.
   */
  PrimaryAuthor: new Coding({
    display: "Primary Author",
    code: "PRIMAUTH",
    system: "http://terminology.hl7.org/CodeSystem/contractsignertypecodes",
  }),
  /**
   * PROMSK: Definition:Provider authorized to mask information to protect the patient, a third party, or to ensure that the provider has consulted with the patient prior to release of this information.
   */
  AuthorizedProviderMaskingAuthor: new Coding({
    display: "authorized provider masking author",
    code: "PROMSK",
    system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationFunction",
  }),
  /**
   * PROV: An Entity (player) that is authorized to provide health care services by some authorizing agency (scoper).
   */
  HealthcareProvider: new Coding({
    display: "healthcare provider",
    code: "PROV",
    system: "http://terminology.hl7.org/CodeSystem/v3-RoleClass",
  }),
  /**
   * RESPRSN: The role played by a party who has legal responsibility for another party.
   */
  ResponsibleParty: new Coding({
    display: "responsible party",
    code: "RESPRSN",
    system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
  }),
  /**
   * REVIEWER: A person, device, or algorithm that has used approved criteria for filtered data for inclusion into the patient record.  Examples: (1) a medical records clerk who scans a document for inclusion in the medical record, enters header information, or catalogues and classifies the data, or a combination thereof; (2) a gateway that receives data from another computer system and interprets that data or changes its format, or both, before entering it into the patient record.
   */
  Reviewer: new Coding({
    display: "Reviewer",
    code: "REVIEWER",
    system: "http://terminology.hl7.org/CodeSystem/contractsignertypecodes",
  }),
  /**
   * SOURCE: An automated data source that generates a signature along with content. Examples: (1) the signature for an image that is generated by a device for inclusion in the patient record; (2) the signature for an ECG derived by an ECG system for inclusion in the patient record; (3) the data from a biomedical monitoring device or system that is for inclusion in the patient record.
   */
  Source: new Coding({
    display: "Source",
    code: "SOURCE",
    system: "http://terminology.hl7.org/CodeSystem/contractsignertypecodes",
  }),
  /**
   * SPOWATT: A relationship between two people in which one person authorizes another to act for him or her in a manner which is a legally binding upon the person giving such authority as if he or she personally were to do the acts that is often limited in the kinds of powers that can be assigned.
   */
  SpecialPowerOfAttorney: new Coding({
    display: "special power of attorney",
    code: "SPOWATT",
    system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
  }),
  /**
   * TRANS: An entity entering the data into the originating system. This includes the transcriptionist for dictated text transcribed into electronic form.
   */
  Transcriber: new Coding({
    display: "Transcriber",
    code: "TRANS",
    system: "http://terminology.hl7.org/CodeSystem/contractsignertypecodes",
  }),
  /**
   * TRC: A secondary information recipient, who receives copies (e.g., a primary care provider receiving copies of results as ordered by specialist).
   */
  Tracker: new Coding({
    display: "tracker",
    code: "TRC",
    system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
  }),
  /**
   * VALID: A person who validates a health information document for inclusion in the patient record. For example, a medical student or resident is credentialed to perform history or physical examinations and to write progress notes. The attending physician signs the history and physical examination to validate the entry for inclusion in the patient's medical record.
   */
  Validator: new Coding({
    display: "Validator",
    code: "VALID",
    system: "http://terminology.hl7.org/CodeSystem/contractsignertypecodes",
  }),
  /**
   * VERF: A person who asserts the correctness and appropriateness of an act or the recording of the act, and is accountable for the assertion that the act or the recording of the act complies with jurisdictional or organizational policy. For example, a physician is required to countersign a verbal order that has previously been recorded in the medical record by a registered nurse who has carried out the verbal order.
   */
  Verifier: new Coding({
    display: "Verifier",
    code: "VERF",
    system: "http://terminology.hl7.org/CodeSystem/contractsignertypecodes",
  }),
  /**
   * WIT: Only with service events.  A person witnessing the action happening without doing anything.  A witness is not necessarily aware, much less approves of anything stated in the service event.  Example for a witness is students watching an operation or an advanced directive witness.
   */
  Witness: new Coding({
    display: "witness",
    code: "WIT",
    system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
  }),
} as const;

/**
 * This FHIR value set is comprised of Actor participation Type codes, which can be used to value FHIR agents, actors, and other role         elements. The FHIR Actor participation type value set is based on    DICOM Audit Message, C402;   ASTM Standard, E1762-95 [2013]; selected codes and          derived actor roles from HL7 RoleClass OID 2.16.840.1.113883.5.110;    HL7 Role Code 2.16.840.1.113883.5.111, including AgentRoleType;          HL7 ParticipationType OID: 2.16.840.1.113883.5.90; and    HL7 ParticipationFunction codes OID: 2.16.840.1.113883.5.88.           This value set includes, by reference, role codes from external code systems: NUCC Health Care Provider Taxonomy OID: 2.16.840.1.113883.6.101;          North American Industry Classification System [NAICS]OID: 2.16.840.1.113883.6.85; IndustryClassificationSystem 2.16.840.1.113883.1.11.16039;          and US Census Occupation Code OID: 2.16.840.1.113883.6.243 for relevant recipient or custodian codes not included in this value set.            If no source is indicated in the definition comments, then these are example FHIR codes.
 */
export type ParticipationRoleTypeCodingType = typeof ParticipationRoleTypeCodings;