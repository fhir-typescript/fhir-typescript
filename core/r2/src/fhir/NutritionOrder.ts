// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR Resource: NutritionOrder

import * as fhir from '../fhir.js';

// @ts-ignore
import { NutritionOrderStatusCodes,  NutritionOrderStatusCodeType } from '../fhirValueSets/NutritionOrderStatusCodes.js';
// @ts-ignore
import { NutritionOrderStatusVsValidation } from '../fhirValueSets/NutritionOrderStatusVsValidation.js';
/**
 * Valid arguments for the NutritionOrderOralDietNutrient type.
 */
export interface NutritionOrderOralDietNutrientArgs extends fhir.BackboneElementArgs {
  /**
   * The nutrient that is being modified such as carbohydrate or sodium.
   */
  modifier?: fhir.CodeableConceptArgs|undefined;
  /**
   * The quantity of the specified nutrient to include in diet.
   */
  amount?: fhir.QuantityArgs|undefined;
}

/**
 * Class that defines the quantity and type of nutrient modifications required for the oral diet.
 */
export class NutritionOrderOralDietNutrient extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'NutritionOrderOralDietNutrient';
  /**
   * The nutrient that is being modified such as carbohydrate or sodium.
   */
  public modifier?: fhir.CodeableConcept|undefined;
  /**
   * The quantity of the specified nutrient to include in diet.
   */
  public amount?: fhir.Quantity|undefined;
  /**
   * Default constructor for NutritionOrderOralDietNutrient - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<NutritionOrderOralDietNutrientArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['modifier']) { this.modifier = new fhir.CodeableConcept(source.modifier, options); }
    if (source['amount']) { this.amount = new fhir.Quantity(source.amount, options); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'NutritionOrder.oralDiet.nutrient' }
    iss.push(...this.vOS('modifier',exp));
    iss.push(...this.vOS('amount',exp));
    return iss;
  }
}
/**
 * Valid arguments for the NutritionOrderOralDietTexture type.
 */
export interface NutritionOrderOralDietTextureArgs extends fhir.BackboneElementArgs {
  /**
   * Any texture modifications (for solid foods) that should be made, e.g. easy to chew, chopped, ground, and pureed.
   */
  modifier?: fhir.CodeableConceptArgs|undefined;
  /**
   * The food type(s) (e.g. meats, all foods)  that the texture modification applies to.  This could be all foods types.
   */
  foodType?: fhir.CodeableConceptArgs|undefined;
}

/**
 * Class that describes any texture modifications required for the patient to safely consume various types of solid foods.
 */
export class NutritionOrderOralDietTexture extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'NutritionOrderOralDietTexture';
  /**
   * Any texture modifications (for solid foods) that should be made, e.g. easy to chew, chopped, ground, and pureed.
   */
  public modifier?: fhir.CodeableConcept|undefined;
  /**
   * The food type(s) (e.g. meats, all foods)  that the texture modification applies to.  This could be all foods types.
   */
  public foodType?: fhir.CodeableConcept|undefined;
  /**
   * Default constructor for NutritionOrderOralDietTexture - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<NutritionOrderOralDietTextureArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['modifier']) { this.modifier = new fhir.CodeableConcept(source.modifier, options); }
    if (source['foodType']) { this.foodType = new fhir.CodeableConcept(source.foodType, options); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'NutritionOrder.oralDiet.texture' }
    iss.push(...this.vOS('modifier',exp));
    iss.push(...this.vOS('foodType',exp));
    return iss;
  }
}
/**
 * Valid arguments for the NutritionOrderOralDiet type.
 */
export interface NutritionOrderOralDietArgs extends fhir.BackboneElementArgs {
  /**
   * The kind of diet or dietary restriction such as fiber restricted diet or diabetic diet.
   */
  type?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * The time period and frequency at which the diet should be given.
   */
  schedule?: fhir.TimingArgs[]|undefined;
  /**
   * Class that defines the quantity and type of nutrient modifications required for the oral diet.
   */
  nutrient?: fhir.NutritionOrderOralDietNutrientArgs[]|undefined;
  /**
   * Class that describes any texture modifications required for the patient to safely consume various types of solid foods.
   */
  texture?: fhir.NutritionOrderOralDietTextureArgs[]|undefined;
  /**
   * The required consistency (e.g. honey-thick, nectar-thick, thin, thickened.) of liquids or fluids served to the patient.
   */
  fluidConsistencyType?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * Free text or additional instructions or information pertaining to the oral diet.
   */
  instruction?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: NutritionOrder.oralDiet.instruction
   */
  _instruction?:fhir.FhirElementArgs;
}

