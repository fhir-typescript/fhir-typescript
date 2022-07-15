/**
 * The impact of the content of a message.
 */
export declare const MessageSignificanceCategoryCodes: {
    /**
     * consequence: The message represents/requests a change that should not be processed more than once; e.g., making a booking for an appointment.
     */
    readonly Consequence: "consequence";
    /**
     * currency: The message represents a response to query for current information. Retrospective processing is wrong and/or wasteful.
     */
    readonly Currency: "currency";
    /**
     * notification: The content is not necessarily intended to be current, and it can be reprocessed, though there may be version issues created by processing old notifications.
     */
    readonly Notification: "notification";
};
/**
 * The impact of the content of a message.
 */
export declare type MessageSignificanceCategoryCodeType = typeof MessageSignificanceCategoryCodes[keyof typeof MessageSignificanceCategoryCodes];
//# sourceMappingURL=MessageSignificanceCategoryCodes.d.ts.map