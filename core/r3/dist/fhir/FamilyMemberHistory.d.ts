import * as fhir from '../fhir.js';
import { HistoryStatusCodeType } from '../fhirValueSets/HistoryStatusCodes.js';
import { AdministrativeGenderCodeType } from '../fhirValueSets/AdministrativeGenderCodes.js';
/**
 * Valid arguments for the FamilyMemberHistoryCondition type.
 */
export interface FamilyMemberHistoryConditionArgs extends fhir.BackboneElementArgs {
    /**
     * The actual condition specified. Could be a coded condition (like MI or Diabetes) or a less specific string like 'cancer' depending on how much is known about the condition and the capabilities of the creating system.
     */
    code: fhir.CodeableConceptArgs | null;
    /**
     * Indicates what happened as a result of this condition.  If the condition resulted in death, deceased date is captured on the relation.
     */
    outcome?: fhir.CodeableConceptArgs | undefined;
    /**
     * Either the age of onset, range of approximate age or descriptive string can be recorded.  For conditions with multiple occurrences, this describes the first known occurrence.
     */
    onset?: fhir.Age | fhir.Range | fhir.Period | fhir.FhirString | undefined;
    /**
     * Either the age of onset, range of approximate age or descriptive string can be recorded.  For conditions with multiple occurrences, this describes the first known occurrence.
     */
    onsetAge?: fhir.AgeArgs | undefined;
    /**
     * Either the age of onset, range of approximate age or descriptive string can be recorded.  For conditions with multiple occurrences, this describes the first known occurrence.
     */
    onsetRange?: fhir.RangeArgs | undefined;
    /**
     * Either the age of onset, range of approximate age or descriptive string can be recorded.  For conditions with multiple occurrences, this describes the first known occurrence.
     */
    onsetPeriod?: fhir.PeriodArgs | undefined;
    /**
     * Either the age of onset, range of approximate age or descriptive string can be recorded.  For conditions with multiple occurrences, this describes the first known occurrence.
     */
    onsetString?: fhir.FhirString | string | undefined;
    /**
     * An area where general notes can be placed about this specific condition.
     */
    note?: fhir.AnnotationArgs[] | undefined;
}
/**
 * If none of the conditions listed have an outcome of "death" specified, that indicates that none of the specified conditions are known to have been the primary cause of death.
 */
export declare class FamilyMemberHistoryCondition extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The actual condition specified. Could be a coded condition (like MI or Diabetes) or a less specific string like 'cancer' depending on how much is known about the condition and the capabilities of the creating system.
     */
    code: fhir.CodeableConcept | null;
    /**
     * Indicates what happened as a result of this condition.  If the condition resulted in death, deceased date is captured on the relation.
     */
    outcome?: fhir.CodeableConcept | undefined;
    /**
     * Either the age of onset, range of approximate age or descriptive string can be recorded.  For conditions with multiple occurrences, this describes the first known occurrence.
     */
    onset?: (fhir.Age | fhir.Range | fhir.Period | fhir.FhirString) | undefined;
    /**
     * Internal flag to properly serialize choice-type element FamilyMemberHistory.condition.onset[x]
     */
    protected static readonly _fts_onsetIsChoice: true;
    /**
     * An area where general notes can be placed about this specific condition.
     */
    note: fhir.Annotation[];
    /**
     * Default constructor for FamilyMemberHistoryCondition - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<FamilyMemberHistoryConditionArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the FamilyMemberHistory type.
 */