/**
 * Diet given orally in contrast to enteral (tube) feeding.
 */
export class NutritionOrderOralDiet extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'NutritionOrderOralDiet';
  /**
   * The kind of diet or dietary restriction such as fiber restricted diet or diabetic diet.
   */
  public type: fhir.CodeableConcept[];
  /**
   * The time period and frequency at which the diet should be given.
   */
  public schedule: fhir.Timing[];
  /**
   * Class that defines the quantity and type of nutrient modifications required for the oral diet.
   */
  public nutrient: fhir.NutritionOrderOralDietNutrient[];
  /**
   * Class that describes any texture modifications required for the patient to safely consume various types of solid foods.
   */
  public texture: fhir.NutritionOrderOralDietTexture[];
  /**
   * The required consistency (e.g. honey-thick, nectar-thick, thin, thickened.) of liquids or fluids served to the patient.
   */
  public fluidConsistencyType: fhir.CodeableConcept[];
  /**
   * Free text or additional instructions or information pertaining to the oral diet.
   */
  public instruction?: fhir.FhirString|undefined;
  /**
   * Default constructor for NutritionOrderOralDiet - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<NutritionOrderOralDietArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['type']) { this.type = source.type.map((x) => new fhir.CodeableConcept(x, options)); }
    else { this.type = []; }
    if (source['schedule']) { this.schedule = source.schedule.map((x) => new fhir.Timing(x, options)); }
    else { this.schedule = []; }
    if (source['nutrient']) { this.nutrient = source.nutrient.map((x) => new fhir.NutritionOrderOralDietNutrient(x, options)); }
    else { this.nutrient = []; }
    if (source['texture']) { this.texture = source.texture.map((x) => new fhir.NutritionOrderOralDietTexture(x, options)); }
    else { this.texture = []; }
    if (source['fluidConsistencyType']) { this.fluidConsistencyType = source.fluidConsistencyType.map((x) => new fhir.CodeableConcept(x, options)); }
    else { this.fluidConsistencyType = []; }
    if (source['instruction'] !== undefined) { this.instruction = new fhir.FhirString({value: source.instruction}, options); }
    if (source['_instruction']) {
      if (this.instruction) { this.instruction.addExtendedProperties(source._instruction!); }
      else { this.instruction = new fhir.FhirString(source._instruction as Partial<fhir.FhirStringArgs>, options); }
    }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'NutritionOrder.oralDiet' }
    iss.push(...this.vOA('type',exp));
    iss.push(...this.vOA('schedule',exp));
    iss.push(...this.vOA('nutrient',exp));
    iss.push(...this.vOA('texture',exp));
    iss.push(...this.vOA('fluidConsistencyType',exp));
    iss.push(...this.vOS('instruction',exp));
    return iss;
  }
}
/**
 * Valid arguments for the NutritionOrderSupplement type.
 */
export interface NutritionOrderSupplementArgs extends fhir.BackboneElementArgs {
  /**
   * The kind of nutritional supplement product required such as a high protein or pediatric clear liquid supplement.
   */
  type?: fhir.CodeableConceptArgs|undefined;
  /**
   * The product or brand name of the nutritional supplement such as "Acme Protein Shake".
   */
  productName?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: NutritionOrder.supplement.productName
   */
  _productName?:fhir.FhirElementArgs;
  /**
   * The time period and frequency at which the supplement(s) should be given.
   */
  schedule?: fhir.TimingArgs[]|undefined;
  /**
   * The amount of the nutritional supplement to be given.
   */
  quantity?: fhir.QuantityArgs|undefined;
  /**
   * Free text or additional instructions or information pertaining to the oral supplement.
   */
  instruction?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: NutritionOrder.supplement.instruction
   */
  _instruction?:fhir.FhirElementArgs;
}

/**
 * Oral nutritional products given in order to add further nutritional value to the patient's diet.
 */
