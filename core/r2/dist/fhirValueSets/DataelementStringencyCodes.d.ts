/**
 * Indicates the degree of precision of the data element definition.
 */
export declare const DataelementStringencyCodes: {
    /**
     * comparable: The data element is sufficiently well-constrained that multiple pieces of data captured according to the constraints of the data element will be comparable (though in some cases, a degree of automated conversion/normalization may be required).
     */
    readonly Comparable: "comparable";
    /**
     * convertable: The data element allows multiple units of measure that are convertable between each other (e.g. inches and centimeters) and/or allows data to be captured in multiple value sets for which a known mapping exists allowing conversion of meaning.
     */
    readonly Convertable: "convertable";
    /**
     * equivalent: The data element allows multiple units of measure having equivalent meaning; e.g. "cc" (cubic centimeter) and "mL" (milliliter).
     */
    readonly Equivalent: "equivalent";
    /**
     * flexible: The data element is unconstrained in units, choice of data types and/or choice of vocabulary such that automated comparison of data captured using the data element is not possible.
     */
    readonly Flexible: "flexible";
    /**
     * fully-specified: The data element is fully specified down to a single value set, single unit of measure, single data type, etc.  Multiple pieces of data associated with this data element are fully comparable.
     */
    readonly FullySpecified: "fully-specified";
    /**
     * scaleable: A convertable data element where unit conversions are different only by a power of 10; e.g. g, mg, kg.
     */
    readonly Scaleable: "scaleable";
};
/**
 * Indicates the degree of precision of the data element definition.
 */
export declare type DataelementStringencyCodeType = typeof DataelementStringencyCodes[keyof typeof DataelementStringencyCodes];
//# sourceMappingURL=DataelementStringencyCodes.d.ts.map