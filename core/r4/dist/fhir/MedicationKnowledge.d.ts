import * as fhir from '../fhir.js';
import { MedicationknowledgeStatusCodingType } from '../fhirValueSets/MedicationknowledgeStatusCodings.js';
import { MedicationknowledgeStatusCodeType } from '../fhirValueSets/MedicationknowledgeStatusCodes.js';
/**
 * Valid arguments for the MedicationKnowledgeRelatedMedicationKnowledge type.
 */
export interface MedicationKnowledgeRelatedMedicationKnowledgeArgs extends fhir.BackboneElementArgs {
    /**
     * The category of the associated medication knowledge reference.
     */
    type: fhir.CodeableConceptArgs | null;
    /**
     * Associated documentation about the associated medication knowledge.
     */
    reference: fhir.ReferenceArgs[] | null;
}
/**
 * Associated or related knowledge about a medication.
 */
export declare class MedicationKnowledgeRelatedMedicationKnowledge extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The category of the associated medication knowledge reference.
     */
    type: fhir.CodeableConcept | null;
    /**
     * Associated documentation about the associated medication knowledge.
     */
    reference: fhir.Reference[];
    /**
     * Default constructor for MedicationKnowledgeRelatedMedicationKnowledge - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<MedicationKnowledgeRelatedMedicationKnowledgeArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
}
/**
 * Valid arguments for the MedicationKnowledgeMonograph type.
 */
export interface MedicationKnowledgeMonographArgs extends fhir.BackboneElementArgs {
    /**
     * The category of documentation about the medication. (e.g. professional monograph, patient education monograph).
     */
    type?: fhir.CodeableConceptArgs | undefined;
    /**
     * Associated documentation about the medication.
     */
    source?: fhir.ReferenceArgs | undefined;
}
/**
 * Associated documentation about the medication.
 */
export declare class MedicationKnowledgeMonograph extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The category of documentation about the medication. (e.g. professional monograph, patient education monograph).
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Associated documentation about the medication.
     */
    source?: fhir.Reference | undefined;
    /**
     * Default constructor for MedicationKnowledgeMonograph - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<MedicationKnowledgeMonographArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
}
/**
 * Valid arguments for the MedicationKnowledgeIngredient type.
 */
export interface MedicationKnowledgeIngredientArgs extends fhir.BackboneElementArgs {
    /**
     * The actual ingredient - either a substance (simple ingredient) or another medication.
     */
    item?: fhir.CodeableConcept | fhir.Reference | undefined;
    /**
     * The actual ingredient - either a substance (simple ingredient) or another medication.
     */
    itemCodeableConcept?: fhir.CodeableConceptArgs | undefined;
    /**
     * The actual ingredient - either a substance (simple ingredient) or another medication.
     */
    itemReference?: fhir.ReferenceArgs | undefined;
    /**
     * Indication of whether this ingredient affects the therapeutic action of the drug.
     */
    isActive?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Specifies how many (or how much) of the items there are in this Medication.  For example, 250 mg per tablet.  This is expressed as a ratio where the numerator is 250mg and the denominator is 1 tablet.
     */
    strength?: fhir.RatioArgs | undefined;
}
/**
 * Identifies a particular constituent of interest in the product.
 */
export declare class MedicationKnowledgeIngredient extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The actual ingredient - either a substance (simple ingredient) or another medication.
     */
    item: (fhir.CodeableConcept | fhir.Reference) | null;
    /**
     * Internal flag to properly serialize choice-type element MedicationKnowledge.ingredient.item[x]
     */
    protected static readonly _fts_itemIsChoice: true;
    /**
     * Indication of whether this ingredient affects the therapeutic action of the drug.
     */
    isActive?: fhir.FhirBoolean | undefined;
    /**
     * Specifies how many (or how much) of the items there are in this Medication.  For example, 250 mg per tablet.  This is expressed as a ratio where the numerator is 250mg and the denominator is 1 tablet.
     */
    strength?: fhir.Ratio | undefined;
    /**
     * Default constructor for MedicationKnowledgeIngredient - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<MedicationKnowledgeIngredientArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
}
/**
 * Valid arguments for the MedicationKnowledgeCost type.
 */
