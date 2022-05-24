import { CodingArgs } from '../fhir/Coding.js';
/**
 * This value set contains representative Activity Type codes, which includes codes from the HL7 DocumentCompletion, ActStatus, and DataOperations code system, W3C PROV-DM and PROV-N concepts and display names, several HL7 Lifecycle Event codes for which there are agreed upon definitions, and non-duplicated codes from the HL7 Security and Privacy Ontology Operations codes.
 */
export declare type ProvenanceActivityTypeCodingType = {
    /**
     * _ParticipationAncillary: Participations related, but not primary to an act. The Referring, Admitting, and Discharging practitioners must be the same person as those authoring the ControlAct event for their respective trigger events.
     */
    ParticipationAncillary: CodingArgs;
    /**
     * _ParticipationInformationGenerator: Parties that may or should contribute or have contributed information to the Act. Such information includes information leading to the decision to perform the Act and how to perform the Act (e.g., consultant), information that the Act itself seeks to reveal (e.g., informant of clinical history), or information about what Act was performed (e.g., informant witness).
     */
    ParticipationInformationGenerator: CodingArgs;
    /**
     * ADM: The practitioner who is responsible for admitting a patient to a patient encounter.
     */
    Admitter: CodingArgs;
    /**
     * ALY: The target of an Observation action. Links an observation to a Role whose player is the substance or most specific component entity (material, micro-organism, etc.) being measured within the subject.
     *
     *
     *                            Examples: A "plasma porcelain substance concentration" has analyte a Role with player substance Entity "porcelain".
     *
     *
     *                            UsageNotes: The Role that this participation connects to may be any Role whose player is that substance measured. Very often, the scoper may indicate the system in which the component is being measured. E.g., for "plasma porcelain" the scoper could be "Plasma".
     */
    Analyte: CodingArgs;
    /**
     * ANONY: Custodian system must remove any information that could result in identifying the information subject.
     */
    Anonymize: CodingArgs;
    /**
     * APPEND: Description:Fundamental operation in an Information System (IS) that results only in the addition of information to an object already in existence. Note: The preceding definition is taken from the HL7 RBAC specification.  There is no restriction on how the operation is invoked, e.g., via a user interface.
     */
    Append: CodingArgs;
    /**
     * ATND: The practitioner that has responsibility for overseeing a patient's care during a patient encounter.
     */
    Attender: CodingArgs;
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
    AuthorOriginator: CodingArgs;
    /**
     * AUTHEN: A verifier who attests to the accuracy of an act, but who does not have privileges to legally authenticate the act. An example would be a resident physician who sees a patient and dictates a note, then later signs it. Their signature constitutes an authentication.
     */
    Authenticator: CodingArgs;
    /**
     * BBY: In an obstetric service, the baby.
     */
    Baby: CodingArgs;
    /**
     * BEN: Target on behalf of whom the service happens, but that is not necessarily present in the service.  Can occur together with direct target to indicate that a target is both, as in the case where the patient is the indirect beneficiary of a service rendered to a family member, e.g. counseling or given home care instructions.  This concept includes a participant, such as a covered party, who derives benefits from a service act covered by a coverage act.
     *
     *                         Note that the semantic role of the intended recipient who benefits from the happening denoted by the verb in the clause.  Thus, a patient who has no coverage under a policy or program may be a beneficiary of a health service while not being the beneficiary of coverage for that service.
     */
    Beneficiary: CodingArgs;
    /**
     * CAGNT: Definition: A factor, such as a microorganism, chemical substance, or form of radiation, whose presence, excessive presence, or (in deficiency diseases) relative absence is essential, in whole or in part, for the occurrence of a condition.
     *
     *                         Constraint:  The use of this participation is limited to observations.
     */
    CausativeAgent: CodingArgs;
    /**
     * CALLBCK: A person or organization who should be contacted for follow-up questions about the act in place of the author.
     */
    CallbackContact: CodingArgs;
    /**
     * CAT: The catalyst of a chemical reaction, such as an enzyme or a platinum surface. In biochemical reactions, connects the enzyme with the molecular interaction
     */
    Catalyst: CodingArgs;
    /**
     * CON: An advisor participating in the service by performing evaluations and making recommendations.
     */
    Consultant: CodingArgs;
    /**
     * COV: The target participation for an individual in a health care coverage act in which the target role is either the policy holder of the coverage, or a covered party under the coverage.
     */
    CoverageTarget: CodingArgs;
    /**
     * CREATE: Description:Fundamental operation in an Information System (IS) that results only in the act of bringing an object into existence. Note: The preceding definition is taken from the HL7 RBAC specification.  There is no restriction on how the operation is invoked, e.g., via a user interface. For an HL7 Act, the state transitions per the HL7 Reference Information Model.
     */
    Create: CodingArgs;
    /**
     * CSM: Participant material that is taken up, diminished, altered, or disappears in the act.
     */
    Consumable: CodingArgs;
    /**
     * CST: An entity (person, organization or device) that is in charge of maintaining the information of this act (e.g., who maintains the report or the master service catalog item, etc.).
     */
    Custodian: CodingArgs;
    /**
     * DEID: Custodian system must strip information of data that would allow the identification of the source of the information or the information subject.
     */
    Deidentify: CodingArgs;
    /**
     * DELETE: Description:Fundamental operation in an Information System (IS) that results only in the removal of information about an object from memory or storage. Note: The preceding definition is taken from the HL7 RBAC specification.  There is no restriction on how the operation is invoked, e.g., via a user interface.
     */
    Delete: CodingArgs;
    /**
     * DEV: Participant used in performing the act without being substantially affected by the act (i.e. durable or inert with respect to that particular service).
     *
     *
     *                            Examples: monitoring equipment, tools, but also access/drainage lines, prostheses, pace maker, etc.
     */
    Device: CodingArgs;
    /**
     * DIR: Target participant  that is substantially present in the act  and which is directly involved in the action (includes consumed material, devices, etc.).
     */
    DirectTarget: CodingArgs;
    /**
     * DIS: The practitioner who is responsible for the discharge of a patient from a patient encounter.
     */
    Discharger: CodingArgs;
    /**
     * DIST: Distributes material used in or generated during the act.
     */
    Distributor: CodingArgs;
    /**
     * DON: In some organ transplantation services and rarely in transfusion services a donor will be a target participant in the service.  However, in most cases transplantation is decomposed in three services: explantation, transport, and implantation.  The identity of the donor (recipient) is often irrelevant for the explantation (implantation) service.
     */
    Donor: CodingArgs;
    /**
     * DST: The destination for services.  May be a static building (or room therein) or a movable facility (e.g., ship).
     */
    Destination: CodingArgs;
    /**
     * ELOC: A location where data about an Act was entered.
     */
    EntryLocation: CodingArgs;
    /**
     * ENT: A person entering the data into the originating system.  The data entry person is collected optionally for internal quality control purposes.  This includes the transcriptionist for dictated text.
     */
    DataEntryPerson: CodingArgs;
    /**
     * ESC: Only with Transportation services.  A person who escorts the patient.
     */
    Escort: CodingArgs;
    /**
     * EXPAGNT: Description: The entity playing the associated role is the physical (including energy), chemical or biological substance that is participating in the exposure.  For example in communicable diseases, the associated playing entity is the disease causing pathogen.
     */
    ExposureAgent: CodingArgs;
    /**
     * EXPART: Description:Direct participation in an exposure act where it is unknown that the participant is the source or subject of the exposure.  If the participant is known to be the contact of an exposure then the SBJ participation type should be used.  If the participant is known to be the source then the EXSRC participation type should be used.
     */
    ExposureParticipation: CodingArgs;
    /**
     * EXPTRGT: Description: The entity playing the associated role is the target (contact) of exposure.
     */
    ExposureTarget: CodingArgs;
    /**
     * EXSRC: Description:The entity playing the associated role is the source of exposure.
     */
    ExposureSource: CodingArgs;
    /**
     * GUAR: The target person or organization contractually recognized by the issuer as a participant who has assumed fiscal responsibility for another personaTMs financial obligations by guaranteeing to pay for amounts owed to a particular account
     *
     *
     *                            Example:The subscriber of the patientaTMs health insurance policy signs a contract with the provider to be fiscally responsible for the patient billing account balance amount owed.
     */
    GuarantorParty: CodingArgs;
    /**
     * HLD: Participant who posses an instrument such as a financial contract (insurance policy) usually based on some agreement with the author.
     */
    Holder: CodingArgs;
    /**
     * IND: Target that is not substantially present in the act and which is not directly affected by the act, but which will be a focus of the record or documentation of the act.
     */
    IndirectTarget: CodingArgs;
    /**
     * INF: A source of reported information (e.g., a next of kin who answers questions about the patient's history).  For history questions, the patient is logically an informant, yet the informant of history questions is implicitly the subject.
     */
    Informant: CodingArgs;
    /**
     * IRCP: A party, who may or should receive or who has recieved the Act or subsequent or derivative information of that Act. Information recipient is inert, i.e., independent of mood." Rationale: this is a generalization of a too diverse family that the definition can't be any more specific, and the concept is abstract so one of the specializations should be used.
     */
    InformationRecipient: CodingArgs;
    /**
     * LA: A completion status in which a document has been signed manually or electronically by the individual who is legally responsible for that document. This is the most mature state in the workflow progression.
     */
    LegallyAuthenticated: CodingArgs;
    /**
     * LA: A verifier who legally authenticates the accuracy of an act. An example would be a staff physician who sees a patient and dictates a note, then later signs it. Their signature constitutes a legal authentication.
     */
    LegalAuthenticator: CodingArgs;
    /**
     * LABEL: Custodian security system must assign and bind security labels in order to classify information created in the information systems under its control for collection, access, use and disclosure in accordance with applicable jurisdictional privacy policies associated with the target information. The system must retain an immutable record of the assignment and binding.
     *
     *
     *                            Usage Note: In security systems, security policy label assignments do not change, they may supersede prior assignments, and such reassignments are always tracked for auditing and other purposes.
     */
    AssignSecurityLabel: CodingArgs;
    /**
     * LOC: The facility where the service is done.  May be a static building (or room therein) or a moving location (e.g., ambulance, helicopter, aircraft, train, truck, ship, etc.)
     */
    Location: CodingArgs;
    /**
     * MASK: Custodian system must render information unreadable and unusable by algorithmically transforming plaintext into ciphertext.  User may be provided a key to decrypt per license or "shared secret".
     */
    Mask: CodingArgs;
    /**
     * NOT: An information recipient to notify for urgent matters about this Act. (e.g., in a laboratory order, critical results are being called by phone right away, this is the contact to call; or for an inpatient encounter, a next of kin to notify when the patient becomes critically ill).
     */
    UgentNotificationContact: CodingArgs;
    /**
     * NRD: A device that changes ownership due to the service, e.g., a pacemaker, a prosthesis, an insulin injection equipment (pen), etc.  Such material may need to be restocked after he service.
     */
    NonReuseableDevice: CodingArgs;
    /**
     * NULLIFY: Description:Change the status of an object representing an Act to "nullified", i.e., treat as though it never existed. For an HL7 Act, the state transitions per the HL7 Reference Information Model.
     */
    Nullify: CodingArgs;
    /**
     * ORG: The location of origin for services.  May be a static building (or room therein) or a movable facility (e.g., ship).
     */
    Origin: CodingArgs;
    /**
     * PART: Indicates that the target of the participation is involved in some manner in the act, but does not qualify how.
     */
    Participation: CodingArgs;
    /**
     * PPRF: The principal or primary performer of the act.
     */
    PrimaryPerformer: CodingArgs;
    /**
     * PRCP: Information recipient to whom an act statement is primarily directed. E.g., a primary care provider receiving a discharge letter from a hospitalist, a health department receiving information on a suspected case of infectious disease. Multiple of these participations may exist on the same act without requiring that recipients be ranked as primary vs. secondary.
     */
    PrimaryInformationRecipient: CodingArgs;
    /**
     * PRD: Participant material that is brought forth (produced) in the act (e.g., specimen in a specimen collection, access or drainage in a placement service, medication package in a dispense service). It does not matter whether the material produced had existence prior to the service, or whether it is created in the service (e.g., in supply services the product is taken from a stock).
     */
    Product: CodingArgs;
    /**
     * PRF: Definition: A person, non-person living subject, organization or device that who actually and principally carries out the action. Device should only be assigned as a performer in circumstances where the device is performing independent of human intervention.  Need not be the principal responsible actor.
     *
     *
     *                            Exampe: A surgery resident operating under supervision of attending surgeon, a search and rescue dog locating survivors, an electronic laboratory analyzer or the laboratory discipline requested to perform a laboratory test. The performer may also be the patient in self-care, e.g. fingerstick blood sugar. The traditional order filler is a performer. This information should accompany every service event.
     *
     *
     *                            Note: that existing HL7 designs assign an organization as the playing entity of the Role that is the performer.  These designs should be revised in subsequent releases to make this the scooping entity for the role involved.
     */
    Performer: CodingArgs;
    /**
     * PSEUD: Custodian system must strip information of data that would allow the identification of the source of the information or the information subject.  Custodian may retain a key to relink data necessary to reidentify the information subject.
     */
    Pseudonymize: CodingArgs;
    /**
     * RCT: The record target indicates whose medical record holds the documentation of this act.  This is especially important when the subject of a service is not the patient himself.
     */
    RecordTarget: CodingArgs;
    /**
     * RCV: The person (or organization) who receives the product of an Act.
     */
    Receiver: CodingArgs;
    /**
     * RDV: A device that does not change ownership due to the service, i.e., a surgical instrument or tool or an endoscope.  The distinction between reuseable and non-reuseable must be made in order to know whether material must be re-stocked.
     */
    ReusableDevice: CodingArgs;
    /**
     * REF: A person having referred the subject of the service to the performer (referring physician).  Typically, a referring physician will receive a report.
     */
    Referrer: CodingArgs;
    /**
     * REFB: A participant (e.g. provider) who has referred the subject of an act (e.g. patient).
     *
     *                         Typically, a referred by participant will provide a report (e.g. referral).
     */
    ReferredBy: CodingArgs;
    /**
     * REFT: The person who receives the patient
     */
    ReferredTo: CodingArgs;
    /**
     * RESP: The person or organization that has primary responsibility for the act.  The responsible party is not necessarily present in an action, but is accountable for the action through the power to delegate, and the duty to review actions with the performing actor after the fact.  This responsibility may be ethical, legal, contractual, fiscal, or fiduciary in nature.
     *
     *
     *                            Example: A person who is the head of a biochemical laboratory; a sponsor for a policy or government program.
     */
    ResponsibleParty: CodingArgs;
    /**
     * RML: Some services take place at multiple concurrent locations (e.g., telemedicine, telephone consultation).  The location where the principal performing actor is located is taken as the primary location (LOC) while the other location(s) are considered "remote."
     */
    Remote: CodingArgs;
    /**
     * SBJ: The principle target on which the action happens.
     *
     *
     *                            Examples: The patient in physical examination, a specimen in a lab observation. May also be a patient's family member (teaching) or a device or room (cleaning, disinfecting, housekeeping).
     *
     *
     *                            UsageNotes: Not all direct targets are subjects. Consumables and devices used as tools for an act are not subjects. However, a device may be a subject of a maintenance action.
     */
    Subject: CodingArgs;
    /**
     * SPC: The subject of non-clinical (e.g. laboratory) observation services is a specimen.
     */
    Specimen: CodingArgs;
    /**
     * SPRF: A person assisting in an act through his substantial presence and involvement   This includes: assistants, technicians, associates, or whatever the job titles may be.
     */
    SecondaryPerformer: CodingArgs;
    /**
     * TPA: Something incorporated in the subject of a therapy service to achieve a physiologic effect (e.g., heal, relieve, provoke a condition, etc.) on the subject.  In an administration service the therapeutic agent is a consumable, in a preparation or dispense service, it is a product.  Thus, consumable or product must be specified in accordance with the kind of service.
     */
    TherapeuticAgent: CodingArgs;
    /**
     * TRANS: An entity entering the data into the originating system. The data entry entity is collected optionally for internal quality control purposes. This includes the transcriptionist for dictated text transcribed into electronic form.
     */
    Transcriber: CodingArgs;
    /**
     * TRC: A secondary information recipient, who receives copies (e.g., a primary care provider receiving copies of results as ordered by specialist).
     */
    Tracker: CodingArgs;
    /**
     * UPDATE: Definition:Fundamental operation in an Information System (IS) that results only in the revision or alteration of an object. Note: The preceding definition is taken from the HL7 RBAC specification. There is no restriction on how the operation is invoked, e.g., via a user interface.
     */
    Revise: CodingArgs;
    /**
     * VIA: For services, an intermediate location that specifies a path between origin an destination.
     */
    Via: CodingArgs;
    /**
     * VRF: A person who verifies the correctness and appropriateness of the service (plan, order, event, etc.) and hence takes on accountability.
     */
    Verifier: CodingArgs;
    /**
     * WIT: Only with service events.  A person witnessing the action happening without doing anything.  A witness is not necessarily aware, much less approves of anything stated in the service event.  Example for a witness is students watching an operation or an advanced directive witness.
     */
    Witness: CodingArgs;
};
/**
 * This value set contains representative Activity Type codes, which includes codes from the HL7 DocumentCompletion, ActStatus, and DataOperations code system, W3C PROV-DM and PROV-N concepts and display names, several HL7 Lifecycle Event codes for which there are agreed upon definitions, and non-duplicated codes from the HL7 Security and Privacy Ontology Operations codes.
 */
export declare const ProvenanceActivityTypeCodings: ProvenanceActivityTypeCodingType;
//# sourceMappingURL=ProvenanceActivityTypeCodings.d.ts.map