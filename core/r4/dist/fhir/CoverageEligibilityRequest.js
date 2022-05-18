/*! @fhir-typescript/r4-core v0.0.11-beta.2 2022-05-18 */
'use strict';
import { __extends } from '../_virtual/_tslib.js';
import { FmStatusCodings } from '../fhirValueSets/FmStatusCodings.js';
import { EligibilityrequestPurposeCodings } from '../fhirValueSets/EligibilityrequestPurposeCodings.js';
import { IssueTypeCodes } from '../fhirValueSets/IssueTypeCodes.js';
import { IssueSeverityCodes } from '../fhirValueSets/IssueSeverityCodes.js';
import { OperationOutcomeIssue } from './OperationOutcome.js';
import { BackboneElement } from './BackboneElement.js';
import { DomainResource } from './DomainResource.js';
import { FhirPositiveInt } from './FhirPositiveInt.js';
import { Reference } from './Reference.js';
import { FhirBoolean } from './FhirBoolean.js';
import { FhirString } from './FhirString.js';
import { CodeableConcept } from './CodeableConcept.js';
import { Quantity } from './Quantity.js';
import { Money } from './Money.js';
import { Identifier } from './Identifier.js';
import { FhirDate } from './FhirDate.js';
import { Period } from './Period.js';
import { FhirDateTime } from './FhirDateTime.js';

// <auto-generated/>
/**
 * Often there are multiple jurisdiction specific valuesets which are required.
 */
var CoverageEligibilityRequestSupportingInfo = /** @class */ (function (_super) {
    __extends(CoverageEligibilityRequestSupportingInfo, _super);
    /**
     * Default constructor for CoverageEligibilityRequestSupportingInfo - initializes any required elements to null if a value is not provided.
     */
    function CoverageEligibilityRequestSupportingInfo(source, options) {
        if (source === void 0) { source = {}; }
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, source, options) || this;
        if (source['sequence']) {
            _this.sequence = new FhirPositiveInt({ value: source.sequence });
        }
        else {
            _this.sequence = null;
        }
        if (source['information']) {
            _this.information = new Reference(source.information);
        }
        else {
            _this.information = null;
        }
        if (source['appliesToAll']) {
            _this.appliesToAll = new FhirBoolean({ value: source.appliesToAll });
        }
        return _this;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    CoverageEligibilityRequestSupportingInfo.prototype.doModelValidation = function () {
        var _a, _b, _c;
        var outcome = _super.prototype.doModelValidation.call(this);
        if (!this['sequence']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property sequence:fhir.FhirPositiveInt fhir: CoverageEligibilityRequest.supportingInfo.sequence:positiveInt', }));
        }
        if (this["sequence"]) {
            (_a = outcome.issue).push.apply(_a, this.sequence.doModelValidation().issue);
        }
        if (!this['information']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property information:fhir.Reference fhir: CoverageEligibilityRequest.supportingInfo.information:Reference', }));
        }
        if (this["information"]) {
            (_b = outcome.issue).push.apply(_b, this.information.doModelValidation().issue);
        }
        if (this["appliesToAll"]) {
            (_c = outcome.issue).push.apply(_c, this.appliesToAll.doModelValidation().issue);
        }
        return outcome;
    };
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    CoverageEligibilityRequestSupportingInfo._fts_dataType = 'CoverageEligibilityRequestSupportingInfo';
    return CoverageEligibilityRequestSupportingInfo;
}(BackboneElement));
/**
 * All insurance coverages for the patient which may be applicable for reimbursement, of the products and services listed in the claim, are typically provided in the claim to allow insurers to confirm the ordering of the insurance coverages relative to local 'coordination of benefit' rules. One coverage (and only one) with 'focal=true' is to be used in the adjudication of this claim. Coverages appearing before the focal Coverage in the list, and where 'subrogation=false', should provide a reference to the ClaimResponse containing the adjudication results of the prior claim.
 */
