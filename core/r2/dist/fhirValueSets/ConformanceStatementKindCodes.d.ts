/**
 * How a conformance statement is intended to be used.
 */
export declare const ConformanceStatementKindCodes: {
    /**
     * capability: The Conformance instance represents the capabilities of a system or piece of software, independent of a particular installation.
     */
    readonly Capability: "capability";
    /**
     * instance: The Conformance instance represents the present capabilities of a specific system instance.  This is the kind returned by OPTIONS for a FHIR server end-point.
     */
    readonly Instance: "instance";
    /**
     * requirements: The Conformance instance represents a set of requirements for other systems to meet; e.g. as part of an implementation guide or 'request for proposal'.
     */
    readonly Requirements: "requirements";
};
/**
 * How a conformance statement is intended to be used.
 */
export declare type ConformanceStatementKindCodeType = typeof ConformanceStatementKindCodes[keyof typeof ConformanceStatementKindCodes];
//# sourceMappingURL=ConformanceStatementKindCodes.d.ts.map