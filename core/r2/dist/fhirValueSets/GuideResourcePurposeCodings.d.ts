import { CodingArgs } from '../fhir/Coding.js';
/**
 * Why a resource is included in the guide.
 */
export declare type GuideResourcePurposeCodingType = {
    /**
     * dictionary: The resource contains a dictionary that is part of the implementation guide.
     */
    Dictionary: CodingArgs;
    /**
     * example: The resource is intended as an example.
     */
    Example: CodingArgs;
    /**
     * extension: The resource defines an extension (StructureDefinition) that is used in the implementation guide.
     */
    Extension: CodingArgs;
    /**
     * logical: The resource defines a logical model (in a StructureDefinition) that is used in the implementation guide.
     */
    LogicalModel: CodingArgs;
    /**
     * profile: The resource defines a profile (StructureDefinition) that is used in the implementation guide.
     */
    Profile: CodingArgs;
    /**
     * terminology: The resource defines a value set or concept map used in the implementation guide.
     */
    Terminology: CodingArgs;
};
/**
 * Why a resource is included in the guide.
 */
export declare const GuideResourcePurposeCodings: GuideResourcePurposeCodingType;
//# sourceMappingURL=GuideResourcePurposeCodings.d.ts.map