/*! @fhir-typescript/r4-core v0.0.11-beta.2 2022-05-18 */
'use strict';
import { __extends } from '../_virtual/_tslib.js';
import { DeviceStatementStatusCodings } from '../fhirValueSets/DeviceStatementStatusCodings.js';
import { IssueTypeCodes } from '../fhirValueSets/IssueTypeCodes.js';
import { IssueSeverityCodes } from '../fhirValueSets/IssueSeverityCodes.js';
import { OperationOutcomeIssue } from './OperationOutcome.js';
import { DomainResource } from './DomainResource.js';
import { Identifier } from './Identifier.js';
import { Reference } from './Reference.js';
import { Timing } from './Timing.js';
import { Period } from './Period.js';
import { FhirDateTime } from './FhirDateTime.js';
import { CodeableConcept } from './CodeableConcept.js';
import { Annotation } from './Annotation.js';

// <auto-generated/>
/**
 * A record of a device being used by a patient where the record is the result of a report from the patient or another clinician.
 */
var DeviceUseStatement = /** @class */ (function (_super) {
    __extends(DeviceUseStatement, _super);
    /**
     * Default constructor for DeviceUseStatement - initializes any required elements to null if a value is not provided.
     */
    function DeviceUseStatement(source, options) {
        if (source === void 0) { source = {}; }
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, source, options) || this;
        _this.resourceType = 'DeviceUseStatement';
        if (source['identifier']) {
            _this.identifier = source.identifier.map(function (x) { return new Identifier(x); });
        }
        else {
            _this.identifier = [];
        }
        if (source['basedOn']) {
            _this.basedOn = source.basedOn.map(function (x) { return new Reference(x); });
        }
        else {
            _this.basedOn = [];
        }
        if (source['status']) {
            _this.status = source.status;
        }
        else {
            _this.status = null;
        }
        if (source['subject']) {
            _this.subject = new Reference(source.subject);
        }
        else {
            _this.subject = null;
        }
        if (source['derivedFrom']) {
            _this.derivedFrom = source.derivedFrom.map(function (x) { return new Reference(x); });
        }
        else {
            _this.derivedFrom = [];
        }
        if (source['timing']) {
            _this.timing = source.timing;
        }
        else if (source['timingTiming']) {
            _this.timing = new Timing(source.timingTiming);
        }
        else if (source['timingPeriod']) {
            _this.timing = new Period(source.timingPeriod);
        }
        else if (source['timingDateTime']) {
            _this.timing = new FhirDateTime({ value: source.timingDateTime });
        }
        if (source['recordedOn']) {
            _this.recordedOn = new FhirDateTime({ value: source.recordedOn });
        }
        if (source['source']) {
            _this.source = new Reference(source.source);
        }
        if (source['device']) {
            _this.device = new Reference(source.device);
        }
        else {
            _this.device = null;
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
        if (source['bodySite']) {
            _this.bodySite = new CodeableConcept(source.bodySite);
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
     * Required-bound Value Set for status (DeviceUseStatement.status)
     */
    DeviceUseStatement.statusRequiredCoding = function () {
        return DeviceStatementStatusCodings;
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    DeviceUseStatement.prototype.doModelValidation = function () {
        var _a, _b, _c, _d, _e;
        var outcome = _super.prototype.doModelValidation.call(this);
        if (!this['resourceType']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property resourceType:"DeviceUseStatement" fhir: DeviceUseStatement.resourceType:"DeviceUseStatement"', }));
        }
        if (this["identifier"]) {
            this.identifier.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["basedOn"]) {
            this.basedOn.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (!this['status']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property status:DeviceStatementStatusCodeType fhir: DeviceUseStatement.status:code', }));
        }
        if (!this['subject']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property subject:fhir.Reference fhir: DeviceUseStatement.subject:Reference', }));
        }
        if (this["subject"]) {
            (_a = outcome.issue).push.apply(_a, this.subject.doModelValidation().issue);
        }
        if (this["derivedFrom"]) {
            this.derivedFrom.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["recordedOn"]) {
            (_b = outcome.issue).push.apply(_b, this.recordedOn.doModelValidation().issue);
        }
        if (this["source"]) {
            (_c = outcome.issue).push.apply(_c, this.source.doModelValidation().issue);
        }
        if (!this['device']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property device:fhir.Reference fhir: DeviceUseStatement.device:Reference', }));
        }
        if (this["device"]) {
            (_d = outcome.issue).push.apply(_d, this.device.doModelValidation().issue);
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
        if (this["bodySite"]) {
            (_e = outcome.issue).push.apply(_e, this.bodySite.doModelValidation().issue);
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
    DeviceUseStatement._fts_dataType = 'DeviceUseStatement';
    /**
     * Internal flag to properly serialize choice-type element DeviceUseStatement.timing[x]
     */
    DeviceUseStatement._fts_timingIsChoice = true;
    return DeviceUseStatement;
}(DomainResource));

export { DeviceUseStatement };
//# sourceMappingURL=DeviceUseStatement.js.map
