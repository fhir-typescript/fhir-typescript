import * as fhir from '../fhirJson.js';
/**
 * Associated or related knowledge about a medication.
 */
export interface MedicationKnowledgeRelatedMedicationKnowledge extends fhir.BackboneElement {
    /**
     * The category of the associated medication knowledge reference.
     */
    type: fhir.CodeableConcept | null;
    /**
     * Associated documentation about the associated medication knowledge.
     */
    reference: fhir.Reference[] | null;
}
/**
 * Associated documentation about the medication.
 */
export interface MedicationKnowledgeMonograph extends fhir.BackboneElement {
    /**
     * The category of documentation about the medication. (e.g. professional monograph, patient education monograph).
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Associated documentation about the medication.
     */
    source?: fhir.Reference | undefined;
}
/**
 * Identifies a particular constituent of interest in the product.
 */
export interface MedicationKnowledgeIngredient extends fhir.BackboneElement {
    /**
     * The actual ingredient - either a substance (simple ingredient) or another medication.
     */
    itemCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * The actual ingredient - either a substance (simple ingredient) or another medication.
     */
    itemReference?: fhir.Reference | undefined;
    /**
     * Indication of whether this ingredient affects the therapeutic action of the drug.
     */
    isActive?: boolean | undefined;
    /**
     * Extended properties for primitive element: MedicationKnowledge.ingredient.isActive
     */
    _isActive?: fhir.FhirElement;
    /**
     * Specifies how many (or how much) of the items there are in this Medication.  For example, 250 mg per tablet.  This is expressed as a ratio where the numerator is 250mg and the denominator is 1 tablet.
     */
    strength?: fhir.Ratio | undefined;
}
/**
 * The price of the medication.
 */
export interface MedicationKnowledgeCost extends fhir.BackboneElement {
    /**
     * The category of the cost information.  For example, manufacturers' cost, patient cost, claim reimbursement cost, actual acquisition cost.
     */
    type: fhir.CodeableConcept | null;
    /**
     * The source or owner that assigns the price to the medication.
     */
    source?: string | undefined;
    /**
     * Extended properties for primitive element: MedicationKnowledge.cost.source
     */
    _source?: fhir.FhirElement;
    /**
     * The price of the medication.
     */
    cost: fhir.Money | null;
}
/**
 * The program under which the medication is reviewed.
 */
export interface MedicationKnowledgeMonitoringProgram extends fhir.BackboneElement {
    /**
     * Type of program under which the medication is monitored.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Name of the reviewing program.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: MedicationKnowledge.monitoringProgram.name
     */
    _name?: fhir.FhirElement;
}
/**
 * Dosage for the medication for the specific guidelines.
 */
export interface MedicationKnowledgeAdministrationGuidelinesDosage extends fhir.BackboneElement {
    /**
     * The type of dosage (for example, prophylaxis, maintenance, therapeutic, etc.).
     */
    type: fhir.CodeableConcept | null;
    /**
     * Dosage for the medication for the specific guidelines.
     */
    dosage: fhir.Dosage[] | null;
}
/**
 * Characteristics of the patient that are relevant to the administration guidelines (for example, height, weight, gender, etc.).
 */
export interface MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics extends fhir.BackboneElement {
    /**
     * Specific characteristic that is relevant to the administration guideline (e.g. height, weight, gender).
     */
    characteristicCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * Specific characteristic that is relevant to the administration guideline (e.g. height, weight, gender).
     */
    characteristicQuantity?: fhir.Quantity | undefined;
    /**
     * The specific characteristic (e.g. height, weight, gender, etc.).
     */
    value?: string[] | undefined;
    /**
     * Extended properties for primitive element: MedicationKnowledge.administrationGuidelines.patientCharacteristics.value
     */
    _value?: (fhir.FhirElement | null)[];
}
/**
 * Guidelines for the administration of the medication.
 */
export interface MedicationKnowledgeAdministrationGuidelines extends fhir.BackboneElement {
    /**
     * Dosage for the medication for the specific guidelines.
     */
    dosage?: fhir.MedicationKnowledgeAdministrationGuidelinesDosage[] | undefined;
    /**
     * Indication for use that apply to the specific administration guidelines.
     */
    indicationCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * Indication for use that apply to the specific administration guidelines.
     */
    indicationReference?: fhir.Reference | undefined;
    /**
     * Characteristics of the patient that are relevant to the administration guidelines (for example, height, weight, gender, etc.).
     */
    patientCharacteristics?: fhir.MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics[] | undefined;
}
/**
 * Categorization of the medication within a formulary or classification system.
 */
export interface MedicationKnowledgeMedicineClassification extends fhir.BackboneElement {
    /**
     * The type of category for the medication (for example, therapeutic classification, therapeutic sub-classification).
     */
    type: fhir.CodeableConcept | null;
    /**
     * Specific category assigned to the medication (e.g. anti-infective, anti-hypertensive, antibiotic, etc.).
     */
    classification?: fhir.CodeableConcept[] | undefined;
}
/**
 * Information that only applies to packages (not products).
 */