export interface MedicationKnowledgeCostArgs extends fhir.BackboneElementArgs {
    /**
     * The category of the cost information.  For example, manufacturers' cost, patient cost, claim reimbursement cost, actual acquisition cost.
     */
    type: fhir.CodeableConceptArgs | null;
    /**
     * The source or owner that assigns the price to the medication.
     */
    source?: fhir.FhirString | string | undefined;
    /**
     * The price of the medication.
     */
    cost: fhir.MoneyArgs | null;
}
/**
 * The price of the medication.
 */
export declare class MedicationKnowledgeCost extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The category of the cost information.  For example, manufacturers' cost, patient cost, claim reimbursement cost, actual acquisition cost.
     */
    type: fhir.CodeableConcept | null;
    /**
     * The source or owner that assigns the price to the medication.
     */
    source?: fhir.FhirString | undefined;
    /**
     * The price of the medication.
     */
    cost: fhir.Money | null;
    /**
     * Default constructor for MedicationKnowledgeCost - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<MedicationKnowledgeCostArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
}
/**
 * Valid arguments for the MedicationKnowledgeMonitoringProgram type.
 */
export interface MedicationKnowledgeMonitoringProgramArgs extends fhir.BackboneElementArgs {
    /**
     * Type of program under which the medication is monitored.
     */
    type?: fhir.CodeableConceptArgs | undefined;
    /**
     * Name of the reviewing program.
     */
    name?: fhir.FhirString | string | undefined;
}
/**
 * The program under which the medication is reviewed.
 */
export declare class MedicationKnowledgeMonitoringProgram extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Type of program under which the medication is monitored.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Name of the reviewing program.
     */
    name?: fhir.FhirString | undefined;
    /**
     * Default constructor for MedicationKnowledgeMonitoringProgram - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<MedicationKnowledgeMonitoringProgramArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
}
/**
 * Valid arguments for the MedicationKnowledgeAdministrationGuidelinesDosage type.
 */
export interface MedicationKnowledgeAdministrationGuidelinesDosageArgs extends fhir.BackboneElementArgs {
    /**
     * The type of dosage (for example, prophylaxis, maintenance, therapeutic, etc.).
     */
    type: fhir.CodeableConceptArgs | null;
    /**
     * Dosage for the medication for the specific guidelines.
     */
    dosage: fhir.DosageArgs[] | null;
}
/**
 * Dosage for the medication for the specific guidelines.
 */
export declare class MedicationKnowledgeAdministrationGuidelinesDosage extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The type of dosage (for example, prophylaxis, maintenance, therapeutic, etc.).
     */
    type: fhir.CodeableConcept | null;
    /**
     * Dosage for the medication for the specific guidelines.
     */
    dosage: fhir.Dosage[];
    /**
     * Default constructor for MedicationKnowledgeAdministrationGuidelinesDosage - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<MedicationKnowledgeAdministrationGuidelinesDosageArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
}
/**
 * Valid arguments for the MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics type.
 */
export interface MedicationKnowledgeAdministrationGuidelinesPatientCharacteristicsArgs extends fhir.BackboneElementArgs {
    /**
     * Specific characteristic that is relevant to the administration guideline (e.g. height, weight, gender).
     */
    characteristic?: fhir.CodeableConcept | fhir.Quantity | undefined;
    /**
     * Specific characteristic that is relevant to the administration guideline (e.g. height, weight, gender).
     */
    characteristicCodeableConcept?: fhir.CodeableConceptArgs | undefined;
    /**
     * Specific characteristic that is relevant to the administration guideline (e.g. height, weight, gender).
     */
    characteristicQuantity?: fhir.QuantityArgs | undefined;
    /**
     * The specific characteristic (e.g. height, weight, gender, etc.).
     */
    value?: fhir.FhirString[] | string[] | undefined;
}
/**
 * Characteristics of the patient that are relevant to the administration guidelines (for example, height, weight, gender, etc.).
 */
