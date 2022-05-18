/*! @fhir-typescript/r4-core v0.0.11-beta.2 2022-05-18 */
'use strict';
import { __extends } from '../_virtual/_tslib.js';
import { FmStatusCodings } from '../fhirValueSets/FmStatusCodings.js';
import { EligibilityresponsePurposeCodings } from '../fhirValueSets/EligibilityresponsePurposeCodings.js';
import { RemittanceOutcomeCodings } from '../fhirValueSets/RemittanceOutcomeCodings.js';
import { IssueTypeCodes } from '../fhirValueSets/IssueTypeCodes.js';
import { IssueSeverityCodes } from '../fhirValueSets/IssueSeverityCodes.js';
import { OperationOutcomeIssue } from './OperationOutcome.js';
import { BackboneElement } from './BackboneElement.js';
import { DomainResource } from './DomainResource.js';
import { CodeableConcept } from './CodeableConcept.js';
import { FhirUnsignedInt } from './FhirUnsignedInt.js';
import { FhirString } from './FhirString.js';
import { Money } from './Money.js';
import { Reference } from './Reference.js';
import { FhirBoolean } from './FhirBoolean.js';
import { FhirUri } from './FhirUri.js';
import { Period } from './Period.js';
import { Identifier } from './Identifier.js';
import { FhirDate } from './FhirDate.js';
import { FhirDateTime } from './FhirDateTime.js';

// <auto-generated/>
/**
 * Benefits used to date.
 */
var CoverageEligibilityResponseInsuranceItemBenefit = /** @class */ (function (_super) {
    __extends(CoverageEligibilityResponseInsuranceItemBenefit, _super);
    /**
     * Default constructor for CoverageEligibilityResponseInsuranceItemBenefit - initializes any required elements to null if a value is not provided.
     */
    function CoverageEligibilityResponseInsuranceItemBenefit(source, options) {
        if (source === void 0) { source = {}; }
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, source, options) || this;
        if (source['type']) {
            _this.type = new CodeableConcept(source.type);
        }
        else {
            _this.type = null;
        }
        if (source['allowed']) {
            _this.allowed = source.allowed;
        }
        else if (source['allowedUnsignedInt']) {
            _this.allowed = new FhirUnsignedInt({ value: source.allowedUnsignedInt });
        }
        else if (source['allowedString']) {
            _this.allowed = new FhirString({ value: source.allowedString });
        }
        else if (source['allowedMoney']) {
            _this.allowed = new Money(source.allowedMoney);
        }
        if (source['used']) {
            _this.used = source.used;
        }
        else if (source['usedUnsignedInt']) {
            _this.used = new FhirUnsignedInt({ value: source.usedUnsignedInt });
        }
        else if (source['usedString']) {
            _this.used = new FhirString({ value: source.usedString });
        }
        else if (source['usedMoney']) {
            _this.used = new Money(source.usedMoney);
        }
        return _this;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    CoverageEligibilityResponseInsuranceItemBenefit.prototype.doModelValidation = function () {
        var _a;
        var outcome = _super.prototype.doModelValidation.call(this);
        if (!this['type']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property type:fhir.CodeableConcept fhir: CoverageEligibilityResponse.insurance.item.benefit.type:CodeableConcept', }));
        }
        if (this["type"]) {
            (_a = outcome.issue).push.apply(_a, this.type.doModelValidation().issue);
        }
        return outcome;
    };
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    CoverageEligibilityResponseInsuranceItemBenefit._fts_dataType = 'CoverageEligibilityResponseInsuranceItemBenefit';
    /**
     * Internal flag to properly serialize choice-type element CoverageEligibilityResponse.insurance.item.benefit.allowed[x]
     */
    CoverageEligibilityResponseInsuranceItemBenefit._fts_allowedIsChoice = true;
    /**
     * Internal flag to properly serialize choice-type element CoverageEligibilityResponse.insurance.item.benefit.used[x]
     */
    CoverageEligibilityResponseInsuranceItemBenefit._fts_usedIsChoice = true;
    return CoverageEligibilityResponseInsuranceItemBenefit;
}(BackboneElement));
/**
 * Benefits and optionally current balances, and authorization details by category or service.
 */
