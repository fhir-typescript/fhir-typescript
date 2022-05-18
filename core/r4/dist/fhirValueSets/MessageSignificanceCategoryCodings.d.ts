import { Coding } from '../fhir/Coding.js';
/**
 * The impact of the content of a message.
 */
export declare const MessageSignificanceCategoryCodings: {
    /**
     * consequence: The message represents/requests a change that should not be processed more than once; e.g., making a booking for an appointment.
     */
    readonly Consequence: Coding;
    /**
     * currency: The message represents a response to query for current information. Retrospective processing is wrong and/or wasteful.
     */
    readonly Currency: Coding;
    /**
     * notification: The content is not necessarily intended to be current, and it can be reprocessed, though there may be version issues created by processing old notifications.
     */
    readonly Notification: Coding;
};
/**
 * The impact of the content of a message.
 */
export declare type MessageSignificanceCategoryCodingType = typeof MessageSignificanceCategoryCodings;
//# sourceMappingURL=MessageSignificanceCategoryCodings.d.ts.map