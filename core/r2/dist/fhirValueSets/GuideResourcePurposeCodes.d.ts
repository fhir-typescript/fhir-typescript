/**
 * Why a resource is included in the guide.
 */
export declare const GuideResourcePurposeCodes: {
    /**
     * dictionary: The resource contains a dictionary that is part of the implementation guide.
     */
    readonly Dictionary: "dictionary";
    /**
     * example: The resource is intended as an example.
     */
    readonly Example: "example";
    /**
     * extension: The resource defines an extension (StructureDefinition) that is used in the implementation guide.
     */
    readonly Extension: "extension";
    /**
     * logical: The resource defines a logical model (in a StructureDefinition) that is used in the implementation guide.
     */
    readonly LogicalModel: "logical";
    /**
     * profile: The resource defines a profile (StructureDefinition) that is used in the implementation guide.
     */
    readonly Profile: "profile";
    /**
     * terminology: The resource defines a value set or concept map used in the implementation guide.
     */
    readonly Terminology: "terminology";
};
/**
 * Why a resource is included in the guide.
 */
export declare type GuideResourcePurposeCodeType = typeof GuideResourcePurposeCodes[keyof typeof GuideResourcePurposeCodes];
//# sourceMappingURL=GuideResourcePurposeCodes.d.ts.map