var CoverageEligibilityResponseInsuranceItem = /** @class */ (function (_super) {
    __extends(CoverageEligibilityResponseInsuranceItem, _super);
    /**
     * Default constructor for CoverageEligibilityResponseInsuranceItem - initializes any required elements to null if a value is not provided.
     */
    function CoverageEligibilityResponseInsuranceItem(source, options) {
        if (source === void 0) { source = {}; }
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, source, options) || this;
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
        if (source['excluded']) {
            _this.excluded = new FhirBoolean({ value: source.excluded });
        }
        if (source['name']) {
            _this.name = new FhirString({ value: source.name });
        }
        if (source['description']) {
            _this.description = new FhirString({ value: source.description });
        }
        if (source['network']) {
            _this.network = new CodeableConcept(source.network);
        }
        if (source['unit']) {
            _this.unit = new CodeableConcept(source.unit);
        }
        if (source['term']) {
            _this.term = new CodeableConcept(source.term);
        }
        if (source['benefit']) {
            _this.benefit = source.benefit.map(function (x) { return new CoverageEligibilityResponseInsuranceItemBenefit(x); });
        }
        else {
            _this.benefit = [];
        }
        if (source['authorizationRequired']) {
            _this.authorizationRequired = new FhirBoolean({ value: source.authorizationRequired });
        }
        if (source['authorizationSupporting']) {
            _this.authorizationSupporting = source.authorizationSupporting.map(function (x) { return new CodeableConcept(x); });
        }
        else {
            _this.authorizationSupporting = [];
        }
        if (source['authorizationUrl']) {
            _this.authorizationUrl = new FhirUri({ value: source.authorizationUrl });
        }
        return _this;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    CoverageEligibilityResponseInsuranceItem.prototype.doModelValidation = function () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        var outcome = _super.prototype.doModelValidation.call(this);
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
        if (this["excluded"]) {
            (_d = outcome.issue).push.apply(_d, this.excluded.doModelValidation().issue);
        }
        if (this["name"]) {
            (_e = outcome.issue).push.apply(_e, this.name.doModelValidation().issue);
        }
        if (this["description"]) {
            (_f = outcome.issue).push.apply(_f, this.description.doModelValidation().issue);
        }
        if (this["network"]) {
            (_g = outcome.issue).push.apply(_g, this.network.doModelValidation().issue);
        }
        if (this["unit"]) {
            (_h = outcome.issue).push.apply(_h, this.unit.doModelValidation().issue);
        }
        if (this["term"]) {
            (_j = outcome.issue).push.apply(_j, this.term.doModelValidation().issue);
        }
        if (this["benefit"]) {
            this.benefit.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["authorizationRequired"]) {
            (_k = outcome.issue).push.apply(_k, this.authorizationRequired.doModelValidation().issue);
        }
        if (this["authorizationSupporting"]) {
            this.authorizationSupporting.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["authorizationUrl"]) {
            (_l = outcome.issue).push.apply(_l, this.authorizationUrl.doModelValidation().issue);
        }
        return outcome;
    };
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    CoverageEligibilityResponseInsuranceItem._fts_dataType = 'CoverageEligibilityResponseInsuranceItem';
    return CoverageEligibilityResponseInsuranceItem;
}(BackboneElement));
/**
 * All insurance coverages for the patient which may be applicable for reimbursement, of the products and services listed in the claim, are typically provided in the claim to allow insurers to confirm the ordering of the insurance coverages relative to local 'coordination of benefit' rules. One coverage (and only one) with 'focal=true' is to be used in the adjudication of this claim. Coverages appearing before the focal Coverage in the list, and where 'subrogation=false', should provide a reference to the ClaimResponse containing the adjudication results of the prior claim.
 */
