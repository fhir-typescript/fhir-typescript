import * as fhir from '../fhirJson.js';
/**
 * Class that defines the quantity and type of nutrient modifications required for the oral diet.
 */
export interface NutritionOrderOralDietNutrient extends fhir.BackboneElement {
    /**
     * The nutrient that is being modified such as carbohydrate or sodium.
     */
    modifier?: fhir.CodeableConcept | undefined;
    /**
     * The quantity of the specified nutrient to include in diet.
     */
    amount?: fhir.Quantity | undefined;
}
/**
 * Class that describes any texture modifications required for the patient to safely consume various types of solid foods.
 */
export interface NutritionOrderOralDietTexture extends fhir.BackboneElement {
    /**
     * Any texture modifications (for solid foods) that should be made, e.g. easy to chew, chopped, ground, and pureed.
     */
    modifier?: fhir.CodeableConcept | undefined;
    /**
     * The food type(s) (e.g. meats, all foods)  that the texture modification applies to.  This could be all foods types.
     */
    foodType?: fhir.CodeableConcept | undefined;
}
/**
 * Diet given orally in contrast to enteral (tube) feeding.
 */
export interface NutritionOrderOralDiet extends fhir.BackboneElement {
    /**
     * The kind of diet or dietary restriction such as fiber restricted diet or diabetic diet.
     */
    type?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * The time period and frequency at which the diet should be given.
     */
    schedule?: (fhir.Timing | null)[] | undefined;
    /**
     * Class that defines the quantity and type of nutrient modifications required for the oral diet.
     */
    nutrient?: (fhir.NutritionOrderOralDietNutrient | null)[] | undefined;
    /**
     * Class that describes any texture modifications required for the patient to safely consume various types of solid foods.
     */
    texture?: (fhir.NutritionOrderOralDietTexture | null)[] | undefined;
    /**
     * The required consistency (e.g. honey-thick, nectar-thick, thin, thickened.) of liquids or fluids served to the patient.
     */
    fluidConsistencyType?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * Free text or additional instructions or information pertaining to the oral diet.
     */
    instruction?: string | undefined;
    /**
     * Extended properties for primitive element: NutritionOrder.oralDiet.instruction
     */
    _instruction?: fhir.FhirElement;
}
/**
 * Oral nutritional products given in order to add further nutritional value to the patient's diet.
 */
export interface NutritionOrderSupplement extends fhir.BackboneElement {
    /**
     * The kind of nutritional supplement product required such as a high protein or pediatric clear liquid supplement.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * The product or brand name of the nutritional supplement such as "Acme Protein Shake".
     */
    productName?: string | undefined;
    /**
     * Extended properties for primitive element: NutritionOrder.supplement.productName
     */
    _productName?: fhir.FhirElement;
    /**
     * The time period and frequency at which the supplement(s) should be given.
     */
    schedule?: (fhir.Timing | null)[] | undefined;
    /**
     * The amount of the nutritional supplement to be given.
     */
    quantity?: fhir.Quantity | undefined;
    /**
     * Free text or additional instructions or information pertaining to the oral supplement.
     */
    instruction?: string | undefined;
    /**
     * Extended properties for primitive element: NutritionOrder.supplement.instruction
     */
    _instruction?: fhir.FhirElement;
}
/**
 * Formula administration instructions as structured data.  This repeating structure allows for changing the administration rate or volume over time for both bolus and continuous feeding.  An example of this would be an instruction to increase the rate of continuous feeding every 2 hours.
 */
export interface NutritionOrderEnteralFormulaAdministration extends fhir.BackboneElement {
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
    rateQuantity?: fhir.Quantity | undefined;
    /**
     * The rate of administration of formula via a feeding pump, e.g. 60 mL per hour, according to the specified schedule.
     */
    rateRatio?: fhir.Ratio | undefined;
}
/**
 * Feeding provided through the gastrointestinal tract via a tube, catheter, or stoma that delivers nutrition distal to the oral cavity.
 */