export interface MedicationKnowledgePackaging extends fhir.BackboneElement {
    /**
     * A code that defines the specific type of packaging that the medication can be found in (e.g. blister sleeve, tube, bottle).
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * The number of product units the package would contain if fully loaded.
     */
    quantity?: fhir.Quantity | undefined;
}
/**
 * Specifies descriptive properties of the medicine, such as color, shape, imprints, etc.
 */
export interface MedicationKnowledgeDrugCharacteristic extends fhir.BackboneElement {
    /**
     * A code specifying which characteristic of the medicine is being described (for example, colour, shape, imprint).
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * The description should be provided as a CodeableConcept, SimpleQuantity or an image.  The description can be a string only when these others are not available.
     */
    valueCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * The description should be provided as a CodeableConcept, SimpleQuantity or an image.  The description can be a string only when these others are not available.
     */
    valueString?: string | undefined;
    /**
     * Extended properties for primitive element: MedicationKnowledge.drugCharacteristic.value[x]
     */
    _valueString?: fhir.FhirElement;
    /**
     * The description should be provided as a CodeableConcept, SimpleQuantity or an image.  The description can be a string only when these others are not available.
     */
    valueQuantity?: fhir.Quantity | undefined;
    /**
     * The description should be provided as a CodeableConcept, SimpleQuantity or an image.  The description can be a string only when these others are not available.
     */
    valueBase64Binary?: string | undefined;
    /**
     * Extended properties for primitive element: MedicationKnowledge.drugCharacteristic.value[x]
     */
    _valueBase64Binary?: fhir.FhirElement;
}
/**
 * Specifies if changes are allowed when dispensing a medication from a regulatory perspective.
 */
export interface MedicationKnowledgeRegulatorySubstitution extends fhir.BackboneElement {
    /**
     * Specifies the type of substitution allowed.
     */
    type: fhir.CodeableConcept | null;
    /**
     * Specifies if regulation allows for changes in the medication when dispensing.
     */
    allowed: boolean | null;
    /**
     * Extended properties for primitive element: MedicationKnowledge.regulatory.substitution.allowed
     */
    _allowed?: fhir.FhirElement;
}
/**
 * Specifies the schedule of a medication in jurisdiction.
 */
export interface MedicationKnowledgeRegulatorySchedule extends fhir.BackboneElement {
    /**
     * Specifies the specific drug schedule.
     */
    schedule: fhir.CodeableConcept | null;
}
/**
 * The maximum number of units of the medication that can be dispensed in a period.
 */
export interface MedicationKnowledgeRegulatoryMaxDispense extends fhir.BackboneElement {
    /**
     * The maximum number of units of the medication that can be dispensed.
     */
    quantity: fhir.Quantity | null;
    /**
     * The period that applies to the maximum number of units.
     */
    period?: fhir.Duration | undefined;
}
/**
 * Regulatory information about a medication.
 */
export interface MedicationKnowledgeRegulatory extends fhir.BackboneElement {
    /**
     * The authority that is specifying the regulations.
     */
    regulatoryAuthority: fhir.Reference | null;
    /**
     * Specifies if changes are allowed when dispensing a medication from a regulatory perspective.
     */
    substitution?: fhir.MedicationKnowledgeRegulatorySubstitution[] | undefined;
    /**
     * Specifies the schedule of a medication in jurisdiction.
     */
    schedule?: fhir.MedicationKnowledgeRegulatorySchedule[] | undefined;
    /**
     * The maximum number of units of the medication that can be dispensed in a period.
     */
    maxDispense?: fhir.MedicationKnowledgeRegulatoryMaxDispense | undefined;
}
/**
 * The time course of drug absorption, distribution, metabolism and excretion of a medication from the body.
 */
export interface MedicationKnowledgeKinetics extends fhir.BackboneElement {
    /**
     * The drug concentration measured at certain discrete points in time.
     */
    areaUnderCurve?: fhir.Quantity[] | undefined;
    /**
     * The median lethal dose of a drug.
     */
    lethalDose50?: fhir.Quantity[] | undefined;
    /**
     * The time required for any specified property (e.g., the concentration of a substance in the body) to decrease by half.
     */
    halfLifePeriod?: fhir.Duration | undefined;
}
/**
 * Information about a medication that is used to support knowledge.
 */