var CoverageEligibilityResponseInsurance = /** @class */ (function (_super) {
    __extends(CoverageEligibilityResponseInsurance, _super);
    /**
     * Default constructor for CoverageEligibilityResponseInsurance - initializes any required elements to null if a value is not provided.
     */
    function CoverageEligibilityResponseInsurance(source, options) {
        if (source === void 0) { source = {}; }
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, source, options) || this;
        if (source['coverage']) {
            _this.coverage = new Reference(source.coverage);
        }
        else {
            _this.coverage = null;
        }
        if (source['inforce']) {
            _this.inforce = new FhirBoolean({ value: source.inforce });
        }
        if (source['benefitPeriod']) {
            _this.benefitPeriod = new Period(source.benefitPeriod);
        }
        if (source['item']) {
            _this.item = source.item.map(function (x) { return new CoverageEligibilityResponseInsuranceItem(x); });
        }
        else {
            _this.item = [];
        }
        return _this;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    CoverageEligibilityResponseInsurance.prototype.doModelValidation = function () {
        var _a, _b, _c;
        var outcome = _super.prototype.doModelValidation.call(this);
        if (!this['coverage']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property coverage:fhir.Reference fhir: CoverageEligibilityResponse.insurance.coverage:Reference', }));
        }
        if (this["coverage"]) {
            (_a = outcome.issue).push.apply(_a, this.coverage.doModelValidation().issue);
        }
        if (this["inforce"]) {
            (_b = outcome.issue).push.apply(_b, this.inforce.doModelValidation().issue);
        }
        if (this["benefitPeriod"]) {
            (_c = outcome.issue).push.apply(_c, this.benefitPeriod.doModelValidation().issue);
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
    CoverageEligibilityResponseInsurance._fts_dataType = 'CoverageEligibilityResponseInsurance';
    return CoverageEligibilityResponseInsurance;
}(BackboneElement));
/**
 * Errors encountered during the processing of the request.
 */
var CoverageEligibilityResponseError = /** @class */ (function (_super) {
    __extends(CoverageEligibilityResponseError, _super);
    /**
     * Default constructor for CoverageEligibilityResponseError - initializes any required elements to null if a value is not provided.
     */
    function CoverageEligibilityResponseError(source, options) {
        if (source === void 0) { source = {}; }
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, source, options) || this;
        if (source['code']) {
            _this.code = new CodeableConcept(source.code);
        }
        else {
            _this.code = null;
        }
        return _this;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    CoverageEligibilityResponseError.prototype.doModelValidation = function () {
        var _a;
        var outcome = _super.prototype.doModelValidation.call(this);
        if (!this['code']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property code:fhir.CodeableConcept fhir: CoverageEligibilityResponse.error.code:CodeableConcept', }));
        }
        if (this["code"]) {
            (_a = outcome.issue).push.apply(_a, this.code.doModelValidation().issue);
        }
        return outcome;
    };
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    CoverageEligibilityResponseError._fts_dataType = 'CoverageEligibilityResponseError';
    return CoverageEligibilityResponseError;
}(BackboneElement));
/**
 * This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource.
 */
var CoverageEligibilityResponse = /** @class */ (function (_super) {
    __extends(CoverageEligibilityResponse, _super);
    /**
     * Default constructor for CoverageEligibilityResponse - initializes any required elements to null if a value is not provided.
     */
    function CoverageEligibilityResponse(source, options) {
        if (source === void 0) { source = {}; }
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, source, options) || this;
        _this.resourceType = 'CoverageEligibilityResponse';
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
        if (source['requestor']) {
            _this.requestor = new Reference(source.requestor);
        }
        if (source['request']) {
            _this.request = new Reference(source.request);
        }
        else {
            _this.request = null;
        }
        if (source['outcome']) {
            _this.outcome = source.outcome;
        }
        else {
            _this.outcome = null;
        }
        if (source['disposition']) {
            _this.disposition = new FhirString({ value: source.disposition });
        }
        if (source['insurer']) {
            _this.insurer = new Reference(source.insurer);
        }
        else {
            _this.insurer = null;
        }
        if (source['insurance']) {
            _this.insurance = source.insurance.map(function (x) { return new CoverageEligibilityResponseInsurance(x); });
        }
        else {
            _this.insurance = [];
        }
        if (source['preAuthRef']) {
            _this.preAuthRef = new FhirString({ value: source.preAuthRef });
        }
        if (source['form']) {
            _this.form = new CodeableConcept(source.form);
        }
        if (source['error']) {
            _this.error = source.error.map(function (x) { return new CoverageEligibilityResponseError(x); });
        }
        else {
            _this.error = [];
        }
        return _this;
    }
    /**
     * Required-bound Value Set for status (CoverageEligibilityResponse.status)
     */
    CoverageEligibilityResponse.statusRequiredCoding = function () {
        return FmStatusCodings;
    };
    /**
     * Required-bound Value Set for purpose (CoverageEligibilityResponse.purpose)
     */
    CoverageEligibilityResponse.purposeRequiredCoding = function () {
        return EligibilityresponsePurposeCodings;
    };
    /**
     * Required-bound Value Set for outcome (CoverageEligibilityResponse.outcome)
     */
    CoverageEligibilityResponse.outcomeRequiredCoding = function () {
        return RemittanceOutcomeCodings;
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    CoverageEligibilityResponse.prototype.doModelValidation = function () {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var outcome = _super.prototype.doModelValidation.call(this);
        if (!this['resourceType']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property resourceType:"CoverageEligibilityResponse" fhir: CoverageEligibilityResponse.resourceType:"CoverageEligibilityResponse"', }));
        }
        if (this["identifier"]) {
            this.identifier.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (!this['status']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property status:FmStatusCodeType fhir: CoverageEligibilityResponse.status:code', }));
        }
        if (!this['purpose']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property purpose:EligibilityresponsePurposeCodeType[] fhir: CoverageEligibilityResponse.purpose:code', }));
        }
        else if (!Array.isArray(this.purpose)) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.StructuralIssue, diagnostics: 'Found scalar in array property purpose:EligibilityresponsePurposeCodeType[] fhir: CoverageEligibilityResponse.purpose:code', }));
        }
        else if (this.purpose.length === 0) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property purpose:EligibilityresponsePurposeCodeType[] fhir: CoverageEligibilityResponse.purpose:code', }));
        }
        if (!this['patient']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property patient:fhir.Reference fhir: CoverageEligibilityResponse.patient:Reference', }));
        }
        if (this["patient"]) {
            (_a = outcome.issue).push.apply(_a, this.patient.doModelValidation().issue);
        }
        if (!this['created']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property created:fhir.FhirDateTime fhir: CoverageEligibilityResponse.created:dateTime', }));
        }
        if (this["created"]) {
            (_b = outcome.issue).push.apply(_b, this.created.doModelValidation().issue);
        }
        if (this["requestor"]) {
            (_c = outcome.issue).push.apply(_c, this.requestor.doModelValidation().issue);
        }
        if (!this['request']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property request:fhir.Reference fhir: CoverageEligibilityResponse.request:Reference', }));
        }
        if (this["request"]) {
            (_d = outcome.issue).push.apply(_d, this.request.doModelValidation().issue);
        }
        if (!this['outcome']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property outcome:RemittanceOutcomeCodeType fhir: CoverageEligibilityResponse.outcome:code', }));
        }
        if (this["disposition"]) {
            (_e = outcome.issue).push.apply(_e, this.disposition.doModelValidation().issue);
        }
        if (!this['insurer']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property insurer:fhir.Reference fhir: CoverageEligibilityResponse.insurer:Reference', }));
        }
        if (this["insurer"]) {
            (_f = outcome.issue).push.apply(_f, this.insurer.doModelValidation().issue);
        }
        if (this["insurance"]) {
            this.insurance.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["preAuthRef"]) {
            (_g = outcome.issue).push.apply(_g, this.preAuthRef.doModelValidation().issue);
        }
        if (this["form"]) {
            (_h = outcome.issue).push.apply(_h, this.form.doModelValidation().issue);
        }
        if (this["error"]) {
            this.error.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        return outcome;
    };
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    CoverageEligibilityResponse._fts_dataType = 'CoverageEligibilityResponse';
    /**
     * Internal flag to properly serialize choice-type element CoverageEligibilityResponse.serviced[x]
     */
    CoverageEligibilityResponse._fts_servicedIsChoice = true;
    return CoverageEligibilityResponse;
}(DomainResource));

export { CoverageEligibilityResponse, CoverageEligibilityResponseError, CoverageEligibilityResponseInsurance, CoverageEligibilityResponseInsuranceItem, CoverageEligibilityResponseInsuranceItemBenefit };
//# sourceMappingURL=CoverageEligibilityResponse.js.map
