/*! @fhir-typescript/r4-core v0.0.11-beta.2 2022-05-18 */
'use strict';
import { __extends } from '../_virtual/_tslib.js';
import { EncounterStatusCodings } from '../fhirValueSets/EncounterStatusCodings.js';
import { V3ActEncounterCodeCodings } from '../fhirValueSets/V3ActEncounterCodeCodings.js';
import { EncounterParticipantTypeCodings } from '../fhirValueSets/EncounterParticipantTypeCodings.js';
import { DiagnosisRoleCodings } from '../fhirValueSets/DiagnosisRoleCodings.js';
import { EncounterAdmitSourceCodings } from '../fhirValueSets/EncounterAdmitSourceCodings.js';
import { EncounterSpecialCourtesyCodings } from '../fhirValueSets/EncounterSpecialCourtesyCodings.js';
import { EncounterSpecialArrangementsCodings } from '../fhirValueSets/EncounterSpecialArrangementsCodings.js';
import { EncounterLocationStatusCodings } from '../fhirValueSets/EncounterLocationStatusCodings.js';
import { EncounterReasonCodings } from '../fhirValueSets/EncounterReasonCodings.js';
import { IssueTypeCodes } from '../fhirValueSets/IssueTypeCodes.js';
import { IssueSeverityCodes } from '../fhirValueSets/IssueSeverityCodes.js';
import { OperationOutcomeIssue } from './OperationOutcome.js';
import { BackboneElement } from './BackboneElement.js';
import { DomainResource } from './DomainResource.js';
import { Period } from './Period.js';
import { Coding } from './Coding.js';
import { CodeableConcept } from './CodeableConcept.js';
import { Reference } from './Reference.js';
import { FhirPositiveInt } from './FhirPositiveInt.js';
import { Identifier } from './Identifier.js';
import { Duration } from './Duration.js';

// <auto-generated/>
/**
 * The current status is always found in the current version of the resource, not the status history.
 */
var EncounterStatusHistory = /** @class */ (function (_super) {
    __extends(EncounterStatusHistory, _super);
    /**
     * Default constructor for EncounterStatusHistory - initializes any required elements to null if a value is not provided.
     */
    function EncounterStatusHistory(source, options) {
        if (source === void 0) { source = {}; }
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, source, options) || this;
        if (source['status']) {
            _this.status = source.status;
        }
        else {
            _this.status = null;
        }
        if (source['period']) {
            _this.period = new Period(source.period);
        }
        else {
            _this.period = null;
        }
        return _this;
    }
    /**
     * Required-bound Value Set for status (Encounter.statusHistory.status)
     */
    EncounterStatusHistory.statusRequiredCoding = function () {
        return EncounterStatusCodings;
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    EncounterStatusHistory.prototype.doModelValidation = function () {
        var _a;
        var outcome = _super.prototype.doModelValidation.call(this);
        if (!this['status']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property status:EncounterStatusCodeType fhir: Encounter.statusHistory.status:code', }));
        }
        if (!this['period']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property period:fhir.Period fhir: Encounter.statusHistory.period:Period', }));
        }
        if (this["period"]) {
            (_a = outcome.issue).push.apply(_a, this.period.doModelValidation().issue);
        }
        return outcome;
    };
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    EncounterStatusHistory._fts_dataType = 'EncounterStatusHistory';
    return EncounterStatusHistory;
}(BackboneElement));
/**
 * The class history permits the tracking of the encounters transitions without needing to go  through the resource history.  This would be used for a case where an admission starts of as an emergency encounter, then transitions into an inpatient scenario. Doing this and not restarting a new encounter ensures that any lab/diagnostic results can more easily follow the patient and not require re-processing and not get lost or cancelled during a kind of discharge from emergency to inpatient.
 */
