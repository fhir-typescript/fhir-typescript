import { Coding } from '../fhir/Coding.js';
/**
 * Permitted data type for observation value.
 */
export declare const PermittedDataTypeCodings: {
    /**
     * boolean: true or false.
     */
    readonly VALBoolean: Coding;
    /**
     * CodeableConcept: A coded concept from a reference terminology and/or text.
     */
    readonly CodeableConcept: Coding;
    /**
     * dateTime: A date, date-time or partial date (e.g. just year or year + month) as used in human communication.
     */
    readonly DateTime: Coding;
    /**
     * integer: A signed integer.
     */
    readonly Integer: Coding;
    /**
     * Period: A time range defined by start and end date/time.
     */
    readonly Period: Coding;
    /**
     * Quantity: A measured amount.
     */
    readonly Quantity: Coding;
    /**
     * Range: A set of values bounded by low and high.
     */
    readonly Range: Coding;
    /**
     * Ratio: A ratio of two Quantity values - a numerator and a denominator.
     */
    readonly Ratio: Coding;
    /**
     * SampledData: A series of measurements taken by a device.
     */
    readonly SampledData: Coding;
    /**
     * string: A sequence of Unicode characters.
     */
    readonly VALString: Coding;
    /**
     * time: A time during the day, in the format hh:mm:ss.
     */
    readonly Time: Coding;
};
/**
 * Permitted data type for observation value.
 */
export declare type PermittedDataTypeCodingType = typeof PermittedDataTypeCodings;
//# sourceMappingURL=PermittedDataTypeCodings.d.ts.map