import { Coding } from '../fhir/Coding.js';
/**
 * How an element value is interpreted when discrimination is evaluated.
 */
export declare const DiscriminatorTypeCodings: {
    /**
     * exists: The slices are differentiated by the presence or absence of the nominated element.
     */
    readonly Exists: Coding;
    /**
     * pattern: The slices have different values in the nominated element, as determined by testing them against the applicable ElementDefinition.pattern[x].
     */
    readonly Pattern: Coding;
    /**
     * profile: The slices are differentiated by conformance of the nominated element to a specified profile. Note that if the path specifies .resolve() then the profile is the target profile on the reference. In this case, validation by the possible profiles is required to differentiate the slices.
     */
    readonly Profile: Coding;
    /**
     * type: The slices are differentiated by type of the nominated element.
     */
    readonly Type: Coding;
    /**
     * value: The slices have different values in the nominated element.
     */
    readonly Value: Coding;
};
/**
 * How an element value is interpreted when discrimination is evaluated.
 */
export declare type DiscriminatorTypeCodingType = typeof DiscriminatorTypeCodings;
//# sourceMappingURL=DiscriminatorTypeCodings.d.ts.map