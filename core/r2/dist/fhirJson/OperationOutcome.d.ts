import * as fhir from '../fhirJson.js';
/**
 * An error, warning or information message that results from a system action.
 */
export interface OperationOutcomeIssue extends fhir.BackboneElement {
    /**
     * Indicates how relevant the issue is to the overall success of the action.
     */
    severity: 'error' | 'fatal' | 'information' | 'warning' | null;
    /**
     * Extended properties for primitive element: OperationOutcome.issue.severity
     */
    _severity?: fhir.FhirElement;
    /**
     * Expresses the issue in a human and computer-friendly way, allowing the requesting system to behave differently based on the type of issue.
     */
    code: 'business-rule' | 'code-invalid' | 'conflict' | 'duplicate' | 'exception' | 'expired' | 'extension' | 'forbidden' | 'incomplete' | 'informational' | 'invalid' | 'invariant' | 'lock-error' | 'login' | 'no-store' | 'not-found' | 'not-supported' | 'processing' | 'required' | 'security' | 'structure' | 'suppressed' | 'throttled' | 'timeout' | 'too-costly' | 'too-long' | 'transient' | 'unknown' | 'value' | null;
    /**
     * Extended properties for primitive element: OperationOutcome.issue.code
     */
    _code?: fhir.FhirElement;
    /**
     * Additional details about the error. This may be a text description of the error, or a system code that identifies the error.
     */
    details?: fhir.CodeableConcept | undefined;
    /**
     * Additional diagnostic information about the issue.  Typically, this may be a description of how a value is erroneous, or a stack dump to help trace the issue.
     */
    diagnostics?: string | undefined;
    /**
     * Extended properties for primitive element: OperationOutcome.issue.diagnostics
     */
    _diagnostics?: fhir.FhirElement;
    /**
     * Allows systems to highlight or otherwise guide users to elements implicated in issues to allow them to be fixed more easily.
     */
    location?: (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: OperationOutcome.issue.location
     */
    _location?: (fhir.FhirElement | null)[];
}
/**
 * A collection of error, warning or information messages that result from a system action.
 */
export interface OperationOutcome extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "OperationOutcome" | null;
    /**
     * An error, warning or information message that results from a system action.
     */
    issue: (fhir.OperationOutcomeIssue | null)[] | null;
}
//# sourceMappingURL=OperationOutcome.d.ts.map