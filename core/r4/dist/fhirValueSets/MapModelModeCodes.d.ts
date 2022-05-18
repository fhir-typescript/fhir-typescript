/**
 * How the referenced structure is used in this mapping.
 */
export declare const MapModelModeCodes: {
    /**
     * produced: This structure describes an instance that the mapping engine may ask to create that is used a target of data.
     */
    readonly ProducedStructureDefinition: "produced";
    /**
     * queried: This structure describes an instance that the mapping engine may ask for that is used a source of data.
     */
    readonly QueriedStructureDefinition: "queried";
    /**
     * source: This structure describes an instance passed to the mapping engine that is used a source of data.
     */
    readonly SourceStructureDefinition: "source";
    /**
     * target: This structure describes an instance passed to the mapping engine that is used a target of data.
     */
    readonly TargetStructureDefinition: "target";
};
/**
 * How the referenced structure is used in this mapping.
 */
export declare type MapModelModeCodeType = typeof MapModelModeCodes[keyof typeof MapModelModeCodes];
//# sourceMappingURL=MapModelModeCodes.d.ts.map