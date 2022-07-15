/**
 * The type of participant for the action.
 */
export declare const ActionParticipantTypeCodes: {
    /**
     * device: The participant is a system or device used in the care of the patient.
     */
    readonly Device: "device";
    /**
     * patient: The participant is the patient under evaluation.
     */
    readonly Patient: "patient";
    /**
     * practitioner: The participant is a practitioner involved in the patient's care.
     */
    readonly Practitioner: "practitioner";
    /**
     * related-person: The participant is a person related to the patient.
     */
    readonly RelatedPerson: "related-person";
};
/**
 * The type of participant for the action.
 */
export declare type ActionParticipantTypeCodeType = typeof ActionParticipantTypeCodes[keyof typeof ActionParticipantTypeCodes];
//# sourceMappingURL=ActionParticipantTypeCodes.d.ts.map