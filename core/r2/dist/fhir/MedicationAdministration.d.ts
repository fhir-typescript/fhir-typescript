import * as fhir from '../fhir.js';
import { MedicationAdminStatusCodeType } from '../fhirValueSets/MedicationAdminStatusCodes.js';
/**
 * Valid arguments for the MedicationAdministrationDosage type.
 */
export interface MedicationAdministrationDosageArgs extends fhir.BackboneElementArgs {
    /**
     * Free text dosage instructions can be used for cases where the instructions are too complex to code. When coded instructions are present, the free text instructions may still be present for display to humans taking or administering the medication.
     */
    text?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: MedicationAdministration.dosage.text
     */
    _text?: fhir.FhirElementArgs;
    /**
     * A coded specification of the anatomic site where the medication first entered the body.  For example, "left arm".
     */
    site?: fhir.CodeableConcept | fhir.Reference | undefined;
    /**
     * A coded specification of the anatomic site where the medication first entered the body.  For example, "left arm".
     */
    siteCodeableConcept?: fhir.CodeableConceptArgs | undefined;
    /**
     * A coded specification of the anatomic site where the medication first entered the body.  For example, "left arm".
     */
    siteReference?: fhir.ReferenceArgs | undefined;
    /**
     * A code specifying the route or physiological path of administration of a therapeutic agent into or onto the patient.  For example, topical, intravenous, etc.
     */
    route?: fhir.CodeableConceptArgs | undefined;
    /**
     * A coded value indicating the method by which the medication is intended to be or was introduced into or on the body.  This attribute will most often NOT be populated.  It is most commonly used for injections.  For example, Slow Push, Deep IV.
     */
    method?: fhir.CodeableConceptArgs | undefined;
    /**
     * The amount of the medication given at one administration event.   Use this value when the administration is essentially an instantaneous event such as a swallowing a tablet or giving an injection.
     */
    quantity?: fhir.QuantityArgs | undefined;
    /**
     * Identifies the speed with which the medication was or will be introduced into the patient.  Typically the rate for an infusion e.g. 100 ml per 1 hour or 100 ml/hr.  May also be expressed as a rate per unit of time e.g. 500 ml per 2 hours.  Currently we do not specify a default of '1' in the denominator, but this is being discussed.  Other examples:  200 mcg/min or 200 mcg/1 minute; 1 liter/8 hours.
     */
    rate?: fhir.Ratio | fhir.Range | undefined;
    /**
     * Identifies the speed with which the medication was or will be introduced into the patient.  Typically the rate for an infusion e.g. 100 ml per 1 hour or 100 ml/hr.  May also be expressed as a rate per unit of time e.g. 500 ml per 2 hours.  Currently we do not specify a default of '1' in the denominator, but this is being discussed.  Other examples:  200 mcg/min or 200 mcg/1 minute; 1 liter/8 hours.
     */
    rateRatio?: fhir.RatioArgs | undefined;
    /**
     * Identifies the speed with which the medication was or will be introduced into the patient.  Typically the rate for an infusion e.g. 100 ml per 1 hour or 100 ml/hr.  May also be expressed as a rate per unit of time e.g. 500 ml per 2 hours.  Currently we do not specify a default of '1' in the denominator, but this is being discussed.  Other examples:  200 mcg/min or 200 mcg/1 minute; 1 liter/8 hours.
     */
    rateRange?: fhir.RangeArgs | undefined;
}
/**
 * Describes the medication dosage information details e.g. dose, rate, site, route, etc.
 */
