import { CodingArgs } from '../fhir/Coding.js';
/**
 * How an element value is interpreted when discrimination is evaluated.
 */
export declare type DiscriminatorTypeCodingType = {
    /**
     * exists: The slices are differentiated by the presence or absence of the nominated element.
     */
    Exists: CodingArgs;
    /**
     * pattern: The slices have different values in the nominated element, as determined by testing them against the applicable ElementDefinition.pattern[x].
     */
    Pattern: CodingArgs;
    /**
     * profile: The slices are differentiated by conformance of the nominated element to a specified profile. Note that if the path specifies .resolve() then the profile is the target profile on the reference. In this case, validation by the possible profiles is required to differentiate the slices.
     */
    Profile: CodingArgs;
    /**
     * type: The slices are differentiated by type of the nominated element.
     */
    Type: CodingArgs;
    /**
     * value: The slices have different values in the nominated element.
     */
    Value: CodingArgs;
};
/**
 * How an element value is interpreted when discrimination is evaluated.
 */
export declare const DiscriminatorTypeCodings: DiscriminatorTypeCodingType;
//# sourceMappingURL=DiscriminatorTypeCodings.d.ts.map