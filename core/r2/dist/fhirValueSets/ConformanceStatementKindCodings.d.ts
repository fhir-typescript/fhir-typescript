import { CodingArgs } from '../fhir/Coding.js';
/**
 * How a conformance statement is intended to be used.
 */
export declare type ConformanceStatementKindCodingType = {
    /**
     * capability: The Conformance instance represents the capabilities of a system or piece of software, independent of a particular installation.
     */
    Capability: CodingArgs;
    /**
     * instance: The Conformance instance represents the present capabilities of a specific system instance.  This is the kind returned by OPTIONS for a FHIR server end-point.
     */
    Instance: CodingArgs;
    /**
     * requirements: The Conformance instance represents a set of requirements for other systems to meet; e.g. as part of an implementation guide or 'request for proposal'.
     */
    Requirements: CodingArgs;
};
/**
 * How a conformance statement is intended to be used.
 */
export declare const ConformanceStatementKindCodings: ConformanceStatementKindCodingType;
//# sourceMappingURL=ConformanceStatementKindCodings.d.ts.map