export declare class MedicationAdministrationDosage extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Free text dosage instructions can be used for cases where the instructions are too complex to code. When coded instructions are present, the free text instructions may still be present for display to humans taking or administering the medication.
     */
    text?: fhir.FhirString | undefined;
    /**
     * A coded specification of the anatomic site where the medication first entered the body.  For example, "left arm".
     */
    site?: (fhir.CodeableConcept | fhir.Reference) | undefined;
    /**
     * Internal flag to properly serialize choice-type element MedicationAdministration.dosage.site[x]
     */
    protected static readonly _fts_siteIsChoice: true;
    /**
     * A code specifying the route or physiological path of administration of a therapeutic agent into or onto the patient.  For example, topical, intravenous, etc.
     */
    route?: fhir.CodeableConcept | undefined;
    /**
     * A coded value indicating the method by which the medication is intended to be or was introduced into or on the body.  This attribute will most often NOT be populated.  It is most commonly used for injections.  For example, Slow Push, Deep IV.
     */
    method?: fhir.CodeableConcept | undefined;
    /**
     * The amount of the medication given at one administration event.   Use this value when the administration is essentially an instantaneous event such as a swallowing a tablet or giving an injection.
     */
    quantity?: fhir.Quantity | undefined;
    /**
     * Identifies the speed with which the medication was or will be introduced into the patient.  Typically the rate for an infusion e.g. 100 ml per 1 hour or 100 ml/hr.  May also be expressed as a rate per unit of time e.g. 500 ml per 2 hours.  Currently we do not specify a default of '1' in the denominator, but this is being discussed.  Other examples:  200 mcg/min or 200 mcg/1 minute; 1 liter/8 hours.
     */
    rate?: (fhir.Ratio | fhir.Range) | undefined;
    /**
     * Internal flag to properly serialize choice-type element MedicationAdministration.dosage.rate[x]
     */
    protected static readonly _fts_rateIsChoice: true;
    /**
     * Default constructor for MedicationAdministrationDosage - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<MedicationAdministrationDosageArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the MedicationAdministration type.
 */
export interface MedicationAdministrationArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "MedicationAdministration" | undefined;
    /**
     * External identifier - FHIR will generate its own internal identifiers (probably URLs) which do not need to be explicitly managed by the resource.  The identifier here is one that would be used by another non-FHIR system - for example an automated medication pump would provide a record each time it operated; an administration while the patient was off the ward might be made with a different system and entered after the event.  Particularly important if these records have to be updated.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * Will generally be set to show that the administration has been completed.  For some long running administrations such as infusions it is possible for an administration to be started but not completed or it may be paused while some other process is under way.
     */
    status: fhir.FhirCode<MedicationAdminStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: MedicationAdministration.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * The person or animal receiving the medication.
     */
    patient: fhir.ReferenceArgs | null;
    /**
     * The individual who was responsible for giving the medication to the patient.
     */
    practitioner?: fhir.ReferenceArgs | undefined;
    /**
     * The visit, admission or other contact between patient and health care provider the medication administration was performed as part of.
     */
    encounter?: fhir.ReferenceArgs | undefined;
    /**
     * The original request, instruction or authority to perform the administration.
     */
    prescription?: fhir.ReferenceArgs | undefined;
    /**
     * Set this to true if the record is saying that the medication was NOT administered.
     */
    wasNotGiven?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: MedicationAdministration.wasNotGiven
     */
    _wasNotGiven?: fhir.FhirElementArgs;
    /**
     * A code indicating why the administration was not performed.
     */
    reasonNotGiven?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * A code indicating why the medication was given.
     */
    reasonGiven?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * A specific date/time or interval of time during which the administration took place (or did not take place, when the 'notGiven' attribute is true). For many administrations, such as swallowing a tablet the use of dateTime is more appropriate.
     */
    effectiveTime?: fhir.FhirDateTime | fhir.Period | undefined;
    /**
     * A specific date/time or interval of time during which the administration took place (or did not take place, when the 'notGiven' attribute is true). For many administrations, such as swallowing a tablet the use of dateTime is more appropriate.
     */
    effectiveTimeDateTime?: fhir.FhirDateTime | string | undefined;
    /**
     * A specific date/time or interval of time during which the administration took place (or did not take place, when the 'notGiven' attribute is true). For many administrations, such as swallowing a tablet the use of dateTime is more appropriate.
     */
    effectiveTimePeriod?: fhir.PeriodArgs | undefined;
    /**
     * Identifies the medication that was administered. This is either a link to a resource representing the details of the medication or a simple attribute carrying a code that identifies the medication from a known list of medications.
     */
    medication?: fhir.CodeableConcept | fhir.Reference | undefined;
    /**
     * Identifies the medication that was administered. This is either a link to a resource representing the details of the medication or a simple attribute carrying a code that identifies the medication from a known list of medications.
     */
    medicationCodeableConcept?: fhir.CodeableConceptArgs | undefined;
    /**
     * Identifies the medication that was administered. This is either a link to a resource representing the details of the medication or a simple attribute carrying a code that identifies the medication from a known list of medications.
     */
    medicationReference?: fhir.ReferenceArgs | undefined;
    /**
     * The device used in administering the medication to the patient.  For example, a particular infusion pump.
     */
    device?: fhir.ReferenceArgs[] | undefined;
    /**
     * Extra information about the medication administration that is not conveyed by the other attributes.
     */
    note?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: MedicationAdministration.note
     */
    _note?: fhir.FhirElementArgs;
    /**
     * Describes the medication dosage information details e.g. dose, rate, site, route, etc.
     */
    dosage?: fhir.MedicationAdministrationDosageArgs | undefined;
}
/**
 * Describes the event of a patient consuming or otherwise being administered a medication.  This may be as simple as swallowing a tablet or it may be a long running infusion.  Related resources tie this event to the authorizing prescription, and the specific encounter between patient and health care practitioner.
 */
