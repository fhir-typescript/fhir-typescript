/*! @fhir-typescript/r4-core v0.0.11-beta.2 2022-05-18 */
'use strict';
import { __extends } from '../_virtual/_tslib.js';
import { MedicationdispenseStatusCodings } from '../fhirValueSets/MedicationdispenseStatusCodings.js';
import { MedicationdispenseCategoryCodings } from '../fhirValueSets/MedicationdispenseCategoryCodings.js';
import { IssueTypeCodes } from '../fhirValueSets/IssueTypeCodes.js';
import { IssueSeverityCodes } from '../fhirValueSets/IssueSeverityCodes.js';
import { OperationOutcomeIssue } from './OperationOutcome.js';
import { BackboneElement } from './BackboneElement.js';
import { DomainResource } from './DomainResource.js';
import { CodeableConcept } from './CodeableConcept.js';
import { Reference } from './Reference.js';
import { FhirBoolean } from './FhirBoolean.js';
import { Identifier } from './Identifier.js';
import { Quantity } from './Quantity.js';
import { FhirDateTime } from './FhirDateTime.js';
import { Annotation } from './Annotation.js';
import { Dosage } from './Dosage.js';

// <auto-generated/>
/**
 * Indicates who or what performed the event.
 */
var MedicationDispensePerformer = /** @class */ (function (_super) {
    __extends(MedicationDispensePerformer, _super);
    /**
     * Default constructor for MedicationDispensePerformer - initializes any required elements to null if a value is not provided.
     */
    function MedicationDispensePerformer(source, options) {
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
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    MedicationDispensePerformer.prototype.doModelValidation = function () {
        var _a, _b;
        var outcome = _super.prototype.doModelValidation.call(this);
        if (this["function"]) {
            (_a = outcome.issue).push.apply(_a, this.function.doModelValidation().issue);
        }
        if (!this['actor']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property actor:fhir.Reference fhir: MedicationDispense.performer.actor:Reference', }));
        }
        if (this["actor"]) {
            (_b = outcome.issue).push.apply(_b, this.actor.doModelValidation().issue);
        }
        return outcome;
    };
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    MedicationDispensePerformer._fts_dataType = 'MedicationDispensePerformer';
    return MedicationDispensePerformer;
}(BackboneElement));
/**
 * Indicates whether or not substitution was made as part of the dispense.  In some cases, substitution will be expected but does not happen, in other cases substitution is not expected but does happen.  This block explains what substitution did or did not happen and why.  If nothing is specified, substitution was not done.
 */
var MedicationDispenseSubstitution = /** @class */ (function (_super) {
    __extends(MedicationDispenseSubstitution, _super);
    /**
     * Default constructor for MedicationDispenseSubstitution - initializes any required elements to null if a value is not provided.
     */
    function MedicationDispenseSubstitution(source, options) {
        if (source === void 0) { source = {}; }
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, source, options) || this;
        if (source['wasSubstituted']) {
            _this.wasSubstituted = new FhirBoolean({ value: source.wasSubstituted });
        }
        else {
            _this.wasSubstituted = null;
        }
        if (source['type']) {
            _this.type = new CodeableConcept(source.type);
        }
        if (source['reason']) {
            _this.reason = source.reason.map(function (x) { return new CodeableConcept(x); });
        }
        else {
            _this.reason = [];
        }
        if (source['responsibleParty']) {
            _this.responsibleParty = source.responsibleParty.map(function (x) { return new Reference(x); });
        }
        else {
            _this.responsibleParty = [];
        }
        return _this;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    MedicationDispenseSubstitution.prototype.doModelValidation = function () {
        var _a, _b;
        var outcome = _super.prototype.doModelValidation.call(this);
        if (!this['wasSubstituted']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property wasSubstituted:fhir.FhirBoolean fhir: MedicationDispense.substitution.wasSubstituted:boolean', }));
        }
        if (this["wasSubstituted"]) {
            (_a = outcome.issue).push.apply(_a, this.wasSubstituted.doModelValidation().issue);
        }
        if (this["type"]) {
            (_b = outcome.issue).push.apply(_b, this.type.doModelValidation().issue);
        }
        if (this["reason"]) {
            this.reason.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["responsibleParty"]) {
            this.responsibleParty.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        return outcome;
    };
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    MedicationDispenseSubstitution._fts_dataType = 'MedicationDispenseSubstitution';
    return MedicationDispenseSubstitution;
}(BackboneElement));
/**
 * Indicates that a medication product is to be or has been dispensed for a named person/patient.  This includes a description of the medication product (supply) provided and the instructions for administering the medication.  The medication dispense is the result of a pharmacy system responding to a medication order.
 */
var MedicationDispense = /** @class */ (function (_super) {
    __extends(MedicationDispense, _super);
    /**
     * Default constructor for MedicationDispense - initializes any required elements to null if a value is not provided.
     */
    function MedicationDispense(source, options) {
        if (source === void 0) { source = {}; }
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, source, options) || this;
        _this.resourceType = 'MedicationDispense';
        if (source['identifier']) {
            _this.identifier = source.identifier.map(function (x) { return new Identifier(x); });
        }
        else {
            _this.identifier = [];
        }
        if (source['partOf']) {
            _this.partOf = source.partOf.map(function (x) { return new Reference(x); });
        }
        else {
            _this.partOf = [];
        }
        if (source['status']) {
            _this.status = source.status;
        }
        else {
            _this.status = null;
        }
        if (source['statusReason']) {
            _this.statusReason = source.statusReason;
        }
        else if (source['statusReasonCodeableConcept']) {
            _this.statusReason = new CodeableConcept(source.statusReasonCodeableConcept);
        }
        else if (source['statusReasonReference']) {
            _this.statusReason = new Reference(source.statusReasonReference);
        }
        if (source['category']) {
            _this.category = new CodeableConcept(source.category);
        }
        if (source['medication']) {
            _this.medication = source.medication;
        }
        else if (source['medicationCodeableConcept']) {
            _this.medication = new CodeableConcept(source.medicationCodeableConcept);
        }
        else if (source['medicationReference']) {
            _this.medication = new Reference(source.medicationReference);
        }
        else {
            _this.medication = null;
        }
        if (source['subject']) {
            _this.subject = new Reference(source.subject);
        }
        if (source['context']) {
            _this.context = new Reference(source.context);
        }
        if (source['supportingInformation']) {
            _this.supportingInformation = source.supportingInformation.map(function (x) { return new Reference(x); });
        }
        else {
            _this.supportingInformation = [];
        }
        if (source['performer']) {
            _this.performer = source.performer.map(function (x) { return new MedicationDispensePerformer(x); });
        }
        else {
            _this.performer = [];
        }
        if (source['location']) {
            _this.location = new Reference(source.location);
        }
        if (source['authorizingPrescription']) {
            _this.authorizingPrescription = source.authorizingPrescription.map(function (x) { return new Reference(x); });
        }
        else {
            _this.authorizingPrescription = [];
        }
        if (source['type']) {
            _this.type = new CodeableConcept(source.type);
        }
        if (source['quantity']) {
            _this.quantity = new Quantity(source.quantity);
        }
        if (source['daysSupply']) {
            _this.daysSupply = new Quantity(source.daysSupply);
        }
        if (source['whenPrepared']) {
            _this.whenPrepared = new FhirDateTime({ value: source.whenPrepared });
        }
        if (source['whenHandedOver']) {
            _this.whenHandedOver = new FhirDateTime({ value: source.whenHandedOver });
        }
        if (source['destination']) {
            _this.destination = new Reference(source.destination);
        }
        if (source['receiver']) {
            _this.receiver = source.receiver.map(function (x) { return new Reference(x); });
        }
        else {
            _this.receiver = [];
        }
        if (source['note']) {
            _this.note = source.note.map(function (x) { return new Annotation(x); });
        }
        else {
            _this.note = [];
        }
        if (source['dosageInstruction']) {
            _this.dosageInstruction = source.dosageInstruction.map(function (x) { return new Dosage(x); });
        }
        else {
            _this.dosageInstruction = [];
        }
        if (source['substitution']) {
            _this.substitution = new MedicationDispenseSubstitution(source.substitution);
        }
        if (source['detectedIssue']) {
            _this.detectedIssue = source.detectedIssue.map(function (x) { return new Reference(x); });
        }
        else {
            _this.detectedIssue = [];
        }
        if (source['eventHistory']) {
            _this.eventHistory = source.eventHistory.map(function (x) { return new Reference(x); });
        }
        else {
            _this.eventHistory = [];
        }
        return _this;
    }
    /**
     * Required-bound Value Set for status (MedicationDispense.status)
     */
    MedicationDispense.statusRequiredCoding = function () {
        return MedicationdispenseStatusCodings;
    };
    /**
     * Preferred-bound Value Set for category (MedicationDispense.category)
     */
    MedicationDispense.categoryPreferredCoding = function () {
        return MedicationdispenseCategoryCodings;
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    MedicationDispense.prototype.doModelValidation = function () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        var outcome = _super.prototype.doModelValidation.call(this);
        if (!this['resourceType']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property resourceType:"MedicationDispense" fhir: MedicationDispense.resourceType:"MedicationDispense"', }));
        }
        if (this["identifier"]) {
            this.identifier.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["partOf"]) {
            this.partOf.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (!this['status']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property status:MedicationdispenseStatusCodeType fhir: MedicationDispense.status:code', }));
        }
        if (this["category"]) {
            (_a = outcome.issue).push.apply(_a, this.category.doModelValidation().issue);
        }
        if (!this['medication']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property medication: fhir: MedicationDispense.medication[x]:', }));
        }
        if (this["subject"]) {
            (_b = outcome.issue).push.apply(_b, this.subject.doModelValidation().issue);
        }
        if (this["context"]) {
            (_c = outcome.issue).push.apply(_c, this.context.doModelValidation().issue);
        }
        if (this["supportingInformation"]) {
            this.supportingInformation.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["performer"]) {
            this.performer.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["location"]) {
            (_d = outcome.issue).push.apply(_d, this.location.doModelValidation().issue);
        }
        if (this["authorizingPrescription"]) {
            this.authorizingPrescription.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["type"]) {
            (_e = outcome.issue).push.apply(_e, this.type.doModelValidation().issue);
        }
        if (this["quantity"]) {
            (_f = outcome.issue).push.apply(_f, this.quantity.doModelValidation().issue);
        }
        if (this["daysSupply"]) {
            (_g = outcome.issue).push.apply(_g, this.daysSupply.doModelValidation().issue);
        }
        if (this["whenPrepared"]) {
            (_h = outcome.issue).push.apply(_h, this.whenPrepared.doModelValidation().issue);
        }
        if (this["whenHandedOver"]) {
            (_j = outcome.issue).push.apply(_j, this.whenHandedOver.doModelValidation().issue);
        }
        if (this["destination"]) {
            (_k = outcome.issue).push.apply(_k, this.destination.doModelValidation().issue);
        }
        if (this["receiver"]) {
            this.receiver.forEach(function (x) {
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
        if (this["dosageInstruction"]) {
            this.dosageInstruction.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["substitution"]) {
            (_l = outcome.issue).push.apply(_l, this.substitution.doModelValidation().issue);
        }
        if (this["detectedIssue"]) {
            this.detectedIssue.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["eventHistory"]) {
            this.eventHistory.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        return outcome;
    };
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    MedicationDispense._fts_dataType = 'MedicationDispense';
    /**
     * Internal flag to properly serialize choice-type element MedicationDispense.statusReason[x]
     */
    MedicationDispense._fts_statusReasonIsChoice = true;
    /**
     * Internal flag to properly serialize choice-type element MedicationDispense.medication[x]
     */
    MedicationDispense._fts_medicationIsChoice = true;
    return MedicationDispense;
}(DomainResource));

export { MedicationDispense, MedicationDispensePerformer, MedicationDispenseSubstitution };
//# sourceMappingURL=MedicationDispense.js.map