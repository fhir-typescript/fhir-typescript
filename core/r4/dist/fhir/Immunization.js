/*! @fhir-typescript/r4-core v0.0.11-beta.2 2022-05-18 */
'use strict';
import { __extends } from '../_virtual/_tslib.js';
import { ImmunizationFunctionCodings } from '../fhirValueSets/ImmunizationFunctionCodings.js';
import { ImmunizationStatusCodings } from '../fhirValueSets/ImmunizationStatusCodings.js';
import { IssueTypeCodes } from '../fhirValueSets/IssueTypeCodes.js';
import { IssueSeverityCodes } from '../fhirValueSets/IssueSeverityCodes.js';
import { OperationOutcomeIssue } from './OperationOutcome.js';
import { BackboneElement } from './BackboneElement.js';
import { DomainResource } from './DomainResource.js';
import { CodeableConcept } from './CodeableConcept.js';
import { Reference } from './Reference.js';
import { FhirString } from './FhirString.js';
import { FhirUri } from './FhirUri.js';
import { FhirDateTime } from './FhirDateTime.js';
import { FhirBoolean } from './FhirBoolean.js';
import { FhirPositiveInt } from './FhirPositiveInt.js';
import { Identifier } from './Identifier.js';
import { FhirDate } from './FhirDate.js';
import { Quantity } from './Quantity.js';
import { Annotation } from './Annotation.js';

// <auto-generated/>
/**
 * Indicates who performed the immunization event.
 */
var ImmunizationPerformer = /** @class */ (function (_super) {
    __extends(ImmunizationPerformer, _super);
    /**
     * Default constructor for ImmunizationPerformer - initializes any required elements to null if a value is not provided.
     */
    function ImmunizationPerformer(source, options) {
        if (source === void 0) { source = {}; }
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, source, options) || this;
        if (source['function']) {
            _this.function = new CodeableConcept(source.function);
        }
        if (source['actor']) {
            _this.actor = new Reference(source.actor);
        }
        else {
            _this.actor = null;
        }
        return _this;
    }
    /**
     * Extensible-bound Value Set for function (Immunization.performer.function)
     */
    ImmunizationPerformer.functionExtensibleCoding = function () {
        return ImmunizationFunctionCodings;
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    ImmunizationPerformer.prototype.doModelValidation = function () {
        var _a, _b;
        var outcome = _super.prototype.doModelValidation.call(this);
        if (this["function"]) {
            (_a = outcome.issue).push.apply(_a, this.function.doModelValidation().issue);
        }
        if (!this['actor']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property actor:fhir.Reference fhir: Immunization.performer.actor:Reference', }));
        }
        if (this["actor"]) {
            (_b = outcome.issue).push.apply(_b, this.actor.doModelValidation().issue);
        }
        return outcome;
    };
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    ImmunizationPerformer._fts_dataType = 'ImmunizationPerformer';
    return ImmunizationPerformer;
}(BackboneElement));
/**
 * Educational material presented to the patient (or guardian) at the time of vaccine administration.
 */
var ImmunizationEducation = /** @class */ (function (_super) {
    __extends(ImmunizationEducation, _super);
    /**
     * Default constructor for ImmunizationEducation - initializes any required elements to null if a value is not provided.
     */
    function ImmunizationEducation(source, options) {
        if (source === void 0) { source = {}; }
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, source, options) || this;
        if (source['documentType']) {
            _this.documentType = new FhirString({ value: source.documentType });
        }
        if (source['reference']) {
            _this.reference = new FhirUri({ value: source.reference });
        }
        if (source['publicationDate']) {
            _this.publicationDate = new FhirDateTime({ value: source.publicationDate });
        }
        if (source['presentationDate']) {
            _this.presentationDate = new FhirDateTime({ value: source.presentationDate });
        }
        return _this;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    ImmunizationEducation.prototype.doModelValidation = function () {
        var _a, _b, _c, _d;
        var outcome = _super.prototype.doModelValidation.call(this);
        if (this["documentType"]) {
            (_a = outcome.issue).push.apply(_a, this.documentType.doModelValidation().issue);
        }
        if (this["reference"]) {
            (_b = outcome.issue).push.apply(_b, this.reference.doModelValidation().issue);
        }
        if (this["publicationDate"]) {
            (_c = outcome.issue).push.apply(_c, this.publicationDate.doModelValidation().issue);
        }
        if (this["presentationDate"]) {
            (_d = outcome.issue).push.apply(_d, this.presentationDate.doModelValidation().issue);
        }
        return outcome;
    };
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    ImmunizationEducation._fts_dataType = 'ImmunizationEducation';
    return ImmunizationEducation;
}(BackboneElement));
/**
 * A reaction may be an indication of an allergy or intolerance and, if this is determined to be the case, it should be recorded as a new AllergyIntolerance resource instance as most systems will not query against past Immunization.reaction elements.
 */
