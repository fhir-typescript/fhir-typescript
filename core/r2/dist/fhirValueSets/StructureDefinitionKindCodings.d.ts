import { CodingArgs } from '../fhir/Coding.js';
/**
 * Defines the type of structure that a definition is describing.
 */
export declare type StructureDefinitionKindCodingType = {
    /**
     * datatype: A data type - either a primitive or complex structure that defines a set of data elements. These can be used throughout Resource and extension definitions.
     */
    DataType: CodingArgs;
    /**
     * logical: A logical model - a conceptual package of data that will be mapped to resources for implementation.
     */
    LogicalModel: CodingArgs;
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