export declare class MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Specific characteristic that is relevant to the administration guideline (e.g. height, weight, gender).
     */
    characteristic: (fhir.CodeableConcept | fhir.Quantity) | null;
    /**
     * Internal flag to properly serialize choice-type element MedicationKnowledge.administrationGuidelines.patientCharacteristics.characteristic[x]
     */
    protected static readonly _fts_characteristicIsChoice: true;
    /**
     * The specific characteristic (e.g. height, weight, gender, etc.).
     */
    value?: fhir.FhirString[];
    /**
     * Default constructor for MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<MedicationKnowledgeAdministrationGuidelinesPatientCharacteristicsArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
}
/**
 * Valid arguments for the MedicationKnowledgeAdministrationGuidelines type.
 */
export interface MedicationKnowledgeAdministrationGuidelinesArgs extends fhir.BackboneElementArgs {
    /**
     * Dosage for the medication for the specific guidelines.
     */
    dosage?: fhir.MedicationKnowledgeAdministrationGuidelinesDosageArgs[] | undefined;
    /**
     * Indication for use that apply to the specific administration guidelines.
     */
    indication?: fhir.CodeableConcept | fhir.Reference | undefined;
    /**
     * Indication for use that apply to the specific administration guidelines.
     */
    indicationCodeableConcept?: fhir.CodeableConceptArgs | undefined;
    /**
     * Indication for use that apply to the specific administration guidelines.
     */
    indicationReference?: fhir.ReferenceArgs | undefined;
    /**
     * Characteristics of the patient that are relevant to the administration guidelines (for example, height, weight, gender, etc.).
     */
    patientCharacteristics?: fhir.MedicationKnowledgeAdministrationGuidelinesPatientCharacteristicsArgs[] | undefined;
}
/**
 * Guidelines for the administration of the medication.
 */
export declare class MedicationKnowledgeAdministrationGuidelines extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Dosage for the medication for the specific guidelines.
     */
    dosage?: fhir.MedicationKnowledgeAdministrationGuidelinesDosage[];
    /**
     * Indication for use that apply to the specific administration guidelines.
     */
    indication?: (fhir.CodeableConcept | fhir.Reference) | undefined;
    /**
     * Internal flag to properly serialize choice-type element MedicationKnowledge.administrationGuidelines.indication[x]
     */
    protected static readonly _fts_indicationIsChoice: true;
    /**
     * Characteristics of the patient that are relevant to the administration guidelines (for example, height, weight, gender, etc.).
     */
    patientCharacteristics?: fhir.MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics[];
    /**
     * Default constructor for MedicationKnowledgeAdministrationGuidelines - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<MedicationKnowledgeAdministrationGuidelinesArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
}
/**
 * Valid arguments for the MedicationKnowledgeMedicineClassification type.
 */
export interface MedicationKnowledgeMedicineClassificationArgs extends fhir.BackboneElementArgs {
    /**
     * The type of category for the medication (for example, therapeutic classification, therapeutic sub-classification).
     */
    type: fhir.CodeableConceptArgs | null;
    /**
     * Specific category assigned to the medication (e.g. anti-infective, anti-hypertensive, antibiotic, etc.).
     */
    classification?: fhir.CodeableConceptArgs[] | undefined;
}
/**
 * Categorization of the medication within a formulary or classification system.
 */
export declare class MedicationKnowledgeMedicineClassification extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The type of category for the medication (for example, therapeutic classification, therapeutic sub-classification).
     */
    type: fhir.CodeableConcept | null;
    /**
     * Specific category assigned to the medication (e.g. anti-infective, anti-hypertensive, antibiotic, etc.).
     */
    classification?: fhir.CodeableConcept[];
    /**
     * Default constructor for MedicationKnowledgeMedicineClassification - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<MedicationKnowledgeMedicineClassificationArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
}
/**
 * Valid arguments for the MedicationKnowledgePackaging type.
 */
export interface MedicationKnowledgePackagingArgs extends fhir.BackboneElementArgs {
    /**
     * A code that defines the specific type of packaging that the medication can be found in (e.g. blister sleeve, tube, bottle).
     */
    type?: fhir.CodeableConceptArgs | undefined;
    /**
     * The number of product units the package would contain if fully loaded.
     */
    quantity?: fhir.QuantityArgs | undefined;
}
/**
 * Information that only applies to packages (not products).
 */
