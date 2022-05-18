/*! @fhir-typescript/r4-core v0.0.11-beta.2 2022-05-18 */
'use strict';
import { __extends } from '../_virtual/_tslib.js';
import { ImmunizationEvaluationStatusCodings } from '../fhirValueSets/ImmunizationEvaluationStatusCodings.js';
import { IssueTypeCodes } from '../fhirValueSets/IssueTypeCodes.js';
import { IssueSeverityCodes } from '../fhirValueSets/IssueSeverityCodes.js';
import { OperationOutcomeIssue } from './OperationOutcome.js';
import { DomainResource } from './DomainResource.js';
import { Identifier } from './Identifier.js';
import { Reference } from './Reference.js';
import { FhirDateTime } from './FhirDateTime.js';
import { CodeableConcept } from './CodeableConcept.js';
import { FhirString } from './FhirString.js';
import { FhirPositiveInt } from './FhirPositiveInt.js';

// <auto-generated/>
/**
 * Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations.
 */
var ImmunizationEvaluation = /** @class */ (function (_super) {
    __extends(ImmunizationEvaluation, _super);
    /**
     * Default constructor for ImmunizationEvaluation - initializes any required elements to null if a value is not provided.
     */
    function ImmunizationEvaluation(source, options) {
        if (source === void 0) { source = {}; }
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, source, options) || this;
        _this.resourceType = 'ImmunizationEvaluation';
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
        if (source['patient']) {
            _this.patient = new Reference(source.patient);
        }
        else {
            _this.patient = null;
        }
        if (source['date']) {
            _this.date = new FhirDateTime({ value: source.date });
        }
        if (source['authority']) {
            _this.authority = new Reference(source.authority);
        }
        if (source['targetDisease']) {
            _this.targetDisease = new CodeableConcept(source.targetDisease);
        }
        else {
            _this.targetDisease = null;
        }
        if (source['immunizationEvent']) {
            _this.immunizationEvent = new Reference(source.immunizationEvent);
        }
        else {
            _this.immunizationEvent = null;
        }
        if (source['doseStatus']) {
            _this.doseStatus = new CodeableConcept(source.doseStatus);
        }
        else {
            _this.doseStatus = null;
        }
        if (source['doseStatusReason']) {
            _this.doseStatusReason = source.doseStatusReason.map(function (x) { return new CodeableConcept(x); });
        }
        else {
            _this.doseStatusReason = [];
        }
        if (source['description']) {
            _this.description = new FhirString({ value: source.description });
        }
        if (source['series']) {
            _this.series = new FhirString({ value: source.series });
        }
        if (source['doseNumber']) {
            _this.doseNumber = source.doseNumber;
        }
        else if (source['doseNumberPositiveInt']) {
            _this.doseNumber = new FhirPositiveInt({ value: source.doseNumberPositiveInt });
        }
        else if (source['doseNumberString']) {
            _this.doseNumber = new FhirString({ value: source.doseNumberString });
        }
        if (source['seriesDoses']) {
            _this.seriesDoses = source.seriesDoses;
        }
        else if (source['seriesDosesPositiveInt']) {
            _this.seriesDoses = new FhirPositiveInt({ value: source.seriesDosesPositiveInt });
        }
        else if (source['seriesDosesString']) {
            _this.seriesDoses = new FhirString({ value: source.seriesDosesString });
        }
        return _this;
    }
    /**
     * Required-bound Value Set for status (ImmunizationEvaluation.status)
     */
    ImmunizationEvaluation.statusRequiredCoding = function () {
        return ImmunizationEvaluationStatusCodings;
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    ImmunizationEvaluation.prototype.doModelValidation = function () {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var outcome = _super.prototype.doModelValidation.call(this);
        if (!this['resourceType']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property resourceType:"ImmunizationEvaluation" fhir: ImmunizationEvaluation.resourceType:"ImmunizationEvaluation"', }));
        }
        if (this["identifier"]) {
            this.identifier.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (!this['status']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property status:ImmunizationEvaluationStatusCodeType fhir: ImmunizationEvaluation.status:code', }));
        }
        if (!this['patient']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property patient:fhir.Reference fhir: ImmunizationEvaluation.patient:Reference', }));
        }
        if (this["patient"]) {
            (_a = outcome.issue).push.apply(_a, this.patient.doModelValidation().issue);
        }
        if (this["date"]) {
            (_b = outcome.issue).push.apply(_b, this.date.doModelValidation().issue);
        }
        if (this["authority"]) {
            (_c = outcome.issue).push.apply(_c, this.authority.doModelValidation().issue);
        }
        if (!this['targetDisease']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property targetDisease:fhir.CodeableConcept fhir: ImmunizationEvaluation.targetDisease:CodeableConcept', }));
        }
        if (this["targetDisease"]) {
            (_d = outcome.issue).push.apply(_d, this.targetDisease.doModelValidation().issue);
        }
        if (!this['immunizationEvent']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property immunizationEvent:fhir.Reference fhir: ImmunizationEvaluation.immunizationEvent:Reference', }));
        }
        if (this["immunizationEvent"]) {
            (_e = outcome.issue).push.apply(_e, this.immunizationEvent.doModelValidation().issue);
        }
        if (!this['doseStatus']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property doseStatus:fhir.CodeableConcept fhir: ImmunizationEvaluation.doseStatus:CodeableConcept', }));
        }
        if (this["doseStatus"]) {
            (_f = outcome.issue).push.apply(_f, this.doseStatus.doModelValidation().issue);
        }
        if (this["doseStatusReason"]) {
            this.doseStatusReason.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["description"]) {
            (_g = outcome.issue).push.apply(_g, this.description.doModelValidation().issue);
        }
        if (this["series"]) {
            (_h = outcome.issue).push.apply(_h, this.series.doModelValidation().issue);
        }
        return outcome;
    };
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    ImmunizationEvaluation._fts_dataType = 'ImmunizationEvaluation';
    /**
     * Internal flag to properly serialize choice-type element ImmunizationEvaluation.doseNumber[x]
     */
    ImmunizationEvaluation._fts_doseNumberIsChoice = true;
    /**
     * Internal flag to properly serialize choice-type element ImmunizationEvaluation.seriesDoses[x]
     */
    ImmunizationEvaluation._fts_seriesDosesIsChoice = true;
    return ImmunizationEvaluation;
}(DomainResource));

export { ImmunizationEvaluation };
//# sourceMappingURL=ImmunizationEvaluation.js.map