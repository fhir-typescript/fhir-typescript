/**
 * The type of knowledge asset this library contains.
 */
export declare const LibraryTypeCodes: {
    /**
     * asset-collection: The resource is a collection of knowledge assets.
     */
    readonly AssetCollection: "asset-collection";
    /**
     * logic-library: The resource is a shareable library of formalized knowledge.
     */
    readonly LogicLibrary: "logic-library";
    /**
     * model-definition: The resource is a definition of an information model.
     */
    readonly ModelDefinition: "model-definition";
    /**
     * module-definition: The resource defines the dependencies, parameters, and data requirements for a particular module or evaluation context.
     */
    readonly ModuleDefinition: "module-definition";
};
/**
 * The type of knowledge asset this library contains.
 */
export declare type LibraryTypeCodeType = typeof LibraryTypeCodes[keyof typeof LibraryTypeCodes];
//# sourceMappingURL=LibraryTypeCodes.d.ts.map