var EncounterClassHistory = /** @class */ (function (_super) {
    __extends(EncounterClassHistory, _super);
    /**
     * Default constructor for EncounterClassHistory - initializes any required elements to null if a value is not provided.
     */
    function EncounterClassHistory(source, options) {
        if (source === void 0) { source = {}; }
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, source, options) || this;
        if (source['class']) {
            _this.class = new Coding(source.class);
        }
        else {
            _this.class = null;
        }
        if (source['period']) {
            _this.period = new Period(source.period);
        }
        else {
            _this.period = null;
        }
        return _this;
    }
    /**
     * Extensible-bound Value Set for class (Encounter.classHistory.class)
     */
    EncounterClassHistory.classExtensibleCoding = function () {
        return V3ActEncounterCodeCodings;
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    EncounterClassHistory.prototype.doModelValidation = function () {
        var _a, _b;
        var outcome = _super.prototype.doModelValidation.call(this);
        if (!this['class']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property class:fhir.Coding fhir: Encounter.classHistory.class:Coding', }));
        }
        if (this["class"]) {
            (_a = outcome.issue).push.apply(_a, this.class.doModelValidation().issue);
        }
        if (!this['period']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property period:fhir.Period fhir: Encounter.classHistory.period:Period', }));
        }
        if (this["period"]) {
            (_b = outcome.issue).push.apply(_b, this.period.doModelValidation().issue);
        }
        return outcome;
    };
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    EncounterClassHistory._fts_dataType = 'EncounterClassHistory';
    return EncounterClassHistory;
}(BackboneElement));
/**
 * The list of people responsible for providing the service.
 */
var EncounterParticipant = /** @class */ (function (_super) {
    __extends(EncounterParticipant, _super);
    /**
     * Default constructor for EncounterParticipant - initializes any required elements to null if a value is not provided.
     */
    function EncounterParticipant(source, options) {
        if (source === void 0) { source = {}; }
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, source, options) || this;
        if (source['type']) {
            _this.type = source.type.map(function (x) { return new CodeableConcept(x); });
        }
        else {
            _this.type = [];
        }
        if (source['period']) {
            _this.period = new Period(source.period);
        }
        if (source['individual']) {
            _this.individual = new Reference(source.individual);
        }
        return _this;
    }
    /**
     * Extensible-bound Value Set for type (Encounter.participant.type)
     */
    EncounterParticipant.typeExtensibleCoding = function () {
        return EncounterParticipantTypeCodings;
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    EncounterParticipant.prototype.doModelValidation = function () {
        var _a, _b;
        var outcome = _super.prototype.doModelValidation.call(this);
        if (this["type"]) {
            this.type.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["period"]) {
            (_a = outcome.issue).push.apply(_a, this.period.doModelValidation().issue);
        }
        if (this["individual"]) {
            (_b = outcome.issue).push.apply(_b, this.individual.doModelValidation().issue);
        }
        return outcome;
    };
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    EncounterParticipant._fts_dataType = 'EncounterParticipant';
    return EncounterParticipant;
}(BackboneElement));
/**
 * The list of diagnosis relevant to this encounter.
 */
var EncounterDiagnosis = /** @class */ (function (_super) {
    __extends(EncounterDiagnosis, _super);
    /**
     * Default constructor for EncounterDiagnosis - initializes any required elements to null if a value is not provided.
     */
    function EncounterDiagnosis(source, options) {
        if (source === void 0) { source = {}; }
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, source, options) || this;
        if (source['condition']) {
            _this.condition = new Reference(source.condition);
        }
        else {
            _this.condition = null;
        }
        if (source['use']) {
            _this.use = new CodeableConcept(source.use);
        }
        if (source['rank']) {
            _this.rank = new FhirPositiveInt({ value: source.rank });
        }
        return _this;
    }
    /**
     * Preferred-bound Value Set for use (Encounter.diagnosis.use)
     */
    EncounterDiagnosis.usePreferredCoding = function () {
        return DiagnosisRoleCodings;
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    EncounterDiagnosis.prototype.doModelValidation = function () {
        var _a, _b, _c;
        var outcome = _super.prototype.doModelValidation.call(this);
        if (!this['condition']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property condition:fhir.Reference fhir: Encounter.diagnosis.condition:Reference', }));
        }
        if (this["condition"]) {
            (_a = outcome.issue).push.apply(_a, this.condition.doModelValidation().issue);
        }
        if (this["use"]) {
            (_b = outcome.issue).push.apply(_b, this.use.doModelValidation().issue);
        }
        if (this["rank"]) {
            (_c = outcome.issue).push.apply(_c, this.rank.doModelValidation().issue);
        }
        return outcome;
    };
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    EncounterDiagnosis._fts_dataType = 'EncounterDiagnosis';
    return EncounterDiagnosis;
}(BackboneElement));
/**
 * An Encounter may cover more than just the inpatient stay. Contexts such as outpatients, community clinics, and aged care facilities are also included.
 * The duration recorded in the period of this encounter covers the entire scope of this hospitalization record.
 */
