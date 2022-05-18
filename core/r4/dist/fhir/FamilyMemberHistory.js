/*! @fhir-typescript/r4-core v0.0.11-beta.2 2022-05-18 */
'use strict';
import { __extends } from '../_virtual/_tslib.js';
import { HistoryStatusCodings } from '../fhirValueSets/HistoryStatusCodings.js';
import { AdministrativeGenderCodings } from '../fhirValueSets/AdministrativeGenderCodings.js';
import { IssueTypeCodes } from '../fhirValueSets/IssueTypeCodes.js';
import { IssueSeverityCodes } from '../fhirValueSets/IssueSeverityCodes.js';
import { OperationOutcomeIssue } from './OperationOutcome.js';
import { BackboneElement } from './BackboneElement.js';
import { DomainResource } from './DomainResource.js';
import { CodeableConcept } from './CodeableConcept.js';
import { FhirBoolean } from './FhirBoolean.js';
import { Age } from './Age.js';
import { Range } from './Range.js';
import { Period } from './Period.js';
import { FhirString } from './FhirString.js';
import { Annotation } from './Annotation.js';
import { Identifier } from './Identifier.js';
import { FhirCanonical } from './FhirCanonical.js';
import { FhirUri } from './FhirUri.js';
import { Reference } from './Reference.js';
import { FhirDateTime } from './FhirDateTime.js';
import { FhirDate } from './FhirDate.js';

// <auto-generated/>
/**
 * The significant Conditions (or condition) that the family member had. This is a repeating section to allow a system to represent more than one condition per resource, though there is nothing stopping multiple resources - one per condition.
 */
