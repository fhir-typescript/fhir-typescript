import { Coding } from '../fhir/Coding.js';
/**
 * Codes for general categories of communications such as alerts, instructions, etc.
 */
export declare const CommunicationCategoryCodings: {
    /**
     * alert: The communication conveys an alert.
     */
    readonly Alert: Coding;
    /**
     * instruction: The communication conveys an instruction.
     */
    readonly Instruction: Coding;
    /**
     * notification: The communication conveys a notification.
     */
    readonly Notification: Coding;
    /**
     * reminder: The communication conveys a reminder.
     */
    readonly Reminder: Coding;
};
/**
 * Codes for general categories of communications such as alerts, instructions, etc.
 */
export declare type CommunicationCategoryCodingType = typeof CommunicationCategoryCodings;
//# sourceMappingURL=CommunicationCategoryCodings.d.ts.map