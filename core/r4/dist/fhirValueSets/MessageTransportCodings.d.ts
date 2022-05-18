import { Coding } from '../fhir/Coding.js';
/**
 * The protocol used for message transport.
 */
export declare const MessageTransportCodings: {
    /**
     * ftp: The application sends or receives messages using File Transfer Protocol.
     */
    readonly FTP: Coding;
    /**
     * http: The application sends or receives messages using HTTP POST (may be over http: or https:).
     */
    readonly HTTP: Coding;
    /**
     * mllp: The application sends or receives messages using HL7's Minimal Lower Level Protocol.
     */
    readonly MLLP: Coding;
};
/**
 * The protocol used for message transport.
 */
export declare type MessageTransportCodingType = typeof MessageTransportCodings;
//# sourceMappingURL=MessageTransportCodings.d.ts.map