export declare class MedicationKnowledgePackaging extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * A code that defines the specific type of packaging that the medication can be found in (e.g. blister sleeve, tube, bottle).
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * The number of product units the package would contain if fully loaded.
     */
    quantity?: fhir.Quantity | undefined;
    /**
     * Default constructor for MedicationKnowledgePackaging - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<MedicationKnowledgePackagingArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
}
/**
 * Valid arguments for the MedicationKnowledgeDrugCharacteristic type.
 */
export interface MedicationKnowledgeDrugCharacteristicArgs extends fhir.BackboneElementArgs {
    /**
     * A code specifying which characteristic of the medicine is being described (for example, colour, shape, imprint).
     */
    type?: fhir.CodeableConceptArgs | undefined;
    /**
     * The description should be provided as a CodeableConcept, SimpleQuantity or an image.  The description can be a string only when these others are not available.
     */
    value?: fhir.CodeableConcept | fhir.FhirString | fhir.Quantity | fhir.FhirBase64Binary | undefined;
    /**
     * The description should be provided as a CodeableConcept, SimpleQuantity or an image.  The description can be a string only when these others are not available.
     */
    valueCodeableConcept?: fhir.CodeableConceptArgs | undefined;
    /**
     * The description should be provided as a CodeableConcept, SimpleQuantity or an image.  The description can be a string only when these others are not available.
     */
    valueString?: fhir.FhirString | string | undefined;
    /**
     * The description should be provided as a CodeableConcept, SimpleQuantity or an image.  The description can be a string only when these others are not available.
     */
    valueQuantity?: fhir.QuantityArgs | undefined;
    /**
     * The description should be provided as a CodeableConcept, SimpleQuantity or an image.  The description can be a string only when these others are not available.
     */
    valueBase64Binary?: fhir.FhirBase64Binary | string | undefined;
}
/**
 * Specifies descriptive properties of the medicine, such as color, shape, imprints, etc.
 */
export declare class MedicationKnowledgeDrugCharacteristic extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * A code specifying which characteristic of the medicine is being described (for example, colour, shape, imprint).
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * The description should be provided as a CodeableConcept, SimpleQuantity or an image.  The description can be a string only when these others are not available.
     */
    value?: (fhir.CodeableConcept | fhir.FhirString | fhir.Quantity | fhir.FhirBase64Binary) | undefined;
    /**
     * Internal flag to properly serialize choice-type element MedicationKnowledge.drugCharacteristic.value[x]
     */
    protected static readonly _fts_valueIsChoice: true;
    /**
     * Default constructor for MedicationKnowledgeDrugCharacteristic - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<MedicationKnowledgeDrugCharacteristicArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
}
/**
 * Valid arguments for the MedicationKnowledgeRegulatorySubstitution type.
 */
export interface MedicationKnowledgeRegulatorySubstitutionArgs extends fhir.BackboneElementArgs {
    /**
     * Specifies the type of substitution allowed.
     */
    type: fhir.CodeableConceptArgs | null;
    /**
     * Specifies if regulation allows for changes in the medication when dispensing.
     */
    allowed: fhir.FhirBoolean | boolean | undefined;
}
/**
 * Specifies if changes are allowed when dispensing a medication from a regulatory perspective.
 */
export declare class MedicationKnowledgeRegulatorySubstitution extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Specifies the type of substitution allowed.
     */
    type: fhir.CodeableConcept | null;
    /**
     * Specifies if regulation allows for changes in the medication when dispensing.
     */
    allowed: fhir.FhirBoolean | null;
    /**
     * Default constructor for MedicationKnowledgeRegulatorySubstitution - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<MedicationKnowledgeRegulatorySubstitutionArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
}
/**
 * Valid arguments for the MedicationKnowledgeRegulatorySchedule type.
 */
export interface MedicationKnowledgeRegulatoryScheduleArgs extends fhir.BackboneElementArgs {
    /**
     * Specifies the specific drug schedule.
     */
    schedule: fhir.CodeableConceptArgs | null;
}
/**
 * Specifies the schedule of a medication in jurisdiction.
 */
