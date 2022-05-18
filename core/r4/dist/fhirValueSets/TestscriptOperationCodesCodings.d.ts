import { Coding } from '../fhir/Coding.js';
/**
 * This value set defines a set of codes that are used to indicate the supported operations of a testing engine or tool.
 */
export declare const TestscriptOperationCodesCodings: {
    /**
     * apply: Realizes an ActivityDefinition in a specific context
     */
    readonly Apply: Coding;
    /**
     * batch: Update, create or delete a set of resources as independent actions.
     */
    readonly Batch: Coding;
    /**
     * capabilities: Get a capability statement for the system.
     */
    readonly Capabilities: Coding;
    /**
     * closure: Closure Table Maintenance
     */
    readonly Closure: Coding;
    /**
     * conforms: Compare two systems CapabilityStatements
     */
    readonly Conforms: Coding;
    /**
     * create: Create a new resource with a server assigned id.
     */
    readonly Create: Coding;
    /**
     * data-requirements: Aggregates and returns the parameters and data requirements for a resource and all its dependencies as a single module definition
     */
    readonly DataRequirements: Coding;
    /**
     * delete: Delete a resource.
     */
    readonly Delete: Coding;
    /**
     * deleteCondMultiple: Conditionally delete one or more resources based on search parameters.
     */
    readonly DeleteCondMultiple: Coding;
    /**
     * deleteCondSingle: Conditionally delete a single resource based on search parameters.
     */
    readonly DeleteCondSingle: Coding;
    /**
     * document: Generate a Document
     */
    readonly Document: Coding;
    /**
     * evaluate: Request clinical decision support guidance based on a specific decision support module
     */
    readonly Evaluate: Coding;
    /**
     * evaluate-measure: Invoke an eMeasure and obtain the results
     */
    readonly EvaluateMeasure: Coding;
    /**
     * everything: Return all the related information as described in the Encounter or Patient
     */
    readonly Everything: Coding;
    /**
     * expand: Value Set Expansion
     */
    readonly Expand: Coding;
    /**
     * find: Find a functional list
     */
    readonly Find: Coding;
    /**
     * find-matches: Finding Codes based on supplied properties
     */
    readonly FindMatches: Coding;
    /**
     * graphql: Invoke a GraphQL query
     */
    readonly Graphql: Coding;
    /**
     * history: Retrieve the change history for a particular resource or resource type.
     */
    readonly History: Coding;
    /**
     * implements: Test if a server implements a client's required operations
     */
    readonly Implements: Coding;
    /**
     * lastn: Last N Observations Query
     */
    readonly Lastn: Coding;
    /**
     * lookup: Concept Look Up and Decomposition
     */
    readonly Lookup: Coding;
    /**
     * match: Find patient matches using MPI based logic
     */
    readonly Match: Coding;
    /**
     * meta: Access a list of profiles, tags, and security labels
     */
    readonly Meta: Coding;
    /**
     * meta-add: Add profiles, tags, and security labels to a resource
     */
    readonly MetaAdd: Coding;
    /**
     * meta-delete: Delete profiles, tags, and security labels for a resource
     */
    readonly MetaDelete: Coding;
    /**
     * patch: Patch an existing resource by its id.
     */
    readonly Patch: Coding;
    /**
     * populate: Populate Questionnaire
     */
    readonly Populate: Coding;
    /**
     * populatehtml: Generate HTML for Questionnaire
     */
    readonly Populatehtml: Coding;
    /**
     * populatelink: Generate a link to a Questionnaire completion webpage
     */
    readonly Populatelink: Coding;
    /**
     * process-message: Process a message according to the defined event
     */
    readonly ProcessMessage: Coding;
    /**
     * questionnaire: Build Questionnaire
     */
    readonly Questionnaire: Coding;
    /**
     * read: Read the current state of the resource.
     */
    readonly Read: Coding;
    /**
     * search: Search based on some filter criteria.
     */
    readonly Search: Coding;
    /**
     * stats: Observation Statistics
     */
    readonly Stats: Coding;
    /**
     * subset: Fetch a subset of the CapabilityStatement resource
     */
    readonly Subset: Coding;
    /**
     * subsumes: CodeSystem Subsumption Testing
     */
    readonly Subsumes: Coding;
    /**
     * transaction: Update, create or delete a set of resources as a single transaction.
     */
    readonly Transaction: Coding;
    /**
     * transform: Model Instance Transformation
     */
    readonly Transform: Coding;
    /**
     * translate: Concept Translation
     */
    readonly Translate: Coding;
    /**
     * update: Update an existing resource by its id.
     */
    readonly Update: Coding;
    /**
     * updateCreate: Update an existing resource by its id (or create it if it is new).
     */
    readonly UpdateCreate: Coding;
    /**
     * validate: Validate a resource
     */
    readonly Validate: Coding;
    /**
     * validate-code: ValueSet based Validation
     */
    readonly ValidateCode: Coding;
    /**
     * vread: Read the state of a specific version of the resource.
     */
    readonly Vread: Coding;
};
/**
 * This value set defines a set of codes that are used to indicate the supported operations of a testing engine or tool.
 */
export declare type TestscriptOperationCodesCodingType = typeof TestscriptOperationCodesCodings;
//# sourceMappingURL=TestscriptOperationCodesCodings.d.ts.map