var ImmunizationReaction = /** @class */ (function (_super) {
    __extends(ImmunizationReaction, _super);
    /**
     * Default constructor for ImmunizationReaction - initializes any required elements to null if a value is not provided.
     */
    function ImmunizationReaction(source, options) {
        if (source === void 0) { source = {}; }
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, source, options) || this;
        if (source['date']) {
            _this.date = new FhirDateTime({ value: source.date });
        }
        if (source['detail']) {
            _this.detail = new Reference(source.detail);
        }
        if (source['reported']) {
            _this.reported = new FhirBoolean({ value: source.reported });
        }
        return _this;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    ImmunizationReaction.prototype.doModelValidation = function () {
        var _a, _b, _c;
        var outcome = _super.prototype.doModelValidation.call(this);
        if (this["date"]) {
            (_a = outcome.issue).push.apply(_a, this.date.doModelValidation().issue);
        }
        if (this["detail"]) {
            (_b = outcome.issue).push.apply(_b, this.detail.doModelValidation().issue);
        }
        if (this["reported"]) {
            (_c = outcome.issue).push.apply(_c, this.reported.doModelValidation().issue);
        }
        return outcome;
    };
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    ImmunizationReaction._fts_dataType = 'ImmunizationReaction';
    return ImmunizationReaction;
}(BackboneElement));
/**
 * The protocol (set of recommendations) being followed by the provider who administered the dose.
 */
