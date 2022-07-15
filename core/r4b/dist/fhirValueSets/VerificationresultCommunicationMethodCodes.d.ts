/**
 * Attested information may be validated by process that are manual or automated. For automated processes it may accomplished by the system of record reaching out through another system's API or information may be sent to the system of record. This value set defines a set of codes to describing the process, the how, a resource or data element is validated.
 */
export declare const VerificationresultCommunicationMethodCodes: {
    /**
     * Code: manual
     */
    readonly Manual: "manual";
    /**
     * Code: portal
     */
    readonly Portal: "portal";
    /**
     * Code: pull
     */
    readonly Pull: "pull";
    /**
     * Code: push
     */
    readonly Push: "push";
};
/**
 * Attested information may be validated by process that are manual or automated. For automated processes it may accomplished by the system of record reaching out through another system's API or information may be sent to the system of record. This value set defines a set of codes to describing the process, the how, a resource or data element is validated.
 */
export declare type VerificationresultCommunicationMethodCodeType = typeof VerificationresultCommunicationMethodCodes[keyof typeof VerificationresultCommunicationMethodCodes];
//# sourceMappingURL=VerificationresultCommunicationMethodCodes.d.ts.map