var EncounterHospitalization = /** @class */ (function (_super) {
    __extends(EncounterHospitalization, _super);
    /**
     * Default constructor for EncounterHospitalization - initializes any required elements to null if a value is not provided.
     */
    function EncounterHospitalization(source, options) {
        if (source === void 0) { source = {}; }
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, source, options) || this;
        if (source['preAdmissionIdentifier']) {
            _this.preAdmissionIdentifier = new Identifier(source.preAdmissionIdentifier);
        }
        if (source['origin']) {
            _this.origin = new Reference(source.origin);
        }
        if (source['admitSource']) {
            _this.admitSource = new CodeableConcept(source.admitSource);
        }
        if (source['reAdmission']) {
            _this.reAdmission = new CodeableConcept(source.reAdmission);
        }
        if (source['dietPreference']) {
            _this.dietPreference = source.dietPreference.map(function (x) { return new CodeableConcept(x); });
        }
        else {
            _this.dietPreference = [];
        }
        if (source['specialCourtesy']) {
            _this.specialCourtesy = source.specialCourtesy.map(function (x) { return new CodeableConcept(x); });
        }
        else {
            _this.specialCourtesy = [];
        }
        if (source['specialArrangement']) {
            _this.specialArrangement = source.specialArrangement.map(function (x) { return new CodeableConcept(x); });
        }
        else {
            _this.specialArrangement = [];
        }
        if (source['destination']) {
            _this.destination = new Reference(source.destination);
        }
        if (source['dischargeDisposition']) {
            _this.dischargeDisposition = new CodeableConcept(source.dischargeDisposition);
        }
        return _this;
    }
    /**
     * Preferred-bound Value Set for admitSource (Encounter.hospitalization.admitSource)
     */
    EncounterHospitalization.admitSourcePreferredCoding = function () {
        return EncounterAdmitSourceCodings;
    };
    /**
     * Preferred-bound Value Set for specialCourtesy (Encounter.hospitalization.specialCourtesy)
     */
    EncounterHospitalization.specialCourtesyPreferredCoding = function () {
        return EncounterSpecialCourtesyCodings;
    };
    /**
     * Preferred-bound Value Set for specialArrangement (Encounter.hospitalization.specialArrangement)
     */
    EncounterHospitalization.specialArrangementPreferredCoding = function () {
        return EncounterSpecialArrangementsCodings;
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    EncounterHospitalization.prototype.doModelValidation = function () {
        var _a, _b, _c, _d, _e, _f;
        var outcome = _super.prototype.doModelValidation.call(this);
        if (this["preAdmissionIdentifier"]) {
            (_a = outcome.issue).push.apply(_a, this.preAdmissionIdentifier.doModelValidation().issue);
        }
        if (this["origin"]) {
            (_b = outcome.issue).push.apply(_b, this.origin.doModelValidation().issue);
        }
        if (this["admitSource"]) {
            (_c = outcome.issue).push.apply(_c, this.admitSource.doModelValidation().issue);
        }
        if (this["reAdmission"]) {
            (_d = outcome.issue).push.apply(_d, this.reAdmission.doModelValidation().issue);
        }
        if (this["dietPreference"]) {
            this.dietPreference.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["specialCourtesy"]) {
            this.specialCourtesy.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["specialArrangement"]) {
            this.specialArrangement.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["destination"]) {
            (_e = outcome.issue).push.apply(_e, this.destination.doModelValidation().issue);
        }
        if (this["dischargeDisposition"]) {
            (_f = outcome.issue).push.apply(_f, this.dischargeDisposition.doModelValidation().issue);
        }
        return outcome;
    };
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    EncounterHospitalization._fts_dataType = 'EncounterHospitalization';
    return EncounterHospitalization;
}(BackboneElement));
/**
 * Virtual encounters can be recorded in the Encounter by specifying a location reference to a location of type "kind" such as "client's home" and an encounter.class = "virtual".
 */
