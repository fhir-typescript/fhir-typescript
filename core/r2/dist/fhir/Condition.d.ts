import * as fhir from '../fhir.js';
import { ConditionVerStatusCodeType } from '../fhirValueSets/ConditionVerStatusCodes.js';
/**
 * Valid arguments for the ConditionStage type.
 */
export interface ConditionStageArgs extends fhir.BackboneElementArgs {
    /**
     * A simple summary of the stage such as "Stage 3". The determination of the stage is disease-specific.
     */
    summary?: fhir.CodeableConceptArgs | undefined;
    /**
     * Reference to a formal record of the evidence on which the staging assessment is based.
     */
    assessment?: fhir.ReferenceArgs[] | undefined;
}
/**
 * Clinical stage or grade of a condition. May include formal severity assessments.
 */
export declare class ConditionStage extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * A simple summary of the stage such as "Stage 3". The determination of the stage is disease-specific.
     */
    summary?: fhir.CodeableConcept | undefined;
    /**
     * Reference to a formal record of the evidence on which the staging assessment is based.
     */
    assessment: fhir.Reference[];
    /**
     * Default constructor for ConditionStage - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ConditionStageArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ConditionEvidence type.
 */
export interface ConditionEvidenceArgs extends fhir.BackboneElementArgs {
    /**
     * A manifestation or symptom that led to the recording of this condition.
     */
    code?: fhir.CodeableConceptArgs | undefined;
    /**
     * Links to other relevant information, including pathology reports.
     */
    detail?: fhir.ReferenceArgs[] | undefined;
}
/**
 * Supporting Evidence / manifestations that are the basis on which this condition is suspected or confirmed.
 */
export declare class ConditionEvidence extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * A manifestation or symptom that led to the recording of this condition.
     */
    code?: fhir.CodeableConcept | undefined;
    /**
     * Links to other relevant information, including pathology reports.
     */
    detail: fhir.Reference[];
    /**
     * Default constructor for ConditionEvidence - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ConditionEvidenceArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the Condition type.
 */
export interface ConditionArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "Condition" | undefined;
    /**
     * Need to allow connection to a wider workflow.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * Indicates the patient who the condition record is associated with.
     */
    patient: fhir.ReferenceArgs | null;
    /**
     * Encounter during which the condition was first asserted.
     */
    encounter?: fhir.ReferenceArgs | undefined;
    /**
     * Individual who is making the condition statement.
     */
    asserter?: fhir.ReferenceArgs | undefined;
    /**
     * A date, when  the Condition statement was documented.
     */
    dateRecorded?: fhir.FhirDate | string | undefined;
    /**
     * Extended properties for primitive element: Condition.dateRecorded
     */
    _dateRecorded?: fhir.FhirElementArgs;
    /**
     * Identification of the condition, problem or diagnosis.
     */
    code: fhir.CodeableConceptArgs | null;
    /**
     * A category assigned to the condition.
     */
    category?: fhir.CodeableConceptArgs | undefined;
    /**
     * The clinical status of the condition.
     */
    clinicalStatus?: fhir.FhirCode | string | undefined;
    /**
     * Extended properties for primitive element: Condition.clinicalStatus
     */
    _clinicalStatus?: fhir.FhirElementArgs;
    /**
     * The verification status to support the clinical status of the condition.
     */
    verificationStatus: fhir.FhirCode<ConditionVerStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: Condition.verificationStatus
     */
    _verificationStatus?: fhir.FhirElementArgs;
    /**
     * A subjective assessment of the severity of the condition as evaluated by the clinician.
     */
    severity?: fhir.CodeableConceptArgs | undefined;
    /**
     * Estimated or actual date or date-time  the condition began, in the opinion of the clinician.
     */
    onset?: fhir.FhirDateTime | fhir.Quantity | fhir.Period | fhir.Range | fhir.FhirString | undefined;
    /**
     * Estimated or actual date or date-time  the condition began, in the opinion of the clinician.
     */
    onsetDateTime?: fhir.FhirDateTime | string | undefined;
    /**
     * Estimated or actual date or date-time  the condition began, in the opinion of the clinician.
     */
    onsetQuantity?: fhir.QuantityArgs | undefined;
    /**
     * Estimated or actual date or date-time  the condition began, in the opinion of the clinician.
     */
    onsetPeriod?: fhir.PeriodArgs | undefined;
    /**
     * Estimated or actual date or date-time  the condition began, in the opinion of the clinician.
     */
    onsetRange?: fhir.RangeArgs | undefined;
    /**
     * Estimated or actual date or date-time  the condition began, in the opinion of the clinician.
     */
    onsetString?: fhir.FhirString | string | undefined;
    /**
     * The date or estimated date that the condition resolved or went into remission. This is called "abatement" because of the many overloaded connotations associated with "remission" or "resolution" - Conditions are never really resolved, but they can abate.
     */
    abatement?: fhir.FhirDateTime | fhir.Quantity | fhir.FhirBoolean | fhir.Period | fhir.Range | fhir.FhirString | undefined;
    /**
     * The date or estimated date that the condition resolved or went into remission. This is called "abatement" because of the many overloaded connotations associated with "remission" or "resolution" - Conditions are never really resolved, but they can abate.
     */
    abatementDateTime?: fhir.FhirDateTime | string | undefined;
    /**
     * The date or estimated date that the condition resolved or went into remission. This is called "abatement" because of the many overloaded connotations associated with "remission" or "resolution" - Conditions are never really resolved, but they can abate.
     */
    abatementQuantity?: fhir.QuantityArgs | undefined;
    /**
     * The date or estimated date that the condition resolved or went into remission. This is called "abatement" because of the many overloaded connotations associated with "remission" or "resolution" - Conditions are never really resolved, but they can abate.
     */
    abatementBoolean?: fhir.FhirBoolean | boolean | undefined;
    /**
     * The date or estimated date that the condition resolved or went into remission. This is called "abatement" because of the many overloaded connotations associated with "remission" or "resolution" - Conditions are never really resolved, but they can abate.
     */
    abatementPeriod?: fhir.PeriodArgs | undefined;
    /**
     * The date or estimated date that the condition resolved or went into remission. This is called "abatement" because of the many overloaded connotations associated with "remission" or "resolution" - Conditions are never really resolved, but they can abate.
     */
    abatementRange?: fhir.RangeArgs | undefined;
    /**
     * The date or estimated date that the condition resolved or went into remission. This is called "abatement" because of the many overloaded connotations associated with "remission" or "resolution" - Conditions are never really resolved, but they can abate.
     */
    abatementString?: fhir.FhirString | string | undefined;
    /**
     * Clinical stage or grade of a condition. May include formal severity assessments.
     */
    stage?: fhir.ConditionStageArgs | undefined;
    /**
     * Supporting Evidence / manifestations that are the basis on which this condition is suspected or confirmed.
     */
    evidence?: fhir.ConditionEvidenceArgs[] | undefined;
    /**
     * The anatomical location where this condition manifests itself.
     */
    bodySite?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Additional information about the Condition. This is a general notes/comments entry  for description of the Condition, its diagnosis and prognosis.
     */
    notes?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Condition.notes
     */
    _notes?: fhir.FhirElementArgs;
}
/**
 * Use to record detailed information about conditions, problems or diagnoses recognized by a clinician. There are many uses including: recording a diagnosis during an encounter; populating a problem list or a summary statement, such as a discharge summary.
 */
