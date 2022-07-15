import * as fhir from '../fhir.js';
import { IssueSeverityCodeType } from '../fhirValueSets/IssueSeverityCodes.js';
/**
 * Valid arguments for the OperationOutcomeIssue type.
 */
export interface OperationOutcomeIssueArgs extends fhir.BackboneElementArgs {
    /**
     * Indicates how relevant the issue is to the overall success of the action.
     */
    severity: fhir.FhirCode<IssueSeverityCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: OperationOutcome.issue.severity
     */
    _severity?: fhir.FhirElementArgs;
    /**
     * Expresses the issue in a human and computer-friendly way, allowing the requesting system to behave differently based on the type of issue.
     */
    code: fhir.FhirCode | string | undefined;
    /**
     * Extended properties for primitive element: OperationOutcome.issue.code
     */
    _code?: fhir.FhirElementArgs;
    /**
     * Additional details about the error. This may be a text description of the error, or a system code that identifies the error.
     */
    details?: fhir.CodeableConceptArgs | undefined;
    /**
     * Additional diagnostic information about the issue.  Typically, this may be a description of how a value is erroneous, or a stack dump to help trace the issue.
     */
    diagnostics?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: OperationOutcome.issue.diagnostics
     */
    _diagnostics?: fhir.FhirElementArgs;
    /**
     * Allows systems to highlight or otherwise guide users to elements implicated in issues to allow them to be fixed more easily.
     */
    location?: fhir.FhirString[] | (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: OperationOutcome.issue.location
     */
    _location?: (fhir.FhirElementArgs | null)[];
}
/**
 * An error, warning or information message that results from a system action.
 */
export declare class OperationOutcomeIssue extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Indicates how relevant the issue is to the overall success of the action.
     */
    severity: fhir.FhirCode<IssueSeverityCodeType> | null;
    /**
     * Expresses the issue in a human and computer-friendly way, allowing the requesting system to behave differently based on the type of issue.
     */
    code: fhir.FhirCode | null;
    /**
     * Additional details about the error. This may be a text description of the error, or a system code that identifies the error.
     */
    details?: fhir.CodeableConcept | undefined;
    /**
     * Additional diagnostic information about the issue.  Typically, this may be a description of how a value is erroneous, or a stack dump to help trace the issue.
     */
    diagnostics?: fhir.FhirString | undefined;
    /**
     * Allows systems to highlight or otherwise guide users to elements implicated in issues to allow them to be fixed more easily.
     */
    location: fhir.FhirString[];
    /**
     * Default constructor for OperationOutcomeIssue - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<OperationOutcomeIssueArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
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
     * An error, warning or information message that results from a system action.
     */
    issue: fhir.OperationOutcomeIssueArgs[] | null;
}
/**
 * A collection of error, warning or information messages that result from a system action.
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
     * An error, warning or information message that results from a system action.
     */
    issue: fhir.OperationOutcomeIssue[];
    /**
     * Default constructor for OperationOutcome - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<OperationOutcomeArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=OperationOutcome.d.ts.map