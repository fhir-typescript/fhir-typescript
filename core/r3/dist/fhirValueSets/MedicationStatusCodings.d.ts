import { CodingArgs } from '../fhir/Coding.js';
/**
 * A coded concept defining if the medication is in active use
 */
export declare type MedicationStatusCodingType = {
    /**
     * active: The medication is available for use
     */
    Active: CodingArgs;
    /**
     * entered-in-error: The medication was entered in error
     */
    EnteredInError: CodingArgs;
    /**
     * inactive: The medication is not available for use
     */
    Inactive: CodingArgs;
};
/**
 * A coded concept defining if the medication is in active use
 */
export declare const MedicationStatusCodings: MedicationStatusCodingType;
//# sourceMappingURL=MedicationStatusCodings.d.ts.map