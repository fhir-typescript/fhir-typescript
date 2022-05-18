/*! @fhir-typescript/r4-core v0.0.11-beta.2 2022-05-18 */
'use strict';
import { __extends } from '../_virtual/_tslib.js';
import { IssueSeverityCodings } from '../fhirValueSets/IssueSeverityCodings.js';
import { IssueSeverityCodes } from '../fhirValueSets/IssueSeverityCodes.js';
import { IssueTypeCodings } from '../fhirValueSets/IssueTypeCodings.js';
import { IssueTypeCodes } from '../fhirValueSets/IssueTypeCodes.js';
import { BackboneElement } from './BackboneElement.js';
import { DomainResource } from './DomainResource.js';
import { FhirCode } from './FhirCode.js';
import { CodeableConcept } from './CodeableConcept.js';
import { FhirString } from './FhirString.js';

// <auto-generated/>
/**
 * An error, warning, or information message that results from a system action.
 */
var OperationOutcomeIssue = /** @class */ (function (_super) {
    __extends(OperationOutcomeIssue$1, _super);
    /**
     * Default constructor for OperationOutcomeIssue - initializes any required elements to null if a value is not provided.
     */
    function OperationOutcomeIssue$1(source, options) {
        if (source === void 0) { source = {}; }
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, source, options) || this;
        if (source['severity']) {
            _this.severity = source.severity;
        }
        else {
            _this.severity = null;
        }
        if (source['code']) {
            _this.code = new FhirCode({ value: source.code });
        }
        else {
            _this.code = null;
        }
        if (source['details']) {
            _this.details = new CodeableConcept(source.details);
        }
        if (source['diagnostics']) {
            _this.diagnostics = new FhirString({ value: source.diagnostics });
        }
        if (source['location']) {
            _this.location = source.location.map(function (x) { return new FhirString({ value: x }); });
        }
        else {
            _this.location = [];
        }
        if (source['expression']) {
            _this.expression = source.expression.map(function (x) { return new FhirString({ value: x }); });
        }
        else {
            _this.expression = [];
        }
        return _this;
    }
    /**
     * Required-bound Value Set for severity (OperationOutcome.issue.severity)
     */
    OperationOutcomeIssue$1.severityRequiredCoding = function () {
        return IssueSeverityCodings;
    };
    /**
     * Required-bound Value Set for code (OperationOutcome.issue.code)
     */
    OperationOutcomeIssue$1.codeRequiredCoding = function () {
        return IssueTypeCodings;
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    OperationOutcomeIssue$1.prototype.doModelValidation = function () {
        var _a, _b, _c;
        var outcome = _super.prototype.doModelValidation.call(this);
        if (!this['severity']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property severity:IssueSeverityCodeType fhir: OperationOutcome.issue.severity:code', }));
        }
        if (!this['code']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property code:fhir.FhirCode fhir: OperationOutcome.issue.code:code', }));
        }
        if (this["code"]) {
            (_a = outcome.issue).push.apply(_a, this.code.doModelValidation().issue);
        }
        if (this["details"]) {
            (_b = outcome.issue).push.apply(_b, this.details.doModelValidation().issue);
        }
        if (this["diagnostics"]) {
            (_c = outcome.issue).push.apply(_c, this.diagnostics.doModelValidation().issue);
        }
        if (this["location"]) {
            this.location.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["expression"]) {
            this.expression.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        return outcome;
    };
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    OperationOutcomeIssue$1._fts_dataType = 'OperationOutcomeIssue';
    return OperationOutcomeIssue$1;
}(BackboneElement));
/**
 * A collection of error, warning, or information messages that result from a system action.
 */
var OperationOutcome = /** @class */ (function (_super) {
    __extends(OperationOutcome, _super);
    /**
     * Default constructor for OperationOutcome - initializes any required elements to null if a value is not provided.
     */
    function OperationOutcome(source, options) {
        if (source === void 0) { source = {}; }
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, source, options) || this;
        _this.resourceType = 'OperationOutcome';
        if (source['issue']) {
            _this.issue = source.issue.map(function (x) { return new OperationOutcomeIssue(x); });
        }
        else {
            _this.issue = [];
        }
        return _this;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    OperationOutcome.prototype.doModelValidation = function () {
        var outcome = _super.prototype.doModelValidation.call(this);
        if (!this['resourceType']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property resourceType:"OperationOutcome" fhir: OperationOutcome.resourceType:"OperationOutcome"', }));
        }
        if (!this['issue']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property issue:fhir.OperationOutcomeIssue[] fhir: OperationOutcome.issue:issue', }));
        }
        else if (!Array.isArray(this.issue)) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.StructuralIssue, diagnostics: 'Found scalar in array property issue:fhir.OperationOutcomeIssue[] fhir: OperationOutcome.issue:issue', }));
        }
        else if (this.issue.length === 0) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property issue:fhir.OperationOutcomeIssue[] fhir: OperationOutcome.issue:issue', }));
        }
        if (this["issue"]) {
            this.issue.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        return outcome;
    };
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    OperationOutcome._fts_dataType = 'OperationOutcome';
    return OperationOutcome;
}(DomainResource));

export { OperationOutcome, OperationOutcomeIssue };
//# sourceMappingURL=OperationOutcome.js.map
