import { Coding } from '../fhir/Coding.js';
/**
 * This value set includes Coverage Class codes.
 */
export declare const CoverageClassCodings: {
    /**
     * class: A class of benefits.
     */
    readonly Class: Coding;
    /**
     * group: An employee group
     */
    readonly Group: Coding;
    /**
     * plan: A specific suite of benefits.
     */
    readonly Plan: Coding;
    /**
     * rxbin: Pharmacy benefit manager's Business Identification Number.
     */
    readonly RXBIN: Coding;
    /**
     * rxgroup: A Pharmacy Benefit Manager specified Group number.
     */
    readonly RXGroup: Coding;
    /**
     * rxid: A Pharmacy Benefit Manager specified Member ID.
     */
    readonly RXId: Coding;
    /**
     * rxpcn: A Pharmacy Benefit Manager specified Processor Control Number.
     */
    readonly RXPCN: Coding;
    /**
     * sequence: A sequence number associated with a short-term continuance of the coverage.
     */
    readonly Sequence: Coding;
    /**
     * subclass: A subset of a class of benefits.
     */
    readonly SubClass: Coding;
    /**
     * subgroup: A sub-group of an employee group
     */
    readonly SubGroup: Coding;
    /**
     * subplan: A subset of a specific suite of benefits.
     */
    readonly SubPlan: Coding;
};
/**
 * This value set includes Coverage Class codes.
 */
export declare type CoverageClassCodingType = typeof CoverageClassCodings;
//# sourceMappingURL=CoverageClassCodings.d.ts.map