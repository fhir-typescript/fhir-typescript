/*! @fhir-typescript/r4-core v0.0.11-beta.2 2022-05-18 */
'use strict';
import { __extends } from '../_virtual/_tslib.js';
import { DetectedissueMitigationActionCodings } from '../fhirValueSets/DetectedissueMitigationActionCodings.js';
import { ObservationStatusCodings } from '../fhirValueSets/ObservationStatusCodings.js';
import { DetectedissueCategoryCodings } from '../fhirValueSets/DetectedissueCategoryCodings.js';
import { DetectedissueSeverityCodings } from '../fhirValueSets/DetectedissueSeverityCodings.js';
import { IssueTypeCodes } from '../fhirValueSets/IssueTypeCodes.js';
import { IssueSeverityCodes } from '../fhirValueSets/IssueSeverityCodes.js';
import { BackboneElement } from './BackboneElement.js';
import { OperationOutcomeIssue } from './OperationOutcome.js';
import { DomainResource } from './DomainResource.js';
import { CodeableConcept } from './CodeableConcept.js';
import { Reference } from './Reference.js';
import { FhirDateTime } from './FhirDateTime.js';
import { Identifier } from './Identifier.js';
import { Period } from './Period.js';
import { FhirString } from './FhirString.js';
import { FhirUri } from './FhirUri.js';

// <auto-generated/>
/**
 * Supporting evidence or manifestations that provide the basis for identifying the detected issue such as a GuidanceResponse or MeasureReport.
 */