export interface FamilyMemberHistoryArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "FamilyMemberHistory" | undefined;
    /**
     * This records identifiers associated with this family member history record that are defined by business processes and/ or used to refer to it when a direct URL reference to the resource itself is not appropriate (e.g. in CDA documents, or in written / printed documentation).
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * A protocol or questionnaire that was adhered to in whole or in part by this event.
     */
    definition?: fhir.ReferenceArgs[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: fhir.FhirCode<HistoryStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: FamilyMemberHistory.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * This element is labeled as a modifier because it marks the family member history as a family member history that did not occur.  The more attributes are populated, the more constrained the negated statement is.  This notDone element is being evaluated and will likely be removed in a subsequent release.
     */
    notDone?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: FamilyMemberHistory.notDone
     */
    _notDone?: fhir.FhirElementArgs;
    /**
     * This notDoneReason element is being evaluated and will likely be replaced in a subsequent release (e.g. dataAbsentReason).
     */
    notDoneReason?: fhir.CodeableConceptArgs | undefined;
    /**
     * The person who this history concerns.
     */
    patient: fhir.ReferenceArgs | null;
    /**
     * This should be captured even if the same as the date on the List aggregating the full family history.
     */
    date?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: FamilyMemberHistory.date
     */
    _date?: fhir.FhirElementArgs;
    /**
     * This will either be a name or a description; e.g. "Aunt Susan", "my cousin with the red hair".
     */
    name?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: FamilyMemberHistory.name
     */
    _name?: fhir.FhirElementArgs;
    /**
     * The type of relationship this person has to the patient (father, mother, brother etc.).
     */
    relationship: fhir.CodeableConceptArgs | null;
    /**
     * Administrative Gender - the gender that the relative is considered to have for administration and record keeping purposes.
     */
    gender?: fhir.FhirCode<AdministrativeGenderCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: FamilyMemberHistory.gender
     */
    _gender?: fhir.FhirElementArgs;
    /**
     * The actual or approximate date of birth of the relative.
     */
    born?: fhir.Period | fhir.FhirDate | fhir.FhirString | undefined;
    /**
     * The actual or approximate date of birth of the relative.
     */
    bornPeriod?: fhir.PeriodArgs | undefined;
    /**
     * The actual or approximate date of birth of the relative.
     */
    bornDate?: fhir.FhirDate | string | undefined;
    /**
     * The actual or approximate date of birth of the relative.
     */
    bornString?: fhir.FhirString | string | undefined;
    /**
     * use estimatedAge to indicate whether the age is actual or not.
     */
    age?: fhir.Age | fhir.Range | fhir.FhirString | undefined;
    /**
     * use estimatedAge to indicate whether the age is actual or not.
     */
    ageAge?: fhir.AgeArgs | undefined;
    /**
     * use estimatedAge to indicate whether the age is actual or not.
     */
    ageRange?: fhir.RangeArgs | undefined;
    /**
     * use estimatedAge to indicate whether the age is actual or not.
     */
    ageString?: fhir.FhirString | string | undefined;
    /**
     * This element is labeled as a modifier because the fact tha age is estimated can/should change the results of any algorithm that calculates based on the specified age.
     */
    estimatedAge?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: FamilyMemberHistory.estimatedAge
     */
    _estimatedAge?: fhir.FhirElementArgs;
    /**
     * Deceased flag or the actual or approximate age of the relative at the time of death for the family member history record.
     */
    deceased?: fhir.FhirBoolean | fhir.Age | fhir.Range | fhir.FhirDate | fhir.FhirString | undefined;
    /**
     * Deceased flag or the actual or approximate age of the relative at the time of death for the family member history record.
     */
    deceasedBoolean?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Deceased flag or the actual or approximate age of the relative at the time of death for the family member history record.
     */
    deceasedAge?: fhir.AgeArgs | undefined;
    /**
     * Deceased flag or the actual or approximate age of the relative at the time of death for the family member history record.
     */
    deceasedRange?: fhir.RangeArgs | undefined;
    /**
     * Deceased flag or the actual or approximate age of the relative at the time of death for the family member history record.
     */
    deceasedDate?: fhir.FhirDate | string | undefined;
    /**
     * Deceased flag or the actual or approximate age of the relative at the time of death for the family member history record.
     */
    deceasedString?: fhir.FhirString | string | undefined;
    /**
     * Textual reasons can be caprued using reasonCode.text.
     */
    reasonCode?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Indicates a Condition, Observation, AllergyIntolerance, or QuestionnaireResponse that justifies this family member history event.
     */
    reasonReference?: fhir.ReferenceArgs[] | undefined;
    /**
     * This property allows a non condition-specific note to the made about the related person. Ideally, the note would be in the condition property, but this is not always possible.
     */
    note?: fhir.AnnotationArgs[] | undefined;
    /**
     * If none of the conditions listed have an outcome of "death" specified, that indicates that none of the specified conditions are known to have been the primary cause of death.
     */
    condition?: fhir.FamilyMemberHistoryConditionArgs[] | undefined;
}
/**
 * Significant health events and conditions for a person related to the patient relevant in the context of care for the patient.
 */