export declare class MedicationKnowledgeRegulatorySchedule extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Specifies the specific drug schedule.
     */
    schedule: fhir.CodeableConcept | null;
    /**
     * Default constructor for MedicationKnowledgeRegulatorySchedule - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<MedicationKnowledgeRegulatoryScheduleArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
}
/**
 * Valid arguments for the MedicationKnowledgeRegulatoryMaxDispense type.
 */
export interface MedicationKnowledgeRegulatoryMaxDispenseArgs extends fhir.BackboneElementArgs {
    /**
     * The maximum number of units of the medication that can be dispensed.
     */
    quantity: fhir.QuantityArgs | null;
    /**
     * The period that applies to the maximum number of units.
     */
    period?: fhir.DurationArgs | undefined;
}
/**
 * The maximum number of units of the medication that can be dispensed in a period.
 */
export declare class MedicationKnowledgeRegulatoryMaxDispense extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The maximum number of units of the medication that can be dispensed.
     */
    quantity: fhir.Quantity | null;
    /**
     * The period that applies to the maximum number of units.
     */
    period?: fhir.Duration | undefined;
    /**
     * Default constructor for MedicationKnowledgeRegulatoryMaxDispense - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<MedicationKnowledgeRegulatoryMaxDispenseArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
}
/**
 * Valid arguments for the MedicationKnowledgeRegulatory type.
 */
export interface MedicationKnowledgeRegulatoryArgs extends fhir.BackboneElementArgs {
    /**
     * The authority that is specifying the regulations.
     */
    regulatoryAuthority: fhir.ReferenceArgs | null;
    /**
     * Specifies if changes are allowed when dispensing a medication from a regulatory perspective.
     */
    substitution?: fhir.MedicationKnowledgeRegulatorySubstitutionArgs[] | undefined;
    /**
     * Specifies the schedule of a medication in jurisdiction.
     */
    schedule?: fhir.MedicationKnowledgeRegulatoryScheduleArgs[] | undefined;
    /**
     * The maximum number of units of the medication that can be dispensed in a period.
     */
    maxDispense?: fhir.MedicationKnowledgeRegulatoryMaxDispenseArgs | undefined;
}
/**
 * Regulatory information about a medication.
 */
export declare class MedicationKnowledgeRegulatory extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The authority that is specifying the regulations.
     */
    regulatoryAuthority: fhir.Reference | null;
    /**
     * Specifies if changes are allowed when dispensing a medication from a regulatory perspective.
     */
    substitution?: fhir.MedicationKnowledgeRegulatorySubstitution[];
    /**
     * Specifies the schedule of a medication in jurisdiction.
     */
    schedule?: fhir.MedicationKnowledgeRegulatorySchedule[];
    /**
     * The maximum number of units of the medication that can be dispensed in a period.
     */
    maxDispense?: fhir.MedicationKnowledgeRegulatoryMaxDispense | undefined;
    /**
     * Default constructor for MedicationKnowledgeRegulatory - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<MedicationKnowledgeRegulatoryArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
}
/**
 * Valid arguments for the MedicationKnowledgeKinetics type.
 */
export interface MedicationKnowledgeKineticsArgs extends fhir.BackboneElementArgs {
    /**
     * The drug concentration measured at certain discrete points in time.
     */
    areaUnderCurve?: fhir.QuantityArgs[] | undefined;
    /**
     * The median lethal dose of a drug.
     */
    lethalDose50?: fhir.QuantityArgs[] | undefined;
    /**
     * The time required for any specified property (e.g., the concentration of a substance in the body) to decrease by half.
     */
    halfLifePeriod?: fhir.DurationArgs | undefined;
}
/**
 * The time course of drug absorption, distribution, metabolism and excretion of a medication from the body.
 */
