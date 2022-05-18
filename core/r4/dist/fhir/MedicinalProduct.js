/*! @fhir-typescript/r4-core v0.0.11-beta.2 2022-05-18 */
'use strict';
import { __extends } from '../_virtual/_tslib.js';
import { IssueTypeCodes } from '../fhirValueSets/IssueTypeCodes.js';
import { IssueSeverityCodes } from '../fhirValueSets/IssueSeverityCodes.js';
import { OperationOutcomeIssue } from './OperationOutcome.js';
import { BackboneElement } from './BackboneElement.js';
import { DomainResource } from './DomainResource.js';
import { FhirString } from './FhirString.js';
import { Coding } from './Coding.js';
import { CodeableConcept } from './CodeableConcept.js';
import { Identifier } from './Identifier.js';
import { FhirDateTime } from './FhirDateTime.js';
import { Reference } from './Reference.js';
import { MarketingStatus } from './MarketingStatus.js';

// <auto-generated/>
/**
 * Coding words or phrases of the name.
 */
var MedicinalProductNameNamePart = /** @class */ (function (_super) {
    __extends(MedicinalProductNameNamePart, _super);
    /**
     * Default constructor for MedicinalProductNameNamePart - initializes any required elements to null if a value is not provided.
     */
    function MedicinalProductNameNamePart(source, options) {
        if (source === void 0) { source = {}; }
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, source, options) || this;
        if (source['part']) {
            _this.part = new FhirString({ value: source.part });
        }
        else {
            _this.part = null;
        }
        if (source['type']) {
            _this.type = new Coding(source.type);
        }
        else {
            _this.type = null;
        }
        return _this;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    MedicinalProductNameNamePart.prototype.doModelValidation = function () {
        var _a, _b;
        var outcome = _super.prototype.doModelValidation.call(this);
        if (!this['part']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property part:fhir.FhirString fhir: MedicinalProduct.name.namePart.part:string', }));
        }
        if (this["part"]) {
            (_a = outcome.issue).push.apply(_a, this.part.doModelValidation().issue);
        }
        if (!this['type']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property type:fhir.Coding fhir: MedicinalProduct.name.namePart.type:Coding', }));
        }
        if (this["type"]) {
            (_b = outcome.issue).push.apply(_b, this.type.doModelValidation().issue);
        }
        return outcome;
    };
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    MedicinalProductNameNamePart._fts_dataType = 'MedicinalProductNameNamePart';
    return MedicinalProductNameNamePart;
}(BackboneElement));
/**
 * Country where the name applies.
 */
var MedicinalProductNameCountryLanguage = /** @class */ (function (_super) {
    __extends(MedicinalProductNameCountryLanguage, _super);
    /**
     * Default constructor for MedicinalProductNameCountryLanguage - initializes any required elements to null if a value is not provided.
     */
    function MedicinalProductNameCountryLanguage(source, options) {
        if (source === void 0) { source = {}; }
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, source, options) || this;
        if (source['country']) {
            _this.country = new CodeableConcept(source.country);
        }
        else {
            _this.country = null;
        }
        if (source['jurisdiction']) {
            _this.jurisdiction = new CodeableConcept(source.jurisdiction);
        }
        if (source['language']) {
            _this.language = new CodeableConcept(source.language);
        }
        else {
            _this.language = null;
        }
        return _this;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    MedicinalProductNameCountryLanguage.prototype.doModelValidation = function () {
        var _a, _b, _c;
        var outcome = _super.prototype.doModelValidation.call(this);
        if (!this['country']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property country:fhir.CodeableConcept fhir: MedicinalProduct.name.countryLanguage.country:CodeableConcept', }));
        }
        if (this["country"]) {
            (_a = outcome.issue).push.apply(_a, this.country.doModelValidation().issue);
        }
        if (this["jurisdiction"]) {
            (_b = outcome.issue).push.apply(_b, this.jurisdiction.doModelValidation().issue);
        }
        if (!this['language']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property language:fhir.CodeableConcept fhir: MedicinalProduct.name.countryLanguage.language:CodeableConcept', }));
        }
        if (this["language"]) {
            (_c = outcome.issue).push.apply(_c, this.language.doModelValidation().issue);
        }
        return outcome;
    };
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    MedicinalProductNameCountryLanguage._fts_dataType = 'MedicinalProductNameCountryLanguage';
    return MedicinalProductNameCountryLanguage;
}(BackboneElement));
/**
 * The product's name, including full name and possibly coded parts.
 */
