import * as fhir from '../fhir.js';
import { NutritionOrderStatusCodeType } from '../fhirValueSets/NutritionOrderStatusCodes.js';
/**
 * Valid arguments for the NutritionOrderOralDietNutrient type.
 */
export interface NutritionOrderOralDietNutrientArgs extends fhir.BackboneElementArgs {
    /**
     * The nutrient that is being modified such as carbohydrate or sodium.
     */
    modifier?: fhir.CodeableConceptArgs | undefined;
    /**
     * The quantity of the specified nutrient to include in diet.
     */
    amount?: fhir.QuantityArgs | undefined;
}
/**
 * Class that defines the quantity and type of nutrient modifications required for the oral diet.
 */
export declare class NutritionOrderOralDietNutrient extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The nutrient that is being modified such as carbohydrate or sodium.
     */
    modifier?: fhir.CodeableConcept | undefined;
    /**
     * The quantity of the specified nutrient to include in diet.
     */
    amount?: fhir.Quantity | undefined;
    /**
     * Default constructor for NutritionOrderOralDietNutrient - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<NutritionOrderOralDietNutrientArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the NutritionOrderOralDietTexture type.
 */
export interface NutritionOrderOralDietTextureArgs extends fhir.BackboneElementArgs {
    /**
     * Any texture modifications (for solid foods) that should be made, e.g. easy to chew, chopped, ground, and pureed.
     */
    modifier?: fhir.CodeableConceptArgs | undefined;
    /**
     * The food type(s) (e.g. meats, all foods)  that the texture modification applies to.  This could be all foods types.
     */
    foodType?: fhir.CodeableConceptArgs | undefined;
}
/**
 * Class that describes any texture modifications required for the patient to safely consume various types of solid foods.
 */
export declare class NutritionOrderOralDietTexture extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Any texture modifications (for solid foods) that should be made, e.g. easy to chew, chopped, ground, and pureed.
     */
    modifier?: fhir.CodeableConcept | undefined;
    /**
     * The food type(s) (e.g. meats, all foods)  that the texture modification applies to.  This could be all foods types.
     */
    foodType?: fhir.CodeableConcept | undefined;
    /**
     * Default constructor for NutritionOrderOralDietTexture - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<NutritionOrderOralDietTextureArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the NutritionOrderOralDiet type.
 */
export interface NutritionOrderOralDietArgs extends fhir.BackboneElementArgs {
    /**
     * The kind of diet or dietary restriction such as fiber restricted diet or diabetic diet.
     */
    type?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * The time period and frequency at which the diet should be given.
     */
    schedule?: fhir.TimingArgs[] | undefined;
    /**
     * Class that defines the quantity and type of nutrient modifications required for the oral diet.
     */
    nutrient?: fhir.NutritionOrderOralDietNutrientArgs[] | undefined;
    /**
     * Class that describes any texture modifications required for the patient to safely consume various types of solid foods.
     */
    texture?: fhir.NutritionOrderOralDietTextureArgs[] | undefined;
    /**
     * The required consistency (e.g. honey-thick, nectar-thick, thin, thickened.) of liquids or fluids served to the patient.
     */
    fluidConsistencyType?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Free text or additional instructions or information pertaining to the oral diet.
     */
    instruction?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: NutritionOrder.oralDiet.instruction
     */
    _instruction?: fhir.FhirElementArgs;
}
/**
 * Diet given orally in contrast to enteral (tube) feeding.
 */
export declare class NutritionOrderOralDiet extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The kind of diet or dietary restriction such as fiber restricted diet or diabetic diet.
     */
    type: fhir.CodeableConcept[];
    /**
     * The time period and frequency at which the diet should be given.
     */
    schedule: fhir.Timing[];
    /**
     * Class that defines the quantity and type of nutrient modifications required for the oral diet.
     */
    nutrient: fhir.NutritionOrderOralDietNutrient[];
    /**
     * Class that describes any texture modifications required for the patient to safely consume various types of solid foods.
     */
    texture: fhir.NutritionOrderOralDietTexture[];
    /**
     * The required consistency (e.g. honey-thick, nectar-thick, thin, thickened.) of liquids or fluids served to the patient.
     */
    fluidConsistencyType: fhir.CodeableConcept[];
    /**
     * Free text or additional instructions or information pertaining to the oral diet.
     */
    instruction?: fhir.FhirString | undefined;
    /**
     * Default constructor for NutritionOrderOralDiet - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<NutritionOrderOralDietArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the NutritionOrderSupplement type.
 */
