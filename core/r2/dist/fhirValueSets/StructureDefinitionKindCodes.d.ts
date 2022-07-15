/**
 * Defines the type of structure that a definition is describing.
 */
export declare const StructureDefinitionKindCodes: {
    /**
     * datatype: A data type - either a primitive or complex structure that defines a set of data elements. These can be used throughout Resource and extension definitions.
     */
    readonly DataType: "datatype";
    /**
     * logical: A logical model - a conceptual package of data that will be mapped to resources for implementation.
     */
    readonly LogicalModel: "logical";
    /**
     * resource: A resource defined by the FHIR specification.
     */
    readonly Resource: "resource";
};
/**
 * Defines the type of structure that a definition is describing.
 */
export declare type StructureDefinitionKindCodeType = typeof StructureDefinitionKindCodes[keyof typeof StructureDefinitionKindCodes];
//# sourceMappingURL=StructureDefinitionKindCodes.d.ts.map