var FamilyMemberHistoryCondition = /** @class */ (function (_super) {
    __extends(FamilyMemberHistoryCondition, _super);
    /**
     * Default constructor for FamilyMemberHistoryCondition - initializes any required elements to null if a value is not provided.
     */
    function FamilyMemberHistoryCondition(source, options) {
        if (source === void 0) { source = {}; }
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, source, options) || this;
        if (source['code']) {
            _this.code = new CodeableConcept(source.code);
        }
        else {
            _this.code = null;
        }
        if (source['outcome']) {
            _this.outcome = new CodeableConcept(source.outcome);
        }
        if (source['contributedToDeath']) {
            _this.contributedToDeath = new FhirBoolean({ value: source.contributedToDeath });
        }
        if (source['onset']) {
            _this.onset = source.onset;
        }
        else if (source['onsetAge']) {
            _this.onset = new Age(source.onsetAge);
        }
        else if (source['onsetRange']) {
            _this.onset = new Range(source.onsetRange);
        }
        else if (source['onsetPeriod']) {
            _this.onset = new Period(source.onsetPeriod);
        }
        else if (source['onsetString']) {
            _this.onset = new FhirString({ value: source.onsetString });
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
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    FamilyMemberHistoryCondition.prototype.doModelValidation = function () {
        var _a, _b, _c;
        var outcome = _super.prototype.doModelValidation.call(this);
        if (!this['code']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property code:fhir.CodeableConcept fhir: FamilyMemberHistory.condition.code:CodeableConcept', }));
        }
        if (this["code"]) {
            (_a = outcome.issue).push.apply(_a, this.code.doModelValidation().issue);
        }
        if (this["outcome"]) {
            (_b = outcome.issue).push.apply(_b, this.outcome.doModelValidation().issue);
        }
        if (this["contributedToDeath"]) {
            (_c = outcome.issue).push.apply(_c, this.contributedToDeath.doModelValidation().issue);
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
    FamilyMemberHistoryCondition._fts_dataType = 'FamilyMemberHistoryCondition';
    /**
     * Internal flag to properly serialize choice-type element FamilyMemberHistory.condition.onset[x]
     */
    FamilyMemberHistoryCondition._fts_onsetIsChoice = true;
    return FamilyMemberHistoryCondition;
}(BackboneElement));
/**
 * Significant health conditions for a person related to the patient relevant in the context of care for the patient.
 */
var FamilyMemberHistory = /** @class */ (function (_super) {
    __extends(FamilyMemberHistory, _super);
    /**
     * Default constructor for FamilyMemberHistory - initializes any required elements to null if a value is not provided.
     */
    function FamilyMemberHistory(source, options) {
        if (source === void 0) { source = {}; }
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, source, options) || this;
        _this.resourceType = 'FamilyMemberHistory';
        if (source['identifier']) {
            _this.identifier = source.identifier.map(function (x) { return new Identifier(x); });
        }
        else {
            _this.identifier = [];
        }
        if (source['instantiatesCanonical']) {
            _this.instantiatesCanonical = source.instantiatesCanonical.map(function (x) { return new FhirCanonical({ value: x }); });
        }
        else {
            _this.instantiatesCanonical = [];
        }
        if (source['instantiatesUri']) {
            _this.instantiatesUri = source.instantiatesUri.map(function (x) { return new FhirUri({ value: x }); });
        }
        else {
            _this.instantiatesUri = [];
        }
        if (source['status']) {
            _this.status = source.status;
        }
        else {
            _this.status = null;
        }
        if (source['dataAbsentReason']) {
            _this.dataAbsentReason = new CodeableConcept(source.dataAbsentReason);
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
        if (source['name']) {
            _this.name = new FhirString({ value: source.name });
        }
        if (source['relationship']) {
            _this.relationship = new CodeableConcept(source.relationship);
        }
        else {
            _this.relationship = null;
        }
        if (source['sex']) {
            _this.sex = new CodeableConcept(source.sex);
        }
        if (source['born']) {
            _this.born = source.born;
        }
        else if (source['bornPeriod']) {
            _this.born = new Period(source.bornPeriod);
        }
        else if (source['bornDate']) {
            _this.born = new FhirDate({ value: source.bornDate });
        }
        else if (source['bornString']) {
            _this.born = new FhirString({ value: source.bornString });
        }
        if (source['age']) {
            _this.age = source.age;
        }
        else if (source['ageAge']) {
            _this.age = new Age(source.ageAge);
        }
        else if (source['ageRange']) {
            _this.age = new Range(source.ageRange);
        }
        else if (source['ageString']) {
            _this.age = new FhirString({ value: source.ageString });
        }
        if (source['estimatedAge']) {
            _this.estimatedAge = new FhirBoolean({ value: source.estimatedAge });
        }
        if (source['deceased']) {
            _this.deceased = source.deceased;
        }
        else if (source['deceasedBoolean']) {
            _this.deceased = new FhirBoolean({ value: source.deceasedBoolean });
        }
        else if (source['deceasedAge']) {
            _this.deceased = new Age(source.deceasedAge);
        }
        else if (source['deceasedRange']) {
            _this.deceased = new Range(source.deceasedRange);
        }
        else if (source['deceasedDate']) {
            _this.deceased = new FhirDate({ value: source.deceasedDate });
        }
        else if (source['deceasedString']) {
            _this.deceased = new FhirString({ value: source.deceasedString });
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
        if (source['note']) {
            _this.note = source.note.map(function (x) { return new Annotation(x); });
        }
        else {
            _this.note = [];
        }
        if (source['condition']) {
            _this.condition = source.condition.map(function (x) { return new FamilyMemberHistoryCondition(x); });
        }
        else {
            _this.condition = [];
        }
        return _this;
    }
    /**
     * Required-bound Value Set for status (FamilyMemberHistory.status)
     */
    FamilyMemberHistory.statusRequiredCoding = function () {
        return HistoryStatusCodings;
    };
    /**
     * Extensible-bound Value Set for sex (FamilyMemberHistory.sex)
     */
    FamilyMemberHistory.sexExtensibleCoding = function () {
        return AdministrativeGenderCodings;
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    FamilyMemberHistory.prototype.doModelValidation = function () {
        var _a, _b, _c, _d, _e, _f, _g;
        var outcome = _super.prototype.doModelValidation.call(this);
        if (!this['resourceType']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property resourceType:"FamilyMemberHistory" fhir: FamilyMemberHistory.resourceType:"FamilyMemberHistory"', }));
        }
        if (this["identifier"]) {
            this.identifier.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["instantiatesCanonical"]) {
            this.instantiatesCanonical.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["instantiatesUri"]) {
            this.instantiatesUri.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (!this['status']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property status:HistoryStatusCodeType fhir: FamilyMemberHistory.status:code', }));
        }
        if (this["dataAbsentReason"]) {
            (_a = outcome.issue).push.apply(_a, this.dataAbsentReason.doModelValidation().issue);
        }
        if (!this['patient']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property patient:fhir.Reference fhir: FamilyMemberHistory.patient:Reference', }));
        }
        if (this["patient"]) {
            (_b = outcome.issue).push.apply(_b, this.patient.doModelValidation().issue);
        }
        if (this["date"]) {
            (_c = outcome.issue).push.apply(_c, this.date.doModelValidation().issue);
        }
        if (this["name"]) {
            (_d = outcome.issue).push.apply(_d, this.name.doModelValidation().issue);
        }
        if (!this['relationship']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property relationship:fhir.CodeableConcept fhir: FamilyMemberHistory.relationship:CodeableConcept', }));
        }
        if (this["relationship"]) {
            (_e = outcome.issue).push.apply(_e, this.relationship.doModelValidation().issue);
        }
        if (this["sex"]) {
            (_f = outcome.issue).push.apply(_f, this.sex.doModelValidation().issue);
        }
        if (this["estimatedAge"]) {
            (_g = outcome.issue).push.apply(_g, this.estimatedAge.doModelValidation().issue);
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
        if (this["note"]) {
            this.note.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["condition"]) {
            this.condition.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        return outcome;
    };
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    FamilyMemberHistory._fts_dataType = 'FamilyMemberHistory';
    /**
     * Internal flag to properly serialize choice-type element FamilyMemberHistory.born[x]
     */
    FamilyMemberHistory._fts_bornIsChoice = true;
    /**
     * Internal flag to properly serialize choice-type element FamilyMemberHistory.age[x]
     */
    FamilyMemberHistory._fts_ageIsChoice = true;
    /**
     * Internal flag to properly serialize choice-type element FamilyMemberHistory.deceased[x]
     */
    FamilyMemberHistory._fts_deceasedIsChoice = true;
    return FamilyMemberHistory;
}(DomainResource));

export { FamilyMemberHistory, FamilyMemberHistoryCondition };
//# sourceMappingURL=FamilyMemberHistory.js.map