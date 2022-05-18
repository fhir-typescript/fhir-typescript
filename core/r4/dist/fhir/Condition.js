/*! @fhir-typescript/r4-core v0.0.11-beta.2 2022-05-18 */
'use strict';
import { __extends } from '../_virtual/_tslib.js';
import { ConditionClinicalCodings } from '../fhirValueSets/ConditionClinicalCodings.js';
import { ConditionVerStatusCodings } from '../fhirValueSets/ConditionVerStatusCodings.js';
import { ConditionCategoryCodings } from '../fhirValueSets/ConditionCategoryCodings.js';
import { ConditionSeverityCodings } from '../fhirValueSets/ConditionSeverityCodings.js';
import { IssueTypeCodes } from '../fhirValueSets/IssueTypeCodes.js';
import { IssueSeverityCodes } from '../fhirValueSets/IssueSeverityCodes.js';
import { BackboneElement } from './BackboneElement.js';
import { OperationOutcomeIssue } from './OperationOutcome.js';
import { DomainResource } from './DomainResource.js';
import { CodeableConcept } from './CodeableConcept.js';
import { Reference } from './Reference.js';
import { Identifier } from './Identifier.js';
import { FhirDateTime } from './FhirDateTime.js';
import { Age } from './Age.js';
import { Period } from './Period.js';
import { Range } from './Range.js';
import { FhirString } from './FhirString.js';
import { Annotation } from './Annotation.js';

// <auto-generated/>
/**
 * Clinical stage or grade of a condition. May include formal severity assessments.
 */
var ConditionStage = /** @class */ (function (_super) {
    __extends(ConditionStage, _super);
    /**
     * Default constructor for ConditionStage - initializes any required elements to null if a value is not provided.
     */
    function ConditionStage(source, options) {
        if (source === void 0) { source = {}; }
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, source, options) || this;
        if (source['summary']) {
            _this.summary = new CodeableConcept(source.summary);
        }
        if (source['assessment']) {
            _this.assessment = source.assessment.map(function (x) { return new Reference(x); });
        }
        else {
            _this.assessment = [];
        }
        if (source['type']) {
            _this.type = new CodeableConcept(source.type);
        }
        return _this;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    ConditionStage.prototype.doModelValidation = function () {
        var _a, _b;
        var outcome = _super.prototype.doModelValidation.call(this);
        if (this["summary"]) {
            (_a = outcome.issue).push.apply(_a, this.summary.doModelValidation().issue);
        }
        if (this["assessment"]) {
            this.assessment.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["type"]) {
            (_b = outcome.issue).push.apply(_b, this.type.doModelValidation().issue);
        }
        return outcome;
    };
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    ConditionStage._fts_dataType = 'ConditionStage';
    return ConditionStage;
}(BackboneElement));
/**
 * The evidence may be a simple list of coded symptoms/manifestations, or references to observations or formal assessments, or both.
 */
