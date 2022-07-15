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
     * Age of onset of a condition in relatives is predictive of risk for the patient.
     */
    onset?: fhir.Quantity | fhir.Range | fhir.Period | fhir.FhirString | undefined;
    /**
     * Age of onset of a condition in relatives is predictive of risk for the patient.
     */
    onsetQuantity?: fhir.QuantityArgs | undefined;
    /**
     * Age of onset of a condition in relatives is predictive of risk for the patient.
     */
    onsetRange?: fhir.RangeArgs | undefined;
    /**
     * Age of onset of a condition in relatives is predictive of risk for the patient.
     */
    onsetPeriod?: fhir.PeriodArgs | undefined;
    /**
     * Age of onset of a condition in relatives is predictive of risk for the patient.
     */
    onsetString?: fhir.FhirString | string | undefined;
    /**
     * An area where general notes can be placed about this specific condition.
     */
    note?: fhir.AnnotationArgs | undefined;
}
/**
 * The significant Conditions (or condition) that the family member had. This is a repeating section to allow a system to represent more than one condition per resource, though there is nothing stopping multiple resources - one per condition.
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
     * Age of onset of a condition in relatives is predictive of risk for the patient.
     */
    onset?: (fhir.Quantity | fhir.Range | fhir.Period | fhir.FhirString) | undefined;
    /**
     * Internal flag to properly serialize choice-type element FamilyMemberHistory.condition.onset[x]
     */
    protected static readonly _fts_onsetIsChoice: true;
    /**
     * An area where general notes can be placed about this specific condition.
     */
    note?: fhir.Annotation | undefined;
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
     * Need to allow connection to a wider workflow.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * The person who this history concerns.
     */
    patient: fhir.ReferenceArgs | null;
    /**
     * Allows determination of how current the summary is.
     */
    date?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: FamilyMemberHistory.date
     */
    _date?: fhir.FhirElementArgs;
    /**
     * A code specifying a state of a Family Member History record.
     */
    status: fhir.FhirCode<HistoryStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: FamilyMemberHistory.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * Allows greater ease in ensuring the same person is being talked about.
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
     * Not all relationship codes imply gender and the relative's gender can be relevant for risk assessments.
     */
    gender?: fhir.FhirCode<AdministrativeGenderCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: FamilyMemberHistory.gender
     */
    _gender?: fhir.FhirElementArgs;
    /**
     * Allows calculation of the relative's age.
     */
    born?: fhir.Period | fhir.FhirDate | fhir.FhirString | undefined;
    /**
     * Allows calculation of the relative's age.
     */
    bornPeriod?: fhir.PeriodArgs | undefined;
    /**
     * Allows calculation of the relative's age.
     */
    bornDate?: fhir.FhirDate | string | undefined;
    /**
     * Allows calculation of the relative's age.
     */
    bornString?: fhir.FhirString | string | undefined;
    /**
     * While age can be calculated from date of birth, sometimes recording age directly is more natureal for clinicians.
     */
    age?: fhir.Quantity | fhir.Range | fhir.FhirString | undefined;
    /**
     * While age can be calculated from date of birth, sometimes recording age directly is more natureal for clinicians.
     */
    ageQuantity?: fhir.QuantityArgs | undefined;
    /**
     * While age can be calculated from date of birth, sometimes recording age directly is more natureal for clinicians.
     */
    ageRange?: fhir.RangeArgs | undefined;
    /**
     * While age can be calculated from date of birth, sometimes recording age directly is more natureal for clinicians.
     */
    ageString?: fhir.FhirString | string | undefined;
    /**
     * Deceased flag or the actual or approximate age of the relative at the time of death for the family member history record.
     */
    deceased?: fhir.FhirBoolean | fhir.Quantity | fhir.Range | fhir.FhirDate | fhir.FhirString | undefined;
    /**
     * Deceased flag or the actual or approximate age of the relative at the time of death for the family member history record.
     */
    deceasedBoolean?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Deceased flag or the actual or approximate age of the relative at the time of death for the family member history record.
     */
    deceasedQuantity?: fhir.QuantityArgs | undefined;
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
     * This property allows a non condition-specific note to the made about the related person. Ideally, the note would be in the condition property, but this is not always possible.
     */
    note?: fhir.AnnotationArgs | undefined;
    /**
     * The significant Conditions (or condition) that the family member had. This is a repeating section to allow a system to represent more than one condition per resource, though there is nothing stopping multiple resources - one per condition.
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
     * Need to allow connection to a wider workflow.
     */
    identifier: fhir.Identifier[];
    /**
     * The person who this history concerns.
     */
    patient: fhir.Reference | null;
    /**
     * Allows determination of how current the summary is.
     */
    date?: fhir.FhirDateTime | undefined;
    /**
     * A code specifying a state of a Family Member History record.
     */
    status: fhir.FhirCode<HistoryStatusCodeType> | null;
    /**
     * Allows greater ease in ensuring the same person is being talked about.
     */
    name?: fhir.FhirString | undefined;
    /**
     * The type of relationship this person has to the patient (father, mother, brother etc.).
     */
    relationship: fhir.CodeableConcept | null;
    /**
     * Not all relationship codes imply gender and the relative's gender can be relevant for risk assessments.
     */
    gender?: fhir.FhirCode<AdministrativeGenderCodeType> | undefined;
    /**
     * Allows calculation of the relative's age.
     */
    born?: (fhir.Period | fhir.FhirDate | fhir.FhirString) | undefined;
    /**
     * Internal flag to properly serialize choice-type element FamilyMemberHistory.born[x]
     */
    protected static readonly _fts_bornIsChoice: true;
    /**
     * While age can be calculated from date of birth, sometimes recording age directly is more natureal for clinicians.
     */
    age?: (fhir.Quantity | fhir.Range | fhir.FhirString) | undefined;
    /**
     * Internal flag to properly serialize choice-type element FamilyMemberHistory.age[x]
     */
    protected static readonly _fts_ageIsChoice: true;
    /**
     * Deceased flag or the actual or approximate age of the relative at the time of death for the family member history record.
     */
    deceased?: (fhir.FhirBoolean | fhir.Quantity | fhir.Range | fhir.FhirDate | fhir.FhirString) | undefined;
    /**
     * Internal flag to properly serialize choice-type element FamilyMemberHistory.deceased[x]
     */
    protected static readonly _fts_deceasedIsChoice: true;
    /**
     * This property allows a non condition-specific note to the made about the related person. Ideally, the note would be in the condition property, but this is not always possible.
     */
    note?: fhir.Annotation | undefined;
    /**
     * The significant Conditions (or condition) that the family member had. This is a repeating section to allow a system to represent more than one condition per resource, though there is nothing stopping multiple resources - one per condition.
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