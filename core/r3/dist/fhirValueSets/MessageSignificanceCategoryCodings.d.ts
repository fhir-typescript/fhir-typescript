import { CodingArgs } from '../fhir/Coding.js';
/**
 * The impact of the content of a message.
 */
export declare type MessageSignificanceCategoryCodingType = {
    /**
     * Consequence: The message represents/requests a change that should not be processed more than once; e.g., making a booking for an appointment.
     */
    Consequence: CodingArgs;
    /**
     * Currency: The message represents a response to query for current information. Retrospective processing is wrong and/or wasteful.
     */
    Currency: CodingArgs;
    /**
     * Notification: The content is not necessarily intended to be current, and it can be reprocessed, though there may be version issues created by processing old notifications.
     */
    Notification: CodingArgs;
};
/**
 * The impact of the content of a message.
 */
export declare const MessageSignificanceCategoryCodings: MessageSignificanceCategoryCodingType;
//# sourceMappingURL=MessageSignificanceCategoryCodings.d.ts.map