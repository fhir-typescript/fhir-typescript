import * as fhir from '../fhir.js';
import { DetectedissueSeverityCodeType } from '../fhirValueSets/DetectedissueSeverityCodes.js';
/**
 * Valid arguments for the DetectedIssueMitigation type.
 */
export interface DetectedIssueMitigationArgs extends fhir.BackboneElementArgs {
    /**
     * Describes the action that was taken or the observation that was made that reduces/eliminates the risk associated with the identified issue.
     */
    action: fhir.CodeableConceptArgs | null;
    /**
     * Indicates when the mitigating action was documented.
     */
    date?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: DetectedIssue.mitigation.date
     */
    _date?: fhir.FhirElementArgs;
    /**
     * Identifies the practitioner who determined the mitigation and takes responsibility for the mitigation step occurring.
     */
    author?: fhir.ReferenceArgs | undefined;
}
/**
 * Indicates an action that has been taken or is committed to to reduce or eliminate the likelihood of the risk identified by the detected issue from manifesting.  Can also reflect an observation of known mitigating factors that may reduce/eliminate the need for any action.
 */
export declare class DetectedIssueMitigation extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Describes the action that was taken or the observation that was made that reduces/eliminates the risk associated with the identified issue.
     */
    action: fhir.CodeableConcept | null;
    /**
     * Indicates when the mitigating action was documented.
     */
    date?: fhir.FhirDateTime | undefined;
    /**
     * Identifies the practitioner who determined the mitigation and takes responsibility for the mitigation step occurring.
     */
    author?: fhir.Reference | undefined;
    /**
     * Default constructor for DetectedIssueMitigation - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<DetectedIssueMitigationArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the DetectedIssue type.
 */
export interface DetectedIssueArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "DetectedIssue" | undefined;
    /**
     * While the subject could be inferred by tracing the subject of the implicated resources, it's useful to have a direct link for query purposes.
     */
    patient?: fhir.ReferenceArgs | undefined;
    /**
     * Identifies the general type of issue identified.
     */
    category?: fhir.CodeableConceptArgs | undefined;
    /**
     * Indicates the degree of importance associated with the identified issue based on the potential impact on the patient.
     */
    severity?: fhir.FhirCode<DetectedissueSeverityCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: DetectedIssue.severity
     */
    _severity?: fhir.FhirElementArgs;
    /**
     * Indicates the resource representing the current activity or proposed activity that is potentially problematic.
     */
    implicated?: fhir.ReferenceArgs[] | undefined;
    /**
     * A textual explanation of the detected issue.
     */
    detail?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: DetectedIssue.detail
     */
    _detail?: fhir.FhirElementArgs;
    /**
     * No-one can be responsible for mitigation prior to the issue being identified.
     */
    date?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: DetectedIssue.date
     */
    _date?: fhir.FhirElementArgs;
    /**
     * Individual or device responsible for the issue being raised.  For example, a decision support application or a pharmacist conducting a medication review.
     */
    author?: fhir.ReferenceArgs | undefined;
    /**
     * Allows linking instances of the same detected issue found on different servers.
     */
    identifier?: fhir.IdentifierArgs | undefined;
    /**
     * The literature, knowledge-base or similar reference that describes the propensity for the detected issue identified.
     */
    reference?: fhir.FhirUri | string | undefined;
    /**
     * Extended properties for primitive element: DetectedIssue.reference
     */
    _reference?: fhir.FhirElementArgs;
    /**
     * Indicates an action that has been taken or is committed to to reduce or eliminate the likelihood of the risk identified by the detected issue from manifesting.  Can also reflect an observation of known mitigating factors that may reduce/eliminate the need for any action.
     */
    mitigation?: fhir.DetectedIssueMitigationArgs[] | undefined;
}
/**
 * Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc.
 */
export declare class DetectedIssue extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "DetectedIssue";
    /**
     * While the subject could be inferred by tracing the subject of the implicated resources, it's useful to have a direct link for query purposes.
     */
    patient?: fhir.Reference | undefined;
    /**
     * Identifies the general type of issue identified.
     */
    category?: fhir.CodeableConcept | undefined;
    /**
     * Indicates the degree of importance associated with the identified issue based on the potential impact on the patient.
     */
    severity?: fhir.FhirCode<DetectedissueSeverityCodeType> | undefined;
    /**
     * Indicates the resource representing the current activity or proposed activity that is potentially problematic.
     */
    implicated: fhir.Reference[];
    /**
     * A textual explanation of the detected issue.
     */
    detail?: fhir.FhirString | undefined;
    /**
     * No-one can be responsible for mitigation prior to the issue being identified.
     */
    date?: fhir.FhirDateTime | undefined;
    /**
     * Individual or device responsible for the issue being raised.  For example, a decision support application or a pharmacist conducting a medication review.
     */
    author?: fhir.Reference | undefined;
    /**
     * Allows linking instances of the same detected issue found on different servers.
     */
    identifier?: fhir.Identifier | undefined;
    /**
     * The literature, knowledge-base or similar reference that describes the propensity for the detected issue identified.
     */
    reference?: fhir.FhirUri | undefined;
    /**
     * Indicates an action that has been taken or is committed to to reduce or eliminate the likelihood of the risk identified by the detected issue from manifesting.  Can also reflect an observation of known mitigating factors that may reduce/eliminate the need for any action.
     */
    mitigation: fhir.DetectedIssueMitigation[];
    /**
     * Default constructor for DetectedIssue - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<DetectedIssueArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=DetectedIssue.d.ts.map