export declare class MedicationKnowledgeKinetics extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The drug concentration measured at certain discrete points in time.
     */
    areaUnderCurve?: fhir.Quantity[];
    /**
     * The median lethal dose of a drug.
     */
    lethalDose50?: fhir.Quantity[];
    /**
     * The time required for any specified property (e.g., the concentration of a substance in the body) to decrease by half.
     */
    halfLifePeriod?: fhir.Duration | undefined;
    /**
     * Default constructor for MedicationKnowledgeKinetics - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<MedicationKnowledgeKineticsArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
}
/**
 * Valid arguments for the MedicationKnowledge type.
 */
export interface MedicationKnowledgeArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "MedicationKnowledge" | undefined;
    /**
     * Depending on the context of use, the code that was actually selected by the user (prescriber, dispenser, etc.) will have the coding.userSelected set to true.  As described in the coding datatype: "A coding may be marked as a "userSelected" if a user selected the particular coded value in a user interface (e.g. the user selects an item in a pick-list). If a user selected coding exists, it is the preferred choice for performing translations etc. Other codes can only be literal translations to alternative code systems, or codes at a lower level of granularity (e.g. a generic code for a vendor-specific primary one).
     */
    code?: fhir.CodeableConceptArgs | undefined;
    /**
     * This status is intended to identify if the medication in a local system is in active use within a drug database or inventory.  For example, a pharmacy system may create a new drug file record for a compounded product "ABC Hospital Special Cream" with an active status.  At some point in the future, it may be determined that the drug record was created with an error and the status is changed to "entered in error".   This status is not intended to specify if a medication is part of a particular formulary.  It is possible that the drug record may be referenced by multiple formularies or catalogues and each of those entries would have a separate status.
     */
    status?: MedicationknowledgeStatusCodeType | undefined;
    /**
     * Describes the details of the manufacturer of the medication product.  This is not intended to represent the distributor of a medication product.
     */
    manufacturer?: fhir.ReferenceArgs | undefined;
    /**
     * When Medication is referenced from MedicationRequest, this is the ordered form.  When Medication is referenced within MedicationDispense, this is the dispensed form.  When Medication is referenced within MedicationAdministration, this is administered form.
     */
    doseForm?: fhir.CodeableConceptArgs | undefined;
    /**
     * This is the quantity of medication in a package.  To specify the strength of the medication, the Ingredient.strength attribute is used.
     */
    amount?: fhir.QuantityArgs | undefined;
    /**
     * Additional names for a medication, for example, the name(s) given to a medication in different countries.  For example, acetaminophen and paracetamol or salbutamol and albuterol.
     */
    synonym?: fhir.FhirString[] | string[] | undefined;
    /**
     * Associated or related knowledge about a medication.
     */
    relatedMedicationKnowledge?: fhir.MedicationKnowledgeRelatedMedicationKnowledgeArgs[] | undefined;
    /**
     * Associated or related medications.  For example, if the medication is a branded product (e.g. Crestor), this is the Therapeutic Moeity (e.g. Rosuvastatin) or if this is a generic medication (e.g. Rosuvastatin), this would link to a branded product (e.g. Crestor).
     */
    associatedMedication?: fhir.ReferenceArgs[] | undefined;
    /**
     * Category of the medication or product (e.g. branded product, therapeutic moeity, generic product, innovator product, etc.).
     */
    productType?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Associated documentation about the medication.
     */
    monograph?: fhir.MedicationKnowledgeMonographArgs[] | undefined;
    /**
     * Identifies a particular constituent of interest in the product.
     */
    ingredient?: fhir.MedicationKnowledgeIngredientArgs[] | undefined;
    /**
     * The instructions for preparing the medication.
     */
    preparationInstruction?: fhir.FhirMarkdown | string | undefined;
    /**
     * The intended or approved route of administration.
     */
    intendedRoute?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * The price of the medication.
     */
    cost?: fhir.MedicationKnowledgeCostArgs[] | undefined;
    /**
     * The program under which the medication is reviewed.
     */
    monitoringProgram?: fhir.MedicationKnowledgeMonitoringProgramArgs[] | undefined;
    /**
     * Guidelines for the administration of the medication.
     */
    administrationGuidelines?: fhir.MedicationKnowledgeAdministrationGuidelinesArgs[] | undefined;
    /**
     * Categorization of the medication within a formulary or classification system.
     */
    medicineClassification?: fhir.MedicationKnowledgeMedicineClassificationArgs[] | undefined;
    /**
     * Information that only applies to packages (not products).
     */
    packaging?: fhir.MedicationKnowledgePackagingArgs | undefined;
    /**
     * Specifies descriptive properties of the medicine, such as color, shape, imprints, etc.
     */
    drugCharacteristic?: fhir.MedicationKnowledgeDrugCharacteristicArgs[] | undefined;
    /**
     * Potential clinical issue with or between medication(s) (for example, drug-drug interaction, drug-disease contraindication, drug-allergy interaction, etc.).
     */
    contraindication?: fhir.ReferenceArgs[] | undefined;
    /**
     * Regulatory information about a medication.
     */
    regulatory?: fhir.MedicationKnowledgeRegulatoryArgs[] | undefined;
    /**
     * The time course of drug absorption, distribution, metabolism and excretion of a medication from the body.
     */
    kinetics?: fhir.MedicationKnowledgeKineticsArgs[] | undefined;
}
/**
 * Information about a medication that is used to support knowledge.
 */
