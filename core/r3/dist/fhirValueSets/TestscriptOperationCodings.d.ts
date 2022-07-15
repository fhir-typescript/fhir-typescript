import { CodingArgs } from '../fhir/Coding.js';
/**
 * This value set defines a set of codes that are used to indicate the supported operations of a testing engine or tool.
 */
export declare type TestscriptOperationCodingType = {
    /**
     * apply: Realize a definition in a specific context
     */
    DollarApply: CodingArgs;
    /**
     * batch: Update, create or delete a set of resources as independent actions.
     */
    Batch: CodingArgs;
    /**
     * cancel: Cancel Task
     */
    DollarCancel: CodingArgs;
    /**
     * capabilities: Get a capability statement for the system.
     */
    Capabilities: CodingArgs;
    /**
     * closure: Closure Table Maintenance
     */
    DollarClosure: CodingArgs;
    /**
     * compose: Code Composition based on supplied properties
     */
    DollarCompose: CodingArgs;
    /**
     * conforms: Test if a server implements a client's required operations
     */
    DollarConforms: CodingArgs;
    /**
     * create: Create a new resource with a server assigned id.
     */
    Create: CodingArgs;
    /**
     * data-requirements: Aggregates and return the parameters and data requirements as a single module definition library
     */
    DollarDataRequirements: CodingArgs;
    /**
     * delete: Delete a resource.
     */
    Delete: CodingArgs;
    /**
     * deleteCondMultiple: Conditionally delete one or more resources based on search parameters.
     */
    ConditionalDeleteMultiple: CodingArgs;
    /**
     * deleteCondSingle: Conditionally delete a single resource based on search parameters.
     */
    ConditionalDeleteSingle: CodingArgs;
    /**
     * document: Generate a Document
     */
    DollarDocument: CodingArgs;
    /**
     * evaluate: Evaluate DecisionSupportRule / DecisionSupportServiceModule
     */
    DollarEvaluate: CodingArgs;
    /**
     * evaluate-measure: Evaluate Measure
     */
    DollarEvaluateMeasure: CodingArgs;
    /**
     * everything: Fetch Encounter/Patient Record
     */
    DollarEverything: CodingArgs;
    /**
     * expand: Value Set Expansion
     */
    DollarExpand: CodingArgs;
    /**
     * fail: Fail Task
     */
    DollarFail: CodingArgs;
    /**
     * find: Find a functional list
     */
    DollarFind: CodingArgs;
    /**
     * finish: Finish Task
     */
    DollarFinish: CodingArgs;
    /**
     * history: Retrieve the change history for a particular resource or resource type.
     */
    History: CodingArgs;
    /**
     * implements: Test if a server implements a client's required operations
     */
    DollarImplements: CodingArgs;
    /**
     * lookup: Concept Look Up
     */
    DollarLookup: CodingArgs;
    /**
     * match: Find patient matches using MPI based logic
     */
    DollarMatch: CodingArgs;
    /**
     * meta: Access a list of profiles, tags, and security labels
     */
    DollarMeta: CodingArgs;
    /**
     * meta-add: Add profiles, tags, and security labels to a resource
     */
    DollarMetaAdd: CodingArgs;
    /**
     * meta-delete: Delete profiles, tags, and security labels for a resource
     */
    DollarMetaDelete: CodingArgs;
    /**
     * populate: Populate Questionnaire
     */
    DollarPopulate: CodingArgs;
    /**
     * populatehtml: Generate HTML for Questionnaire
     */
    DollarPopulatehtml: CodingArgs;
    /**
     * populatelink: Generate a link to a Questionnaire completion webpage
     */
    DollarPopulatelink: CodingArgs;
    /**
     * process-message: Process Message
     */
    DollarProcessMessage: CodingArgs;
    /**
     * questionnaire: Build Questionnaire
     */
    DollarQuestionnaire: CodingArgs;
    /**
     * read: Read the current state of the resource.
     */
    Read: CodingArgs;
    /**
     * release: Release Task
     */
    DollarRelease: CodingArgs;
    /**
     * reserve: Reserve Task
     */
    DollarReserve: CodingArgs;
    /**
     * resume: Resume Task
     */
    DollarResume: CodingArgs;
    /**
     * search: Search based on some filter criteria.
     */
    Search: CodingArgs;
    /**
     * set-input: Set Task Input
     */
    DollarSetInput: CodingArgs;
    /**
     * set-output: Set Task Output
     */
    DollarSetOutput: CodingArgs;
    /**
     * start: Start Task
     */
    DollarStart: CodingArgs;
    /**
     * stats: Observation Statistics
     */
    DollarStats: CodingArgs;
    /**
     * stop: Stop Task
     */
    DollarStop: CodingArgs;
    /**
     * subset: Fetch a subset of the CapabilityStatement resource
     */
    DollarSubset: CodingArgs;
    /**
     * subsumes: Determine if code A is subsumed by code B
     */
    DollarSubsumes: CodingArgs;
    /**
     * suspend: Suspend Task
     */
    DollarSuspend: CodingArgs;
    /**
     * transaction: Update, create or delete a set of resources as a single transaction.
     */
    Transaction: CodingArgs;
    /**
     * transform: Model Instance Transformation
     */
    DollarTransform: CodingArgs;
    /**
     * translate: Concept Translation
     */
    DollarTranslate: CodingArgs;
    /**
     * update: Update an existing resource by its id.
     */
    Update: CodingArgs;
    /**
     * updateCreate: Update an existing resource by its id (or create it if it is new).
     */
    CreateUsingUpdate: CodingArgs;
    /**
     * validate: Validate a resource
     */
    DollarValidate: CodingArgs;
    /**
     * validate-code: Value Set based Validation
     */
    DollarValidateCode: CodingArgs;
    /**
     * vread: Read the state of a specific version of the resource.
     */
    VersionRead: CodingArgs;
};
/**
 * This value set defines a set of codes that are used to indicate the supported operations of a testing engine or tool.
 */
export declare const TestscriptOperationCodings: TestscriptOperationCodingType;
//# sourceMappingURL=TestscriptOperationCodings.d.ts.map