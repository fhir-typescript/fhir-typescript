/*! @fhir-typescript/r4-core v0.0.11-beta.2 2022-05-18 */
'use strict';
import { __extends } from '../_virtual/_tslib.js';
import { EnteralRouteCodings } from '../fhirValueSets/EnteralRouteCodings.js';
import { RequestStatusCodings } from '../fhirValueSets/RequestStatusCodings.js';
import { RequestIntentCodings } from '../fhirValueSets/RequestIntentCodings.js';
import { IssueTypeCodes } from '../fhirValueSets/IssueTypeCodes.js';
import { IssueSeverityCodes } from '../fhirValueSets/IssueSeverityCodes.js';
import { BackboneElement } from './BackboneElement.js';
import { OperationOutcomeIssue } from './OperationOutcome.js';
import { DomainResource } from './DomainResource.js';
import { CodeableConcept } from './CodeableConcept.js';
import { Quantity } from './Quantity.js';
import { Timing } from './Timing.js';
import { FhirString } from './FhirString.js';
import { Ratio } from './Ratio.js';
import { Identifier } from './Identifier.js';
import { FhirCanonical } from './FhirCanonical.js';
import { FhirUri } from './FhirUri.js';
import { Reference } from './Reference.js';
import { FhirDateTime } from './FhirDateTime.js';
import { Annotation } from './Annotation.js';

// <auto-generated/>
/**
 * Class that defines the quantity and type of nutrient modifications (for example carbohydrate, fiber or sodium) required for the oral diet.
 */
var NutritionOrderOralDietNutrient = /** @class */ (function (_super) {
    __extends(NutritionOrderOralDietNutrient, _super);
    /**
     * Default constructor for NutritionOrderOralDietNutrient - initializes any required elements to null if a value is not provided.
     */
    function NutritionOrderOralDietNutrient(source, options) {
        if (source === void 0) { source = {}; }
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, source, options) || this;
        if (source['modifier']) {
            _this.modifier = new CodeableConcept(source.modifier);
        }
        if (source['amount']) {
            _this.amount = new Quantity(source.amount);
        }
        return _this;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    NutritionOrderOralDietNutrient.prototype.doModelValidation = function () {
        var _a, _b;
        var outcome = _super.prototype.doModelValidation.call(this);
        if (this["modifier"]) {
            (_a = outcome.issue).push.apply(_a, this.modifier.doModelValidation().issue);
        }
        if (this["amount"]) {
            (_b = outcome.issue).push.apply(_b, this.amount.doModelValidation().issue);
        }
        return outcome;
    };
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    NutritionOrderOralDietNutrient._fts_dataType = 'NutritionOrderOralDietNutrient';
    return NutritionOrderOralDietNutrient;
}(BackboneElement));
/**
 * Class that describes any texture modifications required for the patient to safely consume various types of solid foods.
 */
var NutritionOrderOralDietTexture = /** @class */ (function (_super) {
    __extends(NutritionOrderOralDietTexture, _super);
    /**
     * Default constructor for NutritionOrderOralDietTexture - initializes any required elements to null if a value is not provided.
     */
    function NutritionOrderOralDietTexture(source, options) {
        if (source === void 0) { source = {}; }
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, source, options) || this;
        if (source['modifier']) {
            _this.modifier = new CodeableConcept(source.modifier);
        }
        if (source['foodType']) {
            _this.foodType = new CodeableConcept(source.foodType);
        }
        return _this;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    NutritionOrderOralDietTexture.prototype.doModelValidation = function () {
        var _a, _b;
        var outcome = _super.prototype.doModelValidation.call(this);
        if (this["modifier"]) {
            (_a = outcome.issue).push.apply(_a, this.modifier.doModelValidation().issue);
        }
        if (this["foodType"]) {
            (_b = outcome.issue).push.apply(_b, this.foodType.doModelValidation().issue);
        }
        return outcome;
    };
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    NutritionOrderOralDietTexture._fts_dataType = 'NutritionOrderOralDietTexture';
    return NutritionOrderOralDietTexture;
}(BackboneElement));
/**
 * Diet given orally in contrast to enteral (tube) feeding.
 */
