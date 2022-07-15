/**
 * The type of network access point of this agent in the audit event
 */
export declare const NetworkTypeCodes: {
    /**
     * 1: The machine name, including DNS name.
     */
    readonly MachineName: "1";
    /**
     * 2: The assigned Internet Protocol (IP) address.
     */
    readonly IPAddress: "2";
    /**
     * 3: The assigned telephone number.
     */
    readonly TelephoneNumber: "3";
    /**
     * 4: The assigned email address.
     */
    readonly EmailAddress: "4";
    /**
     * 5: URI (User directory, HTTP-PUT, ftp, etc.).
     */
    readonly URI: "5";
};
/**
 * The type of network access point of this agent in the audit event
 */
export declare type NetworkTypeCodeType = typeof NetworkTypeCodes[keyof typeof NetworkTypeCodes];
//# sourceMappingURL=NetworkTypeCodes.d.ts.map