var CoverageEligibilityRequestInsurance = /** @class */ (function (_super) {
    __extends(CoverageEligibilityRequestInsurance, _super);
    /**
     * Default constructor for CoverageEligibilityRequestInsurance - initializes any required elements to null if a value is not provided.
     */
    function CoverageEligibilityRequestInsurance(source, options) {
        if (source === void 0) { source = {}; }
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, source, options) || this;
        if (source['focal']) {
            _this.focal = new FhirBoolean({ value: source.focal });
        }
        if (source['coverage']) {
            _this.coverage = new Reference(source.coverage);
        }
        else {
            _this.coverage = null;
        }
        if (source['businessArrangement']) {
            _this.businessArrangement = new FhirString({ value: source.businessArrangement });
        }
        return _this;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    CoverageEligibilityRequestInsurance.prototype.doModelValidation = function () {
        var _a, _b, _c;
        var outcome = _super.prototype.doModelValidation.call(this);
        if (this["focal"]) {
            (_a = outcome.issue).push.apply(_a, this.focal.doModelValidation().issue);
        }
        if (!this['coverage']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property coverage:fhir.Reference fhir: CoverageEligibilityRequest.insurance.coverage:Reference', }));
        }
        if (this["coverage"]) {
            (_b = outcome.issue).push.apply(_b, this.coverage.doModelValidation().issue);
        }
        if (this["businessArrangement"]) {
            (_c = outcome.issue).push.apply(_c, this.businessArrangement.doModelValidation().issue);
        }
        return outcome;
    };
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    CoverageEligibilityRequestInsurance._fts_dataType = 'CoverageEligibilityRequestInsurance';
    return CoverageEligibilityRequestInsurance;
}(BackboneElement));
/**
 * Patient diagnosis for which care is sought.
 */
var CoverageEligibilityRequestItemDiagnosis = /** @class */ (function (_super) {
    __extends(CoverageEligibilityRequestItemDiagnosis, _super);
    /**
     * Default constructor for CoverageEligibilityRequestItemDiagnosis - initializes any required elements to null if a value is not provided.
     */
    function CoverageEligibilityRequestItemDiagnosis(source, options) {
        if (source === void 0) { source = {}; }
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, source, options) || this;
        if (source['diagnosis']) {
            _this.diagnosis = source.diagnosis;
        }
        else if (source['diagnosisCodeableConcept']) {
            _this.diagnosis = new CodeableConcept(source.diagnosisCodeableConcept);
        }
        else if (source['diagnosisReference']) {
            _this.diagnosis = new Reference(source.diagnosisReference);
        }
        return _this;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    CoverageEligibilityRequestItemDiagnosis.prototype.doModelValidation = function () {
        var outcome = _super.prototype.doModelValidation.call(this);
        return outcome;
    };
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    CoverageEligibilityRequestItemDiagnosis._fts_dataType = 'CoverageEligibilityRequestItemDiagnosis';
    /**
     * Internal flag to properly serialize choice-type element CoverageEligibilityRequest.item.diagnosis.diagnosis[x]
     */
    CoverageEligibilityRequestItemDiagnosis._fts_diagnosisIsChoice = true;
    return CoverageEligibilityRequestItemDiagnosis;
}(BackboneElement));
/**
 * Service categories or billable services for which benefit details and/or an authorization prior to service delivery may be required by the payor.
 */