var ImmunizationProtocolApplied = /** @class */ (function (_super) {
    __extends(ImmunizationProtocolApplied, _super);
    /**
     * Default constructor for ImmunizationProtocolApplied - initializes any required elements to null if a value is not provided.
     */
    function ImmunizationProtocolApplied(source, options) {
        if (source === void 0) { source = {}; }
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, source, options) || this;
        if (source['series']) {
            _this.series = new FhirString({ value: source.series });
        }
        if (source['authority']) {
            _this.authority = new Reference(source.authority);
        }
        if (source['targetDisease']) {
            _this.targetDisease = source.targetDisease.map(function (x) { return new CodeableConcept(x); });
        }
        else {
            _this.targetDisease = [];
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
        else {
            _this.doseNumber = null;
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
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    ImmunizationProtocolApplied.prototype.doModelValidation = function () {
        var _a, _b;
        var outcome = _super.prototype.doModelValidation.call(this);
        if (this["series"]) {
            (_a = outcome.issue).push.apply(_a, this.series.doModelValidation().issue);
        }
        if (this["authority"]) {
            (_b = outcome.issue).push.apply(_b, this.authority.doModelValidation().issue);
        }
        if (this["targetDisease"]) {
            this.targetDisease.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (!this['doseNumber']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property doseNumber: fhir: Immunization.protocolApplied.doseNumber[x]:', }));
        }
        return outcome;
    };
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    ImmunizationProtocolApplied._fts_dataType = 'ImmunizationProtocolApplied';
    /**
     * Internal flag to properly serialize choice-type element Immunization.protocolApplied.doseNumber[x]
     */
    ImmunizationProtocolApplied._fts_doseNumberIsChoice = true;
    /**
     * Internal flag to properly serialize choice-type element Immunization.protocolApplied.seriesDoses[x]
     */
    ImmunizationProtocolApplied._fts_seriesDosesIsChoice = true;
    return ImmunizationProtocolApplied;
}(BackboneElement));
/**
 * Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party.
 */
var Immunization = /** @class */ (function (_super) {
    __extends(Immunization, _super);
    /**
     * Default constructor for Immunization - initializes any required elements to null if a value is not provided.
     */
    function Immunization(source, options) {
        if (source === void 0) { source = {}; }
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, source, options) || this;
        _this.resourceType = 'Immunization';
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
        if (source['statusReason']) {
            _this.statusReason = new CodeableConcept(source.statusReason);
        }
        if (source['vaccineCode']) {
            _this.vaccineCode = new CodeableConcept(source.vaccineCode);
        }
        else {
            _this.vaccineCode = null;
        }
        if (source['patient']) {
            _this.patient = new Reference(source.patient);
        }
        else {
            _this.patient = null;
        }
        if (source['encounter']) {
            _this.encounter = new Reference(source.encounter);
        }
        if (source['occurrence']) {
            _this.occurrence = source.occurrence;
        }
        else if (source['occurrenceDateTime']) {
            _this.occurrence = new FhirDateTime({ value: source.occurrenceDateTime });
        }
        else if (source['occurrenceString']) {
            _this.occurrence = new FhirString({ value: source.occurrenceString });
        }
        else {
            _this.occurrence = null;
        }
        if (source['recorded']) {
            _this.recorded = new FhirDateTime({ value: source.recorded });
        }
        if (source['primarySource']) {
            _this.primarySource = new FhirBoolean({ value: source.primarySource });
        }
        if (source['reportOrigin']) {
            _this.reportOrigin = new CodeableConcept(source.reportOrigin);
        }
        if (source['location']) {
            _this.location = new Reference(source.location);
        }
        if (source['manufacturer']) {
            _this.manufacturer = new Reference(source.manufacturer);
        }
        if (source['lotNumber']) {
            _this.lotNumber = new FhirString({ value: source.lotNumber });
        }
        if (source['expirationDate']) {
            _this.expirationDate = new FhirDate({ value: source.expirationDate });
        }
        if (source['site']) {
            _this.site = new CodeableConcept(source.site);
        }
        if (source['route']) {
            _this.route = new CodeableConcept(source.route);
        }
        if (source['doseQuantity']) {
            _this.doseQuantity = new Quantity(source.doseQuantity);
        }
        if (source['performer']) {
            _this.performer = source.performer.map(function (x) { return new ImmunizationPerformer(x); });
        }
        else {
            _this.performer = [];
        }
        if (source['note']) {
            _this.note = source.note.map(function (x) { return new Annotation(x); });
        }
        else {
            _this.note = [];
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
        if (source['isSubpotent']) {
            _this.isSubpotent = new FhirBoolean({ value: source.isSubpotent });
        }
        if (source['subpotentReason']) {
            _this.subpotentReason = source.subpotentReason.map(function (x) { return new CodeableConcept(x); });
        }
        else {
            _this.subpotentReason = [];
        }
        if (source['education']) {
            _this.education = source.education.map(function (x) { return new ImmunizationEducation(x); });
        }
        else {
            _this.education = [];
        }
        if (source['programEligibility']) {
            _this.programEligibility = source.programEligibility.map(function (x) { return new CodeableConcept(x); });
        }
        else {
            _this.programEligibility = [];
        }
        if (source['fundingSource']) {
            _this.fundingSource = new CodeableConcept(source.fundingSource);
        }
        if (source['reaction']) {
            _this.reaction = source.reaction.map(function (x) { return new ImmunizationReaction(x); });
        }
        else {
            _this.reaction = [];
        }
        if (source['protocolApplied']) {
            _this.protocolApplied = source.protocolApplied.map(function (x) { return new ImmunizationProtocolApplied(x); });
        }
        else {
            _this.protocolApplied = [];
        }
        return _this;
    }
    /**
     * Required-bound Value Set for status (Immunization.status)
     */
    Immunization.statusRequiredCoding = function () {
        return ImmunizationStatusCodings;
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    Immunization.prototype.doModelValidation = function () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
        var outcome = _super.prototype.doModelValidation.call(this);
        if (!this['resourceType']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property resourceType:"Immunization" fhir: Immunization.resourceType:"Immunization"', }));
        }
        if (this["identifier"]) {
            this.identifier.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (!this['status']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property status:ImmunizationStatusCodeType fhir: Immunization.status:code', }));
        }
        if (this["statusReason"]) {
            (_a = outcome.issue).push.apply(_a, this.statusReason.doModelValidation().issue);
        }
        if (!this['vaccineCode']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property vaccineCode:fhir.CodeableConcept fhir: Immunization.vaccineCode:CodeableConcept', }));
        }
        if (this["vaccineCode"]) {
            (_b = outcome.issue).push.apply(_b, this.vaccineCode.doModelValidation().issue);
        }
        if (!this['patient']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property patient:fhir.Reference fhir: Immunization.patient:Reference', }));
        }
        if (this["patient"]) {
            (_c = outcome.issue).push.apply(_c, this.patient.doModelValidation().issue);
        }
        if (this["encounter"]) {
            (_d = outcome.issue).push.apply(_d, this.encounter.doModelValidation().issue);
        }
        if (!this['occurrence']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property occurrence: fhir: Immunization.occurrence[x]:', }));
        }
        if (this["recorded"]) {
            (_e = outcome.issue).push.apply(_e, this.recorded.doModelValidation().issue);
        }
        if (this["primarySource"]) {
            (_f = outcome.issue).push.apply(_f, this.primarySource.doModelValidation().issue);
        }
        if (this["reportOrigin"]) {
            (_g = outcome.issue).push.apply(_g, this.reportOrigin.doModelValidation().issue);
        }
        if (this["location"]) {
            (_h = outcome.issue).push.apply(_h, this.location.doModelValidation().issue);
        }
        if (this["manufacturer"]) {
            (_j = outcome.issue).push.apply(_j, this.manufacturer.doModelValidation().issue);
        }
        if (this["lotNumber"]) {
            (_k = outcome.issue).push.apply(_k, this.lotNumber.doModelValidation().issue);
        }
        if (this["expirationDate"]) {
            (_l = outcome.issue).push.apply(_l, this.expirationDate.doModelValidation().issue);
        }
        if (this["site"]) {
            (_m = outcome.issue).push.apply(_m, this.site.doModelValidation().issue);
        }
        if (this["route"]) {
            (_o = outcome.issue).push.apply(_o, this.route.doModelValidation().issue);
        }
        if (this["doseQuantity"]) {
            (_p = outcome.issue).push.apply(_p, this.doseQuantity.doModelValidation().issue);
        }
        if (this["performer"]) {
            this.performer.forEach(function (x) {
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
        if (this["isSubpotent"]) {
            (_q = outcome.issue).push.apply(_q, this.isSubpotent.doModelValidation().issue);
        }
        if (this["subpotentReason"]) {
            this.subpotentReason.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["education"]) {
            this.education.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["programEligibility"]) {
            this.programEligibility.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["fundingSource"]) {
            (_r = outcome.issue).push.apply(_r, this.fundingSource.doModelValidation().issue);
        }
        if (this["reaction"]) {
            this.reaction.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["protocolApplied"]) {
            this.protocolApplied.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        return outcome;
    };
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    Immunization._fts_dataType = 'Immunization';
    /**
     * Internal flag to properly serialize choice-type element Immunization.occurrence[x]
     */
    Immunization._fts_occurrenceIsChoice = true;
    return Immunization;
}(DomainResource));

export { Immunization, ImmunizationEducation, ImmunizationPerformer, ImmunizationProtocolApplied, ImmunizationReaction };
//# sourceMappingURL=Immunization.js.map