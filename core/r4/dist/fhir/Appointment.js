/*! @fhir-typescript/r4-core v0.0.11-beta.2 2022-05-18 */
'use strict';
import { __extends } from '../_virtual/_tslib.js';
import { EncounterParticipantTypeCodings } from '../fhirValueSets/EncounterParticipantTypeCodings.js';
import { ParticipantrequiredCodings } from '../fhirValueSets/ParticipantrequiredCodings.js';
import { ParticipationstatusCodings } from '../fhirValueSets/ParticipationstatusCodings.js';
import { AppointmentstatusCodings } from '../fhirValueSets/AppointmentstatusCodings.js';
import { C80PracticeCodesCodings } from '../fhirValueSets/C80PracticeCodesCodings.js';
import { V20276Codings } from '../fhirValueSets/V20276Codings.js';
import { EncounterReasonCodings } from '../fhirValueSets/EncounterReasonCodings.js';
import { IssueTypeCodes } from '../fhirValueSets/IssueTypeCodes.js';
import { IssueSeverityCodes } from '../fhirValueSets/IssueSeverityCodes.js';
import { OperationOutcomeIssue } from './OperationOutcome.js';
import { BackboneElement } from './BackboneElement.js';
import { DomainResource } from './DomainResource.js';
import { CodeableConcept } from './CodeableConcept.js';
import { Reference } from './Reference.js';
import { Period } from './Period.js';
import { Identifier } from './Identifier.js';
import { FhirUnsignedInt } from './FhirUnsignedInt.js';
import { FhirString } from './FhirString.js';
import { FhirInstant } from './FhirInstant.js';
import { FhirPositiveInt } from './FhirPositiveInt.js';
import { FhirDateTime } from './FhirDateTime.js';

// <auto-generated/>
/**
 * List of participants involved in the appointment.
 */
var AppointmentParticipant = /** @class */ (function (_super) {
    __extends(AppointmentParticipant, _super);
    /**
     * Default constructor for AppointmentParticipant - initializes any required elements to null if a value is not provided.
     */
    function AppointmentParticipant(source, options) {
        if (source === void 0) { source = {}; }
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, source, options) || this;
        if (source['type']) {
            _this.type = source.type.map(function (x) { return new CodeableConcept(x); });
        }
        else {
            _this.type = [];
        }
        if (source['actor']) {
            _this.actor = new Reference(source.actor);
        }
        if (source['required']) {
            _this.required = source.required;
        }
        if (source['status']) {
            _this.status = source.status;
        }
        else {
            _this.status = null;
        }
        if (source['period']) {
            _this.period = new Period(source.period);
        }
        return _this;
    }
    /**
     * Extensible-bound Value Set for type (Appointment.participant.type)
     */
    AppointmentParticipant.typeExtensibleCoding = function () {
        return EncounterParticipantTypeCodings;
    };
    /**
     * Required-bound Value Set for required (Appointment.participant.required)
     */
    AppointmentParticipant.requiredRequiredCoding = function () {
        return ParticipantrequiredCodings;
    };
    /**
     * Required-bound Value Set for status (Appointment.participant.status)
     */
    AppointmentParticipant.statusRequiredCoding = function () {
        return ParticipationstatusCodings;
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    AppointmentParticipant.prototype.doModelValidation = function () {
        var _a, _b;
        var outcome = _super.prototype.doModelValidation.call(this);
        if (this["type"]) {
            this.type.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["actor"]) {
            (_a = outcome.issue).push.apply(_a, this.actor.doModelValidation().issue);
        }
        if (!this['status']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property status:ParticipationstatusCodeType fhir: Appointment.participant.status:code', }));
        }
        if (this["period"]) {
            (_b = outcome.issue).push.apply(_b, this.period.doModelValidation().issue);
        }
        return outcome;
    };
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    AppointmentParticipant._fts_dataType = 'AppointmentParticipant';
    return AppointmentParticipant;
}(BackboneElement));
/**
 * A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s).
 */
