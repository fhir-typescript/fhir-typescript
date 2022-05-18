/*! @fhir-typescript/r4-core v0.0.11-beta.2 2022-05-18 */
'use strict';
import { __extends } from '../_virtual/_tslib.js';
import { SupplyrequestStatusCodings } from '../fhirValueSets/SupplyrequestStatusCodings.js';
import { RequestPriorityCodings } from '../fhirValueSets/RequestPriorityCodings.js';
import { IssueTypeCodes } from '../fhirValueSets/IssueTypeCodes.js';
import { IssueSeverityCodes } from '../fhirValueSets/IssueSeverityCodes.js';
import { BackboneElement } from './BackboneElement.js';
import { OperationOutcomeIssue } from './OperationOutcome.js';
import { DomainResource } from './DomainResource.js';
import { CodeableConcept } from './CodeableConcept.js';
import { Quantity } from './Quantity.js';
import { Range } from './Range.js';
import { FhirBoolean } from './FhirBoolean.js';
import { Identifier } from './Identifier.js';
import { Reference } from './Reference.js';
import { FhirDateTime } from './FhirDateTime.js';
import { Period } from './Period.js';
import { Timing } from './Timing.js';

// <auto-generated/>
/**
 * Specific parameters for the ordered item.  For example, the size of the indicated item.
 */
var SupplyRequestParameter = /** @class */ (function (_super) {
    __extends(SupplyRequestParameter, _super);
    /**
     * Default constructor for SupplyRequestParameter - initializes any required elements to null if a value is not provided.
     */
    function SupplyRequestParameter(source, options) {
        if (source === void 0) { source = {}; }
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, source, options) || this;
        if (source['code']) {
            _this.code = new CodeableConcept(source.code);
        }
        if (source['value']) {
            _this.value = source.value;
        }
        else if (source['valueCodeableConcept']) {
            _this.value = new CodeableConcept(source.valueCodeableConcept);
        }
        else if (source['valueQuantity']) {
            _this.value = new Quantity(source.valueQuantity);
        }
        else if (source['valueRange']) {
            _this.value = new Range(source.valueRange);
        }
        else if (source['valueBoolean']) {
            _this.value = new FhirBoolean({ value: source.valueBoolean });
        }
        return _this;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    SupplyRequestParameter.prototype.doModelValidation = function () {
        var _a;
        var outcome = _super.prototype.doModelValidation.call(this);
        if (this["code"]) {
            (_a = outcome.issue).push.apply(_a, this.code.doModelValidation().issue);
        }
        return outcome;
    };
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    SupplyRequestParameter._fts_dataType = 'SupplyRequestParameter';
    /**
     * Internal flag to properly serialize choice-type element SupplyRequest.parameter.value[x]
     */
    SupplyRequestParameter._fts_valueIsChoice = true;
    return SupplyRequestParameter;
}(BackboneElement));
/**
 * A record of a request for a medication, substance or device used in the healthcare setting.
 */