var ConditionEvidence = /** @class */ (function (_super) {
    __extends(ConditionEvidence, _super);
    /**
     * Default constructor for ConditionEvidence - initializes any required elements to null if a value is not provided.
     */
    function ConditionEvidence(source, options) {
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
    ConditionEvidence.prototype.doModelValidation = function () {
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
    ConditionEvidence._fts_dataType = 'ConditionEvidence';
    return ConditionEvidence;
}(BackboneElement));
/**
 * A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern.
 */
var Condition = /** @class */ (function (_super) {
    __extends(Condition, _super);
    /**
     * Default constructor for Condition - initializes any required elements to null if a value is not provided.
     */
    function Condition(source, options) {
        if (source === void 0) { source = {}; }
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, source, options) || this;
        _this.resourceType = 'Condition';
        if (source['identifier']) {
            _this.identifier = source.identifier.map(function (x) { return new Identifier(x); });
        }
        else {
            _this.identifier = [];
        }
        if (source['clinicalStatus']) {
            _this.clinicalStatus = new CodeableConcept(source.clinicalStatus);
        }
        if (source['verificationStatus']) {
            _this.verificationStatus = new CodeableConcept(source.verificationStatus);
        }
        if (source['category']) {
            _this.category = source.category.map(function (x) { return new CodeableConcept(x); });
        }
        else {
            _this.category = [];
        }
        if (source['severity']) {
            _this.severity = new CodeableConcept(source.severity);
        }
        if (source['code']) {
            _this.code = new CodeableConcept(source.code);
        }
        if (source['bodySite']) {
            _this.bodySite = source.bodySite.map(function (x) { return new CodeableConcept(x); });
        }
        else {
            _this.bodySite = [];
        }
        if (source['subject']) {
            _this.subject = new Reference(source.subject);
        }
        else {
            _this.subject = null;
        }
        if (source['encounter']) {
            _this.encounter = new Reference(source.encounter);
        }
        if (source['onset']) {
            _this.onset = source.onset;
        }
        else if (source['onsetDateTime']) {
            _this.onset = new FhirDateTime({ value: source.onsetDateTime });
        }
        else if (source['onsetAge']) {
            _this.onset = new Age(source.onsetAge);
        }
        else if (source['onsetPeriod']) {
            _this.onset = new Period(source.onsetPeriod);
        }
        else if (source['onsetRange']) {
            _this.onset = new Range(source.onsetRange);
        }
        else if (source['onsetString']) {
            _this.onset = new FhirString({ value: source.onsetString });
        }
        if (source['abatement']) {
            _this.abatement = source.abatement;
        }
        else if (source['abatementDateTime']) {
            _this.abatement = new FhirDateTime({ value: source.abatementDateTime });
        }
        else if (source['abatementAge']) {
            _this.abatement = new Age(source.abatementAge);
        }
        else if (source['abatementPeriod']) {
            _this.abatement = new Period(source.abatementPeriod);
        }
        else if (source['abatementRange']) {
            _this.abatement = new Range(source.abatementRange);
        }
        else if (source['abatementString']) {
            _this.abatement = new FhirString({ value: source.abatementString });
        }
        if (source['recordedDate']) {
            _this.recordedDate = new FhirDateTime({ value: source.recordedDate });
        }
        if (source['recorder']) {
            _this.recorder = new Reference(source.recorder);
        }
        if (source['asserter']) {
            _this.asserter = new Reference(source.asserter);
        }
        if (source['stage']) {
            _this.stage = source.stage.map(function (x) { return new ConditionStage(x); });
        }
        else {
            _this.stage = [];
        }
        if (source['evidence']) {
            _this.evidence = source.evidence.map(function (x) { return new ConditionEvidence(x); });
        }
        else {
            _this.evidence = [];
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
     * Required-bound Value Set for clinicalStatus (Condition.clinicalStatus)
     */
    Condition.clinicalStatusRequiredCoding = function () {
        return ConditionClinicalCodings;
    };
    /**
     * Required-bound Value Set for verificationStatus (Condition.verificationStatus)
     */
    Condition.verificationStatusRequiredCoding = function () {
        return ConditionVerStatusCodings;
    };
    /**
     * Extensible-bound Value Set for category (Condition.category)
     */
    Condition.categoryExtensibleCoding = function () {
        return ConditionCategoryCodings;
    };
    /**
     * Preferred-bound Value Set for severity (Condition.severity)
     */
    Condition.severityPreferredCoding = function () {
        return ConditionSeverityCodings;
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    Condition.prototype.doModelValidation = function () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        var outcome = _super.prototype.doModelValidation.call(this);
        if (!this['resourceType']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property resourceType:"Condition" fhir: Condition.resourceType:"Condition"', }));
        }
        if (this["identifier"]) {
            this.identifier.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["clinicalStatus"]) {
            (_a = outcome.issue).push.apply(_a, this.clinicalStatus.doModelValidation().issue);
        }
        if (this["verificationStatus"]) {
            (_b = outcome.issue).push.apply(_b, this.verificationStatus.doModelValidation().issue);
        }
        if (this["category"]) {
            this.category.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["severity"]) {
            (_c = outcome.issue).push.apply(_c, this.severity.doModelValidation().issue);
        }
        if (this["code"]) {
            (_d = outcome.issue).push.apply(_d, this.code.doModelValidation().issue);
        }
        if (this["bodySite"]) {
            this.bodySite.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (!this['subject']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property subject:fhir.Reference fhir: Condition.subject:Reference', }));
        }
        if (this["subject"]) {
            (_e = outcome.issue).push.apply(_e, this.subject.doModelValidation().issue);
        }
        if (this["encounter"]) {
            (_f = outcome.issue).push.apply(_f, this.encounter.doModelValidation().issue);
        }
        if (this["recordedDate"]) {
            (_g = outcome.issue).push.apply(_g, this.recordedDate.doModelValidation().issue);
        }
        if (this["recorder"]) {
            (_h = outcome.issue).push.apply(_h, this.recorder.doModelValidation().issue);
        }
        if (this["asserter"]) {
            (_j = outcome.issue).push.apply(_j, this.asserter.doModelValidation().issue);
        }
        if (this["stage"]) {
            this.stage.forEach(function (x) {
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
    Condition._fts_dataType = 'Condition';
    /**
     * Internal flag to properly serialize choice-type element Condition.onset[x]
     */
    Condition._fts_onsetIsChoice = true;
    /**
     * Internal flag to properly serialize choice-type element Condition.abatement[x]
     */
    Condition._fts_abatementIsChoice = true;
    return Condition;
}(DomainResource));

export { Condition, ConditionEvidence, ConditionStage };
//# sourceMappingURL=Condition.js.map
