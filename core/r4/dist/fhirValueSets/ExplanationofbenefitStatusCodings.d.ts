import { CodingArgs } from '../fhir/Coding.js';
/**
 * A code specifying the state of the resource instance.
 */
export declare type ExplanationofbenefitStatusCodingType = {
    /**
     * active: The resource instance is currently in-force.
     */
    Active: CodingArgs;
    /**
     * cancelled: The resource instance is withdrawn, rescinded or reversed.
     */
    Cancelled: CodingArgs;
    /**
     * draft: A new resource instance the contents of which is not complete.
     */
    Draft: CodingArgs;
    /**
     * entered-in-error: The resource instance was entered in error.
     */
    EnteredInError: CodingArgs;
};
/**
 * A code specifying the state of the resource instance.
 */
export declare const ExplanationofbenefitStatusCodings: ExplanationofbenefitStatusCodingType;
//# sourceMappingURL=ExplanationofbenefitStatusCodings.d.ts.map