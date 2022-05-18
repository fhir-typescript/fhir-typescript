/*! @fhir-typescript/r4-core v0.0.11-beta.2 2022-05-18 */
'use strict';
import { __extends } from '../_virtual/_tslib.js';
import { DeviceNametypeCodings } from '../fhirValueSets/DeviceNametypeCodings.js';
import { IssueTypeCodes } from '../fhirValueSets/IssueTypeCodes.js';
import { IssueSeverityCodes } from '../fhirValueSets/IssueSeverityCodes.js';
import { OperationOutcomeIssue } from './OperationOutcome.js';
import { BackboneElement } from './BackboneElement.js';
import { DomainResource } from './DomainResource.js';
import { FhirString } from './FhirString.js';
import { FhirUri } from './FhirUri.js';
import { CodeableConcept } from './CodeableConcept.js';
import { Quantity } from './Quantity.js';
import { FhirBoolean } from './FhirBoolean.js';
import { Identifier } from './Identifier.js';
import { Reference } from './Reference.js';
import { ProductShelfLife } from './ProductShelfLife.js';
import { ProdCharacteristic } from './ProdCharacteristic.js';
import { ContactPoint } from './ContactPoint.js';
import { Annotation } from './Annotation.js';

// <auto-generated/>
/**
 * Unique device identifier (UDI) assigned to device label or package.  Note that the Device may include multiple udiCarriers as it either may include just the udiCarrier for the jurisdiction it is sold, or for multiple jurisdictions it could have been sold.
 */
var DeviceDefinitionUdiDeviceIdentifier = /** @class */ (function (_super) {
    __extends(DeviceDefinitionUdiDeviceIdentifier, _super);
    /**
     * Default constructor for DeviceDefinitionUdiDeviceIdentifier - initializes any required elements to null if a value is not provided.
     */
    function DeviceDefinitionUdiDeviceIdentifier(source, options) {
        if (source === void 0) { source = {}; }
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, source, options) || this;
        if (source['deviceIdentifier']) {
            _this.deviceIdentifier = new FhirString({ value: source.deviceIdentifier });
        }
        else {
            _this.deviceIdentifier = null;
        }
        if (source['issuer']) {
            _this.issuer = new FhirUri({ value: source.issuer });
        }
        else {
            _this.issuer = null;
        }
        if (source['jurisdiction']) {
            _this.jurisdiction = new FhirUri({ value: source.jurisdiction });
        }
        else {
            _this.jurisdiction = null;
        }
        return _this;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    DeviceDefinitionUdiDeviceIdentifier.prototype.doModelValidation = function () {
        var _a, _b, _c;
        var outcome = _super.prototype.doModelValidation.call(this);
        if (!this['deviceIdentifier']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property deviceIdentifier:fhir.FhirString fhir: DeviceDefinition.udiDeviceIdentifier.deviceIdentifier:string', }));
        }
        if (this["deviceIdentifier"]) {
            (_a = outcome.issue).push.apply(_a, this.deviceIdentifier.doModelValidation().issue);
        }
        if (!this['issuer']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property issuer:fhir.FhirUri fhir: DeviceDefinition.udiDeviceIdentifier.issuer:uri', }));
        }
        if (this["issuer"]) {
            (_b = outcome.issue).push.apply(_b, this.issuer.doModelValidation().issue);
        }
        if (!this['jurisdiction']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property jurisdiction:fhir.FhirUri fhir: DeviceDefinition.udiDeviceIdentifier.jurisdiction:uri', }));
        }
        if (this["jurisdiction"]) {
            (_c = outcome.issue).push.apply(_c, this.jurisdiction.doModelValidation().issue);
        }
        return outcome;
    };
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    DeviceDefinitionUdiDeviceIdentifier._fts_dataType = 'DeviceDefinitionUdiDeviceIdentifier';
    return DeviceDefinitionUdiDeviceIdentifier;
}(BackboneElement));
/**
 * A name given to the device to identify it.
 */