var Appointment = /** @class */ (function (_super) {
    __extends(Appointment, _super);
    /**
     * Default constructor for Appointment - initializes any required elements to null if a value is not provided.
     */
    function Appointment(source, options) {
        if (source === void 0) { source = {}; }
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, source, options) || this;
        _this.resourceType = 'Appointment';
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
        if (source['cancelationReason']) {
            _this.cancelationReason = new CodeableConcept(source.cancelationReason);
        }
        if (source['serviceCategory']) {
            _this.serviceCategory = source.serviceCategory.map(function (x) { return new CodeableConcept(x); });
        }
        else {
            _this.serviceCategory = [];
        }
        if (source['serviceType']) {
            _this.serviceType = source.serviceType.map(function (x) { return new CodeableConcept(x); });
        }
        else {
            _this.serviceType = [];
        }
        if (source['specialty']) {
            _this.specialty = source.specialty.map(function (x) { return new CodeableConcept(x); });
        }
        else {
            _this.specialty = [];
        }
        if (source['appointmentType']) {
            _this.appointmentType = new CodeableConcept(source.appointmentType);
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
        if (source['priority']) {
            _this.priority = new FhirUnsignedInt({ value: source.priority });
        }
        if (source['description']) {
            _this.description = new FhirString({ value: source.description });
        }
        if (source['supportingInformation']) {
            _this.supportingInformation = source.supportingInformation.map(function (x) { return new Reference(x); });
        }
        else {
            _this.supportingInformation = [];
        }
        if (source['start']) {
            _this.start = new FhirInstant({ value: source.start });
        }
        if (source['end']) {
            _this.end = new FhirInstant({ value: source.end });
        }
        if (source['minutesDuration']) {
            _this.minutesDuration = new FhirPositiveInt({ value: source.minutesDuration });
        }
        if (source['slot']) {
            _this.slot = source.slot.map(function (x) { return new Reference(x); });
        }
        else {
            _this.slot = [];
        }
        if (source['created']) {
            _this.created = new FhirDateTime({ value: source.created });
        }
        if (source['comment']) {
            _this.comment = new FhirString({ value: source.comment });
        }
        if (source['patientInstruction']) {
            _this.patientInstruction = new FhirString({ value: source.patientInstruction });
        }
        if (source['basedOn']) {
            _this.basedOn = source.basedOn.map(function (x) { return new Reference(x); });
        }
        else {
            _this.basedOn = [];
        }
        if (source['participant']) {
            _this.participant = source.participant.map(function (x) { return new AppointmentParticipant(x); });
        }
        else {
            _this.participant = [];
        }
        if (source['requestedPeriod']) {
            _this.requestedPeriod = source.requestedPeriod.map(function (x) { return new Period(x); });
        }
        else {
            _this.requestedPeriod = [];
        }
        return _this;
    }
    /**
     * Required-bound Value Set for status (Appointment.status)
     */
    Appointment.statusRequiredCoding = function () {
        return AppointmentstatusCodings;
    };
    /**
     * Preferred-bound Value Set for specialty (Appointment.specialty)
     */
    Appointment.specialtyPreferredCoding = function () {
        return C80PracticeCodesCodings;
    };
    /**
     * Preferred-bound Value Set for appointmentType (Appointment.appointmentType)
     */
    Appointment.appointmentTypePreferredCoding = function () {
        return V20276Codings;
    };
    /**
     * Preferred-bound Value Set for reasonCode (Appointment.reasonCode)
     */
    Appointment.reasonCodePreferredCoding = function () {
        return EncounterReasonCodings;
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    Appointment.prototype.doModelValidation = function () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        var outcome = _super.prototype.doModelValidation.call(this);
        if (!this['resourceType']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property resourceType:"Appointment" fhir: Appointment.resourceType:"Appointment"', }));
        }
        if (this["identifier"]) {
            this.identifier.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (!this['status']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property status:AppointmentstatusCodeType fhir: Appointment.status:code', }));
        }
        if (this["cancelationReason"]) {
            (_a = outcome.issue).push.apply(_a, this.cancelationReason.doModelValidation().issue);
        }
        if (this["serviceCategory"]) {
            this.serviceCategory.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["serviceType"]) {
            this.serviceType.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["specialty"]) {
            this.specialty.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["appointmentType"]) {
            (_b = outcome.issue).push.apply(_b, this.appointmentType.doModelValidation().issue);
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
        if (this["priority"]) {
            (_c = outcome.issue).push.apply(_c, this.priority.doModelValidation().issue);
        }
        if (this["description"]) {
            (_d = outcome.issue).push.apply(_d, this.description.doModelValidation().issue);
        }
        if (this["supportingInformation"]) {
            this.supportingInformation.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["start"]) {
            (_e = outcome.issue).push.apply(_e, this.start.doModelValidation().issue);
        }
        if (this["end"]) {
            (_f = outcome.issue).push.apply(_f, this.end.doModelValidation().issue);
        }
        if (this["minutesDuration"]) {
            (_g = outcome.issue).push.apply(_g, this.minutesDuration.doModelValidation().issue);
        }
        if (this["slot"]) {
            this.slot.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["created"]) {
            (_h = outcome.issue).push.apply(_h, this.created.doModelValidation().issue);
        }
        if (this["comment"]) {
            (_j = outcome.issue).push.apply(_j, this.comment.doModelValidation().issue);
        }
        if (this["patientInstruction"]) {
            (_k = outcome.issue).push.apply(_k, this.patientInstruction.doModelValidation().issue);
        }
        if (this["basedOn"]) {
            this.basedOn.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (!this['participant']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property participant:fhir.AppointmentParticipant[] fhir: Appointment.participant:participant', }));
        }
        else if (!Array.isArray(this.participant)) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.StructuralIssue, diagnostics: 'Found scalar in array property participant:fhir.AppointmentParticipant[] fhir: Appointment.participant:participant', }));
        }
        else if (this.participant.length === 0) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property participant:fhir.AppointmentParticipant[] fhir: Appointment.participant:participant', }));
        }
        if (this["participant"]) {
            this.participant.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["requestedPeriod"]) {
            this.requestedPeriod.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        return outcome;
    };
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    Appointment._fts_dataType = 'Appointment';
    return Appointment;
}(DomainResource));

export { Appointment, AppointmentParticipant };
//# sourceMappingURL=Appointment.js.map
