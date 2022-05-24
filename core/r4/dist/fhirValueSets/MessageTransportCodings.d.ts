import { CodingArgs } from '../fhir/Coding.js';
/**
 * The protocol used for message transport.
 */
export declare type MessageTransportCodingType = {
    /**
     * ftp: The application sends or receives messages using File Transfer Protocol.
     */
    FTP: CodingArgs;
    /**
     * http: The application sends or receives messages using HTTP POST (may be over http: or https:).
     */
    HTTP: CodingArgs;
    /**
     * mllp: The application sends or receives messages using HL7's Minimal Lower Level Protocol.
     */
    MLLP: CodingArgs;
};
/**
 * The protocol used for message transport.
 */
export declare const MessageTransportCodings: MessageTransportCodingType;
//# sourceMappingURL=MessageTransportCodings.d.ts.map