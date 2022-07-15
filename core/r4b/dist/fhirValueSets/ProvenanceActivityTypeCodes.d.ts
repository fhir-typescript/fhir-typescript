/**
 * This value set contains representative Activity Type codes, which includes codes from the HL7 DocumentCompletion, ActStatus, and DataOperations code system, W3C PROV-DM and PROV-N concepts and display names, several HL7 Lifecycle Event codes for which there are agreed upon definitions, and non-duplicated codes from the HL7 Security and Privacy Ontology Operations codes.
 */
export declare const ProvenanceActivityTypeCodes: {
    /**
     * Code: _ParticipationAncillary
     */
    readonly ParticipationAncillary: "_ParticipationAncillary";
    /**
     * Code: _ParticipationInformationGenerator
     */
    readonly ParticipationInformationGenerator: "_ParticipationInformationGenerator";
    /**
     * Code: ADM
     */
    readonly Admitter: "ADM";
    /**
     * Code: ALY
     */
    readonly Analyte: "ALY";
    /**
     * Code: ANONY
     */
    readonly ANONY: "ANONY";
    /**
     * Code: APPEND
     */
    readonly APPEND: "APPEND";
    /**
     * Code: ATND
     */
    readonly Attender: "ATND";
    /**
     * Code: AUT
     */
    readonly AuthorOriginator: "AUT";
    /**
     * Code: AUTHEN
     */
    readonly Authenticator: "AUTHEN";
    /**
     * Code: BBY
     */
    readonly Baby: "BBY";
    /**
     * Code: BEN
     */
    readonly Beneficiary: "BEN";
    /**
     * Code: CAGNT
     */
    readonly CausativeAgent: "CAGNT";
    /**
     * Code: CALLBCK
     */
    readonly CallbackContact: "CALLBCK";
    /**
     * Code: CAT
     */
    readonly Catalyst: "CAT";
    /**
     * Code: CON
     */
    readonly Consultant: "CON";
    /**
     * Code: COV
     */
    readonly CoverageTarget: "COV";
    /**
     * Code: CREATE
     */
    readonly CREATE: "CREATE";
    /**
     * Code: CSM
     */
    readonly Consumable: "CSM";
    /**
     * Code: CST
     */
    readonly Custodian: "CST";
    /**
     * Code: DEID
     */
    readonly DEID: "DEID";
    /**
     * Code: DELETE
     */
    readonly DELETE: "DELETE";
    /**
     * Code: DEV
     */
    readonly Device: "DEV";
    /**
     * Code: DIR
     */
    readonly DirectTarget: "DIR";
    /**
     * Code: DIS
     */
    readonly Discharger: "DIS";
    /**
     * Code: DIST
     */
    readonly Distributor: "DIST";
    /**
     * Code: DON
     */
    readonly Donor: "DON";
    /**
     * Code: DST
     */
    readonly Destination: "DST";
    /**
     * Code: ELOC
     */
    readonly EntryLocation: "ELOC";
    /**
     * Code: ENT
     */
    readonly DataEntryPerson: "ENT";
    /**
     * Code: ESC
     */
    readonly Escort: "ESC";
    /**
     * Code: EXPAGNT
     */
    readonly ExposureAgent: "EXPAGNT";
    /**
     * Code: EXPART
     */
    readonly ExposureParticipation: "EXPART";
    /**
     * Code: EXPTRGT
     */
    readonly ExposureTarget: "EXPTRGT";
    /**
     * Code: EXSRC
     */
    readonly ExposureSource: "EXSRC";
    /**
     * Code: GUAR
     */
    readonly GuarantorParty: "GUAR";
    /**
     * Code: HLD
     */
    readonly Holder: "HLD";
    /**
     * Code: IND
     */
    readonly IndirectTarget: "IND";
    /**
     * Code: INF
     */
    readonly Informant: "INF";
    /**
     * Code: IRCP
     */
    readonly InformationRecipient: "IRCP";
    /**
     * Code: LA
     */
    readonly LA: "LA";
    /**
     * Code: LA
     */
    readonly LegalAuthenticator: "LA";
    /**
     * Code: LABEL
     */
    readonly LABEL: "LABEL";
    /**
     * Code: LOC
     */
    readonly Location: "LOC";
    /**
     * Code: MASK
     */
    readonly MASK: "MASK";
    /**
     * Code: NOT
     */
    readonly UgentNotificationContact: "NOT";
    /**
     * Code: NRD
     */
    readonly NonReuseableDevice: "NRD";
    /**
     * Code: NULLIFY
     */
    readonly NULLIFY: "NULLIFY";
    /**
     * Code: ORG
     */
    readonly Origin: "ORG";
    /**
     * Code: PART
     */
    readonly Participation: "PART";
    /**
     * Code: PPRF
     */
    readonly PrimaryPerformer: "PPRF";
    /**
     * Code: PRCP
     */
    readonly PrimaryInformationRecipient: "PRCP";
    /**
     * Code: PRD
     */
    readonly Product: "PRD";
    /**
     * Code: PRF
     */
    readonly Performer: "PRF";
    /**
     * Code: PSEUD
     */
    readonly PSEUD: "PSEUD";
    /**
     * Code: RCT
     */
    readonly RecordTarget: "RCT";
    /**
     * Code: RCV
     */
    readonly Receiver: "RCV";
    /**
     * Code: RDV
     */
    readonly ReusableDevice: "RDV";
    /**
     * Code: REF
     */
    readonly Referrer: "REF";
    /**
     * Code: REFB
     */
    readonly ReferredBy: "REFB";
    /**
     * Code: REFT
     */
    readonly ReferredTo: "REFT";
    /**
     * Code: RESP
     */
    readonly ResponsibleParty: "RESP";
    /**
     * Code: RML
     */
    readonly Remote: "RML";
    /**
     * Code: SBJ
     */
    readonly Subject: "SBJ";
    /**
     * Code: SPC
     */
    readonly Specimen: "SPC";
    /**
     * Code: SPRF
     */
    readonly SecondaryPerformer: "SPRF";
    /**
     * Code: TPA
     */
    readonly TherapeuticAgent: "TPA";
    /**
     * Code: TRANS
     */
    readonly Transcriber: "TRANS";
    /**
     * Code: TRC
     */
    readonly Tracker: "TRC";
    /**
     * Code: UPDATE
     */
    readonly UPDATE: "UPDATE";
    /**
     * Code: VIA
     */
    readonly Via: "VIA";
    /**
     * Code: VRF
     */
    readonly Verifier: "VRF";
    /**
     * Code: WIT
     */
    readonly Witness: "WIT";
};
/**
 * This value set contains representative Activity Type codes, which includes codes from the HL7 DocumentCompletion, ActStatus, and DataOperations code system, W3C PROV-DM and PROV-N concepts and display names, several HL7 Lifecycle Event codes for which there are agreed upon definitions, and non-duplicated codes from the HL7 Security and Privacy Ontology Operations codes.
 */
export declare type ProvenanceActivityTypeCodeType = typeof ProvenanceActivityTypeCodes[keyof typeof ProvenanceActivityTypeCodes];
//# sourceMappingURL=ProvenanceActivityTypeCodes.d.ts.map