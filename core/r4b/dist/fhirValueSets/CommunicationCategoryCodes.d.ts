/**
 * Codes for general categories of communications such as alerts, instructions, etc.
 */
export declare const CommunicationCategoryCodes: {
    /**
     * alert: The communication conveys an alert.
     */
    readonly Alert: "alert";
    /**
     * instruction: The communication conveys an instruction.
     */
    readonly Instruction: "instruction";
    /**
     * notification: The communication conveys a notification.
     */
    readonly Notification: "notification";
    /**
     * reminder: The communication conveys a reminder.
     */
    readonly Reminder: "reminder";
};
/**
 * Codes for general categories of communications such as alerts, instructions, etc.
 */
export declare type CommunicationCategoryCodeType = typeof CommunicationCategoryCodes[keyof typeof CommunicationCategoryCodes];
//# sourceMappingURL=CommunicationCategoryCodes.d.ts.map