export interface NutritionOrderSupplementArgs extends fhir.BackboneElementArgs {
    /**
     * The kind of nutritional supplement product required such as a high protein or pediatric clear liquid supplement.
     */
    type?: fhir.CodeableConceptArgs | undefined;
    /**
     * The product or brand name of the nutritional supplement such as "Acme Protein Shake".
     */
    productName?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: NutritionOrder.supplement.productName
     */
    _productName?: fhir.FhirElementArgs;
    /**
     * The time period and frequency at which the supplement(s) should be given.
     */
    schedule?: fhir.TimingArgs[] | undefined;
    /**
     * The amount of the nutritional supplement to be given.
     */
    quantity?: fhir.QuantityArgs | undefined;
    /**
     * Free text or additional instructions or information pertaining to the oral supplement.
     */
    instruction?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: NutritionOrder.supplement.instruction
     */
    _instruction?: fhir.FhirElementArgs;
}
/**
 * Oral nutritional products given in order to add further nutritional value to the patient's diet.
 */
export declare class NutritionOrderSupplement extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The kind of nutritional supplement product required such as a high protein or pediatric clear liquid supplement.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * The product or brand name of the nutritional supplement such as "Acme Protein Shake".
     */
    productName?: fhir.FhirString | undefined;
    /**
     * The time period and frequency at which the supplement(s) should be given.
     */
    schedule: fhir.Timing[];
    /**
     * The amount of the nutritional supplement to be given.
     */
    quantity?: fhir.Quantity | undefined;
    /**
     * Free text or additional instructions or information pertaining to the oral supplement.
     */
    instruction?: fhir.FhirString | undefined;
    /**
     * Default constructor for NutritionOrderSupplement - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<NutritionOrderSupplementArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the NutritionOrderEnteralFormulaAdministration type.
 */
export interface NutritionOrderEnteralFormulaAdministrationArgs extends fhir.BackboneElementArgs {
    /**
     * The time period and frequency at which the enteral formula should be delivered to the patient.
     */
    schedule?: fhir.TimingArgs | undefined;
    /**
     * The volume of formula to provide to the patient per the specified administration schedule.
     */
    quantity?: fhir.QuantityArgs | undefined;
    /**
     * The rate of administration of formula via a feeding pump, e.g. 60 mL per hour, according to the specified schedule.
     */
    rate?: fhir.Quantity | fhir.Ratio | undefined;
    /**
     * The rate of administration of formula via a feeding pump, e.g. 60 mL per hour, according to the specified schedule.
     */
    rateQuantity?: fhir.QuantityArgs | undefined;
    /**
     * The rate of administration of formula via a feeding pump, e.g. 60 mL per hour, according to the specified schedule.
     */
    rateRatio?: fhir.RatioArgs | undefined;
}
/**
 * Formula administration instructions as structured data.  This repeating structure allows for changing the administration rate or volume over time for both bolus and continuous feeding.  An example of this would be an instruction to increase the rate of continuous feeding every 2 hours.
 */
export declare class NutritionOrderEnteralFormulaAdministration extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The time period and frequency at which the enteral formula should be delivered to the patient.
     */
    schedule?: fhir.Timing | undefined;
    /**
     * The volume of formula to provide to the patient per the specified administration schedule.
     */
    quantity?: fhir.Quantity | undefined;
    /**
     * The rate of administration of formula via a feeding pump, e.g. 60 mL per hour, according to the specified schedule.
     */
    rate?: (fhir.Quantity | fhir.Ratio) | undefined;
    /**
     * Internal flag to properly serialize choice-type element NutritionOrder.enteralFormula.administration.rate[x]
     */
    protected static readonly _fts_rateIsChoice: true;
    /**
     * Default constructor for NutritionOrderEnteralFormulaAdministration - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<NutritionOrderEnteralFormulaAdministrationArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the NutritionOrderEnteralFormula type.
 */
