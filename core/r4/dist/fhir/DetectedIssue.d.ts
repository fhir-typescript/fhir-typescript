import * as fhir from '../fhir.js';
import { ObservationStatusCodeType } from '../fhirValueSets/ObservationStatusCodes.js';
import { DetectedissueSeverityCodeType } from '../fhirValueSets/DetectedissueSeverityCodes.js';
/**
 * Valid arguments for the DetectedIssueEvidence type.
 */
export interface DetectedIssueEvidenceArgs extends fhir.BackboneElementArgs {
    /**
     * A manifestation that led to the recording of this detected issue.
     */
    code?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Links to resources that constitute evidence for the detected issue such as a GuidanceResponse or MeasureReport.
     */
    detail?: fhir.ReferenceArgs[] | undefined;
}
/**
 * Supporting evidence or manifestations that provide the basis for identifying the detected issue such as a GuidanceResponse or MeasureReport.
 */
export declare class DetectedIssueEvidence extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * A manifestation that led to the recording of this detected issue.
     */
    code: fhir.CodeableConcept[];
    /**
     * Links to resources that constitute evidence for the detected issue such as a GuidanceResponse or MeasureReport.
     */
    detail: fhir.Reference[];
    /**
     * Default constructor for DetectedIssueEvidence - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<DetectedIssueEvidenceArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
/**
 * Valid arguments for the DetectedIssueMitigation type.
 */