export class NutritionOrderSupplement extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'NutritionOrderSupplement';
  /**
   * The kind of nutritional supplement product required such as a high protein or pediatric clear liquid supplement.
   */
  public type?: fhir.CodeableConcept|undefined;
  /**
   * The product or brand name of the nutritional supplement such as "Acme Protein Shake".
   */
  public productName?: fhir.FhirString|undefined;
  /**
   * The time period and frequency at which the supplement(s) should be given.
   */
  public schedule: fhir.Timing[];
  /**
   * The amount of the nutritional supplement to be given.
   */
  public quantity?: fhir.Quantity|undefined;
  /**
   * Free text or additional instructions or information pertaining to the oral supplement.
   */
  public instruction?: fhir.FhirString|undefined;
  /**
   * Default constructor for NutritionOrderSupplement - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<NutritionOrderSupplementArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['type']) { this.type = new fhir.CodeableConcept(source.type, options); }
    if (source['productName'] !== undefined) { this.productName = new fhir.FhirString({value: source.productName}, options); }
    if (source['_productName']) {
      if (this.productName) { this.productName.addExtendedProperties(source._productName!); }
      else { this.productName = new fhir.FhirString(source._productName as Partial<fhir.FhirStringArgs>, options); }
    }
    if (source['schedule']) { this.schedule = source.schedule.map((x) => new fhir.Timing(x, options)); }
    else { this.schedule = []; }
    if (source['quantity']) { this.quantity = new fhir.Quantity(source.quantity, options); }
    if (source['instruction'] !== undefined) { this.instruction = new fhir.FhirString({value: source.instruction}, options); }
    if (source['_instruction']) {
      if (this.instruction) { this.instruction.addExtendedProperties(source._instruction!); }
      else { this.instruction = new fhir.FhirString(source._instruction as Partial<fhir.FhirStringArgs>, options); }
    }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'NutritionOrder.supplement' }
    iss.push(...this.vOS('type',exp));
    iss.push(...this.vOS('productName',exp));
    iss.push(...this.vOA('schedule',exp));
    iss.push(...this.vOS('quantity',exp));
    iss.push(...this.vOS('instruction',exp));
    return iss;
  }
}
/**
 * Valid arguments for the NutritionOrderEnteralFormulaAdministration type.
 */
export interface NutritionOrderEnteralFormulaAdministrationArgs extends fhir.BackboneElementArgs {
  /**
   * The time period and frequency at which the enteral formula should be delivered to the patient.
   */
  schedule?: fhir.TimingArgs|undefined;
  /**
   * The volume of formula to provide to the patient per the specified administration schedule.
   */
  quantity?: fhir.QuantityArgs|undefined;
  /**
   * The rate of administration of formula via a feeding pump, e.g. 60 mL per hour, according to the specified schedule.
   */
  rate?: fhir.Quantity|fhir.Ratio|undefined;
  /**
   * The rate of administration of formula via a feeding pump, e.g. 60 mL per hour, according to the specified schedule.
   */
  rateQuantity?: fhir.QuantityArgs|undefined;
  /**
   * The rate of administration of formula via a feeding pump, e.g. 60 mL per hour, according to the specified schedule.
   */
  rateRatio?: fhir.RatioArgs|undefined;
}

/**
 * Formula administration instructions as structured data.  This repeating structure allows for changing the administration rate or volume over time for both bolus and continuous feeding.  An example of this would be an instruction to increase the rate of continuous feeding every 2 hours.
 */