export declare class Condition extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "Condition";
    /**
     * Need to allow connection to a wider workflow.
     */
    identifier: fhir.Identifier[];
    /**
     * Indicates the patient who the condition record is associated with.
     */
    patient: fhir.Reference | null;
    /**
     * Encounter during which the condition was first asserted.
     */
    encounter?: fhir.Reference | undefined;
    /**
     * Individual who is making the condition statement.
     */
    asserter?: fhir.Reference | undefined;
    /**
     * A date, when  the Condition statement was documented.
     */
    dateRecorded?: fhir.FhirDate | undefined;
    /**
     * Identification of the condition, problem or diagnosis.
     */
    code: fhir.CodeableConcept | null;
    /**
     * A category assigned to the condition.
     */
    category?: fhir.CodeableConcept | undefined;
    /**
     * The clinical status of the condition.
     */
    clinicalStatus?: fhir.FhirCode | undefined;
    /**
     * The verification status to support the clinical status of the condition.
     */
    verificationStatus: fhir.FhirCode<ConditionVerStatusCodeType> | null;
    /**
     * A subjective assessment of the severity of the condition as evaluated by the clinician.
     */
    severity?: fhir.CodeableConcept | undefined;
    /**
     * Estimated or actual date or date-time  the condition began, in the opinion of the clinician.
     */
    onset?: (fhir.FhirDateTime | fhir.Quantity | fhir.Period | fhir.Range | fhir.FhirString) | undefined;
    /**
     * Internal flag to properly serialize choice-type element Condition.onset[x]
     */
    protected static readonly _fts_onsetIsChoice: true;
    /**
     * The date or estimated date that the condition resolved or went into remission. This is called "abatement" because of the many overloaded connotations associated with "remission" or "resolution" - Conditions are never really resolved, but they can abate.
     */
    abatement?: (fhir.FhirDateTime | fhir.Quantity | fhir.FhirBoolean | fhir.Period | fhir.Range | fhir.FhirString) | undefined;
    /**
     * Internal flag to properly serialize choice-type element Condition.abatement[x]
     */
    protected static readonly _fts_abatementIsChoice: true;
    /**
     * Clinical stage or grade of a condition. May include formal severity assessments.
     */
    stage?: fhir.ConditionStage | undefined;
    /**
     * Supporting Evidence / manifestations that are the basis on which this condition is suspected or confirmed.
     */
    evidence: fhir.ConditionEvidence[];
    /**
     * The anatomical location where this condition manifests itself.
     */
    bodySite: fhir.CodeableConcept[];
    /**
     * Additional information about the Condition. This is a general notes/comments entry  for description of the Condition, its diagnosis and prognosis.
     */
    notes?: fhir.FhirString | undefined;
    /**
     * Default constructor for Condition - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ConditionArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=Condition.d.ts.map