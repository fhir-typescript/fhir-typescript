import { CodingArgs } from '../fhir/Coding.js';
/**
 * Defines the type of structure that a definition is describing.
 */
export declare type StructureDefinitionKindCodingType = {
    /**
     * complex-type: A  complex structure that defines a set of data elements that is suitable for use in 'resources'. The base specification defines a number of complex types, and other specifications can define additional types. These structures do not have a maintained identity.
     */
    ComplexDataType: CodingArgs;
    /**
     * logical: A pattern or a template that is not intended to be a real resource or complex type.
     */
    Logical: CodingArgs;
    /**
     * primitive-type: A primitive type that has a value and an extension. These can be used throughout complex datatype, Resource and extension definitions. Only the base specification can define primitive types.
     */
    PrimitiveDataType: CodingArgs;
    /**
     * resource: A 'resource' - a directed acyclic graph of elements that aggregrates other types into an identifiable entity. The base FHIR resources are defined by the FHIR specification itself but other 'resources' can be defined in additional specifications (though these will not be recognised as 'resources' by the FHIR specification (i.e. they do not get end-points etc, or act as the targets of references in FHIR defined resources - though other specificatiosn can treat them this way).
     */
    Resource: CodingArgs;
};
/**
 * Defines the type of structure that a definition is describing.
 */
export declare const StructureDefinitionKindCodings: StructureDefinitionKindCodingType;
//# sourceMappingURL=StructureDefinitionKindCodings.d.ts.map