export class NutritionOrderEnteralFormulaAdministration extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'NutritionOrderEnteralFormulaAdministration';
  /**
   * The time period and frequency at which the enteral formula should be delivered to the patient.
   */
  public schedule?: fhir.Timing|undefined;
  /**
   * The volume of formula to provide to the patient per the specified administration schedule.
   */
  public quantity?: fhir.Quantity|undefined;
  /**
   * The rate of administration of formula via a feeding pump, e.g. 60 mL per hour, according to the specified schedule.
   */
  public rate?: (fhir.Quantity|fhir.Ratio)|undefined;
  /**
   * Internal flag to properly serialize choice-type element NutritionOrder.enteralFormula.administration.rate[x]
   */
  protected static readonly _fts_rateIsChoice:true = true;
  /**
   * Default constructor for NutritionOrderEnteralFormulaAdministration - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<NutritionOrderEnteralFormulaAdministrationArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['schedule']) { this.schedule = new fhir.Timing(source.schedule, options); }
    if (source['quantity']) { this.quantity = new fhir.Quantity(source.quantity, options); }
    if (source['rate']) { this.rate = source.rate; }
    else if (source['rateQuantity']) { this.rate = new fhir.Quantity(source.rateQuantity, options); }
    else if (source['rateRatio']) { this.rate = new fhir.Ratio(source.rateRatio, options); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'NutritionOrder.enteralFormula.administration' }
    iss.push(...this.vOS('schedule',exp));
    iss.push(...this.vOS('quantity',exp));
    iss.push(...this.vOS('rate',exp));
    return iss;
  }
}
/**
 * Valid arguments for the NutritionOrderEnteralFormula type.
 */
export interface NutritionOrderEnteralFormulaArgs extends fhir.BackboneElementArgs {
  /**
   * The type of enteral or infant formula such as an adult standard formula with fiber or a soy-based infant formula.
   */
  baseFormulaType?: fhir.CodeableConceptArgs|undefined;
  /**
   * The product or brand name of the enteral or infant formula product such as "ACME Adult Standard Formula".
   */
  baseFormulaProductName?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: NutritionOrder.enteralFormula.baseFormulaProductName
   */
  _baseFormulaProductName?:fhir.FhirElementArgs;
  /**
   * Indicates the type of modular component such as protein, carbohydrate, fat or fiber to be provided in addition to or mixed with the base formula.
   */
  additiveType?: fhir.CodeableConceptArgs|undefined;
  /**
   * The product or brand name of the type of modular component to be added to the formula.
   */
  additiveProductName?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: NutritionOrder.enteralFormula.additiveProductName
   */
  _additiveProductName?:fhir.FhirElementArgs;
  /**
   * The amount of energy (Calories) that the formula should provide per specified volume, typically per mL or fluid oz.  For example, an infant may require a formula that provides 24 Calories per fluid ounce or an adult may require an enteral formula that provides 1.5 Calorie/mL.
   */
  caloricDensity?: fhir.QuantityArgs|undefined;
  /**
   * The route or physiological path of administration into the patient's gastrointestinal  tract for purposes of providing the formula feeding, e.g. nasogastric tube.
   */
  routeofAdministration?: fhir.CodeableConceptArgs|undefined;
  /**
   * Formula administration instructions as structured data.  This repeating structure allows for changing the administration rate or volume over time for both bolus and continuous feeding.  An example of this would be an instruction to increase the rate of continuous feeding every 2 hours.
   */
  administration?: fhir.NutritionOrderEnteralFormulaAdministrationArgs[]|undefined;
  /**
   * The maximum total quantity of formula that may be administered to a subject over the period of time, e.g. 1440 mL over 24 hours.
   */
  maxVolumeToDeliver?: fhir.QuantityArgs|undefined;
  /**
   * Free text formula administration, feeding instructions or additional instructions or information.
   */
  administrationInstruction?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: NutritionOrder.enteralFormula.administrationInstruction
   */
  _administrationInstruction?:fhir.FhirElementArgs;
}

/**
 * Feeding provided through the gastrointestinal tract via a tube, catheter, or stoma that delivers nutrition distal to the oral cavity.
 */
