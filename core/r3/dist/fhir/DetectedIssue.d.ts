import * as fhir from '../fhir.js';
import { ObservationStatusCodeType } from '../fhirValueSets/ObservationStatusCodes.js';
import { DetectedissueSeverityCodeType } from '../fhirValueSets/DetectedissueSeverityCodes.js';
/**
 * Valid arguments for the DetectedIssueMitigation type.
 */
export interface DetectedIssueMitigationArgs extends fhir.BackboneElementArgs {
    /**
     * The "text" component can be used for detail or when no appropriate code exists.
     */
    action: fhir.CodeableConceptArgs | null;
    /**
     * This may not be the same as when the mitigating step was actually taken.
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
     * The "text" component can be used for detail or when no appropriate code exists.
     */
    action: fhir.CodeableConcept | null;
    /**
     * This may not be the same as when the mitigating step was actually taken.
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
     * Business identifier associated with the detected issue record.
     */
    identifier?: fhir.IdentifierArgs | undefined;
    /**
     * This element is labeled as a modifier because the status contains the codes cancelled and entered-in-error that mark the issue as not currently valid.
     */
    status: fhir.FhirCode<ObservationStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: DetectedIssue.status
     */
    _status?: fhir.FhirElementArgs;
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
     * Indicates the patient whose record the detected issue is associated with.
     */
    patient?: fhir.ReferenceArgs | undefined;
    /**
     * The date or date-time when the detected issue was initially identified.
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
     * There's an implicit constraint on the number of implicated resources based on DetectedIssue.type; e.g. For drug-drug, there would be more than one.  For timing, there would typically only be one.
     */
    implicated?: fhir.ReferenceArgs[] | undefined;
    /**
     * Should focus on information not covered elsewhere as discrete data - no need to duplicate the narrative.
     */
    detail?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: DetectedIssue.detail
     */
    _detail?: fhir.FhirElementArgs;
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
     * Business identifier associated with the detected issue record.
     */
    identifier?: fhir.Identifier | undefined;
    /**
     * This element is labeled as a modifier because the status contains the codes cancelled and entered-in-error that mark the issue as not currently valid.
     */
    status: fhir.FhirCode<ObservationStatusCodeType> | null;
    /**
     * Identifies the general type of issue identified.
     */
    category?: fhir.CodeableConcept | undefined;
    /**
     * Indicates the degree of importance associated with the identified issue based on the potential impact on the patient.
     */
    severity?: fhir.FhirCode<DetectedissueSeverityCodeType> | undefined;
    /**
     * Indicates the patient whose record the detected issue is associated with.
     */
    patient?: fhir.Reference | undefined;
    /**
     * The date or date-time when the detected issue was initially identified.
     */
    date?: fhir.FhirDateTime | undefined;
    /**
     * Individual or device responsible for the issue being raised.  For example, a decision support application or a pharmacist conducting a medication review.
     */
    author?: fhir.Reference | undefined;
    /**
     * There's an implicit constraint on the number of implicated resources based on DetectedIssue.type; e.g. For drug-drug, there would be more than one.  For timing, there would typically only be one.
     */
    implicated: fhir.Reference[];
    /**
     * Should focus on information not covered elsewhere as discrete data - no need to duplicate the narrative.
     */
    detail?: fhir.FhirString | undefined;
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