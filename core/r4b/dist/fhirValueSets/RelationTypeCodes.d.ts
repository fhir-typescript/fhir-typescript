/**
 * The type of relations between entries.
 */
export declare const RelationTypeCodes: {
    /**
     * is-replaced-by: the related entry represents an item that replaces the current retired item.
     */
    readonly ReplacedBy: "is-replaced-by";
    /**
     * triggers: the related entry represents an activity that may be triggered by the current item.
     */
    readonly Triggers: "triggers";
};
/**
 * The type of relations between entries.
 */
export declare type RelationTypeCodeType = typeof RelationTypeCodes[keyof typeof RelationTypeCodes];
//# sourceMappingURL=RelationTypeCodes.d.ts.map