var CoverageEligibilityRequestItem = /** @class */ (function (_super) {
    __extends(CoverageEligibilityRequestItem, _super);
    /**
     * Default constructor for CoverageEligibilityRequestItem - initializes any required elements to null if a value is not provided.
     */
    function CoverageEligibilityRequestItem(source, options) {
        if (source === void 0) { source = {}; }
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, source, options) || this;
        if (source['supportingInfoSequence']) {
            _this.supportingInfoSequence = source.supportingInfoSequence.map(function (x) { return new FhirPositiveInt({ value: x }); });
        }
        else {
            _this.supportingInfoSequence = [];
        }
        if (source['category']) {
            _this.category = new CodeableConcept(source.category);
        }
        if (source['productOrService']) {
            _this.productOrService = new CodeableConcept(source.productOrService);
        }
        if (source['modifier']) {
            _this.modifier = source.modifier.map(function (x) { return new CodeableConcept(x); });
        }
        else {
            _this.modifier = [];
        }
        if (source['provider']) {
            _this.provider = new Reference(source.provider);
        }
        if (source['quantity']) {
            _this.quantity = new Quantity(source.quantity);
        }
        if (source['unitPrice']) {
            _this.unitPrice = new Money(source.unitPrice);
        }
        if (source['facility']) {
            _this.facility = new Reference(source.facility);
        }
        if (source['diagnosis']) {
            _this.diagnosis = source.diagnosis.map(function (x) { return new CoverageEligibilityRequestItemDiagnosis(x); });
        }
        else {
            _this.diagnosis = [];
        }
        if (source['detail']) {
            _this.detail = source.detail.map(function (x) { return new Reference(x); });
        }
        else {
            _this.detail = [];
        }
        return _this;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    CoverageEligibilityRequestItem.prototype.doModelValidation = function () {
        var _a, _b, _c, _d, _e, _f;
        var outcome = _super.prototype.doModelValidation.call(this);
        if (this["supportingInfoSequence"]) {
            this.supportingInfoSequence.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["category"]) {
            (_a = outcome.issue).push.apply(_a, this.category.doModelValidation().issue);
        }
        if (this["productOrService"]) {
            (_b = outcome.issue).push.apply(_b, this.productOrService.doModelValidation().issue);
        }
        if (this["modifier"]) {
            this.modifier.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["provider"]) {
            (_c = outcome.issue).push.apply(_c, this.provider.doModelValidation().issue);
        }
        if (this["quantity"]) {
            (_d = outcome.issue).push.apply(_d, this.quantity.doModelValidation().issue);
        }
        if (this["unitPrice"]) {
            (_e = outcome.issue).push.apply(_e, this.unitPrice.doModelValidation().issue);
        }
        if (this["facility"]) {
            (_f = outcome.issue).push.apply(_f, this.facility.doModelValidation().issue);
        }
        if (this["diagnosis"]) {
            this.diagnosis.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["detail"]) {
            this.detail.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        return outcome;
    };
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    CoverageEligibilityRequestItem._fts_dataType = 'CoverageEligibilityRequestItem';
    return CoverageEligibilityRequestItem;
}(BackboneElement));
/**
 * The CoverageEligibilityRequest provides patient and insurance coverage information to an insurer for them to respond, in the form of an CoverageEligibilityResponse, with information regarding whether the stated coverage is valid and in-force and optionally to provide the insurance details of the policy.
 */
var CoverageEligibilityRequest = /** @class */ (function (_super) {
    __extends(CoverageEligibilityRequest, _super);
    /**
     * Default constructor for CoverageEligibilityRequest - initializes any required elements to null if a value is not provided.
     */
    function CoverageEligibilityRequest(source, options) {
        if (source === void 0) { source = {}; }
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, source, options) || this;
        _this.resourceType = 'CoverageEligibilityRequest';
        if (source['identifier']) {
            _this.identifier = source.identifier.map(function (x) { return new Identifier(x); });
        }
        else {
            _this.identifier = [];
        }
        if (source['status']) {
            _this.status = source.status;
        }
        else {
            _this.status = null;
        }
        if (source['priority']) {
            _this.priority = new CodeableConcept(source.priority);
        }
        if (source['purpose']) {
            _this.purpose = source.purpose.map(function (x) { return x; });
        }
        else {
            _this.purpose = [];
        }
        if (source['patient']) {
            _this.patient = new Reference(source.patient);
        }
        else {
            _this.patient = null;
        }
        if (source['serviced']) {
            _this.serviced = source.serviced;
        }
        else if (source['servicedDate']) {
            _this.serviced = new FhirDate({ value: source.servicedDate });
        }
        else if (source['servicedPeriod']) {
            _this.serviced = new Period(source.servicedPeriod);
        }
        if (source['created']) {
            _this.created = new FhirDateTime({ value: source.created });
        }
        else {
            _this.created = null;
        }
        if (source['enterer']) {
            _this.enterer = new Reference(source.enterer);
        }
        if (source['provider']) {
            _this.provider = new Reference(source.provider);
        }
        if (source['insurer']) {
            _this.insurer = new Reference(source.insurer);
        }
        else {
            _this.insurer = null;
        }
        if (source['facility']) {
            _this.facility = new Reference(source.facility);
        }
        if (source['supportingInfo']) {
            _this.supportingInfo = source.supportingInfo.map(function (x) { return new CoverageEligibilityRequestSupportingInfo(x); });
        }
        else {
            _this.supportingInfo = [];
        }
        if (source['insurance']) {
            _this.insurance = source.insurance.map(function (x) { return new CoverageEligibilityRequestInsurance(x); });
        }
        else {
            _this.insurance = [];
        }
        if (source['item']) {
            _this.item = source.item.map(function (x) { return new CoverageEligibilityRequestItem(x); });
        }
        else {
            _this.item = [];
        }
        return _this;
    }
    /**
     * Required-bound Value Set for status (CoverageEligibilityRequest.status)
     */
    CoverageEligibilityRequest.statusRequiredCoding = function () {
        return FmStatusCodings;
    };
    /**
     * Required-bound Value Set for purpose (CoverageEligibilityRequest.purpose)
     */
    CoverageEligibilityRequest.purposeRequiredCoding = function () {
        return EligibilityrequestPurposeCodings;
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    CoverageEligibilityRequest.prototype.doModelValidation = function () {
        var _a, _b, _c, _d, _e, _f, _g;
        var outcome = _super.prototype.doModelValidation.call(this);
        if (!this['resourceType']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property resourceType:"CoverageEligibilityRequest" fhir: CoverageEligibilityRequest.resourceType:"CoverageEligibilityRequest"', }));
        }
        if (this["identifier"]) {
            this.identifier.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (!this['status']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property status:FmStatusCodeType fhir: CoverageEligibilityRequest.status:code', }));
        }
        if (this["priority"]) {
            (_a = outcome.issue).push.apply(_a, this.priority.doModelValidation().issue);
        }
        if (!this['purpose']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property purpose:EligibilityrequestPurposeCodeType[] fhir: CoverageEligibilityRequest.purpose:code', }));
        }
        else if (!Array.isArray(this.purpose)) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.StructuralIssue, diagnostics: 'Found scalar in array property purpose:EligibilityrequestPurposeCodeType[] fhir: CoverageEligibilityRequest.purpose:code', }));
        }
        else if (this.purpose.length === 0) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property purpose:EligibilityrequestPurposeCodeType[] fhir: CoverageEligibilityRequest.purpose:code', }));
        }
        if (!this['patient']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property patient:fhir.Reference fhir: CoverageEligibilityRequest.patient:Reference', }));
        }
        if (this["patient"]) {
            (_b = outcome.issue).push.apply(_b, this.patient.doModelValidation().issue);
        }
        if (!this['created']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property created:fhir.FhirDateTime fhir: CoverageEligibilityRequest.created:dateTime', }));
        }
        if (this["created"]) {
            (_c = outcome.issue).push.apply(_c, this.created.doModelValidation().issue);
        }
        if (this["enterer"]) {
            (_d = outcome.issue).push.apply(_d, this.enterer.doModelValidation().issue);
        }
        if (this["provider"]) {
            (_e = outcome.issue).push.apply(_e, this.provider.doModelValidation().issue);
        }
        if (!this['insurer']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property insurer:fhir.Reference fhir: CoverageEligibilityRequest.insurer:Reference', }));
        }
        if (this["insurer"]) {
            (_f = outcome.issue).push.apply(_f, this.insurer.doModelValidation().issue);
        }
        if (this["facility"]) {
            (_g = outcome.issue).push.apply(_g, this.facility.doModelValidation().issue);
        }
        if (this["supportingInfo"]) {
            this.supportingInfo.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["insurance"]) {
            this.insurance.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["item"]) {
            this.item.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        return outcome;
    };
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    CoverageEligibilityRequest._fts_dataType = 'CoverageEligibilityRequest';
    /**
     * Internal flag to properly serialize choice-type element CoverageEligibilityRequest.serviced[x]
     */
    CoverageEligibilityRequest._fts_servicedIsChoice = true;
    return CoverageEligibilityRequest;
}(DomainResource));

export { CoverageEligibilityRequest, CoverageEligibilityRequestInsurance, CoverageEligibilityRequestItem, CoverageEligibilityRequestItemDiagnosis, CoverageEligibilityRequestSupportingInfo };
//# sourceMappingURL=CoverageEligibilityRequest.js.map
