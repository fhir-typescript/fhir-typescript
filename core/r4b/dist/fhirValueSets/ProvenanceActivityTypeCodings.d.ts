import { CodingArgs } from '../fhir/Coding.js';
/**
 * This value set contains representative Activity Type codes, which includes codes from the HL7 DocumentCompletion, ActStatus, and DataOperations code system, W3C PROV-DM and PROV-N concepts and display names, several HL7 Lifecycle Event codes for which there are agreed upon definitions, and non-duplicated codes from the HL7 Security and Privacy Ontology Operations codes.
 */
export declare type ProvenanceActivityTypeCodingType = {
    /**
     * Code: _ParticipationAncillary
     */
    ParticipationAncillary: CodingArgs;
    /**
     * Code: _ParticipationInformationGenerator
     */
    ParticipationInformationGenerator: CodingArgs;
    /**
     * Code: ADM
     */
    Admitter: CodingArgs;
    /**
     * Code: ALY
     */
    Analyte: CodingArgs;
    /**
     * Code: ANONY
     */
    ANONY: CodingArgs;
    /**
     * Code: APPEND
     */
    APPEND: CodingArgs;
    /**
     * Code: ATND
     */
    Attender: CodingArgs;
    /**
     * Code: AUT
     */
    AuthorOriginator: CodingArgs;
    /**
     * Code: AUTHEN
     */
    Authenticator: CodingArgs;
    /**
     * Code: BBY
     */
    Baby: CodingArgs;
    /**
     * Code: BEN
     */
    Beneficiary: CodingArgs;
    /**
     * Code: CAGNT
     */
    CausativeAgent: CodingArgs;
    /**
     * Code: CALLBCK
     */
    CallbackContact: CodingArgs;
    /**
     * Code: CAT
     */
    Catalyst: CodingArgs;
    /**
     * Code: CON
     */
    Consultant: CodingArgs;
    /**
     * Code: COV
     */
    CoverageTarget: CodingArgs;
    /**
     * Code: CREATE
     */
    CREATE: CodingArgs;
    /**
     * Code: CSM
     */
    Consumable: CodingArgs;
    /**
     * Code: CST
     */
    Custodian: CodingArgs;
    /**
     * Code: DEID
     */
    DEID: CodingArgs;
    /**
     * Code: DELETE
     */
    DELETE: CodingArgs;
    /**
     * Code: DEV
     */
    Device: CodingArgs;
    /**
     * Code: DIR
     */
    DirectTarget: CodingArgs;
    /**
     * Code: DIS
     */
    Discharger: CodingArgs;
    /**
     * Code: DIST
     */
    Distributor: CodingArgs;
    /**
     * Code: DON
     */
    Donor: CodingArgs;
    /**
     * Code: DST
     */
    Destination: CodingArgs;
    /**
     * Code: ELOC
     */
    EntryLocation: CodingArgs;
    /**
     * Code: ENT
     */
    DataEntryPerson: CodingArgs;
    /**
     * Code: ESC
     */
    Escort: CodingArgs;
    /**
     * Code: EXPAGNT
     */
    ExposureAgent: CodingArgs;
    /**
     * Code: EXPART
     */
    ExposureParticipation: CodingArgs;
    /**
     * Code: EXPTRGT
     */
    ExposureTarget: CodingArgs;
    /**
     * Code: EXSRC
     */
    ExposureSource: CodingArgs;
    /**
     * Code: GUAR
     */
    GuarantorParty: CodingArgs;
    /**
     * Code: HLD
     */
    Holder: CodingArgs;
    /**
     * Code: IND
     */
    IndirectTarget: CodingArgs;
    /**
     * Code: INF
     */
    Informant: CodingArgs;
    /**
     * Code: IRCP
     */
    InformationRecipient: CodingArgs;
    /**
     * Code: LA
     */
    LA: CodingArgs;
    /**
     * Code: LA
     */
    LegalAuthenticator: CodingArgs;
    /**
     * Code: LABEL
     */
    LABEL: CodingArgs;
    /**
     * Code: LOC
     */
    Location: CodingArgs;
    /**
     * Code: MASK
     */
    MASK: CodingArgs;
    /**
     * Code: NOT
     */
    UgentNotificationContact: CodingArgs;
    /**
     * Code: NRD
     */
    NonReuseableDevice: CodingArgs;
    /**
     * Code: NULLIFY
     */
    NULLIFY: CodingArgs;
    /**
     * Code: ORG
     */
    Origin: CodingArgs;
    /**
     * Code: PART
     */
    Participation: CodingArgs;
    /**
     * Code: PPRF
     */
    PrimaryPerformer: CodingArgs;
    /**
     * Code: PRCP
     */
    PrimaryInformationRecipient: CodingArgs;
    /**
     * Code: PRD
     */
    Product: CodingArgs;
    /**
     * Code: PRF
     */
    Performer: CodingArgs;
    /**
     * Code: PSEUD
     */
    PSEUD: CodingArgs;
    /**
     * Code: RCT
     */
    RecordTarget: CodingArgs;
    /**
     * Code: RCV
     */
    Receiver: CodingArgs;
    /**
     * Code: RDV
     */
    ReusableDevice: CodingArgs;
    /**
     * Code: REF
     */
    Referrer: CodingArgs;
    /**
     * Code: REFB
     */
    ReferredBy: CodingArgs;
    /**
     * Code: REFT
     */
    ReferredTo: CodingArgs;
    /**
     * Code: RESP
     */
    ResponsibleParty: CodingArgs;
    /**
     * Code: RML
     */
    Remote: CodingArgs;
    /**
     * Code: SBJ
     */
    Subject: CodingArgs;
    /**
     * Code: SPC
     */
    Specimen: CodingArgs;
    /**
     * Code: SPRF
     */
    SecondaryPerformer: CodingArgs;
    /**
     * Code: TPA
     */
    TherapeuticAgent: CodingArgs;
    /**
     * Code: TRANS
     */
    Transcriber: CodingArgs;
    /**
     * Code: TRC
     */
    Tracker: CodingArgs;
    /**
     * Code: UPDATE
     */
    UPDATE: CodingArgs;
    /**
     * Code: VIA
     */
    Via: CodingArgs;
    /**
     * Code: VRF
     */
    Verifier: CodingArgs;
    /**
     * Code: WIT
     */
    Witness: CodingArgs;
};
/**
 * This value set contains representative Activity Type codes, which includes codes from the HL7 DocumentCompletion, ActStatus, and DataOperations code system, W3C PROV-DM and PROV-N concepts and display names, several HL7 Lifecycle Event codes for which there are agreed upon definitions, and non-duplicated codes from the HL7 Security and Privacy Ontology Operations codes.
 */
export declare const ProvenanceActivityTypeCodings: ProvenanceActivityTypeCodingType;
//# sourceMappingURL=ProvenanceActivityTypeCodings.d.ts.map