export interface NutritionOrderEnteralFormula extends fhir.BackboneElement {
    /**
     * The type of enteral or infant formula such as an adult standard formula with fiber or a soy-based infant formula.
     */
    baseFormulaType?: fhir.CodeableConcept | undefined;
    /**
     * The product or brand name of the enteral or infant formula product such as "ACME Adult Standard Formula".
     */
    baseFormulaProductName?: string | undefined;
    /**
     * Extended properties for primitive element: NutritionOrder.enteralFormula.baseFormulaProductName
     */
    _baseFormulaProductName?: fhir.FhirElement;
    /**
     * Indicates the type of modular component such as protein, carbohydrate, fat or fiber to be provided in addition to or mixed with the base formula.
     */
    additiveType?: fhir.CodeableConcept | undefined;
    /**
     * The product or brand name of the type of modular component to be added to the formula.
     */
    additiveProductName?: string | undefined;
    /**
     * Extended properties for primitive element: NutritionOrder.enteralFormula.additiveProductName
     */
    _additiveProductName?: fhir.FhirElement;
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
    administration?: (fhir.NutritionOrderEnteralFormulaAdministration | null)[] | undefined;
    /**
     * The maximum total quantity of formula that may be administered to a subject over the period of time, e.g. 1440 mL over 24 hours.
     */
    maxVolumeToDeliver?: fhir.Quantity | undefined;
    /**
     * Free text formula administration, feeding instructions or additional instructions or information.
     */
    administrationInstruction?: string | undefined;
    /**
     * Extended properties for primitive element: NutritionOrder.enteralFormula.administrationInstruction
     */
    _administrationInstruction?: fhir.FhirElement;
}
/**
 * A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident.
 */
export interface NutritionOrder extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "NutritionOrder" | null;
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
    identifier?: (fhir.Identifier | null)[] | undefined;
    /**
     * An encounter that provides additional information about the healthcare context in which this request is made.
     */
    encounter?: fhir.Reference | undefined;
    /**
     * The date and time that this nutrition order was requested.
     */
    dateTime: string | null;
    /**
     * Extended properties for primitive element: NutritionOrder.dateTime
     */
    _dateTime?: fhir.FhirElement;
    /**
     * The workflow status of the nutrition order/request.
     */
    status?: 'active' | 'cancelled' | 'completed' | 'draft' | 'on-hold' | 'planned' | 'proposed' | 'requested' | undefined;
    /**
     * Extended properties for primitive element: NutritionOrder.status
     */
    _status?: fhir.FhirElement;
    /**
     * A link to a record of allergies or intolerances  which should be included in the nutrition order.
     */
    allergyIntolerance?: (fhir.Reference | null)[] | undefined;
    /**
     * This modifier is used to convey order-specific modifiers about the type of food that should be given. These can be derived from patient allergies, intolerances, or preferences such as Halal, Vegan or Kosher. This modifier applies to the entire nutrition order inclusive of the oral diet, nutritional supplements and enteral formula feedings.
     */
    foodPreferenceModifier?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * This modifier is used to convey order-specific modifiers about the type of food that should NOT be given. These can be derived from patient allergies, intolerances, or preferences such as No Red Meat, No Soy or No Wheat or  Gluten-Free.  While it should not be necessary to repeat allergy or intolerance information captured in the referenced allergyIntolerance resource in the excludeFoodModifier, this element may be used to convey additional specificity related to foods that should be eliminated from the patient’s diet for any reason.  This modifier applies to the entire nutrition order inclusive of the oral diet, nutritional supplements and enteral formula feedings.
     */
    excludeFoodModifier?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * Diet given orally in contrast to enteral (tube) feeding.
     */
    oralDiet?: fhir.NutritionOrderOralDiet | undefined;
    /**
     * Oral nutritional products given in order to add further nutritional value to the patient's diet.
     */
    supplement?: (fhir.NutritionOrderSupplement | null)[] | undefined;
    /**
     * Feeding provided through the gastrointestinal tract via a tube, catheter, or stoma that delivers nutrition distal to the oral cavity.
     */
    enteralFormula?: fhir.NutritionOrderEnteralFormula | undefined;
}
//# sourceMappingURL=NutritionOrder.d.ts.map