var NutritionOrderOralDiet = /** @class */ (function (_super) {
    __extends(NutritionOrderOralDiet, _super);
    /**
     * Default constructor for NutritionOrderOralDiet - initializes any required elements to null if a value is not provided.
     */
    function NutritionOrderOralDiet(source, options) {
        if (source === void 0) { source = {}; }
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, source, options) || this;
        if (source['type']) {
            _this.type = source.type.map(function (x) { return new CodeableConcept(x); });
        }
        else {
            _this.type = [];
        }
        if (source['schedule']) {
            _this.schedule = source.schedule.map(function (x) { return new Timing(x); });
        }
        else {
            _this.schedule = [];
        }
        if (source['nutrient']) {
            _this.nutrient = source.nutrient.map(function (x) { return new NutritionOrderOralDietNutrient(x); });
        }
        else {
            _this.nutrient = [];
        }
        if (source['texture']) {
            _this.texture = source.texture.map(function (x) { return new NutritionOrderOralDietTexture(x); });
        }
        else {
            _this.texture = [];
        }
        if (source['fluidConsistencyType']) {
            _this.fluidConsistencyType = source.fluidConsistencyType.map(function (x) { return new CodeableConcept(x); });
        }
        else {
            _this.fluidConsistencyType = [];
        }
        if (source['instruction']) {
            _this.instruction = new FhirString({ value: source.instruction });
        }
        return _this;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    NutritionOrderOralDiet.prototype.doModelValidation = function () {
        var _a;
        var outcome = _super.prototype.doModelValidation.call(this);
        if (this["type"]) {
            this.type.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["schedule"]) {
            this.schedule.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["nutrient"]) {
            this.nutrient.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["texture"]) {
            this.texture.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["fluidConsistencyType"]) {
            this.fluidConsistencyType.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["instruction"]) {
            (_a = outcome.issue).push.apply(_a, this.instruction.doModelValidation().issue);
        }
        return outcome;
    };
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    NutritionOrderOralDiet._fts_dataType = 'NutritionOrderOralDiet';
    return NutritionOrderOralDiet;
}(BackboneElement));
/**
 * Oral nutritional products given in order to add further nutritional value to the patient's diet.
 */
var NutritionOrderSupplement = /** @class */ (function (_super) {
    __extends(NutritionOrderSupplement, _super);
    /**
     * Default constructor for NutritionOrderSupplement - initializes any required elements to null if a value is not provided.
     */
    function NutritionOrderSupplement(source, options) {
        if (source === void 0) { source = {}; }
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, source, options) || this;
        if (source['type']) {
            _this.type = new CodeableConcept(source.type);
        }
        if (source['productName']) {
            _this.productName = new FhirString({ value: source.productName });
        }
        if (source['schedule']) {
            _this.schedule = source.schedule.map(function (x) { return new Timing(x); });
        }
        else {
            _this.schedule = [];
        }
        if (source['quantity']) {
            _this.quantity = new Quantity(source.quantity);
        }
        if (source['instruction']) {
            _this.instruction = new FhirString({ value: source.instruction });
        }
        return _this;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    NutritionOrderSupplement.prototype.doModelValidation = function () {
        var _a, _b, _c, _d;
        var outcome = _super.prototype.doModelValidation.call(this);
        if (this["type"]) {
            (_a = outcome.issue).push.apply(_a, this.type.doModelValidation().issue);
        }
        if (this["productName"]) {
            (_b = outcome.issue).push.apply(_b, this.productName.doModelValidation().issue);
        }
        if (this["schedule"]) {
            this.schedule.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["quantity"]) {
            (_c = outcome.issue).push.apply(_c, this.quantity.doModelValidation().issue);
        }
        if (this["instruction"]) {
            (_d = outcome.issue).push.apply(_d, this.instruction.doModelValidation().issue);
        }
        return outcome;
    };
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    NutritionOrderSupplement._fts_dataType = 'NutritionOrderSupplement';
    return NutritionOrderSupplement;
}(BackboneElement));
/**
 * See implementation notes below for further discussion on how to order continuous vs bolus enteral feeding using this resource.
 */
