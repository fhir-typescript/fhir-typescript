import * as fhir from '../fhir.js';
import { IssueSeverityCodeType } from '../fhirValueSets/IssueSeverityCodes.js';
/**
 * Valid arguments for the OperationOutcomeIssue type.
 */
export interface OperationOutcomeIssueArgs extends fhir.BackboneElementArgs {
    /**
     * This is labeled as "Is Modifier" because applications should not confuse hints and warnings with errors.
     */
    severity: fhir.FhirCode<IssueSeverityCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: OperationOutcome.issue.severity
     */
    _severity?: fhir.FhirElementArgs;
    /**
     * Describes the type of the issue. The system that creates an OperationOutcome SHALL choose the most applicable code from the IssueType value set, and may additional provide its own code for the error in the details element.
     */
    code: fhir.FhirCode | string | undefined;
    /**
     * Extended properties for primitive element: OperationOutcome.issue.code
     */
    _code?: fhir.FhirElementArgs;
    /**
     * A human readable description of the error issue SHOULD be placed in details.text.
     */
    details?: fhir.CodeableConceptArgs | undefined;
    /**
     * This may be a description of how a value is erroneous, a stack dump to help trace the issue or other troubleshooting information.
     */
    diagnostics?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: OperationOutcome.issue.diagnostics
     */
    _diagnostics?: fhir.FhirElementArgs;
    /**
     * The root of the XPath is the resource or bundle that generated OperationOutcome.  Each XPath SHALL resolve to a single node.  This element is deprecated, and is being replaced by expression.
     */
    location?: fhir.FhirString[] | (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: OperationOutcome.issue.location
     */
    _location?: (fhir.FhirElementArgs | null)[];
    /**
     * The root of the FHIRPath is the resource or bundle that generated OperationOutcome.  Each FHIRPath SHALL resolve to a single node.
     */
    expression?: fhir.FhirString[] | (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: OperationOutcome.issue.expression
     */
    _expression?: (fhir.FhirElementArgs | null)[];
}
/**
 * An error, warning, or information message that results from a system action.
 */
export declare class OperationOutcomeIssue extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * This is labeled as "Is Modifier" because applications should not confuse hints and warnings with errors.
     */
    severity: fhir.FhirCode<IssueSeverityCodeType> | null;
    /**
     * Describes the type of the issue. The system that creates an OperationOutcome SHALL choose the most applicable code from the IssueType value set, and may additional provide its own code for the error in the details element.
     */
    code: fhir.FhirCode | null;
    /**
     * A human readable description of the error issue SHOULD be placed in details.text.
     */
    details?: fhir.CodeableConcept | undefined;
    /**
     * This may be a description of how a value is erroneous, a stack dump to help trace the issue or other troubleshooting information.
     */
    diagnostics?: fhir.FhirString | undefined;
    /**
     * The root of the XPath is the resource or bundle that generated OperationOutcome.  Each XPath SHALL resolve to a single node.  This element is deprecated, and is being replaced by expression.
     */
    location: fhir.FhirString[];
    /**
     * The root of the FHIRPath is the resource or bundle that generated OperationOutcome.  Each FHIRPath SHALL resolve to a single node.
     */
    expression: fhir.FhirString[];
    /**
     * Default constructor for OperationOutcomeIssue - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<OperationOutcomeIssueArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for severity (OperationOutcome.issue.severity)
     */
    static get severityRequiredCodes(): {
        readonly Error: "error";
        readonly Fatal: "fatal";
        readonly Information: "information";
        readonly Warning: "warning";
    };
    /**
     * Required-bound Value Set for code (OperationOutcome.issue.code)
     */
    static get codeRequiredCodes(): {
        readonly BusinessRuleViolation: "business-rule";
        readonly InvalidCode: "code-invalid";
        readonly EditVersionConflict: "conflict";
        readonly Deleted: "deleted";
        readonly Duplicate: "duplicate";
        readonly Exception: "exception";
        readonly SessionExpired: "expired";
        /**
         * Describes the type of the issue. The system that creates an OperationOutcome SHALL choose the most applicable code from the IssueType value set, and may additional provide its own code for the error in the details element.
         */
        readonly UnacceptableExtension: "extension";
        readonly Forbidden: "forbidden";
        readonly IncompleteResults: "incomplete";
        readonly InformationalNote: "informational";
        readonly InvalidContent: "invalid";
        readonly ValidationRuleFailed: "invariant";
        readonly LockError: "lock-error";
        readonly LoginRequired: "login";
        readonly MultipleMatches: "multiple-matches";
        readonly NoStoreAvailable: "no-store";
        readonly NotFound: "not-found";
        readonly ContentNotSupported: "not-supported";
        readonly ProcessingFailure: "processing";
        readonly RequiredElementMissing: "required";
        readonly SecurityProblem: "security";
        readonly StructuralIssue: "structure";
        readonly InformationSuppressed: "suppressed";
        readonly Throttled: "throttled";
        readonly Timeout: "timeout";
        readonly OperationTooCostly: "too-costly";
        readonly ContentTooLong: "too-long";
        readonly TransientIssue: "transient";
        readonly UnknownUser: "unknown";
        readonly ElementValueInvalid: "value";
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(expression?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the OperationOutcome type.
 */
export interface OperationOutcomeArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "OperationOutcome" | undefined;
    /**
     * An error, warning, or information message that results from a system action.
     */
    issue: fhir.OperationOutcomeIssueArgs[] | null;
}
/**
 * A collection of error, warning, or information messages that result from a system action.
 */
export declare class OperationOutcome extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "OperationOutcome";
    /**
     * An error, warning, or information message that results from a system action.
     */
    issue: fhir.OperationOutcomeIssue[];
    /**
     * Default constructor for OperationOutcome - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<OperationOutcomeArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(expression?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=OperationOutcome.d.ts.map