import { CodingArgs } from '../fhir/Coding.js';
/**
 * The type of network access point of this agent in the audit event
 */
export declare type NetworkTypeCodingType = {
    /**
     * 1: The machine name, including DNS name.
     */
    MachineName: CodingArgs;
    /**
     * 2: The assigned Internet Protocol (IP) address.
     */
    IPAddress: CodingArgs;
    /**
     * 3: The assigned telephone number.
     */
    TelephoneNumber: CodingArgs;
    /**
     * 4: The assigned email address.
     */
    EmailAddress: CodingArgs;
    /**
     * 5: URI (User directory, HTTP-PUT, ftp, etc.).
     */
    URI: CodingArgs;
};
/**
 * The type of network access point of this agent in the audit event
 */
export declare const NetworkTypeCodings: NetworkTypeCodingType;
//# sourceMappingURL=NetworkTypeCodings.d.ts.map