var NutritionOrderEnteralFormulaAdministration = /** @class */ (function (_super) {
    __extends(NutritionOrderEnteralFormulaAdministration, _super);
    /**
     * Default constructor for NutritionOrderEnteralFormulaAdministration - initializes any required elements to null if a value is not provided.
     */
    function NutritionOrderEnteralFormulaAdministration(source, options) {
        if (source === void 0) { source = {}; }
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, source, options) || this;
        if (source['schedule']) {
            _this.schedule = new Timing(source.schedule);
        }
        if (source['quantity']) {
            _this.quantity = new Quantity(source.quantity);
        }
        if (source['rate']) {
            _this.rate = source.rate;
        }
        else if (source['rateQuantity']) {
            _this.rate = new Quantity(source.rateQuantity);
        }
        else if (source['rateRatio']) {
            _this.rate = new Ratio(source.rateRatio);
        }
        return _this;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    NutritionOrderEnteralFormulaAdministration.prototype.doModelValidation = function () {
        var _a, _b;
        var outcome = _super.prototype.doModelValidation.call(this);
        if (this["schedule"]) {
            (_a = outcome.issue).push.apply(_a, this.schedule.doModelValidation().issue);
        }
        if (this["quantity"]) {
            (_b = outcome.issue).push.apply(_b, this.quantity.doModelValidation().issue);
        }
        return outcome;
    };
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    NutritionOrderEnteralFormulaAdministration._fts_dataType = 'NutritionOrderEnteralFormulaAdministration';
    /**
     * Internal flag to properly serialize choice-type element NutritionOrder.enteralFormula.administration.rate[x]
     */
    NutritionOrderEnteralFormulaAdministration._fts_rateIsChoice = true;
    return NutritionOrderEnteralFormulaAdministration;
}(BackboneElement));
/**
 * Feeding provided through the gastrointestinal tract via a tube, catheter, or stoma that delivers nutrition distal to the oral cavity.
 */