var MedicinalProductName = /** @class */ (function (_super) {
    __extends(MedicinalProductName, _super);
    /**
     * Default constructor for MedicinalProductName - initializes any required elements to null if a value is not provided.
     */
    function MedicinalProductName(source, options) {
        if (source === void 0) { source = {}; }
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, source, options) || this;
        if (source['productName']) {
            _this.productName = new FhirString({ value: source.productName });
        }
        else {
            _this.productName = null;
        }
        if (source['namePart']) {
            _this.namePart = source.namePart.map(function (x) { return new MedicinalProductNameNamePart(x); });
        }
        else {
            _this.namePart = [];
        }
        if (source['countryLanguage']) {
            _this.countryLanguage = source.countryLanguage.map(function (x) { return new MedicinalProductNameCountryLanguage(x); });
        }
        else {
            _this.countryLanguage = [];
        }
        return _this;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    MedicinalProductName.prototype.doModelValidation = function () {
        var _a;
        var outcome = _super.prototype.doModelValidation.call(this);
        if (!this['productName']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property productName:fhir.FhirString fhir: MedicinalProduct.name.productName:string', }));
        }
        if (this["productName"]) {
            (_a = outcome.issue).push.apply(_a, this.productName.doModelValidation().issue);
        }
        if (this["namePart"]) {
            this.namePart.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["countryLanguage"]) {
            this.countryLanguage.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        return outcome;
    };
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    MedicinalProductName._fts_dataType = 'MedicinalProductName';
    return MedicinalProductName;
}(BackboneElement));
/**
 * An operation applied to the product, for manufacturing or adminsitrative purpose.
 */
var MedicinalProductManufacturingBusinessOperation = /** @class */ (function (_super) {
    __extends(MedicinalProductManufacturingBusinessOperation, _super);
    /**
     * Default constructor for MedicinalProductManufacturingBusinessOperation - initializes any required elements to null if a value is not provided.
     */
    function MedicinalProductManufacturingBusinessOperation(source, options) {
        if (source === void 0) { source = {}; }
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, source, options) || this;
        if (source['operationType']) {
            _this.operationType = new CodeableConcept(source.operationType);
        }
        if (source['authorisationReferenceNumber']) {
            _this.authorisationReferenceNumber = new Identifier(source.authorisationReferenceNumber);
        }
        if (source['effectiveDate']) {
            _this.effectiveDate = new FhirDateTime({ value: source.effectiveDate });
        }
        if (source['confidentialityIndicator']) {
            _this.confidentialityIndicator = new CodeableConcept(source.confidentialityIndicator);
        }
        if (source['manufacturer']) {
            _this.manufacturer = source.manufacturer.map(function (x) { return new Reference(x); });
        }
        else {
            _this.manufacturer = [];
        }
        if (source['regulator']) {
            _this.regulator = new Reference(source.regulator);
        }
        return _this;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    MedicinalProductManufacturingBusinessOperation.prototype.doModelValidation = function () {
        var _a, _b, _c, _d, _e;
        var outcome = _super.prototype.doModelValidation.call(this);
        if (this["operationType"]) {
            (_a = outcome.issue).push.apply(_a, this.operationType.doModelValidation().issue);
        }
        if (this["authorisationReferenceNumber"]) {
            (_b = outcome.issue).push.apply(_b, this.authorisationReferenceNumber.doModelValidation().issue);
        }
        if (this["effectiveDate"]) {
            (_c = outcome.issue).push.apply(_c, this.effectiveDate.doModelValidation().issue);
        }
        if (this["confidentialityIndicator"]) {
            (_d = outcome.issue).push.apply(_d, this.confidentialityIndicator.doModelValidation().issue);
        }
        if (this["manufacturer"]) {
            this.manufacturer.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["regulator"]) {
            (_e = outcome.issue).push.apply(_e, this.regulator.doModelValidation().issue);
        }
        return outcome;
    };
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    MedicinalProductManufacturingBusinessOperation._fts_dataType = 'MedicinalProductManufacturingBusinessOperation';
    return MedicinalProductManufacturingBusinessOperation;
}(BackboneElement));
/**
 * Indicates if the medicinal product has an orphan designation for the treatment of a rare disease.
 */
var MedicinalProductSpecialDesignation = /** @class */ (function (_super) {
    __extends(MedicinalProductSpecialDesignation, _super);
    /**
     * Default constructor for MedicinalProductSpecialDesignation - initializes any required elements to null if a value is not provided.
     */
    function MedicinalProductSpecialDesignation(source, options) {
        if (source === void 0) { source = {}; }
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, source, options) || this;
        if (source['identifier']) {
            _this.identifier = source.identifier.map(function (x) { return new Identifier(x); });
        }
        else {
            _this.identifier = [];
        }
        if (source['type']) {
            _this.type = new CodeableConcept(source.type);
        }
        if (source['intendedUse']) {
            _this.intendedUse = new CodeableConcept(source.intendedUse);
        }
        if (source['indication']) {
            _this.indication = source.indication;
        }
        else if (source['indicationCodeableConcept']) {
            _this.indication = new CodeableConcept(source.indicationCodeableConcept);
        }
        else if (source['indicationReference']) {
            _this.indication = new Reference(source.indicationReference);
        }
        if (source['status']) {
            _this.status = new CodeableConcept(source.status);
        }
        if (source['date']) {
            _this.date = new FhirDateTime({ value: source.date });
        }
        if (source['species']) {
            _this.species = new CodeableConcept(source.species);
        }
        return _this;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    MedicinalProductSpecialDesignation.prototype.doModelValidation = function () {
        var _a, _b, _c, _d, _e;
        var outcome = _super.prototype.doModelValidation.call(this);
        if (this["identifier"]) {
            this.identifier.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["type"]) {
            (_a = outcome.issue).push.apply(_a, this.type.doModelValidation().issue);
        }
        if (this["intendedUse"]) {
            (_b = outcome.issue).push.apply(_b, this.intendedUse.doModelValidation().issue);
        }
        if (this["status"]) {
            (_c = outcome.issue).push.apply(_c, this.status.doModelValidation().issue);
        }
        if (this["date"]) {
            (_d = outcome.issue).push.apply(_d, this.date.doModelValidation().issue);
        }
        if (this["species"]) {
            (_e = outcome.issue).push.apply(_e, this.species.doModelValidation().issue);
        }
        return outcome;
    };
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    MedicinalProductSpecialDesignation._fts_dataType = 'MedicinalProductSpecialDesignation';
    /**
     * Internal flag to properly serialize choice-type element MedicinalProduct.specialDesignation.indication[x]
     */
    MedicinalProductSpecialDesignation._fts_indicationIsChoice = true;
    return MedicinalProductSpecialDesignation;
}(BackboneElement));
/**
 * Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use).
 */
var MedicinalProduct = /** @class */ (function (_super) {
    __extends(MedicinalProduct, _super);
    /**
     * Default constructor for MedicinalProduct - initializes any required elements to null if a value is not provided.
     */
    function MedicinalProduct(source, options) {
        if (source === void 0) { source = {}; }
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, source, options) || this;
        _this.resourceType = 'MedicinalProduct';
        if (source['identifier']) {
            _this.identifier = source.identifier.map(function (x) { return new Identifier(x); });
        }
        else {
            _this.identifier = [];
        }
        if (source['type']) {
            _this.type = new CodeableConcept(source.type);
        }
        if (source['domain']) {
            _this.domain = new Coding(source.domain);
        }
        if (source['combinedPharmaceuticalDoseForm']) {
            _this.combinedPharmaceuticalDoseForm = new CodeableConcept(source.combinedPharmaceuticalDoseForm);
        }
        if (source['legalStatusOfSupply']) {
            _this.legalStatusOfSupply = new CodeableConcept(source.legalStatusOfSupply);
        }
        if (source['additionalMonitoringIndicator']) {
            _this.additionalMonitoringIndicator = new CodeableConcept(source.additionalMonitoringIndicator);
        }
        if (source['specialMeasures']) {
            _this.specialMeasures = source.specialMeasures.map(function (x) { return new FhirString({ value: x }); });
        }
        else {
            _this.specialMeasures = [];
        }
        if (source['paediatricUseIndicator']) {
            _this.paediatricUseIndicator = new CodeableConcept(source.paediatricUseIndicator);
        }
        if (source['productClassification']) {
            _this.productClassification = source.productClassification.map(function (x) { return new CodeableConcept(x); });
        }
        else {
            _this.productClassification = [];
        }
        if (source['marketingStatus']) {
            _this.marketingStatus = source.marketingStatus.map(function (x) { return new MarketingStatus(x); });
        }
        else {
            _this.marketingStatus = [];
        }
        if (source['pharmaceuticalProduct']) {
            _this.pharmaceuticalProduct = source.pharmaceuticalProduct.map(function (x) { return new Reference(x); });
        }
        else {
            _this.pharmaceuticalProduct = [];
        }
        if (source['packagedMedicinalProduct']) {
            _this.packagedMedicinalProduct = source.packagedMedicinalProduct.map(function (x) { return new Reference(x); });
        }
        else {
            _this.packagedMedicinalProduct = [];
        }
        if (source['attachedDocument']) {
            _this.attachedDocument = source.attachedDocument.map(function (x) { return new Reference(x); });
        }
        else {
            _this.attachedDocument = [];
        }
        if (source['masterFile']) {
            _this.masterFile = source.masterFile.map(function (x) { return new Reference(x); });
        }
        else {
            _this.masterFile = [];
        }
        if (source['contact']) {
            _this.contact = source.contact.map(function (x) { return new Reference(x); });
        }
        else {
            _this.contact = [];
        }
        if (source['clinicalTrial']) {
            _this.clinicalTrial = source.clinicalTrial.map(function (x) { return new Reference(x); });
        }
        else {
            _this.clinicalTrial = [];
        }
        if (source['name']) {
            _this.name = source.name.map(function (x) { return new MedicinalProductName(x); });
        }
        else {
            _this.name = [];
        }
        if (source['crossReference']) {
            _this.crossReference = source.crossReference.map(function (x) { return new Identifier(x); });
        }
        else {
            _this.crossReference = [];
        }
        if (source['manufacturingBusinessOperation']) {
            _this.manufacturingBusinessOperation = source.manufacturingBusinessOperation.map(function (x) { return new MedicinalProductManufacturingBusinessOperation(x); });
        }
        else {
            _this.manufacturingBusinessOperation = [];
        }
        if (source['specialDesignation']) {
            _this.specialDesignation = source.specialDesignation.map(function (x) { return new MedicinalProductSpecialDesignation(x); });
        }
        else {
            _this.specialDesignation = [];
        }
        return _this;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    MedicinalProduct.prototype.doModelValidation = function () {
        var _a, _b, _c, _d, _e, _f;
        var outcome = _super.prototype.doModelValidation.call(this);
        if (!this['resourceType']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property resourceType:"MedicinalProduct" fhir: MedicinalProduct.resourceType:"MedicinalProduct"', }));
        }
        if (this["identifier"]) {
            this.identifier.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["type"]) {
            (_a = outcome.issue).push.apply(_a, this.type.doModelValidation().issue);
        }
        if (this["domain"]) {
            (_b = outcome.issue).push.apply(_b, this.domain.doModelValidation().issue);
        }
        if (this["combinedPharmaceuticalDoseForm"]) {
            (_c = outcome.issue).push.apply(_c, this.combinedPharmaceuticalDoseForm.doModelValidation().issue);
        }
        if (this["legalStatusOfSupply"]) {
            (_d = outcome.issue).push.apply(_d, this.legalStatusOfSupply.doModelValidation().issue);
        }
        if (this["additionalMonitoringIndicator"]) {
            (_e = outcome.issue).push.apply(_e, this.additionalMonitoringIndicator.doModelValidation().issue);
        }
        if (this["specialMeasures"]) {
            this.specialMeasures.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["paediatricUseIndicator"]) {
            (_f = outcome.issue).push.apply(_f, this.paediatricUseIndicator.doModelValidation().issue);
        }
        if (this["productClassification"]) {
            this.productClassification.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["marketingStatus"]) {
            this.marketingStatus.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["pharmaceuticalProduct"]) {
            this.pharmaceuticalProduct.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["packagedMedicinalProduct"]) {
            this.packagedMedicinalProduct.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["attachedDocument"]) {
            this.attachedDocument.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["masterFile"]) {
            this.masterFile.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["contact"]) {
            this.contact.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["clinicalTrial"]) {
            this.clinicalTrial.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (!this['name']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property name:fhir.MedicinalProductName[] fhir: MedicinalProduct.name:name', }));
        }
        else if (!Array.isArray(this.name)) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.StructuralIssue, diagnostics: 'Found scalar in array property name:fhir.MedicinalProductName[] fhir: MedicinalProduct.name:name', }));
        }
        else if (this.name.length === 0) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property name:fhir.MedicinalProductName[] fhir: MedicinalProduct.name:name', }));
        }
        if (this["name"]) {
            this.name.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["crossReference"]) {
            this.crossReference.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["manufacturingBusinessOperation"]) {
            this.manufacturingBusinessOperation.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["specialDesignation"]) {
            this.specialDesignation.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        return outcome;
    };
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    MedicinalProduct._fts_dataType = 'MedicinalProduct';
    return MedicinalProduct;
}(DomainResource));

export { MedicinalProduct, MedicinalProductManufacturingBusinessOperation, MedicinalProductName, MedicinalProductNameCountryLanguage, MedicinalProductNameNamePart, MedicinalProductSpecialDesignation };
//# sourceMappingURL=MedicinalProduct.js.map