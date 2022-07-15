import { CodingArgs } from '../fhir/Coding.js';
/**
 * Defines the type of structure that a definition is describing.
 */
export declare type StructureDefinitionKindCodingType = {
    /**
     * complex-type: A  complex structure that defines a set of data elements. These can be used throughout Resource and extension definitions, and in logical models.
     */
    ComplexDataType: CodingArgs;
    /**
     * logical: A conceptual package of data that will be mapped to resources for implementation.
     */
    LogicalModel: CodingArgs;
    /**
     * primitive-type: A primitive type that has a value and an extension. These can be used throughout Resource and extension definitions. Only the base specification can define primitive types.
     */
    PrimitiveDataType: CodingArgs;
    /**
     * resource: A resource defined by the FHIR specification.
     */
    Resource: CodingArgs;
};
/**
 * Defines the type of structure that a definition is describing.
 */
export declare const StructureDefinitionKindCodings: StructureDefinitionKindCodingType;
//# sourceMappingURL=StructureDefinitionKindCodings.d.ts.map