export class NutritionOrderEnteralFormula extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'NutritionOrderEnteralFormula';
  /**
   * The type of enteral or infant formula such as an adult standard formula with fiber or a soy-based infant formula.
   */
  public baseFormulaType?: fhir.CodeableConcept|undefined;
  /**
   * The product or brand name of the enteral or infant formula product such as "ACME Adult Standard Formula".
   */
  public baseFormulaProductName?: fhir.FhirString|undefined;
  /**
   * Indicates the type of modular component such as protein, carbohydrate, fat or fiber to be provided in addition to or mixed with the base formula.
   */
  public additiveType?: fhir.CodeableConcept|undefined;
  /**
   * The product or brand name of the type of modular component to be added to the formula.
   */
  public additiveProductName?: fhir.FhirString|undefined;
  /**
   * The amount of energy (Calories) that the formula should provide per specified volume, typically per mL or fluid oz.  For example, an infant may require a formula that provides 24 Calories per fluid ounce or an adult may require an enteral formula that provides 1.5 Calorie/mL.
   */
  public caloricDensity?: fhir.Quantity|undefined;
  /**
   * The route or physiological path of administration into the patient's gastrointestinal  tract for purposes of providing the formula feeding, e.g. nasogastric tube.
   */
  public routeofAdministration?: fhir.CodeableConcept|undefined;
  /**
   * Formula administration instructions as structured data.  This repeating structure allows for changing the administration rate or volume over time for both bolus and continuous feeding.  An example of this would be an instruction to increase the rate of continuous feeding every 2 hours.
   */
  public administration: fhir.NutritionOrderEnteralFormulaAdministration[];
  /**
   * The maximum total quantity of formula that may be administered to a subject over the period of time, e.g. 1440 mL over 24 hours.
   */
  public maxVolumeToDeliver?: fhir.Quantity|undefined;
  /**
   * Free text formula administration, feeding instructions or additional instructions or information.
   */
  public administrationInstruction?: fhir.FhirString|undefined;
  /**
   * Default constructor for NutritionOrderEnteralFormula - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<NutritionOrderEnteralFormulaArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['baseFormulaType']) { this.baseFormulaType = new fhir.CodeableConcept(source.baseFormulaType, options); }
    if (source['baseFormulaProductName'] !== undefined) { this.baseFormulaProductName = new fhir.FhirString({value: source.baseFormulaProductName}, options); }
    if (source['_baseFormulaProductName']) {
      if (this.baseFormulaProductName) { this.baseFormulaProductName.addExtendedProperties(source._baseFormulaProductName!); }
      else { this.baseFormulaProductName = new fhir.FhirString(source._baseFormulaProductName as Partial<fhir.FhirStringArgs>, options); }
    }
    if (source['additiveType']) { this.additiveType = new fhir.CodeableConcept(source.additiveType, options); }
    if (source['additiveProductName'] !== undefined) { this.additiveProductName = new fhir.FhirString({value: source.additiveProductName}, options); }
    if (source['_additiveProductName']) {
      if (this.additiveProductName) { this.additiveProductName.addExtendedProperties(source._additiveProductName!); }
      else { this.additiveProductName = new fhir.FhirString(source._additiveProductName as Partial<fhir.FhirStringArgs>, options); }
    }
    if (source['caloricDensity']) { this.caloricDensity = new fhir.Quantity(source.caloricDensity, options); }
    if (source['routeofAdministration']) { this.routeofAdministration = new fhir.CodeableConcept(source.routeofAdministration, options); }
    if (source['administration']) { this.administration = source.administration.map((x) => new fhir.NutritionOrderEnteralFormulaAdministration(x, options)); }
    else { this.administration = []; }
    if (source['maxVolumeToDeliver']) { this.maxVolumeToDeliver = new fhir.Quantity(source.maxVolumeToDeliver, options); }
    if (source['administrationInstruction'] !== undefined) { this.administrationInstruction = new fhir.FhirString({value: source.administrationInstruction}, options); }
    if (source['_administrationInstruction']) {
      if (this.administrationInstruction) { this.administrationInstruction.addExtendedProperties(source._administrationInstruction!); }
      else { this.administrationInstruction = new fhir.FhirString(source._administrationInstruction as Partial<fhir.FhirStringArgs>, options); }
    }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'NutritionOrder.enteralFormula' }
    iss.push(...this.vOS('baseFormulaType',exp));
    iss.push(...this.vOS('baseFormulaProductName',exp));
    iss.push(...this.vOS('additiveType',exp));
    iss.push(...this.vOS('additiveProductName',exp));
    iss.push(...this.vOS('caloricDensity',exp));
    iss.push(...this.vOS('routeofAdministration',exp));
    iss.push(...this.vOA('administration',exp));
    iss.push(...this.vOS('maxVolumeToDeliver',exp));
    iss.push(...this.vOS('administrationInstruction',exp));
    return iss;
  }
}
/**
 * Valid arguments for the NutritionOrder type.
 */
