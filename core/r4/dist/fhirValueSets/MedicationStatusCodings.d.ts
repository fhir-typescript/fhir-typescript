import { Coding } from '../fhir/Coding.js';
/**
 * Medication Status Codes
 */
export declare const MedicationStatusCodings: {
    /**
     * active: The medication is available for use.
     */
    readonly Active: Coding;
    /**
     * entered-in-error: The medication was entered in error.
     */
    readonly EnteredInError: Coding;
    /**
     * inactive: The medication is not available for use.
     */
    readonly Inactive: Coding;
};
/**
 * Medication Status Codes
 */
export declare type MedicationStatusCodingType = typeof MedicationStatusCodings;
//# sourceMappingURL=MedicationStatusCodings.d.ts.map