var EncounterLocation = /** @class */ (function (_super) {
    __extends(EncounterLocation, _super);
    /**
     * Default constructor for EncounterLocation - initializes any required elements to null if a value is not provided.
     */
    function EncounterLocation(source, options) {
        if (source === void 0) { source = {}; }
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, source, options) || this;
        if (source['location']) {
            _this.location = new Reference(source.location);
        }
        else {
            _this.location = null;
        }
        if (source['status']) {
            _this.status = source.status;
        }
        if (source['physicalType']) {
            _this.physicalType = new CodeableConcept(source.physicalType);
        }
        if (source['period']) {
            _this.period = new Period(source.period);
        }
        return _this;
    }
    /**
     * Required-bound Value Set for status (Encounter.location.status)
     */
    EncounterLocation.statusRequiredCoding = function () {
        return EncounterLocationStatusCodings;
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    EncounterLocation.prototype.doModelValidation = function () {
        var _a, _b, _c;
        var outcome = _super.prototype.doModelValidation.call(this);
        if (!this['location']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property location:fhir.Reference fhir: Encounter.location.location:Reference', }));
        }
        if (this["location"]) {
            (_a = outcome.issue).push.apply(_a, this.location.doModelValidation().issue);
        }
        if (this["physicalType"]) {
            (_b = outcome.issue).push.apply(_b, this.physicalType.doModelValidation().issue);
        }
        if (this["period"]) {
            (_c = outcome.issue).push.apply(_c, this.period.doModelValidation().issue);
        }
        return outcome;
    };
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    EncounterLocation._fts_dataType = 'EncounterLocation';
    return EncounterLocation;
}(BackboneElement));
/**
 * An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient.
 */