export interface NutritionOrderEnteralFormulaArgs extends fhir.BackboneElementArgs {
    /**
     * The type of enteral or infant formula such as an adult standard formula with fiber or a soy-based infant formula.
     */
    baseFormulaType?: fhir.CodeableConceptArgs | undefined;
    /**
     * The product or brand name of the enteral or infant formula product such as "ACME Adult Standard Formula".
     */
    baseFormulaProductName?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: NutritionOrder.enteralFormula.baseFormulaProductName
     */
    _baseFormulaProductName?: fhir.FhirElementArgs;
    /**
     * Indicates the type of modular component such as protein, carbohydrate, fat or fiber to be provided in addition to or mixed with the base formula.
     */
    additiveType?: fhir.CodeableConceptArgs | undefined;
    /**
     * The product or brand name of the type of modular component to be added to the formula.
     */
    additiveProductName?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: NutritionOrder.enteralFormula.additiveProductName
     */
    _additiveProductName?: fhir.FhirElementArgs;
    /**
     * The amount of energy (Calories) that the formula should provide per specified volume, typically per mL or fluid oz.  For example, an infant may require a formula that provides 24 Calories per fluid ounce or an adult may require an enteral formula that provides 1.5 Calorie/mL.
     */
    caloricDensity?: fhir.QuantityArgs | undefined;
    /**
     * The route or physiological path of administration into the patient's gastrointestinal  tract for purposes of providing the formula feeding, e.g. nasogastric tube.
     */
    routeofAdministration?: fhir.CodeableConceptArgs | undefined;
    /**
     * Formula administration instructions as structured data.  This repeating structure allows for changing the administration rate or volume over time for both bolus and continuous feeding.  An example of this would be an instruction to increase the rate of continuous feeding every 2 hours.
     */
    administration?: fhir.NutritionOrderEnteralFormulaAdministrationArgs[] | undefined;
    /**
     * The maximum total quantity of formula that may be administered to a subject over the period of time, e.g. 1440 mL over 24 hours.
     */
    maxVolumeToDeliver?: fhir.QuantityArgs | undefined;
    /**
     * Free text formula administration, feeding instructions or additional instructions or information.
     */
    administrationInstruction?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: NutritionOrder.enteralFormula.administrationInstruction
     */
    _administrationInstruction?: fhir.FhirElementArgs;
}
/**
 * Feeding provided through the gastrointestinal tract via a tube, catheter, or stoma that delivers nutrition distal to the oral cavity.
 */
export declare class NutritionOrderEnteralFormula extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The type of enteral or infant formula such as an adult standard formula with fiber or a soy-based infant formula.
     */
    baseFormulaType?: fhir.CodeableConcept | undefined;
    /**
     * The product or brand name of the enteral or infant formula product such as "ACME Adult Standard Formula".
     */
    baseFormulaProductName?: fhir.FhirString | undefined;
    /**
     * Indicates the type of modular component such as protein, carbohydrate, fat or fiber to be provided in addition to or mixed with the base formula.
     */
    additiveType?: fhir.CodeableConcept | undefined;
    /**
     * The product or brand name of the type of modular component to be added to the formula.
     */
    additiveProductName?: fhir.FhirString | undefined;
    /**
     * The amount of energy (Calories) that the formula should provide per specified volume, typically per mL or fluid oz.  For example, an infant may require a formula that provides 24 Calories per fluid ounce or an adult may require an enteral formula that provides 1.5 Calorie/mL.
     */
    caloricDensity?: fhir.Quantity | undefined;
    /**
     * The route or physiological path of administration into the patient's gastrointestinal  tract for purposes of providing the formula feeding, e.g. nasogastric tube.
     */
    routeofAdministration?: fhir.CodeableConcept | undefined;
    /**
     * Formula administration instructions as structured data.  This repeating structure allows for changing the administration rate or volume over time for both bolus and continuous feeding.  An example of this would be an instruction to increase the rate of continuous feeding every 2 hours.
     */
    administration: fhir.NutritionOrderEnteralFormulaAdministration[];
    /**
     * The maximum total quantity of formula that may be administered to a subject over the period of time, e.g. 1440 mL over 24 hours.
     */
    maxVolumeToDeliver?: fhir.Quantity | undefined;
    /**
     * Free text formula administration, feeding instructions or additional instructions or information.
     */
    administrationInstruction?: fhir.FhirString | undefined;
    /**
     * Default constructor for NutritionOrderEnteralFormula - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<NutritionOrderEnteralFormulaArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the NutritionOrder type.
 */
