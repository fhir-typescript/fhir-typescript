import * as fhir from '../fhir.js';
import { RequestStatusCodeType } from '../fhirValueSets/RequestStatusCodes.js';
import { RequestIntentCodeType } from '../fhirValueSets/RequestIntentCodes.js';
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
 * Class that defines the quantity and type of nutrient modifications (for example carbohydrate, fiber or sodium) required for the oral diet.
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
    doModelValidation(): fhir.FtsIssue[];
}
/**
 * Valid arguments for the NutritionOrderOralDietTexture type.
 */
export interface NutritionOrderOralDietTextureArgs extends fhir.BackboneElementArgs {
    /**
     * Coupled with the foodType (Meat).
     */
    modifier?: fhir.CodeableConceptArgs | undefined;
    /**
     * Coupled with the `texture.modifier`; could be (All Foods).
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
     * Coupled with the foodType (Meat).
     */
    modifier?: fhir.CodeableConcept | undefined;
    /**
     * Coupled with the `texture.modifier`; could be (All Foods).
     */
    foodType?: fhir.CodeableConcept | undefined;
    /**
     * Default constructor for NutritionOrderOralDietTexture - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<NutritionOrderOralDietTextureArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
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
     * The time period and frequency at which the diet should be given.  The diet should be given for the combination of all schedules if more than one schedule is present.
     */
    schedule?: fhir.TimingArgs[] | undefined;
    /**
     * Class that defines the quantity and type of nutrient modifications (for example carbohydrate, fiber or sodium) required for the oral diet.
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
     * Free text dosage instructions can be used for cases where the instructions are too complex to code.
     */
    instruction?: fhir.FhirString | string | undefined;
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
     * The time period and frequency at which the diet should be given.  The diet should be given for the combination of all schedules if more than one schedule is present.
     */
    schedule: fhir.Timing[];
    /**
     * Class that defines the quantity and type of nutrient modifications (for example carbohydrate, fiber or sodium) required for the oral diet.
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
     * Free text dosage instructions can be used for cases where the instructions are too complex to code.
     */
    instruction?: fhir.FhirString | undefined;
    /**
     * Default constructor for NutritionOrderOralDiet - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<NutritionOrderOralDietArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
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
     * The time period and frequency at which the supplement(s) should be given.  The supplement should be given for the combination of all schedules if more than one schedule is present.
     */
    schedule?: fhir.TimingArgs[] | undefined;
    /**
     * The amount of the nutritional supplement to be given.
     */
    quantity?: fhir.QuantityArgs | undefined;
    /**
     * Free text dosage instructions can be used for cases where the instructions are too complex to code.
     */
    instruction?: fhir.FhirString | string | undefined;
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
     * The time period and frequency at which the supplement(s) should be given.  The supplement should be given for the combination of all schedules if more than one schedule is present.
     */
    schedule: fhir.Timing[];
    /**
     * The amount of the nutritional supplement to be given.
     */
    quantity?: fhir.Quantity | undefined;
    /**
     * Free text dosage instructions can be used for cases where the instructions are too complex to code.
     */
    instruction?: fhir.FhirString | undefined;
    /**
     * Default constructor for NutritionOrderSupplement - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<NutritionOrderSupplementArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
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
     * Ratio is used when the quantity value in the denominator is not "1", otherwise use Quantity. For example, the Ratio datatype is used for "200 mL/4 hrs" versus the Quantity datatype for "50 mL/hr".
     */
    rate?: fhir.Quantity | fhir.Ratio | undefined;
    /**
     * Ratio is used when the quantity value in the denominator is not "1", otherwise use Quantity. For example, the Ratio datatype is used for "200 mL/4 hrs" versus the Quantity datatype for "50 mL/hr".
     */
    rateQuantity?: fhir.QuantityArgs | undefined;
    /**
     * Ratio is used when the quantity value in the denominator is not "1", otherwise use Quantity. For example, the Ratio datatype is used for "200 mL/4 hrs" versus the Quantity datatype for "50 mL/hr".
     */
    rateRatio?: fhir.RatioArgs | undefined;
}
/**
 * See implementation notes below for further discussion on how to order continuous vs bolus enteral feeding using this resource.
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
     * Ratio is used when the quantity value in the denominator is not "1", otherwise use Quantity. For example, the Ratio datatype is used for "200 mL/4 hrs" versus the Quantity datatype for "50 mL/hr".
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
    doModelValidation(): fhir.FtsIssue[];
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
     * Indicates the type of modular component such as protein, carbohydrate, fat or fiber to be provided in addition to or mixed with the base formula.
     */
    additiveType?: fhir.CodeableConceptArgs | undefined;
    /**
     * The product or brand name of the type of modular component to be added to the formula.
     */
    additiveProductName?: fhir.FhirString | string | undefined;
    /**
     * The amount of energy (calories) that the formula should provide per specified volume, typically per mL or fluid oz.  For example, an infant may require a formula that provides 24 calories per fluid ounce or an adult may require an enteral formula that provides 1.5 calorie/mL.
     */
    caloricDensity?: fhir.QuantityArgs | undefined;
    /**
     * The route or physiological path of administration into the patient's gastrointestinal  tract for purposes of providing the formula feeding, e.g. nasogastric tube.
     */
    routeofAdministration?: fhir.CodeableConceptArgs | undefined;
    /**
     * See implementation notes below for further discussion on how to order continuous vs bolus enteral feeding using this resource.
     */
    administration?: fhir.NutritionOrderEnteralFormulaAdministrationArgs[] | undefined;
    /**
     * The maximum total quantity of formula that may be administered to a subject over the period of time, e.g. 1440 mL over 24 hours.
     */
    maxVolumeToDeliver?: fhir.QuantityArgs | undefined;
    /**
     * Free text dosage instructions can be used for cases where the instructions are too complex to code.
     */
    administrationInstruction?: fhir.FhirString | string | undefined;
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
     * The amount of energy (calories) that the formula should provide per specified volume, typically per mL or fluid oz.  For example, an infant may require a formula that provides 24 calories per fluid ounce or an adult may require an enteral formula that provides 1.5 calorie/mL.
     */
    caloricDensity?: fhir.Quantity | undefined;
    /**
     * The route or physiological path of administration into the patient's gastrointestinal  tract for purposes of providing the formula feeding, e.g. nasogastric tube.
     */
    routeofAdministration?: fhir.CodeableConcept | undefined;
    /**
     * See implementation notes below for further discussion on how to order continuous vs bolus enteral feeding using this resource.
     */
    administration: fhir.NutritionOrderEnteralFormulaAdministration[];
    /**
     * The maximum total quantity of formula that may be administered to a subject over the period of time, e.g. 1440 mL over 24 hours.
     */
    maxVolumeToDeliver?: fhir.Quantity | undefined;
    /**
     * Free text dosage instructions can be used for cases where the instructions are too complex to code.
     */
    administrationInstruction?: fhir.FhirString | undefined;
    /**
     * Default constructor for NutritionOrderEnteralFormula - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<NutritionOrderEnteralFormulaArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Extensible-bound Value Set for routeofAdministration (NutritionOrder.enteralFormula.routeofAdministration)
     */
    static get routeofAdministrationExtensibleCodings(): {
        readonly InstillationEnteralFeedingTube: fhir.Coding;
        readonly InstillationEnteral: fhir.Coding;
        readonly InstillationGastroJejunostomyTube: fhir.Coding;
        readonly InstillationGastrostomyTube: fhir.Coding;
        readonly InstillationJejunostomyTube: fhir.Coding;
        readonly InstillationNasogastricTube: fhir.Coding;
        readonly InstillationOrogastricTube: fhir.Coding;
        readonly InstillationOrojejunumTube: fhir.Coding;
        readonly SwallowOral: fhir.Coding;
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
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
     * The Identifier.type element can be to indicate filler vs. placer if needed.  This is explained in further detail [here](servicerequest.html#notes).
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * Note: This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
     */
    instantiatesCanonical?: fhir.FhirCanonical[] | string[] | undefined;
    /**
     * This might be an HTML page, PDF, etc. or could just be a non-resolvable URI identifier.
     */
    instantiatesUri?: fhir.FhirUri[] | string[] | undefined;
    /**
     * The URL pointing to a protocol, guideline, orderset or other definition that is adhered to in whole or in part by this NutritionOrder.
     */
    instantiates?: fhir.FhirUri[] | string[] | undefined;
    /**
     * Typically the system placing the order sets the status to "requested". Thereafter, the order is maintained by the receiver that updates the status as the request is handled.  This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: fhir.FhirCode<RequestStatusCodeType> | string | undefined;
    /**
     * When resources map to this element, they are free to define as many codes as necessary to cover their space and will map to "proposal, plan or order".  Can have multiple codes that map to one of these.  E.g. "original order", "encoded order", "reflex order" would all map to "order".  Expectation is that the set of codes is mutually exclusive or a strict all-encompassing hierarchy.
     */
    intent: fhir.FhirCode<RequestIntentCodeType> | string | undefined;
    /**
     * The person (patient) who needs the nutrition order for an oral diet, nutritional supplement and/or enteral or formula feeding.
     */
    patient: fhir.ReferenceArgs | null;
    /**
     * An encounter that provides additional information about the healthcare context in which this request is made.
     */
    encounter?: fhir.ReferenceArgs | undefined;
    /**
     * The date and time that this nutrition order was requested.
     */
    dateTime: fhir.FhirDateTime | string | undefined;
    /**
     * The practitioner that holds legal responsibility for ordering the diet, nutritional supplement, or formula feedings.
     */
    orderer?: fhir.ReferenceArgs | undefined;
    /**
     * Information on a patient's food allergies and intolerances to inform healthcare personnel about the type of foods that the patient shouldn't receive or consume.
     */
    allergyIntolerance?: fhir.ReferenceArgs[] | undefined;
    /**
     * Information on a patient's food preferences that inform healthcare personnel about the food that the patient should receive or consume.
     */
    foodPreferenceModifier?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Information on a patient's food allergies, intolerances and preferences to inform healthcare personnel about the type  of foods that the patient shouldn't receive or consume.
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
    /**
     * This element SHALL NOT be used to supply free text instructions for the diet which are represented in the `.oralDiet.instruction`, `supplement.instruction`, or `enteralFormula.administrationInstruction` elements.
     */
    note?: fhir.AnnotationArgs[] | undefined;
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
     * The Identifier.type element can be to indicate filler vs. placer if needed.  This is explained in further detail [here](servicerequest.html#notes).
     */
    identifier: fhir.Identifier[];
    /**
     * Note: This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
     */
    instantiatesCanonical: fhir.FhirCanonical[];
    /**
     * This might be an HTML page, PDF, etc. or could just be a non-resolvable URI identifier.
     */
    instantiatesUri: fhir.FhirUri[];
    /**
     * The URL pointing to a protocol, guideline, orderset or other definition that is adhered to in whole or in part by this NutritionOrder.
     */
    instantiates: fhir.FhirUri[];
    /**
     * Typically the system placing the order sets the status to "requested". Thereafter, the order is maintained by the receiver that updates the status as the request is handled.  This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: fhir.FhirCode<RequestStatusCodeType> | null;
    /**
     * When resources map to this element, they are free to define as many codes as necessary to cover their space and will map to "proposal, plan or order".  Can have multiple codes that map to one of these.  E.g. "original order", "encoded order", "reflex order" would all map to "order".  Expectation is that the set of codes is mutually exclusive or a strict all-encompassing hierarchy.
     */
    intent: fhir.FhirCode<RequestIntentCodeType> | null;
    /**
     * The person (patient) who needs the nutrition order for an oral diet, nutritional supplement and/or enteral or formula feeding.
     */
    patient: fhir.Reference | null;
    /**
     * An encounter that provides additional information about the healthcare context in which this request is made.
     */
    encounter?: fhir.Reference | undefined;
    /**
     * The date and time that this nutrition order was requested.
     */
    dateTime: fhir.FhirDateTime | null;
    /**
     * The practitioner that holds legal responsibility for ordering the diet, nutritional supplement, or formula feedings.
     */
    orderer?: fhir.Reference | undefined;
    /**
     * Information on a patient's food allergies and intolerances to inform healthcare personnel about the type of foods that the patient shouldn't receive or consume.
     */
    allergyIntolerance: fhir.Reference[];
    /**
     * Information on a patient's food preferences that inform healthcare personnel about the food that the patient should receive or consume.
     */
    foodPreferenceModifier: fhir.CodeableConcept[];
    /**
     * Information on a patient's food allergies, intolerances and preferences to inform healthcare personnel about the type  of foods that the patient shouldn't receive or consume.
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
     * This element SHALL NOT be used to supply free text instructions for the diet which are represented in the `.oralDiet.instruction`, `supplement.instruction`, or `enteralFormula.administrationInstruction` elements.
     */
    note: fhir.Annotation[];
    /**
     * Default constructor for NutritionOrder - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<NutritionOrderArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for status (NutritionOrder.status)
     */
    static get statusRequiredCodes(): {
        readonly Active: "active";
        readonly Completed: "completed";
        readonly Draft: "draft";
        readonly EnteredInError: "entered-in-error";
        readonly OnHold: "on-hold";
        readonly Revoked: "revoked";
        readonly Unknown: "unknown";
    };
    /**
     * Required-bound Value Set for intent (NutritionOrder.intent)
     */
    static get intentRequiredCodes(): {
        readonly Directive: "directive";
        readonly FillerOrder: "filler-order";
        readonly InstanceOrder: "instance-order";
        readonly Option: "option";
        readonly Order: "order";
        readonly OriginalOrder: "original-order";
        readonly Plan: "plan";
        readonly Proposal: "proposal";
        readonly ReflexOrder: "reflex-order";
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
//# sourceMappingURL=NutritionOrder.d.ts.map