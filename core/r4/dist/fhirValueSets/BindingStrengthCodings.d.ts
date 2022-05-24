import { CodingArgs } from '../fhir/Coding.js';
/**
 * Indication of the degree of conformance expectations associated with a binding.
 */
export declare type BindingStrengthCodingType = {
    /**
     * example: Instances are not expected or even encouraged to draw from the specified value set.  The value set merely provides examples of the types of concepts intended to be included.
     */
    Example: CodingArgs;
    /**
     * extensible: To be conformant, the concept in this element SHALL be from the specified value set if any of the codes within the value set can apply to the concept being communicated.  If the value set does not cover the concept (based on human review), alternate codings (or, data type allowing, text) may be included instead.
     */
    Extensible: CodingArgs;
    /**
     * preferred: Instances are encouraged to draw from the specified codes for interoperability purposes but are not required to do so to be considered conformant.
     */
    Preferred: CodingArgs;
    /**
     * required: To be conformant, the concept in this element SHALL be from the specified value set.
     */
    Required: CodingArgs;
};
/**
 * Indication of the degree of conformance expectations associated with a binding.
 */
export declare const BindingStrengthCodings: BindingStrengthCodingType;
//# sourceMappingURL=BindingStrengthCodings.d.ts.map