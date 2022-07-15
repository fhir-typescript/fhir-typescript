import { CodingArgs } from '../fhir/Coding.js';
/**
 * The type of knowledge asset this library contains.
 */
export declare type LibraryTypeCodingType = {
    /**
     * asset-collection: The resource is a collection of knowledge assets.
     */
    AssetCollection: CodingArgs;
    /**
     * logic-library: The resource is a shareable library of formalized knowledge.
     */
    LogicLibrary: CodingArgs;
    /**
     * model-definition: The resource is a definition of an information model.
     */
    ModelDefinition: CodingArgs;
    /**
     * module-definition: The resource defines the dependencies, parameters, and data requirements for a particular module or evaluation context.
     */
    ModuleDefinition: CodingArgs;
};
/**
 * The type of knowledge asset this library contains.
 */
export declare const LibraryTypeCodings: LibraryTypeCodingType;
//# sourceMappingURL=LibraryTypeCodings.d.ts.map