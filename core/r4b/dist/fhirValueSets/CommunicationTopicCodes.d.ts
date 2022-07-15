/**
 * Codes describing the purpose or content of the communication.
 */
export declare const CommunicationTopicCodes: {
    /**
     * appointment-reminder: The purpose or content of the communication is an appointment reminder.
     */
    readonly AppointmentReminder: "appointment-reminder";
    /**
     * phone-consult: The purpose or content of the communication is a phone consult.
     */
    readonly PhoneConsult: "phone-consult";
    /**
     * prescription-refill-request: The purpose or content of the communication is a prescription refill request.
     */
    readonly PrescriptionRefillRequest: "prescription-refill-request";
    /**
     * progress-update: The purpose or content of the communication is a progress update.
     */
    readonly ProgressUpdate: "progress-update";
    /**
     * report-labs: The purpose or content of the communication is to report labs.
     */
    readonly ReportLabs: "report-labs";
    /**
     * summary-report: The purpose or content of the communication is a summary report.
     */
    readonly SummaryReport: "summary-report";
};
/**
 * Codes describing the purpose or content of the communication.
 */
export declare type CommunicationTopicCodeType = typeof CommunicationTopicCodes[keyof typeof CommunicationTopicCodes];
//# sourceMappingURL=CommunicationTopicCodes.d.ts.map