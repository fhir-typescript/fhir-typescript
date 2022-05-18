/**
 * Permitted data type for observation value.
 */
export declare const PermittedDataTypeCodes: {
    /**
     * boolean: true or false.
     */
    readonly VALBoolean: "boolean";
    /**
     * CodeableConcept: A coded concept from a reference terminology and/or text.
     */
    readonly CodeableConcept: "CodeableConcept";
    /**
     * dateTime: A date, date-time or partial date (e.g. just year or year + month) as used in human communication.
     */
    readonly DateTime: "dateTime";
    /**
     * integer: A signed integer.
     */
    readonly Integer: "integer";
    /**
     * Period: A time range defined by start and end date/time.
     */
    readonly Period: "Period";
    /**
     * Quantity: A measured amount.
     */
    readonly Quantity: "Quantity";
    /**
     * Range: A set of values bounded by low and high.
     */
    readonly Range: "Range";
    /**
     * Ratio: A ratio of two Quantity values - a numerator and a denominator.
     */
    readonly Ratio: "Ratio";
    /**
     * SampledData: A series of measurements taken by a device.
     */
    readonly SampledData: "SampledData";
    /**
     * string: A sequence of Unicode characters.
     */
    readonly VALString: "string";
    /**
     * time: A time during the day, in the format hh:mm:ss.
     */
    readonly Time: "time";
};
/**
 * Permitted data type for observation value.
 */
export declare type PermittedDataTypeCodeType = typeof PermittedDataTypeCodes[keyof typeof PermittedDataTypeCodes];
//# sourceMappingURL=PermittedDataTypeCodes.d.ts.map