export declare class MedicationKnowledge extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
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
    status?: MedicationknowledgeStatusCodeType | undefined;
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
    synonym?: fhir.FhirString[];
    /**
     * Associated or related knowledge about a medication.
     */
    relatedMedicationKnowledge?: fhir.MedicationKnowledgeRelatedMedicationKnowledge[];
    /**
     * Associated or related medications.  For example, if the medication is a branded product (e.g. Crestor), this is the Therapeutic Moeity (e.g. Rosuvastatin) or if this is a generic medication (e.g. Rosuvastatin), this would link to a branded product (e.g. Crestor).
     */
    associatedMedication?: fhir.Reference[];
    /**
     * Category of the medication or product (e.g. branded product, therapeutic moeity, generic product, innovator product, etc.).
     */
    productType?: fhir.CodeableConcept[];
    /**
     * Associated documentation about the medication.
     */
    monograph?: fhir.MedicationKnowledgeMonograph[];
    /**
     * Identifies a particular constituent of interest in the product.
     */
    ingredient?: fhir.MedicationKnowledgeIngredient[];
    /**
     * The instructions for preparing the medication.
     */
    preparationInstruction?: fhir.FhirMarkdown | undefined;
    /**
     * The intended or approved route of administration.
     */
    intendedRoute?: fhir.CodeableConcept[];
    /**
     * The price of the medication.
     */
    cost?: fhir.MedicationKnowledgeCost[];
    /**
     * The program under which the medication is reviewed.
     */
    monitoringProgram?: fhir.MedicationKnowledgeMonitoringProgram[];
    /**
     * Guidelines for the administration of the medication.
     */
    administrationGuidelines?: fhir.MedicationKnowledgeAdministrationGuidelines[];
    /**
     * Categorization of the medication within a formulary or classification system.
     */
    medicineClassification?: fhir.MedicationKnowledgeMedicineClassification[];
    /**
     * Information that only applies to packages (not products).
     */
    packaging?: fhir.MedicationKnowledgePackaging | undefined;
    /**
     * Specifies descriptive properties of the medicine, such as color, shape, imprints, etc.
     */
    drugCharacteristic?: fhir.MedicationKnowledgeDrugCharacteristic[];
    /**
     * Potential clinical issue with or between medication(s) (for example, drug-drug interaction, drug-disease contraindication, drug-allergy interaction, etc.).
     */
    contraindication?: fhir.Reference[];
    /**
     * Regulatory information about a medication.
     */
    regulatory?: fhir.MedicationKnowledgeRegulatory[];
    /**
     * The time course of drug absorption, distribution, metabolism and excretion of a medication from the body.
     */
    kinetics?: fhir.MedicationKnowledgeKinetics[];
    /**
     * Default constructor for MedicationKnowledge - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<MedicationKnowledgeArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for status (MedicationKnowledge.status)
     */
    static statusRequiredCoding(): MedicationknowledgeStatusCodingType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
}
//# sourceMappingURL=MedicationKnowledge.d.ts.map