var SupplyRequest = /** @class */ (function (_super) {
    __extends(SupplyRequest, _super);
    /**
     * Default constructor for SupplyRequest - initializes any required elements to null if a value is not provided.
     */
    function SupplyRequest(source, options) {
        if (source === void 0) { source = {}; }
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, source, options) || this;
        _this.resourceType = 'SupplyRequest';
        if (source['identifier']) {
            _this.identifier = source.identifier.map(function (x) { return new Identifier(x); });
        }
        else {
            _this.identifier = [];
        }
        if (source['status']) {
            _this.status = source.status;
        }
        if (source['category']) {
            _this.category = new CodeableConcept(source.category);
        }
        if (source['priority']) {
            _this.priority = source.priority;
        }
        if (source['item']) {
            _this.item = source.item;
        }
        else if (source['itemCodeableConcept']) {
            _this.item = new CodeableConcept(source.itemCodeableConcept);
        }
        else if (source['itemReference']) {
            _this.item = new Reference(source.itemReference);
        }
        else {
            _this.item = null;
        }
        if (source['quantity']) {
            _this.quantity = new Quantity(source.quantity);
        }
        else {
            _this.quantity = null;
        }
        if (source['parameter']) {
            _this.parameter = source.parameter.map(function (x) { return new SupplyRequestParameter(x); });
        }
        else {
            _this.parameter = [];
        }
        if (source['occurrence']) {
            _this.occurrence = source.occurrence;
        }
        else if (source['occurrenceDateTime']) {
            _this.occurrence = new FhirDateTime({ value: source.occurrenceDateTime });
        }
        else if (source['occurrencePeriod']) {
            _this.occurrence = new Period(source.occurrencePeriod);
        }
        else if (source['occurrenceTiming']) {
            _this.occurrence = new Timing(source.occurrenceTiming);
        }
        if (source['authoredOn']) {
            _this.authoredOn = new FhirDateTime({ value: source.authoredOn });
        }
        if (source['requester']) {
            _this.requester = new Reference(source.requester);
        }
        if (source['supplier']) {
            _this.supplier = source.supplier.map(function (x) { return new Reference(x); });
        }
        else {
            _this.supplier = [];
        }
        if (source['reasonCode']) {
            _this.reasonCode = source.reasonCode.map(function (x) { return new CodeableConcept(x); });
        }
        else {
            _this.reasonCode = [];
        }
        if (source['reasonReference']) {
            _this.reasonReference = source.reasonReference.map(function (x) { return new Reference(x); });
        }
        else {
            _this.reasonReference = [];
        }
        if (source['deliverFrom']) {
            _this.deliverFrom = new Reference(source.deliverFrom);
        }
        if (source['deliverTo']) {
            _this.deliverTo = new Reference(source.deliverTo);
        }
        return _this;
    }
    /**
     * Required-bound Value Set for status (SupplyRequest.status)
     */
    SupplyRequest.statusRequiredCoding = function () {
        return SupplyrequestStatusCodings;
    };
    /**
     * Required-bound Value Set for priority (SupplyRequest.priority)
     */
    SupplyRequest.priorityRequiredCoding = function () {
        return RequestPriorityCodings;
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    SupplyRequest.prototype.doModelValidation = function () {
        var _a, _b, _c, _d, _e, _f;
        var outcome = _super.prototype.doModelValidation.call(this);
        if (!this['resourceType']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property resourceType:"SupplyRequest" fhir: SupplyRequest.resourceType:"SupplyRequest"', }));
        }
        if (this["identifier"]) {
            this.identifier.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["category"]) {
            (_a = outcome.issue).push.apply(_a, this.category.doModelValidation().issue);
        }
        if (!this['item']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property item: fhir: SupplyRequest.item[x]:', }));
        }
        if (!this['quantity']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property quantity:fhir.Quantity fhir: SupplyRequest.quantity:Quantity', }));
        }
        if (this["quantity"]) {
            (_b = outcome.issue).push.apply(_b, this.quantity.doModelValidation().issue);
        }
        if (this["parameter"]) {
            this.parameter.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["authoredOn"]) {
            (_c = outcome.issue).push.apply(_c, this.authoredOn.doModelValidation().issue);
        }
        if (this["requester"]) {
            (_d = outcome.issue).push.apply(_d, this.requester.doModelValidation().issue);
        }
        if (this["supplier"]) {
            this.supplier.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["reasonCode"]) {
            this.reasonCode.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["reasonReference"]) {
            this.reasonReference.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["deliverFrom"]) {
            (_e = outcome.issue).push.apply(_e, this.deliverFrom.doModelValidation().issue);
        }
        if (this["deliverTo"]) {
            (_f = outcome.issue).push.apply(_f, this.deliverTo.doModelValidation().issue);
        }
        return outcome;
    };
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    SupplyRequest._fts_dataType = 'SupplyRequest';
    /**
     * Internal flag to properly serialize choice-type element SupplyRequest.item[x]
     */
    SupplyRequest._fts_itemIsChoice = true;
    /**
     * Internal flag to properly serialize choice-type element SupplyRequest.occurrence[x]
     */
    SupplyRequest._fts_occurrenceIsChoice = true;
    return SupplyRequest;
}(DomainResource));

export { SupplyRequest, SupplyRequestParameter };
//# sourceMappingURL=SupplyRequest.js.map