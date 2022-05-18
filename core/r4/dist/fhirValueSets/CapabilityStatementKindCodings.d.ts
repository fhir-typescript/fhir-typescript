import { Coding } from '../fhir/Coding.js';
/**
 * How a capability statement is intended to be used.
 */
export declare const CapabilityStatementKindCodings: {
    /**
     * capability: The CapabilityStatement instance represents the capabilities of a system or piece of software, independent of a particular installation.
     */
    readonly Capability: Coding;
    /**
     * instance: The CapabilityStatement instance represents the present capabilities of a specific system instance.  This is the kind returned by /metadata for a FHIR server end-point.
     */
    readonly Instance: Coding;
    /**
     * requirements: The CapabilityStatement instance represents a set of requirements for other systems to meet; e.g. as part of an implementation guide or 'request for proposal'.
     */
    readonly Requirements: Coding;
};
/**
 * How a capability statement is intended to be used.
 */
export declare type CapabilityStatementKindCodingType = typeof CapabilityStatementKindCodings;
//# sourceMappingURL=CapabilityStatementKindCodings.d.ts.map