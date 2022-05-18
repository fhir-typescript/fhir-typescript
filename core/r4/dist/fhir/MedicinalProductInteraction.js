/*! @fhir-typescript/r4-core v0.0.11-beta.2 2022-05-18 */
'use strict';
import { __extends } from '../_virtual/_tslib.js';
import { IssueTypeCodes } from '../fhirValueSets/IssueTypeCodes.js';
import { IssueSeverityCodes } from '../fhirValueSets/IssueSeverityCodes.js';
import { OperationOutcomeIssue } from './OperationOutcome.js';
import { BackboneElement } from './BackboneElement.js';
import { DomainResource } from './DomainResource.js';
import { Reference } from './Reference.js';
import { CodeableConcept } from './CodeableConcept.js';
import { FhirString } from './FhirString.js';

// <auto-generated/>
/**
 * The specific medication, food or laboratory test that interacts.
 */
var MedicinalProductInteractionInteractant = /** @class */ (function (_super) {
    __extends(MedicinalProductInteractionInteractant, _super);
    /**
     * Default constructor for MedicinalProductInteractionInteractant - initializes any required elements to null if a value is not provided.
     */
    function MedicinalProductInteractionInteractant(source, options) {
        if (source === void 0) { source = {}; }
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, source, options) || this;
        if (source['item']) {
            _this.item = source.item;
        }
        else if (source['itemReference']) {
            _this.item = new Reference(source.itemReference);
        }
        else if (source['itemCodeableConcept']) {
            _this.item = new CodeableConcept(source.itemCodeableConcept);
        }
        else {
            _this.item = null;
        }
        return _this;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    MedicinalProductInteractionInteractant.prototype.doModelValidation = function () {
        var outcome = _super.prototype.doModelValidation.call(this);
        if (!this['item']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property item: fhir: MedicinalProductInteraction.interactant.item[x]:', }));
        }
        return outcome;
    };
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    MedicinalProductInteractionInteractant._fts_dataType = 'MedicinalProductInteractionInteractant';
    /**
     * Internal flag to properly serialize choice-type element MedicinalProductInteraction.interactant.item[x]
     */
    MedicinalProductInteractionInteractant._fts_itemIsChoice = true;
    return MedicinalProductInteractionInteractant;
}(BackboneElement));
/**
 * The interactions of the medicinal product with other medicinal products, or other forms of interactions.
 */
var MedicinalProductInteraction = /** @class */ (function (_super) {
    __extends(MedicinalProductInteraction, _super);
    /**
     * Default constructor for MedicinalProductInteraction - initializes any required elements to null if a value is not provided.
     */
    function MedicinalProductInteraction(source, options) {
        if (source === void 0) { source = {}; }
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, source, options) || this;
        _this.resourceType = 'MedicinalProductInteraction';
        if (source['subject']) {
            _this.subject = source.subject.map(function (x) { return new Reference(x); });
        }
        else {
            _this.subject = [];
        }
        if (source['description']) {
            _this.description = new FhirString({ value: source.description });
        }
        if (source['interactant']) {
            _this.interactant = source.interactant.map(function (x) { return new MedicinalProductInteractionInteractant(x); });
        }
        else {
            _this.interactant = [];
        }
        if (source['type']) {
            _this.type = new CodeableConcept(source.type);
        }
        if (source['effect']) {
            _this.effect = new CodeableConcept(source.effect);
        }
        if (source['incidence']) {
            _this.incidence = new CodeableConcept(source.incidence);
        }
        if (source['management']) {
            _this.management = new CodeableConcept(source.management);
        }
        return _this;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    MedicinalProductInteraction.prototype.doModelValidation = function () {
        var _a, _b, _c, _d, _e;
        var outcome = _super.prototype.doModelValidation.call(this);
        if (!this['resourceType']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property resourceType:"MedicinalProductInteraction" fhir: MedicinalProductInteraction.resourceType:"MedicinalProductInteraction"', }));
        }
        if (this["subject"]) {
            this.subject.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["description"]) {
            (_a = outcome.issue).push.apply(_a, this.description.doModelValidation().issue);
        }
        if (this["interactant"]) {
            this.interactant.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["type"]) {
            (_b = outcome.issue).push.apply(_b, this.type.doModelValidation().issue);
        }
        if (this["effect"]) {
            (_c = outcome.issue).push.apply(_c, this.effect.doModelValidation().issue);
        }
        if (this["incidence"]) {
            (_d = outcome.issue).push.apply(_d, this.incidence.doModelValidation().issue);
        }
        if (this["management"]) {
            (_e = outcome.issue).push.apply(_e, this.management.doModelValidation().issue);
        }
        return outcome;
    };
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    MedicinalProductInteraction._fts_dataType = 'MedicinalProductInteraction';
    return MedicinalProductInteraction;
}(DomainResource));

export { MedicinalProductInteraction, MedicinalProductInteractionInteractant };
//# sourceMappingURL=MedicinalProductInteraction.js.map