export interface DetectedIssueMitigationArgs extends fhir.BackboneElementArgs {
    /**
     * The "text" component can be used for detail or when no appropriate code exists.
     */
    action: fhir.CodeableConceptArgs | null;
    /**
     * This might not be the same as when the mitigating step was actually taken.
     */
    date?: fhir.FhirDateTime | string | undefined;
    /**
     * Identifies the practitioner who determined the mitigation and takes responsibility for the mitigation step occurring.
     */
    author?: fhir.ReferenceArgs | undefined;
}
/**
 * Indicates an action that has been taken or is committed to reduce or eliminate the likelihood of the risk identified by the detected issue from manifesting.  Can also reflect an observation of known mitigating factors that may reduce/eliminate the need for any action.
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
     * This might not be the same as when the mitigating step was actually taken.
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
     * Preferred-bound Value Set for action (DetectedIssue.mitigation.action)
     */
    static get actionPreferredCodings(): {
        readonly ActAdministrativeDetectedIssueManagementCode: fhir.Coding;
        readonly ActDetectedIssueManagementCode: fhir.Coding;
        readonly AuthorizationIssueManagementCode: fhir.Coding;
        readonly TherapyAppropriate: fhir.Coding;
        readonly ProvidedPatientEducation: fhir.Coding;
        readonly AddedConcurrentTherapy: fhir.Coding;
        readonly TemporarilySuspendedConcurrentTherapy: fhir.Coding;
        readonly StoppedConcurrentTherapy: fhir.Coding;
        readonly SupplyAppropriate: fhir.Coding;
        readonly Replacement: fhir.Coding;
        readonly VacationSupply: fhir.Coding;
        readonly WeekendSupply: fhir.Coding;
        readonly LeaveOfAbsence: fhir.Coding;
        /**
         * This might not be the same as when the mitigating step was actually taken.
         */
        readonly ConsultedSupplier: fhir.Coding;
        readonly AssessedPatient: fhir.Coding;
        readonly AdditionalQuantityOnSeparateDispense: fhir.Coding;
        readonly AuthorizationConfirmed: fhir.Coding;
        readonly AppropriateIndicationOrDiagnosis: fhir.Coding;
        readonly PriorTherapyDocumented: fhir.Coding;
        readonly PatientExplanation: fhir.Coding;
        readonly ConsultedOtherSource: fhir.Coding;
        readonly ConsultedPrescriber: fhir.Coding;
        readonly PrescriberDeclinedChange: fhir.Coding;
        readonly InteractingTherapyNoLongerActivePlanned: fhir.Coding;
        readonly OtherActionTaken: fhir.Coding;
        readonly InstitutedOngoingMonitoringProgram: fhir.Coding;
        readonly EmergencyAuthorizationOverride: fhir.Coding;
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
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
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains the codes cancelled and entered-in-error that mark the issue as not currently valid.
     */
    status: fhir.FhirCode<ObservationStatusCodeType> | string | undefined;
    /**
     * Identifies the general type of issue identified.
     */
    code?: fhir.CodeableConceptArgs | undefined;
    /**
     * Indicates the degree of importance associated with the identified issue based on the potential impact on the patient.
     */
    severity?: fhir.FhirCode<DetectedissueSeverityCodeType> | string | undefined;
    /**
     * Indicates the patient whose record the detected issue is associated with.
     */
    patient?: fhir.ReferenceArgs | undefined;
    /**
     * The date or period when the detected issue was initially identified.
     */
    identified?: fhir.FhirDateTime | fhir.Period | undefined;
    /**
     * The date or period when the detected issue was initially identified.
     */
    identifiedDateTime?: fhir.FhirDateTime | string | undefined;
    /**
     * The date or period when the detected issue was initially identified.
     */
    identifiedPeriod?: fhir.PeriodArgs | undefined;
    /**
     * Individual or device responsible for the issue being raised.  For example, a decision support application or a pharmacist conducting a medication review.
     */
    author?: fhir.ReferenceArgs | undefined;
    /**
     * There's an implicit constraint on the number of implicated resources based on DetectedIssue.type; e.g. For drug-drug, there would be more than one.  For timing, there would typically only be one.
     */
    implicated?: fhir.ReferenceArgs[] | undefined;
    /**
     * Supporting evidence or manifestations that provide the basis for identifying the detected issue such as a GuidanceResponse or MeasureReport.
     */
    evidence?: fhir.DetectedIssueEvidenceArgs[] | undefined;
    /**
     * Should focus on information not covered elsewhere as discrete data - no need to duplicate the narrative.
     */
    detail?: fhir.FhirString | string | undefined;
    /**
     * The literature, knowledge-base or similar reference that describes the propensity for the detected issue identified.
     */
    reference?: fhir.FhirUri | string | undefined;
    /**
     * Indicates an action that has been taken or is committed to reduce or eliminate the likelihood of the risk identified by the detected issue from manifesting.  Can also reflect an observation of known mitigating factors that may reduce/eliminate the need for any action.
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
    identifier: fhir.Identifier[];
    /**
     * This element is labeled as a modifier because the status contains the codes cancelled and entered-in-error that mark the issue as not currently valid.
     */
    status: fhir.FhirCode<ObservationStatusCodeType> | null;
    /**
     * Identifies the general type of issue identified.
     */
    code?: fhir.CodeableConcept | undefined;
    /**
     * Indicates the degree of importance associated with the identified issue based on the potential impact on the patient.
     */
    severity?: fhir.FhirCode<DetectedissueSeverityCodeType> | undefined;
    /**
     * Indicates the patient whose record the detected issue is associated with.
     */
    patient?: fhir.Reference | undefined;
    /**
     * The date or period when the detected issue was initially identified.
     */
    identified?: (fhir.FhirDateTime | fhir.Period) | undefined;
    /**
     * Internal flag to properly serialize choice-type element DetectedIssue.identified[x]
     */
    protected static readonly _fts_identifiedIsChoice: true;
    /**
     * Individual or device responsible for the issue being raised.  For example, a decision support application or a pharmacist conducting a medication review.
     */
    author?: fhir.Reference | undefined;
    /**
     * There's an implicit constraint on the number of implicated resources based on DetectedIssue.type; e.g. For drug-drug, there would be more than one.  For timing, there would typically only be one.
     */
    implicated: fhir.Reference[];
    /**
     * Supporting evidence or manifestations that provide the basis for identifying the detected issue such as a GuidanceResponse or MeasureReport.
     */
    evidence: fhir.DetectedIssueEvidence[];
    /**
     * Should focus on information not covered elsewhere as discrete data - no need to duplicate the narrative.
     */
    detail?: fhir.FhirString | undefined;
    /**
     * The literature, knowledge-base or similar reference that describes the propensity for the detected issue identified.
     */
    reference?: fhir.FhirUri | undefined;
    /**
     * Indicates an action that has been taken or is committed to reduce or eliminate the likelihood of the risk identified by the detected issue from manifesting.  Can also reflect an observation of known mitigating factors that may reduce/eliminate the need for any action.
     */
    mitigation: fhir.DetectedIssueMitigation[];
    /**
     * Default constructor for DetectedIssue - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<DetectedIssueArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for status (DetectedIssue.status)
     */
    static get statusRequiredCodes(): {
        readonly Amended: "amended";
        readonly Cancelled: "cancelled";
        readonly Corrected: "corrected";
        readonly EnteredInError: "entered-in-error";
        readonly Final: "final";
        readonly Preliminary: "preliminary";
        readonly Registered: "registered";
        readonly Unknown: "unknown";
    };
    /**
     * Preferred-bound Value Set for code (DetectedIssue.code)
     */
    static get codePreferredCodings(): {
        readonly ActSuppliedItemDetectedIssueCode: fhir.Coding;
        readonly AdministrationDetectedIssueCode: fhir.Coding;
        readonly AppropriatenessDetectedIssueCode: fhir.Coding;
        readonly InteractionDetectedIssueCode: fhir.Coding;
        readonly SupplyDetectedIssueCode: fhir.Coding;
        readonly TimingDetectedIssueCode: fhir.Coding;
        readonly AlreadyPerformed: fhir.Coding;
        readonly EndTooLateAlert: fhir.Coding;
        readonly StartTooLateAlert: fhir.Coding;
        readonly DrugActionDetectedIssue: fhir.Coding;
        readonly DrugInteractionAlert: fhir.Coding;
        readonly EndTooLateAlertENDLATE: fhir.Coding;
        readonly FoodInteractionAlert: fhir.Coding;
        readonly FulfillmentAlert: fhir.Coding;
        readonly HeldSuspendedAlert: fhir.Coding;
        readonly RecordRecordedAsHistorical: fhir.Coding;
        readonly OutsideRequestedTime: fhir.Coding;
        readonly TooSoonWithinFrequencyBasedOnTheUsage: fhir.Coding;
        readonly NaturalHealthProductAlert: fhir.Coding;
        readonly NonPrescriptionInteractionAlert: fhir.Coding;
        readonly NoLongerActionable: fhir.Coding;
        readonly NotEquivalentAlert: fhir.Coding;
        readonly NotGenericallyEquivalentAlert: fhir.Coding;
        readonly NotTherapeuticallyEquivalentAlert: fhir.Coding;
        readonly ViolatesStatedPreferences: fhir.Coding;
        readonly ViolatesStatedPreferencesAlternateAvailable: fhir.Coding;
        readonly PreviouslyIneffective: fhir.Coding;
        readonly StartTooLateAlertSTRTLATE: fhir.Coding;
        readonly TimingDetectedIssue: fhir.Coding;
        readonly EventTimingIncorrectAlert: fhir.Coding;
        readonly RefillTooLateAlert: fhir.Coding;
        readonly RefillTooSoonAlert: fhir.Coding;
        readonly TherapeuticProductAlert: fhir.Coding;
    };
    /**
     * Required-bound Value Set for severity (DetectedIssue.severity)
     */
    static get severityRequiredCodes(): {
        readonly High: "high";
        readonly Low: "low";
        readonly Moderate: "moderate";
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
//# sourceMappingURL=DetectedIssue.d.ts.map