export interface MedicationKnowledge extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "MedicationKnowledge";
    /**
     * Depending on the context of use, the code that was actually selected by the user (prescriber, dispenser, etc.) will have the coding.userSelected set to true.  As described in the coding datatype: "A coding may be marked as a "userSelected" if a user selected the particular coded value in a user interface (e.g. the user selects an item in a pick-list). If a user selected coding exists, it is the preferred choice for performing translations etc. Other codes can only be literal translations to alternative code systems, or codes at a lower level of granularity (e.g. a generic code for a vendor-specific primary one).
     */
    code?: fhir.CodeableConcept | undefined;
    /**
     * This status is intended to identify if the medication in a local system is in active use within a drug database or inventory.  For example, a pharmacy system may create a new drug file record for a compounded product "ABC Hospital Special Cream" with an active status.  At some point in the future, it may be determined that the drug record was created with an error and the status is changed to "entered in error".   This status is not intended to specify if a medication is part of a particular formulary.  It is possible that the drug record may be referenced by multiple formularies or catalogues and each of those entries would have a separate status.
     */
    status?: 'active' | 'entered-in-error' | 'inactive' | undefined;
    /**
     * Extended properties for primitive element: MedicationKnowledge.status
     */
    _status?: fhir.FhirElement;
    /**
     * Describes the details of the manufacturer of the medication product.  This is not intended to represent the distributor of a medication product.
     */
    manufacturer?: fhir.Reference | undefined;
    /**
     * When Medication is referenced from MedicationRequest, this is the ordered form.  When Medication is referenced within MedicationDispense, this is the dispensed form.  When Medication is referenced within MedicationAdministration, this is administered form.
     */
    doseForm?: fhir.CodeableConcept | undefined;
    /**
     * This is the quantity of medication in a package.  To specify the strength of the medication, the Ingredient.strength attribute is used.
     */
    amount?: fhir.Quantity | undefined;
    /**
     * Additional names for a medication, for example, the name(s) given to a medication in different countries.  For example, acetaminophen and paracetamol or salbutamol and albuterol.
     */
    synonym?: string[] | undefined;
    /**
     * Extended properties for primitive element: MedicationKnowledge.synonym
     */
    _synonym?: (fhir.FhirElement | null)[];
    /**
     * Associated or related knowledge about a medication.
     */
    relatedMedicationKnowledge?: fhir.MedicationKnowledgeRelatedMedicationKnowledge[] | undefined;
    /**
     * Associated or related medications.  For example, if the medication is a branded product (e.g. Crestor), this is the Therapeutic Moeity (e.g. Rosuvastatin) or if this is a generic medication (e.g. Rosuvastatin), this would link to a branded product (e.g. Crestor).
     */
    associatedMedication?: fhir.Reference[] | undefined;
    /**
     * Category of the medication or product (e.g. branded product, therapeutic moeity, generic product, innovator product, etc.).
     */
    productType?: fhir.CodeableConcept[] | undefined;
    /**
     * Associated documentation about the medication.
     */
    monograph?: fhir.MedicationKnowledgeMonograph[] | undefined;
    /**
     * Identifies a particular constituent of interest in the product.
     */
    ingredient?: fhir.MedicationKnowledgeIngredient[] | undefined;
    /**
     * The instructions for preparing the medication.
     */
    preparationInstruction?: string | undefined;
    /**
     * Extended properties for primitive element: MedicationKnowledge.preparationInstruction
     */
    _preparationInstruction?: fhir.FhirElement;
    /**
     * The intended or approved route of administration.
     */
    intendedRoute?: fhir.CodeableConcept[] | undefined;
    /**
     * The price of the medication.
     */
    cost?: fhir.MedicationKnowledgeCost[] | undefined;
    /**
     * The program under which the medication is reviewed.
     */
    monitoringProgram?: fhir.MedicationKnowledgeMonitoringProgram[] | undefined;
    /**
     * Guidelines for the administration of the medication.
     */
    administrationGuidelines?: fhir.MedicationKnowledgeAdministrationGuidelines[] | undefined;
    /**
     * Categorization of the medication within a formulary or classification system.
     */
    medicineClassification?: fhir.MedicationKnowledgeMedicineClassification[] | undefined;
    /**
     * Information that only applies to packages (not products).
     */
    packaging?: fhir.MedicationKnowledgePackaging | undefined;
    /**
     * Specifies descriptive properties of the medicine, such as color, shape, imprints, etc.
     */
    drugCharacteristic?: fhir.MedicationKnowledgeDrugCharacteristic[] | undefined;
    /**
     * Potential clinical issue with or between medication(s) (for example, drug-drug interaction, drug-disease contraindication, drug-allergy interaction, etc.).
     */
    contraindication?: fhir.Reference[] | undefined;
    /**
     * Regulatory information about a medication.
     */
    regulatory?: fhir.MedicationKnowledgeRegulatory[] | undefined;
    /**
     * The time course of drug absorption, distribution, metabolism and excretion of a medication from the body.
     */
    kinetics?: fhir.MedicationKnowledgeKinetics[] | undefined;
}
//# sourceMappingURL=MedicationKnowledge.d.ts.map