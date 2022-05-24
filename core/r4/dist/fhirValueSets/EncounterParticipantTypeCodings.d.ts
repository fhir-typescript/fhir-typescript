import { CodingArgs } from '../fhir/Coding.js';
/**
 * This value set defines a set of codes that can be used to indicate how an individual participates in an encounter.
 */
export declare type EncounterParticipantTypeCodingType = {
    /**
     * ADM: The practitioner who is responsible for admitting a patient to a patient encounter.
     */
    Admitter: CodingArgs;
    /**
     * ATND: The practitioner that has responsibility for overseeing a patient's care during a patient encounter.
     */
    Attender: CodingArgs;
    /**
     * CALLBCK: A person or organization who should be contacted for follow-up questions about the act in place of the author.
     */
    CallbackContact: CodingArgs;
    /**
     * CON: An advisor participating in the service by performing evaluations and making recommendations.
     */
    Consultant: CodingArgs;
    /**
     * DIS: The practitioner who is responsible for the discharge of a patient from a patient encounter.
     */
    Discharger: CodingArgs;
    /**
     * emergency: A person to be contacted in case of an emergency during the encounter.
     */
    Emergency: CodingArgs;
    /**
     * ESC: Only with Transportation services.  A person who escorts the patient.
     */
    Escort: CodingArgs;
    /**
     * PART: Indicates that the target of the participation is involved in some manner in the act, but does not qualify how.
     */
    Participation: CodingArgs;
    /**
     * PPRF: The principal or primary performer of the act.
     */
    PrimaryPerformer: CodingArgs;
    /**
     * REF: A person having referred the subject of the service to the performer (referring physician).  Typically, a referring physician will receive a report.
     */
    Referrer: CodingArgs;
    /**
     * SPRF: A person assisting in an act through his substantial presence and involvement   This includes: assistants, technicians, associates, or whatever the job titles may be.
     */
    SecondaryPerformer: CodingArgs;
    /**
     * translator: A translator who is facilitating communication with the patient during the encounter.
     */
    Translator: CodingArgs;
};
/**
 * This value set defines a set of codes that can be used to indicate how an individual participates in an encounter.
 */
export declare const EncounterParticipantTypeCodings: EncounterParticipantTypeCodingType;
//# sourceMappingURL=EncounterParticipantTypeCodings.d.ts.map