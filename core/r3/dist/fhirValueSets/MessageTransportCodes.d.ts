/**
 * The protocol used for message transport.
 */
export declare const MessageTransportCodes: {
    /**
     * ftp: The application sends or receives messages using File Transfer Protocol.
     */
    readonly FTP: "ftp";
    /**
     * http: The application sends or receives messages using HTTP POST (may be over http: or https:).
     */
    readonly HTTP: "http";
    /**
     * mllp: The application sends or receives messages using HL7's Minimal Lower Level Protocol.
     */
    readonly MLLP: "mllp";
};
/**
 * The protocol used for message transport.
 */
export declare type MessageTransportCodeType = typeof MessageTransportCodes[keyof typeof MessageTransportCodes];
//# sourceMappingURL=MessageTransportCodes.d.ts.map