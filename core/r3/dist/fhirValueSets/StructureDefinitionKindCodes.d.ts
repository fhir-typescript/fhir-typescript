/**
 * Defines the type of structure that a definition is describing.
 */
export declare const StructureDefinitionKindCodes: {
    /**
     * complex-type: A  complex structure that defines a set of data elements. These can be used throughout Resource and extension definitions, and in logical models.
     */
    readonly ComplexDataType: "complex-type";
    /**
     * logical: A conceptual package of data that will be mapped to resources for implementation.
     */
    readonly LogicalModel: "logical";
    /**
     * primitive-type: A primitive type that has a value and an extension. These can be used throughout Resource and extension definitions. Only the base specification can define primitive types.
     */
    readonly PrimitiveDataType: "primitive-type";
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