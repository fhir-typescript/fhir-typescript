import { Coding } from '../fhir/Coding.js';
/**
 * A code specifying the state of the resource instance.
 */
export declare const ExplanationofbenefitStatusCodings: {
    /**
     * active: The resource instance is currently in-force.
     */
    readonly Active: Coding;
    /**
     * cancelled: The resource instance is withdrawn, rescinded or reversed.
     */
    readonly Cancelled: Coding;
    /**
     * draft: A new resource instance the contents of which is not complete.
     */
    readonly Draft: Coding;
    /**
     * entered-in-error: The resource instance was entered in error.
     */
    readonly EnteredInError: Coding;
};
/**
 * A code specifying the state of the resource instance.
 */
export declare type ExplanationofbenefitStatusCodingType = typeof ExplanationofbenefitStatusCodings;
//# sourceMappingURL=ExplanationofbenefitStatusCodings.d.ts.map