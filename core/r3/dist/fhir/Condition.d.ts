import * as fhir from '../fhir.js';
import { ConditionClinicalCodeType } from '../fhirValueSets/ConditionClinicalCodes.js';
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
    code?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Links to other relevant information, including pathology reports.
     */
    detail?: fhir.ReferenceArgs[] | undefined;
}
/**
 * The evidence may be a simple list of coded symptoms/manifestations, or references to observations or formal assessments, or both.
 */
export declare class ConditionEvidence extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * A manifestation or symptom that led to the recording of this condition.
     */
    code: fhir.CodeableConcept[];
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
     * This records identifiers associated with this condition that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate (e.g. in CDA documents, or in written / printed documentation).
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the condition as not currently valid or of concern.
     */
    clinicalStatus?: fhir.FhirCode<ConditionClinicalCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: Condition.clinicalStatus
     */
    _clinicalStatus?: fhir.FhirElementArgs;
    /**
     * verificationStatus is not required.  For example, when a patient has abdominal pain in the ED, there is not likely going to be a verification status.
     * This element is labeled as a modifier because the status contains the code refuted and entered-in-error that mark the Condition as not currently valid.
     */
    verificationStatus?: fhir.FhirCode<ConditionVerStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: Condition.verificationStatus
     */
    _verificationStatus?: fhir.FhirElementArgs;
    /**
     * The categorization is often highly contextual and may appear poorly differentiated or not very useful in other contexts.
     */
    category?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Coding of the severity with a terminology is preferred, where possible.
     */
    severity?: fhir.CodeableConceptArgs | undefined;
    /**
     * Identification of the condition, problem or diagnosis.
     */
    code?: fhir.CodeableConceptArgs | undefined;
    /**
     * Only used if not implicit in code found in Condition.code. If the use case requires attributes from the BodySite resource (e.g. to identify and track separately) then use the standard extension [body-site-instance](extension-body-site-instance.html).  May be a summary code, or a reference to a very precise definition of the location, or both.
     */
    bodySite?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Indicates the patient or group who the condition record is associated with.
     */
    subject: fhir.ReferenceArgs | null;
    /**
     * This record indicates the encounter this particular record is associated with.  In the case of a "new" diagnosis reflecting ongoing/revised information about the condition, this might be distinct from the first encounter in which the underlying condition was first "known".
     */
    context?: fhir.ReferenceArgs | undefined;
    /**
     * Age is generally used when the patient reports an age at which the Condition began to occur.
     */
    onset?: fhir.FhirDateTime | fhir.Age | fhir.Period | fhir.Range | fhir.FhirString | undefined;
    /**
     * Age is generally used when the patient reports an age at which the Condition began to occur.
     */
    onsetDateTime?: fhir.FhirDateTime | string | undefined;
    /**
     * Age is generally used when the patient reports an age at which the Condition began to occur.
     */
    onsetAge?: fhir.AgeArgs | undefined;
    /**
     * Age is generally used when the patient reports an age at which the Condition began to occur.
     */
    onsetPeriod?: fhir.PeriodArgs | undefined;
    /**
     * Age is generally used when the patient reports an age at which the Condition began to occur.
     */
    onsetRange?: fhir.RangeArgs | undefined;
    /**
     * Age is generally used when the patient reports an age at which the Condition began to occur.
     */
    onsetString?: fhir.FhirString | string | undefined;
    /**
     * There is no explicit distinction between resolution and remission because in many cases the distinction is not clear. Age is generally used when the patient reports an age at which the Condition abated.  If there is no abatement element, it is unknown whether the condition has resolved or entered remission; applications and users should generally assume that the condition is still valid.  When abatementString exists, it implies the condition is abated.
     */
    abatement?: fhir.FhirDateTime | fhir.Age | fhir.FhirBoolean | fhir.Period | fhir.Range | fhir.FhirString | undefined;
    /**
     * There is no explicit distinction between resolution and remission because in many cases the distinction is not clear. Age is generally used when the patient reports an age at which the Condition abated.  If there is no abatement element, it is unknown whether the condition has resolved or entered remission; applications and users should generally assume that the condition is still valid.  When abatementString exists, it implies the condition is abated.
     */
    abatementDateTime?: fhir.FhirDateTime | string | undefined;
    /**
     * There is no explicit distinction between resolution and remission because in many cases the distinction is not clear. Age is generally used when the patient reports an age at which the Condition abated.  If there is no abatement element, it is unknown whether the condition has resolved or entered remission; applications and users should generally assume that the condition is still valid.  When abatementString exists, it implies the condition is abated.
     */
    abatementAge?: fhir.AgeArgs | undefined;
    /**
     * There is no explicit distinction between resolution and remission because in many cases the distinction is not clear. Age is generally used when the patient reports an age at which the Condition abated.  If there is no abatement element, it is unknown whether the condition has resolved or entered remission; applications and users should generally assume that the condition is still valid.  When abatementString exists, it implies the condition is abated.
     */
    abatementBoolean?: fhir.FhirBoolean | boolean | undefined;
    /**
     * There is no explicit distinction between resolution and remission because in many cases the distinction is not clear. Age is generally used when the patient reports an age at which the Condition abated.  If there is no abatement element, it is unknown whether the condition has resolved or entered remission; applications and users should generally assume that the condition is still valid.  When abatementString exists, it implies the condition is abated.
     */
    abatementPeriod?: fhir.PeriodArgs | undefined;
    /**
     * There is no explicit distinction between resolution and remission because in many cases the distinction is not clear. Age is generally used when the patient reports an age at which the Condition abated.  If there is no abatement element, it is unknown whether the condition has resolved or entered remission; applications and users should generally assume that the condition is still valid.  When abatementString exists, it implies the condition is abated.
     */
    abatementRange?: fhir.RangeArgs | undefined;
    /**
     * There is no explicit distinction between resolution and remission because in many cases the distinction is not clear. Age is generally used when the patient reports an age at which the Condition abated.  If there is no abatement element, it is unknown whether the condition has resolved or entered remission; applications and users should generally assume that the condition is still valid.  When abatementString exists, it implies the condition is abated.
     */
    abatementString?: fhir.FhirString | string | undefined;
    /**
     * The assertedDate represents the date when this particular Condition record was created in the EHR, not the date of the most recent update in terms of when severity, abatement, etc. were specified.  The date of the last record modification can be retrieved from the resource metadata.
     */
    assertedDate?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: Condition.assertedDate
     */
    _assertedDate?: fhir.FhirElementArgs;
    /**
     * Individual who is making the condition statement.
     */
    asserter?: fhir.ReferenceArgs | undefined;
    /**
     * Clinical stage or grade of a condition. May include formal severity assessments.
     */
    stage?: fhir.ConditionStageArgs | undefined;
    /**
     * The evidence may be a simple list of coded symptoms/manifestations, or references to observations or formal assessments, or both.
     */
    evidence?: fhir.ConditionEvidenceArgs[] | undefined;
    /**
     * Additional information about the Condition. This is a general notes/comments entry  for description of the Condition, its diagnosis and prognosis.
     */
    note?: fhir.AnnotationArgs[] | undefined;
}
/**
 * A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern.
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
     * This records identifiers associated with this condition that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate (e.g. in CDA documents, or in written / printed documentation).
     */
    identifier: fhir.Identifier[];
    /**
     * This element is labeled as a modifier because the status contains codes that mark the condition as not currently valid or of concern.
     */
    clinicalStatus?: fhir.FhirCode<ConditionClinicalCodeType> | undefined;
    /**
     * verificationStatus is not required.  For example, when a patient has abdominal pain in the ED, there is not likely going to be a verification status.
     * This element is labeled as a modifier because the status contains the code refuted and entered-in-error that mark the Condition as not currently valid.
     */
    verificationStatus?: fhir.FhirCode<ConditionVerStatusCodeType> | undefined;
    /**
     * The categorization is often highly contextual and may appear poorly differentiated or not very useful in other contexts.
     */
    category: fhir.CodeableConcept[];
    /**
     * Coding of the severity with a terminology is preferred, where possible.
     */
    severity?: fhir.CodeableConcept | undefined;
    /**
     * Identification of the condition, problem or diagnosis.
     */
    code?: fhir.CodeableConcept | undefined;
    /**
     * Only used if not implicit in code found in Condition.code. If the use case requires attributes from the BodySite resource (e.g. to identify and track separately) then use the standard extension [body-site-instance](extension-body-site-instance.html).  May be a summary code, or a reference to a very precise definition of the location, or both.
     */
    bodySite: fhir.CodeableConcept[];
    /**
     * Indicates the patient or group who the condition record is associated with.
     */
    subject: fhir.Reference | null;
    /**
     * This record indicates the encounter this particular record is associated with.  In the case of a "new" diagnosis reflecting ongoing/revised information about the condition, this might be distinct from the first encounter in which the underlying condition was first "known".
     */
    context?: fhir.Reference | undefined;
    /**
     * Age is generally used when the patient reports an age at which the Condition began to occur.
     */
    onset?: (fhir.FhirDateTime | fhir.Age | fhir.Period | fhir.Range | fhir.FhirString) | undefined;
    /**
     * Internal flag to properly serialize choice-type element Condition.onset[x]
     */
    protected static readonly _fts_onsetIsChoice: true;
    /**
     * There is no explicit distinction between resolution and remission because in many cases the distinction is not clear. Age is generally used when the patient reports an age at which the Condition abated.  If there is no abatement element, it is unknown whether the condition has resolved or entered remission; applications and users should generally assume that the condition is still valid.  When abatementString exists, it implies the condition is abated.
     */
    abatement?: (fhir.FhirDateTime | fhir.Age | fhir.FhirBoolean | fhir.Period | fhir.Range | fhir.FhirString) | undefined;
    /**
     * Internal flag to properly serialize choice-type element Condition.abatement[x]
     */
    protected static readonly _fts_abatementIsChoice: true;
    /**
     * The assertedDate represents the date when this particular Condition record was created in the EHR, not the date of the most recent update in terms of when severity, abatement, etc. were specified.  The date of the last record modification can be retrieved from the resource metadata.
     */
    assertedDate?: fhir.FhirDateTime | undefined;
    /**
     * Individual who is making the condition statement.
     */
    asserter?: fhir.Reference | undefined;
    /**
     * Clinical stage or grade of a condition. May include formal severity assessments.
     */
    stage?: fhir.ConditionStage | undefined;
    /**
     * The evidence may be a simple list of coded symptoms/manifestations, or references to observations or formal assessments, or both.
     */
    evidence: fhir.ConditionEvidence[];
    /**
     * Additional information about the Condition. This is a general notes/comments entry  for description of the Condition, its diagnosis and prognosis.
     */
    note: fhir.Annotation[];
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