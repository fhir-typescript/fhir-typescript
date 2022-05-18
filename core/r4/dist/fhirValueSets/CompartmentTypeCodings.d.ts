import { Coding } from '../fhir/Coding.js';
/**
 * Which type a compartment definition describes.
 */
export declare const CompartmentTypeCodings: {
    /**
     * Device: The compartment definition is for the device compartment.
     */
    readonly Device: Coding;
    /**
     * Encounter: The compartment definition is for the encounter compartment.
     */
    readonly Encounter: Coding;
    /**
     * Patient: The compartment definition is for the patient compartment.
     */
    readonly Patient: Coding;
    /**
     * Practitioner: The compartment definition is for the practitioner compartment.
     */
    readonly Practitioner: Coding;
    /**
     * RelatedPerson: The compartment definition is for the related-person compartment.
     */
    readonly RelatedPerson: Coding;
};
/**
 * Which type a compartment definition describes.
 */
export declare type CompartmentTypeCodingType = typeof CompartmentTypeCodings;
//# sourceMappingURL=CompartmentTypeCodings.d.ts.map