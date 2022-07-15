/**
 * This value set defines a set of codes that are used to indicate the supported operations of a testing engine or tool.
 */
export declare const TestscriptOperationCodes: {
    /**
     * apply: Realize a definition in a specific context
     */
    readonly DollarApply: "apply";
    /**
     * batch: Update, create or delete a set of resources as independent actions.
     */
    readonly Batch: "batch";
    /**
     * cancel: Cancel Task
     */
    readonly DollarCancel: "cancel";
    /**
     * capabilities: Get a capability statement for the system.
     */
    readonly Capabilities: "capabilities";
    /**
     * closure: Closure Table Maintenance
     */
    readonly DollarClosure: "closure";
    /**
     * compose: Code Composition based on supplied properties
     */
    readonly DollarCompose: "compose";
    /**
     * conforms: Test if a server implements a client's required operations
     */
    readonly DollarConforms: "conforms";
    /**
     * create: Create a new resource with a server assigned id.
     */
    readonly Create: "create";
    /**
     * data-requirements: Aggregates and return the parameters and data requirements as a single module definition library
     */
    readonly DollarDataRequirements: "data-requirements";
    /**
     * delete: Delete a resource.
     */
    readonly Delete: "delete";
    /**
     * deleteCondMultiple: Conditionally delete one or more resources based on search parameters.
     */
    readonly ConditionalDeleteMultiple: "deleteCondMultiple";
    /**
     * deleteCondSingle: Conditionally delete a single resource based on search parameters.
     */
    readonly ConditionalDeleteSingle: "deleteCondSingle";
    /**
     * document: Generate a Document
     */
    readonly DollarDocument: "document";
    /**
     * evaluate: Evaluate DecisionSupportRule / DecisionSupportServiceModule
     */
    readonly DollarEvaluate: "evaluate";
    /**
     * evaluate-measure: Evaluate Measure
     */
    readonly DollarEvaluateMeasure: "evaluate-measure";
    /**
     * everything: Fetch Encounter/Patient Record
     */
    readonly DollarEverything: "everything";
    /**
     * expand: Value Set Expansion
     */
    readonly DollarExpand: "expand";
    /**
     * fail: Fail Task
     */
    readonly DollarFail: "fail";
    /**
     * find: Find a functional list
     */
    readonly DollarFind: "find";
    /**
     * finish: Finish Task
     */
    readonly DollarFinish: "finish";
    /**
     * history: Retrieve the change history for a particular resource or resource type.
     */
    readonly History: "history";
    /**
     * implements: Test if a server implements a client's required operations
     */
    readonly DollarImplements: "implements";
    /**
     * lookup: Concept Look Up
     */
    readonly DollarLookup: "lookup";
    /**
     * match: Find patient matches using MPI based logic
     */
    readonly DollarMatch: "match";
    /**
     * meta: Access a list of profiles, tags, and security labels
     */
    readonly DollarMeta: "meta";
    /**
     * meta-add: Add profiles, tags, and security labels to a resource
     */
    readonly DollarMetaAdd: "meta-add";
    /**
     * meta-delete: Delete profiles, tags, and security labels for a resource
     */
    readonly DollarMetaDelete: "meta-delete";
    /**
     * populate: Populate Questionnaire
     */
    readonly DollarPopulate: "populate";
    /**
     * populatehtml: Generate HTML for Questionnaire
     */
    readonly DollarPopulatehtml: "populatehtml";
    /**
     * populatelink: Generate a link to a Questionnaire completion webpage
     */
    readonly DollarPopulatelink: "populatelink";
    /**
     * process-message: Process Message
     */
    readonly DollarProcessMessage: "process-message";
    /**
     * questionnaire: Build Questionnaire
     */
    readonly DollarQuestionnaire: "questionnaire";
    /**
     * read: Read the current state of the resource.
     */
    readonly Read: "read";
    /**
     * release: Release Task
     */
    readonly DollarRelease: "release";
    /**
     * reserve: Reserve Task
     */
    readonly DollarReserve: "reserve";
    /**
     * resume: Resume Task
     */
    readonly DollarResume: "resume";
    /**
     * search: Search based on some filter criteria.
     */
    readonly Search: "search";
    /**
     * set-input: Set Task Input
     */
    readonly DollarSetInput: "set-input";
    /**
     * set-output: Set Task Output
     */
    readonly DollarSetOutput: "set-output";
    /**
     * start: Start Task
     */
    readonly DollarStart: "start";
    /**
     * stats: Observation Statistics
     */
    readonly DollarStats: "stats";
    /**
     * stop: Stop Task
     */
    readonly DollarStop: "stop";
    /**
     * subset: Fetch a subset of the CapabilityStatement resource
     */
    readonly DollarSubset: "subset";
    /**
     * subsumes: Determine if code A is subsumed by code B
     */
    readonly DollarSubsumes: "subsumes";
    /**
     * suspend: Suspend Task
     */
    readonly DollarSuspend: "suspend";
    /**
     * transaction: Update, create or delete a set of resources as a single transaction.
     */
    readonly Transaction: "transaction";
    /**
     * transform: Model Instance Transformation
     */
    readonly DollarTransform: "transform";
    /**
     * translate: Concept Translation
     */
    readonly DollarTranslate: "translate";
    /**
     * update: Update an existing resource by its id.
     */
    readonly Update: "update";
    /**
     * updateCreate: Update an existing resource by its id (or create it if it is new).
     */
    readonly CreateUsingUpdate: "updateCreate";
    /**
     * validate: Validate a resource
     */
    readonly DollarValidate: "validate";
    /**
     * validate-code: Value Set based Validation
     */
    readonly DollarValidateCode: "validate-code";
    /**
     * vread: Read the state of a specific version of the resource.
     */
    readonly VersionRead: "vread";
};
/**
 * This value set defines a set of codes that are used to indicate the supported operations of a testing engine or tool.
 */
export declare type TestscriptOperationCodeType = typeof TestscriptOperationCodes[keyof typeof TestscriptOperationCodes];
//# sourceMappingURL=TestscriptOperationCodes.d.ts.map