var DeviceDefinitionDeviceName = /** @class */ (function (_super) {
    __extends(DeviceDefinitionDeviceName, _super);
    /**
     * Default constructor for DeviceDefinitionDeviceName - initializes any required elements to null if a value is not provided.
     */
    function DeviceDefinitionDeviceName(source, options) {
        if (source === void 0) { source = {}; }
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, source, options) || this;
        if (source['name']) {
            _this.name = new FhirString({ value: source.name });
        }
        else {
            _this.name = null;
        }
        if (source['type']) {
            _this.type = source.type;
        }
        else {
            _this.type = null;
        }
        return _this;
    }
    /**
     * Required-bound Value Set for type (DeviceDefinition.deviceName.type)
     */
    DeviceDefinitionDeviceName.typeRequiredCoding = function () {
        return DeviceNametypeCodings;
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    DeviceDefinitionDeviceName.prototype.doModelValidation = function () {
        var _a;
        var outcome = _super.prototype.doModelValidation.call(this);
        if (!this['name']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property name:fhir.FhirString fhir: DeviceDefinition.deviceName.name:string', }));
        }
        if (this["name"]) {
            (_a = outcome.issue).push.apply(_a, this.name.doModelValidation().issue);
        }
        if (!this['type']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property type:DeviceNametypeCodeType fhir: DeviceDefinition.deviceName.type:code', }));
        }
        return outcome;
    };
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    DeviceDefinitionDeviceName._fts_dataType = 'DeviceDefinitionDeviceName';
    return DeviceDefinitionDeviceName;
}(BackboneElement));
/**
 * The capabilities supported on a  device, the standards to which the device conforms for a particular purpose, and used for the communication.
 */
var DeviceDefinitionSpecialization = /** @class */ (function (_super) {
    __extends(DeviceDefinitionSpecialization, _super);
    /**
     * Default constructor for DeviceDefinitionSpecialization - initializes any required elements to null if a value is not provided.
     */
    function DeviceDefinitionSpecialization(source, options) {
        if (source === void 0) { source = {}; }
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, source, options) || this;
        if (source['systemType']) {
            _this.systemType = new FhirString({ value: source.systemType });
        }
        else {
            _this.systemType = null;
        }
        if (source['version']) {
            _this.version = new FhirString({ value: source.version });
        }
        return _this;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    DeviceDefinitionSpecialization.prototype.doModelValidation = function () {
        var _a, _b;
        var outcome = _super.prototype.doModelValidation.call(this);
        if (!this['systemType']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property systemType:fhir.FhirString fhir: DeviceDefinition.specialization.systemType:string', }));
        }
        if (this["systemType"]) {
            (_a = outcome.issue).push.apply(_a, this.systemType.doModelValidation().issue);
        }
        if (this["version"]) {
            (_b = outcome.issue).push.apply(_b, this.version.doModelValidation().issue);
        }
        return outcome;
    };
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    DeviceDefinitionSpecialization._fts_dataType = 'DeviceDefinitionSpecialization';
    return DeviceDefinitionSpecialization;
}(BackboneElement));
/**
 * Device capabilities.
 */
