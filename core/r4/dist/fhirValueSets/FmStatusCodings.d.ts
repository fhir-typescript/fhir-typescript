import { CodingArgs } from '../fhir/Coding.js';
/**
 * This value set includes Status codes.
 */
export declare type FmStatusCodingType = {
    /**
     * active: The instance is currently in-force.
     */
    Active: CodingArgs;
    /**
     * cancelled: The instance is withdrawn, rescinded or reversed.
     */
    Cancelled: CodingArgs;
    /**
     * draft: A new instance the contents of which is not complete.
     */
    Draft: CodingArgs;
    /**
     * entered-in-error: The instance was entered in error.
     */
    EnteredInError: CodingArgs;
};
/**
 * This value set includes Status codes.
 */
export declare const FmStatusCodings: FmStatusCodingType;
//# sourceMappingURL=FmStatusCodings.d.ts.map