var NutritionOrderEnteralFormula = /** @class */ (function (_super) {
    __extends(NutritionOrderEnteralFormula, _super);
    /**
     * Default constructor for NutritionOrderEnteralFormula - initializes any required elements to null if a value is not provided.
     */
    function NutritionOrderEnteralFormula(source, options) {
        if (source === void 0) { source = {}; }
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, source, options) || this;
        if (source['baseFormulaType']) {
            _this.baseFormulaType = new CodeableConcept(source.baseFormulaType);
        }
        if (source['baseFormulaProductName']) {
            _this.baseFormulaProductName = new FhirString({ value: source.baseFormulaProductName });
        }
        if (source['additiveType']) {
            _this.additiveType = new CodeableConcept(source.additiveType);
        }
        if (source['additiveProductName']) {
            _this.additiveProductName = new FhirString({ value: source.additiveProductName });
        }
        if (source['caloricDensity']) {
            _this.caloricDensity = new Quantity(source.caloricDensity);
        }
        if (source['routeofAdministration']) {
            _this.routeofAdministration = new CodeableConcept(source.routeofAdministration);
        }
        if (source['administration']) {
            _this.administration = source.administration.map(function (x) { return new NutritionOrderEnteralFormulaAdministration(x); });
        }
        else {
            _this.administration = [];
        }
        if (source['maxVolumeToDeliver']) {
            _this.maxVolumeToDeliver = new Quantity(source.maxVolumeToDeliver);
        }
        if (source['administrationInstruction']) {
            _this.administrationInstruction = new FhirString({ value: source.administrationInstruction });
        }
        return _this;
    }
    /**
     * Extensible-bound Value Set for routeofAdministration (NutritionOrder.enteralFormula.routeofAdministration)
     */
    NutritionOrderEnteralFormula.routeofAdministrationExtensibleCoding = function () {
        return EnteralRouteCodings;
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    NutritionOrderEnteralFormula.prototype.doModelValidation = function () {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var outcome = _super.prototype.doModelValidation.call(this);
        if (this["baseFormulaType"]) {
            (_a = outcome.issue).push.apply(_a, this.baseFormulaType.doModelValidation().issue);
        }
        if (this["baseFormulaProductName"]) {
            (_b = outcome.issue).push.apply(_b, this.baseFormulaProductName.doModelValidation().issue);
        }
        if (this["additiveType"]) {
            (_c = outcome.issue).push.apply(_c, this.additiveType.doModelValidation().issue);
        }
        if (this["additiveProductName"]) {
            (_d = outcome.issue).push.apply(_d, this.additiveProductName.doModelValidation().issue);
        }
        if (this["caloricDensity"]) {
            (_e = outcome.issue).push.apply(_e, this.caloricDensity.doModelValidation().issue);
        }
        if (this["routeofAdministration"]) {
            (_f = outcome.issue).push.apply(_f, this.routeofAdministration.doModelValidation().issue);
        }
        if (this["administration"]) {
            this.administration.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["maxVolumeToDeliver"]) {
            (_g = outcome.issue).push.apply(_g, this.maxVolumeToDeliver.doModelValidation().issue);
        }
        if (this["administrationInstruction"]) {
            (_h = outcome.issue).push.apply(_h, this.administrationInstruction.doModelValidation().issue);
        }
        return outcome;
    };
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    NutritionOrderEnteralFormula._fts_dataType = 'NutritionOrderEnteralFormula';
    return NutritionOrderEnteralFormula;
}(BackboneElement));
/**
 * A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident.
 */
