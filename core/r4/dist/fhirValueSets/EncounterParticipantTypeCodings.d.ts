import { Coding } from '../fhir/Coding.js';
/**
 * This value set defines a set of codes that can be used to indicate how an individual participates in an encounter.
 */
export declare const EncounterParticipantTypeCodings: {
    /**
     * ADM: The practitioner who is responsible for admitting a patient to a patient encounter.
     */
    readonly Admitter: Coding;
    /**
     * ATND: The practitioner that has responsibility for overseeing a patient's care during a patient encounter.
     */
    readonly Attender: Coding;
    /**
     * CALLBCK: A person or organization who should be contacted for follow-up questions about the act in place of the author.
     */
    readonly CallbackContact: Coding;
    /**
     * CON: An advisor participating in the service by performing evaluations and making recommendations.
     */
    readonly Consultant: Coding;
    /**
     * DIS: The practitioner who is responsible for the discharge of a patient from a patient encounter.
     */
    readonly Discharger: Coding;
    /**
     * emergency: A person to be contacted in case of an emergency during the encounter.
     */
    readonly Emergency: Coding;
    /**
     * ESC: Only with Transportation services.  A person who escorts the patient.
     */
    readonly Escort: Coding;
    /**
     * PART: Indicates that the target of the participation is involved in some manner in the act, but does not qualify how.
     */
    readonly Participation: Coding;
    /**
     * PPRF: The principal or primary performer of the act.
     */
    readonly PrimaryPerformer: Coding;
    /**
     * REF: A person having referred the subject of the service to the performer (referring physician).  Typically, a referring physician will receive a report.
     */
    readonly Referrer: Coding;
    /**
     * SPRF: A person assisting in an act through his substantial presence and involvement   This includes: assistants, technicians, associates, or whatever the job titles may be.
     */
    readonly SecondaryPerformer: Coding;
    /**
     * translator: A translator who is facilitating communication with the patient during the encounter.
     */
    readonly Translator: Coding;
};
/**
 * This value set defines a set of codes that can be used to indicate how an individual participates in an encounter.
 */
export declare type EncounterParticipantTypeCodingType = typeof EncounterParticipantTypeCodings;
//# sourceMappingURL=EncounterParticipantTypeCodings.d.ts.map