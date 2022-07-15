/**
 * Identifies the primary means by which an Entity participates in an Act.
 */
export declare const V3ParticipationModeCodes: {
    /**
     * Code: APPWRIT
     */
    readonly MessagingApp: "APPWRIT";
    /**
     * Code: DICTATE
     */
    readonly Dictated: "DICTATE";
    /**
     * Code: ELECTRONIC
     */
    readonly ElectronicData: "ELECTRONIC";
    /**
     * Code: EMAILWRIT
     */
    readonly Email: "EMAILWRIT";
    /**
     * Code: FACE
     */
    readonly FaceToFace: "FACE";
    /**
     * Code: FAXWRIT
     */
    readonly Telefax: "FAXWRIT";
    /**
     * Code: HANDWRIT
     */
    readonly Handwritten: "HANDWRIT";
    /**
     * Code: MAILWRIT
     */
    readonly Mail: "MAILWRIT";
    /**
     * Code: MMSWRIT
     */
    readonly MMSMessage: "MMSWRIT";
    /**
     * Code: MSGWRIT
     */
    readonly Messaging: "MSGWRIT";
    /**
     * Code: ONLINEWRIT
     */
    readonly OnlineWritten: "ONLINEWRIT";
    /**
     * Code: PHONE
     */
    readonly Telephone: "PHONE";
    /**
     * Code: PHYSICAL
     */
    readonly PHYSICAL: "PHYSICAL";
    /**
     * Code: REMOTE
     */
    readonly REMOTE: "REMOTE";
    /**
     * Code: SMSWRIT
     */
    readonly SMSMessage: "SMSWRIT";
    /**
     * Code: TYPEWRIT
     */
    readonly Typewritten: "TYPEWRIT";
    /**
     * Code: VERBAL
     */
    readonly Verbal: "VERBAL";
    /**
     * Code: VIDEOCONF
     */
    readonly Videoconferencing: "VIDEOCONF";
    /**
     * Code: WRITTEN
     */
    readonly Written: "WRITTEN";
};
/**
 * Identifies the primary means by which an Entity participates in an Act.
 */
export declare type V3ParticipationModeCodeType = typeof V3ParticipationModeCodes[keyof typeof V3ParticipationModeCodes];
//# sourceMappingURL=V3ParticipationModeCodes.d.ts.map