var DetectedIssueEvidence = /** @class */ (function (_super) {
    __extends(DetectedIssueEvidence, _super);
    /**
     * Default constructor for DetectedIssueEvidence - initializes any required elements to null if a value is not provided.
     */
    function DetectedIssueEvidence(source, options) {
        if (source === void 0) { source = {}; }
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, source, options) || this;
        if (source['code']) {
            _this.code = source.code.map(function (x) { return new CodeableConcept(x); });
        }
        else {
            _this.code = [];
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
    DetectedIssueEvidence.prototype.doModelValidation = function () {
        var outcome = _super.prototype.doModelValidation.call(this);
        if (this["code"]) {
            this.code.forEach(function (x) {
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
    DetectedIssueEvidence._fts_dataType = 'DetectedIssueEvidence';
    return DetectedIssueEvidence;
}(BackboneElement));
/**
 * Indicates an action that has been taken or is committed to reduce or eliminate the likelihood of the risk identified by the detected issue from manifesting.  Can also reflect an observation of known mitigating factors that may reduce/eliminate the need for any action.
 */
var DetectedIssueMitigation = /** @class */ (function (_super) {
    __extends(DetectedIssueMitigation, _super);
    /**
     * Default constructor for DetectedIssueMitigation - initializes any required elements to null if a value is not provided.
     */
    function DetectedIssueMitigation(source, options) {
        if (source === void 0) { source = {}; }
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, source, options) || this;
        if (source['action']) {
            _this.action = new CodeableConcept(source.action);
        }
        else {
            _this.action = null;
        }
        if (source['date']) {
            _this.date = new FhirDateTime({ value: source.date });
        }
        if (source['author']) {
            _this.author = new Reference(source.author);
        }
        return _this;
    }
    /**
     * Preferred-bound Value Set for action (DetectedIssue.mitigation.action)
     */
    DetectedIssueMitigation.actionPreferredCoding = function () {
        return DetectedissueMitigationActionCodings;
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    DetectedIssueMitigation.prototype.doModelValidation = function () {
        var _a, _b, _c;
        var outcome = _super.prototype.doModelValidation.call(this);
        if (!this['action']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property action:fhir.CodeableConcept fhir: DetectedIssue.mitigation.action:CodeableConcept', }));
        }
        if (this["action"]) {
            (_a = outcome.issue).push.apply(_a, this.action.doModelValidation().issue);
        }
        if (this["date"]) {
            (_b = outcome.issue).push.apply(_b, this.date.doModelValidation().issue);
        }
        if (this["author"]) {
            (_c = outcome.issue).push.apply(_c, this.author.doModelValidation().issue);
        }
        return outcome;
    };
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    DetectedIssueMitigation._fts_dataType = 'DetectedIssueMitigation';
    return DetectedIssueMitigation;
}(BackboneElement));
/**
 * Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc.
 */
var DetectedIssue = /** @class */ (function (_super) {
    __extends(DetectedIssue, _super);
    /**
     * Default constructor for DetectedIssue - initializes any required elements to null if a value is not provided.
     */
    function DetectedIssue(source, options) {
        if (source === void 0) { source = {}; }
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, source, options) || this;
        _this.resourceType = 'DetectedIssue';
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
        if (source['code']) {
            _this.code = new CodeableConcept(source.code);
        }
        if (source['severity']) {
            _this.severity = source.severity;
        }
        if (source['patient']) {
            _this.patient = new Reference(source.patient);
        }
        if (source['identified']) {
            _this.identified = source.identified;
        }
        else if (source['identifiedDateTime']) {
            _this.identified = new FhirDateTime({ value: source.identifiedDateTime });
        }
        else if (source['identifiedPeriod']) {
            _this.identified = new Period(source.identifiedPeriod);
        }
        if (source['author']) {
            _this.author = new Reference(source.author);
        }
        if (source['implicated']) {
            _this.implicated = source.implicated.map(function (x) { return new Reference(x); });
        }
        else {
            _this.implicated = [];
        }
        if (source['evidence']) {
            _this.evidence = source.evidence.map(function (x) { return new DetectedIssueEvidence(x); });
        }
        else {
            _this.evidence = [];
        }
        if (source['detail']) {
            _this.detail = new FhirString({ value: source.detail });
        }
        if (source['reference']) {
            _this.reference = new FhirUri({ value: source.reference });
        }
        if (source['mitigation']) {
            _this.mitigation = source.mitigation.map(function (x) { return new DetectedIssueMitigation(x); });
        }
        else {
            _this.mitigation = [];
        }
        return _this;
    }
    /**
     * Required-bound Value Set for status (DetectedIssue.status)
     */
    DetectedIssue.statusRequiredCoding = function () {
        return ObservationStatusCodings;
    };
    /**
     * Preferred-bound Value Set for code (DetectedIssue.code)
     */
    DetectedIssue.codePreferredCoding = function () {
        return DetectedissueCategoryCodings;
    };
    /**
     * Required-bound Value Set for severity (DetectedIssue.severity)
     */
    DetectedIssue.severityRequiredCoding = function () {
        return DetectedissueSeverityCodings;
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    DetectedIssue.prototype.doModelValidation = function () {
        var _a, _b, _c, _d, _e;
        var outcome = _super.prototype.doModelValidation.call(this);
        if (!this['resourceType']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property resourceType:"DetectedIssue" fhir: DetectedIssue.resourceType:"DetectedIssue"', }));
        }
        if (this["identifier"]) {
            this.identifier.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (!this['status']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property status:ObservationStatusCodeType fhir: DetectedIssue.status:code', }));
        }
        if (this["code"]) {
            (_a = outcome.issue).push.apply(_a, this.code.doModelValidation().issue);
        }
        if (this["patient"]) {
            (_b = outcome.issue).push.apply(_b, this.patient.doModelValidation().issue);
        }
        if (this["author"]) {
            (_c = outcome.issue).push.apply(_c, this.author.doModelValidation().issue);
        }
        if (this["implicated"]) {
            this.implicated.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["evidence"]) {
            this.evidence.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["detail"]) {
            (_d = outcome.issue).push.apply(_d, this.detail.doModelValidation().issue);
        }
        if (this["reference"]) {
            (_e = outcome.issue).push.apply(_e, this.reference.doModelValidation().issue);
        }
        if (this["mitigation"]) {
            this.mitigation.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        return outcome;
    };
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    DetectedIssue._fts_dataType = 'DetectedIssue';
    /**
     * Internal flag to properly serialize choice-type element DetectedIssue.identified[x]
     */
    DetectedIssue._fts_identifiedIsChoice = true;
    return DetectedIssue;
}(DomainResource));

export { DetectedIssue, DetectedIssueEvidence, DetectedIssueMitigation };
//# sourceMappingURL=DetectedIssue.js.map