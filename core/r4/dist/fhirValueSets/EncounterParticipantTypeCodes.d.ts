/**
 * This value set defines a set of codes that can be used to indicate how an individual participates in an encounter.
 */
export declare const EncounterParticipantTypeCodes: {
    /**
     * ADM: The practitioner who is responsible for admitting a patient to a patient encounter.
     */
    readonly Admitter: "ADM";
    /**
     * ATND: The practitioner that has responsibility for overseeing a patient's care during a patient encounter.
     */
    readonly Attender: "ATND";
    /**
     * CALLBCK: A person or organization who should be contacted for follow-up questions about the act in place of the author.
     */
    readonly CallbackContact: "CALLBCK";
    /**
     * CON: An advisor participating in the service by performing evaluations and making recommendations.
     */
    readonly Consultant: "CON";
    /**
     * DIS: The practitioner who is responsible for the discharge of a patient from a patient encounter.
     */
    readonly Discharger: "DIS";
    /**
     * emergency: A person to be contacted in case of an emergency during the encounter.
     */
    readonly Emergency: "emergency";
    /**
     * ESC: Only with Transportation services.  A person who escorts the patient.
     */
    readonly Escort: "ESC";
    /**
     * PART: Indicates that the target of the participation is involved in some manner in the act, but does not qualify how.
     */
    readonly Participation: "PART";
    /**
     * PPRF: The principal or primary performer of the act.
     */
    readonly PrimaryPerformer: "PPRF";
    /**
     * REF: A person having referred the subject of the service to the performer (referring physician).  Typically, a referring physician will receive a report.
     */
    readonly Referrer: "REF";
    /**
     * SPRF: A person assisting in an act through his substantial presence and involvement   This includes: assistants, technicians, associates, or whatever the job titles may be.
     */
    readonly SecondaryPerformer: "SPRF";
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