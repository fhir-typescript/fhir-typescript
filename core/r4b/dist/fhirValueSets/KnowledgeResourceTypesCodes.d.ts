/**
 * A list of all the knowledge resource types defined in this version of the FHIR specification.
 */
export declare const KnowledgeResourceTypesCodes: {
    /**
     * ActivityDefinition: The definition of a specific activity to be taken, independent of any particular patient or context.
     */
    readonly ActivityDefinition: "ActivityDefinition";
    /**
     * CodeSystem: A set of codes drawn from one or more code systems.
     */
    readonly CodeSystem: "CodeSystem";
    /**
     * ConceptMap: A map from one set of concepts to one or more other concepts.
     */
    readonly ConceptMap: "ConceptMap";
    /**
     * Library: Represents a library of quality improvement components.
     */
    readonly Library: "Library";
    /**
     * Measure: A quality measure definition.
     */
    readonly Measure: "Measure";
    /**
     * PlanDefinition: The definition of a plan for a series of actions, independent of any specific patient or context.
     */
    readonly PlanDefinition: "PlanDefinition";
    /**
     * StructureDefinition: Structural Definition.
     */
    readonly StructureDefinition: "StructureDefinition";
    /**
     * StructureMap: A Map of relationships between 2 structures that can be used to transform data.
     */
    readonly StructureMap: "StructureMap";
    /**
     * ValueSet: A set of codes drawn from one or more code systems.
     */
    readonly ValueSet: "ValueSet";
};
/**
 * A list of all the knowledge resource types defined in this version of the FHIR specification.
 */
export declare type KnowledgeResourceTypesCodeType = typeof KnowledgeResourceTypesCodes[keyof typeof KnowledgeResourceTypesCodes];
//# sourceMappingURL=KnowledgeResourceTypesCodes.d.ts.map