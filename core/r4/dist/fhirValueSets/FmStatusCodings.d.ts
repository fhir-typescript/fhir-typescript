import { Coding } from '../fhir/Coding.js';
/**
 * This value set includes Status codes.
 */
export declare const FmStatusCodings: {
    /**
     * active: The instance is currently in-force.
     */
    readonly Active: Coding;
    /**
     * cancelled: The instance is withdrawn, rescinded or reversed.
     */
    readonly Cancelled: Coding;
    /**
     * draft: A new instance the contents of which is not complete.
     */
    readonly Draft: Coding;
    /**
     * entered-in-error: The instance was entered in error.
     */
    readonly EnteredInError: Coding;
};
/**
 * This value set includes Status codes.
 */
export declare type FmStatusCodingType = typeof FmStatusCodings;
//# sourceMappingURL=FmStatusCodings.d.ts.map