var DeviceDefinitionCapability = /** @class */ (function (_super) {
    __extends(DeviceDefinitionCapability, _super);
    /**
     * Default constructor for DeviceDefinitionCapability - initializes any required elements to null if a value is not provided.
     */
    function DeviceDefinitionCapability(source, options) {
        if (source === void 0) { source = {}; }
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, source, options) || this;
        if (source['type']) {
            _this.type = new CodeableConcept(source.type);
        }
        else {
            _this.type = null;
        }
        if (source['description']) {
            _this.description = source.description.map(function (x) { return new CodeableConcept(x); });
        }
        else {
            _this.description = [];
        }
        return _this;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    DeviceDefinitionCapability.prototype.doModelValidation = function () {
        var _a;
        var outcome = _super.prototype.doModelValidation.call(this);
        if (!this['type']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property type:fhir.CodeableConcept fhir: DeviceDefinition.capability.type:CodeableConcept', }));
        }
        if (this["type"]) {
            (_a = outcome.issue).push.apply(_a, this.type.doModelValidation().issue);
        }
        if (this["description"]) {
            this.description.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        return outcome;
    };
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    DeviceDefinitionCapability._fts_dataType = 'DeviceDefinitionCapability';
    return DeviceDefinitionCapability;
}(BackboneElement));
/**
 * The actual configuration settings of a device as it actually operates, e.g., regulation status, time properties.
 */
var DeviceDefinitionProperty = /** @class */ (function (_super) {
    __extends(DeviceDefinitionProperty, _super);
    /**
     * Default constructor for DeviceDefinitionProperty - initializes any required elements to null if a value is not provided.
     */
    function DeviceDefinitionProperty(source, options) {
        if (source === void 0) { source = {}; }
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, source, options) || this;
        if (source['type']) {
            _this.type = new CodeableConcept(source.type);
        }
        else {
            _this.type = null;
        }
        if (source['valueQuantity']) {
            _this.valueQuantity = source.valueQuantity.map(function (x) { return new Quantity(x); });
        }
        else {
            _this.valueQuantity = [];
        }
        if (source['valueCode']) {
            _this.valueCode = source.valueCode.map(function (x) { return new CodeableConcept(x); });
        }
        else {
            _this.valueCode = [];
        }
        return _this;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    DeviceDefinitionProperty.prototype.doModelValidation = function () {
        var _a;
        var outcome = _super.prototype.doModelValidation.call(this);
        if (!this['type']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property type:fhir.CodeableConcept fhir: DeviceDefinition.property.type:CodeableConcept', }));
        }
        if (this["type"]) {
            (_a = outcome.issue).push.apply(_a, this.type.doModelValidation().issue);
        }
        if (this["valueQuantity"]) {
            this.valueQuantity.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["valueCode"]) {
            this.valueCode.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        return outcome;
    };
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    DeviceDefinitionProperty._fts_dataType = 'DeviceDefinitionProperty';
    return DeviceDefinitionProperty;
}(BackboneElement));
/**
 * A substance used to create the material(s) of which the device is made.
 */
var DeviceDefinitionMaterial = /** @class */ (function (_super) {
    __extends(DeviceDefinitionMaterial, _super);
    /**
     * Default constructor for DeviceDefinitionMaterial - initializes any required elements to null if a value is not provided.
     */
    function DeviceDefinitionMaterial(source, options) {
        if (source === void 0) { source = {}; }
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, source, options) || this;
        if (source['substance']) {
            _this.substance = new CodeableConcept(source.substance);
        }
        else {
            _this.substance = null;
        }
        if (source['alternate']) {
            _this.alternate = new FhirBoolean({ value: source.alternate });
        }
        if (source['allergenicIndicator']) {
            _this.allergenicIndicator = new FhirBoolean({ value: source.allergenicIndicator });
        }
        return _this;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    DeviceDefinitionMaterial.prototype.doModelValidation = function () {
        var _a, _b, _c;
        var outcome = _super.prototype.doModelValidation.call(this);
        if (!this['substance']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property substance:fhir.CodeableConcept fhir: DeviceDefinition.material.substance:CodeableConcept', }));
        }
        if (this["substance"]) {
            (_a = outcome.issue).push.apply(_a, this.substance.doModelValidation().issue);
        }
        if (this["alternate"]) {
            (_b = outcome.issue).push.apply(_b, this.alternate.doModelValidation().issue);
        }
        if (this["allergenicIndicator"]) {
            (_c = outcome.issue).push.apply(_c, this.allergenicIndicator.doModelValidation().issue);
        }
        return outcome;
    };
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    DeviceDefinitionMaterial._fts_dataType = 'DeviceDefinitionMaterial';
    return DeviceDefinitionMaterial;
}(BackboneElement));
/**
 * The characteristics, operational status and capabilities of a medical-related component of a medical device.
 */
var DeviceDefinition = /** @class */ (function (_super) {
    __extends(DeviceDefinition, _super);
    /**
     * Default constructor for DeviceDefinition - initializes any required elements to null if a value is not provided.
     */
    function DeviceDefinition(source, options) {
        if (source === void 0) { source = {}; }
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, source, options) || this;
        _this.resourceType = 'DeviceDefinition';
        if (source['identifier']) {
            _this.identifier = source.identifier.map(function (x) { return new Identifier(x); });
        }
        else {
            _this.identifier = [];
        }
        if (source['udiDeviceIdentifier']) {
            _this.udiDeviceIdentifier = source.udiDeviceIdentifier.map(function (x) { return new DeviceDefinitionUdiDeviceIdentifier(x); });
        }
        else {
            _this.udiDeviceIdentifier = [];
        }
        if (source['manufacturer']) {
            _this.manufacturer = source.manufacturer;
        }
        else if (source['manufacturerString']) {
            _this.manufacturer = new FhirString({ value: source.manufacturerString });
        }
        else if (source['manufacturerReference']) {
            _this.manufacturer = new Reference(source.manufacturerReference);
        }
        if (source['deviceName']) {
            _this.deviceName = source.deviceName.map(function (x) { return new DeviceDefinitionDeviceName(x); });
        }
        else {
            _this.deviceName = [];
        }
        if (source['modelNumber']) {
            _this.modelNumber = new FhirString({ value: source.modelNumber });
        }
        if (source['type']) {
            _this.type = new CodeableConcept(source.type);
        }
        if (source['specialization']) {
            _this.specialization = source.specialization.map(function (x) { return new DeviceDefinitionSpecialization(x); });
        }
        else {
            _this.specialization = [];
        }
        if (source['version']) {
            _this.version = source.version.map(function (x) { return new FhirString({ value: x }); });
        }
        else {
            _this.version = [];
        }
        if (source['safety']) {
            _this.safety = source.safety.map(function (x) { return new CodeableConcept(x); });
        }
        else {
            _this.safety = [];
        }
        if (source['shelfLifeStorage']) {
            _this.shelfLifeStorage = source.shelfLifeStorage.map(function (x) { return new ProductShelfLife(x); });
        }
        else {
            _this.shelfLifeStorage = [];
        }
        if (source['physicalCharacteristics']) {
            _this.physicalCharacteristics = new ProdCharacteristic(source.physicalCharacteristics);
        }
        if (source['languageCode']) {
            _this.languageCode = source.languageCode.map(function (x) { return new CodeableConcept(x); });
        }
        else {
            _this.languageCode = [];
        }
        if (source['capability']) {
            _this.capability = source.capability.map(function (x) { return new DeviceDefinitionCapability(x); });
        }
        else {
            _this.capability = [];
        }
        if (source['property']) {
            _this.property = source.property.map(function (x) { return new DeviceDefinitionProperty(x); });
        }
        else {
            _this.property = [];
        }
        if (source['owner']) {
            _this.owner = new Reference(source.owner);
        }
        if (source['contact']) {
            _this.contact = source.contact.map(function (x) { return new ContactPoint(x); });
        }
        else {
            _this.contact = [];
        }
        if (source['url']) {
            _this.url = new FhirUri({ value: source.url });
        }
        if (source['onlineInformation']) {
            _this.onlineInformation = new FhirUri({ value: source.onlineInformation });
        }
        if (source['note']) {
            _this.note = source.note.map(function (x) { return new Annotation(x); });
        }
        else {
            _this.note = [];
        }
        if (source['quantity']) {
            _this.quantity = new Quantity(source.quantity);
        }
        if (source['parentDevice']) {
            _this.parentDevice = new Reference(source.parentDevice);
        }
        if (source['material']) {
            _this.material = source.material.map(function (x) { return new DeviceDefinitionMaterial(x); });
        }
        else {
            _this.material = [];
        }
        return _this;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    DeviceDefinition.prototype.doModelValidation = function () {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var outcome = _super.prototype.doModelValidation.call(this);
        if (!this['resourceType']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property resourceType:"DeviceDefinition" fhir: DeviceDefinition.resourceType:"DeviceDefinition"', }));
        }
        if (this["identifier"]) {
            this.identifier.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["udiDeviceIdentifier"]) {
            this.udiDeviceIdentifier.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["deviceName"]) {
            this.deviceName.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["modelNumber"]) {
            (_a = outcome.issue).push.apply(_a, this.modelNumber.doModelValidation().issue);
        }
        if (this["type"]) {
            (_b = outcome.issue).push.apply(_b, this.type.doModelValidation().issue);
        }
        if (this["specialization"]) {
            this.specialization.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["version"]) {
            this.version.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["safety"]) {
            this.safety.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["shelfLifeStorage"]) {
            this.shelfLifeStorage.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["physicalCharacteristics"]) {
            (_c = outcome.issue).push.apply(_c, this.physicalCharacteristics.doModelValidation().issue);
        }
        if (this["languageCode"]) {
            this.languageCode.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["capability"]) {
            this.capability.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["property"]) {
            this.property.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["owner"]) {
            (_d = outcome.issue).push.apply(_d, this.owner.doModelValidation().issue);
        }
        if (this["contact"]) {
            this.contact.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["url"]) {
            (_e = outcome.issue).push.apply(_e, this.url.doModelValidation().issue);
        }
        if (this["onlineInformation"]) {
            (_f = outcome.issue).push.apply(_f, this.onlineInformation.doModelValidation().issue);
        }
        if (this["note"]) {
            this.note.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["quantity"]) {
            (_g = outcome.issue).push.apply(_g, this.quantity.doModelValidation().issue);
        }
        if (this["parentDevice"]) {
            (_h = outcome.issue).push.apply(_h, this.parentDevice.doModelValidation().issue);
        }
        if (this["material"]) {
            this.material.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        return outcome;
    };
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    DeviceDefinition._fts_dataType = 'DeviceDefinition';
    /**
     * Internal flag to properly serialize choice-type element DeviceDefinition.manufacturer[x]
     */
    DeviceDefinition._fts_manufacturerIsChoice = true;
    return DeviceDefinition;
}(DomainResource));

export { DeviceDefinition, DeviceDefinitionCapability, DeviceDefinitionDeviceName, DeviceDefinitionMaterial, DeviceDefinitionProperty, DeviceDefinitionSpecialization, DeviceDefinitionUdiDeviceIdentifier };
//# sourceMappingURL=DeviceDefinition.js.map