export declare class MedicationAdministration extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "MedicationAdministration";
    /**
     * External identifier - FHIR will generate its own internal identifiers (probably URLs) which do not need to be explicitly managed by the resource.  The identifier here is one that would be used by another non-FHIR system - for example an automated medication pump would provide a record each time it operated; an administration while the patient was off the ward might be made with a different system and entered after the event.  Particularly important if these records have to be updated.
     */
    identifier: fhir.Identifier[];
    /**
     * Will generally be set to show that the administration has been completed.  For some long running administrations such as infusions it is possible for an administration to be started but not completed or it may be paused while some other process is under way.
     */
    status: fhir.FhirCode<MedicationAdminStatusCodeType> | null;
    /**
     * The person or animal receiving the medication.
     */
    patient: fhir.Reference | null;
    /**
     * The individual who was responsible for giving the medication to the patient.
     */
    practitioner?: fhir.Reference | undefined;
    /**
     * The visit, admission or other contact between patient and health care provider the medication administration was performed as part of.
     */
    encounter?: fhir.Reference | undefined;
    /**
     * The original request, instruction or authority to perform the administration.
     */
    prescription?: fhir.Reference | undefined;
    /**
     * Set this to true if the record is saying that the medication was NOT administered.
     */
    wasNotGiven?: fhir.FhirBoolean | undefined;
    /**
     * A code indicating why the administration was not performed.
     */
    reasonNotGiven: fhir.CodeableConcept[];
    /**
     * A code indicating why the medication was given.
     */
    reasonGiven: fhir.CodeableConcept[];
    /**
     * A specific date/time or interval of time during which the administration took place (or did not take place, when the 'notGiven' attribute is true). For many administrations, such as swallowing a tablet the use of dateTime is more appropriate.
     */
    effectiveTime: (fhir.FhirDateTime | fhir.Period) | null;
    /**
     * Internal flag to properly serialize choice-type element MedicationAdministration.effectiveTime[x]
     */
    protected static readonly _fts_effectiveTimeIsChoice: true;
    /**
     * Identifies the medication that was administered. This is either a link to a resource representing the details of the medication or a simple attribute carrying a code that identifies the medication from a known list of medications.
     */
    medication: (fhir.CodeableConcept | fhir.Reference) | null;
    /**
     * Internal flag to properly serialize choice-type element MedicationAdministration.medication[x]
     */
    protected static readonly _fts_medicationIsChoice: true;
    /**
     * The device used in administering the medication to the patient.  For example, a particular infusion pump.
     */
    device: fhir.Reference[];
    /**
     * Extra information about the medication administration that is not conveyed by the other attributes.
     */
    note?: fhir.FhirString | undefined;
    /**
     * Describes the medication dosage information details e.g. dose, rate, site, route, etc.
     */
    dosage?: fhir.MedicationAdministrationDosage | undefined;
    /**
     * Default constructor for MedicationAdministration - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<MedicationAdministrationArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=MedicationAdministration.d.ts.map