import { CodingArgs } from '../fhir/Coding.js';
/**
 * Codes describing the purpose or content of the communication.
 */
export declare type CommunicationTopicCodingType = {
    /**
     * appointment-reminder: The purpose or content of the communication is an appointment reminder.
     */
    AppointmentReminder: CodingArgs;
    /**
     * phone-consult: The purpose or content of the communication is a phone consult.
     */
    PhoneConsult: CodingArgs;
    /**
     * prescription-refill-request: The purpose or content of the communication is a prescription refill request.
     */
    PrescriptionRefillRequest: CodingArgs;
    /**
     * progress-update: The purpose or content of the communication is a progress update.
     */
    ProgressUpdate: CodingArgs;
    /**
     * report-labs: The purpose or content of the communication is to report labs.
     */
    ReportLabs: CodingArgs;
    /**
     * summary-report: The purpose or content of the communication is a summary report.
     */
    SummaryReport: CodingArgs;
};
/**
 * Codes describing the purpose or content of the communication.
 */
export declare const CommunicationTopicCodings: CommunicationTopicCodingType;
//# sourceMappingURL=CommunicationTopicCodings.d.ts.map