import { Coding } from '../fhir/Coding.js';
/**
 * The type of network access point of this agent in the audit event.
 */
export declare const NetworkTypeCodings: {
    /**
     * 1: The machine name, including DNS name.
     */
    readonly MachineName: Coding;
    /**
     * 2: The assigned Internet Protocol (IP) address.
     */
    readonly IPAddress: Coding;
    /**
     * 3: The assigned telephone number.
     */
    readonly TelephoneNumber: Coding;
    /**
     * 4: The assigned email address.
     */
    readonly EmailAddress: Coding;
    /**
     * 5: URI (User directory, HTTP-PUT, ftp, etc.).
     */
    readonly URI: Coding;
};
/**
 * The type of network access point of this agent in the audit event.
 */
export declare type NetworkTypeCodingType = typeof NetworkTypeCodings;
//# sourceMappingURL=NetworkTypeCodings.d.ts.map