export interface NutritionOrderArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "NutritionOrder"|undefined;
  /**
   * The person (patient) who needs the nutrition order for an oral diet, nutritional supplement and/or enteral or formula feeding.
   */
  patient: fhir.ReferenceArgs|null;
  /**
   * The practitioner that holds legal responsibility for ordering the diet, nutritional supplement, or formula feedings.
   */
  orderer?: fhir.ReferenceArgs|undefined;
  /**
   * Identifiers assigned to this order by the order sender or by the order receiver.
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * An encounter that provides additional information about the healthcare context in which this request is made.
   */
  encounter?: fhir.ReferenceArgs|undefined;
  /**
   * The date and time that this nutrition order was requested.
   */
  dateTime: fhir.FhirDateTime|string|undefined;
  /**
   * Extended properties for primitive element: NutritionOrder.dateTime
   */
  _dateTime?:fhir.FhirElementArgs;
  /**
   * The workflow status of the nutrition order/request.
   */
  status?: fhir.FhirCode<NutritionOrderStatusCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: NutritionOrder.status
   */
  _status?:fhir.FhirElementArgs;
  /**
   * A link to a record of allergies or intolerances  which should be included in the nutrition order.
   */
  allergyIntolerance?: fhir.ReferenceArgs[]|undefined;
  /**
   * This modifier is used to convey order-specific modifiers about the type of food that should be given. These can be derived from patient allergies, intolerances, or preferences such as Halal, Vegan or Kosher. This modifier applies to the entire nutrition order inclusive of the oral diet, nutritional supplements and enteral formula feedings.
   */
  foodPreferenceModifier?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * This modifier is used to convey order-specific modifiers about the type of food that should NOT be given. These can be derived from patient allergies, intolerances, or preferences such as No Red Meat, No Soy or No Wheat or  Gluten-Free.  While it should not be necessary to repeat allergy or intolerance information captured in the referenced allergyIntolerance resource in the excludeFoodModifier, this element may be used to convey additional specificity related to foods that should be eliminated from the patient’s diet for any reason.  This modifier applies to the entire nutrition order inclusive of the oral diet, nutritional supplements and enteral formula feedings.
   */
  excludeFoodModifier?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * Diet given orally in contrast to enteral (tube) feeding.
   */
  oralDiet?: fhir.NutritionOrderOralDietArgs|undefined;
  /**
   * Oral nutritional products given in order to add further nutritional value to the patient's diet.
   */
  supplement?: fhir.NutritionOrderSupplementArgs[]|undefined;
  /**
   * Feeding provided through the gastrointestinal tract via a tube, catheter, or stoma that delivers nutrition distal to the oral cavity.
   */
  enteralFormula?: fhir.NutritionOrderEnteralFormulaArgs|undefined;
}

/**
 * A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident.
 */
