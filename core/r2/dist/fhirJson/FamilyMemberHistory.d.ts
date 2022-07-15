import * as fhir from '../fhirJson.js';
/**
 * The significant Conditions (or condition) that the family member had. This is a repeating section to allow a system to represent more than one condition per resource, though there is nothing stopping multiple resources - one per condition.
 */
export interface FamilyMemberHistoryCondition extends fhir.BackboneElement {
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
    onsetQuantity?: fhir.Quantity | undefined;
    /**
     * Age of onset of a condition in relatives is predictive of risk for the patient.
     */
    onsetRange?: fhir.Range | undefined;
    /**
     * Age of onset of a condition in relatives is predictive of risk for the patient.
     */
    onsetPeriod?: fhir.Period | undefined;
    /**
     * Age of onset of a condition in relatives is predictive of risk for the patient.
     */
    onsetString?: string | undefined;
    /**
     * Extended properties for primitive element: FamilyMemberHistory.condition.onset[x]
     */
    _onsetString?: fhir.FhirElement;
    /**
     * An area where general notes can be placed about this specific condition.
     */
    note?: fhir.Annotation | undefined;
}
/**
 * Significant health events and conditions for a person related to the patient relevant in the context of care for the patient.
 */
export interface FamilyMemberHistory extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "FamilyMemberHistory" | null;
    /**
     * Need to allow connection to a wider workflow.
     */
    identifier?: (fhir.Identifier | null)[] | undefined;
    /**
     * The person who this history concerns.
     */
    patient: fhir.Reference | null;
    /**
     * Allows determination of how current the summary is.
     */
    date?: string | undefined;
    /**
     * Extended properties for primitive element: FamilyMemberHistory.date
     */
    _date?: fhir.FhirElement;
    /**
     * A code specifying a state of a Family Member History record.
     */
    status: 'completed' | 'entered-in-error' | 'health-unknown' | 'partial' | null;
    /**
     * Extended properties for primitive element: FamilyMemberHistory.status
     */
    _status?: fhir.FhirElement;
    /**
     * Allows greater ease in ensuring the same person is being talked about.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: FamilyMemberHistory.name
     */
    _name?: fhir.FhirElement;
    /**
     * The type of relationship this person has to the patient (father, mother, brother etc.).
     */
    relationship: fhir.CodeableConcept | null;
    /**
     * Not all relationship codes imply gender and the relative's gender can be relevant for risk assessments.
     */
    gender?: 'female' | 'male' | 'other' | 'unknown' | undefined;
    /**
     * Extended properties for primitive element: FamilyMemberHistory.gender
     */
    _gender?: fhir.FhirElement;
    /**
     * Allows calculation of the relative's age.
     */
    bornPeriod?: fhir.Period | undefined;
    /**
     * Allows calculation of the relative's age.
     */
    bornDate?: string | undefined;
    /**
     * Extended properties for primitive element: FamilyMemberHistory.born[x]
     */
    _bornDate?: fhir.FhirElement;
    /**
     * Allows calculation of the relative's age.
     */
    bornString?: string | undefined;
    /**
     * Extended properties for primitive element: FamilyMemberHistory.born[x]
     */
    _bornString?: fhir.FhirElement;
    /**
     * While age can be calculated from date of birth, sometimes recording age directly is more natureal for clinicians.
     */
    ageQuantity?: fhir.Quantity | undefined;
    /**
     * While age can be calculated from date of birth, sometimes recording age directly is more natureal for clinicians.
     */
    ageRange?: fhir.Range | undefined;
    /**
     * While age can be calculated from date of birth, sometimes recording age directly is more natureal for clinicians.
     */
    ageString?: string | undefined;
    /**
     * Extended properties for primitive element: FamilyMemberHistory.age[x]
     */
    _ageString?: fhir.FhirElement;
    /**
     * Deceased flag or the actual or approximate age of the relative at the time of death for the family member history record.
     */
    deceasedBoolean?: boolean | undefined;
    /**
     * Extended properties for primitive element: FamilyMemberHistory.deceased[x]
     */
    _deceasedBoolean?: fhir.FhirElement;
    /**
     * Deceased flag or the actual or approximate age of the relative at the time of death for the family member history record.
     */
    deceasedQuantity?: fhir.Quantity | undefined;
    /**
     * Deceased flag or the actual or approximate age of the relative at the time of death for the family member history record.
     */
    deceasedRange?: fhir.Range | undefined;
    /**
     * Deceased flag or the actual or approximate age of the relative at the time of death for the family member history record.
     */
    deceasedDate?: string | undefined;
    /**
     * Extended properties for primitive element: FamilyMemberHistory.deceased[x]
     */
    _deceasedDate?: fhir.FhirElement;
    /**
     * Deceased flag or the actual or approximate age of the relative at the time of death for the family member history record.
     */
    deceasedString?: string | undefined;
    /**
     * Extended properties for primitive element: FamilyMemberHistory.deceased[x]
     */
    _deceasedString?: fhir.FhirElement;
    /**
     * This property allows a non condition-specific note to the made about the related person. Ideally, the note would be in the condition property, but this is not always possible.
     */
    note?: fhir.Annotation | undefined;
    /**
     * The significant Conditions (or condition) that the family member had. This is a repeating section to allow a system to represent more than one condition per resource, though there is nothing stopping multiple resources - one per condition.
     */
    condition?: (fhir.FamilyMemberHistoryCondition | null)[] | undefined;
}
//# sourceMappingURL=FamilyMemberHistory.d.ts.map