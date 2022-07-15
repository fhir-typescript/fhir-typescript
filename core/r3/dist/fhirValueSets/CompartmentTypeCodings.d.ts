import { CodingArgs } from '../fhir/Coding.js';
/**
 * Which compartment a compartment definition describes
 */
export declare type CompartmentTypeCodingType = {
    /**
     * Device: The compartment definition is for the device compartment
     */
    Device: CodingArgs;
    /**
     * Encounter: The compartment definition is for the encounter compartment
     */
    Encounter: CodingArgs;
    /**
     * Patient: The compartment definition is for the patient compartment
     */
    Patient: CodingArgs;
    /**
     * Practitioner: The compartment definition is for the practitioner compartment
     */
    Practitioner: CodingArgs;
    /**
     * RelatedPerson: The compartment definition is for the related-person compartment
     */
    RelatedPerson: CodingArgs;
};
/**
 * Which compartment a compartment definition describes
 */
export declare const CompartmentTypeCodings: CompartmentTypeCodingType;
//# sourceMappingURL=CompartmentTypeCodings.d.ts.map