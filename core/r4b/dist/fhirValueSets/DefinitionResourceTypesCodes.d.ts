/**
 * A list of all the definition resource types defined in this version of the FHIR specification.
 */
export declare const DefinitionResourceTypesCodes: {
    /**
     * ActivityDefinition: This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context.
     */
    readonly ActivityDefinition: "ActivityDefinition";
    /**
     * EventDefinition: The EventDefinition resource provides a reusable description of when a particular event can occur.
     */
    readonly EventDefinition: "EventDefinition";
    /**
     * Measure: The Measure resource provides the definition of a quality measure.
     */
    readonly Measure: "Measure";
    /**
     * OperationDefinition: A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction).
     */
    readonly OperationDefinition: "OperationDefinition";
    /**
     * PlanDefinition: This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols.
     */
    readonly PlanDefinition: "PlanDefinition";
    /**
     * Questionnaire: A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection.
     */
    readonly Questionnaire: "Questionnaire";
};
/**
 * A list of all the definition resource types defined in this version of the FHIR specification.
 */
export declare type DefinitionResourceTypesCodeType = typeof DefinitionResourceTypesCodes[keyof typeof DefinitionResourceTypesCodes];
//# sourceMappingURL=DefinitionResourceTypesCodes.d.ts.map