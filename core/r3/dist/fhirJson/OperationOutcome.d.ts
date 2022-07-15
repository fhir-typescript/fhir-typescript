import * as fhir from '../fhirJson.js';
/**
 * An error, warning or information message that results from a system action.
 */
export interface OperationOutcomeIssue extends fhir.BackboneElement {
    /**
     * This is labeled as "Is Modifier" because applications should not confuse hints and warnings with errors.
     */
    severity: 'error' | 'fatal' | 'information' | 'warning' | null;
    /**
     * Extended properties for primitive element: OperationOutcome.issue.severity
     */
    _severity?: fhir.FhirElement;
    /**
     * Describes the type of the issue. The system that creates an OperationOutcome SHALL choose the most applicable code from the IssueType value set, and may additional provide its own code for the error in the details element.
     */
    code: 'business-rule' | 'code-invalid' | 'conflict' | 'duplicate' | 'exception' | 'expired' | 'extension' | 'forbidden' | 'incomplete' | 'informational' | 'invalid' | 'invariant' | 'lock-error' | 'login' | 'no-store' | 'not-found' | 'not-supported' | 'processing' | 'required' | 'security' | 'structure' | 'suppressed' | 'throttled' | 'timeout' | 'too-costly' | 'too-long' | 'transient' | 'unknown' | 'value' | null;
    /**
     * Extended properties for primitive element: OperationOutcome.issue.code
     */
    _code?: fhir.FhirElement;
    /**
     * A human readable description of the error issue SHOULD be placed in details.text.
     */
    details?: fhir.CodeableConcept | undefined;
    /**
     * Typically this field is used to provide troubleshooting information about the error.
     */
    diagnostics?: string | undefined;
    /**
     * Extended properties for primitive element: OperationOutcome.issue.diagnostics
     */
    _diagnostics?: fhir.FhirElement;
    /**
     * The root of the XPath is the resource or bundle that generated OperationOutcome.  Each XPath SHALL resolve to a single node.  The XPath syntax is used whether the referenced instance is expressed in XML or JSON. Note that expression is being trialed as an alternative to XPath.
     */
    location?: (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: OperationOutcome.issue.location
     */
    _location?: (fhir.FhirElement | null)[];
    /**
     * The root of the FHIRPath is the resource or bundle that generated OperationOutcome.  Each FHIRPath SHALL resolve to a single node.
     */
    expression?: (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: OperationOutcome.issue.expression
     */
    _expression?: (fhir.FhirElement | null)[];
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