export class NutritionOrder extends fhir.DomainResource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'NutritionOrder';
  /**
   * Resource Type Name
   */
  public override resourceType: "NutritionOrder";
  /**
   * The person (patient) who needs the nutrition order for an oral diet, nutritional supplement and/or enteral or formula feeding.
   */
  public patient: fhir.Reference|null;
  /**
   * The practitioner that holds legal responsibility for ordering the diet, nutritional supplement, or formula feedings.
   */
  public orderer?: fhir.Reference|undefined;
  /**
   * Identifiers assigned to this order by the order sender or by the order receiver.
   */
  public identifier: fhir.Identifier[];
  /**
   * An encounter that provides additional information about the healthcare context in which this request is made.
   */
  public encounter?: fhir.Reference|undefined;
  /**
   * The date and time that this nutrition order was requested.
   */
  public dateTime: fhir.FhirDateTime|null;
  /**
   * The workflow status of the nutrition order/request.
   */
  public status?: fhir.FhirCode<NutritionOrderStatusCodeType>|undefined;
  /**
   * A link to a record of allergies or intolerances  which should be included in the nutrition order.
   */
  public allergyIntolerance: fhir.Reference[];
  /**
   * This modifier is used to convey order-specific modifiers about the type of food that should be given. These can be derived from patient allergies, intolerances, or preferences such as Halal, Vegan or Kosher. This modifier applies to the entire nutrition order inclusive of the oral diet, nutritional supplements and enteral formula feedings.
   */
  public foodPreferenceModifier: fhir.CodeableConcept[];
  /**
   * This modifier is used to convey order-specific modifiers about the type of food that should NOT be given. These can be derived from patient allergies, intolerances, or preferences such as No Red Meat, No Soy or No Wheat or  Gluten-Free.  While it should not be necessary to repeat allergy or intolerance information captured in the referenced allergyIntolerance resource in the excludeFoodModifier, this element may be used to convey additional specificity related to foods that should be eliminated from the patient’s diet for any reason.  This modifier applies to the entire nutrition order inclusive of the oral diet, nutritional supplements and enteral formula feedings.
   */
  public excludeFoodModifier: fhir.CodeableConcept[];
  /**
   * Diet given orally in contrast to enteral (tube) feeding.
   */
  public oralDiet?: fhir.NutritionOrderOralDiet|undefined;
  /**
   * Oral nutritional products given in order to add further nutritional value to the patient's diet.
   */
  public supplement: fhir.NutritionOrderSupplement[];
  /**
   * Feeding provided through the gastrointestinal tract via a tube, catheter, or stoma that delivers nutrition distal to the oral cavity.
   */
  public enteralFormula?: fhir.NutritionOrderEnteralFormula|undefined;
  /**
   * Default constructor for NutritionOrder - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<NutritionOrderArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'NutritionOrder';
    if (source['patient']) { this.patient = new fhir.Reference(source.patient, options); }
    else { this.patient = null; }
    if (source['orderer']) { this.orderer = new fhir.Reference(source.orderer, options); }
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x, options)); }
    else { this.identifier = []; }
    if (source['encounter']) { this.encounter = new fhir.Reference(source.encounter, options); }
    if (source['dateTime'] !== undefined) { this.dateTime = new fhir.FhirDateTime({value: source.dateTime}, options); }
    else { this.dateTime = null; }
    if (source['_dateTime']) {
      if (this.dateTime) { this.dateTime.addExtendedProperties(source._dateTime!); }
      else { this.dateTime = new fhir.FhirDateTime(source._dateTime as Partial<fhir.FhirDateTimeArgs>, options); }
    }
    if (source['status'] !== undefined) { this.status = new fhir.FhirCode<NutritionOrderStatusCodeType>({value: source.status}, options); }
    if (source['_status']) {
      if (this.status) { this.status.addExtendedProperties(source._status!); }
      else { this.status = new fhir.FhirCode<NutritionOrderStatusCodeType>(source._status as Partial<fhir.FhirCode>, options); }
    }
    if (source['allergyIntolerance']) { this.allergyIntolerance = source.allergyIntolerance.map((x) => new fhir.Reference(x, options)); }
    else { this.allergyIntolerance = []; }
    if (source['foodPreferenceModifier']) { this.foodPreferenceModifier = source.foodPreferenceModifier.map((x) => new fhir.CodeableConcept(x, options)); }
    else { this.foodPreferenceModifier = []; }
    if (source['excludeFoodModifier']) { this.excludeFoodModifier = source.excludeFoodModifier.map((x) => new fhir.CodeableConcept(x, options)); }
    else { this.excludeFoodModifier = []; }
    if (source['oralDiet']) { this.oralDiet = new fhir.NutritionOrderOralDiet(source.oralDiet, options); }
    if (source['supplement']) { this.supplement = source.supplement.map((x) => new fhir.NutritionOrderSupplement(x, options)); }
    else { this.supplement = []; }
    if (source['enteralFormula']) { this.enteralFormula = new fhir.NutritionOrderEnteralFormula(source.enteralFormula, options); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'NutritionOrder' }
    iss.push(...this.vRS('patient',exp));
    iss.push(...this.vOS('orderer',exp));
    iss.push(...this.vOA('identifier',exp));
    iss.push(...this.vOS('encounter',exp));
    iss.push(...this.vRS('dateTime',exp));
    iss.push(...this.vOSV('status',exp,'NutritionOrderStatus',NutritionOrderStatusVsValidation,'r'));
    iss.push(...this.vOA('allergyIntolerance',exp));
    iss.push(...this.vOA('foodPreferenceModifier',exp));
    iss.push(...this.vOA('excludeFoodModifier',exp));
    iss.push(...this.vOS('oralDiet',exp));
    iss.push(...this.vOA('supplement',exp));
    iss.push(...this.vOS('enteralFormula',exp));
    return iss;
  }
}
