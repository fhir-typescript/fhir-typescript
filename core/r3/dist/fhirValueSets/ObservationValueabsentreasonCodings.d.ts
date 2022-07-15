import { CodingArgs } from '../fhir/Coding.js';
/**
 * This value set defines the set of codes for identifying the reason why the expected result in Observation.value[x] is missing.
 */
export declare type ObservationValueabsentreasonCodingType = {
    /**
     * asked: The source human does not know the value.
     */
    Asked: CodingArgs;
    /**
     * astext: The content of the data is represented in the resource narrative.
     */
    AsText: CodingArgs;
    /**
     * error: Some system or workflow process error means that the information is not available.
     */
    Error: CodingArgs;
    /**
     * masked: The information is not available due to security, privacy or related reasons.
     */
    Masked: CodingArgs;
    /**
     * NaN: NaN, standing for not a number, is a numeric data type value representing an undefined or unrepresentable value.
     */
    NotANumber: CodingArgs;
    /**
     * not-asked: The workflow didn't lead to this value being known.
     */
    NotAsked: CodingArgs;
    /**
     * not-performed: The value is not available because the observation procedure (test, etc.) was not performed.
     */
    NotPerformed: CodingArgs;
    /**
     * temp: There is reason to expect (from the workflow) that the value may become known.
     */
    Temp: CodingArgs;
    /**
     * unknown: The value is not known.
     */
    Unknown: CodingArgs;
    /**
     * unsupported: The source system wasn't capable of supporting this element.
     */
    Unsupported: CodingArgs;
};
/**
 * This value set defines the set of codes for identifying the reason why the expected result in Observation.value[x] is missing.
 */
export declare const ObservationValueabsentreasonCodings: ObservationValueabsentreasonCodingType;
//# sourceMappingURL=ObservationValueabsentreasonCodings.d.ts.map