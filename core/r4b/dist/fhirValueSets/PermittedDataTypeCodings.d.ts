import { CodingArgs } from '../fhir/Coding.js';
/**
 * Permitted data type for observation value.
 */
export declare type PermittedDataTypeCodingType = {
    /**
     * boolean: true or false.
     */
    VALBoolean: CodingArgs;
    /**
     * CodeableConcept: A coded concept from a reference terminology and/or text.
     */
    CodeableConcept: CodingArgs;
    /**
     * dateTime: A date, date-time or partial date (e.g. just year or year + month) as used in human communication.
     */
    DateTime: CodingArgs;
    /**
     * integer: A signed integer.
     */
    Integer: CodingArgs;
    /**
     * Period: A time range defined by start and end date/time.
     */
    Period: CodingArgs;
    /**
     * Quantity: A measured amount.
     */
    Quantity: CodingArgs;
    /**
     * Range: A set of values bounded by low and high.
     */
    Range: CodingArgs;
    /**
     * Ratio: A ratio of two Quantity values - a numerator and a denominator.
     */
    Ratio: CodingArgs;
    /**
     * SampledData: A series of measurements taken by a device.
     */
    SampledData: CodingArgs;
    /**
     * string: A sequence of Unicode characters.
     */
    VALString: CodingArgs;
    /**
     * time: A time during the day, in the format hh:mm:ss.
     */
    Time: CodingArgs;
};
/**
 * Permitted data type for observation value.
 */
export declare const PermittedDataTypeCodings: PermittedDataTypeCodingType;
//# sourceMappingURL=PermittedDataTypeCodings.d.ts.map