export interface NutritionOrderArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "NutritionOrder" | undefined;
    /**
     * The person (patient) who needs the nutrition order for an oral diet, nutritional supplement and/or enteral or formula feeding.
     */
    patient: fhir.ReferenceArgs | null;
    /**
     * The practitioner that holds legal responsibility for ordering the diet, nutritional supplement, or formula feedings.
     */
    orderer?: fhir.ReferenceArgs | undefined;
    /**
     * Identifiers assigned to this order by the order sender or by the order receiver.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * An encounter that provides additional information about the healthcare context in which this request is made.
     */
    encounter?: fhir.ReferenceArgs | undefined;
    /**
     * The date and time that this nutrition order was requested.
     */
    dateTime: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: NutritionOrder.dateTime
     */
    _dateTime?: fhir.FhirElementArgs;
    /**
     * The workflow status of the nutrition order/request.
     */
    status?: fhir.FhirCode<NutritionOrderStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: NutritionOrder.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * A link to a record of allergies or intolerances  which should be included in the nutrition order.
     */
    allergyIntolerance?: fhir.ReferenceArgs[] | undefined;
    /**
     * This modifier is used to convey order-specific modifiers about the type of food that should be given. These can be derived from patient allergies, intolerances, or preferences such as Halal, Vegan or Kosher. This modifier applies to the entire nutrition order inclusive of the oral diet, nutritional supplements and enteral formula feedings.
     */
    foodPreferenceModifier?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * This modifier is used to convey order-specific modifiers about the type of food that should NOT be given. These can be derived from patient allergies, intolerances, or preferences such as No Red Meat, No Soy or No Wheat or  Gluten-Free.  While it should not be necessary to repeat allergy or intolerance information captured in the referenced allergyIntolerance resource in the excludeFoodModifier, this element may be used to convey additional specificity related to foods that should be eliminated from the patient’s diet for any reason.  This modifier applies to the entire nutrition order inclusive of the oral diet, nutritional supplements and enteral formula feedings.
     */
    excludeFoodModifier?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Diet given orally in contrast to enteral (tube) feeding.
     */
    oralDiet?: fhir.NutritionOrderOralDietArgs | undefined;
    /**
     * Oral nutritional products given in order to add further nutritional value to the patient's diet.
     */
    supplement?: fhir.NutritionOrderSupplementArgs[] | undefined;
    /**
     * Feeding provided through the gastrointestinal tract via a tube, catheter, or stoma that delivers nutrition distal to the oral cavity.
     */
    enteralFormula?: fhir.NutritionOrderEnteralFormulaArgs | undefined;
}
/**
 * A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident.
 */
export declare class NutritionOrder extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "NutritionOrder";
    /**
     * The person (patient) who needs the nutrition order for an oral diet, nutritional supplement and/or enteral or formula feeding.
     */
    patient: fhir.Reference | null;
    /**
     * The practitioner that holds legal responsibility for ordering the diet, nutritional supplement, or formula feedings.
     */
    orderer?: fhir.Reference | undefined;
    /**
     * Identifiers assigned to this order by the order sender or by the order receiver.
     */
    identifier: fhir.Identifier[];
    /**
     * An encounter that provides additional information about the healthcare context in which this request is made.
     */
    encounter?: fhir.Reference | undefined;
    /**
     * The date and time that this nutrition order was requested.
     */
    dateTime: fhir.FhirDateTime | null;
    /**
     * The workflow status of the nutrition order/request.
     */
    status?: fhir.FhirCode<NutritionOrderStatusCodeType> | undefined;
    /**
     * A link to a record of allergies or intolerances  which should be included in the nutrition order.
     */
    allergyIntolerance: fhir.Reference[];
    /**
     * This modifier is used to convey order-specific modifiers about the type of food that should be given. These can be derived from patient allergies, intolerances, or preferences such as Halal, Vegan or Kosher. This modifier applies to the entire nutrition order inclusive of the oral diet, nutritional supplements and enteral formula feedings.
     */
    foodPreferenceModifier: fhir.CodeableConcept[];
    /**
     * This modifier is used to convey order-specific modifiers about the type of food that should NOT be given. These can be derived from patient allergies, intolerances, or preferences such as No Red Meat, No Soy or No Wheat or  Gluten-Free.  While it should not be necessary to repeat allergy or intolerance information captured in the referenced allergyIntolerance resource in the excludeFoodModifier, this element may be used to convey additional specificity related to foods that should be eliminated from the patient’s diet for any reason.  This modifier applies to the entire nutrition order inclusive of the oral diet, nutritional supplements and enteral formula feedings.
     */
    excludeFoodModifier: fhir.CodeableConcept[];
    /**
     * Diet given orally in contrast to enteral (tube) feeding.
     */
    oralDiet?: fhir.NutritionOrderOralDiet | undefined;
    /**
     * Oral nutritional products given in order to add further nutritional value to the patient's diet.
     */
    supplement: fhir.NutritionOrderSupplement[];
    /**
     * Feeding provided through the gastrointestinal tract via a tube, catheter, or stoma that delivers nutrition distal to the oral cavity.
     */
    enteralFormula?: fhir.NutritionOrderEnteralFormula | undefined;
    /**
     * Default constructor for NutritionOrder - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<NutritionOrderArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=NutritionOrder.d.ts.map