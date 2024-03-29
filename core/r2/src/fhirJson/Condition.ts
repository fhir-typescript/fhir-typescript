// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR Resource: Condition

import * as fhir from '../fhirJson.js';


/**
 * Clinical stage or grade of a condition. May include formal severity assessments.
 */
export interface ConditionStage extends fhir.BackboneElement { 
  /**
   * A simple summary of the stage such as "Stage 3". The determination of the stage is disease-specific.
   */
  summary?: fhir.CodeableConcept|undefined;
  /**
   * Reference to a formal record of the evidence on which the staging assessment is based.
   */
  assessment?: (fhir.Reference|null)[]|undefined;
}

/**
 * Supporting Evidence / manifestations that are the basis on which this condition is suspected or confirmed.
 */
export interface ConditionEvidence extends fhir.BackboneElement { 
  /**
   * A manifestation or symptom that led to the recording of this condition.
   */
  code?: fhir.CodeableConcept|undefined;
  /**
   * Links to other relevant information, including pathology reports.
   */
  detail?: (fhir.Reference|null)[]|undefined;
}

/**
 * Use to record detailed information about conditions, problems or diagnoses recognized by a clinician. There are many uses including: recording a diagnosis during an encounter; populating a problem list or a summary statement, such as a discharge summary.
 */
export interface Condition extends fhir.DomainResource { 
  /**
   * Resource Type Name
   */
  resourceType: "Condition"|null;
  /**
   * Need to allow connection to a wider workflow.
   */
  identifier?: (fhir.Identifier|null)[]|undefined;
  /**
   * Indicates the patient who the condition record is associated with.
   */
  patient: fhir.Reference|null;
  /**
   * Encounter during which the condition was first asserted.
   */
  encounter?: fhir.Reference|undefined;
  /**
   * Individual who is making the condition statement.
   */
  asserter?: fhir.Reference|undefined;
  /**
   * A date, when  the Condition statement was documented.
   */
  dateRecorded?: string|undefined;
  /**
   * Extended properties for primitive element: Condition.dateRecorded
   */
  _dateRecorded?:fhir.FhirElement;
  /**
   * Identification of the condition, problem or diagnosis.
   */
  code: fhir.CodeableConcept|null;
  /**
   * A category assigned to the condition.
   */
  category?: fhir.CodeableConcept|undefined;
  /**
   * The clinical status of the condition.
   */
  clinicalStatus?: string|undefined;
  /**
   * Extended properties for primitive element: Condition.clinicalStatus
   */
  _clinicalStatus?:fhir.FhirElement;
  /**
   * The verification status to support the clinical status of the condition.
   */
  verificationStatus: 'confirmed'|'differential'|'entered-in-error'|'provisional'|'refuted'|'unknown'|null;
  /**
   * Extended properties for primitive element: Condition.verificationStatus
   */
  _verificationStatus?:fhir.FhirElement;
  /**
   * A subjective assessment of the severity of the condition as evaluated by the clinician.
   */
  severity?: fhir.CodeableConcept|undefined;
  /**
   * Estimated or actual date or date-time  the condition began, in the opinion of the clinician.
   */
  onsetDateTime?: string|undefined;
  /**
   * Extended properties for primitive element: Condition.onset[x]
   */
  _onsetDateTime?:fhir.FhirElement;
  /**
   * Estimated or actual date or date-time  the condition began, in the opinion of the clinician.
   */
  onsetQuantity?: fhir.Quantity|undefined;
  /**
   * Estimated or actual date or date-time  the condition began, in the opinion of the clinician.
   */
  onsetPeriod?: fhir.Period|undefined;
  /**
   * Estimated or actual date or date-time  the condition began, in the opinion of the clinician.
   */
  onsetRange?: fhir.Range|undefined;
  /**
   * Estimated or actual date or date-time  the condition began, in the opinion of the clinician.
   */
  onsetString?: string|undefined;
  /**
   * Extended properties for primitive element: Condition.onset[x]
   */
  _onsetString?:fhir.FhirElement;
  /**
   * The date or estimated date that the condition resolved or went into remission. This is called "abatement" because of the many overloaded connotations associated with "remission" or "resolution" - Conditions are never really resolved, but they can abate.
   */
  abatementDateTime?: string|undefined;
  /**
   * Extended properties for primitive element: Condition.abatement[x]
   */
  _abatementDateTime?:fhir.FhirElement;
  /**
   * The date or estimated date that the condition resolved or went into remission. This is called "abatement" because of the many overloaded connotations associated with "remission" or "resolution" - Conditions are never really resolved, but they can abate.
   */
  abatementQuantity?: fhir.Quantity|undefined;
  /**
   * The date or estimated date that the condition resolved or went into remission. This is called "abatement" because of the many overloaded connotations associated with "remission" or "resolution" - Conditions are never really resolved, but they can abate.
   */
  abatementBoolean?: boolean|undefined;
  /**
   * Extended properties for primitive element: Condition.abatement[x]
   */
  _abatementBoolean?:fhir.FhirElement;
  /**
   * The date or estimated date that the condition resolved or went into remission. This is called "abatement" because of the many overloaded connotations associated with "remission" or "resolution" - Conditions are never really resolved, but they can abate.
   */
  abatementPeriod?: fhir.Period|undefined;
  /**
   * The date or estimated date that the condition resolved or went into remission. This is called "abatement" because of the many overloaded connotations associated with "remission" or "resolution" - Conditions are never really resolved, but they can abate.
   */
  abatementRange?: fhir.Range|undefined;
  /**
   * The date or estimated date that the condition resolved or went into remission. This is called "abatement" because of the many overloaded connotations associated with "remission" or "resolution" - Conditions are never really resolved, but they can abate.
   */
  abatementString?: string|undefined;
  /**
   * Extended properties for primitive element: Condition.abatement[x]
   */
  _abatementString?:fhir.FhirElement;
  /**
   * Clinical stage or grade of a condition. May include formal severity assessments.
   */
  stage?: fhir.ConditionStage|undefined;
  /**
   * Supporting Evidence / manifestations that are the basis on which this condition is suspected or confirmed.
   */
  evidence?: (fhir.ConditionEvidence|null)[]|undefined;
  /**
   * The anatomical location where this condition manifests itself.
   */
  bodySite?: (fhir.CodeableConcept|null)[]|undefined;
  /**
   * Additional information about the Condition. This is a general notes/comments entry  for description of the Condition, its diagnosis and prognosis.
   */
  notes?: string|undefined;
  /**
   * Extended properties for primitive element: Condition.notes
   */
  _notes?:fhir.FhirElement;
}
