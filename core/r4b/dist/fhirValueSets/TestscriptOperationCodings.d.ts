import { CodingArgs } from '../fhir/Coding.js';
/**
 * This value set defines a set of codes that are used to indicate the supported operations of a testing engine or tool.
 */
export declare type TestscriptOperationCodingType = {
    /**
     * apply: Realizes an ActivityDefinition in a specific context
     */
    Apply: CodingArgs;
    /**
     * batch: Update, create or delete a set of resources as independent actions.
     */
    Batch: CodingArgs;
    /**
     * capabilities: Get a capability statement for the system.
     */
    Capabilities: CodingArgs;
    /**
     * closure: Closure Table Maintenance
     */
    Closure: CodingArgs;
    /**
     * conforms: Compare two systems CapabilityStatements
     */
    Conforms: CodingArgs;
    /**
     * create: Create a new resource with a server assigned id.
     */
    Create: CodingArgs;
    /**
     * data-requirements: Aggregates and returns the parameters and data requirements for a resource and all its dependencies as a single module definition
     */
    DataRequirements: CodingArgs;
    /**
     * delete: Delete a resource.
     */
    Delete: CodingArgs;
    /**
     * deleteCondMultiple: Conditionally delete one or more resources based on search parameters.
     */
    DeleteCondMultiple: CodingArgs;
    /**
     * deleteCondSingle: Conditionally delete a single resource based on search parameters.
     */
    DeleteCondSingle: CodingArgs;
    /**
     * document: Generate a Document
     */
    Document: CodingArgs;
    /**
     * evaluate: Request clinical decision support guidance based on a specific decision support module
     */
    Evaluate: CodingArgs;
    /**
     * evaluate-measure: Invoke an eMeasure and obtain the results
     */
    EvaluateMeasure: CodingArgs;
    /**
     * everything: Return all the related information as described in the Encounter or Patient
     */
    Everything: CodingArgs;
    /**
     * expand: Value Set Expansion
     */
    Expand: CodingArgs;
    /**
     * find: Find a functional list
     */
    Find: CodingArgs;
    /**
     * find-matches: Finding Codes based on supplied properties
     */
    FindMatches: CodingArgs;
    /**
     * graphql: Invoke a GraphQL query
     */
    Graphql: CodingArgs;
    /**
     * history: Retrieve the change history for a particular resource or resource type.
     */
    History: CodingArgs;
    /**
     * implements: Test if a server implements a client's required operations
     */
    Implements: CodingArgs;
    /**
     * lastn: Last N Observations Query
     */
    Lastn: CodingArgs;
    /**
     * lookup: Concept Look Up and Decomposition
     */
    Lookup: CodingArgs;
    /**
     * match: Find patient matches using MPI based logic
     */
    Match: CodingArgs;
    /**
     * meta: Access a list of profiles, tags, and security labels
     */
    Meta: CodingArgs;
    /**
     * meta-add: Add profiles, tags, and security labels to a resource
     */
    MetaAdd: CodingArgs;
    /**
     * meta-delete: Delete profiles, tags, and security labels for a resource
     */
    MetaDelete: CodingArgs;
    /**
     * patch: Patch an existing resource by its id.
     */
    Patch: CodingArgs;
    /**
     * populate: Populate Questionnaire
     */
    Populate: CodingArgs;
    /**
     * populatehtml: Generate HTML for Questionnaire
     */
    Populatehtml: CodingArgs;
    /**
     * populatelink: Generate a link to a Questionnaire completion webpage
     */
    Populatelink: CodingArgs;
    /**
     * process-message: Process a message according to the defined event
     */
    ProcessMessage: CodingArgs;
    /**
     * questionnaire: Build Questionnaire
     */
    Questionnaire: CodingArgs;
    /**
     * read: Read the current state of the resource.
     */
    Read: CodingArgs;
    /**
     * search: Search based on some filter criteria.
     */
    Search: CodingArgs;
    /**
     * stats: Observation Statistics
     */
    Stats: CodingArgs;
    /**
     * subset: Fetch a subset of the CapabilityStatement resource
     */
    Subset: CodingArgs;
    /**
     * subsumes: CodeSystem Subsumption Testing
     */
    Subsumes: CodingArgs;
    /**
     * transaction: Update, create or delete a set of resources as a single transaction.
     */
    Transaction: CodingArgs;
    /**
     * transform: Model Instance Transformation
     */
    Transform: CodingArgs;
    /**
     * translate: Concept Translation
     */
    Translate: CodingArgs;
    /**
     * update: Update an existing resource by its id.
     */
    Update: CodingArgs;
    /**
     * updateCreate: Update an existing resource by its id (or create it if it is new).
     */
    UpdateCreate: CodingArgs;
    /**
     * validate: Validate a resource
     */
    Validate: CodingArgs;
    /**
     * validate-code: ValueSet based Validation
     */
    ValidateCode: CodingArgs;
    /**
     * vread: Read the state of a specific version of the resource.
     */
    Vread: CodingArgs;
};
/**
 * This value set defines a set of codes that are used to indicate the supported operations of a testing engine or tool.
 */
export declare const TestscriptOperationCodings: TestscriptOperationCodingType;
//# sourceMappingURL=TestscriptOperationCodings.d.ts.map