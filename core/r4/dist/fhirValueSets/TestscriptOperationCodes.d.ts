/**
 * This value set defines a set of codes that are used to indicate the supported operations of a testing engine or tool.
 */
export declare const TestscriptOperationCodes: {
    /**
     * apply: Realizes an ActivityDefinition in a specific context
     */
    readonly Apply: "apply";
    /**
     * batch: Update, create or delete a set of resources as independent actions.
     */
    readonly Batch: "batch";
    /**
     * capabilities: Get a capability statement for the system.
     */
    readonly Capabilities: "capabilities";
    /**
     * closure: Closure Table Maintenance
     */
    readonly Closure: "closure";
    /**
     * conforms: Compare two systems CapabilityStatements
     */
    readonly Conforms: "conforms";
    /**
     * create: Create a new resource with a server assigned id.
     */
    readonly Create: "create";
    /**
     * data-requirements: Aggregates and returns the parameters and data requirements for a resource and all its dependencies as a single module definition
     */
    readonly DataRequirements: "data-requirements";
    /**
     * delete: Delete a resource.
     */
    readonly Delete: "delete";
    /**
     * deleteCondMultiple: Conditionally delete one or more resources based on search parameters.
     */
    readonly DeleteCondMultiple: "deleteCondMultiple";
    /**
     * deleteCondSingle: Conditionally delete a single resource based on search parameters.
     */
    readonly DeleteCondSingle: "deleteCondSingle";
    /**
     * document: Generate a Document
     */
    readonly Document: "document";
    /**
     * evaluate: Request clinical decision support guidance based on a specific decision support module
     */
    readonly Evaluate: "evaluate";
    /**
     * evaluate-measure: Invoke an eMeasure and obtain the results
     */
    readonly EvaluateMeasure: "evaluate-measure";
    /**
     * everything: Return all the related information as described in the Encounter or Patient
     */
    readonly Everything: "everything";
    /**
     * expand: Value Set Expansion
     */
    readonly Expand: "expand";
    /**
     * find: Find a functional list
     */
    readonly Find: "find";
    /**
     * find-matches: Finding Codes based on supplied properties
     */
    readonly FindMatches: "find-matches";
    /**
     * graphql: Invoke a GraphQL query
     */
    readonly Graphql: "graphql";
    /**
     * history: Retrieve the change history for a particular resource or resource type.
     */
    readonly History: "history";
    /**
     * implements: Test if a server implements a client's required operations
     */
    readonly Implements: "implements";
    /**
     * lastn: Last N Observations Query
     */
    readonly Lastn: "lastn";
    /**
     * lookup: Concept Look Up and Decomposition
     */
    readonly Lookup: "lookup";
    /**
     * match: Find patient matches using MPI based logic
     */
    readonly Match: "match";
    /**
     * meta: Access a list of profiles, tags, and security labels
     */
    readonly Meta: "meta";
    /**
     * meta-add: Add profiles, tags, and security labels to a resource
     */
    readonly MetaAdd: "meta-add";
    /**
     * meta-delete: Delete profiles, tags, and security labels for a resource
     */
    readonly MetaDelete: "meta-delete";
    /**
     * patch: Patch an existing resource by its id.
     */
    readonly Patch: "patch";
    /**
     * populate: Populate Questionnaire
     */
    readonly Populate: "populate";
    /**
     * populatehtml: Generate HTML for Questionnaire
     */
    readonly Populatehtml: "populatehtml";
    /**
     * populatelink: Generate a link to a Questionnaire completion webpage
     */
    readonly Populatelink: "populatelink";
    /**
     * process-message: Process a message according to the defined event
     */
    readonly ProcessMessage: "process-message";
    /**
     * questionnaire: Build Questionnaire
     */
    readonly Questionnaire: "questionnaire";
    /**
     * read: Read the current state of the resource.
     */
    readonly Read: "read";
    /**
     * search: Search based on some filter criteria.
     */
    readonly Search: "search";
    /**
     * stats: Observation Statistics
     */
    readonly Stats: "stats";
    /**
     * subset: Fetch a subset of the CapabilityStatement resource
     */
    readonly Subset: "subset";
    /**
     * subsumes: CodeSystem Subsumption Testing
     */
    readonly Subsumes: "subsumes";
    /**
     * transaction: Update, create or delete a set of resources as a single transaction.
     */
    readonly Transaction: "transaction";
    /**
     * transform: Model Instance Transformation
     */
    readonly Transform: "transform";
    /**
     * translate: Concept Translation
     */
    readonly Translate: "translate";
    /**
     * update: Update an existing resource by its id.
     */
    readonly Update: "update";
    /**
     * updateCreate: Update an existing resource by its id (or create it if it is new).
     */
    readonly UpdateCreate: "updateCreate";
    /**
     * validate: Validate a resource
     */
    readonly Validate: "validate";
    /**
     * validate-code: ValueSet based Validation
     */
    readonly ValidateCode: "validate-code";
    /**
     * vread: Read the state of a specific version of the resource.
     */
    readonly Vread: "vread";
};
/**
 * This value set defines a set of codes that are used to indicate the supported operations of a testing engine or tool.
 */
export declare type TestscriptOperationCodeType = typeof TestscriptOperationCodes[keyof typeof TestscriptOperationCodes];
//# sourceMappingURL=TestscriptOperationCodes.d.ts.map