import { CodingArgs } from '../fhir/Coding.js';
/**
 * How a capability statement is intended to be used.
 */
export declare type CapabilityStatementKindCodingType = {
    /**
     * capability: The CapabilityStatement instance represents the capabilities of a system or piece of software, independent of a particular installation.
     */
    Capability: CodingArgs;
    /**
     * instance: The CapabilityStatement instance represents the present capabilities of a specific system instance.  This is the kind returned by OPTIONS for a FHIR server end-point.
     */
    Instance: CodingArgs;
    /**
     * requirements: The CapabilityStatement instance represents a set of requirements for other systems to meet; e.g. as part of an implementation guide or 'request for proposal'.
     */
    Requirements: CodingArgs;
};
/**
 * How a capability statement is intended to be used.
 */
export declare const CapabilityStatementKindCodings: CapabilityStatementKindCodingType;
//# sourceMappingURL=CapabilityStatementKindCodings.d.ts.map