export declare class FamilyMemberHistory extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "FamilyMemberHistory";
    /**
     * This records identifiers associated with this family member history record that are defined by business processes and/ or used to refer to it when a direct URL reference to the resource itself is not appropriate (e.g. in CDA documents, or in written / printed documentation).
     */
    identifier: fhir.Identifier[];
    /**
     * A protocol or questionnaire that was adhered to in whole or in part by this event.
     */
    definition: fhir.Reference[];
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: fhir.FhirCode<HistoryStatusCodeType> | null;
    /**
     * This element is labeled as a modifier because it marks the family member history as a family member history that did not occur.  The more attributes are populated, the more constrained the negated statement is.  This notDone element is being evaluated and will likely be removed in a subsequent release.
     */
    notDone?: fhir.FhirBoolean | undefined;
    /**
     * This notDoneReason element is being evaluated and will likely be replaced in a subsequent release (e.g. dataAbsentReason).
     */
    notDoneReason?: fhir.CodeableConcept | undefined;
    /**
     * The person who this history concerns.
     */
    patient: fhir.Reference | null;
    /**
     * This should be captured even if the same as the date on the List aggregating the full family history.
     */
    date?: fhir.FhirDateTime | undefined;
    /**
     * This will either be a name or a description; e.g. "Aunt Susan", "my cousin with the red hair".
     */
    name?: fhir.FhirString | undefined;
    /**
     * The type of relationship this person has to the patient (father, mother, brother etc.).
     */
    relationship: fhir.CodeableConcept | null;
    /**
     * Administrative Gender - the gender that the relative is considered to have for administration and record keeping purposes.
     */
    gender?: fhir.FhirCode<AdministrativeGenderCodeType> | undefined;
    /**
     * The actual or approximate date of birth of the relative.
     */
    born?: (fhir.Period | fhir.FhirDate | fhir.FhirString) | undefined;
    /**
     * Internal flag to properly serialize choice-type element FamilyMemberHistory.born[x]
     */
    protected static readonly _fts_bornIsChoice: true;
    /**
     * use estimatedAge to indicate whether the age is actual or not.
     */
    age?: (fhir.Age | fhir.Range | fhir.FhirString) | undefined;
    /**
     * Internal flag to properly serialize choice-type element FamilyMemberHistory.age[x]
     */
    protected static readonly _fts_ageIsChoice: true;
    /**
     * This element is labeled as a modifier because the fact tha age is estimated can/should change the results of any algorithm that calculates based on the specified age.
     */
    estimatedAge?: fhir.FhirBoolean | undefined;
    /**
     * Deceased flag or the actual or approximate age of the relative at the time of death for the family member history record.
     */
    deceased?: (fhir.FhirBoolean | fhir.Age | fhir.Range | fhir.FhirDate | fhir.FhirString) | undefined;
    /**
     * Internal flag to properly serialize choice-type element FamilyMemberHistory.deceased[x]
     */
    protected static readonly _fts_deceasedIsChoice: true;
    /**
     * Textual reasons can be caprued using reasonCode.text.
     */
    reasonCode: fhir.CodeableConcept[];
    /**
     * Indicates a Condition, Observation, AllergyIntolerance, or QuestionnaireResponse that justifies this family member history event.
     */
    reasonReference: fhir.Reference[];
    /**
     * This property allows a non condition-specific note to the made about the related person. Ideally, the note would be in the condition property, but this is not always possible.
     */
    note: fhir.Annotation[];
    /**
     * If none of the conditions listed have an outcome of "death" specified, that indicates that none of the specified conditions are known to have been the primary cause of death.
     */
    condition: fhir.FamilyMemberHistoryCondition[];
    /**
     * Default constructor for FamilyMemberHistory - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<FamilyMemberHistoryArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=FamilyMemberHistory.d.ts.map