var NutritionOrder = /** @class */ (function (_super) {
    __extends(NutritionOrder, _super);
    /**
     * Default constructor for NutritionOrder - initializes any required elements to null if a value is not provided.
     */
    function NutritionOrder(source, options) {
        if (source === void 0) { source = {}; }
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, source, options) || this;
        _this.resourceType = 'NutritionOrder';
        if (source['identifier']) {
            _this.identifier = source.identifier.map(function (x) { return new Identifier(x); });
        }
        else {
            _this.identifier = [];
        }
        if (source['instantiatesCanonical']) {
            _this.instantiatesCanonical = source.instantiatesCanonical.map(function (x) { return new FhirCanonical({ value: x }); });
        }
        else {
            _this.instantiatesCanonical = [];
        }
        if (source['instantiatesUri']) {
            _this.instantiatesUri = source.instantiatesUri.map(function (x) { return new FhirUri({ value: x }); });
        }
        else {
            _this.instantiatesUri = [];
        }
        if (source['instantiates']) {
            _this.instantiates = source.instantiates.map(function (x) { return new FhirUri({ value: x }); });
        }
        else {
            _this.instantiates = [];
        }
        if (source['status']) {
            _this.status = source.status;
        }
        else {
            _this.status = null;
        }
        if (source['intent']) {
            _this.intent = source.intent;
        }
        else {
            _this.intent = null;
        }
        if (source['patient']) {
            _this.patient = new Reference(source.patient);
        }
        else {
            _this.patient = null;
        }
        if (source['encounter']) {
            _this.encounter = new Reference(source.encounter);
        }
        if (source['dateTime']) {
            _this.dateTime = new FhirDateTime({ value: source.dateTime });
        }
        else {
            _this.dateTime = null;
        }
        if (source['orderer']) {
            _this.orderer = new Reference(source.orderer);
        }
        if (source['allergyIntolerance']) {
            _this.allergyIntolerance = source.allergyIntolerance.map(function (x) { return new Reference(x); });
        }
        else {
            _this.allergyIntolerance = [];
        }
        if (source['foodPreferenceModifier']) {
            _this.foodPreferenceModifier = source.foodPreferenceModifier.map(function (x) { return new CodeableConcept(x); });
        }
        else {
            _this.foodPreferenceModifier = [];
        }
        if (source['excludeFoodModifier']) {
            _this.excludeFoodModifier = source.excludeFoodModifier.map(function (x) { return new CodeableConcept(x); });
        }
        else {
            _this.excludeFoodModifier = [];
        }
        if (source['oralDiet']) {
            _this.oralDiet = new NutritionOrderOralDiet(source.oralDiet);
        }
        if (source['supplement']) {
            _this.supplement = source.supplement.map(function (x) { return new NutritionOrderSupplement(x); });
        }
        else {
            _this.supplement = [];
        }
        if (source['enteralFormula']) {
            _this.enteralFormula = new NutritionOrderEnteralFormula(source.enteralFormula);
        }
        if (source['note']) {
            _this.note = source.note.map(function (x) { return new Annotation(x); });
        }
        else {
            _this.note = [];
        }
        return _this;
    }
    /**
     * Required-bound Value Set for status (NutritionOrder.status)
     */
    NutritionOrder.statusRequiredCoding = function () {
        return RequestStatusCodings;
    };
    /**
     * Required-bound Value Set for intent (NutritionOrder.intent)
     */
    NutritionOrder.intentRequiredCoding = function () {
        return RequestIntentCodings;
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    NutritionOrder.prototype.doModelValidation = function () {
        var _a, _b, _c, _d, _e, _f;
        var outcome = _super.prototype.doModelValidation.call(this);
        if (!this['resourceType']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property resourceType:"NutritionOrder" fhir: NutritionOrder.resourceType:"NutritionOrder"', }));
        }
        if (this["identifier"]) {
            this.identifier.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["instantiatesCanonical"]) {
            this.instantiatesCanonical.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["instantiatesUri"]) {
            this.instantiatesUri.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["instantiates"]) {
            this.instantiates.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (!this['status']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property status:RequestStatusCodeType fhir: NutritionOrder.status:code', }));
        }
        if (!this['intent']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property intent:RequestIntentCodeType fhir: NutritionOrder.intent:code', }));
        }
        if (!this['patient']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property patient:fhir.Reference fhir: NutritionOrder.patient:Reference', }));
        }
        if (this["patient"]) {
            (_a = outcome.issue).push.apply(_a, this.patient.doModelValidation().issue);
        }
        if (this["encounter"]) {
            (_b = outcome.issue).push.apply(_b, this.encounter.doModelValidation().issue);
        }
        if (!this['dateTime']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property dateTime:fhir.FhirDateTime fhir: NutritionOrder.dateTime:dateTime', }));
        }
        if (this["dateTime"]) {
            (_c = outcome.issue).push.apply(_c, this.dateTime.doModelValidation().issue);
        }
        if (this["orderer"]) {
            (_d = outcome.issue).push.apply(_d, this.orderer.doModelValidation().issue);
        }
        if (this["allergyIntolerance"]) {
            this.allergyIntolerance.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["foodPreferenceModifier"]) {
            this.foodPreferenceModifier.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["excludeFoodModifier"]) {
            this.excludeFoodModifier.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["oralDiet"]) {
            (_e = outcome.issue).push.apply(_e, this.oralDiet.doModelValidation().issue);
        }
        if (this["supplement"]) {
            this.supplement.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["enteralFormula"]) {
            (_f = outcome.issue).push.apply(_f, this.enteralFormula.doModelValidation().issue);
        }
        if (this["note"]) {
            this.note.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        return outcome;
    };
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    NutritionOrder._fts_dataType = 'NutritionOrder';
    return NutritionOrder;
}(DomainResource));

export { NutritionOrder, NutritionOrderEnteralFormula, NutritionOrderEnteralFormulaAdministration, NutritionOrderOralDiet, NutritionOrderOralDietNutrient, NutritionOrderOralDietTexture, NutritionOrderSupplement };
//# sourceMappingURL=NutritionOrder.js.map