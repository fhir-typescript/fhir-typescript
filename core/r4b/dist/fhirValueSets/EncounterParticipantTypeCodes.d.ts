/**
 * This value set defines a set of codes that can be used to indicate how an individual participates in an encounter.
 */
export declare const EncounterParticipantTypeCodes: {
    /**
     * Code: ADM
     */
    readonly Admitter: "ADM";
    /**
     * Code: ATND
     */
    readonly Attender: "ATND";
    /**
     * Code: CALLBCK
     */
    readonly CallbackContact: "CALLBCK";
    /**
     * Code: CON
     */
    readonly Consultant: "CON";
    /**
     * Code: DIS
     */
    readonly Discharger: "DIS";
    /**
     * emergency: A person to be contacted in case of an emergency during the encounter.
     */
    readonly Emergency: "emergency";
    /**
     * Code: ESC
     */
    readonly Escort: "ESC";
    /**
     * Code: PART
     */
    readonly PART: "PART";
    /**
     * Code: PPRF
     */
    readonly PPRF: "PPRF";
    /**
     * Code: REF
     */
    readonly Referrer: "REF";
    /**
     * Code: SPRF
     */
    readonly SPRF: "SPRF";
    /**
     * translator: A translator who is facilitating communication with the patient during the encounter.
     */
    readonly Translator: "translator";
};
/**
 * This value set defines a set of codes that can be used to indicate how an individual participates in an encounter.
 */
export declare type EncounterParticipantTypeCodeType = typeof EncounterParticipantTypeCodes[keyof typeof EncounterParticipantTypeCodes];
//# sourceMappingURL=EncounterParticipantTypeCodes.d.ts.map