var Encounter = /** @class */ (function (_super) {
    __extends(Encounter, _super);
    /**
     * Default constructor for Encounter - initializes any required elements to null if a value is not provided.
     */
    function Encounter(source, options) {
        if (source === void 0) { source = {}; }
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, source, options) || this;
        _this.resourceType = 'Encounter';
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
        if (source['statusHistory']) {
            _this.statusHistory = source.statusHistory.map(function (x) { return new EncounterStatusHistory(x); });
        }
        else {
            _this.statusHistory = [];
        }
        if (source['class']) {
            _this.class = new Coding(source.class);
        }
        else {
            _this.class = null;
        }
        if (source['classHistory']) {
            _this.classHistory = source.classHistory.map(function (x) { return new EncounterClassHistory(x); });
        }
        else {
            _this.classHistory = [];
        }
        if (source['type']) {
            _this.type = source.type.map(function (x) { return new CodeableConcept(x); });
        }
        else {
            _this.type = [];
        }
        if (source['serviceType']) {
            _this.serviceType = new CodeableConcept(source.serviceType);
        }
        if (source['priority']) {
            _this.priority = new CodeableConcept(source.priority);
        }
        if (source['subject']) {
            _this.subject = new Reference(source.subject);
        }
        if (source['episodeOfCare']) {
            _this.episodeOfCare = source.episodeOfCare.map(function (x) { return new Reference(x); });
        }
        else {
            _this.episodeOfCare = [];
        }
        if (source['basedOn']) {
            _this.basedOn = source.basedOn.map(function (x) { return new Reference(x); });
        }
        else {
            _this.basedOn = [];
        }
        if (source['participant']) {
            _this.participant = source.participant.map(function (x) { return new EncounterParticipant(x); });
        }
        else {
            _this.participant = [];
        }
        if (source['appointment']) {
            _this.appointment = source.appointment.map(function (x) { return new Reference(x); });
        }
        else {
            _this.appointment = [];
        }
        if (source['period']) {
            _this.period = new Period(source.period);
        }
        if (source['length']) {
            _this.length = new Duration(source.length);
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
        if (source['diagnosis']) {
            _this.diagnosis = source.diagnosis.map(function (x) { return new EncounterDiagnosis(x); });
        }
        else {
            _this.diagnosis = [];
        }
        if (source['account']) {
            _this.account = source.account.map(function (x) { return new Reference(x); });
        }
        else {
            _this.account = [];
        }
        if (source['hospitalization']) {
            _this.hospitalization = new EncounterHospitalization(source.hospitalization);
        }
        if (source['location']) {
            _this.location = source.location.map(function (x) { return new EncounterLocation(x); });
        }
        else {
            _this.location = [];
        }
        if (source['serviceProvider']) {
            _this.serviceProvider = new Reference(source.serviceProvider);
        }
        if (source['partOf']) {
            _this.partOf = new Reference(source.partOf);
        }
        return _this;
    }
    /**
     * Required-bound Value Set for status (Encounter.status)
     */
    Encounter.statusRequiredCoding = function () {
        return EncounterStatusCodings;
    };
    /**
     * Extensible-bound Value Set for class (Encounter.class)
     */
    Encounter.classExtensibleCoding = function () {
        return V3ActEncounterCodeCodings;
    };
    /**
     * Preferred-bound Value Set for reasonCode (Encounter.reasonCode)
     */
    Encounter.reasonCodePreferredCoding = function () {
        return EncounterReasonCodings;
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    Encounter.prototype.doModelValidation = function () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        var outcome = _super.prototype.doModelValidation.call(this);
        if (!this['resourceType']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property resourceType:"Encounter" fhir: Encounter.resourceType:"Encounter"', }));
        }
        if (this["identifier"]) {
            this.identifier.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (!this['status']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property status:EncounterStatusCodeType fhir: Encounter.status:code', }));
        }
        if (this["statusHistory"]) {
            this.statusHistory.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (!this['class']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property class:fhir.Coding fhir: Encounter.class:Coding', }));
        }
        if (this["class"]) {
            (_a = outcome.issue).push.apply(_a, this.class.doModelValidation().issue);
        }
        if (this["classHistory"]) {
            this.classHistory.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["type"]) {
            this.type.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["serviceType"]) {
            (_b = outcome.issue).push.apply(_b, this.serviceType.doModelValidation().issue);
        }
        if (this["priority"]) {
            (_c = outcome.issue).push.apply(_c, this.priority.doModelValidation().issue);
        }
        if (this["subject"]) {
            (_d = outcome.issue).push.apply(_d, this.subject.doModelValidation().issue);
        }
        if (this["episodeOfCare"]) {
            this.episodeOfCare.forEach(function (x) {
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
        if (this["participant"]) {
            this.participant.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["appointment"]) {
            this.appointment.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["period"]) {
            (_e = outcome.issue).push.apply(_e, this.period.doModelValidation().issue);
        }
        if (this["length"]) {
            (_f = outcome.issue).push.apply(_f, this.length.doModelValidation().issue);
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
        if (this["diagnosis"]) {
            this.diagnosis.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["account"]) {
            this.account.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["hospitalization"]) {
            (_g = outcome.issue).push.apply(_g, this.hospitalization.doModelValidation().issue);
        }
        if (this["location"]) {
            this.location.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["serviceProvider"]) {
            (_h = outcome.issue).push.apply(_h, this.serviceProvider.doModelValidation().issue);
        }
        if (this["partOf"]) {
            (_j = outcome.issue).push.apply(_j, this.partOf.doModelValidation().issue);
        }
        return outcome;
    };
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    Encounter._fts_dataType = 'Encounter';
    return Encounter;
}(DomainResource));

export { Encounter, EncounterClassHistory, EncounterDiagnosis, EncounterHospitalization, EncounterLocation, EncounterParticipant, EncounterStatusHistory };
//# sourceMappingURL=Encounter.js.map
